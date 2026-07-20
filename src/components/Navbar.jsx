import { memo } from "react"
import { NavLink } from "react-router-dom"
import { languages } from "../i18n"
import { github } from "../assets/icons"
import { getSafeExternalUrl } from "../utils/security.js"

const githubUrl = getSafeExternalUrl('https://github.com/JoaoTravalini');

const Navbar = memo(({ language, setLanguage, t }) => {
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

      <div className="flex items-center gap-2 sm:gap-5">
        <nav className="flex text-sm sm:text-lg gap-2 sm:gap-7 font-medium">
          <NavLink to="/about" className={getLinkClassName}>
            {t.nav.about}
          </NavLink>
          <NavLink to="/projects" className={getLinkClassName}>
            {t.nav.projects}
          </NavLink>
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            referrerPolicy="no-referrer"
            className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/85 shadow-md backdrop-blur-md transition hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label={t.nav.github}
            title="GitHub"
          >
            <img src={github} alt="" className="h-5 w-5 object-contain" aria-hidden="true" />
          </a>

          <div
            className="flex items-center gap-1 rounded-full bg-white/85 px-1 py-0.5 sm:px-1.5 sm:py-1 shadow-md backdrop-blur-md"
            aria-label={t.languageSwitcher.label}
            role="group"
          >
            {languages.map((item) => {
              const isActive = item.code === language;

              return (
                <button
                  key={item.code}
                  type="button"
                  className={`flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full text-xl transition focus:outline-none focus:ring-2 focus:ring-blue-500 ${isActive ? 'bg-blue-500 shadow-sm' : 'hover:bg-blue-50'}`}
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
      </div>
    </header>
  )
});

Navbar.displayName = 'Navbar';

export default Navbar
