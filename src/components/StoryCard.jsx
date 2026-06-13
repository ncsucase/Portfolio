import { Link } from 'react-router-dom'
import Icon from './Icon'
import Tag from './Tag'
import { getDuration, formatStartDate } from '../utils/getDuration'
import './StoryCard.css'

export default function StoryCard({ story, basePath = 'stories', showTags = false }) {
  const duration = story.status === 'in progress'
    ? getDuration(story.startDate)
    : story.duration || null;

  return (
    <Link to={`/${basePath}/${story.slug}`} className="story-card">
      {(story.startDate || story.status) && (<div className="story-card__header">
        <div className="story-card__meta">
          <span>{formatStartDate(story.startDate)}</span>
          {duration && <span>({duration})</span>}
        </div>
        {story.status && (
          <span className="story-card__status-badge" data-status={story.status}>
            {story.status}
          </span>
        )}
      </div>)}
      {showTags && story.tags?.length > 0 && (
        <div className="story-card__tags">
          {story.tags.map(tag => <Tag key={tag} label={tag} />)}
        </div>
      )}
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
