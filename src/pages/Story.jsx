import { useParams, Navigate } from 'react-router-dom'
import { getStoryBySlug } from '../stories/index.js'
import StoryLayout from '../layouts/StoryLayout'

export default function Story() {
  const { slug } = useParams()
  const story = getStoryBySlug(slug)

  if (!story) return <Navigate to="/" replace />

  return (
    <>
      <title>{story.meta.title} — Mikey Cestari</title>
      <StoryLayout story={story} />
    </>
  )
}
