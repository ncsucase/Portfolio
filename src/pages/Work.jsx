import { getAllStories } from '../stories/index.js'
import StoryCard from '../components/StoryCard'
import './Work.css'

export default function Work() {
  const stories = getAllStories()

  return (
    <div className="work">
      <title>Work | Mikey Cestari</title>

      <section className="work-header">
        <h1 className="work-heading">Work</h1>
        <p className="work-subheading">
          Problems worth solving, solutions worth building, results that measured up.
        </p>
      </section>

      {stories.length > 0 ? (
        <section className="work-list">
          {stories.map(story => (
            <StoryCard key={story.slug} story={story} variant="compact" />
          ))}
        </section>
      ) : (
        <section className="work-empty">
          <p>Stories coming soon.</p>
        </section>
      )}
    </div>
  )
}
