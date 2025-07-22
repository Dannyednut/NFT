'use client';

import { useEffect, useState } from 'react';
import { useWallet } from '../hooks/useWallet';
import { useNFTContract } from '../hooks/useNFTContract';
import MintButton from '../components/MintButton';
//import NFTCard from '../components/NFTCard';
import SentimentChart from '../components/SentimentChart';
import NFTGallery from '../components/NFTGallery';
import BeastPreviewGrid from '../components/BeastPreviewGrid';

export default function Home() {
  const { wallet, provider, connectWallet } = useWallet();
  const contract = useNFTContract(provider);

  const [tokenId, setTokenId] = useState<number | null>(null);
  const [tokenUri, setTokenUri] = useState<string | null>(null);
  const [sentimentHistory, setSentimentHistory] = useState<any[]>([]);
  const [mintedNFTs, setMintedNFTs] = useState<{ id: number; uri: string }[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleSetToken = (id: number, uri: string) => {
    setTokenId(id);
    setTokenUri(uri);
    setMintedNFTs((prev) => [...prev, { id, uri }]);
  };

  useEffect(() => {
    async function fetchHistory() {
      if (!contract) return;
      setLoading(true);
      try {
        const length = await contract.getSentimentHistoryLength();
        const history = [];
        for (let i = 0; i < length; i++) {
          const [score, level, timestamp] = await contract.getSentimentSnapshot(i);
          history.push({
            score: Number(score),
            level: Number(level),
            timestamp: Number(timestamp),
          });
        }
        setSentimentHistory(history);
      } catch (err) {
        console.error('Error loading sentiment history:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchHistory();
  }, [contract]);

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', backgroundColor: '#0f172a', color: '#f8fafc', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem' }}>
        {/* Header */}
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#22d3ee' }}>Crypto Beasts</h2>
          {wallet ? (
            <span style={{ padding: '0.4rem 0.8rem', background: '#1e293b', borderRadius: '8px', fontWeight: 'bold', fontSize: '0.9rem' }}>
              ✅ {wallet.slice(0, 6)}...{wallet.slice(-4)}
            </span>
          ) : (
            <button
              onClick={connectWallet}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '0.5rem',
                border: '1px solid #334155',
                backgroundColor: '#1e293b',
                color: '#f1f5f9',
                fontWeight: 'bold',
              }}
            >
              🔌 Connect Wallet
            </button>
          )}
        </header>

        {/* Hero */}
        <section style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
          {/* Left - Preview Placeholder */}
          <div style={{ flex: 1, minWidth: 280 }}>
            <div style={{ background: '#1e293b', borderRadius: '0.75rem', padding: '1rem', textAlign: 'center' }}>
              <p style={{ marginBottom: '0.5rem', color: '#94a3b8' }}>Preview</p>
              <div>
                <BeastPreviewGrid/>
                {/* Animated Beast Preview Coming Soon */}
              </div>
            </div>
          </div>

          {/* Right - Mint Controls */}
          <div style={{ flex: 1, minWidth: 280 }}>
            <h1 
              style={{
                fontSize: '2.5rem',
                fontWeight: 800,
                color: '#f8fafc',
                letterSpacing: '-1px',
                lineHeight: 1.2,
                marginBottom: '0.75rem'
              }}
            >
              Mint Your Sentient<br></br>Crypto Beast
            </h1>
            <p style={{ color: '#cbd5e1', marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
              {/* Evolving NFTs that react to market trends. Each Beast changes its appearance with crypto sentiment. */}
              Crypto Beasts are intelligent, evolving NFTs that respond to real-time crypto market sentiment. Each Beast is unique,
              with dynamic traits that shift based on bullish or bearish trends. Mint your own and watch it transform with the market.
            </p>

            {/* Mint Box */}
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '1rem' }}>
              <input
                type="number"
                min={1}
                max={5}
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                style={{
                  padding: '0.4rem 0.6rem',
                  background: '#1e293b',
                  color: 'white',
                  borderRadius: '1px',
                  border: '1px solid #334155',
                  width: '100%',
                  textAlign: 'center',
                }}
              />
              {/* <MintButton quantity={quantity} wallet={wallet} contract={contract} setToken={handleSetToken} /> */}
            </div>
            <MintButton quantity={quantity} wallet={wallet} contract={contract} setToken={handleSetToken} />

            {/* Gallery */}
            <div>
              <h3 style={{ marginBottom: '0.4rem', color: '#22d3ee', fontSize: '2rem' }}>Collection</h3>
              {mintedNFTs.length ? (
                <NFTGallery nfts={mintedNFTs} />
              ) : (
                <p style={{ color: '#94a3b8' }}>No NFTs minted yet. Start by minting your first Beast!</p>

              )}
              {/* <NFTGallery nfts={mintedNFTs} /> */}
            </div>
          </div>
        </section>

        {/* Sentiment Chart */}
        <section style={{ marginBottom: '2rem' }}>
          {loading ? (
            <p style={{ textAlign: 'center' }}>⏳ Loading sentiment chart...</p>
          ) : (
            <SentimentChart data={sentimentHistory} />
          )}
        </section>

        <footer style={{ textAlign: 'center', padding: '1rem 0', color: '#64748b', fontSize: '0.85rem' }}>
          © 2025 Crypto Beasts. Built with 💙
        </footer>
      </div>
    </div>
  );
}
