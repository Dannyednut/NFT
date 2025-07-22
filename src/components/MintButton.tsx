export default function MintButton({
  contract,
  wallet,
  setToken,
  quantity,
}: {
  contract: any;
  wallet: string | null;
  setToken: (id: number, uri: string) => void;
  quantity: number;
}) {
  const mint = async () => {
    console.log('Mint button clicked');
    if (!contract || !wallet) return console.log('Missing wallet or contract');

    try {
      const tx = await contract.mint(quantity);
      await tx.wait();
      const total = await contract.totalSupply();
      const id = Number(Number(total) - 1);
      const uri = await contract.tokenURI(id);
      setToken(id, uri);
    } catch (e) {
      console.error('Mint failed:', e);
    }
  };

  return (
    <button onClick={mint} style={{
      backgroundColor: '#16A34A',
      color: 'white',
      padding: '10px 20px',
      borderRadius: '8px',
      fontWeight: 'bold',
      fontSize: '16px',
      border: 'none',
      cursor: 'pointer',
      width: '100%',
    }}>
      Mint
    </button>
  );
}
