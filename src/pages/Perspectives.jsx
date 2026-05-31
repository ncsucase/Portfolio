import { getAllPerspectives } from '../perspectives/index.js'
import StoryCard from '../components/StoryCard'
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

      {perspectives.length > 0 ? (
        <section className="perspectives-list">
          {perspectives.map(story => (
            <StoryCard key={story.slug} story={story} basePath="perspectives" />
          ))}
        </section>
      ) : (
        <section className="perspectives-empty">
          <p>Perspectives coming soon.</p>
        </section>
      )}
    </div>
  )
}
