import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className="cta">
        <p className="cta-text">Tem um projeto em mente ou deseja entrar em contato? <br className="sm:block hidden" /></p>
        <Link to="/contact" className="btn">Entrar em contato</Link>
    </section>
  )
}

export default CTA