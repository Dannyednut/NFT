// hooks/useWallet.ts
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';

declare global {
  interface Window {
    ethereum?: any;
  }
}

export function useWallet() {
  const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null);
  const [wallet, setWallet] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.ethereum) {
      const newProvider = new ethers.BrowserProvider(window.ethereum);
      setProvider(newProvider);
    }
  }, []);

  async function connectWallet() {
    if (!provider) return;
    const accounts = await provider.send('eth_requestAccounts', []);
    setWallet(accounts[0]);
  }

  return { wallet, provider, connectWallet };
}