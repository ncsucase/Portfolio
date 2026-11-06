import cardImg from '../assets/designs/truist-digital-branding/Card-Branding.svg?react'
import currentPhone from '../assets/designs/truist-digital-branding/Current.png'
import soonPhone from '../assets/designs/truist-digital-branding/Coming-Soon.png'

export const meta = {
  title: 'Truist Digital Branding',
  slug: 'truist-digital-branding',
  client: 'Truist',
  challenge: 'Clients pushed back on purple. Purple is the brand, so the system around it had to change.',
  image: cardImg,
  imageFit: 'inset', // small, centered, with right margin
  imageAlt: 'From one purple to another',
}

export const content = [
  {
    type: 'heading',
    level: 2,
    text: `The Situation`,
  },
  {
    type: 'paragraph',
    text: `Clients reacted negatively to our brand colors. Purple is polarizing, but it's who we are. Changing it wasn't an option, so we changed how we used it.`,
  },
  {
    type: 'paragraph',
    text: `This is the visual side of [Improving Truist Digital](/stories/improving-truist-digital), a two-year effort across five design teams and 13 client studies. The story covers how I led it. This page shows what we made.`,
  },
  {
    type: 'paragraph',
    text: `Three problems stood out:`,
  },
  {
    type: 'list',
    items: [
      'Too much purple. We applied it everywhere, with no rule for where it belonged.',
      'Too muted. A range of pale tints that distract and seem afraid to exist.',
      'Weak hierarchy. Screens felt monotonous, with no clear focal point.',
    ],
  },
  {
    type: 'heading',
    level: 2,
    text: `The Main Problem`,
  },
  {
    type: 'paragraph',
    text: `Our design system was built at the start of the merger, racing to support every need of platforms still taking shape. We didn't know what we needed, so we built too much.`,
  },
  {
    type: 'paragraph',
    text: `Take our background colors.`,
  },
  {
    type: 'swatches',
    alt: 'Current background colors',
    size: 100,
    gap: 16,
    swatches: [
      { hex: '#2E1A47', label: 'Bg Std Emphasis' },
      { hex: '#402561', label: 'Bg Alt Emphasis' },
      { hex: '#FFFFFF', label: 'Bg Standard' },
      { hex: '#F7F7F7', label: 'Bg Alternate' },
      { hex: '#F0ECF8', label: 'Bg Std Soft' },
      { hex: '#E5DDF4', label: 'Bg Alt Soft' },
      { hex: '#E5F5F5', label: 'Bg Std Accent' },
      { hex: '#CAEAEC', label: 'Bg Alt Accent' },
    ],
  },
  {
    type: 'paragraph',
    text: `Eight options, no intention. When is it “soft” and when is it “accent”? Do Std and Alt always travel together? Does each one need its own border color?`,
  },
  {
    type: 'paragraph',
    text: `Our platforms have matured. Now we know what we need.`,
  },
  {
    type: 'swatches',
    alt: 'New background colors',
    size: 100,
    gap: 16,
    swatches: [
      { hex: '#2E1A47', label: 'Brand hero' },
      { hex: '#FFFFFF', label: 'Z+1' },
      { hex: '#F4F3F0', label: 'Z' },
      { hex: '#E6E3DB', label: 'Z-1' },
    ],
  },
  {
    type: 'heading',
    level: 2,
    text: `The Secondary Problem`,
  },
  {
    type: 'paragraph',
    text: `Truist digital needed a secondary interaction color. The original brand used teal as an accent, but only in a pale form, too light to signal a tap. So we made a darker version.`,
  },
  {
    type: 'swatches',
    alt: 'Original teal interaction colors',
    size: 100,
    gap: 16,
    swatches: [
      { hex: '#006D7A', label: 'Surface' },
      { hex: '#B0E0E2', label: 'Border' },
      { hex: '#E5F5F5', label: 'Background' },
    ],
  },
  {
    type: 'paragraph',
    text: `Clients didn't like it. Paired with our purples, teal reminded them of Easter, or Batman and the Joker, and not fondly.`,
  },
  {
    type: 'paragraph',
    text: `Blue is the long-standing digital signal for “click me,” and it carries none of teal's baggage. So we moved from teal to blue.`,
  },
  {
    type: 'swatches',
    alt: 'New blue interaction colors',
    size: 100,
    gap: 16,
    swatches: [
      { hex: '#0073D8', label: 'Surface' },
      { hex: '#99D8FB', label: 'Border' },
      { hex: '#E3F5FD', label: 'Background' },
    ],
  },
  {
    type: 'heading',
    level: 2,
    text: `Less is More`,
  },
  {
    type: 'paragraph',
    text: `Fewer colors, a clear job for each, and a digital blue. The result embraces purple and keeps clients happy, including the ones who dislike purple.`,
  },
  {
    type: 'paragraph',
    text: `The color changes ship soon. Bigger changes would require sweeping platform work, and our testing showed targeted refinement was the better bet.`,
  },
  {
    type: 'paragraph',
    text: `Same screen, same layout from [Truist Account Summaries](/samples/truist-account-summary-screens). The lavender wash is gone, purple concentrates in the header and the primary action, and blue marks navigation.`,
  },
  {
    type: 'columns',
    columns: [
      [{ type: 'image', src: currentPhone, alt: 'Current: credit card account summary', title: 'Current', maxHeight: `500px`, }],
      [{ type: 'image', src: soonPhone, alt: 'Soon: credit card account summary', title: 'Soon', maxHeight: `500px`, }],
    ],
  },
]