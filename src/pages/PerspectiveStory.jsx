import { useParams, Navigate } from 'react-router-dom'
import { getPerspectiveBySlug } from '../perspectives/index.js'
import StoryLayout from '../layouts/StoryLayout'

export default function PerspectiveStory() {
  const { slug } = useParams()
  const perspective = getPerspectiveBySlug(slug)

  if (!perspective) return <Navigate to="/perspectives" replace />

  return (
    <>
      <title>{perspective.meta.title} — Mikey Cestari</title>
      <StoryLayout story={perspective} backTo="/perspectives" backLabel="Back to perspectives" />
    </>
  )
}
