import { Link } from "react-router-dom";

function ToolCard({ tool }) {
  return (
    <Link
      to={`/tools/${tool.slug}`}
      className="group rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-green-200 hover:shadow-lg"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-green-700">
            {tool.category}
          </p>

          <h2 className="mt-3 text-2xl font-bold text-slate-900 group-hover:text-green-700">
            {tool.title}
          </h2>
        </div>

        <span className="text-3xl" aria-hidden="true">
          {tool.icon}
        </span>
      </div>

      <p className="mt-4 leading-7 text-slate-600">{tool.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {tool.new && (
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
            New
          </span>
        )}

        {tool.popular && (
          <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700">
            Popular
          </span>
        )}
      </div>

      <span className="mt-6 inline-block font-semibold text-green-700">
        Open Tool →
      </span>
    </Link>
  );
}

export default ToolCard;