import { Link } from "react-router-dom";
import blogPosts from "../../data/blogPosts";

function LatestArticles() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-green-700">
              Latest Articles
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
              Learn something new every week
            </h2>

            <p className="mt-4 max-w-2xl text-slate-600">
              Helpful guides about finance, business, technology,
              AI, productivity, and everyday life in Jamaica.
            </p>
          </div>

          <Link
            to="/blog"
            className="font-semibold text-green-700 hover:text-green-800"
          >
            View all articles →
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {blogPosts.slice(0, 3).map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-green-700">
                {post.category}
              </p>

              <h3 className="mt-3 text-2xl font-bold text-slate-900">
                {post.title}
              </h3>

              <p className="mt-4 text-slate-600">
                {post.excerpt}
              </p>

              <div className="mt-6 flex items-center justify-between text-sm text-slate-500">
                <span>{post.readTime}</span>

                <span className="font-semibold text-green-700">
                  Read →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LatestArticles;