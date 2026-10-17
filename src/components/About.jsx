import { profile } from '../data/profile.js'
import SectionHead from './SectionHead.jsx'
import Reveal from './Reveal.jsx'
import Education from './Education.jsx'

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionHead id="about-title" label="About" title="Curious about data, practical about building." />
        <Reveal className="about-grid">
          <div className="prose">
            {profile.about.map((p) => <p key={p}>{p}</p>)}
          </div>
          <Education />
        </Reveal>
      </div>
    </section>
  )
}
