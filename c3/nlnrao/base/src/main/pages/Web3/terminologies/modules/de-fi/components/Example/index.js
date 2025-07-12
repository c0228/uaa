import React from "react";
import { Tab, Highlight } from "e-ui-react";

const DEFI_EXAMPLE_REACT = `// DeFiWallet.jsx
import React, { useState, useEffect } from 'react';
import Web3 from 'web3';

const DeFiWallet = () => {
  const [account, setAccount] = useState('');
  const [balance, setBalance] = useState('');

  useEffect(() => {
    const loadWeb3 = async () => {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const accounts = await web3.eth.getAccounts();
        const ethBalance = await web3.eth.getBalance(accounts[0]);
        setAccount(accounts[0]);
        setBalance(web3.utils.fromWei(ethBalance, 'ether'));
      }
    };
    loadWeb3();
  }, []);

  return (
    <div>
      <h2>DeFi Wallet</h2>
      <p>Account: {account}</p>
      <p>ETH Balance: {balance}</p>
    </div>
  );
};

export default DeFiWallet;`;

const DEFI_EXAMPLE_ANGULAR_COMPONENT = `// defi-wallet.component.ts
import { Component, OnInit } from '@angular/core';
import Web3 from 'web3';

@Component({
  selector: 'app-defi-wallet',
  templateUrl: './defi-wallet.component.html'
})
export class DefiWalletComponent implements OnInit {
  account: string = '';
  balance: string = '';

  async ngOnInit() {
    const web3 = new Web3((window as any).ethereum);
    await (window as any).ethereum.request({ method: 'eth_requestAccounts' });
    const accounts = await web3.eth.getAccounts();
    this.account = accounts[0];
    const balanceWei = await web3.eth.getBalance(this.account);
    this.balance = web3.utils.fromWei(balanceWei, 'ether');
  }
}`;

const DEFI_EXAMPLE_ANGULAR_HTML = `<!-- defi-wallet.component.html -->
<h2>DeFi Wallet</h2>
<p>Account: {{ account }}</p>
<p>ETH Balance: {{ balance }}</p>`;

const DEFI_EXAMPLE_VUE = `<!-- DeFiWallet.vue -->
<template>
  <div>
    <h2>DeFi Wallet</h2>
    <p>Account: {{ account }}</p>
    <p>ETH Balance: {{ balance }}</p>
  </div>
</template>

<script>
import Web3 from 'web3';

export default {
  data() {
    return {
      account: '',
      balance: ''
    };
  },
  async mounted() {
    const web3 = new Web3(window.ethereum);
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    const accounts = await web3.eth.getAccounts();
    this.account = accounts[0];
    const balanceWei = await web3.eth.getBalance(this.account);
    this.balance = web3.utils.fromWei(balanceWei, 'ether');
  }
};
</script>`;

const Example = () =>{

   const ReactCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <div className="mtop5p"><Highlight content={DEFI_EXAMPLE_REACT} lang="javascript" /></div>
      <div align="center"><b>DeFiWallet.jsx</b></div>
      </div>);
   };

   const AngularCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <div className="mtop5p"><Highlight content={DEFI_EXAMPLE_ANGULAR_COMPONENT} lang="javascript" /></div>
      <div align="center"><b>defi-wallet.component.js</b></div>
      <div className="mtop15p"><Highlight content={DEFI_EXAMPLE_ANGULAR_HTML} lang="html" /></div>
      <div align="center"><b>defi-wallet.component.html</b></div>
      </div>);
   };

   const VueCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <div className="mtop5p"><Highlight content={DEFI_EXAMPLE_VUE} lang="javascript" /></div>
      <div align="center"><b>DeFiWallet.vue</b></div>
      </div>);
   };

 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Real-world Example Components</b></h2></div>
    <div className="mtop15p">Let’s now look at <b>simple frontend DeFi 
   components</b> using <b>ReactJS</b>, <b>Angular</b> and <b>VueJS</b> that show token balances and 
   allow simple token transfers using Web3.</div>
    <div className="mtop15p">
      <Tab menulinks={[{ id:"react", label:"React", url:"#", component:(<ReactCode />) },
            { id:"angular", label:"Angular", url:"#", component:(<AngularCode />) },
            { id:"vue", label:"Vue", url:"#", component:(<VueCode />) }]} />
    </div>
 </div>);
};

export default Example;