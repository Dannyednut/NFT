// MintButton.tsx placeholder
// src/components/MintButton.tsx
import { Button } from '../components/ui/button';
import { useContract } from '../hooks/useContract';

export default function MintButton({ setToken }: { setToken: (id: number, uri: string) => void }) {
  const { wallet, contract } = useContract();

  async function mint() {
    if (!contract || !wallet) return;
    const tx = await contract.mint(1);
    await tx.wait();
    const total = await contract.totalSupply();
    const id = total - 1;
    const uri = await contract.tokenURI(id);
    setToken(id, uri);
  }

  return <Button onClick={mint}>🐣 Mint</Button>;
}
