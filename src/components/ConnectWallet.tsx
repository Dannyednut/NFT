// ConnectWallet.tsx placeholder
// src/components/ConnectWallet.tsx
import { Button } from '../components/ui/button';
import { useContract } from '../hooks/useContract';

export default function ConnectWallet() {
  const { connectWallet } = useContract();

  return <Button onClick={connectWallet}>🔌 Connect Wallet</Button>;
}
