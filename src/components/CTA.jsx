import { memo } from 'react'
import { Link } from 'react-router-dom'

const CTA = memo(({ t }) => {
  return (
    <section className="cta">
        <p className="cta-text">{t.cta.text} <br className="sm:block hidden" /></p>
        <Link to="/contact" className="btn">{t.cta.button}</Link>
    </section>
  )
});

CTA.displayName = 'CTA';

export default CTA
