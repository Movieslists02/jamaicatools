import { access, readFile } from "node:fs/promises";
import blogPosts from "../src/data/blogPosts.js";
import tools from "../src/data/tools.js";

const SITE_URL = "https://jamaicatools.com";

const REQUIRED_STATIC_ROUTES = [
  "/",
  "/tools",
  "/blog",
  "/about",
  "/contact",
  "/faq",
  "/privacy",
  "/terms",
  "/cookies",
  "/disclaimer",
  "/accessibility",
  "/ai-policy",
];

const REQUIRED_PUBLIC_FILES = [
  "public/favicon.svg",
  "public/robots.txt",
  "public/sitemap.xml",
];

const errors = [];
const warnings = [];

function reportError(message) {
  errors.push(message);
}

function reportWarning(message) {
  warnings.push(message);
}

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function isValidSlug(value) {
  return (
    isNonEmptyString(value) &&
    /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value)
  );
}

function findDuplicates(values) {
  const counts = new Map();

  for (const value of values) {
    counts.set(value, (counts.get(value) ?? 0) + 1);
  }

  return [...counts.entries()]
    .filter(([, count]) => count > 1)
    .map(([value]) => value);
}

function auditTools() {
  const slugs = tools.map((tool) => tool.slug);
  const ids = tools.map((tool) => tool.id);

  for (const duplicate of findDuplicates(slugs)) {
    reportError(`Duplicate tool slug: "${duplicate}".`);
  }

  for (const duplicate of findDuplicates(ids)) {
    reportError(`Duplicate tool id: "${duplicate}".`);
  }

  for (const tool of tools) {
    const label = tool.slug || tool.title || `tool id ${tool.id}`;

    if (!Number.isInteger(tool.id)) {
      reportError(`${label}: id must be an integer.`);
    }

    if (!isValidSlug(tool.slug)) {
      reportError(`${label}: invalid or missing slug.`);
    }

    if (!isNonEmptyString(tool.title)) {
      reportError(`${label}: missing title.`);
    }

    if (!isNonEmptyString(tool.category)) {
      reportError(`${label}: missing category.`);
    }

    if (!isNonEmptyString(tool.description)) {
      reportError(`${label}: missing description.`);
    }

    if (!isNonEmptyString(tool.icon)) {
      reportError(`${label}: missing icon.`);
    }

    if (!Array.isArray(tool.keywords) || tool.keywords.length === 0) {
      reportError(`${label}: missing keywords.`);
    }

    if (!isNonEmptyString(tool.seoTitle)) {
      reportError(`${label}: missing seoTitle.`);
    }

    if (!isNonEmptyString(tool.seoDescription)) {
      reportError(`${label}: missing seoDescription.`);
    }

    if (
      isNonEmptyString(tool.seoDescription) &&
      tool.seoDescription.length > 170
    ) {
      reportWarning(
        `${label}: seoDescription is ${tool.seoDescription.length} characters.`,
      );
    }

    if (
      !Array.isArray(tool.relatedTools)
    ) {
      reportWarning(`${label}: relatedTools should be an array.`);
    }
  }

  const knownSlugs = new Set(slugs);

  for (const tool of tools) {
    for (const relatedSlug of tool.relatedTools ?? []) {
      if (!knownSlugs.has(relatedSlug)) {
        reportWarning(
          `${tool.slug}: related tool "${relatedSlug}" does not exist.`,
        );
      }

      if (relatedSlug === tool.slug) {
        reportWarning(
          `${tool.slug}: contains itself in relatedTools.`,
        );
      }
    }
  }
}

function auditBlogPosts() {
  const slugs = blogPosts.map((post) => post.slug);
  const ids = blogPosts.map((post) => post.id);
  const knownToolSlugs = new Set(tools.map((tool) => tool.slug));

  for (const duplicate of findDuplicates(slugs)) {
    reportError(`Duplicate blog slug: "${duplicate}".`);
  }

  for (const duplicate of findDuplicates(ids)) {
    reportError(`Duplicate blog id: "${duplicate}".`);
  }

  for (const post of blogPosts) {
    const label = post.slug || post.title || `blog id ${post.id}`;

    if (!Number.isInteger(post.id)) {
      reportError(`${label}: id must be an integer.`);
    }

    if (!isValidSlug(post.slug)) {
      reportError(`${label}: invalid or missing slug.`);
    }

    if (!isNonEmptyString(post.title)) {
      reportError(`${label}: missing title.`);
    }

    if (!isNonEmptyString(post.excerpt)) {
      reportError(`${label}: missing excerpt.`);
    }

    if (!isNonEmptyString(post.category)) {
      reportError(`${label}: missing category.`);
    }

    if (!isNonEmptyString(post.author)) {
      reportError(`${label}: missing author.`);
    }

    if (!isNonEmptyString(post.publishedAt)) {
      reportError(`${label}: missing publishedAt.`);
    }

    if (!isNonEmptyString(post.updatedAt)) {
      reportError(`${label}: missing updatedAt.`);
    }

    if (
      !Number.isInteger(post.readingTime) ||
      post.readingTime <= 0
    ) {
      reportError(`${label}: invalid readingTime.`);
    }

    if (!Array.isArray(post.keywords) || post.keywords.length === 0) {
      reportError(`${label}: missing keywords.`);
    }

    if (!Array.isArray(post.sections) || post.sections.length === 0) {
      reportError(`${label}: missing article sections.`);
    }

    for (const relatedSlug of post.relatedTools ?? []) {
      if (!knownToolSlugs.has(relatedSlug)) {
        reportWarning(
          `${post.slug}: related tool "${relatedSlug}" does not exist.`,
        );
      }
    }
  }
}

