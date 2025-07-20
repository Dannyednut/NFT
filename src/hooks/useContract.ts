// src/hooks/useContract.ts
import { useEffect, useState } from 'react';
import { BrowserProvider, Contract, JsonRpcSigner } from 'ethers';
import { ABI } from '../lib/abi';
import { CONTRACT_ADDRESS } from '../config/contract';

declare global {
  interface Window {
    ethereum?: any;
  }
}

export function useContract() {
  const [provider, setProvider] = useState<BrowserProvider | null>(null);
  const [wallet, setWallet] = useState<string | null>(null);
  const [contract, setContract] = useState<Contract | null>(null);

  useEffect(() => {
    if (window.ethereum) {
      const p = new BrowserProvider(window.ethereum as any);
      setProvider(p);
    }
  }, []);

  async function connectWallet() {
    if (!provider) return;
    const accounts = await provider.send('eth_requestAccounts', []);
    setWallet(accounts[0]);
    const signer = await provider.getSigner() as JsonRpcSigner;
    const nft = new Contract(CONTRACT_ADDRESS, ABI, signer);
    setContract(nft);
  }

  return { provider, wallet, contract, connectWallet };
}
