import { useRef, useState, useEffect } from 'react'
import './Timeline.css'

const colorVars = {
  error:   'var(--color-error)',
  warning: 'var(--color-warning)',
  success: 'var(--color-success)',
  info:    'var(--color-info)',
}

function TimelineInner({ block, truncated }) {
  return (
    <div className={`timeline${truncated ? ' timeline--truncated' : ''}`}>
      <div className="timeline__track" aria-hidden="true" />
      {block.items.map((item, i) => (
        <div key={i} className="timeline__group">
          <div className="timeline__group-header">
            {item.quarter && <span className="timeline__quarter">{item.quarter}</span>}
          </div>
          <div className="timeline__events-row">
            {item.events.map((event, j) => {
              const dotColor = event.color ? colorVars[event.color] : 'var(--text)'
              return (
                <div key={j} className="timeline__item">
                  <div className="timeline__dot" style={{ background: dotColor }} />
                  <div className="timeline__content">
                    {event.date && <span className="timeline__date">{event.date}</span>}
                    <span className="timeline__label">{event.label}</span>
                    {event.sublabel && (
                      <span className="timeline__sublabel">{event.sublabel}</span>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}

export default function Timeline({ block }) {
  const variant = block.variant ?? 'full'
  const scrollRef = useRef(null)
  const [fades, setFades] = useState({ left: false, right: false })

  useEffect(() => {
    if (variant !== 'truncated') return
    const el = scrollRef.current
    if (!el) return

    const update = () => setFades({
      left:  el.scrollLeft > 4,
      right: el.scrollLeft + el.clientWidth < el.scrollWidth - 4,
    })

    update()
    el.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      el.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [variant])

  if (variant === 'truncated') {
    return (
      <div className="timeline-wrapper">
        {fades.left  && <div className="timeline-fade timeline-fade--left"  aria-hidden="true" />}
        {fades.right && <div className="timeline-fade timeline-fade--right" aria-hidden="true" />}
        <div className="timeline-scroll" ref={scrollRef}>
          <TimelineInner block={block} truncated />
        </div>
      </div>
    )
  }

  return <TimelineInner block={block} truncated={false} />
}
