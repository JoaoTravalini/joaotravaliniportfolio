import { NavLink } from "react-router-dom"
import { languages } from "../i18n"

const Navbar = ({ language, setLanguage, t }) => {
  const getLinkClassName = ({ isActive }) => isActive ? 'text-blue-500' : 'text-black';

  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-10 h-10 shrink-0 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
        aria-label={t.nav.homeLabel}
      >
        <p className="blue-gradient_text">JP</p>
      </NavLink>

      <div className="flex items-center gap-3 sm:gap-5">
        <nav className="flex text-base sm:text-lg gap-3 sm:gap-7 font-medium">
          <NavLink to="/about" className={getLinkClassName}>
            {t.nav.about}
          </NavLink>
          <NavLink to="/projects" className={getLinkClassName}>
            {t.nav.projects}
          </NavLink>
        </nav>

        <div
          className="flex shrink-0 items-center gap-1 rounded-full bg-white/85 px-1.5 py-1 shadow-md backdrop-blur-md"
          aria-label={t.languageSwitcher.label}
        >
          {languages.map((item) => {
            const isActive = item.code === language;

            return (
              <button
                key={item.code}
                type="button"
                className={`flex h-9 w-9 items-center justify-center rounded-full text-xl transition focus:outline-none focus:ring-2 focus:ring-blue-500 ${isActive ? 'bg-blue-500 shadow-sm' : 'hover:bg-blue-50'}`}
                aria-label={t.languageSwitcher.changeTo[item.code]}
                aria-pressed={isActive}
                title={item.name}
                onClick={() => setLanguage(item.code)}
              >
                <span className={`flag-icon ${item.flagClass}`} aria-hidden="true" />
                <span className="sr-only">{item.shortName}</span>
              </button>
            )
          })}
        </div>
      </div>
    </header>
  )
}

export default Navbar
