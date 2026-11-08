// To add a Figma SVG:
// 1. Export as SVG from Figma, drop the file into src/assets/svgs/<story-slug>/
// 2. Import it below using the ?react suffix: import MyVisual from './svgs/story-slug/my-visual.svg?react'
// 3. Add the named export to InlineSvgs: myVisual: MyVisual
// 4. Reference it in a story file: { type: 'inline-svg', name: 'myVisual', alt: '...' }

// a better candlestick chart
import ExampleCandlesBearish from './svgs/a-better-candlestick-chart/example-candles-bearish.svg?react'
import ExampleCandlesBullish from './svgs/a-better-candlestick-chart/example-candles-bullish.svg?react'
import NewCandlestickChart from './svgs/a-better-candlestick-chart/new-candlestick-chart.svg?react'
import TypicalCandlestickChart from './svgs/a-better-candlestick-chart/typical-candlestick-chart.svg?react'
import ExampleBearishFilled from './svgs/a-better-candlestick-chart/example-bearish-filled.svg?react'
import ExampleBearishRed from './svgs/a-better-candlestick-chart/example-bearish-red.svg?react'
import ExampleBullishHollow from './svgs/a-better-candlestick-chart/example-bullish-hollow.svg?react'
import ExampleBullishGreen from './svgs/a-better-candlestick-chart/example-bullish-green.svg?react'
import ExampleBullishGradient from './svgs/a-better-candlestick-chart/example-bullish-gradient.svg?react'
import ExampleBearishGradient from './svgs/a-better-candlestick-chart/example-bearish-gradient.svg?react'

// a common language for performance
import CollaborativeRatingProcess from './svgs/a-common-language-for-performance/collaborative-rating-process.svg?react'
import CollaborativeRatingProcessMobile from './svgs/a-common-language-for-performance/collaborative-rating-process-mobile.svg?react'
import MentalModelsOfADesigner from './svgs/a-common-language-for-performance/mental-models-of-a-designer.svg?react'
import MentalModelsOfADesignerMobile from './svgs/a-common-language-for-performance/mental-models-of-a-designer-mobile.svg?react'
import RatingsDistributionBefore from './svgs/a-common-language-for-performance/ratings-distribution-before.svg?react'
import RatingsDistributionAfter from './svgs/a-common-language-for-performance/ratings-distribution-after.svg?react'

// design work in an engineering tool
import AirtableRallySyncDiagram from './svgs/design-work-in-an-engineering-tool/airtable-rally-sync-diagram.svg?react'
import AirtableRallySyncDiagramMobile from './svgs/design-work-in-an-engineering-tool/airtable-rally-sync-diagram-mobile.svg?react'

// improving truist digital
import Coallition from './svgs/improving-truist-digital/coallition.svg?react'
import CoallitionMobile from './svgs/improving-truist-digital/coallition-mobile.svg?react'

// mobile check deposit
import McdFlowBeforeUsaa from './svgs/mobile-check-deposit/mcd-flow-before-usaa.svg?react'
import McdFlowAfterUsaa from './svgs/mobile-check-deposit/mcd-flow-after-usaa.svg?react'
import McdTimeline from './svgs/mobile-check-deposit/mcd-timeline.svg?react'
import McdTimelineMobile from './svgs/mobile-check-deposit/mcd-timeline-mobile.svg?react'

// solving problems for product
import ProductRoadmapMaintenanceFlowchart from './svgs/solving-problems-for-product/product-roadmap-maintenance-flowchart.svg?react'
import ProductHoursBefore from './svgs/solving-problems-for-product/product-hours-before.svg?react'
import ProductHoursAfter from './svgs/solving-problems-for-product/product-hours-after.svg?react'

// operational visibility at scale
import SystemArchitecture from './svgs/operational-visibility-at-scale/system-architecture.svg?react'
import SystemArchitectureMobile from './svgs/operational-visibility-at-scale/system-architecture-mobile.svg?react'

