// Design samples: a title + image card that links to a sample page.
import * as truistAccountSummaryScreens from './truist-account-summary-screens.js'
import * as truistDigitalBranding from './truist-digital-branding.js'
import * as aBetterCandlesticksChart from './a-better-candlesticks-chart.js'

const allSamples = [
  truistAccountSummaryScreens,
  truistDigitalBranding,
  aBetterCandlesticksChart,
]

export function getAllSamples() {
  return allSamples.map(s => s.meta)
}

export function getSampleBySlug(slug) {
  const found = allSamples.find(s => s.meta.slug === slug)
  return found ? { meta: found.meta, content: found.content } : null
}