async function extractToolComponentSlugs() {
  const content = await readFile(
    "src/pages/ToolDetails.jsx",
    "utf8",
  );

  const mapMatch = content.match(
    /const toolComponents = \{([\s\S]*?)\n\};/,
  );

  if (!mapMatch) {
    reportError(
      "Could not locate the toolComponents map in ToolDetails.jsx.",
    );

    return [];
  }

  return [...mapMatch[1].matchAll(/"([^"]+)":\s*[A-Za-z0-9_]+/g)]
    .map((match) => match[1]);
}

async function auditToolComponentMap() {
  const mappedSlugs = await extractToolComponentSlugs();
  const mappedSet = new Set(mappedSlugs);
  const toolSlugs = new Set(tools.map((tool) => tool.slug));

  for (const duplicate of findDuplicates(mappedSlugs)) {
    reportError(
      `Duplicate ToolDetails component mapping: "${duplicate}".`,
    );
  }

  for (const tool of tools) {
    if (!mappedSet.has(tool.slug)) {
      reportWarning(
        `${tool.slug}: listed in tools.js but has no component mapping.`,
      );
    }
  }

  for (const mappedSlug of mappedSet) {
    if (!toolSlugs.has(mappedSlug)) {
      reportError(
        `${mappedSlug}: component mapping exists but no tools.js entry was found.`,
      );
    }
  }
}

async function auditRoutes() {
  const content = await readFile(
    "src/routes/AppRoutes.jsx",
    "utf8",
  );

  for (const route of REQUIRED_STATIC_ROUTES) {
    if (route === "/") {
      if (!content.includes('path="/"')) {
        reportError('Missing required route: "/".');
      }

      continue;
    }

    if (!content.includes(`path="${route}"`)) {
      reportError(`Missing required route: "${route}".`);
    }
  }

  if (!content.includes('path="/tools/:slug"')) {
    reportError('Missing dynamic route: "/tools/:slug".');
  }

  if (!content.includes('path="/blog/:slug"')) {
    reportError('Missing dynamic route: "/blog/:slug".');
  }

  if (!content.includes('path="*"')) {
    reportError('Missing wildcard 404 route: "*".');
  }
}

async function auditSitemap() {
  const sitemap = await readFile(
    "public/sitemap.xml",
    "utf8",
  );

  const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)]
    .map((match) => match[1]);

  for (const duplicate of findDuplicates(urls)) {
    reportError(`Duplicate sitemap URL: "${duplicate}".`);
  }

  const expectedUrls = [
    ...REQUIRED_STATIC_ROUTES.map((route) =>
      route === "/"
        ? `${SITE_URL}/`
        : `${SITE_URL}${route}`,
    ),
    ...tools.map((tool) =>
      `${SITE_URL}/tools/${tool.slug}`,
    ),
    ...blogPosts.map((post) =>
      `${SITE_URL}/blog/${post.slug}`,
    ),
  ];

  for (const url of expectedUrls) {
    if (!urls.includes(url)) {
      reportError(`Missing sitemap URL: "${url}".`);
    }
  }

  for (const url of urls) {
    if (!expectedUrls.includes(url)) {
      reportWarning(`Unexpected sitemap URL: "${url}".`);
    }
  }

  if (urls.length !== expectedUrls.length) {
    reportError(
      `Sitemap contains ${urls.length} URLs; expected ${expectedUrls.length}.`,
    );
  }
}

async function auditPublicFiles() {
  for (const file of REQUIRED_PUBLIC_FILES) {
    try {
      await access(file);
    } catch {
      reportError(`Missing required public file: "${file}".`);
    }
  }

  const robots = await readFile(
    "public/robots.txt",
    "utf8",
  );

  if (
    !robots.includes(
      "Sitemap: https://jamaicatools.com/sitemap.xml",
    )
  ) {
    reportError(
      "robots.txt does not contain the production sitemap URL.",
    );
  }
}

async function runAudit() {
  auditTools();
  auditBlogPosts();

  await auditToolComponentMap();
  await auditRoutes();
  await auditSitemap();
  await auditPublicFiles();

  console.log("\nJamaicaTools production audit");
  console.log("=============================");

  console.log(`Tools checked: ${tools.length}`);
  console.log(`Blog posts checked: ${blogPosts.length}`);

  if (warnings.length > 0) {
    console.log(`\nWarnings (${warnings.length})`);

    for (const warning of warnings) {
      console.log(`- ${warning}`);
    }
  }

  if (errors.length > 0) {
    console.error(`\nErrors (${errors.length})`);

    for (const error of errors) {
      console.error(`- ${error}`);
    }

    console.error("\nAudit failed.");
    process.exitCode = 1;
    return;
  }

  console.log(
    `\nAudit passed with ${warnings.length} warning${
      warnings.length === 1 ? "" : "s"
    } and no errors.`,
  );
}

await runAudit();
