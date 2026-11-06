import { useParams, Navigate } from 'react-router-dom'
import { getSampleBySlug } from '../samples/index.js'
import SampleLayout from '../layouts/SampleLayout'

export default function Sample() {
  const { slug } = useParams()
  const sample = getSampleBySlug(slug)

  if (!sample) return <Navigate to="/work" replace />

  return (
    <>
      <title>{sample.meta.title} — Mikey Cestari</title>
      <SampleLayout sample={sample} />
    </>
  )
}
