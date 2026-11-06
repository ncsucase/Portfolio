import CTA from '../components/CTA'
import Icon from '../components/Icon'
import StoryRenderer from '../components/StoryRenderer'
import './StoryLayout.css'

// Same shell as StoryLayout, but the header meta is only client + challenge, and there is no summary.
export default function SampleLayout({ sample, backTo = '/work', backLabel = 'Back to work' }) {
  const { meta, content } = sample

  return (
    <article className="story-layout">
      <header className="story-header">
        <div className="story-header-inner">
          <h1 className="story-title">{meta.title}</h1>
          <dl className="story-meta">
            {meta.client && (
              <div className="story-meta-item">
                <dt>Client</dt>
                <dd>{meta.client}</dd>
              </div>
            )}
            {meta.challenge && (
              <div className="story-meta-item story-meta-item--outcome">
                <dt>Challenge</dt>
                <dd>{meta.challenge}</dd>
              </div>
            )}
          </dl>
        </div>
      </header>

      <div className="story-body story-body--no-summary">
        <StoryRenderer blocks={content} />
      </div>

      <footer className="story-footer">
        <CTA to={backTo}>
          <Icon name="arrow-left" />
          {backLabel}
        </CTA>
      </footer>
    </article>
  )
}
