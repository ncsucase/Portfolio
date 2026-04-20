import { getAllStories, getFeaturedStory } from '../stories/index.js'
import StoryCard from '../components/StoryCard'
import headshot from '../assets/Profile-transparent-background.png'
import './Home.css'

export default function Home() {
  const featured = getFeaturedStory()
  const rest = featured
    ? getAllStories().filter(s => s.slug !== featured.slug)
    : getAllStories()

  return (
    <div className="home">
      <title>Mikey Cestari | Design Director</title>

      <section className="home-bio">
        <h1>Mikey Cestari</h1>
        <div className="home-bio-photo">
          <img src={headshot} alt="Mikey Cestari" />
        </div>
        <div className="home-bio-card">
          <p>I'm a Design Director leading design at Truist's authenticated digital banking organization — a 44-person team spanning UI, UX, and Content design. I focus on building the structures, processes, and systems that let design teams do their best work and make their impact legible to the people around them.</p>
          <p>The stories on this site share a common thread: a problem others had accepted, a solution worth building, and results that measured up.</p>
        </div>
      </section>

      <section className="home-section">
        <h2>What I do</h2>
        <ul className="home-skills">
          <li>Lead and grow design orgs across UI, UX, and content disciplines</li>
          <li>Build workflow systems and tooling that give design teams operational leverage</li>
          <li>Work across org boundaries to solve shared problems</li>
          <li>Structure teams for craft quality, not managerial convenience</li>
          <li>Make design impact measurable in terms engineering and product respect</li>
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
