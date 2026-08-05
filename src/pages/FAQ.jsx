import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiChevronDown,
  FiHelpCircle,
  FiMessageCircle,
  FiSearch,
  FiX,
} from "react-icons/fi";
import faqs, { faqCategories } from "../data/faqs";
import SEO from "../components/seo/SEO";

function FAQ() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [openQuestionId, setOpenQuestionId] = useState(
    "what-is-jamaicatools",
  );

  const filteredFAQs = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return faqs.filter((faq) => {
      const matchesCategory =
        category === "All" || faq.category === category;

      if (!matchesCategory) {
        return false;
      }

      if (!normalizedQuery) {
        return true;
      }

      const searchableText = [
        faq.question,
        faq.answer,
        faq.category,
        ...(faq.keywords ?? []),
      ]
        .join(" ")
        .toLowerCase();

      return searchableText.includes(normalizedQuery);
    });
  }, [category, query]);

  const groupedFAQs = useMemo(() => {
    return filteredFAQs.reduce((groups, faq) => {
      if (!groups[faq.category]) {
        groups[faq.category] = [];
      }

      groups[faq.category].push(faq);
      return groups;
    }, {});
  }, [filteredFAQs]);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const clearFilters = () => {
    setQuery("");
    setCategory("All");
    setOpenQuestionId("");
  };

  return (
    <>
      <SEO
        title="Frequently Asked Questions"
        description="Find answers about JamaicaTools calculators, PDF tools, image utilities, AI Studio, privacy, security and support."
        canonical="/faq"
        keywords={[
          "JamaicaTools FAQ",
          "online tools help",
          "AI Studio help",
          "PDF tools support",
        ]}
      />

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main>
        <section className="border-b border-slate-200 bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-2xl text-green-700">
              <FiHelpCircle />
            </div>

            <p className="mt-6 text-sm font-bold uppercase tracking-wider text-green-700">
              Help Centre
            </p>

            <h1 className="mt-3 text-4xl font-bold text-slate-900 sm:text-5xl">
              Frequently Asked Questions
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              Find answers about JamaicaTools, using the tools, AI features,
              privacy, security and contacting support.
            </p>

            <div className="relative mx-auto mt-9 max-w-3xl">
              <FiSearch
                aria-hidden="true"
                className="absolute left-5 top-1/2 -translate-y-1/2 text-xl text-slate-400"
              />

              <label htmlFor="faq-search" className="sr-only">
                Search frequently asked questions
              </label>

              <input
                id="faq-search"
                type="search"
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setOpenQuestionId("");
                }}
                placeholder="Search questions about tools, AI, privacy..."
                className="h-14 w-full rounded-2xl border border-slate-300 bg-white pl-14 pr-14 text-lg shadow-sm outline-none transition focus:border-green-600 focus:ring-4 focus:ring-green-100"
              />

              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Clear FAQ search"
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
                >
                  <FiX />
                </button>
              )}
            </div>
          </div>
        </section>

        <section className="bg-white py-14 sm:py-16">
          <div className="mx-auto max-w-5xl px-4">
            <div
              className="flex flex-wrap justify-center gap-3"
              aria-label="FAQ categories"
            >
              {faqCategories.map((categoryName) => (
                <button
                  key={categoryName}
                  type="button"
                  onClick={() => {
                    setCategory(categoryName);
                    setOpenQuestionId("");
                  }}
                  className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition ${
                    category === categoryName
                      ? "border-green-700 bg-green-700 text-white"
                      : "border-slate-300 bg-white text-slate-700 hover:border-green-700 hover:text-green-700"
                  }`}
                >
                  {categoryName}
                </button>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 border-b border-slate-200 pb-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-semibold text-slate-700" aria-live="polite">
                {filteredFAQs.length}{" "}
                {filteredFAQs.length === 1 ? "answer" : "answers"} found
              </p>

              {(query || category !== "All") && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="text-left text-sm font-semibold text-green-700 hover:text-green-800"
                >
                  Clear search and category
                </button>
              )}
            </div>

            {filteredFAQs.length > 0 ? (
              <div className="mt-10 space-y-12">
                {Object.entries(groupedFAQs).map(
                  ([categoryName, categoryFAQs]) => (
                    <section
                      key={categoryName}
                      aria-labelledby={`faq-${categoryName
                        .toLowerCase()
                        .replaceAll(" ", "-")
                        .replaceAll("&", "and")}`}
                    >
                      <p className="text-sm font-bold uppercase tracking-wider text-green-700">
                        {categoryName}
                      </p>

                      <h2
                        id={`faq-${categoryName
                          .toLowerCase()
                          .replaceAll(" ", "-")
                          .replaceAll("&", "and")}`}
                        className="mt-2 text-2xl font-bold text-slate-900"
                      >
                        {categoryName} questions
                      </h2>

                      <div className="mt-6 space-y-4">
                        {categoryFAQs.map((faq) => {
                          const isOpen = openQuestionId === faq.id;
                          const answerId = `${faq.id}-answer`;
                          const buttonId = `${faq.id}-button`;

                          return (
                            <article
                              key={faq.id}
                              id={faq.id}
                              className={`overflow-hidden rounded-2xl border bg-white transition ${
                                isOpen
                                  ? "border-green-300 shadow-sm"
                                  : "border-slate-200 hover:border-green-200"
                              }`}
                            >
                              <h3>
                                <button
                                  id={buttonId}
                                  type="button"
                                  onClick={() =>
                                    setOpenQuestionId(
                                      isOpen ? "" : faq.id,
                                    )
                                  }
                                  aria-expanded={isOpen}
                                  aria-controls={answerId}
                                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                                >
                                  <span className="font-bold leading-7 text-slate-900">
                                    {faq.question}
                                  </span>

                                  <FiChevronDown
                                    aria-hidden="true"
                                    className={`shrink-0 text-xl text-green-700 transition-transform duration-200 ${
                                      isOpen ? "rotate-180" : ""
                                    }`}
                                  />
                                </button>
                              </h3>

                              {isOpen && (
                                <div
                                  id={answerId}
                                  role="region"
                                  aria-labelledby={buttonId}
                                  className="border-t border-slate-200 px-5 py-5 sm:px-6"
                                >
                                  <p className="leading-8 text-slate-600">
                                    {faq.answer}
                                  </p>
                                </div>
                              )}
                            </article>
                          );
                        })}
                      </div>
                    </section>
                  ),
                )}
              </div>
            ) : (
              <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-10 text-center">
                <div className="text-5xl" aria-hidden="true">
                  🔎
                </div>

                <h2 className="mt-5 text-2xl font-bold text-slate-900">
                  No matching questions found
                </h2>

                <p className="mx-auto mt-3 max-w-xl leading-7 text-slate-600">
                  Try a different search phrase, select another category or
                  contact JamaicaTools for assistance.
                </p>

                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-6 rounded-xl bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800"
                >
                  View All Questions
                </button>
              </div>
            )}
          </div>
        </section>

        <section className="bg-green-800 py-16 text-white sm:py-20">
          <div className="mx-auto max-w-5xl px-4 text-center">
            <FiMessageCircle className="mx-auto text-4xl text-green-200" />

            <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
              Still have a question?
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-green-50">
              Send your question, tool suggestion, technical report or
              business inquiry through the JamaicaTools contact form.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-green-800 transition hover:bg-green-50"
              >
                Contact JamaicaTools
                <FiMessageCircle />
              </Link>

              <Link
                to="/tools"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-green-300 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
              >
                Browse Tools
                <FiArrowRight />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default FAQ;
