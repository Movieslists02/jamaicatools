import { mkdir, writeFile } from "node:fs/promises";
import blogPosts from "../src/data/blogPosts.js";
import tools from "../src/data/tools.js";

const SITE_URL = "https://jamaicatools.com";

const STATIC_PAGES = [
  {
    path: "/",
    changeFrequency: "weekly",
    priority: "1.0",
  },
  {
    path: "/tools",
    changeFrequency: "weekly",
    priority: "0.9",
  },
  {
    path: "/blog",
    changeFrequency: "weekly",
    priority: "0.8",
  },
  {
    path: "/about",
    changeFrequency: "monthly",
    priority: "0.6",
  },
  {
    path: "/contact",
    changeFrequency: "monthly",
    priority: "0.6",
  },
  {
    path: "/faq",
    changeFrequency: "monthly",
    priority: "0.7",
  },
  {
    path: "/privacy",
    changeFrequency: "yearly",
    priority: "0.3",
  },
  {
    path: "/terms",
    changeFrequency: "yearly",
    priority: "0.3",
  },
  {
    path: "/cookies",
    changeFrequency: "yearly",
    priority: "0.3",
  },
  {
    path: "/disclaimer",
    changeFrequency: "yearly",
    priority: "0.3",
  },
  {
    path: "/accessibility",
    changeFrequency: "yearly",
    priority: "0.3",
  },
  {
    path: "/ai-policy",
    changeFrequency: "yearly",
    priority: "0.3",
  },
];

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function createUrlEntry({
  path,
  changeFrequency = "monthly",
  priority = "0.5",
}) {
  return [
    "  <url>",
    `    <loc>${escapeXml(`${SITE_URL}${path}`)}</loc>`,
    `    <changefreq>${changeFrequency}</changefreq>`,
    `    <priority>${priority}</priority>`,
    "  </url>",
  ].join("\n");
}

const toolPages = tools
  .filter((tool) => typeof tool?.slug === "string" && tool.slug.trim())
  .map((tool) => ({
    path: `/tools/${tool.slug.trim()}`,
    changeFrequency: "monthly",
    priority: tool.featured || tool.popular ? "0.8" : "0.7",
  }));

const blogPages = blogPosts
  .filter((post) => typeof post?.slug === "string" && post.slug.trim())
  .map((post) => ({
    path: `/blog/${post.slug.trim()}`,
    changeFrequency: "monthly",
    priority: post.featured ? "0.8" : "0.7",
  }));

const allPages = [...STATIC_PAGES, ...toolPages, ...blogPages];

const uniquePages = Array.from(
  new Map(allPages.map((page) => [page.path, page])).values(),
);

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...uniquePages.map(createUrlEntry),
  "</urlset>",
  "",
].join("\n");

await mkdir("public", {
  recursive: true,
});

await writeFile("public/sitemap.xml", sitemap, "utf8");

console.log(
  `Generated public/sitemap.xml with ${uniquePages.length} URLs.`,
);
