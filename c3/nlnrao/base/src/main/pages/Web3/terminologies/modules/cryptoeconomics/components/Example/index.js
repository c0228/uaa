import React from "react";
import { Tab, Highlight } from "e-ui-react";

const CE_EXAMPLE_REACT = `import React, { useState } from 'react';

const CryptoEconomicVoting = () => {
  const [proposals, setProposals] = useState([
    { id: 1, text: 'Fund Community Project', votes: 0 },
    { id: 2, text: 'Upgrade Protocol', votes: 0 },
  ]);
  const [userTokens, setUserTokens] = useState(100); // Assume user owns 100 tokens
  const [voteAllocation, setVoteAllocation] = useState({});

  const handleVote = (id, tokens) => {
    if (tokens > userTokens || tokens <= 0) return alert("Invalid token count");

    setProposals(prev =>
      prev.map(p => (p.id === id ? { ...p, votes: p.votes + tokens } : p))
    );
    setUserTokens(prev => prev - tokens);
    setVoteAllocation(prev => ({ ...prev, [id]: (prev[id] || 0) + tokens }));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>🗳️ Crypto-Economic Voting</h2>
      <p>Available Tokens: {userTokens}</p>
      {proposals.map(p => (
        <div key={p.id} style={{ margin: '10px 0' }}>
          <strong>{p.text}</strong> — Votes: {p.votes}
          <br />
          <input
            type="number"
            placeholder="Tokens to vote"
            onChange={e => setVoteAllocation({ ...voteAllocation, [p.id]: Number(e.target.value) })}
            disabled={userTokens <= 0}
          />
          <button
            onClick={() => handleVote(p.id, voteAllocation[p.id] || 0)}
            disabled={userTokens <= 0}
          >
            Vote
          </button>
        </div>
      ))}
    </div>
  );
};

export default CryptoEconomicVoting;`;

const CE_EXAMPLE_ANGULAR_COMPONENT = `import { Component } from '@angular/core';

@Component({
  selector: 'app-crypto-economic-voting',
  templateUrl: './crypto-economic-voting.component.html',
  styleUrls: ['./crypto-economic-voting.component.css']
})
export class CryptoEconomicVotingComponent {
  proposals = [
    { id: 1, text: 'Fund Community Project', votes: 0 },
    { id: 2, text: 'Upgrade Protocol', votes: 0 }
  ];

  userTokens = 100;
  voteAllocation: { [key: number]: number } = {};

  handleVote(id: number, tokens: number): void {
    if (tokens > this.userTokens || tokens <= 0) {
      alert('Invalid token count');
      return;
    }

    this.proposals = this.proposals.map(p =>
      p.id === id ? { ...p, votes: p.votes + tokens } : p
    );

    this.userTokens -= tokens;
    this.voteAllocation[id] = (this.voteAllocation[id] || 0) + tokens;
  }
}`;

const CE_EXAMPLE_ANGULAR_HTML = `<div style="padding: 20px;">
  <h2>🗳️ Crypto-Economic Voting</h2>
  <p>Available Tokens: {{ userTokens }}</p>

  <div *ngFor="let p of proposals" style="margin: 10px 0;">
    <strong>{{ p.text }}</strong> — Votes: {{ p.votes }}
    <br />
    <input
      type="number"
      placeholder="Tokens to vote"
      [disabled]="userTokens <= 0"
      (input)="voteAllocation[p.id] = $any($event.target).value"
    />
    <button
      (click)="handleVote(p.id, +voteAllocation[p.id] || 0)"
      [disabled]="userTokens <= 0"
    >
      Vote
    </button>
  </div>
</div>`;

const CE_EXAMPLE_VUE = `<template>
  <div style="padding: 20px;">
    <h2>🗳️ Crypto-Economic Voting</h2>
    <p>Available Tokens: {{ userTokens }}</p>

    <div v-for="p in proposals" :key="p.id" style="margin: 10px 0;">
      <strong>{{ p.text }}</strong> — Votes: {{ p.votes }}
      <br />
      <input
        type="number"
        placeholder="Tokens to vote"
        :disabled="userTokens <= 0"
        @input="e => voteAllocation[p.id] = Number(e.target.value)"
      />
      <button
        @click="handleVote(p.id, voteAllocation[p.id] || 0)"
        :disabled="userTokens <= 0"
      >
        Vote
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

const proposals = ref([
  { id: 1, text: 'Fund Community Project', votes: 0 },
  { id: 2, text: 'Upgrade Protocol', votes: 0 }
]);

const userTokens = ref(100);
const voteAllocation = reactive({});

function handleVote(id, tokens) {
  if (tokens > userTokens.value || tokens <= 0) {
    alert("Invalid token count");
    return;
  }

  const index = proposals.value.findIndex(p => p.id === id);
  if (index !== -1) {
    proposals.value[index].votes += tokens;
  }

  userTokens.value -= tokens;
  voteAllocation[id] = (voteAllocation[id] || 0) + tokens;
}
</script>`;

