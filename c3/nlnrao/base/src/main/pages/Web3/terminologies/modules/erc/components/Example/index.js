import React from "react";
import { Tab, Highlight } from "e-ui-react";

const ERC_EXAMPLE_REACT = `import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';

const ERC20_ABI = [
  "function balanceOf(address owner) view returns (uint256)",
];

const TokenBalance = ({ userAddress, tokenAddress }) => {
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    const loadBalance = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(tokenAddress, ERC20_ABI, provider);
      const bal = await contract.balanceOf(userAddress);
      setBalance(ethers.utils.formatUnits(bal, 18));
    };

    if (userAddress && tokenAddress) {
      loadBalance();
    }
  }, [userAddress, tokenAddress]);

  return (
    <div>
      <h3>Token Balance:</h3>
      <p>{balance !== null ? \`\${balance} Tokens\` : "Loading..."}</p>
    </div>
  );
};

export default TokenBalance;`;

const ERC_EXAMPLE_ANGULAR_COMPONENT = `import { Component, Input, OnInit } from '@angular/core';
import { ethers } from 'ethers';

@Component({
  selector: 'app-token-balance',
  template: \`
    <div>
      <h3>Token Balance:</h3>
      <p>{{ balance !== null ? balance + ' Tokens' : 'Loading...' }}</p>
    </div>
  \`
})
export class TokenBalanceComponent implements OnInit {
  @Input() userAddress!: string;
  @Input() tokenAddress!: string;
  balance: string | null = null;

  async ngOnInit() {
    const provider = new ethers.providers.Web3Provider((window as any).ethereum);
    const abi = ["function balanceOf(address owner) view returns (uint256)"];
    const contract = new ethers.Contract(this.tokenAddress, abi, provider);
    const bal = await contract.balanceOf(this.userAddress);
    this.balance = ethers.utils.formatUnits(bal, 18);
  }
}`;

const ERC_EXAMPLE_VUE = `<template>
  <div>
    <h3>Token Balance:</h3>
    <p>{{ balance !== null ? balance + ' Tokens' : 'Loading...' }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { ethers } from 'ethers';

const props = defineProps({
  userAddress: String,
  tokenAddress: String
});

const balance = ref(null);

const loadBalance = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const abi = ["function balanceOf(address owner) view returns (uint256)"];
  const contract = new ethers.Contract(props.tokenAddress, abi, provider);
  const bal = await contract.balanceOf(props.userAddress);
  balance.value = ethers.utils.formatUnits(bal, 18);
};

watch(() => [props.userAddress, props.tokenAddress], () => {
  if (props.userAddress && props.tokenAddress) loadBalance();
}, { immediate: true });

</script>`;

const Example = () =>{

   const ReactCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={ERC_EXAMPLE_REACT} lang="javascript" />
      </div>);
   };

   const AngularCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
         <div className="mtop5p"><b>Install Dependencies:</b></div>
         <div className="mtop5p"><Highlight content={`npm install ethers`} lang="python" /></div>
         <div className="mtop5p"><b>Code:</b></div>
         <div className="mtop5p"><Highlight content={ERC_EXAMPLE_ANGULAR_COMPONENT} lang="javascript" /></div>
         <div align="center" className="mtop5p"><b>token-balance.component.ts</b></div>

      
      </div>);
   };

   const VueCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={ERC_EXAMPLE_VUE} lang="javascript" />
      </div>);
   };

 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Example  Use Case – Displaying ERC-20 Token Balance</b></h2></div>
    <div className="mtop15p">Let’s demonstrate a basic component 
      that <b>reads an ERC-20 token balance</b> using <code><b>Web3.js</b></code> or <code><b>Ethers.js</b></code> across 
      three frameworks:</div>
    <div className="mtop15p">
      <Tab menulinks={[{ id:"react", label:"React", url:"#", component:(<ReactCode />) },
            { id:"angular", label:"Angular", url:"#", component:(<AngularCode />) },
            { id:"vue", label:"Vue", url:"#", component:(<VueCode />) }]} />
    </div>
 </div>);
};

export default Example;