import { useState } from "react";
import { FiMenu, FiSearch, FiX } from "react-icons/fi";
import {
  Link,
  NavLink,
  useNavigate,
} from "react-router-dom";
import navigation from "../../data/navigation";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerSearch, setHeaderSearch] = useState("");
  const navigate = useNavigate();

  const navClass = ({ isActive }) =>
    isActive
      ? "font-semibold text-green-700"
      : "font-medium text-slate-700 transition hover:text-green-700";

  const handleSearch = (event) => {
    event.preventDefault();

    const query = headerSearch.trim();

    if (!query) {
      navigate("/tools");
      return;
    }

    navigate(`/tools?q=${encodeURIComponent(query)}`);
    setHeaderSearch("");
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link to="/" className="flex shrink-0 items-center gap-2">
            <img
              src="/jamaicatools-palm-logo.svg"
              alt=""
              aria-hidden="true"
              className="h-10 w-10 rounded-2xl"
            />

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
            {navigation.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={navClass}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <form onSubmit={handleSearch}>
              <label htmlFor="header-tool-search" className="sr-only">
                Search tools
              </label>

              <div className="relative">
                <FiSearch
                  aria-hidden="true"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  id="header-tool-search"
                  type="search"
                  value={headerSearch}
                  onChange={(event) =>
                    setHeaderSearch(event.target.value)
                  }
                  placeholder="Search tools..."
                  autoComplete="off"
                  className="w-48 rounded-full border border-slate-300 py-2 pl-11 pr-4 text-sm outline-none transition focus:border-green-700 focus:ring-4 focus:ring-green-100 xl:w-56"
                />
              </div>
            </form>

            <Link
              to="/tools"
              className="whitespace-nowrap rounded-full bg-green-700 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-green-800"
            >
              Browse Tools
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            className="rounded-xl border border-slate-200 p-2 text-slate-700 lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-slate-200 py-4 lg:hidden">
            <nav className="flex flex-col gap-4">
              {navigation.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={navClass}
                >
                  {link.name}
                </NavLink>
              ))}

              <form onSubmit={handleSearch} className="pt-2">
                <label
                  htmlFor="mobile-header-tool-search"
                  className="sr-only"
                >
                  Search tools
                </label>

                <div className="relative">
                  <FiSearch
                    aria-hidden="true"
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="mobile-header-tool-search"
                    type="search"
                    value={headerSearch}
                    onChange={(event) =>
                      setHeaderSearch(event.target.value)
                    }
                    placeholder="Search tools..."
                    autoComplete="off"
                    className="h-12 w-full rounded-xl border border-slate-300 bg-white pl-11 pr-4 outline-none transition focus:border-green-700 focus:ring-4 focus:ring-green-100"
                  />
                </div>
              </form>

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
