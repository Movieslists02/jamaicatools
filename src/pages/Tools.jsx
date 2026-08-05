import { useEffect, useMemo, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { useSearchParams } from "react-router-dom";
import ToolGrid from "../components/tools/ToolGrid";
import tools from "../data/tools";
import {
  filterAndSortTools,
  getToolCategories,
} from "../utils/toolSearch";

const STATUS_OPTIONS = [
  { value: "all", label: "All tools" },
  { value: "featured", label: "Featured tools" },
  { value: "popular", label: "Popular tools" },
  { value: "new", label: "New tools" },
];

const SORT_OPTIONS = [
  { value: "relevance", label: "Most relevant" },
  { value: "name", label: "Name: A–Z" },
  { value: "newest", label: "Newest first" },
  { value: "popular", label: "Popular first" },
];

function Tools() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchInputRef = useRef(null);

  const query = searchParams.get("q") ?? "";
  const category = searchParams.get("category") ?? "all";
  const status = searchParams.get("status") ?? "all";
  const sort = searchParams.get("sort") ?? "relevance";

  useEffect(() => {
    if (query.trim()) {
      searchInputRef.current?.focus();
    }
  }, [query]);

  const categories = useMemo(() => getToolCategories(tools), []);

  const filteredTools = useMemo(
    () =>
      filterAndSortTools(tools, {
        query,
        category,
        status,
        sort,
      }),
    [query, category, status, sort],
  );

  const updateSearchParameter = (name, value, defaultValue = "") => {
    const nextParams = new URLSearchParams(searchParams);

    if (!value || value === defaultValue) {
      nextParams.delete(name);
    } else {
      nextParams.set(name, value);
    }

    setSearchParams(nextParams, {
      replace: true,
    });
  };

  const clearFilters = () => {
    setSearchParams({}, { replace: true });
  };

  const hasActiveFilters =
    Boolean(query.trim()) ||
    category !== "all" ||
    status !== "all" ||
    sort !== "relevance";

  return (
    <>
      <Helmet>
        <title>Free Online Tools | JamaicaTools</title>
        <meta
          name="description"
          content="Search and browse free calculators, image tools, PDF utilities, AI tools and online resources."
        />
        <link rel="canonical" href="https://jamaicatools.com/tools" />
      </Helmet>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-green-700">
              JamaicaTools Directory
            </p>

            <h1 className="mt-2 text-4xl font-bold text-slate-900 md:text-5xl">
              Find the Right Tool
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              Search calculators, PDF utilities, image tools, AI resources and
              other helpful online tools.
            </p>
          </div>

          <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
            <div>
              <label
                htmlFor="tool-search"
                className="mb-2 block font-semibold text-slate-900"
              >
                Search Tools
              </label>

              <input
                ref={searchInputRef}
                id="tool-search"
                type="search"
                value={query}
                onChange={(event) =>
                  updateSearchParameter("q", event.target.value)
                }
                placeholder="Search PDF, salary, image, AI, tax..."
                autoComplete="off"
                className="h-14 w-full rounded-2xl border border-slate-300 bg-white px-5 text-lg outline-none transition focus:border-green-600 focus:ring-4 focus:ring-green-100"
              />
            </div>

            <div className="mt-6 grid gap-5 md:grid-cols-3">
              <div>
                <label
                  htmlFor="tool-category"
                  className="mb-2 block font-semibold text-slate-900"
                >
                  Category
                </label>

                <select
                  id="tool-category"
                  value={category}
                  onChange={(event) =>
                    updateSearchParameter(
                      "category",
                      event.target.value,
                      "all",
                    )
                  }
                  className="h-12 w-full rounded-xl border border-slate-300 bg-white px-4 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                >
                  <option value="all">All categories</option>

                  {categories.map((categoryName) => (
                    <option key={categoryName} value={categoryName}>
                      {categoryName}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="tool-status"
                  className="mb-2 block font-semibold text-slate-900"
                >
                  Tool Type
                </label>

                <select
                  id="tool-status"
                  value={status}
                  onChange={(event) =>
                    updateSearchParameter(
                      "status",
                      event.target.value,
                      "all",
                    )
                  }
                  className="h-12 w-full rounded-xl border border-slate-300 bg-white px-4 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                >
                  {STATUS_OPTIONS.map((statusOption) => (
                    <option
                      key={statusOption.value}
                      value={statusOption.value}
                    >
                      {statusOption.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="tool-sort"
                  className="mb-2 block font-semibold text-slate-900"
                >
                  Sort By
                </label>

                <select
                  id="tool-sort"
                  value={sort}
                  onChange={(event) =>
                    updateSearchParameter(
                      "sort",
                      event.target.value,
                      "relevance",
                    )
                  }
                  className="h-12 w-full rounded-xl border border-slate-300 bg-white px-4 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                >
                  {SORT_OPTIONS.map((sortOption) => (
                    <option
                      key={sortOption.value}
                      value={sortOption.value}
                    >
                      {sortOption.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 border-t border-slate-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
              <p
                className="font-semibold text-slate-700"
                aria-live="polite"
              >
                {filteredTools.length}{" "}
                {filteredTools.length === 1 ? "tool" : "tools"} found
              </p>

              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-green-700 hover:text-green-700"
                >
                  Clear Search and Filters
                </button>
              )}
            </div>
          </div>

          {filteredTools.length > 0 ? (
            <ToolGrid tools={filteredTools} />
          ) : (
            <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-10 text-center">
              <div className="text-5xl" aria-hidden="true">
                🔎
              </div>

              <h2 className="mt-5 text-2xl font-bold text-slate-900">
                No matching tools found
              </h2>

              <p className="mx-auto mt-3 max-w-xl leading-7 text-slate-600">
                Try another search term, select a different category or clear
                the active filters.
              </p>

              <button
                type="button"
                onClick={clearFilters}
                className="mt-6 rounded-xl bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800"
              >
                View All Tools
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Tools;
