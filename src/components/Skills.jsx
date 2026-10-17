import { skills } from '../data/profile.js'
import SectionHead from './SectionHead.jsx'
import Reveal from './Reveal.jsx'

const LEVEL = { used: 'Used in projects', familiar: 'Familiar with', learning: 'Currently learning' }

export default function Skills() {
  return (
    <section id="skills" className="section tint" aria-labelledby="skills-title">
      <div className="container">
        <SectionHead id="skills-title" label="Skills" title="Tools I work with." />
        <ul className="legend" aria-label="Legend">
          {Object.entries(LEVEL).map(([k, v]) => (
            <li key={k}><span className={`dot dot-${k}`} aria-hidden="true" />{v}</li>
          ))}
        </ul>
        <div className="skills-grid">
          {skills.map((g) => (
            <Reveal key={g.category} className="card skill-card">
              <h3>{g.category}</h3>
              <ul>
                {g.items.map((s) => (
                  <li key={s.name}>
                    <span className={`dot dot-${s.level}`} aria-hidden="true" />
                    {s.name}
                    <span className="sr-only"> — {LEVEL[s.level]}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
