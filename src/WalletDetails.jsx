import { Connection, PublicKey, LAMPORTS_PER_SOL, clusterApiUrl } from '@solana/web3.js';
import { useWallet } from "@solana/wallet-adapter-react";
import { useState, useEffect } from 'react';
function WalletDetails() {
    const wallet = useWallet();
    const QUICKNODE_RPC = 'https://solana-devnet.g.alchemy.com/v2/A1y5j7RPCE72bUQu7v0lxZlA20_fXNVf'; // 👈 Replace with your QuickNode Endpoint OR clusterApiUrl('mainnet-beta')
    const SOLANA_CONNECTION = new Connection(QUICKNODE_RPC);

    const [balance, setBalance] = useState();

    useEffect( () => {
        if(wallet.publicKey !== null){
            async function getBalance(){
                console.log("wallet.publicKey", wallet.publicKey);
                const balance = await SOLANA_CONNECTION.getBalance(new PublicKey(wallet.publicKey));
                setBalance(balance / LAMPORTS_PER_SOL);
                console.log("BALANCE", balance);
            }
            getBalance();
        }
    }, [wallet.publicKey]);     
    return(
        <div>
            {/* <h1>Wallet Details</h1>
            <p>Wallet Address: {wall}</p>
            <p>Balance: {balance} SOL</p> */}
        </div>
    )

        
} 
export default WalletDetails;