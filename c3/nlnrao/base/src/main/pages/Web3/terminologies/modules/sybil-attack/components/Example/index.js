import React from "react";
import { Tab, Highlight } from "e-ui-react";

const SA_EXAMPLE_REACT = `import { useState } from 'react';

const FakeVoterSimulator = () => {
  const [voters, setVoters] = useState([]);

  const addSybilNodes = () => {
    const fakeVoters = Array.from({ length: 10 }, (_, i) => ({
      id: \`wallet_\${i}\`,
      vote: 'YES'
    }));
    setVoters([...voters, ...fakeVoters]);
  };

  return (
    <div>
      <h2>DAO Voting System</h2>
      <button onClick={addSybilNodes}>Simulate Sybil Attack (Add 10 Wallets)</button>
      <ul>
        {voters.map((voter) => (
          <li key={voter.id}>{voter.id} - {voter.vote}</li>
        ))}
      </ul>
    </div>
  );
};

export default FakeVoterSimulator;`;

const SA_EXAMPLE_ANGULAR_COMPONENT = `// airdrop.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-airdrop',
  templateUrl: './airdrop.component.html'
})
export class AirdropComponent {
  wallets: string[] = [];

  claimAirdrop() {
    for (let i = 0; i < 5; i++) {
      this.wallets.push(\`fake_wallet_\${Math.random().toString(36).slice(2)}\`);
    }
  }
}`;

const SA_EXAMPLE_ANGULAR_HTML = `<!-- airdrop.component.html -->
<h3>Airdrop Claim Simulation</h3>
<button (click)="claimAirdrop()">Simulate Sybil Airdrop Attack</button>
<ul>
  <li *ngFor="let wallet of wallets">{{ wallet }}</li>
</ul>`;

const SA_EXAMPLE_VUE = `<template>
  <div>
    <h2>Reputation System</h2>
    <button @click="sybilAttack">Add Fake Reviews</button>
    <ul>
      <li v-for="review in reviews" :key="review.id">
        {{ review.id }}: {{ review.feedback }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reviews: []
    };
  },
  methods: {
    sybilAttack() {
      for (let i = 0; i < 8; i++) {
        this.reviews.push({
          id: \`user_\${Math.random().toString(36).substr(2, 5)}\`,
          feedback: 'Great product!'
        });
      }
    }
  }
};
</script>`;

const Example = () =>{

const ReactCode = ()=>{
 return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
    <div align="center" className="mtop5p"><h5 className="blog-head"><b>React JS Example: Fake Voter Simulation in a DAO</b></h5></div>
    <div className="mtop5p"><Highlight content={SA_EXAMPLE_REACT} lang="javascript" /></div>
    <div className="mtop5p"><i>This demonstrates how a malicious user might inject 10 fake wallets to sway voting outcomes.</i></div>
 </div>);
};

const AngularCode = ()=>{
 return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
    <div align="center" className="mtop5p"><h5 className="blog-head"><b>Angular Example: Airdrop Claim with Fake Wallets</b></h5></div>
    <div className="mtop5p"><Highlight content={SA_EXAMPLE_ANGULAR_COMPONENT} lang="javascript" /></div>
    <div align="center" className="mtop5p"><b>airdrop.component.ts</b></div>
    <div className="mtop15p"><Highlight content={SA_EXAMPLE_ANGULAR_HTML} lang="html" /></div>
    <div align="center" className="mtop5p"><b>airdrop.component.html</b></div>
    <div className="mtop5p"><i>Fake wallets can be spun up to exploit reward-based mechanisms in token distribution.</i></div>
 </div>);
};

const VueCode = ()=>{
 return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
    <div align="center" className="mtop5p"><b>Vue JS Example: Reputation System Exploit</b></div>
    <div className="mtop5p"><Highlight content={SA_EXAMPLE_VUE} lang="html" /></div>
    <div className="mtop5p"><i>This Vue app simulates a fake reputation buildup by generating multiple user feedbacks.</i></div>
 </div>);
};

 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Sybil Attack Examples with Frontend Frameworks</b></h2></div>
    <div className="mtop15p">To make this more practical, let’s explore how Sybil attacks might be simulated or visualized 
      in different frontend applications (React, Angular, Vue). These examples assume the attacker is trying to manipulate 
      some sort of decentralized reputation or voting system.</div>
    <div className="mtop15p">
        <Tab menulinks={[{ id:"react", label:"React", url:"#", component:(<ReactCode />) },
            { id:"angular", label:"Angular", url:"#", component:(<AngularCode />) },
            { id:"vue", label:"Vue", url:"#", component:(<VueCode />) }]} />
    </div>
 </div>);
};

export default Example;