import { contact } from '../data/profile.js'
import SectionHead from './SectionHead.jsx'

export default function Contact() {
  const ext = { target: '_blank', rel: 'noopener noreferrer' }
  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container">
        <SectionHead id="contact-title" label="Contact" title="Let's connect." />
        <p className="lead">
          I'm open to internships, collaborations and conversations about data and web projects. Reach out and I'll get back to you.
        </p>
        <div className="actions">
          <a className="btn btn-primary" href={`mailto:${contact.email}`}>{contact.email}</a>
          <a className="btn btn-ghost" href={contact.linkedin} {...ext}>LinkedIn<span className="sr-only"> (opens in new tab)</span></a>
          <a className="btn btn-ghost" href={contact.github} {...ext}>GitHub<span className="sr-only"> (opens in new tab)</span></a>
        </div>
      </div>
    </section>
  )
}
