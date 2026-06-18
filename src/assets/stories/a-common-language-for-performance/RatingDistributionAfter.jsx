export default function RatingDistributionAfter(props) {
  return (
    <svg width="375" height="96" viewBox="0 0 375 96" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <radialGradient id="dotGradient" cx="1" cy="1" r="2" gradientUnits="objectBoundingBox">
          <stop stopColor="#34C759"/>
          <stop offset="1" stopColor="#FFCC00"/>
        </radialGradient>
        <filter id="lineShadow" x="15" y="65.5" width="344" height="6" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="1" dy="1"/>
          <feGaussianBlur stdDeviation="1"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="-1" dy="-1"/>
          <feGaussianBlur stdDeviation="1"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.8 0"/>
          <feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow"/>
        </filter>
        <filter id="dotShadow" x="-75%" y="-75%" width="250%" height="250%">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="2" dy="2"/>
          <feGaussianBlur stdDeviation="1"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="2" dy="2"/>
          <feGaussianBlur stdDeviation="4"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.203922 0 0 0 0 0.780392 0 0 0 0 0.34902 0 0 0 0.4 0"/>
          <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
        </filter>
      </defs>
      <rect x="16" y="66.5" width="342" height="4" rx="2" fill="#E7EBEF" filter="url(#lineShadow)"/>
      <path d="M1.78409 92V80.3636H3.19318V90.75H8.60227V92H1.78409ZM14.1477 92.1818C13.3598 92.1818 12.6686 91.9943 12.0739 91.6193C11.483 91.2443 11.0208 90.7197 10.6875 90.0455C10.358 89.3712 10.1932 88.5833 10.1932 87.6818C10.1932 86.7727 10.358 85.9792 10.6875 85.3011C11.0208 84.6231 11.483 84.0966 12.0739 83.7216C12.6686 83.3466 13.3598 83.1591 14.1477 83.1591C14.9356 83.1591 15.625 83.3466 16.2159 83.7216C16.8106 84.0966 17.2727 84.6231 17.6023 85.3011C17.9356 85.9792 18.1023 86.7727 18.1023 87.6818C18.1023 88.5833 17.9356 89.3712 17.6023 90.0455C17.2727 90.7197 16.8106 91.2443 16.2159 91.6193C15.625 91.9943 14.9356 92.1818 14.1477 92.1818ZM14.1477 90.9773C14.7462 90.9773 15.2386 90.8239 15.625 90.517C16.0114 90.2102 16.2973 89.8068 16.483 89.3068C16.6686 88.8068 16.7614 88.2652 16.7614 87.6818C16.7614 87.0985 16.6686 86.5549 16.483 86.0511C16.2973 85.5473 16.0114 85.1402 15.625 84.8295C15.2386 84.5189 14.7462 84.3636 14.1477 84.3636C13.5492 84.3636 13.0568 84.5189 12.6705 84.8295C12.2841 85.1402 11.9981 85.5473 11.8125 86.0511C11.6269 86.5549 11.5341 87.0985 11.5341 87.6818C11.5341 88.2652 11.6269 88.8068 11.8125 89.3068C11.9981 89.8068 12.2841 90.2102 12.6705 90.517C13.0568 90.8239 13.5492 90.9773 14.1477 90.9773ZM21.8295 92L19.1705 83.2727H20.5795L22.4659 89.9545H22.5568L24.4205 83.2727H25.8523L27.6932 89.9318H27.7841L29.6705 83.2727H31.0795L28.4205 92H27.1023L25.1932 85.2955H25.0568L23.1477 92H21.8295Z" fill="var(--c-ink)"/>
      <path d="M341.487 92V80.3636H342.896V85.5455H349.101V80.3636H350.51V92H349.101V86.7955H342.896V92H341.487ZM353.149 92V83.2727H354.49V92H353.149ZM353.831 81.8182C353.57 81.8182 353.344 81.7292 353.155 81.5511C352.969 81.3731 352.876 81.1591 352.876 80.9091C352.876 80.6591 352.969 80.4451 353.155 80.267C353.344 80.089 353.57 80 353.831 80C354.092 80 354.316 80.089 354.501 80.267C354.691 80.4451 354.786 80.6591 354.786 80.9091C354.786 81.1591 354.691 81.3731 354.501 81.5511C354.316 81.7292 354.092 81.8182 353.831 81.8182ZM360.469 95.4545C359.821 95.4545 359.264 95.3712 358.798 95.2045C358.332 95.0417 357.944 94.8258 357.634 94.5568C357.327 94.2917 357.082 94.0076 356.901 93.7045L357.969 92.9545C358.09 93.1136 358.243 93.2955 358.429 93.5C358.615 93.7083 358.868 93.8883 359.19 94.0398C359.516 94.1951 359.942 94.2727 360.469 94.2727C361.173 94.2727 361.755 94.1023 362.213 93.7614C362.671 93.4205 362.901 92.8864 362.901 92.1591V90.3864H362.787C362.688 90.5455 362.548 90.7424 362.366 90.9773C362.188 91.2083 361.931 91.4148 361.594 91.5966C361.26 91.7746 360.81 91.8636 360.241 91.8636C359.537 91.8636 358.904 91.697 358.344 91.3636C357.787 91.0303 357.346 90.5455 357.02 89.9091C356.698 89.2727 356.537 88.5 356.537 87.5909C356.537 86.697 356.694 85.9186 357.009 85.2557C357.323 84.589 357.76 84.0739 358.321 83.7102C358.882 83.3428 359.529 83.1591 360.264 83.1591C360.832 83.1591 361.283 83.2538 361.616 83.4432C361.954 83.6288 362.211 83.8409 362.389 84.0795C362.571 84.3144 362.711 84.5076 362.81 84.6591H362.946V83.2727H364.241V92.25C364.241 93 364.071 93.6098 363.73 94.0795C363.393 94.553 362.938 94.8996 362.366 95.1193C361.798 95.3428 361.166 95.4545 360.469 95.4545ZM360.423 90.6591C360.961 90.6591 361.416 90.536 361.787 90.2898C362.158 90.0436 362.44 89.6894 362.634 89.2273C362.827 88.7652 362.923 88.2121 362.923 87.5682C362.923 86.9394 362.829 86.3845 362.639 85.9034C362.45 85.4223 362.17 85.0455 361.798 84.7727C361.427 84.5 360.969 84.3636 360.423 84.3636C359.855 84.3636 359.382 84.5076 359.003 84.7955C358.628 85.0833 358.346 85.4697 358.156 85.9545C357.971 86.4394 357.878 86.9773 357.878 87.5682C357.878 88.1742 357.973 88.7102 358.162 89.1761C358.355 89.6383 358.639 90.0019 359.014 90.267C359.393 90.5284 359.863 90.6591 360.423 90.6591ZM368.037 86.75V92H366.696V80.3636H368.037V84.6364H368.151C368.355 84.1856 368.662 83.8277 369.071 83.5625C369.484 83.2936 370.033 83.1591 370.719 83.1591C371.313 83.1591 371.834 83.2784 372.281 83.517C372.728 83.7519 373.075 84.1136 373.321 84.6023C373.571 85.0871 373.696 85.7045 373.696 86.4545V92H372.355V86.5455C372.355 85.8523 372.175 85.3163 371.815 84.9375C371.459 84.5549 370.965 84.3636 370.332 84.3636C369.893 84.3636 369.499 84.4564 369.151 84.642C368.806 84.8277 368.533 85.0985 368.332 85.4545C368.135 85.8106 368.037 86.2424 368.037 86.75Z" fill="var(--c-ink)"/>
      <circle cx="48" cy="53" r="8" fill="url(#dotGradient)" filter="url(#dotShadow)"/>
      <circle cx="75" cy="38" r="8" fill="url(#dotGradient)" filter="url(#dotShadow)"/>
      <circle cx="141" cy="38" r="8" fill="url(#dotGradient)" filter="url(#dotShadow)"/>
      <circle cx="159" cy="38" r="8" fill="url(#dotGradient)" filter="url(#dotShadow)"/>
      <circle cx="177" cy="38" r="8" fill="url(#dotGradient)" filter="url(#dotShadow)"/>
      <circle cx="195" cy="38" r="8" fill="url(#dotGradient)" filter="url(#dotShadow)"/>
      <circle cx="213" cy="38" r="8" fill="url(#dotGradient)" filter="url(#dotShadow)"/>
      <circle cx="231" cy="38" r="8" fill="url(#dotGradient)" filter="url(#dotShadow)"/>
      <circle cx="249" cy="38" r="8" fill="url(#dotGradient)" filter="url(#dotShadow)"/>
      <circle cx="326" cy="53" r="8" fill="url(#dotGradient)" filter="url(#dotShadow)"/>
      <circle cx="160" cy="8" r="8" fill="url(#dotGradient)" filter="url(#dotShadow)"/>
      <circle cx="178" cy="8" r="8" fill="url(#dotGradient)" filter="url(#dotShadow)"/>
      <circle cx="108" cy="53" r="8" fill="url(#dotGradient)" filter="url(#dotShadow)"/>
      <circle cx="276" cy="53" r="8" fill="url(#dotGradient)" filter="url(#dotShadow)"/>
      <circle cx="317" cy="38" r="8" fill="url(#dotGradient)" filter="url(#dotShadow)"/>
      <circle cx="84" cy="53" r="8" fill="url(#dotGradient)" filter="url(#dotShadow)"/>
      <circle cx="57" cy="38" r="8" fill="url(#dotGradient)" filter="url(#dotShadow)"/>
      <circle cx="151" cy="23" r="8" fill="url(#dotGradient)" filter="url(#dotShadow)"/>
      <circle cx="169" cy="23" r="8" fill="url(#dotGradient)" filter="url(#dotShadow)"/>
      <circle cx="187" cy="23" r="8" fill="url(#dotGradient)" filter="url(#dotShadow)"/>
      <circle cx="205" cy="23" r="8" fill="url(#dotGradient)" filter="url(#dotShadow)"/>
      <circle cx="223" cy="23" r="8" fill="url(#dotGradient)" filter="url(#dotShadow)"/>
      <circle cx="241" cy="23" r="8" fill="url(#dotGradient)" filter="url(#dotShadow)"/>
      <circle cx="308" cy="53" r="8" fill="url(#dotGradient)" filter="url(#dotShadow)"/>
      <circle cx="24" cy="53" r="8" fill="url(#dotGradient)" filter="url(#dotShadow)"/>
      <circle cx="66" cy="53" r="8" fill="url(#dotGradient)" filter="url(#dotShadow)"/>
      <circle cx="132" cy="53" r="8" fill="url(#dotGradient)" filter="url(#dotShadow)"/>
      <circle cx="150" cy="53" r="8" fill="url(#dotGradient)" filter="url(#dotShadow)"/>
      <circle cx="168" cy="53" r="8" fill="url(#dotGradient)" filter="url(#dotShadow)"/>
      <circle cx="186" cy="53" r="8" fill="url(#dotGradient)" filter="url(#dotShadow)"/>
      <circle cx="204" cy="53" r="8" fill="url(#dotGradient)" filter="url(#dotShadow)"/>
      <circle cx="222" cy="53" r="8" fill="url(#dotGradient)" filter="url(#dotShadow)"/>
      <circle cx="240" cy="53" r="8" fill="url(#dotGradient)" filter="url(#dotShadow)"/>
      <circle cx="258" cy="53" r="8" fill="url(#dotGradient)" filter="url(#dotShadow)"/>
      <circle cx="353" cy="53" r="8" fill="url(#dotGradient)" filter="url(#dotShadow)"/>
    </svg>
  )
}
