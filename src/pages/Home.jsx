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

      <section className="home-bio">
        <h1>Mikey Cestari</h1>
        <p>I'm a Design Director with experience leading design teams across product, brand, and systems work. I'm focused on building cultures and processes where design has clear impact — where the work is rigorous, the team is trusted, and outcomes are measurable.</p>
        <p>This site contains some stories from that work: the decisions made, the teams built, and the results that followed.</p>
      </section>

      <section className="home-section">
        <h2>What I do</h2>
        <ul className="home-skills">
          <li>Lead and grow design teams</li>
          <li>Build and scale design systems</li>
          <li>Partner with product and engineering on strategy</li>
          <li>Establish design culture and process</li>
        </ul>
      </section>

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
          <h2 className="home-list-heading">Other Stories</h2>
          {rest.map(story => (
            <StoryCard key={story.slug} story={story} variant="compact" />
          ))}
        </section>
      )}

    </div>
  )
}
