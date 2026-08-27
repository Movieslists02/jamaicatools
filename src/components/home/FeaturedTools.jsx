import { Link } from "react-router-dom";
import tools from "../../data/tools";
import featuredToolSlugs from "../../data/featuredTools";

const featuredTools = featuredToolSlugs
  .map((slug) => tools.find((tool) => tool.slug === slug))
  .filter(Boolean);

function FeaturedTools() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-green-700">
              Featured Tools
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
              Popular tools people use every day
            </h2>

            <p className="mt-4 max-w-2xl text-slate-600">
              Start with these high-value tools for finance, health, documents,
              images, AI, and everyday decisions.
            </p>
          </div>

          <Link
            to="/tools"
            className="font-semibold text-green-700 hover:text-green-800"
          >
            View all tools →
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredTools.map((tool) => (
            <Link
              key={tool.slug}
              to={`/tools/${tool.slug}`}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-green-200 hover:bg-white hover:shadow-lg"
            >
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-semibold text-green-700">
                  {tool.category}
                </p>

                <span
                  className="text-2xl"
                  aria-hidden="true"
                >
                  {tool.icon}
                </span>
              </div>

              <h3 className="mt-3 text-2xl font-bold text-slate-900">
                {tool.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-slate-600">
                {tool.description}
              </p>

              <p className="mt-5 font-semibold text-green-700">
                Open tool →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedTools;
