import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'

const InfoBox = ({ text, link, btnText, arrowAlt }) => (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} alt={arrowAlt} className="w-4 h-4 object-contain" />
        </Link>
    </div>
)

const getContent = (t) => ({
    1: (
        <div className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            <h1>
                {t.home.introGreeting} <span className="font-semibold">João Travalini</span>
            </h1>
            <p>{t.home.role}</p>
            <p className="text-xs">"{t.home.hint}"</p>
        </div>
    ),
    2: (
        <InfoBox text={t.home.stages[2].text} link="/about" btnText={t.home.stages[2].btnText} arrowAlt={t.common.arrowAlt} />
    ),
    3: (
        <InfoBox text={t.home.stages[3].text} link="/projects" btnText={t.home.stages[3].btnText} arrowAlt={t.common.arrowAlt} />
    ),
    4: (
        <InfoBox text={t.home.stages[4].text} link="/contact" btnText={t.home.stages[4].btnText} arrowAlt={t.common.arrowAlt} />
    ),
})

const HomeInfo = ({ currentStage, t }) => {
    return getContent(t)[currentStage] || null;
}

export default HomeInfo
