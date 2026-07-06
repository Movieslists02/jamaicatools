import { Helmet } from "react-helmet-async";
import ToolGrid from "../components/tools/ToolGrid";

function Tools() {
  return (
    <>
      <Helmet>
        <title>Free Online Tools | JamaicaTools</title>
        <meta
          name="description"
          content="Browse free online calculators, PDF tools, AI tools, business tools and more."
        />
      </Helmet>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-green-700">
              JamaicaTools Directory
            </p>

            <h1 className="mt-2 text-4xl font-bold text-slate-900 md:text-5xl">
              Browse All Tools
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
              Find calculators, PDF utilities, AI tools, business resources,
              image tools, converters and much more.
            </p>
          </div>

          <ToolGrid />
        </div>
      </section>
    </>
  );
}

export default Tools;