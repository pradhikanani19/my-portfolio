import { profile } from '../data/profile.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p><strong>{profile.name}</strong> · © {new Date().getFullYear()}</p>
        <p className="closing">{profile.closingLine}</p>
      </div>
    </footer>
  )
}
