// NFTCard.tsx placeholder
// src/components/NFTCard.tsx
import { Card, CardContent } from '../components/ui/card';

export default function NFTCard({ tokenUri, tokenId }: { tokenUri: string; tokenId: number }) {
  return (
    <Card className="max-w-md mx-auto">
      <CardContent className="p-4">
        <img src={tokenUri} alt="NFT" className="rounded-xl" />
        <p className="mt-2 text-sm text-muted">Token ID: {tokenId}</p>
      </CardContent>
    </Card>
  );
}
