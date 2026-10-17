import Reveal from './Reveal.jsx'
import Hint from './Hint.jsx'

export default function ProjectCard({ p }) {
  const rows = [
    ['Problem', p.problem],
    ['Approach', p.approach],
  ].filter(([, v]) => v)

  return (
    <Reveal as="article" className={`project ${p.placeholder ? 'is-placeholder' : ''}`} aria-labelledby={`${p.id}-t`}>
      <div className="project-side" aria-hidden="true">
        <span className="project-numeral">{p.index}</span>
        <span className="project-rule" />
      </div>
      <div className="project-body">
        <p className="micro">
          <span className="num">{p.index}</span>
          <span className={`status ${p.placeholder ? 'status-pending' : ''}`}>{p.status}</span>
        </p>
        <h3 id={`${p.id}-t`}>{p.title}</h3>
        <p className="subtitle">{p.subtitle}</p>
        <p>{p.summary}</p>

        {rows.length > 0 && (
          <dl className="facts">
            {rows.map(([k, v]) => (<div key={k}><dt>{k}</dt><dd>{v}</dd></div>))}
          </dl>
        )}

        {p.features?.length ? (
          <ul className="features">{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
        ) : <Hint>Add 3–5 verified features</Hint>}

        {p.contribution ? (
          <p className="contrib"><strong>My contribution:</strong> {p.contribution}</p>
        ) : <Hint>Add your contribution</Hint>}

        {p.limitation && <p className="note"><strong>Note:</strong> {p.limitation}</p>}

        {p.stack?.length ? (
          <ul className="tags" aria-label="Technologies">{p.stack.map((t) => <li key={t}>{t}</li>)}</ul>
        ) : <Hint>Add confirmed tech stack</Hint>}

        {p.placeholder && (
          <p className="placeholder-note">
            Full case study coming soon — the description will be finalized once the implemented features and stack are confirmed.
          </p>
        )}

       <div className="actions">
  {p.live ? (
    <a
      className="btn btn-primary"
      href={p.live}
      target="_blank"
      rel="noopener noreferrer"
    >
      Live project
      <span className="sr-only">
        {" "}— {p.title} (opens in new tab)
      </span>
    </a>
  ) : (
    <span className="btn btn-disabled" aria-disabled="true">
      Live link coming soon
    </span>
  )}

  {p.source && (
    <a
      className="btn btn-ghost"
      href={p.source}
      target="_blank"
      rel="noopener noreferrer"
    >
      Source code
      <span className="sr-only">
        {" "}— {p.title} (opens in new tab)
      </span>
    </a>
  )}
</div>
      </div>
    </Reveal>
  )
}
