import { useEffect, useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import Navbar from './components/Navbar.jsx'
import { Home, About, Projects, Contact } from './pages';
import { languages, translations } from './i18n';

const getInitialLanguage = () => {
    const savedLanguage = window.localStorage.getItem('portfolioLanguage');

    return savedLanguage === 'en' ? 'en' : 'pt';
};

const App = () => {
    const [language, setLanguage] = useState(getInitialLanguage);
    const t = translations[language] || translations.pt;

    useEffect(() => {
        const activeLanguage = languages.find((item) => item.code === language) || languages[0];

        document.documentElement.lang = activeLanguage.htmlLang;
        window.localStorage.setItem('portfolioLanguage', language);
    }, [language]);

    return (
        <main className='bg-slate-300/20 h-full'>
            <Router>
                <Navbar language={language} setLanguage={setLanguage} t={t} />
                <Routes>
                    <Route path="/" element={<Home t={t}/>} />
                    <Route path="/about" element={<About language={language} t={t}/>} />
                    <Route path="/projects" element={<Projects language={language} t={t}/>} />
                    <Route path="/contact" element={<Contact t={t} />} />
                </Routes>
            </Router>
        </main>
    )
}

export default App
