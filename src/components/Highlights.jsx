import { HIGHLIGHTS } from '../data/siteConfig.js'
import Reveal from './Reveal.jsx'

export default function Highlights() {
  return (
    <section className="highlights">
      <div className="container highlights__grid">
        {HIGHLIGHTS.map((h, i) => (
          <Reveal key={h.title} delay={i * 0.08} className="highlights__item">
            <span className="highlights__icon" aria-hidden="true">{h.icon}</span>
            <div>
              <h3>{h.title}</h3>
              <p>{h.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
