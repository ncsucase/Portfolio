import './Tag.css'

export default function Tag({ children, variant }) {
  const cls = ['tag', variant && `tag--${variant}`].filter(Boolean).join(' ')
  return <span className={cls}>{children}</span>
}
