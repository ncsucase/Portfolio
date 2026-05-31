import { Link } from 'react-router-dom'
import Icon from './Icon'
import { getDuration, formatStartDate } from '../utils/getDuration'
import './StoryCard.css'

export default function StoryCard({ story }) {
  const duration = story.status === 'in progress'
    ? getDuration(story.startDate)
    : story.duration || null;

  return (
    <Link to={`/stories/${story.slug}`} className="story-card">
      <div className="story-card__header">
        <div className="story-card__meta">
          <span>{formatStartDate(story.startDate)}</span>
          {duration && <span>({duration})</span>}
        </div>
        {story.status && (
          <span className="story-card__status-badge" data-status={story.status}>
            {story.status}
          </span>
        )}
      </div>
      <h3 className="story-card__title">{story.title}</h3>
      {story.excerpt && <p className="story-card__excerpt">{story.excerpt}</p>}
      <div className="story-card__footer">
        {story.readTime && (
          <span className="story-card__read-time">{story.readTime} minute read</span>
        )}
        <span className="cta cta--quaternary story-card__cta">
          Read <Icon name="arrow-right" />
        </span>
      </div>
    </Link>
  )
}
