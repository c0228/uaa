import React from "react";
import { Tab, Highlight } from "e-ui-react";

const CCT_EXAMPLE_REACT = `import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';

// Replace with real contract ABI and address
const ERC20_ABI = [...];
const ETHEREUM_CONTRACT = '0x...';
const BSC_CONTRACT = '0x...';

const CrossChainTokenTracker = ({ userAddress }) => {
  const [ethBalance, setEthBalance] = useState(null);
  const [bscBalance, setBscBalance] = useState(null);

  const fetchEthereumBalance = async () => {
    try {
      const provider = new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/YOUR_INFURA_KEY");
      const contract = new ethers.Contract(ETHEREUM_CONTRACT, ERC20_ABI, provider);
      const balance = await contract.balanceOf(userAddress);
      setEthBalance(ethers.utils.formatEther(balance));
    } catch (error) {
      console.error("Ethereum Fetch Error:", error);
    }
  };

  const fetchBSCBalance = async () => {
    try {
      const provider = new ethers.providers.JsonRpcProvider("https://bsc-dataseed.binance.org/");
      const contract = new ethers.Contract(BSC_CONTRACT, ERC20_ABI, provider);
      const balance = await contract.balanceOf(userAddress);
      setBscBalance(ethers.utils.formatEther(balance));
    } catch (error) {
      console.error("BSC Fetch Error:", error);
    }
  };

  useEffect(() => {
    fetchEthereumBalance();
    fetchBSCBalance();
  }, [userAddress]);

  return (
    <div className="token-tracker">
      <h2>Cross-chain Token Balance Viewer</h2>
      <p><strong>Ethereum:</strong> {ethBalance ?? 'Loading...'} tokens</p>
      <p><strong>BSC:</strong> {bscBalance ?? 'Loading...'} tokens</p>
    </div>
  );
};

export default CrossChainTokenTracker;`;

const CCT_EXAMPLE_ANGULAR_COMPONENT = `import { Component, Input, OnInit } from '@angular/core';
import { ethers } from 'ethers';

@Component({
  selector: 'app-cross-chain-token-tracker',
  templateUrl: './cross-chain-token-tracker.component.html'
})
export class CrossChainTokenTrackerComponent implements OnInit {
  @Input() userAddress!: string;

  ethBalance: string = 'Loading...';
  bscBalance: string = 'Loading...';

  ERC20_ABI = [/* ERC20 ABI here */];
  ETHEREUM_CONTRACT = '0xYourEthContractAddress';
  BSC_CONTRACT = '0xYourBscContractAddress';

  async fetchBalance(providerUrl: string, contractAddress: string): Promise<string> {
    const provider = new ethers.providers.JsonRpcProvider(providerUrl);
    const contract = new ethers.Contract(contractAddress, this.ERC20_ABI, provider);
    const balance = await contract.balanceOf(this.userAddress);
    return ethers.utils.formatEther(balance);
  }

  async ngOnInit() {
    if (!this.userAddress) return;
    try {
      this.ethBalance = await this.fetchBalance('https://mainnet.infura.io/v3/YOUR_INFURA_KEY', this.ETHEREUM_CONTRACT);
    } catch {
      this.ethBalance = 'Error';
    }

    try {
      this.bscBalance = await this.fetchBalance('https://bsc-dataseed.binance.org/', this.BSC_CONTRACT);
    } catch {
      this.bscBalance = 'Error';
    }
  }
}`;

const CCT_EXAMPLE_ANGULAR_HTML = `<div>
  <h2>Cross-Chain Token Tracker</h2>
  <p>Ethereum Balance: {{ ethBalance }}</p>
  <p>Binance Smart Chain Balance: {{ bscBalance }}</p>
</div>`;

