const icons = {
  'arrow-left': {
    viewBox: '0 0 16 16',
    content: (
      <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  'arrow-right': {
    viewBox: '0 0 16 16',
    content: (
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  'linkedin': {
    viewBox: '0 0 20 20',
    content: (
      <path
        d="M16 0C18.2091 0 20 1.79086 20 4V16C20 18.2091 18.2091 20 16 20H4C1.79086 20 3.22133e-08 18.2091 0 16V4C0 1.79086 1.79086 3.22128e-08 4 0H16ZM3.41211 7.99023V16.9229H6.2041V7.99023H3.41211ZM7.87793 7.99023V16.9229H10.5576V7.99023H7.87793ZM13.1592 7.7666C11.8317 7.76678 10.8726 8.5911 10.5586 9.05957V12.5967C10.5587 11.2842 11.2225 10.184 12.6055 10.1836C13.9068 10.1837 14.057 11.4196 14.1309 12.0381V16.9229H16.9229V12.0098C16.9132 7.82251 14.8157 7.76661 13.1592 7.7666ZM4.75195 3.07715C3.82702 3.0772 3.07721 3.82699 3.07715 4.75195C3.07726 5.67687 3.82705 6.42671 4.75195 6.42676C5.67682 6.42667 6.42664 5.67685 6.42676 4.75195C6.42669 3.82701 5.67685 3.07724 4.75195 3.07715Z"
        fill="currentColor"
      />
    ),
  },
  'email': {
    viewBox: '0 0 16 16',
    content: (
      <>
        <rect x="2" y="3.5" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 5.5l6 4 6-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
}

export default function Icon({ name, size = '1em', color = 'currentColor' }) {
  const icon = icons[name]
  if (!icon) return null

  return (
    <svg
      width={size}
      height={size}
      viewBox={icon.viewBox}
      fill="none"
      aria-hidden="true"
      style={{ color, flexShrink: 0 }}
    >
      {icon.content}
    </svg>
  )
}
