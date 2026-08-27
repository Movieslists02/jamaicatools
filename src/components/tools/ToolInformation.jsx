function ToolInformation({ content }) {
  if (!content) {
    return null;
  }

  return (
    <div className="mt-12 space-y-10">
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">
          About this tool
        </h2>

        <p className="mt-4 text-lg leading-8 text-slate-700">
          {content.intro}
        </p>
      </section>

      {content.sections?.map((section) => (
        <section
          key={section.heading}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
        >
          <h2 className="text-2xl font-bold text-slate-900">
            {section.heading}
          </h2>

          {section.paragraphs?.map((paragraph) => (
            <p
              key={paragraph}
              className="mt-4 text-base leading-8 text-slate-700 sm:text-lg"
            >
              {paragraph}
            </p>
          ))}

          {section.bullets && (
            <ul className="mt-5 space-y-3">
              {section.bullets.map((bullet) => (
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
        </section>
      ))}

      {content.example && (
        <section className="rounded-3xl border border-green-200 bg-green-50 p-6 sm:p-8">
          <p className="text-sm font-bold uppercase tracking-wider text-green-700">
            Example
          </p>

          <h2 className="mt-2 text-2xl font-bold text-slate-900">
            {content.example.title}
          </h2>

          {content.example.paragraphs?.map((paragraph) => (
            <p
              key={paragraph}
              className="mt-4 leading-8 text-slate-700"
            >
              {paragraph}
            </p>
          ))}
        </section>
      )}

      <div className="text-sm text-slate-500">
        Last reviewed: {content.reviewedDate}
      </div>
    </div>
  );
}

export default ToolInformation;
