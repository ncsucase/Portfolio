import { useEffect, useRef, useState } from 'react'
import { renderInlineText } from './StoryRenderer'

export default function StoryTable({ block }) {
  const scrollRef = useRef(null)
  const [moreRight, setMoreRight] = useState(false)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    // 1px tolerance: scrollLeft can be fractional on zoomed/high-DPI screens
    const update = () => setMoreRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1)
    update()
    el.addEventListener('scroll', update, { passive: true })
    const ro = new ResizeObserver(update)
    ro.observe(el)
    if (el.firstElementChild) ro.observe(el.firstElementChild)
    return () => {
      el.removeEventListener('scroll', update)
      ro.disconnect()
    }
  }, [])

  return (
    <figure className="story-figure">
      {(block.title || block.subtitle) && (
        <div className="story-figure-header" style={block.titleAlign ? { textAlign: block.titleAlign } : undefined}>
          {block.title && <p className="story-figure-title">{block.title}</p>}
          {block.subtitle && <p className="story-figure-subtitle">{block.subtitle}</p>}
        </div>
      )}
      <div className={`story-table-frame${moreRight ? ' has-more-right' : ''}`}>
        <div
          ref={scrollRef}
          className="story-table-wrap"
          tabIndex={0}
          role="region"
          aria-label={block.alt ?? block.title ?? 'Table'}
        >
          <table className="story-table">
            <thead>
              <tr>
                {block.columns.map((col, j) => (
                  <th key={j} scope="col">
                    {col ? renderInlineText(col) : <span className="story-table-sr">{block.rowHeaders ? 'Row' : ''}</span>}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, r) => (
                <tr key={r}>
                  {row.map((cell, c) =>
                    block.rowHeaders && c === 0
                      ? <th key={c} scope="row">{renderInlineText(cell)}</th>
                      : <td key={c}>{renderInlineText(cell)}</td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {block.caption && <figcaption className="story-figcaption">{block.caption}</figcaption>}
    </figure>
  )
}
