import Tag from '../components/Tag'
import StoryRenderer from '../components/StoryRenderer'
import './StoryLayout.css'

export default function StoryLayout({ story }) {
  const { meta, content } = story
  const summary = content.find(b => b.type === 'summary')
  const body = content.filter(b => b.type !== 'summary')

  return (
    <article className="story-layout">
      <header className="story-header">
        <div className="story-header-inner">
          {meta.tags.length > 0 && (
            <div className="story-tags">
              {meta.tags.map(t => <Tag key={t} label={t} />)}
            </div>
          )}
          <h1 className="story-title">{meta.title}</h1>
          <dl className="story-meta">
            {meta.role && (
              <div className="story-meta-item">
                <dt>Role</dt>
                <dd>{meta.role}</dd>
              </div>
            )}
            {meta.date && (
              <div className="story-meta-item">
                <dt>Date</dt>
                <dd>{meta.date}</dd>
              </div>
            )}
            {meta.status && (
              <div className="story-meta-item">
                <dt>Status</dt>
                <dd>{meta.status}</dd>
              </div>
            )}
            {meta.outcome && (
              <div className="story-meta-item story-meta-item--outcome">
                <dt>Outcome</dt>
                <dd>{meta.outcome}</dd>
              </div>
            )}
          </dl>
        </div>
      </header>

      {summary && (
        <div className="story-summary-band">
          <p className="story-summary-text">{summary.text}</p>
        </div>
      )}

      <div className="story-body">
        <StoryRenderer blocks={body} />
      </div>
    </article>
  )
}
