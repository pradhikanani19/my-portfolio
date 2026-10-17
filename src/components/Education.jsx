import { education as e } from '../data/profile.js'
import Hint from './Hint.jsx'

export default function Education() {
  return (
    <div className="card edu" aria-label="Education">
      <p className="micro">Education</p>
      <h3>{e.degree}{e.specialization && <> · {e.specialization}</>}</h3>
      <dl>
        {e.college ? <><dt>Institution</dt><dd>{e.college}</dd></> : <Hint>Add college name in profile.js</Hint>}
        {e.expectedGraduation && <><dt>Expected graduation</dt><dd>{e.expectedGraduation}</dd></>}
        {e.cgpa && <><dt>CGPA</dt><dd>{e.cgpa}</dd></>}
      </dl>
    </div>
  )
}
