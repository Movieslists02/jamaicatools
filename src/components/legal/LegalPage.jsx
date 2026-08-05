import { Link } from "react-router-dom";
import {
  FiAlertCircle,
  FiArrowRight,
  FiCalendar,
  FiFileText,
  FiMail,
} from "react-icons/fi";

function createSectionId(title) {
  return title
    .toLowerCase()
    .replaceAll("&", "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function LegalPage({
  eyebrow,
  title,
  description,
  effectiveDate,
  updatedDate,
  notice,
  sections,
  children,
}) {
  return (
    <main>
      <section className="border-b border-slate-200 bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-2xl text-green-700">
            <FiFileText />
          </div>

          <p className="mt-6 text-sm font-bold uppercase tracking-wider text-green-700">
            {eyebrow}
          </p>

          <h1 className="mt-3 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
            {title}
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            {description}
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-slate-500">
            <span className="inline-flex items-center gap-2">
              <FiCalendar />
              Effective: {effectiveDate}
            </span>

            {updatedDate && (
              <span className="inline-flex items-center gap-2">
                <FiCalendar />
                Last updated: {updatedDate}
              </span>
            )}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="font-bold text-slate-900">On this page</h2>

              <nav
                aria-label={`${title} sections`}
                className="mt-5 space-y-3"
              >
                {sections.map((section, index) => (
                  <a
                    key={section.title}
                    href={`#${createSectionId(section.title)}`}
                    className="flex gap-3 text-sm leading-6 text-slate-600 transition hover:text-green-700"
                  >
                    <span className="font-bold text-green-700">
                      {index + 1}.
                    </span>

                    <span>{section.title}</span>
                  </a>
                ))}
              </nav>
            </div>

            <div className="mt-6 rounded-3xl border border-green-200 bg-green-50 p-6">
              <FiMail className="text-2xl text-green-700" />

              <h2 className="mt-4 font-bold text-slate-900">
                Have a privacy question?
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Use the JamaicaTools contact form and select the privacy or data
                inquiry option.
              </p>

              <Link
                to="/contact"
                className="mt-5 inline-flex items-center gap-2 font-semibold text-green-700 hover:text-green-800"
              >
                Contact JamaicaTools
                <FiArrowRight />
              </Link>
            </div>
          </aside>

          <div className="min-w-0">
            {notice && (
              <div className="mb-10 flex items-start gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <FiAlertCircle className="mt-1 shrink-0 text-xl text-amber-700" />

                <p className="leading-7 text-slate-700">{notice}</p>
              </div>
            )}

            <div className="space-y-12">
              {sections.map((section) => {
                const sectionId = createSectionId(section.title);

                return (
                  <section key={section.title} id={sectionId}>
                    <h2 className="scroll-mt-24 text-2xl font-bold text-slate-900 sm:text-3xl">
                      {section.title}
                    </h2>

                    {section.paragraphs?.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="mt-5 text-lg leading-8 text-slate-700"
                      >
                        {paragraph}
                      </p>
                    ))}

                    {section.bullets && (
                      <ul className="mt-6 space-y-3">
                        {section.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex items-start gap-3 text-lg leading-8 text-slate-700"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-3 h-2 w-2 shrink-0 rounded-full bg-green-700"
                            />

                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.subsections?.map((subsection) => (
                      <div key={subsection.title} className="mt-8">
                        <h3 className="text-xl font-bold text-slate-900">
                          {subsection.title}
                        </h3>

                        {subsection.paragraphs?.map((paragraph) => (
                          <p
                            key={paragraph}
                            className="mt-4 text-lg leading-8 text-slate-700"
                          >
                            {paragraph}
                          </p>
                        ))}

                        {subsection.bullets && (
                          <ul className="mt-5 space-y-3">
                            {subsection.bullets.map((bullet) => (
                              <li
                                key={bullet}
                                className="flex items-start gap-3 leading-7 text-slate-700"
                              >
                                <span
                                  aria-hidden="true"
                                  className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-green-700"
                                />

                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </section>
                );
              })}
            </div>

            {children}
          </div>
        </div>
      </section>
    </main>
  );
}

export default LegalPage;
