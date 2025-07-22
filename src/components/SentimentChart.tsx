// components/SentimentChart.tsx
'use client';

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function SentimentChart({ data }: { data: any[] }) {
  const now = Math.floor(Date.now() / 1000); // current timestamp in seconds
  const latest = data[data.length - 1];

  const extended = [
    ...data,
    {
      ...latest,
      timestamp: now,
    },
  ];

  const formatted = extended.map((d) => ({
    ...d,
    date: new Date(d.timestamp * 1000).toLocaleDateString(),
  }));

  return (
    <div
      style={{
        backgroundColor: '#1e293b',
        padding: '1rem',
        borderRadius: '0.5rem',
        marginTop: '2rem',
      }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>📊 Sentiment History</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={formatted}>
          <XAxis dataKey="date" stroke="#94a3b8" />
          <YAxis domain={[0, 100]} stroke="#94a3b8" />
          <Tooltip />
          <Line type="monotone" dataKey="score" stroke="#22d3ee" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
