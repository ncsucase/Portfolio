import { Link } from 'react-router-dom'
import './SampleCard.css'

export default function SampleCard({ sample }) {
  return (
    <Link to={`/samples/${sample.slug}`} className="sample-card">
      <h3 className="sample-card__title">{sample.title}</h3>
      {/* Inline SVG component (imported with ?react) so color tokens apply */}
      {typeof sample.image === 'function' ? (
        <sample.image
          className="sample-card__image"
          data-fit={sample.imageFit ?? 'inset'}
          role="img"
          aria-label={sample.imageAlt ?? ''}
          aria-hidden={sample.imageAlt ? undefined : true}
        />
      ) : sample.image && (
        <img
          className="sample-card__image"
          data-fit={sample.imageFit ?? 'inset'}
          src={sample.image}
          alt={sample.imageAlt ?? ''}
          loading="lazy"
          decoding="async"
        />
      )}
    </Link>
  )
}
