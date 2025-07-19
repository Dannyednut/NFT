// src/hooks/useContract.ts
import { useEffect, useState } from 'react';
import { ethers } from 'ethers'; // ✅ v6-compatible import
import { ABI } from '../lib/abi';
import { CONTRACT_ADDRESS } from '../config/contract';

// Add type declaration for window.ethereum
declare global {
  interface Window {
    ethereum?: any;
  }
}

export function useContract() {
  const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null);
  const [wallet, setWallet] = useState<string | null>(null);
  const [contract, setContract] = useState<ethers.Contract | null>(null);

  useEffect(() => {
    if (typeof window.ethereum !== 'undefined') {
      const _provider = new ethers.BrowserProvider(window.ethereum); // ✅ v6 syntax
      setProvider(_provider);
    }
  }, []);

  async function connectWallet() {
    if (!provider) return;
    const accounts = await provider.send('eth_requestAccounts', []);
    setWallet(accounts[0]);

    const signer = await provider.getSigner(); // ✅ getSigner() is now async in v6
    const _contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer); // ✅ signer works here in v6
    setContract(_contract);
  }

  return { provider, wallet, contract, connectWallet };
}
