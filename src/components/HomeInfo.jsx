import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain" />
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Olá, eu sou <span className="font-semibold">João Travalini</span> 👋
            <br />
            Engenheiro de computação 
        </h1>
    ),
    2: (
        <InfoBox text="Construí uma base sólida através de diversas experiências profissionais e projetos práticos, principalmente atuando na empresa júnior e em trabalhos freelance" link="/about" btnText="Saiba mais"/>
    ),
    3: (
         <InfoBox text="Liderei múltiplos projetos para o sucesso ao longo dos anos. Curioso sobre o impacto?" link="/projects" btnText="Ver portfólio"/>
    ),
    4: (
         <InfoBox text="Precisa de um projeto ou deseja entrar em contato?" link="/contact" btnText="Entrar em contato"/>
    ),
}

const HomeInfo = ({ currentStage }) => {
    return renderContent[currentStage] || null;
}

export default HomeInfo