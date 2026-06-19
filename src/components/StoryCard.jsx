import { Link } from 'react-router-dom'
import Icon from './Icon'
import Tag from './Tag'
import { getDuration, formatStartDate } from '../utils/getDuration'
import './StoryCard.css'

export default function StoryCard({ story, basePath = 'stories', type = 'work' }) {
  const duration = story.status === 'in progress'
    ? getDuration(story.startDate)
    : story.duration || null;

  return (
    <Link to={`/${basePath}/${story.slug}`} className="story-card">

      <div className="story-card__header">
        {(story.theme) && (
          <Tag>{story.theme}</Tag>
        )}
        
        {(story.contribution) && (
          <div className="story-card__tags">
            <Tag>{story.contribution}</Tag>
          </div>
        )}
        {story.status && (
          <div className="story-card__meta-group">
            <div className="story-card__meta">
              <span>{formatStartDate(story.startDate)}</span>
              {story.status === "complete" && duration && <span>({duration})</span>}
            </div>
            {story.status !== "complete" && (
              <Tag variant="caution">{story.status}</Tag>
            )}
          </div>
        )}
      </div>

      <h3 className="story-card__title">{story.title}</h3>
      {story.excerpt && <p className="story-card__excerpt">{story.excerpt}</p>}
      <div className="story-card__footer">
        {story.readTime && (
          <span className="story-card__read-time">{story.readTime} minute read</span>
        )}
        <span className="story-card__cta">
          Read <Icon name="arrow-right" />
        </span>
      </div>
    </Link>
  )
}
