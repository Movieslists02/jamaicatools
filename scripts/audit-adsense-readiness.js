import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

const read = (relativePath) =>
  fs.readFileSync(path.join(root, relativePath), "utf8");

const exists = (relativePath) =>
  fs.existsSync(path.join(root, relativePath));

const toolsSource = read("src/data/tools.js");
const toolContentSource = read("src/data/toolContent.js");
const blogSource = read("src/data/blogPosts.js");
const routesSource = read("src/routes/AppRoutes.jsx");
const indexSource = read("index.html");
const robotsSource = read("public/robots.txt");
const sitemapSource = read("public/sitemap.xml");
const footerSource = read("src/components/layout/Footer.jsx");
const featuredToolsSource = read("src/data/featuredTools.js");

const errors = [];
const warnings = [];
const passes = [];

function pass(message) {
  passes.push(message);
}

function warn(message) {
  warnings.push(message);
}

function fail(message) {
  errors.push(message);
}

const toolSlugs = [
  ...toolsSource.matchAll(/slug:\s*"([^"]+)"/g),
].map((match) => match[1]);

const richToolSlugs = [
  ...toolContentSource.matchAll(/^  "([^"]+)": \{/gm),
].map((match) => match[1]);

const blogSlugs = [
  ...blogSource.matchAll(/slug:\s*"([^"]+)"/g),
].map((match) => match[1]);

const sitemapUrls = [
  ...sitemapSource.matchAll(/<loc>([^<]+)<\/loc>/g),
].map((match) => match[1]);

const publicRoutes = [
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

if (toolSlugs.length === 37) {
  pass("37 tools are registered.");
} else {
  fail(`Expected 37 tools but found ${toolSlugs.length}.`);
}

const missingRichTools = toolSlugs.filter(
  (slug) => !richToolSlugs.includes(slug),
);

if (missingRichTools.length === 0) {
  pass("Every registered tool has rich supporting content.");
} else {
  fail(
    `Missing rich content for: ${missingRichTools.join(", ")}`,
  );
}

if (blogSlugs.length >= 6) {
  pass(`${blogSlugs.length} blog articles are registered.`);
} else {
  warn(`Only ${blogSlugs.length} blog articles are registered.`);
}

const homepageFeaturedSlugs = [
  ...featuredToolsSource.matchAll(/"([^"]+)"/g),
].map((match) => match[1]);

if (homepageFeaturedSlugs.length === 6) {
  pass("Homepage contains exactly 6 featured tool selections.");
} else {
  fail(
    `Expected 6 homepage featured tool selections but found ${homepageFeaturedSlugs.length}.`,
  );
}

const duplicateFeaturedSlugs = homepageFeaturedSlugs.filter(
  (slug, index) => homepageFeaturedSlugs.indexOf(slug) !== index,
);

if (duplicateFeaturedSlugs.length === 0) {
  pass("Homepage featured tool selections contain no duplicates.");
} else {
  fail(
    `Duplicate homepage featured tool selections: ${[
      ...new Set(duplicateFeaturedSlugs),
    ].join(", ")}`,
  );
}

const missingFeaturedTools = homepageFeaturedSlugs.filter(
  (slug) => !toolSlugs.includes(slug),
);

if (missingFeaturedTools.length === 0) {
  pass("Every homepage featured tool exists in the master registry.");
} else {
  fail(
    `Unknown homepage featured tools: ${missingFeaturedTools.join(", ")}`,
  );
}

const toolsWithoutDescriptions = homepageFeaturedSlugs.filter((slug) => {
  const escapedSlug = slug.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  const toolBlockMatch = toolsSource.match(
    new RegExp(
      `slug:\\s*"${escapedSlug}"([\\s\\S]*?)(?=\\n\\s*\\{\\s*\\n\\s*id:|\\n\\];)`,
    ),
  );

  if (!toolBlockMatch) {
    return true;
  }

  return !/description:\s*\n?\s*"[^"]+"/.test(toolBlockMatch[0]);
});

if (toolsWithoutDescriptions.length === 0) {
  pass("Every homepage featured tool has a description.");
} else {
  fail(
    `Homepage featured tools missing descriptions: ${toolsWithoutDescriptions.join(", ")}`,
  );
}

for (const route of publicRoutes) {
  const url =
    route === "/"
      ? "https://jamaicatools.com/"
      : `https://jamaicatools.com${route}`;

  if (!sitemapUrls.includes(url)) {
    fail(`Public route missing from sitemap: ${route}`);
  }
}

