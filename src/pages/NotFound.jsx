import CTA from '../components/CTA'
import './NotFound.css'

export default function NotFound() {
  return (
    <div className="not-found">
      <title>Page not found | Mikey Cestari</title>
      <span className="not-found-code">404</span>
      <h1 className="not-found-heading">Page not found</h1>
      <p className="not-found-message">The page you're looking for doesn't exist or may have moved.</p>
      <CTA to="/" variant="secondary">Back to home</CTA>
    </div>
  )
}