// structure follows craft
import PmRotationsFlowchart from './svgs/structure-follows-craft/pm-rotations-flowchart.svg?react'
import MismatchedCoachingFlowchart from './svgs/structure-follows-craft/mismatched-coaching-flowchart.svg?react'
import DirectMgmtOrgModel from './svgs/structure-follows-craft/direct-mgmt-org-model.svg?react'
import DirectMgmtOrgModelMobile from './svgs/structure-follows-craft/direct-mgmt-org-model-mobile.svg?react'
import MatrixedOrgModel from './svgs/structure-follows-craft/matrixed-org-model.svg?react'
import MatrixedOrgModelMobile from './svgs/structure-follows-craft/matrixed-org-model-mobile.svg?react'
import EveryoneRotatesTimeline from './svgs/structure-follows-craft/everyone-rotates-timeline.svg?react'
import PmRotatesTimeline from './svgs/structure-follows-craft/pm-rotates-timeline.svg?react'

// what designers should actually be doing
import DesignerCapacityBefore from './svgs/what-designers-should-actually-be-doing/designer-capacity-before.svg?react'
import DesignerCapacityAfter from './svgs/what-designers-should-actually-be-doing/designer-capacity-after.svg?react'
import AccessibilityBefore from './svgs/what-designers-should-actually-be-doing/accessibility-before.svg?react'
import AccessibilityAfter from './svgs/what-designers-should-actually-be-doing/accessibility-after.svg?react'
import DevSpecBefore from './svgs/what-designers-should-actually-be-doing/dev-spec-before.svg?react'
import DevSpecAfter from './svgs/what-designers-should-actually-be-doing/dev-spec-after.svg?react'
import HandoffBeforeDraft from './svgs/what-designers-should-actually-be-doing/handoff-before-draft.svg?react'

export const InlineSvgs = {

  // a better candlestick chart
  exampleCandlesBearish: ExampleCandlesBearish,
  exampleCandlesBullish: ExampleCandlesBullish,
  newCandlestickChart: NewCandlestickChart,
  typicalCandlestickChart: TypicalCandlestickChart,
  exampleBearishFilled: ExampleBearishFilled,
  exampleBearishRed: ExampleBearishRed,
  exampleBullishHollow: ExampleBullishHollow,
  exampleBullishGreen: ExampleBullishGreen,
  exampleBullishGradient: ExampleBullishGradient,
  exampleBearishGradient: ExampleBearishGradient,

  // a common language for performance
  collaborativeRatingProcess: CollaborativeRatingProcess,
  collaborativeRatingProcessMobile: CollaborativeRatingProcessMobile,
  mentalModelsOfADesigner: MentalModelsOfADesigner,
  mentalModelsOfADesignerMobile: MentalModelsOfADesignerMobile,
  ratingsDistributionBefore: RatingsDistributionBefore,
  ratingsDistributionAfter: RatingsDistributionAfter,

  // design work in an engineering tool
  airtableRallySyncDiagram: AirtableRallySyncDiagram,
  airtableRallySyncDiagramMobile: AirtableRallySyncDiagramMobile,

  // improving truist digital
  coallition: Coallition,
  coallitionMobile: CoallitionMobile,

  // mobile check deposit
  mcdFlowBeforeUsaa: McdFlowBeforeUsaa,
  mcdFlowAfterUsaa: McdFlowAfterUsaa,
  mcdTimeline: McdTimeline,
  mcdTimelineMobile: McdTimelineMobile,

  // operational visibility at scale
  systemArchitecture: SystemArchitecture,
  systemArchitectureMobile: SystemArchitectureMobile,

  // solving problems for product
  productRoadmapMaintenanceFlowchart: ProductRoadmapMaintenanceFlowchart,
  productHoursBefore: ProductHoursBefore,
  productHoursAfter: ProductHoursAfter,
  
  // structure follows craft
  pmRotationsFlowchart: PmRotationsFlowchart,
  mismatchedCoachingFlowchart: MismatchedCoachingFlowchart,
  directMgmtOrgModel: DirectMgmtOrgModel,
  directMgmtOrgModelMobile: DirectMgmtOrgModelMobile,
  matrixedOrgModel: MatrixedOrgModel,
  matrixedOrgModelMobile: MatrixedOrgModelMobile,
  everyoneRotatesTimeline: EveryoneRotatesTimeline,
  pmRotatesTimeline: PmRotatesTimeline,

  // what designers should actually be doing
  designerCapacityBefore: DesignerCapacityBefore,
  designerCapacityAfter: DesignerCapacityAfter,
  accessibilityBefore: AccessibilityBefore,
  accessibilityAfter: AccessibilityAfter,
  devSpecBefore: DevSpecBefore,
  devSpecAfter: DevSpecAfter,
  handoffBeforeDraft: HandoffBeforeDraft,
};
