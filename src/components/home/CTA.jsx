import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="bg-green-700 py-20">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-green-200">
          Start Using JamaicaTools Today
        </p>

        <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
          Dozens of useful free tools.
          <br />
          Zero sign-up required.
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-green-100">
          Save time with calculators, converters, AI tools,
          PDF utilities, business resources, and productivity tools
          built specifically for Jamaica and the Caribbean.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            to="/tools"
            className="rounded-full bg-white px-8 py-4 font-semibold text-green-700 hover:bg-slate-100"
          >
            Browse All Tools
          </Link>

          <Link
            to="/blog"
            className="rounded-full border border-white px-8 py-4 font-semibold text-white hover:bg-white hover:text-green-700"
          >
            Read Our Blog
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CTA;