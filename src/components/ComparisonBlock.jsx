import { useState } from 'react'
import './ComparisonBlock.css'

function ComparisonPanel({ src, alt, label, truncate }) {
  const [expanded, setExpanded] = useState(false)
  const isTruncated = truncate != null && !expanded
  const maxHeight = isTruncated
    ? (typeof truncate === 'number' ? truncate : 400)
    : undefined

  return (
    <div className="comparison-panel">
      {label != null && (
        <div className="comparison-label">{label}</div>
      )}
      <div
        className={`comparison-image-wrap${isTruncated ? ' comparison-image-wrap--truncated' : ''}`}
        style={maxHeight != null ? { maxHeight } : undefined}
      >
        {src ? (
          <img src={src} alt={alt ?? ''} loading="lazy" decoding="async" />
        ) : (
          <div className="comparison-placeholder">Coming soon</div>
        )}
        {isTruncated && <div className="comparison-fade" />}
      </div>
      {truncate != null && !expanded && (
        <button className="comparison-expand-btn" onClick={() => setExpanded(true)}>
          Show more
        </button>
      )}
    </div>
  )
}

export default function ComparisonBlock({ block }) {
  const { before, after, layout = 'side-by-side', caption } = block

  return (
    <figure className={`comparison-block comparison-block--${layout}`}>
      <div className="comparison-grid">
        {before && (
          <ComparisonPanel
            src={before.src}
            alt={before.alt}
            label={before.label !== undefined ? before.label : 'Before'}
            truncate={before.truncate}
          />
        )}
        {after !== undefined && (
          <ComparisonPanel
            src={after?.src}
            alt={after?.alt}
            label={after?.label !== undefined ? after.label : 'After'}
            truncate={after?.truncate}
          />
        )}
      </div>
      {caption && (
        <figcaption className="story-figcaption">{caption}</figcaption>
      )}
    </figure>
  )
}
