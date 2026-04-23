import { Link } from 'react-router-dom'
import Tag from './Tag'
import Icon from './Icon'
import CTA from './CTA'
import './StoryCard.css'

export default function StoryCard({ story, variant = 'compact' }) {
  if (variant === 'featured') {
    return (
      <div className="story-card story-card--featured">
        <div className="story-card__body">
          <div className="story-card__meta">
            <span>{story.date}</span>
            {story.status && (
              <>
                <span className="story-card__dot">•</span>
                <span className="story-card__status" data-status={story.status}>{story.status}</span>
              </>
            )}
          </div>
          <h2 className="story-card__title">{story.title}</h2>
          <p className="story-card__excerpt">{story.excerpt}</p>
          <div className="story-card__tags">
            {story.tags.map(t => <Tag key={t} label={t} />)}
          </div>
          <CTA to={`/stories/${story.slug}`}>
            Read more
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
      <div className="story-card__meta">
        <span>{story.date}</span>
        {story.status && (
          <>
            <span className="story-card__dot">•</span>
            <span className="story-card__status" data-status={story.status}>{story.status}</span>
          </>
        )}
      </div>
      <div className="story-card__body">
        <h3 className="story-card__title">{story.title}</h3>
        {story.excerpt && <p className="story-card__excerpt">{story.excerpt}</p>}
      </div>
      <Icon name="arrow-right" size="18px" />
    </Link>
  )
}
