'use client';

import { useState } from 'react';
import { initContract } from '../hooks/useContract';
import MintButton from '../components/MintButton';
import NFTCard from '../components/NFTCard';
import SentimentCard from '../components/SentimentCard';

export default function Home() {
  const [wallet, setWallet] = useState<string | null>(null);
  const [contract, setContract] = useState<any>(null);
  const [tokenId, setTokenId] = useState<number | null>(null);
  const [tokenUri, setTokenUri] = useState<string | null>(null);
  const [sentiment, setSentiment] = useState<any>(null);

  const connectWallet = async () => {
    try {
      const { wallet, contract } = await initContract();
      setWallet(wallet);
      setContract(contract);
    } catch (e) {
      console.error('Wallet connect failed:', e);
    }
  };

  const handleSetToken = (id: number, uri: string) => {
    setTokenId(id);
    setTokenUri(uri);
  };

  const fetchSentiment = async () => {
    console.log('Get Sentiment clicked');
    if (!contract) return console.log('No contract found');
    const [score, level, timestamp] = await contract.getLatestSentiment();
    console.log('Sentiment:', score, level, timestamp);
    setSentiment({ score, level, timestamp });
  };

  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>🐲 Crypto Beasts Dashboard</h1>
      <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <button onClick={connectWallet} style={buttonStyle}>🔌 Connect Wallet</button>
        <MintButton contract={contract} wallet={wallet} setToken={handleSetToken} />
        <button onClick={fetchSentiment} style={buttonStyle}>📈 Get Sentiment</button>
      </div>

      {tokenUri && tokenId !== null && <NFTCard tokenUri={tokenUri} tokenId={tokenId} />}
      {sentiment && <SentimentCard sentiment={sentiment} />}
    </main>
  );
}

const buttonStyle = {
  backgroundColor: '#2563eb',
  color: 'white',
  padding: '10px 20px',
  borderRadius: '8px',
  fontWeight: 'bold',
  fontSize: '16px',
  border: 'none',
  cursor: 'pointer',
};
