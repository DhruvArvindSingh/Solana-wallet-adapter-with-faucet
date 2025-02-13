import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from '@solana/web3.js';
import "@solana/wallet-adapter-react-ui/styles.css";
import { useMemo, useState } from 'react';
import './App.css';
import WalletDetails from './WalletDetails';
import Airdrop from './Airdrop';
function App() {

  return (
    <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/A1y5j7RPCE72bUQu7v0lxZlA20_fXNVf"}>
      <WalletProvider wallets={[]}>
        <WalletModalProvider>
          <div className='container'>
            <WalletDetails/>
            <Airdrop />
            <div className='wallet-container'>
              <WalletMultiButton />
              <WalletDisconnectButton />
            </div>
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}

export default App
