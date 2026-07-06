import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-14 py-16 md:py-20 text-center">
        <p className="mb-4 inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
          Built for Jamaica & the Caribbean
        </p>

        <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
          The Caribbean&apos;s Smartest Free Online Tools
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          Calculate, convert, compress, generate, and learn with free online
          tools built for everyday people, students, workers, creators, and
          businesses.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/tools"
            className="rounded-full bg-green-700 px-7 py-3 font-semibold text-white shadow-sm hover:bg-green-800"
          >
            Browse Tools
          </Link>

          <Link
            to="/blog"
            className="rounded-full border border-slate-300 px-7 py-3 font-semibold text-slate-700 hover:border-green-700 hover:text-green-700"
          >
            Read the Blog
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;