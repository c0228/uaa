import React from "react";
import { Tab, Highlight } from "e-ui-react";

const TOKENOMICS_EXAMPLE_REACT = `import React, { useState } from 'react';

const TokenomicsSimulator = () => {
  const [supply, setSupply] = useState(1000000);
  const [staked, setStaked] = useState(0);
  const [rewardRate] = useState(0.05);

  const stakeTokens = (amount) => {
    if (amount <= supply - staked) {
      setStaked(staked + amount);
    }
  };

  const calculateRewards = () => staked * rewardRate;

  return (
    <div>
      <h2>Tokenomics Simulator</h2>
      <p>Total Supply: {supply}</p>
      <p>Staked Tokens: {staked}</p>
      <p>Annual Rewards: {calculateRewards()}</p>
      <button onClick={() => stakeTokens(10000)}>Stake 10,000 Tokens</button>
    </div>
  );
};

export default TokenomicsSimulator;`;

const TOKENOMICS_EXAMPLE_ANGULAR_COMPONENT = `// tokenomics.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-tokenomics',
  templateUrl: './tokenomics.component.html'
})
export class TokenomicsComponent {
  supply = 1000000;
  staked = 0;
  rewardRate = 0.05;

  stakeTokens(amount: number) {
    if (amount <= this.supply - this.staked) {
      this.staked += amount;
    }
  }

  get rewards(): number {
    return this.staked * this.rewardRate;
  }
}`;

const TOKENOMICS_EXAMPLE_ANGULAR_HTML = `<!-- tokenomics.component.html -->
<h2>Tokenomics Simulator</h2>
<p>Total Supply: {{ supply }}</p>
<p>Staked Tokens: {{ staked }}</p>
<p>Annual Rewards: {{ rewards }}</p>
<button (click)="stakeTokens(10000)">Stake 10,000 Tokens</button>`;

const TOKENOMICS_EXAMPLE_VUE = `<template>
  <div>
    <h2>Tokenomics Simulator</h2>
    <p>Total Supply: {{ supply }}</p>
    <p>Staked Tokens: {{ staked }}</p>
    <p>Annual Rewards: {{ rewards }}</p>
    <button @click="stakeTokens(10000)">Stake 10,000 Tokens</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      supply: 1000000,
      staked: 0,
      rewardRate: 0.05
    };
  },
  computed: {
    rewards() {
      return this.staked * this.rewardRate;
    }
  },
  methods: {
    stakeTokens(amount) {
      if (amount <= this.supply - this.staked) {
        this.staked += amount;
      }
    }
  }
};
</script>`;

const Example = () =>{

   const ReactCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={TOKENOMICS_EXAMPLE_REACT} lang="javascript" />
      </div>);
   };

   const AngularCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={TOKENOMICS_EXAMPLE_ANGULAR_COMPONENT} lang="javascript" />
      <div align="center" className="mtop5p"><b>tokenomics.component.ts</b></div>
      <div className="mtop15p"><Highlight content={TOKENOMICS_EXAMPLE_ANGULAR_HTML} lang="javascript" /></div>
      <div align="center" className="mtop5p"><b>tokenomics.component.html</b></div>
      </div>);
   };

   const VueCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={TOKENOMICS_EXAMPLE_VUE} lang="javascript" />
      </div>);
   };

 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Code Examples: Tokenomics Simulation UI</b></h2></div>
    <div className="mtop15p"><b>Tokenomics Simulator:</b> Let’s create a basic UI component 
    simulating <b>Token Distribution</b> and <b>Staking Rewards</b> for a Web 3.0 app.</div>
    <div className="mtop15p">
      <Tab menulinks={[{ id:"react", label:"React", url:"#", component:(<ReactCode />) },
            { id:"angular", label:"Angular", url:"#", component:(<AngularCode />) },
            { id:"vue", label:"Vue", url:"#", component:(<VueCode />) }]} />
    </div>
 </div>);
};

export default Example;