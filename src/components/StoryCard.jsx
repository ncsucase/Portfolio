import { Link } from 'react-router-dom'
import Tag from './Tag'
import Icon from './Icon'
import CTA from './CTA'
import { getDuration, formatStartDate } from '../utils/getDuration'
import './StoryCard.css'

export default function StoryCard({ story, variant = 'compact' }) {
  const duration = story.status === 'in progress'
    ? getDuration(story.startDate)
    : story.duration || null;

  if (variant === 'featured') {
    return (
      <div className="story-card story-card--featured">
        <div className="story-card__body">
          <div className="story-card__meta">
            <span>{formatStartDate(story.startDate)}</span>
            {duration && (
              <>
                <span>({duration})</span>
              </>
            )}
            {story.status && (
              <>
                <span className="story-card__dot">•</span>
                <span className="story-card__status" data-status={story.status}>{story.status}</span>
              </>
            )}
          </div>
          <h2 className="story-card__title">{story.title}</h2>
          <div className="story-card__tags">
            {story.tags.map(t => <Tag key={t} label={t} />)}
          </div>
          <p className="story-card__excerpt">{story.excerpt}</p>
          <CTA to={`/stories/${story.slug}`}>
            Read the story
            <Icon name="arrow-right" />
          </CTA>
        </div>
        {story.heroImage && (
          <div className="story-card__hero-img">
            <img src={story.heroImage} alt="" loading="lazy" decoding="async" />
          </div>
        )}
      </div>
    )
  }

  return (
    <Link to={`/stories/${story.slug}`} className="story-card story-card--compact">
      <div className="story-card__title">
          <h3>{story.title}</h3>
          <div className="story-card__meta">
            <span>{formatStartDate(story.startDate)}</span>
            {duration && (
              <>
                <span>({duration})</span>
              </>
            )}
            {story.status && (
              <>
                <span className="story-card__dot">•</span>
                <span className="story-card__status" data-status={story.status}>{story.status}</span>
              </>
            )}
        </div>
      </div>
      <div className="story-card__body">
        {story.excerpt && <p className="story-card__excerpt">{story.excerpt}</p>}
      </div>
      <div className="story-card__cta">
        Read
        <Icon name="arrow-right" size="18px" />
      </div>
    </Link>
  )
}
