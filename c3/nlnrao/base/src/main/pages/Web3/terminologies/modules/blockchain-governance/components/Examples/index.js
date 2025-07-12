import React from "react";
import { Tab, Highlight } from "e-ui-react";

const BG_EXAMPLE_REACTJS = `import React, { useState } from 'react';

const GovernanceComponent = () => {
  const [proposals, setProposals] = useState(new Map());
  const [votes, setVotes] = useState(new Map());
  const [result, setResult] = useState(null);

  const createProposal = (id, description) => {
    setProposals(prev => new Map(prev).set(id, description));
    setVotes(prev => new Map(prev).set(id, []));
  };

  const vote = (id, user, weight) => {
    setVotes(prev => {
      const updatedVotes = new Map(prev);
      if (updatedVotes.has(id)) {
        const newVoteList = [...updatedVotes.get(id), { user, weight }];
        updatedVotes.set(id, newVoteList);
      }
      return updatedVotes;
    });
  };

  const tallyVotes = (id) => {
    const voteList = votes.get(id) || [];
    const total = voteList.reduce((sum, vote) => sum + vote.weight, 0);
    setResult(\`Total votes for "\${id}": \${total}\`);
  };

  // Example usage on button click
  const handleExample = () => {
    createProposal("upgrade-1", "Switch to PoS");
    vote("upgrade-1", "Alice", 10);
    vote("upgrade-1", "Bob", 5);
    tallyVotes("upgrade-1");
  };

  return (
    <div>
      <h2>Governance Simulation</h2>
      <button onClick={handleExample}>Run Example</button>
      {result && <p>{result}</p>}
    </div>
  );
};

export default GovernanceComponent;`;

const BG_EXAMPLE_ANGULAR_COMPONENT = `import { Component } from '@angular/core';

@Component({
  selector: 'app-governance',
  templateUrl: './governance.component.html'
})
export class GovernanceComponent {
  proposals = new Map<string, string>();
  votes = new Map<string, { user: string, weight: number }[]>();
  result: string | null = null;

  createProposal(id: string, description: string) {
    this.proposals.set(id, description);
    this.votes.set(id, []);
  }

  vote(id: string, user: string, weight: number) {
    if (this.votes.has(id)) {
      const voteList = this.votes.get(id)!;
      voteList.push({ user, weight });
      this.votes.set(id, voteList);
    }
  }

  tallyVotes(id: string) {
    const voteList = this.votes.get(id) || [];
    const total = voteList.reduce((sum, vote) => sum + vote.weight, 0);
    this.result = \`Total votes for "\${id}": \${total}\`;
  }

  handleExample() {
    this.createProposal("upgrade-1", "Switch to PoS");
    this.vote("upgrade-1", "Alice", 10);
    this.vote("upgrade-1", "Bob", 5);
    this.tallyVotes("upgrade-1");
  }
}`;

const BG_EXAMPLE_ANGULAR_HTML = `<div>
  <h2>Governance Simulation</h2>
  <button (click)="handleExample()">Run Example</button>
  <p *ngIf="result">{{ result }}</p>
</div>`;

const BG_EXAMPLE_VUE = `<template>
  <div>
    <h2>Governance Simulation</h2>
    <button @click="handleExample">Run Example</button>
    <p v-if="result">{{ result }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const proposals = ref(new Map());
const votes = ref(new Map());
const result = ref(null);

const createProposal = (id, description) => {
  proposals.value.set(id, description);
  votes.value.set(id, []);
};

const vote = (id, user, weight) => {
  if (votes.value.has(id)) {
    const voteList = [...votes.value.get(id), { user, weight }];
    votes.value.set(id, voteList);
  }
};

const tallyVotes = (id) => {
  const voteList = votes.value.get(id) || [];
  const total = voteList.reduce((sum, vote) => sum + vote.weight, 0);
  result.value = \`Total votes for "\${id}": \${total}\`;
};

const handleExample = () => {
  createProposal("upgrade-1", "Switch to PoS");
  vote("upgrade-1", "Alice", 10);
  vote("upgrade-1", "Bob", 5);
  tallyVotes("upgrade-1");
};
</script>`;

const Examples = () =>{

    const ReactCode = ()=>{
    return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
        <div align="center" className="mtop5p"><h5 className="blog-head"><b>Web3 Governance Model with Delegation</b></h5></div>
        <Highlight content={BG_EXAMPLE_REACTJS} lang="java" />
    </div>);
    };

    const AngularCode = ()=>{
    return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
        <div align="center" className="mtop5p"><h5 className="blog-head"><b>Web3 Governance with Delegation Concept</b></h5></div>
        <div className="mtop5p"><Highlight content={BG_EXAMPLE_ANGULAR_COMPONENT} lang="javascript" /></div>
        <div align="center" className="mtop5p"><b>governance.component.ts</b></div>
        <div className="mtop5p"><Highlight content={BG_EXAMPLE_ANGULAR_HTML} lang="html" /></div>
        <div align="center" className="mtop10p"><b>governance.component.html</b></div>
    </div>);
    };

    const VueCode = ()=>{
    return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
        <div align="center" className="mtop5p"><h5 className="blog-head"><b>Web3 Governance with Delegation Concept</b></h5></div>
        <Highlight content={BG_EXAMPLE_VUE} lang="html" />
        <div align="center" className="mtop5p"><b>GovernanceComponent.vue</b></div>
    </div>);
    };


 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Examples: Coding Governance Simulations</b></h2></div>
    <div className="mtop15p">
        <Tab menulinks={[{ id:"java", label:"React", url:"#", component:(<ReactCode />) },
            { id:"javascript", label:"Angular", url:"#", component:(<AngularCode />) },
            { id:"python", label:"Vue", url:"#", component:(<VueCode />) }]} />
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Real-World Examples</b></h2></div>
    <div className="mtop15p">
        <ul>
            <li>
                <div><b>Ethereum Governance (EIP system): </b></div>
                <div>Developers and the community review proposals off-chain, then adopt them via soft forks 
                    or client updates.</div>
            </li>
            <li>
                <div><b>MakerDAO:</b></div>
                <div>Uses MKR token holders to vote on parameters like interest rates and collateral types.</div>
            </li>
            <li>
                <div><b>Tezos:</b></div>
                <div>Implements <b>formal on-chain governance</b>, where every upgrade is voted on and self-executed.</div>
            </li>
        </ul>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Challenges in Blockchain Governance</b></h2></div>
    <div className="mtop15p">
        <ul>
            <li><b>Voter Apathy:</b> Many token holders don’t vote.</li>
            <li className="mtop5p"><b>Centralization of Voting Power:</b> Whales (large holders) dominate outcomes.</li>
            <li className="mtop5p"><b>Coordination Problems:</b> Community fragmentation and conflicts.</li>
            <li className="mtop5p"><b>Security Risks:</b> Malicious proposals can hijack funds or logic if passed unnoticed.</li>
        </ul>
    </div>
 </div>);
};

export default Examples;