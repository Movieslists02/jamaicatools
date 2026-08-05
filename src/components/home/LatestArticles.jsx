import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import BlogCard from "../blog/BlogCard";
import blogPosts from "../../data/blogPosts";

function LatestArticles() {
  const latestPosts = [...blogPosts]
    .sort(
      (firstPost, secondPost) =>
        new Date(secondPost.publishedAt) -
        new Date(firstPost.publishedAt) ||
        secondPost.id - firstPost.id,
    )
    .slice(0, 3);

  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-green-700">
              Guides and resources
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900">
              Latest articles
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-slate-600">
              Learn how to make better use of online tools, documents,
              images, finance resources and artificial intelligence.
            </p>
          </div>

          <Link
            to="/blog"
            className="inline-flex items-center gap-2 font-semibold text-green-700 hover:text-green-800"
          >
            View all articles
            <FiArrowRight />
          </Link>
        </div>

        <div className="mt-9 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {latestPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default LatestArticles;
