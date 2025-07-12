import React from "react";
import { Tab, Highlight } from "e-ui-react";

const IDO_EXAMPLE_REACT = `// IDOForm.jsx
import React, { useState } from 'react';

const IDOForm = () => {
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(\`You have contributed \${amount} ETH to the IDO.\`);
    // In real world, interact with smart contract via ethers.js or web3.js
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Participate in EcoFi IDO</h2>
      <input
        type="number"
        placeholder="Amount in ETH"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <button type="submit">Contribute</button>
    </form>
  );
};

export default IDOForm;`;

const IDO_EXAMPLE_ANGULAR_COMPONENT = `// ido-form.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-ido-form',
  templateUrl: './ido-form.component.html',
})
export class IDOFormComponent {
  amount: number = 0;

  contribute() {
    alert(\`You have contributed \${this.amount} ETH to the IDO.\`);
    // Integrate with ethers.js or web3.js
  }
}`;

const IDO_EXAMPLE_ANGULAR_HTML = `<!-- ido-form.component.html -->
<h2>Participate in EcoFi IDO</h2>
<input type="number" [(ngModel)]="amount" placeholder="Amount in ETH" required />
<button (click)="contribute()">Contribute</button>`;

const IDO_EXAMPLE_VUE = `<!-- IDOForm.vue -->
<template>
  <div>
    <h2>Participate in EcoFi IDO</h2>
    <input v-model="amount" type="number" placeholder="Amount in ETH" required />
    <button @click="contribute">Contribute</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      amount: '',
    };
  },
  methods: {
    contribute() {
      alert(\`You have contributed \${this.amount} ETH to the IDO.\`);
      // Use ethers.js or web3.js here
    },
  },
};
</script>`;

const Example = () =>{

   const ReactCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
         <div className="mtop5p"><h5 className="blog-head"><b>ReactJS Component: IDO Participation Form</b></h5></div>
         <div className="mtop5p"></div><Highlight content={IDO_EXAMPLE_REACT} lang="javascript" />
      </div>);
   };

   const AngularCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
         <div className="mtop5p"><h5 className="blog-head"><b>Angular Component: IDO Participation Form</b></h5></div>
         <div className="mtop5p"><Highlight content={IDO_EXAMPLE_ANGULAR_COMPONENT} lang="javascript" /></div>
         <div align="center" className="mtop5p"><b>ido-form.component.ts</b></div>
         <div className="mtop5p"><Highlight content={IDO_EXAMPLE_ANGULAR_HTML} lang="javascript" /></div>
         <div align="center" className="mtop5p"><b>ido-form.component.html</b></div>
      </div>);
   };

   const VueCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
         <div className="mtop5p"><h5 className="blog-head"><b>Vue Component: IDO Participation Form</b></h5></div>
         <div className="mtop5p"><Highlight content={IDO_EXAMPLE_VUE} lang="javascript" /></div>
      </div>);
   };

 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Example Use Case</b></h2></div>
    <div className="mtop15p">
      <div>Let’s assume a project called <b>EcoFi</b> wants to raise funds. They launch their token 
      via <b>Uniswap</b> or <b>PancakeSwap</b> using an IDO smart contract. Investors purchase the tokens directly 
      from the DEX on launch day, benefiting from:</div>
      <div>
         <ul>
            <li className="mtop5p">Instant liquidity</li>
            <li className="mtop5p">Trustless trading</li>
            <li className="mtop5p">No intermediaries</li>
         </ul>
      </div>
      <div>Now, let’s build simple UI components that 
         simulate <b>IDO Participation Forms</b> in <b>React</b>, <b>Angular</b> and <b>VueJS</b>.</div>
    </div>
    <div className="mtop15p">
      <Tab menulinks={[{ id:"react", label:"React", url:"#", component:(<ReactCode />) },
            { id:"angular", label:"Angular", url:"#", component:(<AngularCode />) },
            { id:"vue", label:"Vue", url:"#", component:(<VueCode />) }]} />
    </div>
 </div>);
};

export default Example;