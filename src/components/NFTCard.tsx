'use client';
import { useEffect, useState } from 'react';

export default function NFTCard({ tokenUri, tokenId }: { tokenUri: string; tokenId: number }) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    if (tokenUri.startsWith('data:application/json')) {
      try {
        const jsonStr = tokenUri.replace('data:application/json;utf8,', '');
        const metadata = JSON.parse(jsonStr);
        let img = metadata.image;

        // ✅ Fix: Encode SVG if not already encoded
        if (img.startsWith('data:image/svg+xml;utf8,<svg')) {
          const rawSvg = img.replace('data:image/svg+xml;utf8,', '');
          const encodedSvg = encodeURIComponent(rawSvg);
          img = `data:image/svg+xml;utf8,${encodedSvg}`;
        }

        setImageUrl(img);
      } catch (err) {
        console.error('❌ Failed to parse tokenURI metadata:', err);
      }
    }
  }, [tokenUri]);

  return (
    // <div
    //   style={{
    //     maxWidth: '400px',
    //     margin: '0 auto',
    //     padding: '1rem',
    //     border: '1px solid #ccc',
    //     borderRadius: '0.5rem',
    //     textAlign: 'center',
    //   }}
    // >
      // {imageUrl ? (
        <img src={imageUrl} alt="NFT" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      // ) : (
      //   <p>Loading image...</p>
      // )}
    //   <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: '#555' }}>Token ID: {tokenId}</p>
    // </div>
  );
}
// style={{ borderRadius: '0.75rem', width: '100%' }}