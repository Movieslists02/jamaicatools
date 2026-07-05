import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Tools", path: "/tools" },
  { name: "Blog", path: "/blog" },
  { name: "Downloads", path: "/downloads" },
  { name: "AI", path: "/ai" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navClass = ({ isActive }) =>
    isActive
      ? "text-green-700 font-semibold"
      : "text-slate-700 hover:text-green-700 font-medium";

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-green-700 text-lg text-white">
              JT
            </span>
            <div>
              <p className="text-xl font-bold leading-none text-slate-900">
                JamaicaTools
              </p>
              <p className="text-xs font-medium text-slate-500">
                Free tools for the Caribbean
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <NavLink key={link.path} to={link.path} className={navClass}>
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              to="/tools"
              className="flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 hover:border-green-700 hover:text-green-700"
            >
              <FiSearch />
              Search Tools
            </Link>

            <Link
              to="/tools"
              className="rounded-full bg-green-700 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-800"
            >
              Browse Tools
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-xl border border-slate-200 p-2 text-slate-700 lg:hidden"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-slate-200 py-4 lg:hidden">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={navClass}
                >
                  {link.name}
                </NavLink>
              ))}

              <Link
                to="/tools"
                onClick={() => setMenuOpen(false)}
                className="rounded-full bg-green-700 px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Browse Tools
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;