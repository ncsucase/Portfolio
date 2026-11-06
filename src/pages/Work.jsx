import { getAllStories } from '../stories/index.js'
import { getAllSamples } from '../samples/index.js'
import SampleCard from '../components/SampleCard'
import StoryCard from '../components/StoryCard'
import './Work.css'

export default function Work() {
  const stories = getAllStories()
  const samples = getAllSamples()

  return (
    <div className="work">
      <title>Work | Mikey Cestari</title>

      <section className="work-header">
        <h1 className="work-heading">Work</h1>
        <p className="work-subheading">
          Problems worth solving, solutions worth building, results that measured up.
        </p>
      </section>

      {samples.length > 0 && (
        <>
          <section className="work-section-header">
            <h2 className="work-section-heading">Design Samples</h2>
            <p className="work-section-subheading">How I’ve improved the design of experiences.</p>
          </section>
          <section className="work-samples">
            {samples.map(sample => (
              <SampleCard key={sample.slug} sample={sample} />
            ))}
          </section>
        </>
      )}

      <section className="work-section-header">
        <h2 className="work-section-heading">Stories</h2>
        <p className="work-section-subheading">How I’ve approached and solved leadership problems.</p>
      </section>

      {stories.length > 0 ? (
        <section className="work-list">
          {stories.map(story => (
            <StoryCard key={story.slug} story={story} />
          ))}
        </section>
      ) : (
        <section className="work-empty">
          <p>Work stories coming soon.</p>
        </section>
      )}
    </div>
  )
}
