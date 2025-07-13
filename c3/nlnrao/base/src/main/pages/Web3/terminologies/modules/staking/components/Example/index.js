import React from "react";
import { Tab, Highlight } from "e-ui-react";

const STAKING_EXAMPLE_REACT = `import React, { useState } from 'react';

const StakeDashboard = () => {
  const [stakeAmount, setStakeAmount] = useState(0);
  const [rewards, setRewards] = useState(0);

  const handleStake = () => {
    // Simulated staking logic
    setRewards(rewards + stakeAmount * 0.1);
  };

  return (
    <div>
      <h2>Staking Dashboard</h2>
      <p>Stake Amount: <input type="number" value={stakeAmount} onChange={(e) => setStakeAmount(Number(e.target.value))} /></p>
      <button onClick={handleStake}>Stake</button>
      <p>Earned Rewards: {rewards.toFixed(2)} Tokens</p>
    </div>
  );
};

export default StakeDashboard;`;

const STAKING_EXAMPLE_ANGULAR_COMPONENT = `// stake-dashboard.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-stake-dashboard',
  templateUrl: './stake-dashboard.component.html'
})
export class StakeDashboardComponent {
  stakeAmount = 0;
  rewards = 0;

  stake() {
    this.rewards += this.stakeAmount * 0.1;
  }
}`;

const STAKING_EXAMPLE_ANGULAR_HTML = `<!-- stake-dashboard.component.html -->
<h2>Staking Dashboard</h2>
<label>Stake Amount: 
  <input type="number" [(ngModel)]="stakeAmount" />
</label>
<button (click)="stake()">Stake</button>
<p>Earned Rewards: {{ rewards.toFixed(2) }} Tokens</p>`;

const STAKING_EXAMPLE_VUE = `<template>
  <div>
    <h2>Staking Dashboard</h2>
    <label>Stake Amount:
      <input type="number" v-model.number="stakeAmount" />
    </label>
    <button @click="stake">Stake</button>
    <p>Earned Rewards: {{ rewards.toFixed(2) }} Tokens</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stakeAmount: 0,
      rewards: 0,
    };
  },
  methods: {
    stake() {
      this.rewards += this.stakeAmount * 0.1;
    },
  },
};
</script>`;

const Example = () =>{

   const ReactCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={STAKING_EXAMPLE_REACT} lang="javascript" />
      </div>);
   };

   const AngularCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={STAKING_EXAMPLE_ANGULAR_COMPONENT} lang="javascript" />
      <div align="center" className="mtop5p"><b>stake-dashboard.component.ts</b></div>
      <div className="mtop15p"><Highlight content={STAKING_EXAMPLE_ANGULAR_HTML} lang="html" /></div>
      <div align="center" className="mtop5p"><b>stake-dashboard.component.html</b></div>
      </div>);
   };

   const VueCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={STAKING_EXAMPLE_VUE} lang="javascript" />
      </div>);
   };

 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Examples: Staking UI Components in Popular Frameworks</b></h2></div>
    <div className="mtop15p">Let’s create a simple UI component called <code><b>StakeDashboard</b></code> that shows 
    staking balance, rewards, and a button to stake tokens.</div>
    <div className="mtop15p">
      <Tab menulinks={[{ id:"react", label:"React", url:"#", component:(<ReactCode />) },
            { id:"angular", label:"Angular", url:"#", component:(<AngularCode />) },
            { id:"vue", label:"Vue", url:"#", component:(<VueCode />) }]} />
    </div>
 </div>);
};

export default Example;