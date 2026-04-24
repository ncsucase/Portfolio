import './StatCard.css'

const colorVars = {
  accent:  'var(--accent',
  error:   'var(--color-error)',
  warning: 'var(--color-warning)',
  success: 'var(--color-success)',
  info:    'var(--color-info)',
}

export default function StatCard({ block }) {
  const variant = block.variant ?? 'value-first'

  return (
    <div className={`stat-grid stat-grid--${variant}`}>
      {block.items.map((item, i) => {
        const valueColor = item.color ? colorVars[item.color] : 'var(--text-h)'
        return (
          <div key={i} className="stat-card">
            {variant === 'label-first' && (
              <span className="stat-card__label">{item.label}</span>
            )}
            <span className="stat-card__value" style={{ color: valueColor }}>
              {item.value}
            </span>
            {variant === 'value-first' && (
              <span className="stat-card__label">{item.label}</span>
            )}
            {item.description && (
              <p className="stat-card__desc">{item.description}</p>
            )}
          </div>
        )
      })}
    </div>
  )
}
