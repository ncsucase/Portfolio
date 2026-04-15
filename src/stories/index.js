// Import all story modules here. Add a new line for each story you add.
// import * as storySlug from './story-slug.js'
import * as redesigningTruistDigital from './redesigning-truist-digital.js'

const allStories = [
  // storySlug,
  redesigningTruistDigital,
]

export function getAllStories() {
  return allStories
    .map(s => s.meta)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
}

export function getFeaturedStory() {
  const stories = getAllStories()
  return stories.find(s => s.featured) ?? stories[0] ?? null
}

export function getStoryBySlug(slug) {
  const found = allStories.find(s => s.meta.slug === slug)
  if (!found) return null
  return { meta: found.meta, content: found.content }
}
