import { Helmet } from "react-helmet-async";

const SITE_NAME = "JamaicaTools";
const SITE_URL = "https://jamaicatools.com";

const DEFAULT_DESCRIPTION =
  "Free online calculators, PDF tools, image utilities, AI resources and practical guides for Jamaica and the Caribbean.";

function normalizePath(path) {
  if (!path || path === "/") {
    return "/";
  }

  return path.startsWith("/") ? path : `/${path}`;
}

function createCanonicalUrl(path) {
  const normalizedPath = normalizePath(path);

  return normalizedPath === "/"
    ? `${SITE_URL}/`
    : `${SITE_URL}${normalizedPath}`;
}

function createImageUrl(image) {
  if (!image) {
    return "";
  }

  if (
    image.startsWith("https://") ||
    image.startsWith("http://")
  ) {
    return image;
  }

  return `${SITE_URL}${normalizePath(image)}`;
}

function createFullTitle(title) {
  if (!title) {
    return `${SITE_NAME} | Free Online Tools for the Caribbean`;
  }

  const normalizedTitle = title.trim();

  if (
    normalizedTitle.toLowerCase().endsWith(
      `| ${SITE_NAME}`.toLowerCase(),
    )
  ) {
    return normalizedTitle;
  }

  return `${normalizedTitle} | ${SITE_NAME}`;
}

function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  canonical = "/",
  image = "",
  imageAlt = "",
  type = "website",
  noIndex = false,
  publishedTime = "",
  modifiedTime = "",
  author = "",
  section = "",
  keywords = [],
}) {
  const fullTitle = createFullTitle(title);
  const canonicalUrl = createCanonicalUrl(canonical);
  const imageUrl = createImageUrl(image);

  const keywordContent = Array.isArray(keywords)
    ? keywords.filter(Boolean).join(", ")
    : keywords;

  return (
    <Helmet>
      <title>{fullTitle}</title>

      <meta name="description" content={description} />

      {keywordContent && (
        <meta name="keywords" content={keywordContent} />
      )}

      <link rel="canonical" href={canonicalUrl} />

      <meta
        name="robots"
        content={
          noIndex
            ? "noindex, nofollow"
            : "index, follow, max-image-preview:large"
        }
      />

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />

      {imageUrl && (
        <meta property="og:image" content={imageUrl} />
      )}

      {imageUrl && (
        <meta
          property="og:image:alt"
          content={
            imageAlt ||
            `${title || SITE_NAME} social preview`
          }
        />
      )}

      <meta
        name="twitter:card"
        content={imageUrl ? "summary_large_image" : "summary"}
      />
      <meta name="twitter:title" content={fullTitle} />
      <meta
        name="twitter:description"
        content={description}
      />

      {imageUrl && (
        <meta name="twitter:image" content={imageUrl} />
      )}

      {imageUrl && (
        <meta
          name="twitter:image:alt"
          content={
            imageAlt ||
            `${title || SITE_NAME} social preview`
          }
        />
      )}

      {type === "article" && publishedTime && (
        <meta
          property="article:published_time"
          content={publishedTime}
        />
      )}

      {type === "article" && modifiedTime && (
        <meta
          property="article:modified_time"
          content={modifiedTime}
        />
      )}

      {type === "article" && author && (
        <meta property="article:author" content={author} />
      )}

      {type === "article" && section && (
        <meta property="article:section" content={section} />
      )}
    </Helmet>
  );
}

export default SEO;
