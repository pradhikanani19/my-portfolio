export default function SectionHead({ id, label, title }) {
  return (
    <header className="section-head">
      <p className="micro"><span className="brass-dot" aria-hidden="true" />{label}</p>
      <h2 id={id}>{title}</h2>
    </header>
  )
}
