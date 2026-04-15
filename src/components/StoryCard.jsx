import { Link } from 'react-router-dom'
import Tag from './Tag'
import './StoryCard.css'

export default function StoryCard({ story, variant = 'compact' }) {
  if (variant === 'featured') {
    return (
      <Link to={`/stories/${story.slug}`} className="story-card story-card--featured">
        {story.heroImage && (
          <div className="story-card__hero-img">
            <img src={story.heroImage} alt="" loading="lazy" decoding="async" />
          </div>
        )}
        <div className="story-card__body">
          <div className="story-card__tags">
            {story.tags.map(t => <Tag key={t} label={t} />)}
          </div>
          <h2 className="story-card__title">{story.title}</h2>
          <p className="story-card__excerpt">{story.excerpt}</p>
          <div className="story-card__meta">
            <span>{story.role}</span>
            <span className="story-card__dot">·</span>
            <span>{story.date}</span>
            {story.status && (
              <span>
                <span className="story-card__dot">·</span>
                <span>{story.status}</span>
              </span>
            )}
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link to={`/stories/${story.slug}`} className="story-card story-card--compact">
      <div className="story-card__body">
        <div className="story-card__top">
          <h3 className="story-card__title">{story.title}</h3>
          <div className="story-card__meta">
            <span>{story.role}</span>
            <span className="story-card__dot">·</span>
            <span>{story.date}</span>
          </div>
        </div>
        <p className="story-card__excerpt">{story.excerpt}</p>
        <div className="story-card__tags">
          {story.tags.map(t => <Tag key={t} label={t} />)}
        </div>
      </div>
      <span className="story-card__arrow" aria-hidden="true">→</span>
    </Link>
  )
}
