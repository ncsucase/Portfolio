// Import all perspective modules here. Add a new line for each perspective you add.
import * as whenUsersWillScrollPastTheFold from './when-users-will-scroll-past-the-fold'
import * as whatUsersAskForIsNotAlwaysWhatTheysWant from './what-users-ask-for-is-not-always-what-they-want.js'

const allPerspectives = [
  whenUsersWillScrollPastTheFold,
  whatUsersAskForIsNotAlwaysWhatTheysWant,
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
