// Fallback when WebGL is not available or fails
// This is an intentional design state, not an error message

export default function HeroSceneFallback() {
  return (
    <div
      className="w-full h-full flex items-center justify-center"
      aria-label="SPARK Studio geometric sculpture — decorative illustration"
      role="img"
    >
      <svg
        viewBox="0 0 320 320"
        width="320"
        height="320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-w-[320px] max-h-[320px]"
        aria-hidden="true"
      >
        {/* Outer rings */}
        <circle
          cx="160"
          cy="160"
          r="140"
          stroke="#343530"
          strokeWidth="1.5"
          opacity="0.6"
        />
        <circle
          cx="160"
          cy="160"
          r="118"
          stroke="#C8F169"
          strokeWidth="1"
          opacity="0.35"
          strokeDasharray="4 6"
        />

        {/* Main dodecahedron-like polygon */}
        <polygon
          points="160,42 213,62 243,110 243,164 213,212 160,232 107,212 77,164 77,110 107,62"
          fill="#2a2b27"
          stroke="#343530"
          strokeWidth="1.5"
        />

        {/* Inner star polygon */}
        <polygon
          points="160,90 168,138 215,142 178,168 192,216 160,190 128,216 142,168 105,142 152,138"
          fill="none"
          stroke="#343530"
          strokeWidth="1"
          opacity="0.5"
        />

        {/* Central lime accent shape */}
        <polygon
          points="160,124 166,148 190,148 172,162 178,186 160,172 142,186 148,162 130,148 154,148"
          fill="#C8F169"
          opacity="0.9"
        />

        {/* Lime accent cube (top) */}
        <rect
          x="149"
          y="42"
          width="22"
          height="22"
          rx="2"
          fill="#C8F169"
          opacity="0.8"
          transform="rotate(12 160 53)"
        />

        {/* Orange accent detail */}
        <polygon
          points="74,188 80,200 68,200"
          fill="#FF784F"
          opacity="0.8"
        />

        {/* Subtle cross dividers */}
        <line
          x1="160"
          y1="42"
          x2="160"
          y2="232"
          stroke="#343530"
          strokeWidth="0.5"
          opacity="0.3"
        />
        <line
          x1="77"
          y1="137"
          x2="243"
          y2="137"
          stroke="#343530"
          strokeWidth="0.5"
          opacity="0.3"
        />
      </svg>
    </div>
  );
}
