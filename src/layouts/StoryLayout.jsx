import CTA from '../components/CTA'
import Icon from '../components/Icon'
import StoryRenderer from '../components/StoryRenderer'
import { getDuration, formatStartDate } from '../utils/getDuration'
import './StoryLayout.css'

export default function StoryLayout({ story }) {
  const { meta, content } = story
  const duration = meta.status === 'in progress'
    ? getDuration(meta.startDate)
    : meta.duration || null;
  const summary = content.find(b => b.type === 'summary')
  const body = content.filter(b => b.type !== 'summary')

  return (
    <article className="story-layout">
      <header className="story-header">
        <div className="story-header-inner">
          <h1 className="story-title">{meta.title}</h1>
          <dl className="story-meta">
            {meta.status && (
              <div className="story-meta-item">
                <dt>Status</dt>
                <dd className="story-status" data-status={meta.status}>{meta.status}</dd>
              </div>
            )}
            {meta.startDate && (
              <div className="story-meta-item">
                <dt>Start Date</dt>
                <dd>{formatStartDate(meta.startDate)}</dd>
              </div>
            )}
            {duration && (
              <div className="story-meta-item">
                <dt>Duration</dt>
                <dd>{duration}</dd>
              </div>
            )}
            {meta.role && (
              <div className="story-meta-item story-meta-item--role">
                <dt>Role</dt>
                <dd>{meta.role}</dd>
              </div>
            )}
            {meta.tags.length > 0 && (
              <div className="story-meta-item story-meta-item--tags">
                <dt>Tags</dt>
                <dd>{meta.tags.join(', ')}</dd>
              </div>
            )}
            {/* {meta.outcome && (
              <div className="story-meta-item story-meta-item--outcome">
                <dt>Outcome</dt>
                <dd>{meta.outcome}</dd>
              </div>
            )} */}
          </dl>
        </div>
      </header>

      {summary && (
        <div className="story-summary-band">
          <div className="story-summary-inner">
            <h2 className="story-summary-title heading-2">Summary</h2>
            <p className="story-summary-text">{summary.text}</p>
          </div>
        </div>
      )}

      <div className="story-body">
        <StoryRenderer blocks={body} />
      </div>

      <footer className="story-footer">
        <CTA to="/work">
          <Icon name="arrow-left" />
          Back to work stories
        </CTA>
      </footer>
    </article>
  )
}
