import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h2 className="text-xl font-bold text-green-700">🇯🇲 JamaicaTools</h2>
            <p className="mt-3 text-sm text-slate-600">
              Free online calculators, business tools, AI tools, PDF tools and guides for Jamaica and the Caribbean.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Tools</h3>
            <div className="mt-3 space-y-2 text-sm text-slate-600">
              <p>Loan Calculator</p>
              <p>Salary Calculator</p>
              <p>Currency Converter</p>
              <p>PDF Tools</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Company</h3>
            <div className="mt-3 space-y-2 text-sm">
              <Link to="/about" className="block text-slate-600 hover:text-green-700">About</Link>
              <Link to="/blog" className="block text-slate-600 hover:text-green-700">Blog</Link>
              <Link to="/contact" className="block text-slate-600 hover:text-green-700">Contact</Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Legal</h3>
            <div className="mt-3 space-y-2 text-sm">
              <Link to="/privacy" className="block text-slate-600 hover:text-green-700">Privacy Policy</Link>
              <Link to="/terms" className="block text-slate-600 hover:text-green-700">Terms & Conditions</Link>
            </div>
          </div>
        </div>

        <p className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-500">
          © 2026 JamaicaTools. Built by Betterworks Communication.
        </p>
      </div>
    </footer>
  );
}

export default Footer;