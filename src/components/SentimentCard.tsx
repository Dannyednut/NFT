// SentimentCard.tsx placeholder
// src/components/SentimentCard.tsx
export default function SentimentCard({ sentiment }: any) {
  return (
    <div className="text-center">
      <h2 className="text-xl font-semibold">📊 Current Sentiment</h2>
      <p>Level: {sentiment.level}</p>
      <p>Score: {sentiment.score}</p>
      <p>Last Updated: {new Date(Number(sentiment.timestamp) * 1000).toLocaleString()}</p>
    </div>
  );
}
