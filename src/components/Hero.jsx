import { profile } from '../data/profile.js'

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="container">
        <p className="micro"><span className="brass-dot" aria-hidden="true" />{profile.role}</p>
        <h1 id="hero-title" className="hero-name">
          {profile.name.split(' ').map((w) => <span key={w}>{w} </span>)}
        </h1>
        <div className="hero-bar" aria-hidden="true" />
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="hero-tag">
              {profile.headline[0]} <span className="accent">{profile.headline[1]}</span>
            </p>
            <p className="lead">{profile.intro}</p>
            <div className="actions">
              <a className="btn btn-primary" href="#projects">View projects</a>
              <a className="btn btn-ghost" href="#contact">Get in touch</a>
            </div>
          </div>
          <aside className="hero-panel" aria-label="Focus areas">
            <p className="micro on-dark">Focus</p>
            <ul>
              <li><span>01</span>Data analysis &amp; visualization</li>
              <li><span>02</span>Machine learning foundations</li>
              <li><span>03</span>Practical web applications</li>
            </ul>
            <svg className="hero-lines" viewBox="0 0 200 60" aria-hidden="true" focusable="false">
              <polyline points="0,48 30,40 60,44 90,26 120,32 150,14 200,8" fill="none" stroke="#147D78" strokeWidth="1.5" />
              <line x1="0" y1="56" x2="200" y2="56" stroke="#526274" strokeWidth=".6" />
              <circle cx="150" cy="14" r="2.5" fill="#B58A4B" />
            </svg>
          </aside>
        </div>
      </div>
    </section>
  )
}
