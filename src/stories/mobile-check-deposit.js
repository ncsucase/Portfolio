export const meta = {
  title: 'Designed Into a Corner, Then Back Out',
  slug: 'mobile-check-deposit',
  startDate: '2022-12',
  duration: '2 years',
  status: 'complete',
  contribution: 'Product Design',
  outcome: `Redesigned Mobile Check Deposit under a 2-week legal deadline, used the constraint to surface real client needs, and cut negative VOC mentions nearly in half when those improvements shipped two years later.`,
  excerpt: `USAA threatened to sue Truist for patent infringement on Mobile Check Deposit. Legal's response: strip the experience down in 60 days. That left design with two weeks to figure out what we could keep, what we had to cut, and how to keep it usable for clients who just wanted to deposit a check.`,
  featured: false,
  heroImage: null,
  readTime: 4,
}

export const content = [
  {
    type: 'summary',
    text: `When USAA threatened to sue Truist for infringing on their Mobile Check Deposit patent, Legal's solution was to remove the infringing features in 60 days. Design had two weeks to figure out what that meant for clients. I led the Legal negotiation, directed a co-design sprint with two senior designers, called for guerrilla testing to validate what we were shipping, and got Legal sign-off on the final proposal. The constraint forced us to learn things about the experience we hadn't known. Two years later, when the courts ruled against USAA, I made sure those learnings became product improvements. Negative VOC mentions dropped by more than half.`,
  },
  {
    type: 'heading',
    level: 2,
    text: 'The Situation',
  },
  {
    type: 'paragraph',
    text: `Mobile Check Deposit at Truist included three features that USAA held a patent on:`,
  },
  {
    type: 'list',
    items: [
      `Live feedback during photo capture.`,
      `Access to the captured check image after the deposit.`,
      `Display of the dollar amount from the check following capture.`,
    ]
  },
  {
    type: 'paragraph',
    text: `USAA threatened to sue. Legal's recommended response was to remove all three from the experience within 60 days. That timeline gave design roughly two weeks to determine what we were actually allowed to build and ship something clients could still use.`,
  },
  {
    type: 'paragraph',
    text: `Mobile Check Deposit isn't a secondary feature. It's a primary banking action for a meaningful portion of clients, particularly those who receive paper checks regularly. Stripping out live capture feedback, the check image, and the captured dollar amount without a plan for what replaced them wasn't simplification. It was risk transfer from Legal to the client experience.`,
  },
  {
    type: 'heading',
    level: 2,
    text: 'The Legal Negotiation',
  },
  {
    type: 'paragraph',
    text: `Before design could build anything, we needed to know what the actual boundaries were. I led the working session with Legal to mark up the existing experience feature by feature. That conversation was less a briefing and more a negotiation: Can we show the image in this context? What if we show status instead of the image? What constitutes "live feedback" under the patent? Every question we didn't answer in that room was a question we'd be answering under more pressure later.`,
  },
  {
    type: 'paragraph',
    text: `What we landed on:`,
  },
  {
    type: 'list',
    items: [
      `No live guidance during photo capture.`,
      `No display of the captured check image in the Mobile Check Deposit process or in the history.`,
      `No display of the dollar amount parsed from the check — only the amount the client entered themselves.`,
    ]
  },
  {
    type: 'paragraph',
    text: `What we could do was communicate outcome (success or failure) and give the client a clear path forward from either state. That was the design surface we had to work with.`,
  },
  {
    type: 'columns',
    columns: [
      [{
        type: 'inline-svg',
        name: 'mcdFlowBeforeUsaa',
        title: 'Original Flow'
      }],
      [{
        type: 'inline-svg',
        name: 'mcdFlowAfterUsaa',
        title: 'Patent Constrained'
      }],
    ],
  },
  {
    type: 'heading',
    level: 2,
    text: 'The Design Sprint',
  },
  {
    type: 'paragraph',
    text: `I selected two senior designers and ran an initial co-design session to frame the problem correctly before anyone opened Figma. The question wasn't "how do we remove these features?" It was "what does a client actually need at each step of this flow when the features they've been relying on aren't there?"`,
  },
  {
    type: 'paragraph',
    text: `The hardest step was photo capture. The removed live feedback — prompts like "too close" or "make sure the check is on a dark background" — existed because capturing a usable check image is genuinely difficult. Clients had been relying on that real-time guidance without knowing it. Without it, a failed capture would just fail. No explanation. No nudge. Our solution: make it easier to switch to manual capture mode, move error messaging to the input screen where the client initiates capture, and add contextual status messaging on that same screen to indicate whether the image was successfully captured or needed to be retaken. The failure state had to do the work the live guidance used to do.`,
  },
  {
    type: 'paragraph',
    text: `For the post-capture step, removing the check image and the parsed dollar amount left a gap in how we communicated what we'd received. We replaced both with a confirmation state anchored on the details clients had entered themselves: deposit amount, destination account, date, and — for the first time in this flow — check number. The check number hadn't been surfaced before. It became a net addition, not a net loss.`,
  },
  {
    type: 'paragraph',
    text: `The dollar amount mismatch case required careful handling. We could show clients the amount they entered. We still could not show them the amount on the check. If the two didn't match, we surfaced an error that prompted the client to verify their entry. In testing, clients checked their own entered amount first before recapturing — the error state was enough to prompt the right behavior without the restricted information.`,
  },
  {
    type: 'heading',
    level: 2,
    text: 'The Testing',
  },
  {
    type: 'paragraph',
    text: `Before we locked anything, I made the call to test it. Two weeks is not a lot of time, and a formal study wasn't feasible, so we ran guerrilla sessions with internal participants. I engaged the User Research team to pressure-test my proposed moderator guide before the designers ran the sessions.`,
  },
  {
    type: 'paragraph',
    text: `What the testing confirmed: clients noticed the absence of live capture feedback immediately and found it frustrating. A failed capture with no in-the-moment explanation felt like the app had broken, not like they needed to try again. That finding validated the investment we'd put into the input screen error states and status messaging.`,
  },
  {
    type: 'paragraph',
    text: `What the testing revealed: clients didn't miss the check image. As long as the other confirmation details were present — amount, account, date, check number — the image wasn't doing the job we might have assumed. Clients weren't looking at it to verify the deposit. They were looking for one signal: did it work? The image had been part of the experience without being load-bearing. Knowing that changed how we thought about what the confirmation step actually needed to deliver.`,
  },
  {
    type: 'heading',
    level: 2,
    text: 'The Proposal',
  },
  {
    type: 'paragraph',
    text: `The designers finished the designs, built the prototypes, and ran the testing sessions. I reviewed the output, worked through the adjustments the findings called for, and took the final proposal back to Legal for sign-off. They approved it. We shipped within the 60-day window.`,
  },
  {
    type: 'heading',
    level: 2,
    text: 'The Cost',
  },
  {
    type: 'paragraph',
    text: `We shipped within the deadline. The experience held together. And then the VOC data came in.`,
  },
  {
    type: 'paragraph',
    text: `Mobile Check Deposit became one of our top negative VOC themes after the changes, accounting for an average of 4.5% of negative comments. The themes were consistent: image acceptance issues, endorsement errors, auto-capture not working, stability. Some of that was the removed live feedback doing its job invisibly before. Some of it was clients running into the ceiling of what a legally constrained experience could offer. We had shipped the best version of a bad situation. That's not the same as shipping a good experience.`,
  },
  {
    type: 'heading',
    level: 2,
    text: 'The Follow-Through',
  },
  {
    type: 'paragraph',
    text: `In 2024, the courts ruled that USAA could not enforce the patent. The legal constraint was gone. The VOC signal and the sprint findings were not.`,
  },
  {
    type: 'paragraph',
    text: `I went to my Product peer and made the case for restoring what the patent had forced us to remove and implementing what we'd learned. The argument was direct: documented findings, a steady VOC signal, and a round of MCD functionality already slated for later that year. She added the revenue angle — clients who can't complete a deposit are clients who might not try again. We added the experience improvements to the existing work and sized them accordingly. The 2024 release restored live capture feedback, the check image, and the parsed dollar amount, and reduced the auto-capture timeout from 15 seconds to 8 so clients weren't left wondering whether anything was happening.`,
  },
  {
    type: 'stats',
    variant: 'label-first',
    items: [
      { label: 'MCD Negative VOC Before', value: '4.5%', description: 'of all negative comments, after the 2022 changes.', color: 'error' },
      { label: 'MCD Negative VOC After', value: '2%', description: 'of all negative comments, after the 2024 improvements.', color: 'success' },
    ],
  },
  {
    type: 'paragraph',
    text: `A subsequent technical change unrelated to design spiked MCD complaints back up. That regression belongs to a different workstream. The design improvements moved the number. They still do.`,
  },
  {
    type: 'inline-svg',
    name: 'mcdTimeline',
    mobileVariant: 'mcdTimelineMobile'
  },
  {
    type: 'heading',
    level: 2,
    text: 'What the Constraint Actually Did',
  },
  {
    type: 'paragraph',
    text: `Constraints in design usually work one of two ways. They either force bad tradeoffs that have to be undone later, or they force clarity that wouldn't have emerged under normal conditions. This one did both.`,
  },
  {
    type: 'paragraph',
    text: `Removing the check image felt like a loss until testing showed clients weren't relying on it the way we thought. The auto-capture timeout was set to 15 seconds because no one had reason to question it until clients were left staring at a camera for 15 seconds with no feedback. The check number had never been surfaced on the confirmation screen until the constraints forced us to find something else to show. None of those findings were on the roadmap before USAA sent the letter.`,
  },
  {
    type: 'paragraph',
    text: `The job after the legal threat lifted was to make sure those findings didn't stay in a sprint document. That required someone to remember what we learned, connect it to the right product conversation at the right time, and make the case clearly enough that it got prioritized. That's a different kind of design work. It's the kind that doesn't show up in a Figma file.`,
  },
]