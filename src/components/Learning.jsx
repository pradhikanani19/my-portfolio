import { certifications, activities } from '../data/profile.js'
import SectionHead from './SectionHead.jsx'

export default function Learning() {
  if (!certifications.length && !activities.length) return null
  return (
    <section id="learning" className="section tint" aria-labelledby="learning-title">
      <div className="container">
        <SectionHead id="learning-title" label="Learning & activities" title="Beyond the projects." />
        <div className="additional-grid">
          {certifications.map((c) => (
            <div className="card add-card" key={c.title}>
              <span className="status">Certification</span>
              <h3>{c.title}</h3>
              <p>{c.provider}</p>
              {c.url && <a href={c.url} target="_blank" rel="noopener noreferrer">View credential</a>}
            </div>
          ))}
          {activities.map((a) => (
            <div className="card add-card" key={a.title}>
              <span className="status">Activity</span>
              <h3>{a.title}</h3>
              <p><em>{a.org}</em></p>
              <p>{a.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
