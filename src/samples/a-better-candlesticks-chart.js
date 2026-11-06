import cardImg from '../assets/designs/a-better-candlestick-chart/Card-Candlestick.svg?react'

export const meta = {
  title: 'A Better Candlestick Chart',
  slug: 'a-better-candlesticks-chart',
  client: 'ForecastNow',
  challenge: 'Candlesticks rely on red and green to show which way price moved. For about 1 in 12 men, those look the same.',
  image: cardImg,
  imageFit: 'full', // full card height, with right margin
  imageAlt: 'Example candlesticks',
}

export const content = [
  {
    type: 'heading',
    level: 2,
    text: `The Situation`,
  },
  {
    type: 'paragraph',
    text: `A candlestick packs four prices into one mark. The wick spans high to low. The body spans open to close, and color tells you which end is which.`,
  },
  {
    type: 'paragraph',
    text: `Green means price rose. Red means it fell. For anyone with red-green color blindness, the most important signal on the chart disappears.`,
  },
  {
    type: 'columns',
    columns: [
      [{ type: 'inline-svg', name: 'exampleBullishGreen', alt: 'Bullish candle: green convention', title: 'Bullish', maxHeight: `220px`, }],
      [{ type: 'inline-svg', name: 'exampleBearishRed', alt: 'Bearish candle: red convention', title: 'Bearish', maxHeight: `220px`, }],
    ],
  },
  {
    type: 'paragraph',
    text: `The older convention works without color, hollow for up and filled for down, but it has to be memorized.`,
  },
  {
    type: 'columns',
    columns: [
      [{ type: 'inline-svg', name: 'exampleBullishHollow', alt: 'Bullish candle: hollow convention', title: 'Bullish', maxHeight: `220px`, }],
      [{ type: 'inline-svg', name: 'exampleBearishFilled', alt: 'Bearish candle: filled convention', title: 'Bearish', maxHeight: `220px`, }],
    ],
  },
  {
    type: 'heading',
    level: 2,
    text: `The Solution`,
  },
  {
    type: 'paragraph',
    text: `The client's app ran only in dark mode, and the design is built for it.`,
  },
  {
    type: 'paragraph',
    text: `Each body fades from its open to its close. The bright end marks where price finished, so every candle points the way it moved.`,
  },
  {
    type: 'columns',
    columns: [
      [{ type: 'inline-svg', name: 'exampleBullishGradient', theme: 'dark', alt: 'Bullish candle: gradient convention that brightens toward the close at the top', title: 'Bullish', maxHeight: `220px`, }],
      [{ type: 'inline-svg', name: 'exampleBearishGradient', theme: 'dark', alt: 'Bearish candle: gradient convention that brightens toward the close at the bottom', title: 'Bearish', maxHeight: `220px`, }],
    ],
  },
  {
    type: 'paragraph',
    text: `Direction no longer depends on color or on a convention you have to learn. It reads the same in grayscale.`,
  },
  {
    type: 'paragraph',
    text: `With the bodies carrying the signal, everything else steps back. Wicks dim and stop at the body, and the price line thins to a single accent.`,
  },
  {
    type: 'columns',
    columns: [
      [{ type: 'inline-svg', name: 'typicalCandlestickChart', theme: 'dark', alt: 'Typical red and green candlestick chart', title: 'Typical', maxHeight: `260px`, }],
      [{ type: 'inline-svg', name: 'newCandlestickChart', theme: 'dark', alt: 'Monochrome gradient candlestick chart', title: 'Better', maxHeight: `260px`, }],
    ],
  },
]