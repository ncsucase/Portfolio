// Import all perspective modules here. Add a new line for each perspective you add.
// import * as perspectiveSlug from './perspective-slug.js'
import * as whenUsersWillScrollPastTheFold from './when-users-will-scroll-past-the-fold'

const allPerspectives = [
  whenUsersWillScrollPastTheFold,
]

export function getAllPerspectives() {
  return allPerspectives
    .map(p => p.meta)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
}

export function getPerspectiveBySlug(slug) {
  const found = allPerspectives.find(p => p.meta.slug === slug)
  if (!found) return null
  return { meta: found.meta, content: found.content }
}
