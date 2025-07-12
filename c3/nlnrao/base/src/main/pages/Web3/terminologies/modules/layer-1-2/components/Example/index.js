import React from "react";
import { Tab, Highlight } from "e-ui-react";

const L12_EXAMPLE_REACT = `import React, { useState, useEffect } from 'react';

const NetworkLayerStatus = () => {
  const [network, setNetwork] = useState("Ethereum Mainnet");

  const suggestLayer2 = () => {
    if (network === "Ethereum Mainnet") {
      return "Consider switching to Polygon or Arbitrum for lower gas fees.";
    }
    return "You are on a Layer 2 solution!";
  };

  return (
    <div style={{ padding: 20, fontFamily: 'Arial' }}>
      <h2>Current Network: {network}</h2>
      <p>{suggestLayer2()}</p>
      <button onClick={() => setNetwork("Polygon")}>Switch to Polygon</button>
      <button onClick={() => setNetwork("Ethereum Mainnet")}>Switch to Ethereum</button>
    </div>
  );
};

export default NetworkLayerStatus;`;

const L12_EXAMPLE_ANGULAR_COMPONENT = `import { Component } from '@angular/core';

@Component({
  selector: 'app-network-layer-status',
  templateUrl: './network-layer-status.component.html'
})
export class NetworkLayerStatusComponent {
  network = 'Ethereum Mainnet';
  suggestion = this.getSuggestion();

  switchNetwork(newNetwork: string) {
    this.network = newNetwork;
    this.suggestion = this.getSuggestion();
  }

  getSuggestion(): string {
    return this.network === 'Ethereum Mainnet'
      ? 'Consider switching to Polygon or Arbitrum for lower gas fees.'
      : 'You are on a Layer 2 solution!';
  }
}`;

const L12_EXAMPLE_ANGULAR_HTML = `<div style="padding: 20px;">
  <h2>Current Network: {{ network }}</h2>
  <p>{{ suggestion }}</p>
  <button (click)="switchNetwork('Polygon')">Switch to Polygon</button>
  <button (click)="switchNetwork('Ethereum Mainnet')">Switch to Ethereum</button>
</div>`;

const L12_EXAMPLE_VUE = `<template>
  <div style="padding: 20px;">
    <h2>Current Network: {{ network }}</h2>
    <p>{{ suggestion }}</p>
    <button @click="switchNetwork('Polygon')">Switch to Polygon</button>
    <button @click="switchNetwork('Ethereum Mainnet')">Switch to Ethereum</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      network: 'Ethereum Mainnet',
    };
  },
  computed: {
    suggestion() {
      return this.network === 'Ethereum Mainnet'
        ? 'Consider switching to Polygon or Arbitrum for lower gas fees.'
        : 'You are on a Layer 2 solution!';
    },
  },
  methods: {
    switchNetwork(newNetwork) {
      this.network = newNetwork;
    },
  },
};
</script>`;

const Example = () =>{

   const ReactCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <div className="mtop5p"><Highlight content={L12_EXAMPLE_REACT} lang="javascript" /></div>
      <div align="center" className="mtop5p"><b>NetworkLayerStatus.js</b></div>
      </div>);
   };

   const AngularCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <div className="mtop5p"><Highlight content={L12_EXAMPLE_ANGULAR_COMPONENT} lang="javascript" /></div>
      <div align="center" className="mtop5p"><b>network-layer-status.component.ts</b></div>
      <div className="mtop5p"><Highlight content={L12_EXAMPLE_ANGULAR_HTML} lang="html" /></div>
      <div align="center" className="mtop5p"><b>network-layer-status.component.html</b></div>
      </div>);
   };

   const VueCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <div className="mtop5p"><Highlight content={L12_EXAMPLE_VUE} lang="javascript" /></div>
      <div align="center" className="mtop5p"><b>NetworkLayerStatus.vue</b></div>
      </div>);
   };

 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Examples: Interactive Components in React, Angular, and Vue</b></h2></div>
    <div className="mtop15p">Let’s implement a simple Web3 component showing <b>connected network layer</b> and suggestions 
    to switch to Layer 2 for better speed/cost.</div>
    <div className="mtop15p">
      <Tab menulinks={[{ id:"react", label:"React", url:"#", component:(<ReactCode />) },
            { id:"angular", label:"Angular", url:"#", component:(<AngularCode />) },
            { id:"vue", label:"Vue", url:"#", component:(<VueCode />) }]} />
    </div>
 </div>);
};

export default Example;