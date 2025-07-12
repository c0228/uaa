import React from "react";
import { Tab, Highlight } from "e-ui-react";

const MMW_EXAMPLE_REACT = `import { useState } from "react";
import { ethers } from "ethers";

export default function ConnectWallet() {
  const [account, setAccount] = useState("");

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
      } catch (err) {
        console.error("User rejected wallet connection", err);
      }
    } else {
      alert("Install MetaMask!");
    }
  };

  return (
    <div>
      <button onClick={connectWallet}>
        {account ? \`Connected: \${account.slice(0, 6)}...\` : "Connect Wallet"}
      </button>
    </div>
  );
}`;

const MMW_EXAMPLE_ANGULAR_COMPONENT = `// metamask.component.ts
import { Component } from '@angular/core';

declare let window: any;

@Component({
  selector: 'app-metamask',
  templateUrl: './metamask.component.html'
})
export class MetaMaskComponent {
  account: string | null = null;

  async connectWallet() {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        this.account = accounts[0];
      } catch (error) {
        console.error("MetaMask error:", error);
      }
    } else {
      alert("Please install MetaMask!");
    }
  }
}`;

const MMW_EXAMPLE_ANGULAR_HTML = `<!-- metamask.component.html -->
<h2>MetaMask Wallet</h2>
<button (click)="connectWallet()">Connect MetaMask</button>
<p *ngIf="account">Connected Account: {{ account }}</p>`;

const MMW_EXAMPLE_VUE = `<template>
  <div>
    <h2>MetaMask Wallet</h2>
    <button @click="connectWallet">Connect MetaMask</button>
    <p v-if="account">Connected Account: {{ account }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      account: null
    };
  },
  methods: {
    async connectWallet() {
      if (window.ethereum) {
        try {
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
          this.account = accounts[0];
        } catch (error) {
          console.error("Error connecting MetaMask:", error);
        }
      } else {
        alert("Please install MetaMask!");
      }
    }
  }
};
</script>`;


const ConnectWallet = () =>{

  const ReactCode = ()=>{
  return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
    <div align="center"><h5 className="blog-head"><b>MetaMask Integration</b></h5></div>
    <Highlight content={MMW_EXAMPLE_REACT} lang="java" />
  </div>);
  };

  const AngularCode = ()=>{
  return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
    <div align="center"><h5 className="blog-head"><b>MetaMask Integration</b></h5></div>
    <div className="mtop5p"><Highlight content={MMW_EXAMPLE_ANGULAR_COMPONENT} lang="javascript" /></div>
    <div align="center" className="mtop5p"><b>metamask.component.ts</b></div>
    <div className="mtop15p"><Highlight content={MMW_EXAMPLE_ANGULAR_HTML} lang="html" /></div>
    <div align="center" className="mtop5p"><b>metamask.component.html</b></div>
  </div>);
  };

  const VueCode = ()=>{
  return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
    <div align="center"><h5 className="blog-head"><b>MetaMask Integration</b></h5></div>
    <div className="mtop5p"><Highlight content={MMW_EXAMPLE_VUE} lang="javascript" /></div>
  </div>);
  };

 return (<div className="mtop15p mbot15p lh28p fs16p">
    <div align="center" className="mtop15p"><h2 className="blog-head"><b>Connect Metamask Wallet:</b></h2></div>
    <div><h4 className="blog-head"><b>Steps to Implement:</b></h4></div>
    <div className="mtop15p">
            <div><b>Install Web3 or Ethers</b></div>
            <div className="mtop5p">
                <Highlight content={`npm install ethers`} lang="javascript" />
            </div>
    </div>
    <div className="mtop15p">
      <Tab menulinks={[{ id:"react", label:"React", url:"#", component:(<ReactCode />) },
            { id:"angular", label:"Angular", url:"#", component:(<AngularCode />) },
            { id:"vue", label:"Vue", url:"#", component:(<VueCode />) }]} />
    </div>
 </div>);
};

export default ConnectWallet;