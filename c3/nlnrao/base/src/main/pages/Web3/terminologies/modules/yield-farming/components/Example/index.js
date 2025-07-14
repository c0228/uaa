import React from "react";
import { Tab, Highlight } from "e-ui-react";

const YE_EXAMPLE_REACT = `// React: YieldInfo.jsx
import React, { useState, useEffect } from 'react';

function YieldInfo() {
  const [yieldRate, setYieldRate] = useState(null);

  useEffect(() => {
    fetch("https://api.defiprotocol.com/yield/farming")
      .then(res => res.json())
      .then(data => setYieldRate(data.apy));
  }, []);

  return (
    <div className="yield-card">
      <h2>Current APY</h2>
      {yieldRate ? (
        <p>{yieldRate}%</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default YieldInfo;`;

const YE_EXAMPLE_ANGULAR_COMPONENT = `// Angular: yield.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-yield',
  templateUrl: './yield.component.html'
})
export class YieldComponent implements OnInit {
  apy: number | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>('https://api.defiprotocol.com/yield/farming')
      .subscribe(data => this.apy = data.apy);
  }
}`;

const YE_EXAMPLE_ANGULAR_HTML = `<!-- Angular: yield.component.html -->
<div class="yield-container">
  <h2>Yield Farming APY</h2>
  <p *ngIf="apy !== null">{{ apy }}%</p>
  <p *ngIf="apy === null">Loading...</p>
</div>`;

const YE_EXAMPLE_VUE = `<!-- Vue: YieldFarming.vue -->
<template>
  <div class="yield-box">
    <h2>Farming APY</h2>
    <p v-if="apy !== null">{{ apy }}%</p>
    <p v-else>Loading...</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      apy: null
    };
  },
  mounted() {
    fetch("https://api.defiprotocol.com/yield/farming")
      .then(response => response.json())
      .then(data => this.apy = data.apy);
  }
};
</script>`;

const Example = () =>{

const ReactCode = ()=>{
 return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
    <div className="mtop5p"><Highlight content={YE_EXAMPLE_REACT} lang="javascript" /></div>
    <div align="center" className="mtop5p"><b>YieldInfo.jsx</b></div>
    <div className="mtop15p"><i>This component fetches the APY from a hypothetical DeFi protocol and displays it.</i></div>
 </div>);
};

const AngularCode = ()=>{
 return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
    <div align="center" className="mtop5p"><h5 className="blog-head"><b></b></h5></div>
    <div className="mtop5p"><Highlight content={YE_EXAMPLE_ANGULAR_COMPONENT} lang="javascript" /></div>
    <div align="center" className="mtop5p"><b>yield.component.ts</b></div>
    <div className="mtop15p"><Highlight content={YE_EXAMPLE_ANGULAR_HTML} lang="javascript" /></div>
    <div align="center" className="mtop5p"><b>yield.component.html</b></div>
    <div className="mtop15p"><i>This Angular component and template display yield rates dynamically.</i></div>
 </div>);
};

const VueCode = ()=>{
 return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
    <div className="mtop5p"><Highlight content={YE_EXAMPLE_VUE} lang="html" /></div>
    <div align="center" className="mtop5p"><i>YieldFarming.vue</i></div>
    <div className="mtop15p"><i>This Vue component shows the current yield farming APY retrieved from a DeFi API.</i></div>
 </div>);
};

 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Practical Examples in Front-End Frameworks</b></h2></div>
    <div className="mtop15p">Let’s see how you might implement a <b>Yield Farming Dashboard</b> using popular Web 
    frameworks: React, Angular, and Vue.</div>
    <div className="mtop15p">
        <Tab menulinks={[{ id:"react", label:"React", url:"#", component:(<ReactCode />) },
            { id:"angular", label:"Angular", url:"#", component:(<AngularCode />) },
            { id:"vue", label:"Vue", url:"#", component:(<VueCode />) }]} />
    </div>
 </div>);
};

export default Example;