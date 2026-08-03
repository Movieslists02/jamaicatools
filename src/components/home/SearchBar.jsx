import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import tools from "../../data/tools";

const suggestions = [
  "Loan Calculator",
  "Salary Calculator",
  "Income Tax Calculator",
  "Currency Converter",
  "NIS Calculator",
  "BMI Calculator",
];

function SearchBar() {
  const [query, setQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");

  const searchResults = useMemo(() => {
    const normalizedQuery = submittedQuery.trim().toLowerCase();

    if (!normalizedQuery) {
      return [];
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
  }, [submittedQuery]);

  const handleSearch = (event) => {
    event.preventDefault();
    setSubmittedQuery(query);
  };

  const handleSuggestion = (suggestion) => {
    setQuery(suggestion);
    setSubmittedQuery(suggestion);
  };

  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <h2 className="text-3xl font-bold text-slate-900">
          Find the Right Tool in Seconds
        </h2>

        <p className="mt-3 text-slate-600">
          Search calculators, finance tools, health tools and more.
        </p>

        <form
          onSubmit={handleSearch}
          className="mt-8 flex overflow-hidden rounded-2xl border border-slate-300 bg-white shadow-lg"
        >
          <div className="flex items-center pl-5">
            <FiSearch className="text-2xl text-slate-400" />
          </div>

          <input
            type="search"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);

              if (!event.target.value.trim()) {
                setSubmittedQuery("");
              }
            }}
            placeholder="Search loan calculator, salary, tax..."
            aria-label="Search tools"
            className="w-full px-4 py-5 text-lg outline-none"
          />

          <button
            type="submit"
            className="bg-green-700 px-8 font-semibold text-white hover:bg-green-800"
          >
            Search
          </button>
        </form>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {suggestions.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => handleSuggestion(item)}
              className="rounded-full border border-slate-300 px-4 py-2 text-sm hover:border-green-700 hover:text-green-700"
            >
              {item}
            </button>
          ))}
        </div>

        {submittedQuery && (
          <div className="mt-10 text-left">
            <h3 className="text-xl font-bold text-slate-900">Search Results</h3>

            {searchResults.length > 0 ? (
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {searchResults.map((tool) => (
                  <Link
                    key={tool.id}
                    to={`/tools/${tool.slug}`}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-green-300 hover:bg-white hover:shadow-md"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-3xl" aria-hidden="true">
                        {tool.icon}
                      </span>

                      <div>
                        <p className="text-sm font-semibold text-green-700">
                          {tool.category}
                        </p>

                        <h4 className="mt-1 text-lg font-bold text-slate-900">
                          {tool.title}
                        </h4>

                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          {tool.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center">
                <p className="font-semibold text-slate-900">
                  No matching tools found.
                </p>

                <p className="mt-2 text-sm text-slate-600">
                  Try searching for salary, tax, loan, currency, NIS or BMI.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default SearchBar;
