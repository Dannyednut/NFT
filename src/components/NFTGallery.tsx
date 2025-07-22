'use client';

import NFTCard from '../components/NFTCard';

export default function NFTGallery({ nfts }: { nfts: { id: number; uri: string }[] }) {
  return (
    <div style={{ display: 'flex', overflowX: 'auto', gap: '1rem', paddingBottom: '0.5rem' }}>
      {nfts.map((nft) => (
        <div
          key={nft.id}
          style={{
            flex: '0 0 auto',
            width: '120px',
            height: '120px',
            borderRadius: '0.75rem',
            overflow: 'hidden',
            backgroundColor: '#1e293b',
            border: '1px solid #334155',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* <img src={nft.uri} alt={`Beast #${nft.id}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> */}
          <NFTCard tokenUri={nft.uri} tokenId={nft.id} />
        </div>
      ))}
    </div>
  );
}
