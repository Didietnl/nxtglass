/**
 * NXTGlass logo — faithful recreation of the hand-sketch wine glass
 * inside a circular border, as seen in the official brand identity.
 * Works on any dark background (no white fill).
 */
export default function NXTGlassLogo({ size = 40, color = 'white', accentColor = '#4ade80' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer circle */}
      <circle cx="50" cy="50" r="47" stroke={color} strokeWidth="2.5" opacity="0.85"/>

      {/* Wine glass body — sketch style with slightly irregular strokes */}
      {/* Bowl */}
      <path
        d="M34 22 C32 30 30 38 32 46 C34 54 40 60 50 63 C60 60 66 54 68 46 C70 38 68 30 66 22 Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.9"
      />
      {/* Rim opening */}
      <path
        d="M34 22 Q42 18 50 18 Q58 18 66 22"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />
      {/* Inner bowl highlight — sketch line */}
      <path
        d="M38 28 C37 34 37 40 38.5 46"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
        opacity="0.35"
      />
      {/* Second highlight */}
      <path
        d="M42 24 C41 28 40.5 32 41 36"
        stroke={color}
        strokeWidth="0.8"
        strokeLinecap="round"
        fill="none"
        opacity="0.2"
      />
      {/* Stem */}
      <line
        x1="50" y1="63"
        x2="50" y2="80"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.85"
      />
      {/* Base */}
      <path
        d="M38 80 Q44 78 50 78 Q56 78 62 80"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.85"
      />
      {/* Base bottom line */}
      <path
        d="M36 83 Q43 82 50 82 Q57 82 64 83"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />

      {/* Accent dot — subtle green on base */}
      <circle cx="50" cy="50" r="47" stroke={accentColor} strokeWidth="0.5" opacity="0.3"/>
    </svg>
  )
}

/**
 * Full horizontal logo — icon + NXTGlass wordmark, for hero / footer use
 */
export function NXTGlassLogoFull({ height = 48 }) {
  const iconSize = height
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
      <NXTGlassLogo size={iconSize} />
      <span style={{
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: 700,
        fontSize: `${height * 0.45}px`,
        color: 'white',
        letterSpacing: '-0.02em',
        lineHeight: 1,
      }}>
        <span style={{ color: '#4ade80' }}>NXT</span>Glass
      </span>
    </div>
  )
}
