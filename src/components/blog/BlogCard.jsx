import { Link } from "react-router-dom";
import { FiArrowRight, FiClock } from "react-icons/fi";

function formatDate(dateString) {
  return new Intl.DateTimeFormat("en-JM", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(`${dateString}T12:00:00`));
}

function BlogCard({ post, featured = false }) {
  return (
    <article
      className={`group overflow-hidden rounded-3xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:border-green-300 hover:shadow-md ${
        featured ? "lg:grid lg:grid-cols-[0.75fr_1.25fr]" : ""
      }`}
    >
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-green-50 to-slate-100 ${
          featured ? "min-h-64 p-10" : "min-h-44 p-8"
        }`}
      >
        <span
          aria-hidden="true"
          className={featured ? "text-8xl" : "text-6xl"}
        >
          {post.icon}
        </span>
      </div>

      <div className={featured ? "p-8 sm:p-10" : "p-6"}>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <span className="font-bold text-green-700">{post.category}</span>

          <span className="text-slate-300" aria-hidden="true">
            •
          </span>

          <span className="inline-flex items-center gap-1.5 text-slate-500">
            <FiClock />
            {post.readingTime} min read
          </span>
        </div>

        <h2
          className={`mt-4 font-bold leading-tight text-slate-900 transition group-hover:text-green-700 ${
            featured ? "text-3xl sm:text-4xl" : "text-xl"
          }`}
        >
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>

        <p className="mt-4 leading-7 text-slate-600">{post.excerpt}</p>

        <div className="mt-6 flex flex-col gap-4 border-t border-slate-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">
            {formatDate(post.publishedAt)}
          </p>

          <Link
            to={`/blog/${post.slug}`}
            className="inline-flex items-center gap-2 font-semibold text-green-700 hover:text-green-800"
          >
            Read article
            <FiArrowRight />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default BlogCard;
