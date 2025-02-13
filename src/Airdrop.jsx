import { useWallet } from "@solana/wallet-adapter-react";
import { useConnection } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useState } from "react";

function Airdrop() {
    const wallet = useWallet();
    const { connection } = useConnection();
    const [amount, setAmount] = useState(0);

    async function requestAirdrop() {
        if (!wallet.publicKey) {
            alert("Please connect your wallet");
            return;
        }
        console.log("Requesting airdrop for ", wallet.publicKey);
        const res = await connection.requestAirdrop(
            wallet.publicKey,
            amount * LAMPORTS_PER_SOL
        );
        console.log("Airdrop request sent with signature: ", res);
        alert("Airdropped " + amount + " SOL to " + wallet.publicKey.toBase58());
    }

    return (
        <div className='airdrop-container'>
            <input value={amount} onChange={(e) => setAmount(e.target.value)} type='number' placeholder='Amount in lamports' />
            <button onClick={requestAirdrop}>Request Airdrop</button>
        </div>
    )
}

export default Airdrop;
