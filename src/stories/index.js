// Import all story modules here. Add a new line for each story you add.
// import * as storySlug from './story-slug.js'
import * as improvingTruistDigital from './improving-truist-digital.js'
import * as structureFollowsCraft from './structure-follows-craft.js'
import * as aSystemBuiltForDesigners from './a-system-built-for-designers.js'
import * as solvingProblemsForProduct from './solving-problems-for-product.js'
import * as aCommonLanguageForPerformance from './a-common-language-for-performance.js'
import * as whatDesignersShuldActuallyBeDoing from './what-designers-should-actually-be-doing.js'
import * as operationalVisibilityAtScale from './operational-visibility-at-scale.js'
import * as mobileCheckDeposit from './mobile-check-deposit.js'

const allStories = [
  // storySlug,
  improvingTruistDigital,
  structureFollowsCraft,
  aSystemBuiltForDesigners,
  solvingProblemsForProduct,
  aCommonLanguageForPerformance,
  whatDesignersShuldActuallyBeDoing,
  operationalVisibilityAtScale,
  mobileCheckDeposit,
]

export function getAllStories() {
  return allStories
    .map(s => s.meta)
    .sort((a, b) => new Date(b.startDate) - new Date(a.startDate))
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
