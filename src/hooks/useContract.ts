// // src/hooks/useContract.ts
// import { ethers } from 'ethers';
// import { ABI } from '../lib/abi';
// import { CONTRACT_ADDRESS } from '../config/contract';

// declare global {
//   interface Window {
//     ethereum?: any;
//   }
// }

// export async function initContract() {
//   if (!window.ethereum) throw new Error('MetaMask not detected');

//   const provider = new ethers.BrowserProvider(window.ethereum);
//   const accounts = await provider.send('eth_requestAccounts', []);
//   const wallet = accounts[0];
//   const signer = await provider.getSigner();
//   const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);

//   return { provider, wallet, contract };
// }
