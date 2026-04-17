import StatCard from './StatCard'
import Timeline from './Timeline'
import ComparisonBlock from './ComparisonBlock'
import * as InlineSvgs from '../assets/inline-svgs'
import './StoryRenderer.css'

export default function StoryRenderer({ blocks }) {
  return (
    <div className="story-renderer">
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'paragraph':
            return <p key={i} className="story-p">{block.text}</p>

          case 'heading':
            return block.level === 2
              ? <h2 key={i} className="story-h2">{block.text}</h2>
              : <h3 key={i} className="story-h3">{block.text}</h3>

          case 'image':
            return (
              <figure key={i} className="story-figure">
                <img
                  src={block.src}
                  alt={block.alt ?? ''}
                  loading="lazy"
                  decoding="async"
                />
                {block.caption && (
                  <figcaption className="story-figcaption">{block.caption}</figcaption>
                )}
              </figure>
            )

          case 'stats':
            return <StatCard key={i} block={block} />

          case 'timeline':
            return <Timeline key={i} block={block} />

          case 'comparison':
            return <ComparisonBlock key={i} block={block} />

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

          case 'inline-svg': {
            const Svg = InlineSvgs[block.name]
            if (!Svg) return null
            return (
              <figure key={i} className="story-figure">
                <Svg aria-label={block.alt ?? ''} role="img" />
                {block.caption && (
                  <figcaption className="story-figcaption">{block.caption}</figcaption>
                )}
              </figure>
            )
          }

          default:
            return null
        }
      })}
    </div>
  )
}