const CCT_EXAMPLE_VUE_COMPONENT = `<template>
  <div>
    <h2>Cross-Chain Token Tracker</h2>
    <p>Ethereum Balance: {{ ethBalance }}</p>
    <p>BSC Balance: {{ bscBalance }}</p>
  </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue';
import { ethers } from 'ethers';

export default {
  name: 'CrossChainTokenTracker',
  props: {
    userAddress: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const ethBalance = ref('Loading...');
    const bscBalance = ref('Loading...');

    const ERC20_ABI = [/* ERC20 ABI here */];
    const ETHEREUM_CONTRACT = '0xYourEthContractAddress';
    const BSC_CONTRACT = '0xYourBscContractAddress';

    const fetchBalance = async (url, contractAddress, setter) => {
      try {
        const provider = new ethers.providers.JsonRpcProvider(url);
        const contract = new ethers.Contract(contractAddress, ERC20_ABI, provider);
        const balance = await contract.balanceOf(props.userAddress);
        setter(ethers.utils.formatEther(balance));
      } catch {
        setter('Error');
      }
    };

    const updateBalances = () => {
      fetchBalance('https://mainnet.infura.io/v3/YOUR_INFURA_KEY', ETHEREUM_CONTRACT, val => ethBalance.value = val);
      fetchBalance('https://bsc-dataseed.binance.org/', BSC_CONTRACT, val => bscBalance.value = val);
    };

    onMounted(updateBalances);
    watch(() => props.userAddress, updateBalances);

    return { ethBalance, bscBalance };
  }
};
</script>`;

const Example = () =>{

   const ReactCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
         <div align="center" className="mtop5p"><h5 className="blog-head"><b>React JS Component Example: Cross-chain Token Tracker</b></h5></div>
         <div className="mtop5p">Let’s simulate a simple cross-chain token status viewer component using React. This component 
         checks balances of a token across two mock chains: Ethereum and Binance Smart Chain (BSC).</div>
         <div className="mtop5p"><b>Setup:</b></div>
         <div className="mtop5p">Assume you’re using libraries like <b>ethers.js</b> for Ethereum and a mock function for 
         BSC (in a real-world app, you’d integrate BSC via Web3 or ethers provider).</div>
         <div className="mtop5p"><Highlight content={CCT_EXAMPLE_REACT} lang="javascript" /></div>
         <div className="mtop5p"> This component demonstrates a basic idea. In real apps, you'd ensure wallet connectivity (e.g., MetaMask), 
         handle network switching, and secure RPC connections.</div>
      </div>);
   };

   const AngularCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
         <div align="center" className="mtop5p"><h5 className="blog-head"><b>Angular Example: Cross-chain Token Tracker</b></h5></div>
         <div className="mtop5p"><b>1.  Install ethers</b></div>
         <div className="mtop5p"><Highlight content={`npm install ethers`} lang="javascript" /></div>
         <div className="mtop5p"><b>2. Component File</b></div>
         <div className="mtop5p"><Highlight content={CCT_EXAMPLE_ANGULAR_COMPONENT} lang="javascript" /></div>
         <div align="center" className="mtop5p"><b>cross-chain-token-tracker.component.ts</b></div>
         <div className="mtop5p"><b>3. HTML File</b></div>
         <div className="mtop5p"><Highlight content={CCT_EXAMPLE_ANGULAR_HTML} lang="html" /></div>
         <div align="center" className="mtop5p"><b>cross-chain-token-tracker.component.html</b></div>
      </div>);
   };

   const VueCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
         <div align="center" className="mtop5p"><h5 className="blog-head"><b>Vue Example: Cross-chain Token Tracker</b></h5></div>
         <div className="mtop5p"><b>1.  Install ethers</b></div>
         <div className="mtop5p"><Highlight content={`npm install ethers`} lang="javascript" /></div>
         <div className="mtop5p"><b>2. Component File</b></div>
         <div className="mtop5p"><Highlight content={CCT_EXAMPLE_VUE_COMPONENT} lang="javascript" /></div>
      </div>);
   };

 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Examples</b></h2></div>
    <div className="mtop15p">
      <Tab menulinks={[{ id:"react", label:"React", url:"#", component:(<ReactCode />) },
            { id:"angular", label:"Angular", url:"#", component:(<AngularCode />) },
            { id:"vue", label:"Vue", url:"#", component:(<VueCode />) }]} />
    </div>
 </div>);
};

export default Example;