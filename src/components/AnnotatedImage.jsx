import { useEffect, useRef, useState, useSyncExternalStore } from 'react'
import './AnnotatedImage.css'

// Selection state shared by every AnnotatedImage with the same `group`,
// so one choice drives the tooltips on all of them.
const store = new Map() // group -> { value, listeners }
function getEntry(group) {
  if (!store.has(group)) store.set(group, { value: null, listeners: new Set() })
  return store.get(group)
}
function useGroupSelection(group, fallback) {
  const entry = getEntry(group)
  const value = useSyncExternalStore(
    cb => { entry.listeners.add(cb); return () => entry.listeners.delete(cb) },
    () => entry.value,
  )
  const set = v => { entry.value = v; entry.listeners.forEach(l => l()) }
  return [value ?? fallback, set]
}

// block: {
//   src, alt, group,
//   label: 'Problems:',
//   options: [{ id, label }],
//   tooltips: { [optionId]: [{ x, y, text }] }   // x / y are % of the image
// }
export default function AnnotatedImage({ block }) {
  const { src, alt, options, tooltips = {}, group = 'default', label, status } = block
  const [shared, setSelected] = useGroupSelection(group, options[0].id)
  // The shared choice may not exist in this image's options (e.g. 'branding'); fall back to the first.
  const selected = options.some(o => o.id === shared) ? shared : options[0].id
  const [openIndex, setOpenIndex] = useState(null)
  const stageRef = useRef(null)

  // Close on selection change
  useEffect(() => setOpenIndex(null), [selected])

  // Close on outside click / Escape
  useEffect(() => {
    if (openIndex == null) return
    const onDown = e => {
      if (!e.target.closest('.annotated-tooltip, .annotated-trigger')) setOpenIndex(null)
    }
    const onKey = e => { if (e.key === 'Escape') setOpenIndex(null) }
    document.addEventListener('pointerdown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [openIndex])

  const points = tooltips[selected] ?? []

  return (
    <figure className={`story-figure annotated${status ? ` annotated--${status}` : ''}`}>
      <div className="annotated-selector" role="radiogroup" aria-label={label ?? 'Problems'}>
        {label && <span className="annotated-selector-label">{label}</span>}
        {options.map(o => (
          <button
            key={o.id}
            type="button"
            role="radio"
            aria-checked={o.id === selected}
            className="annotated-pill"
            onClick={() => setSelected(o.id)}
          >
            {o.id === selected && (
              <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 8.5l3.2 3.2L13 4.8" /></svg>
            )}
            {o.label}
          </button>
        ))}
      </div>

      <div className="annotated-stage" ref={stageRef}>
        <img src={src} alt={alt ?? ''} loading="lazy" decoding="async" />
        {points.map((p, i) => {
          const isOpen = openIndex === i
          const alignRight = p.x > 50 // box extends left of trigger
          const above = p.y > 65 // box extends above trigger
          return (
            <div key={`${selected}-${i}`}>
              <button
                type="button"
                className={`annotated-trigger${isOpen ? ' is-open' : ''}`}
                style={{ left: `${p.x}%`, top: `${p.y}%` }}
                aria-label="Show annotation"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : i)}
              />
              {isOpen && (
                <div
                  className="annotated-tooltip"
                  role="dialog"
                  style={{
                    ...(alignRight ? { right: `${100 - p.x}%`, marginRight: '-12px' } : { left: `${p.x}%`, marginLeft: '-12px' }),
                    ...(above ? { bottom: `${100 - p.y}%`, marginBottom: '28px' } : { top: `${p.y}%`, marginTop: '28px' }),
                  }}
                >
                  <p>{p.text}</p>
                  <button type="button" className="annotated-close" onClick={() => setOpenIndex(null)}>Close</button>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </figure>
  )
}
