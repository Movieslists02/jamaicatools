import {
  FiArrowLeft,
  FiBookOpen,
  FiHome,
  FiSearch,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import SEO from "../components/seo/SEO";

function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The requested JamaicaTools page could not be found."
        canonical="/404"
        noIndex
      />

      <section className="bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div
            className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-green-100 text-4xl"
            aria-hidden="true"
          >
            🔎
          </div>

          <p className="mt-8 text-sm font-semibold uppercase tracking-wide text-green-700">
            Error 404
          </p>

          <h1 className="mt-3 text-4xl font-bold text-slate-900 sm:text-5xl">
            We couldn’t find that page
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            The page may have moved, been removed or never existed.
            You can return home, search the tool directory or browse
            the latest JamaicaTools guides.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800"
            >
              <FiHome aria-hidden="true" />
              Return Home
            </Link>

            <Link
              to="/tools"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-green-700 hover:text-green-700"
            >
              <FiSearch aria-hidden="true" />
              Search Tools
            </Link>

            <Link
              to="/blog"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-green-700 hover:text-green-700"
            >
              <FiBookOpen aria-hidden="true" />
              Browse Guides
            </Link>
          </div>

          <div className="mt-14 rounded-3xl border border-slate-200 bg-white p-7 text-left shadow-sm sm:p-8">
            <h2 className="text-xl font-bold text-slate-900">
              Popular destinations
            </h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Link
                to="/tools?category=Finance"
                className="rounded-2xl border border-slate-200 p-5 transition hover:border-green-300 hover:bg-green-50"
              >
                <p className="font-bold text-slate-900">
                  Finance Tools
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Salary, tax, loan and currency calculators.
                </p>
              </Link>

              <Link
                to="/tools?category=PDF%20Tools"
                className="rounded-2xl border border-slate-200 p-5 transition hover:border-green-300 hover:bg-green-50"
              >
                <p className="font-bold text-slate-900">
                  PDF Tools
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Convert, merge, split and manage PDF files.
                </p>
              </Link>

              <Link
                to="/tools/ai-writer"
                className="rounded-2xl border border-slate-200 p-5 transition hover:border-green-300 hover:bg-green-50"
              >
                <p className="font-bold text-slate-900">
                  AI Studio
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Write, rewrite, summarize and generate content.
                </p>
              </Link>
            </div>
          </div>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-green-700"
          >
            <FiArrowLeft aria-hidden="true" />
            Go back to the previous page
          </button>
        </div>
      </section>
    </>
  );
}

export default NotFound;
