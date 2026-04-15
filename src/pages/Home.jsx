import { getAllStories, getFeaturedStory } from '../stories/index.js'
import StoryCard from '../components/StoryCard'
import './Home.css'

export default function Home() {
  const featured = getFeaturedStory()
  const rest = featured
    ? getAllStories().filter(s => s.slug !== featured.slug)
    : getAllStories()

  return (
    <div className="home">
      <title>Mikey Cestari — Design Director</title>

      {featured ? (
        <section className="home-hero">
          <StoryCard story={featured} variant="featured" />
        </section>
      ) : (
        <section className="home-empty">
          <p>Stories coming soon.</p>
        </section>
      )}

      {rest.length > 0 && (
        <section className="home-list">
          {rest.map(story => (
            <StoryCard key={story.slug} story={story} variant="compact" />
          ))}
        </section>
      )}
    </div>
  )
}
