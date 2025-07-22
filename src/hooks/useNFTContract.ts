// hooks/useNFTContract.ts
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { ABI } from '../lib/abi';
import { CONTRACT_ADDRESS } from '../config/contract';

export function useNFTContract(provider: ethers.BrowserProvider | null) {
  const [contract, setContract] = useState<any>(null);

  useEffect(() => {
    async function loadContract() {
      if (!provider) return;
      const signer = await provider.getSigner();
      const nftContract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
      setContract(nftContract);
    }
    loadContract();
  }, [provider]);

  return contract;
}