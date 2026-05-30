import { Link } from 'react-router-dom'
import { getAllPerspectives } from '../perspectives/index.js'
import Icon from '../components/Icon'
import Tag from '../components/Tag'
import { formatStartDate } from '../utils/getDuration'
import './Perspectives.css'

export default function Perspectives() {
  const perspectives = getAllPerspectives()

  return (
    <div className="perspectives">
      <title>Perspectives | Mikey Cestari</title>

      <section className="perspectives-header">
        <h1 className="perspectives-heading">Perspectives</h1>
        <p className="perspectives-subheading">
          Thoughts on design leadership, craft, and building the discipline.
        </p>
      </section>

      {perspectives.length === 0 ? (
        <section className="perspectives-empty">
          <p>Perspectives coming soon.</p>
        </section>
      ) : (
        <section className="perspectives-list">
          {perspectives.map(p => (
            <Link
              key={p.slug}
              to={`/perspectives/${p.slug}`}
              className="story-card story-card--compact perspective-card"
            >
              <div className="story-card__title">
                <h3>{p.title}</h3>
                <div className="story-card__meta">
                  <span>{formatStartDate(p.date)}</span>
                </div>
              </div>
              <div className="story-card__body">
                {p.excerpt && (
                  <p className="story-card__excerpt">{p.excerpt}</p>
                )}
                {p.tags?.length > 0 && (
                  <div className="story-card__tags">
                    {p.tags.map(t => <Tag key={t} label={t} />)}
                  </div>
                )}
              </div>
              <div className="story-card__cta">
                Read
                <Icon name="arrow-right" size="18px" />
              </div>
            </Link>
          ))}
        </section>
      )}
    </div>
  )
}
