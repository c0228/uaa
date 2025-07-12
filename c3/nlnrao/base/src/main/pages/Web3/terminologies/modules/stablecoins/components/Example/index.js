import React from "react";
import { Tab, Highlight } from "e-ui-react";

const SC_EXAMPLE_REACT = `import React from 'react';

const stablecoins = [
  { name: 'USDC', type: 'Fiat-backed', peg: 'USD', price: 1.00 },
  { name: 'DAI', type: 'Crypto-backed', peg: 'USD', price: 1.01 },
  { name: 'FRAX', type: 'Algorithmic', peg: 'USD', price: 0.98 }
];

export default function StablecoinList() {
  return (
    <div>
      <h2>Stablecoin Tracker</h2>
      <ul>
        {stablecoins.map((coin, idx) => (
          <li key={idx}>
            <strong>{coin.name}</strong> - {coin.type} - Pegged to {coin.peg} - Price: \${coin.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}`;

const SC_EXAMPLE_ANGULAR_COMPONENT = `// stablecoin.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-stablecoin',
  templateUrl: './stablecoin.component.html',
})
export class StablecoinComponent {
  stablecoins = [
    { name: 'USDC', type: 'Fiat-backed', peg: 'USD', price: 1.00 },
    { name: 'DAI', type: 'Crypto-backed', peg: 'USD', price: 1.01 },
    { name: 'FRAX', type: 'Algorithmic', peg: 'USD', price: 0.98 }
  ];
}`;

const SC_EXAMPLE_ANGULAR_HTML = `<!-- stablecoin.component.html -->
<h2>Stablecoin Tracker</h2>
<ul>
  <li *ngFor="let coin of stablecoins">
    <strong>{{ coin.name }}</strong> - {{ coin.type }} - Pegged to {{ coin.peg }} - Price: \${{ coin.price.toFixed(2) }}
  </li>
</ul>`;

const SC_EXAMPLE_VUE = `<template>
  <div>
    <h2>Stablecoin Tracker</h2>
    <ul>
      <li v-for="coin in stablecoins" :key="coin.name">
        <strong>{{ coin.name }}</strong> - {{ coin.type }} - Pegged to {{ coin.peg }} - Price: \${{ coin.price.toFixed(2) }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'StablecoinList',
  data() {
    return {
      stablecoins: [
        { name: 'USDC', type: 'Fiat-backed', peg: 'USD', price: 1.00 },
        { name: 'DAI', type: 'Crypto-backed', peg: 'USD', price: 1.01 },
        { name: 'FRAX', type: 'Algorithmic', peg: 'USD', price: 0.98 }
      ]
    };
  }
};
</script>`;

const Example = () =>{

   const ReactCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={SC_EXAMPLE_REACT} lang="javascript" />
      </div>);
   };

   const AngularCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={SC_EXAMPLE_ANGULAR_COMPONENT} lang="javascript" />
      <div align="center" className="mtop5p"><b>stablecoin.component.ts</b></div>
      <div className="mtop15p"><Highlight content={SC_EXAMPLE_ANGULAR_HTML} lang="javascript" /></div>
      <div align="center" className="mtop5p"><b>stablecoin.component.html</b></div>
      </div>);
   };

   const VueCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={SC_EXAMPLE_VUE} lang="javascript" />
      </div>);
   };

 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Code Examples</b></h2></div>
    <div className="mtop15p">Let's create a simple <b>Stablecoin Tracker UI</b> in <b>React</b>, <b>Angular</b> and <b>Vue</b>, where 
    users can track price, peg, and algorithmic status.</div>
    <div className="mtop15p">
      <Tab menulinks={[{ id:"react", label:"React", url:"#", component:(<ReactCode />) },
            { id:"angular", label:"Angular", url:"#", component:(<AngularCode />) },
            { id:"vue", label:"Vue", url:"#", component:(<VueCode />) }]} />
    </div>
 </div>);
};

export default Example;