import { lazy, Suspense, useCallback, useEffect, useMemo, useState } from 'react'
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom'

import Navbar from './components/Navbar.jsx'
import PageLoader from './components/PageLoader.jsx';
import { languages, translations } from './i18n';
import usePageMetadata from './hooks/usePageMetadata.js';
import { readBrowserStorage, writeBrowserStorage } from './utils/security.js';

const Home = lazy(() => import('./pages/Home.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Projects = lazy(() => import('./pages/Projects.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const LANGUAGE_STORAGE_KEY = 'portfolioLanguage';

const getInitialLanguage = () => {
    if (typeof window === 'undefined') return 'pt';

    const savedLanguage = readBrowserStorage(LANGUAGE_STORAGE_KEY);

    return savedLanguage === 'en' ? 'en' : 'pt';
};

const AppRoutes = ({ language, t }) => {
    const location = useLocation();

    usePageMetadata({ language, pathname: location.pathname, t });

    return (
        <Suspense fallback={<PageLoader label={t.common.loading} />}>
            <Routes>
                <Route path="/" element={<Home t={t}/>} />
                <Route path="/about" element={<About language={language} t={t}/>} />
                <Route path="/projects" element={<Projects language={language} t={t}/>} />
                <Route path="/contact" element={<Contact t={t} />} />
            </Routes>
        </Suspense>
    );
};

const App = () => {
    const [language, setLanguage] = useState(getInitialLanguage);
    const t = useMemo(() => translations[language] || translations.pt, [language]);
    const handleLanguageChange = useCallback((nextLanguage) => {
        setLanguage(nextLanguage);
    }, []);

    useEffect(() => {
        const activeLanguage = languages.find((item) => item.code === language) || languages[0];

        document.documentElement.lang = activeLanguage.htmlLang;
        writeBrowserStorage(LANGUAGE_STORAGE_KEY, language);
    }, [language]);

    return (
        <main className='bg-slate-300/20 h-full'>
            <Router>
                <Navbar language={language} setLanguage={handleLanguageChange} t={t} />
                <AppRoutes language={language} t={t} />
            </Router>
        </main>
    )
}

export default App
