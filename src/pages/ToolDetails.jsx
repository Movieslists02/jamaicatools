import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import tools from "../data/tools";
import LoanCalculator from "../components/calculators/LoanCalculator";
import SalaryCalculator from "../components/calculators/SalaryCalculator";

function ToolDetails() {
  const { slug } = useParams();
  const tool = tools.find((item) => item.slug === slug);

  if (!tool) {
    return (
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-bold text-slate-900">Tool Not Found</h1>
          <p className="mt-4 text-slate-600">
            The tool you are looking for does not exist yet.
          </p>
          <Link
            to="/tools"
            className="mt-8 inline-block rounded-full bg-green-700 px-6 py-3 font-semibold text-white"
          >
            Back to Tools
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <Helmet>
        <title>{tool.seoTitle}</title>
        <meta name="description" content={tool.seoDescription} />
      </Helmet>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <Link to="/tools" className="font-semibold text-green-700">
            ← Back to all tools
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-green-700">
                {tool.category}
              </p>

              <h1 className="mt-3 text-4xl font-bold text-slate-900 md:text-5xl">
                {tool.icon} {tool.title}
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                {tool.description}
              </p>

              <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

{tool.slug === "loan-calculator" && <LoanCalculator />}
{tool.slug === "salary-calculator" && <SalaryCalculator />}
              </div>
            </div>

            <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900">
                Tool Details
              </h2>

              <div className="mt-5 space-y-4 text-sm text-slate-600">
                <p>
                  <strong className="text-slate-900">Category:</strong>{" "}
                  {tool.category}
                </p>

                <p>
                  <strong className="text-slate-900">Popular:</strong>{" "}
                  {tool.popular ? "Yes" : "No"}
                </p>

                <p>
                  <strong className="text-slate-900">Featured:</strong>{" "}
                  {tool.featured ? "Yes" : "No"}
                </p>

                <div>
                  <strong className="text-slate-900">Keywords:</strong>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {tool.keywords.map((keyword) => (
                      <span
                        key={keyword}
                        className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

export default ToolDetails;