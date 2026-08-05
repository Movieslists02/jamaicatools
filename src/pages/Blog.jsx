import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FiSearch, FiX } from "react-icons/fi";
import BlogCard from "../components/blog/BlogCard";
import blogPosts, { blogCategories } from "../data/blogPosts";

function Blog() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const featuredPost =
    blogPosts.find((post) => post.featured) ?? blogPosts[0];

  const filteredPosts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return blogPosts.filter((post) => {
      const matchesCategory =
        category === "All" || post.category === category;

      if (!matchesCategory) {
        return false;
      }

      if (!normalizedQuery) {
        return true;
      }

      const searchableText = [
        post.title,
        post.excerpt,
        post.category,
        ...(post.keywords ?? []),
      ]
        .join(" ")
        .toLowerCase();

      return searchableText.includes(normalizedQuery);
    });
  }, [category, query]);

  const standardPosts = filteredPosts.filter(
    (post) => post.id !== featuredPost?.id || query || category !== "All",
  );

  const clearFilters = () => {
    setQuery("");
    setCategory("All");
  };

  return (
    <>
      <Helmet>
        <title>JamaicaTools Blog | Practical Guides and Resources</title>
        <meta
          name="description"
          content="Read practical guides about Jamaican finance, PDF documents, image tools, AI, websites and digital productivity."
        />
        <link rel="canonical" href="https://jamaicatools.com/blog" />
        <meta
          property="og:title"
          content="JamaicaTools Blog | Practical Guides and Resources"
        />
        <meta
          property="og:description"
          content="Helpful guides for finance, documents, images, AI and digital productivity."
        />
        <meta property="og:url" content="https://jamaicatools.com/blog" />
        <meta property="og:type" content="website" />
      </Helmet>

      <main>
        <section className="border-b border-slate-200 bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-green-700">
              JamaicaTools Blog
            </p>

            <h1 className="mt-3 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
              Practical guides for everyday digital tasks
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              Learn about Jamaican finance, documents, images, artificial
              intelligence, websites and useful online tools.
            </p>

            <div className="relative mx-auto mt-9 max-w-3xl">
              <FiSearch
                aria-hidden="true"
                className="absolute left-5 top-1/2 -translate-y-1/2 text-xl text-slate-400"
              />

              <label htmlFor="blog-search" className="sr-only">
                Search articles
              </label>

              <input
                id="blog-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search finance, PDF, image, AI..."
                className="h-14 w-full rounded-2xl border border-slate-300 bg-white pl-14 pr-14 text-lg shadow-sm outline-none transition focus:border-green-600 focus:ring-4 focus:ring-green-100"
              />

              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Clear blog search"
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-lg p-2 text-slate-500 hover:bg-slate-100"
                >
                  <FiX />
                </button>
              )}
            </div>
          </div>
        </section>

        <section className="bg-white py-14 sm:py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex flex-wrap justify-center gap-3">
              {blogCategories.map((categoryName) => (
                <button
                  key={categoryName}
                  type="button"
                  onClick={() => setCategory(categoryName)}
                  className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition ${
                    category === categoryName
                      ? "border-green-700 bg-green-700 text-white"
                      : "border-slate-300 text-slate-700 hover:border-green-700 hover:text-green-700"
                  }`}
                >
                  {categoryName}
                </button>
              ))}
            </div>

            {!query && category === "All" && featuredPost && (
              <section className="mt-12">
                <p className="text-sm font-bold uppercase tracking-wider text-green-700">
                  Featured guide
                </p>

                <div className="mt-5">
                  <BlogCard post={featuredPost} featured />
                </div>
              </section>
            )}

            <section className="mt-14">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-wider text-green-700">
                    Latest resources
                  </p>

                  <h2 className="mt-2 text-3xl font-bold text-slate-900">
                    {query || category !== "All"
                      ? "Search results"
                      : "More helpful articles"}
                  </h2>
                </div>

                <p className="font-semibold text-slate-600" aria-live="polite">
                  {filteredPosts.length}{" "}
                  {filteredPosts.length === 1 ? "article" : "articles"} found
                </p>
              </div>

              {standardPosts.length > 0 ? (
                <div className="mt-8 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
                  {standardPosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
              ) : filteredPosts.length === 1 &&
                filteredPosts[0].id === featuredPost?.id &&
                !query &&
                category === "All" ? null : (
                <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-10 text-center">
                  <div className="text-5xl" aria-hidden="true">
                    🔎
                  </div>

                  <h3 className="mt-5 text-2xl font-bold text-slate-900">
                    No matching articles found
                  </h3>

                  <p className="mx-auto mt-3 max-w-xl leading-7 text-slate-600">
                    Try another search term or select a different category.
                  </p>

                  <button
                    type="button"
                    onClick={clearFilters}
                    className="mt-6 rounded-xl bg-green-700 px-6 py-3 font-semibold text-white hover:bg-green-800"
                  >
                    View All Articles
                  </button>
                </div>
              )}
            </section>
          </div>
        </section>
      </main>
    </>
  );
}

export default Blog;
