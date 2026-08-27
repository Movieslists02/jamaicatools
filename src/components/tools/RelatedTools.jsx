import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import tools from "../../data/tools";

function RelatedTools({ tool }) {
  const related = (tool.relatedTools ?? [])
    .map((slug) => tools.find((item) => item.slug === slug))
    .filter(Boolean);

  if (related.length === 0) {
    return null;
  }

  return (
    <section className="mt-12">
      <p className="text-sm font-bold uppercase tracking-wider text-green-700">
        Keep exploring
      </p>

      <h2 className="mt-2 text-3xl font-bold text-slate-900">
        Related JamaicaTools
      </h2>

      <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {related.map((relatedTool) => (
          <Link
          onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "auto" })}
            key={relatedTool.id}
            to={`/tools/${relatedTool.slug}`}
            className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-green-400 hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="text-3xl" aria-hidden="true">
                {relatedTool.icon}
              </span>

              <FiArrowRight className="mt-1 text-slate-400 transition group-hover:text-green-700" />
            </div>

            <h3 className="mt-4 text-lg font-bold text-slate-900 group-hover:text-green-700">
              {relatedTool.title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              {relatedTool.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default RelatedTools;
