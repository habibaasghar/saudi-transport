/**
 * Decorative hero scene in the brand palette: night sky, skyline and a dotted route line.
 * No vehicle is shown (no fleet claims). Replace with a licensed photograph (see docs/missing-assets.md).
 */
export function HeroArt() {
  return (
    <svg className="hero__art" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0B1F3A" />
          <stop offset="0.6" stopColor="#123a63" />
          <stop offset="1" stopColor="#174A78" />
        </linearGradient>
        <radialGradient id="glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#38BDF8" stopOpacity="0.55" />
          <stop offset="1" stopColor="#38BDF8" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="1600" height="900" fill="url(#sky)" />
      <circle cx="1150" cy="430" r="300" fill="url(#glow)" />
      <circle cx="1150" cy="430" r="52" fill="#EAF6FF" opacity="0.9" />
      <g fill="#38BDF8" opacity="0.6">
        <circle cx="180" cy="120" r="3" /><circle cx="420" cy="220" r="2" /><circle cx="760" cy="90" r="3" /><circle cx="980" cy="200" r="2" /><circle cx="1420" cy="140" r="3" />
      </g>
      <g fill="#0f2c50">
        <rect x="620" y="520" width="70" height="380" /><rect x="710" y="440" width="56" height="460" />
        <path d="M800 900V380l22-60 22 60v520z" /><rect x="868" y="500" width="80" height="400" /><rect x="968" y="460" width="60" height="440" /><rect x="1048" y="560" width="96" height="340" />
        <rect x="1170" y="500" width="64" height="400" /><rect x="1254" y="580" width="110" height="320" /><rect x="1384" y="540" width="90" height="360" />
      </g>
      <path d="M0 720 C 280 660 520 700 800 740 S 1300 760 1600 700 V900 H0Z" fill="#102b4d" />
      <path d="M0 800 H1600 V900 H0Z" fill="#07162b" />
      <path d="M0 800 H1600" stroke="#38BDF8" strokeWidth="3" opacity="0.6" />
      <path d="M0 850 H1600" stroke="#EAF6FF" strokeWidth="5" strokeDasharray="90 70" opacity="0.55" />
      <path d="M120 760 C 420 640 760 640 1500 700" fill="none" stroke="#38BDF8" strokeWidth="4" strokeDasharray="3 16" strokeLinecap="round" />
      <circle cx="120" cy="760" r="12" fill="#fff" /><circle cx="120" cy="760" r="5" fill="#0B1F3A" />
      <circle cx="1500" cy="700" r="12" fill="#38BDF8" /><circle cx="1500" cy="700" r="5" fill="#0B1F3A" />
    </svg>
  );
}
