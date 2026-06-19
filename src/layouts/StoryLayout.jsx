import CTA from '../components/CTA'
import Icon from '../components/Icon'
import Tag from '../components/Tag'
import StoryRenderer, { renderInlineText } from '../components/StoryRenderer'
import { getDuration, formatStartDate } from '../utils/getDuration'
import './StoryLayout.css'

export default function StoryLayout({ story, backTo = '/work', backLabel = 'Back to work stories' }) {
  const { meta, content } = story
  const duration = meta.status === 'in progress'
    ? getDuration(meta.startDate)
    : meta.duration || null;
  const displayDate = meta.startDate || meta.date || null;
  const summary = content.find(b => b.type === 'summary')
  const footnotes = content.filter(b => b.type === 'footnote').sort((a, b) => a.id - b.id)
  const body = content.filter(b => b.type !== 'summary' && b.type !== 'footnote')

  return (
    <article className="story-layout">
      <header className="story-header">
        <div className="story-header-inner">
          <h1 className="story-title">{meta.title}</h1>
          <dl className="story-meta">
            {meta.status && (
              <div className="story-meta-item">
                <dt>Status</dt>
                {meta.status !== "complete" && (
                  <dd className="story-status" data-status={meta.status}>
                    <Tag variant="caution">
                      <Icon name="hourglass" />
                      {meta.status}
                    </Tag>
                  </dd>
                )}
                {meta.status === "complete" && (
                  <dd className="story-status" data-status={meta.status}>
                    <Icon name="check-circle" />
                    <span className="story-status-text">{meta.status}</span>
                  </dd>
                )}
              </div>
            )}
            {displayDate && (
              <div className="story-meta-item">
                <dt>{meta.startDate ? 'Start Date' : 'Date'}</dt>
                <dd><Icon name="calendar" />{formatStartDate(displayDate)}</dd>
              </div>
            )}
            {duration && (
              <div className="story-meta-item">
                <dt>Duration</dt>
                <dd><Icon name="time-refresh" />{duration}</dd>
              </div>
            )}
            {meta.contribution && (
              <div className="story-meta-item story-meta-item--contribution">
                <dt>Contribution</dt>
                <dd><Icon name="person" />{meta.contribution}</dd>
              </div>
            )}
            {meta.theme && (
              <div className="story-meta-item story-meta-item--theme">
                <dt>Theme</dt>
                <dd>{meta.theme}</dd>
              </div>
            )}
          </dl>
        </div>
      </header>

      {summary && (
        <div className="story-summary-band">
          <div className="story-summary-inner">
            <h2 className="story-summary-title heading-2">Summary</h2>
            <p className="story-summary-text">{renderInlineText(summary.text)}</p>
          </div>
        </div>
      )}

      <div className="story-body">
        <StoryRenderer blocks={body} />
      </div>

      {footnotes.length > 0 && (
        <section className="story-footnotes">
          <h2 className="story-footnotes-title">Notes</h2>
          <ol className="story-footnotes-list">
            {footnotes.map(fn => (
              <li key={fn.id} id={`fn-${fn.id}`} className="story-footnote-item">
                {renderInlineText(fn.text)}
                <a href={`#fn-ref-${fn.id}`} className="story-footnote-backlink" aria-label="Back to reference">↑</a>
              </li>
            ))}
          </ol>
        </section>
      )}

      <footer className="story-footer">
        <CTA to={backTo}>
          <Icon name="arrow-left" />
          {backLabel}
        </CTA>
      </footer>
    </article>
  )
}
