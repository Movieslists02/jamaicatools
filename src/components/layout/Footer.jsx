import { Link } from "react-router-dom";

const popularTools = [
  {
    name: "Salary Calculator",
    path: "/tools/salary-calculator",
  },
  {
    name: "Income Tax Calculator",
    path: "/tools/income-tax-calculator",
  },
  {
    name: "Merge PDF",
    path: "/tools/merge-pdf",
  },
  {
    name: "AI Studio",
    path: "/tools/ai-writer",
  },
];

const toolCategories = [
  {
    name: "Finance Tools",
    path: "/tools?category=Finance",
  },
  {
    name: "PDF Tools",
    path: "/tools?category=PDF%20Tools",
  },
  {
    name: "Image Tools",
    path: "/tools?category=Image%20Tools",
  },
  {
    name: "AI Tools",
    path: "/tools?category=AI%20Tools",
  },
];

const companyLinks = [
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
  {
    name: "FAQ",
    path: "/faq",
  },
  {
    name: "Blog",
    path: "/blog",
  },
];

const legalLinks = [
  {
    name: "Privacy Policy",
    path: "/privacy",
  },
  {
    name: "Terms & Conditions",
    path: "/terms",
  },
  {
    name: "Cookie Policy",
    path: "/cookies",
  },
  {
    name: "Disclaimer",
    path: "/disclaimer",
  },
  {
    name: "Accessibility",
    path: "/accessibility",
  },
  {
    name: "AI Usage Policy",
    path: "/ai-policy",
  },
];

function FooterLinkGroup({ title, links }) {
  return (
    <div>
      <h3 className="font-bold text-slate-900">{title}</h3>

      <div className="mt-4 space-y-3 text-sm">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="block text-slate-600 transition hover:text-green-700"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-green-700 font-bold text-white">
                JT
              </span>

              <div>
                <p className="text-xl font-bold leading-none text-slate-900">
                  JamaicaTools
                </p>

                <p className="mt-1 text-xs font-medium text-slate-500">
                  Free tools for the Caribbean
                </p>
              </div>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-600">
              Free online calculators, PDF tools, image utilities, AI
              resources and practical guides for Jamaica and the Caribbean.
            </p>

            <Link
              to="/tools"
              className="mt-6 inline-flex rounded-xl bg-green-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-800"
            >
              Browse All Tools
            </Link>
          </div>

          <FooterLinkGroup
            title="Popular Tools"
            links={popularTools}
          />

          <FooterLinkGroup
            title="Categories"
            links={toolCategories}
          />

          <FooterLinkGroup
            title="Company"
            links={companyLinks}
          />

          <FooterLinkGroup
            title="Legal"
            links={legalLinks}
          />
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-7 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} JamaicaTools. All rights reserved.</p>

          <p>
            Built by{" "}
            <a
              href="https://bc-da.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-slate-600 transition hover:text-green-700 hover:underline"
            >
              Betterworks Communication
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
