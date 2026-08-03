import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import ToolGrid from "../components/tools/ToolGrid";
import tools from "../data/tools";

function Tools() {
  const [query, setQuery] = useState("");

  const filteredTools = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return tools;
    }

    return tools.filter((tool) => {
      const searchableText = [
        tool.title,
        tool.category,
        tool.description,
        ...(tool.keywords ?? []),
      ]
        .join(" ")
        .toLowerCase();

      return searchableText.includes(normalizedQuery);
    });
  }, [query]);

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

          <div className="mx-auto mt-10 max-w-3xl">
            <label htmlFor="tool-search" className="sr-only">
              Search tools
            </label>

            <input
              id="tool-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search tools by name, category or keyword..."
              className="h-14 w-full rounded-2xl border border-slate-300 bg-white px-5 text-lg shadow-sm outline-none transition focus:border-green-600 focus:ring-4 focus:ring-green-100"
            />
          </div>

          <ToolGrid tools={filteredTools} />
        </div>
      </section>
    </>
  );
}

export default Tools;
