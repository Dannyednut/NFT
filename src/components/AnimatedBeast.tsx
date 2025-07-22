// src/components/AnimatedBeast.tsx
'use client';

interface Props {
  beastType: string;
  fur: string;
  eyes: string;
  background: string;
  sentiment: string;
}

export default function AnimatedBeast({ beastType, fur, eyes, background, sentiment }: Props) {
  const isBull = beastType.toLowerCase() === 'bull';

  const animation = sentiment.includes('Bullish')
    ? 'bounce 1s ease-in-out infinite alternate'
    : sentiment.includes('Bearish')
    ? 'pulse 1.5s ease-in-out infinite'
    : 'none';

  return (
    <div
      style={{
        width: 220,
        height: 220,
        backgroundColor: '#1e293b',
        borderRadius: '1rem',
        padding: '1rem',
        border: '1px solid #334155',
        textAlign: 'center',
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 300 300"
        style={{
          animation,
        }}
      >
        {/* Background Circle */}
        <circle cx="150" cy="150" r="120" fill={getBackgroundColor(background)} />

        {/* Body */}
        <ellipse cx="150" cy="170" rx="60" ry="80" fill={getFurColor(fur)} />

        {/* Eyes */}
        <circle cx="130" cy="150" r="8" fill={getEyeColor(eyes)} />
        <circle cx="170" cy="150" r="8" fill={getEyeColor(eyes)} />

        {/* Horns or Claws */}
        {isBull ? (
          <>
            <path d="M110 100 C80 60, 90 50, 110 80" stroke="#fff" strokeWidth="5" fill="none" />
            <path d="M190 100 C220 60, 210 50, 190 80" stroke="#fff" strokeWidth="5" fill="none" />
          </>
        ) : (
          <>
            <path d="M110 90 L90 70" stroke="#fff" strokeWidth="5" />
            <path d="M190 90 L210 70" stroke="#fff" strokeWidth="5" />
          </>
        )}
      </svg>

      <div style={{ marginTop: '0.5rem', color: '#f1f5f9', fontSize: '0.9rem' }}>
        <div>Type: {beastType}</div>
        <div>Sentiment: {sentiment}</div>
      </div>
    </div>
  );
}

// Helpers
function getFurColor(fur: string) {
  const map: Record<string, string> = {
    Obsidian: '#1f2937',
    Snowy: '#e5e7eb',
    Flamecoat: '#f97316',
    Azurehide: '#38bdf8',
    Ashen: '#4b5563',
    Shadow: '#334155',
    Brightgold: '#facc15',
    RadiantFlame: '#fb923c',
  };
  return map[fur.replace(/\s/g, '')] || '#64748b';
}

function getEyeColor(eye: string) {
  const map: Record<string, string> = {
    Emerald: '#10b981',
    Crimson: '#dc2626',
    Void: '#111827',
    Sapphire: '#3b82f6',
    'Dim Emerald': '#047857',
    'Dull Crimson': '#991b1b',
    'Glowing Amber': '#f59e0b',
    'Blazing Sapphire': '#2563eb',
  };
  return map[eye] || '#f8fafc';
}

function getBackgroundColor(bg: string) {
  const map: Record<string, string> = {
    'Golden Peak': '#fde68a',
    Stormrise: '#475569',
    'Midnight Zone': '#0f172a',
    'Arctic Glow': '#7dd3fc',
    Fogveil: '#94a3b8',
    'Clouded Ridge': '#cbd5e1',
    'Sunrise Steppe': '#fcd34d',
    'Aurora Zenith': '#a78bfa',
  };
  return map[bg] || '#1e293b';
}
