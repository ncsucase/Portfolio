import { Link } from 'react-router-dom'
import './CTA.css'

export default function CTA({ to, href, onClick, children, className, variant = 'secondary', ...rest }) {
  const cls = ['cta', `cta--${variant}`, className].filter(Boolean).join(' ')
  if (to) return <Link to={to} className={cls} {...rest}>{children}</Link>
  if (href) return <a href={href} className={cls} {...rest}>{children}</a>
  return <button type="button" className={cls} onClick={onClick} {...rest}>{children}</button>
}
