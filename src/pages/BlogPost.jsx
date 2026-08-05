import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import {
  FiArrowLeft,
  FiArrowRight,
  FiClock,
  FiHome,
  FiTool,
} from "react-icons/fi";
import RelatedPosts from "../components/blog/RelatedPosts";
import tools from "../data/tools";
import {
  getBlogPostBySlug,
  getRelatedBlogPosts,
} from "../data/blogPosts";
import NotFound from "./NotFound";

function formatDate(dateString) {
  return new Intl.DateTimeFormat("en-JM", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(`${dateString}T12:00:00`));
}

function BlogPost() {
  const { slug } = useParams();
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return <NotFound />;
  }

  const relatedPosts = getRelatedBlogPosts(post);

  const relatedTools = post.relatedTools
    .map((toolSlug) => tools.find((tool) => tool.slug === toolSlug))
    .filter(Boolean);

  const articleUrl = `https://jamaicatools.com/blog/${post.slug}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "JamaicaTools",
      url: "https://jamaicatools.com",
    },
    mainEntityOfPage: articleUrl,
  };

  return (
    <>
      <Helmet>
        <title>{post.title} | JamaicaTools</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={articleUrl} />

        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={articleUrl} />
        <meta property="og:type" content="article" />
        <meta
          property="article:published_time"
          content={post.publishedAt}
        />
        <meta
          property="article:modified_time"
          content={post.updatedAt}
        />
        <meta property="article:section" content={post.category} />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main>
        <article>
          <header className="border-b border-slate-200 bg-slate-50 py-14 sm:py-20">
            <div className="mx-auto max-w-4xl px-4">
              <nav
                aria-label="Breadcrumb"
                className="flex flex-wrap items-center gap-2 text-sm text-slate-500"
              >
                <Link
                  to="/"
                  className="inline-flex items-center gap-1 hover:text-green-700"
                >
                  <FiHome />
                  Home
                </Link>

                <span aria-hidden="true">/</span>

                <Link to="/blog" className="hover:text-green-700">
                  Blog
                </Link>

                <span aria-hidden="true">/</span>

                <span className="text-slate-700">{post.category}</span>
              </nav>

              <p className="mt-8 text-sm font-bold uppercase tracking-wider text-green-700">
                {post.category}
              </p>

              <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
                {post.title}
              </h1>

              <p className="mt-6 text-xl leading-8 text-slate-600">
                {post.excerpt}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-slate-200 pt-6 text-sm text-slate-500">
                <span>By {post.author}</span>
                <span>{formatDate(post.publishedAt)}</span>
                <span className="inline-flex items-center gap-1.5">
                  <FiClock />
                  {post.readingTime} min read
                </span>
              </div>
            </div>
          </header>

          <div className="bg-white py-14 sm:py-16">
            <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[minmax(0,1fr)_310px]">
              <div className="mx-auto w-full max-w-3xl">
                <div className="flex min-h-56 items-center justify-center rounded-3xl bg-gradient-to-br from-green-50 to-slate-100">
                  <span className="text-8xl" aria-hidden="true">
                    {post.icon}
                  </span>
                </div>

                <div className="mt-12 space-y-12">
                  {post.sections.map((section) => (
                    <section key={section.heading}>
                      <h2 className="text-3xl font-bold text-slate-900">
                        {section.heading}
                      </h2>

                      {section.paragraphs?.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="mt-5 text-lg leading-8 text-slate-700"
                        >
                          {paragraph}
                        </p>
                      ))}

                      {section.bullets && (
                        <ul className="mt-6 space-y-3">
                          {section.bullets.map((bullet) => (
                            <li
                              key={bullet}
                              className="flex items-start gap-3 text-lg leading-8 text-slate-700"
                            >
                              <span
                                className="mt-3 h-2 w-2 shrink-0 rounded-full bg-green-700"
                                aria-hidden="true"
                              />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </section>
                  ))}
                </div>

                <div className="mt-14 rounded-3xl border border-amber-200 bg-amber-50 p-6">
                  <h2 className="font-bold text-slate-900">
                    Important information
                  </h2>

                  <p className="mt-3 leading-7 text-slate-700">
                    This article provides general educational information. It
                    does not replace professional financial, tax, legal,
                    medical or technical advice. Verify important information
                    before acting on it.
                  </p>
                </div>

                <div className="mt-12 border-t border-slate-200 pt-8">
                  <Link
                    to="/blog"
                    className="inline-flex items-center gap-2 font-semibold text-green-700 hover:text-green-800"
                  >
                    <FiArrowLeft />
                    Back to all articles
                  </Link>
                </div>
              </div>

              <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                  <h2 className="text-xl font-bold text-slate-900">
                    Article details
                  </h2>

                  <dl className="mt-5 space-y-4 text-sm">
                    <div>
                      <dt className="font-semibold text-slate-900">
                        Category
                      </dt>
                      <dd className="mt-1 text-slate-600">
                        {post.category}
                      </dd>
                    </div>

                    <div>
                      <dt className="font-semibold text-slate-900">
                        Published
                      </dt>
                      <dd className="mt-1 text-slate-600">
                        {formatDate(post.publishedAt)}
                      </dd>
                    </div>

                    <div>
                      <dt className="font-semibold text-slate-900">
                        Reading time
                      </dt>
                      <dd className="mt-1 text-slate-600">
                        {post.readingTime} minutes
                      </dd>
                    </div>
                  </dl>
                </div>

                {relatedTools.length > 0 && (
                  <div className="rounded-3xl border border-green-200 bg-green-50 p-6">
                    <div className="flex items-center gap-2">
                      <FiTool className="text-green-700" />
                      <h2 className="text-xl font-bold text-slate-900">
                        Related tools
                      </h2>
                    </div>

                    <div className="mt-5 space-y-3">
                      {relatedTools.map((tool) => (
                        <Link
                          key={tool.id}
                          to={`/tools/${tool.slug}`}
                          className="flex items-center justify-between gap-4 rounded-xl border border-green-200 bg-white px-4 py-3 font-semibold text-slate-700 transition hover:border-green-500 hover:text-green-700"
                        >
                          <span>
                            {tool.icon} {tool.title}
                          </span>
                          <FiArrowRight />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </aside>
            </div>
          </div>
        </article>

        <RelatedPosts posts={relatedPosts} />
      </main>
    </>
  );
}

export default BlogPost;
