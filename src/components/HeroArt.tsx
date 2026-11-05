/**
 * Art-directed placeholder: dusk sky and layered dunes in the brand palette. Decorative only.
 * No vehicle is shown. Replace with a licensed photograph (see docs/missing-assets.md).
 */
export function HeroArt() {
  return (
    <svg className="hero__art" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0F1B2D" />
          <stop offset="0.55" stopColor="#1d2a3d" />
          <stop offset="0.8" stopColor="#6b4a3f" />
          <stop offset="1" stopColor="#C9A877" />
        </linearGradient>
        <radialGradient id="sun" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#F3ECE0" stopOpacity="0.95" />
          <stop offset="0.35" stopColor="#E3C79A" stopOpacity="0.5" />
          <stop offset="1" stopColor="#C9A877" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="1600" height="900" fill="url(#sky)" />
      <circle cx="1130" cy="520" r="260" fill="url(#sun)" />
      <circle cx="1130" cy="520" r="46" fill="#F3ECE0" opacity="0.92" />
      <path d="M0 610 C 220 560 380 540 560 590 S 900 660 1120 600 S 1450 540 1600 580 V900 H0Z" fill="#8a6a52" opacity="0.55" />
      <path d="M0 690 C 260 610 430 650 640 690 S 1000 740 1230 670 S 1500 640 1600 660 V900 H0Z" fill="#4a3a35" opacity="0.8" />
      <path d="M0 770 C 300 710 520 760 780 790 S 1180 800 1380 750 S 1540 730 1600 740 V900 H0Z" fill="#1F4D3A" opacity="0.85" />
      <path d="M0 830 C 340 800 640 840 940 850 S 1420 840 1600 820 V900 H0Z" fill="#0F1B2D" />
    </svg>
  );
}
