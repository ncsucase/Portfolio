import { Link } from 'react-router-dom'
import './CTA.css'

export default function CTA({ to, href, children }) {
  if (to) {
    return <Link to={to} className="cta">{children}</Link>
  }
  return <a href={href} className="cta">{children}</a>
}