for (const slug of toolSlugs) {
  const url = `https://jamaicatools.com/tools/${slug}`;

  if (!sitemapUrls.includes(url)) {
    fail(`Tool missing from sitemap: ${slug}`);
  }
}

for (const slug of blogSlugs) {
  const url = `https://jamaicatools.com/blog/${slug}`;

  if (!sitemapUrls.includes(url)) {
    fail(`Blog article missing from sitemap: ${slug}`);
  }
}

if (
  indexSource.includes(
    "pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
  )
) {
  pass("Google AdSense script is present in index.html.");
} else {
  fail("Google AdSense script is missing from index.html.");
}

if (exists("public/ads.txt")) {
  const ads = read("public/ads.txt");

  if (
    ads.includes(
      "google.com, pub-2835262734732695, DIRECT, f08c47fec0942fa0",
    )
  ) {
    pass("ads.txt contains the expected Google publisher entry.");
  } else {
    warn("ads.txt exists but the expected publisher entry was not found.");
  }
} else {
  fail("public/ads.txt is missing.");
}

if (
  robotsSource.includes("User-agent: *") &&
  robotsSource.includes("Allow: /") &&
  robotsSource.includes(
    "Sitemap: https://jamaicatools.com/sitemap.xml",
  )
) {
  pass("robots.txt contains crawler and sitemap directives.");
} else {
  fail("robots.txt is missing expected crawler or sitemap directives.");
}

if (
  robotsSource.includes("Disallow: /api/") &&
  robotsSource.includes("Disallow: /.netlify/")
) {
  pass("Internal API and Netlify paths remain blocked from crawling.");
} else {
  warn("Expected internal crawler exclusions were not found.");
}

if (
  footerSource.includes("Cookie Settings") &&
  footerSource.includes(
    "jamaicatools:open-cookie-preferences",
  )
) {
  pass("Footer exposes Cookie Settings.");
} else {
  fail("Footer Cookie Settings control is missing or disconnected.");
}

const requiredTrustPages = [
  "Privacy",
  "Terms",
  "CookiePolicy",
  "Disclaimer",
  "Accessibility",
  "AIUsagePolicy",
];

for (const pageName of requiredTrustPages) {
  if (routesSource.includes(pageName)) {
    pass(`${pageName} route is registered.`);
  } else {
    fail(`${pageName} route does not appear registered.`);
  }
}

const comingSoonMatches = [
  ...toolContentSource.matchAll(/coming soon/gi),
  ...blogSource.matchAll(/coming soon/gi),
];

if (comingSoonMatches.length === 0) {
  pass("No 'coming soon' text found in rich tool or blog content.");
} else {
  warn(
    `${comingSoonMatches.length} 'coming soon' reference(s) found in public content data.`,
  );
}

const suspiciousPlaceholders = [
  "lorem ipsum",
  "placeholder",
  "todo",
  "replace me",
];

for (const placeholder of suspiciousPlaceholders) {
  const sources = [
    toolsSource,
    toolContentSource,
    blogSource,
  ].join("\n");

  if (sources.toLowerCase().includes(placeholder)) {
    warn(`Possible placeholder content found: "${placeholder}"`);
  }
}

console.log("\nJamaicaTools AdSense readiness audit");
console.log("====================================");

console.log(`\nPasses (${passes.length})`);
for (const message of passes) {
  console.log(`✓ ${message}`);
}

if (warnings.length > 0) {
  console.log(`\nWarnings (${warnings.length})`);
  for (const message of warnings) {
    console.log(`⚠ ${message}`);
  }
}

if (errors.length > 0) {
  console.log(`\nErrors (${errors.length})`);
  for (const message of errors) {
    console.log(`✗ ${message}`);
  }
}

console.log("\nSummary");
console.log("-------");
console.log(`Tools: ${toolSlugs.length}`);
console.log(`Rich tool pages: ${richToolSlugs.length}`);
console.log(`Blog articles: ${blogSlugs.length}`);
console.log(`Sitemap URLs: ${sitemapUrls.length}`);
console.log(`Warnings: ${warnings.length}`);
console.log(`Errors: ${errors.length}`);

if (errors.length > 0) {
  process.exit(1);
}

console.log("\nAdSense readiness audit passed.");
