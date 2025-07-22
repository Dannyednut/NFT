// components/BeastPreviewGrid.tsx
'use client';

import { useEffect, useState } from 'react';

const sampleTraits = [
  {
    beastType: 'Bull',
    fur: 'Brightgold',
    eyes: 'Glowing Amber',
    background: 'Sunrise Steppe',
    color: '#22c55e',
  },
  {
    beastType: 'Bear',
    fur: 'Shadow',
    eyes: 'Dull Crimson',
    background: 'Clouded Ridge',
    color: '#ef4444',
  },
  {
    beastType: 'Bull',
    fur: 'Radiant Flame',
    eyes: 'Blazing Sapphire',
    background: 'Aurora Zenith',
    color: '#eab308',
  },
  {
    beastType: 'Bear',
    fur: 'Ashen',
    eyes: 'Dim Emerald',
    background: 'Fogveil',
    color: '#64748b',
  },
];

export default function BeastPreviewGrid() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % sampleTraits.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const beast = sampleTraits[index];

  const svg = `
    <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'>
      <style>
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .float {
          animation: float 3s ease-in-out infinite;
        }
      </style>
      <rect width='100%' height='100%' fill='${beast.color}' rx="20"/>
      <text x='50%' y='40%' class='float' dominant-baseline='middle' text-anchor='middle' font-size='18' fill='white'>
        ${beast.beastType}
      </text>
      <text x='50%' y='60%' dominant-baseline='middle' text-anchor='middle' font-size='12' fill='white'>
        ${beast.fur}, ${beast.eyes}
      </text>
      <text x='50%' y='75%' dominant-baseline='middle' text-anchor='middle' font-size='12' fill='white'>
        ${beast.background}
      </text>
    </svg>
  `;

  return (
    // <div
    //   style={{
    //     textAlign: 'center',
    //     marginBottom: '2rem',
    //     background: '#1e293b',
    //     padding: '1rem',
    //     borderRadius: '0.75rem',
    //     border: '1px solid #334155',
    //   }}
    // >
    //   <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>🔮 Trait Preview</h2>
    //   <p style={{ color: '#94a3b8', marginBottom: '1rem' }}>
    //     Your Crypto Beast evolves with sentiment. Preview samples below:
    //   </p>
      <div
        dangerouslySetInnerHTML={{ __html: svg }}
        style={{
        //   display: 'inline-block',
        //   width: '250px',
        //   height: '250px',
            width: '100%',
            aspectRatio: '1',
            //background: '#0f172a',
            //border: '2px dashed #334155',
            borderRadius: '0.75rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#64748b',
            fontSize: '0.875rem',
        }}
      />
    //</div>
  );
}


