// NFTCard.tsx placeholder
// src/components/NFTCard.tsx
export default function NFTCard({ tokenUri, tokenId }: { tokenUri: string; tokenId: number }) {
  return (
    <div
      style={{
        maxWidth: '400px',
        margin: '20px auto',
        border: '1px solid #ddd',
        borderRadius: '16px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
        padding: '16px',
        textAlign: 'center',
      }}
    >
      <img
        src={tokenUri}
        alt="NFT"
        style={{ borderRadius: '12px', maxWidth: '100%', height: 'auto' }}
      />
      <p style={{ marginTop: '12px', fontSize: '14px', color: '#555' }}>
        Token ID: {tokenId}
      </p>
    </div>
  );
}

