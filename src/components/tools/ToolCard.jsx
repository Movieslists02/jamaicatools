import { Link } from "react-router-dom";

function ToolCard({ tool }) {
  return (
    <Link
      to={`/tools/${tool.slug}`}
      className="group rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-green-200 hover:shadow-lg"
    >
      <p className="text-sm font-semibold text-green-700">
        {tool.category}
      </p>

      <h3 className="mt-3 text-2xl font-bold text-slate-900 group-hover:text-green-700">
        {tool.title}
      </h3>

      <p className="mt-4 text-slate-600">
        Use this free online tool to save time and improve productivity.
      </p>

      <span className="mt-6 inline-block font-semibold text-green-700">
        Open Tool →
      </span>
    </Link>
  );
}

export default ToolCard;