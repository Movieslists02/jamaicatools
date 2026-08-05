import BlogCard from "./BlogCard";

function RelatedPosts({ posts }) {
  if (!posts?.length) {
    return null;
  }

  return (
    <section className="border-t border-slate-200 bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4">
        <p className="text-sm font-bold uppercase tracking-wider text-green-700">
          Continue reading
        </p>

        <h2 className="mt-3 text-3xl font-bold text-slate-900">
          Related articles
        </h2>

        <div className="mt-9 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RelatedPosts;
