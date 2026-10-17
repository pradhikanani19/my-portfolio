import { featured, additional } from '../data/projects.js'
import SectionHead from './SectionHead.jsx'
import ProjectCard from './ProjectCard.jsx'
import Reveal from './Reveal.jsx'

export default function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <SectionHead id="projects-title" label="Featured projects" title="Selected work." />
        <div className="project-list">
          {featured.map((p) => <ProjectCard key={p.id} p={p} />)}
        </div>

        <div className="additional">
          <p className="micro"><span className="brass-dot" aria-hidden="true" />Additional work</p>
          <div className="additional-grid">
            {additional.map((a) => (
              <Reveal key={a.title} className="card add-card">
                <span className="status">{a.status}</span>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
