import { InlineSvgs } from '../assets/inline-svgs'
import './StoryRenderer.css'

const INLINE_PATTERN = /(\[\[\d+\]\]|\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*|\*[^*]+\*)/g

export function renderInlineText(text) {
  const parts = text.split(INLINE_PATTERN)
  return parts.map((part, i) => {
    const fnMatch = part.match(/^\[\[(\d+)\]\]$/)
    if (fnMatch) {
      const n = fnMatch[1]
      return <sup key={i}><a id={`fn-ref-${n}`} href={`#fn-${n}`} className="story-footnote-ref">{n}</a></sup>
    }
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (linkMatch) {
      return <a key={i} href={linkMatch[2]} className="story-inline-link" target="_blank" rel="noopener noreferrer">{linkMatch[1]}</a>
    }
    const boldMatch = part.match(/^\*\*([^*]+)\*\*$/)
    if (boldMatch) return <strong key={i}>{boldMatch[1]}</strong>
    const emMatch = part.match(/^\*([^*]+)\*$/)
    if (emMatch) return <em key={i}>{emMatch[1]}</em>
    return part
  })
}

export default function StoryRenderer({ blocks }) {
  return (
    <div className="story-renderer">
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'paragraph':
            return <p key={i} className="story-p">{renderInlineText(block.text)}</p>

          case 'heading':
            return block.level === 2
              ? <h2 key={i} className="story-h2">{block.text}</h2>
              : <h3 key={i} className="story-h3">{block.text}</h3>

          case 'image':
            return (
              <figure key={i} className="story-figure">
                {(block.title || block.subtitle) && (
                  <div className="story-figure-header" style={block.titleAlign ? { textAlign: block.titleAlign } : undefined}>
                    {block.title && <p className="story-figure-title">{block.title}</p>}
                    {block.subtitle && <p className="story-figure-subtitle">{block.subtitle}</p>}
                  </div>
                )}
                {block.srcSm ? (
                  <picture>
                    <source srcSet={block.srcSm} media="(max-width: 640px)" />
                    <img src={block.src} alt={block.alt ?? ''} loading="lazy" decoding="async" />
                  </picture>
                ) : (
                  <img src={block.src} alt={block.alt ?? ''} loading="lazy" decoding="async" />
                )}
                {block.caption && (
                  <figcaption className="story-figcaption">{block.caption}</figcaption>
                )}
              </figure>
            )

          case 'list': {
            const Tag = block.style === 'unordered' ? 'ul' : 'ol'
            return (
              <Tag key={i} className="story-list">
                {block.items.map((item, j) => (
                  <li key={j} className="story-list-item">{item}</li>
                ))}
              </Tag>
            )
          }

          case 'columns':
            return (
              <div key={i} className="story-columns">
                {block.columns.map((col, j) => (
                  <div key={j} className="story-column">
                    {col.map((nestedBlock, k) => (
                      <StoryRenderer key={k} blocks={[nestedBlock]} />
                    ))}
                  </div>
                ))}
              </div>
            )

          case 'inline-svg': {
            const Svg = InlineSvgs[block.name]
            if (!Svg) return null
            const MobileSvg = block.mobileVariant ? InlineSvgs[block.mobileVariant] : null
            return (
              <figure key={i} className="story-figure">
                {(block.title || block.subtitle) && (
                  <div className="story-figure-header" style={block.titleAlign ? { textAlign: block.titleAlign } : undefined}>
                    {block.title && <p className="story-figure-title">{block.title}</p>}
                    {block.subtitle && <p className="story-figure-subtitle">{block.subtitle}</p>}
                  </div>
                )}
                <div className="story-figure-container" style={{
                  ...(block.align ? { display: 'flex', justifyContent: block.align } : {}),
                  ...(block.maxWidth != null ? { maxWidth: block.maxWidth } : {}),
                  ...(block.minWidth != null ? { minWidth: block.minWidth } : {}),
                }}>
                  <Svg aria-label={block.alt ?? ''} role="img" className={MobileSvg ? 'svg-desktop-only' : undefined} />
                  {MobileSvg && (
                    <MobileSvg
                      aria-label={block.alt ?? ''}
                      role="img"
                      className="svg-mobile-only"
                      style={{
                        ...(block.mobileMaxWidth  != null ? { maxWidth:  block.mobileMaxWidth  } : {}),
                        ...(block.mobileMaxHeight != null ? { maxHeight: block.mobileMaxHeight } : {}),
                      }}
                    />
                  )}
                </div>
                {block.caption && (
                  <figcaption className="story-figcaption">{block.caption}</figcaption>
                )}
              </figure>
            )
          }

          case 'aside':
            return (
              <aside key={i} className="story-aside">
                {block.label && <p className="story-aside-label">{block.label}</p>}
                <p className="story-aside-text">{block.text}</p>
              </aside>
            )

          default:
            return null
        }
      })}
    </div>
  )
}
