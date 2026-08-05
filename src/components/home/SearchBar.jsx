import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const suggestions = [
  "PDF",
  "Image",
  "Salary",
  "Tax",
  "Currency",
  "AI",
];

function SearchBar() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const openSearchResults = (searchQuery) => {
    const normalizedQuery = searchQuery.trim();

    if (!normalizedQuery) {
      navigate("/tools");
      return;
    }

    navigate(`/tools?q=${encodeURIComponent(normalizedQuery)}`);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    openSearchResults(query);
  };

  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <h2 className="text-3xl font-bold text-slate-900">
          Find the Right Tool in Seconds
        </h2>

        <p className="mt-3 text-slate-600">
          Search calculators, PDF utilities, image tools, AI resources and
          more.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col overflow-hidden rounded-2xl border border-slate-300 bg-white shadow-lg sm:flex-row"
        >
          <div className="hidden items-center pl-5 sm:flex">
            <FiSearch className="text-2xl text-slate-400" />
          </div>

          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search PDF, image, salary, AI..."
            aria-label="Search tools"
            className="min-h-14 w-full px-5 py-4 text-lg outline-none"
          />

          <button
            type="submit"
            className="min-h-14 bg-green-700 px-8 font-semibold text-white transition hover:bg-green-800"
          >
            Search Tools
          </button>
        </form>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {suggestions.map((suggestion) => (
            <button
              key={suggestion}
              type="button"
              onClick={() => openSearchResults(suggestion)}
              className="rounded-full border border-slate-300 px-4 py-2 text-sm transition hover:border-green-700 hover:text-green-700"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SearchBar;
