import { getAllStories, getFeaturedStory } from '../stories/index.js'
import StoryCard from '../components/StoryCard'
import './Work.css'

export default function Work() {
  const featured = getFeaturedStory()
  const rest = featured
    ? getAllStories().filter(s => s.slug !== featured.slug)
    : getAllStories()

  return (
    <div className="work">
      <title>Work | Mikey Cestari</title>

      {featured ? (
        <section className="work-hero">
          <StoryCard story={featured} variant="featured" />
        </section>
      ) : (
        <section className="work-empty">
          <p>Stories coming soon.</p>
        </section>
      )}

      {rest.length > 0 && (
        <section className="work-list">
          <h2 className="work-list-heading">More Stories</h2>
          {rest.map(story => (
            <StoryCard key={story.slug} story={story} variant="compact" />
          ))}
        </section>
      )}
    </div>
  )
}
