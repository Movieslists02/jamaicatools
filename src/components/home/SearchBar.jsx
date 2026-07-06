import { FiSearch } from "react-icons/fi";

function SearchBar() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <h2 className="text-3xl font-bold text-slate-900">
          Find the Right Tool in Seconds
        </h2>

        <p className="mt-3 text-slate-600">
          Search calculators, PDF tools, AI tools, business tools, blogs and
          more.
        </p>

        <div className="mt-8 flex rounded-2xl border border-slate-300 bg-white shadow-lg">
          <div className="flex items-center pl-5">
            <FiSearch className="text-2xl text-slate-400" />
          </div>

          <input
            type="text"
            placeholder="Search loan calculator, PDF tools, AI..."
            className="w-full rounded-l-2xl px-4 py-5 text-lg outline-none"
          />

          <button className="rounded-r-2xl bg-green-700 px-8 text-white font-semibold hover:bg-green-800">
            Search
          </button>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {[
            "Loan Calculator",
            "Currency Converter",
            "BMI Calculator",
            "PDF to Word",
            "AI Writer",
            "Image Compressor",
          ].map((item) => (
            <button
              key={item}
              className="rounded-full border border-slate-300 px-4 py-2 text-sm hover:border-green-700 hover:text-green-700"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SearchBar;