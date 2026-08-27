import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

function ToolFAQ({ faqs = [] }) {
  const [openIndex, setOpenIndex] = useState(0);

  if (faqs.length === 0) {
    return null;
  }

  return (
    <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <p className="text-sm font-bold uppercase tracking-wider text-green-700">
        Questions and answers
      </p>

      <h2 className="mt-2 text-3xl font-bold text-slate-900">
        Frequently asked questions
      </h2>

      <div className="mt-7 divide-y divide-slate-200">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={faq.question} className="py-2">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="flex w-full items-center justify-between gap-5 py-4 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-semibold text-slate-900">
                  {faq.question}
                </span>

                <FiChevronDown
                  aria-hidden="true"
                  className={`shrink-0 text-green-700 transition ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <p className="pb-5 pr-8 leading-7 text-slate-600">
                  {faq.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ToolFAQ;
