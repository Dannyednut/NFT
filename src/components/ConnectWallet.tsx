// src/components/ConnectWallet.tsx
// import { useContract } from '../hooks/useContract';

// export default function ConnectWallet() {
//   const { connectWallet, wallet } = useContract();

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//       <button
//         onClick={connectWallet}
//         style={{
//           backgroundColor: '#1D4ED8',
//           color: 'white',
//           padding: '10px 20px',
//           borderRadius: '8px',
//           fontWeight: 'bold',
//           fontSize: '16px',
//           marginBottom: '8px',
//           border: 'none',
//           cursor: 'pointer',
//         }}
//       >
//         🔌 Connect Wallet
//       </button>

//       {wallet && (
//         <div style={{ fontSize: '14px', color: '#4B5563' }}>
//           ✅ Connected: {wallet.slice(0, 6)}...{wallet.slice(-4)}
//         </div>
//       )}
//     </div>
//   );
// }
