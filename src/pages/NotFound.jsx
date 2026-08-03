import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | JamaicaTools</title>
        <meta
          name="description"
          content="The requested JamaicaTools page could not be found."
        />
      </Helmet>

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-green-700">
            Error 404
          </p>

          <h1 className="mt-3 text-4xl font-bold text-slate-900">
            Page Not Found
          </h1>

          <p className="mt-4 text-lg text-slate-600">
            The page may have moved, been removed, or never existed.
          </p>

          <Link
            to="/"
            className="mt-8 inline-block rounded-full bg-green-700 px-6 py-3 font-semibold text-white hover:bg-green-800"
          >
            Return Home
          </Link>
        </div>
      </section>
    </>
  );
}

export default NotFound;