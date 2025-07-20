// page.tsx placeholder
'use client';

import { useState } from 'react';
import ConnectWallet from '../components/ConnectWallet';
import MintButton from '../components/MintButton';
import NFTCard from '../components/NFTCard';
import SentimentCard from '../components/SentimentCard';
import { Button } from '../components/ui/button';
import { useContract } from '../hooks/useContract';


export default function Home() {
  const { contract } = useContract();
  const [tokenId, setTokenId] = useState<number | null>(null);
  const [tokenUri, setTokenUri] = useState<string | null>(null);
  const [sentiment, setSentiment] = useState<any>(null);

  const handleSetToken = (id: number, uri: string) => {
    setTokenId(id);
    setTokenUri(uri);
  };

  async function fetchSentiment() {
    if (!contract) return;
    const [score, level, timestamp] = await contract.getLatestSentiment();
    setSentiment({ score, level, timestamp });
  }

  return (
    <main className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">🐲 Crypto Beasts Dashboard</h1>

      <div className="flex justify-center gap-4">
        <ConnectWallet />
        <MintButton setToken={handleSetToken} />
        <Button onClick={fetchSentiment}>📈 Get Sentiment</Button>
      </div>

      {tokenUri && tokenId !== null && <NFTCard tokenUri={tokenUri} tokenId={tokenId} />}
      {sentiment && <SentimentCard sentiment={sentiment} />}
    </main>
  );
}
