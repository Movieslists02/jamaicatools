import { Link } from "react-router-dom";
import categories from "../../data/categories";

function Categories() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-green-700">
            Browse Categories
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
            Tools for everyday work, money, files, and business
          </h2>
          <p className="mt-4 text-slate-600">
            Choose a category and find free tools built for Jamaica and the Caribbean.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/tools/${category.slug}`}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-green-200 hover:shadow-lg"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-3xl">
                {category.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-900 group-hover:text-green-700">
                {category.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {category.description}
              </p>

              <p className="mt-5 text-sm font-semibold text-green-700">
                Explore tools →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;