// Fallback when WebGL is not available or fails
// This is an intentional design state representing the SPARK 3D Sculptural Cube

export default function HeroSceneFallback() {
  return (
    <div
      className="w-full h-full flex items-center justify-center p-6"
      aria-label="SPARK Studio sculptural cube — decorative illustration"
      role="img"
    >
      <svg
        viewBox="0 0 360 360"
        width="360"
        height="360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-w-[360px] max-h-[360px]"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="cubeGlow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FF784F" stopOpacity="0.8" />
            <stop offset="1%" stopColor="#FF4500" stopOpacity="0.2" />
          </linearGradient>
          <filter id="orangeBlur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" />
          </filter>
        </defs>

        {/* Ambient background glow ring */}
        <circle cx="180" cy="180" r="130" stroke="#252622" strokeWidth="1" opacity="0.4" />
        <circle cx="180" cy="180" r="105" stroke="#FF784F" strokeWidth="0.75" opacity="0.2" strokeDasharray="3 6" />

        {/* Seam glow layer behind isometric tiles */}
        <circle cx="180" cy="180" r="45" fill="url(#cubeGlow)" filter="url(#orangeBlur)" opacity="0.4" />

        {/* Isometric 3x3 Cube Group centered at (180, 180) */}
        {/* Top Face Tiles */}
        <g opacity="0.95">
          {/* Tile (0, 0) top */}
          <polygon points="180,80 216,101 180,122 144,101" fill="#2a2c28" stroke="#10110F" strokeWidth="2" strokeLinejoin="round" />
          {/* Tile (1, 0) top right */}
          <polygon points="219,103 255,124 219,145 183,124" fill="#252724" stroke="#10110F" strokeWidth="2" strokeLinejoin="round" />
          {/* Tile (2, 0) far right */}
          <polygon points="258,126 294,147 258,168 222,147" fill="#1f201d" stroke="#10110F" strokeWidth="2" strokeLinejoin="round" />

          {/* Tile (0, 1) top left */}
          <polygon points="141,103 177,124 141,145 105,124" fill="#282a27" stroke="#10110F" strokeWidth="2" strokeLinejoin="round" />
          {/* Tile (1, 1) center top */}
          <polygon points="180,126 216,147 180,168 144,147" fill="#222421" stroke="#10110F" strokeWidth="2" strokeLinejoin="round" />
          {/* Tile (2, 1) center right */}
          <polygon points="219,149 255,170 219,191 183,170" fill="#1c1d1a" stroke="#10110F" strokeWidth="2" strokeLinejoin="round" />

          {/* Tile (0, 2) far left */}
          <polygon points="102,126 138,147 102,168 66,147" fill="#242622" stroke="#10110F" strokeWidth="2" strokeLinejoin="round" />
          {/* Tile (1, 2) front left */}
          <polygon points="141,149 177,170 141,191 105,170" fill="#20211e" stroke="#10110F" strokeWidth="2" strokeLinejoin="round" />
          {/* Tile (2, 2) front center */}
          <polygon points="180,172 216,193 180,214 144,193" fill="#1a1b18" stroke="#10110F" strokeWidth="2" strokeLinejoin="round" />
        </g>

        {/* Left Face Tiles */}
        <g opacity="0.9">
          <polygon points="66,151 102,172 102,212 66,191" fill="#161715" stroke="#10110F" strokeWidth="2" strokeLinejoin="round" />
          <polygon points="105,174 141,195 141,235 105,214" fill="#141513" stroke="#10110F" strokeWidth="2" strokeLinejoin="round" />
          <polygon points="144,197 180,218 180,258 144,237" fill="#121311" stroke="#10110F" strokeWidth="2" strokeLinejoin="round" />

          <polygon points="66,195 102,216 102,256 66,235" fill="#131412" stroke="#10110F" strokeWidth="2" strokeLinejoin="round" />
          <polygon points="105,218 141,239 141,279 105,258" fill="#111210" stroke="#10110F" strokeWidth="2" strokeLinejoin="round" />
          <polygon points="144,241 180,262 180,302 144,281" fill="#0f100e" stroke="#10110F" strokeWidth="2" strokeLinejoin="round" />
        </g>

        {/* Right Face Tiles */}
        <g opacity="0.85">
          <polygon points="180,218 216,197 216,237 180,258" fill="#1b1c19" stroke="#10110F" strokeWidth="2" strokeLinejoin="round" />
          <polygon points="219,195 255,174 255,214 219,235" fill="#181916" stroke="#10110F" strokeWidth="2" strokeLinejoin="round" />
          <polygon points="258,172 294,151 294,191 258,212" fill="#151614" stroke="#10110F" strokeWidth="2" strokeLinejoin="round" />

          <polygon points="180,262 216,241 216,281 180,302" fill="#161715" stroke="#10110F" strokeWidth="2" strokeLinejoin="round" />
          <polygon points="219,239 255,218 255,258 219,279" fill="#131412" stroke="#10110F" strokeWidth="2" strokeLinejoin="round" />
          <polygon points="258,216 294,195 294,235 258,256" fill="#111210" stroke="#10110F" strokeWidth="2" strokeLinejoin="round" />
        </g>

        {/* Restrained glowing orange seam highlights */}
        <line x1="180" y1="126" x2="180" y2="214" stroke="#FF784F" strokeWidth="1.5" opacity="0.8" />
        <line x1="144" y1="147" x2="216" y2="147" stroke="#FF5500" strokeWidth="1.2" opacity="0.75" />
        <line x1="180" y1="218" x2="180" y2="258" stroke="#FF784F" strokeWidth="1.2" opacity="0.6" />
        <circle cx="180" cy="168" r="3" fill="#FF784F" opacity="0.9" />

        {/* Precision corner accent pips */}
        <circle cx="216" cy="101" r="1.5" fill="#92938B" opacity="0.5" />
        <circle cx="144" cy="101" r="1.5" fill="#92938B" opacity="0.5" />
      </svg>
    </div>
  );
}