const Example = () =>{

   const ReactCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
         <div align="center" className="mtop5p"><h5 className="blog-head"><b>Example: Crypto-Economic Voting DApp</b></h5></div>
         <div className="mtop5p">Below is a simplified React component representing a <b>token-weighted voting system</b> – a practical application of Crypto-Economics:</div>
         <div className="mtop5p"><Highlight content={CE_EXAMPLE_REACT} lang="javascript" /></div>
         <div className="mtop5p"><b>What This Represents:</b></div>
         <div>
            <ul>
               <li className="mtop5p">Each vote costs tokens, simulating a crypto-economic system.</li>
               <li className="mtop5p">Token holders are incentivized to vote wisely to influence governance.</li>
               <li className="mtop5p">This mirrors how DAOs or token-governed platforms function.</li>
            </ul>
         </div>
      </div>);
   };

   const AngularCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
         <div align="center" className="mtop5p"><h5 className="blog-head"><b>Example: Crypto-Economic Voting DApp</b></h5></div>
         <div className="mtop5p">Below is a simplified Angular component representing a <b>token-weighted voting system</b> – a practical application of Crypto-Economics:</div>
         <div className="mtop5p"><Highlight content={CE_EXAMPLE_ANGULAR_COMPONENT} lang="javascript" /></div>
         <div align="center"><b>crypto-economic-voting.component.ts</b></div>
         <div className="mtop5p"><Highlight content={CE_EXAMPLE_ANGULAR_HTML} lang="javascript" /></div>
         <div align="center"><b>crypto-economic-voting.component.html</b></div>
      </div>);
   };

   const VueCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
         <div align="center" className="mtop5p"><h5 className="blog-head"><b>Example: Crypto-Economic Voting DApp</b></h5></div>
         <div className="mtop5p">Below is a simplified Vue component representing a <b>token-weighted voting system</b> – a practical application of Crypto-Economics:</div>
         <div className="mtop5p"><Highlight content={CE_EXAMPLE_VUE} lang="javascript" /></div>
         <div align="center"><b>CryptoEconomicVoting.vue</b></div>
      </div>);
   };

 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Real-World Examples</b></h2></div>
    <div className="mtop15p">
      <ol>
         <li>
            <div><h4 className="blog-head"><b>Bitcoin Mining</b></h4></div>
            <div>
               <ul>
                  <li className="mtop5p">Miners solve cryptographic puzzles to validate transactions.</li>
                  <li className="mtop5p">In return, they receive Bitcoin as a reward.</li>
                  <li className="mtop5p">Incentive = Reward &#8594; Honest behavior is economically beneficial.</li>
               </ul>
            </div>
         </li>
         <li className="mtop15p">
            <div><h4 className="blog-head"><b>Ethereum Staking</b></h4></div>
            <div>
               <ul>
                  <li className="mtop5p">Validators lock ETH as a stake.</li>
                  <li className="mtop5p">They are rewarded for validating blocks and penalized (slashed) for malicious behavior.</li>
                  <li className="mtop5p">Incentive + Penalty = Honest Participation.</li>
               </ul>
            </div>
         </li>
         <li className="mtop15p">
            <div><h4 className="blog-head"><b>DAOs (Decentralized Autonomous Organizations)</b></h4></div>
            <div>
               <ul>
                  <li className="mtop5p">Members use tokens to vote on governance decisions.</li>
                  <li className="mtop5p">Token weight influences voting power.</li>
                  <li className="mtop5p">Token economics governs participation, reputation, and incentives.</li>
               </ul>
            </div>
         </li>
      </ol>
    </div>
    <div className="mtop15p"><h2 className="blog-head"><b>Examples</b></h2></div>
    <div className="mtop15p">
      <Tab menulinks={[{ id:"react", label:"React", url:"#", component:(<ReactCode />) },
            { id:"angular", label:"Angular", url:"#", component:(<AngularCode />) },
            { id:"vue", label:"Vue", url:"#", component:(<VueCode />) }]} />
    </div>
 </div>);
};

export default Example;