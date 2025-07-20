
function getSentimentColor(level: string) {
  switch (level) {
    case 'Very Bearish':
      return '#2c3e50';
    case 'Bearish':
      return '#34495e';
    case 'Neutral':
      return '#7f8c8d';
    case 'Bullish':
      return '#27ae60';
    case 'Very Bullish':
      return '#2ecc71';
    default:
      return '#000';
  }
}

export default function SentimentCard({ sentiment }: any) {
  return (
    <div style={{ textAlign: 'center', marginTop: '24px' }}>
      <h2 style={{ fontSize: '1.25rem', fontWeight: '600' }}>📊 Current Sentiment</h2>
      <p style={{ fontWeight: 'bold', color: getSentimentColor(sentiment.level) }}>
        Level: {sentiment.level}
      </p>
      <p>Score: {sentiment.score}</p>
      <p>Last Updated: {new Date(Number(sentiment.timestamp) * 1000).toLocaleString()}</p>
    </div>
  );
}
