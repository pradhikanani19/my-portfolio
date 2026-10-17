// Dev-only hint for fields still to be filled in. Never rendered in production.
export default function Hint({ children }) {
  if (!import.meta.env.DEV) return null
  return <span className="dev-hint">{children}</span>
}
