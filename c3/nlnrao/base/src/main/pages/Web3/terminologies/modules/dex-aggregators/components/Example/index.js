import React from "react";
import { Tab, Highlight } from "e-ui-react";

const DA_EXAMPLE_REACT = `import React, { useState } from 'react';

const DexAggregator = () => {
  const [quote, setQuote] = useState(null);

  const getQuote = async () => {
    const res = await fetch(
      'https://api.1inch.io/v5.0/1/quote?fromTokenAddress=0x...&toTokenAddress=0x...&amount=1000000000000000000'
    );
    const data = await res.json();
    setQuote(data);
  };

  return (
    <div>
      <h2>DEX Aggregator Quote</h2>
      <button onClick={getQuote}>Get Best Quote</button>
      {quote && (
        <div>
          <p>From Token: {quote.fromToken.symbol}</p>
          <p>To Token: {quote.toToken.symbol}</p>
          <p>To Amount: {quote.toTokenAmount}</p>
        </div>
      )}
    </div>
  );
};

export default DexAggregator;`;

const DA_EXAMPLE_ANGULAR = `// dex-aggregator.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dex-aggregator',
  templateUrl: './dex-aggregator.component.html'
})
export class DexAggregatorComponent {
  quote: any;

  constructor(private http: HttpClient) {}

  getQuote() {
    this.http.get('https://api.1inch.io/v5.0/1/quote?fromTokenAddress=0x...&toTokenAddress=0x...&amount=1000000000000000000')
      .subscribe((data: any) => this.quote = data);
  }
}`;

const DA_EXAMPLE_VUE = `<template>
  <div>
    <h2>DEX Aggregator Quote</h2>
    <button @click="getQuote">Get Best Quote</button>
    <div v-if="quote">
      <p>From Token: {{ quote.fromToken.symbol }}</p>
      <p>To Token: {{ quote.toToken.symbol }}</p>
      <p>To Amount: {{ quote.toTokenAmount }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quote: null
    };
  },
  methods: {
    async getQuote() {
      const res = await fetch(
        'https://api.1inch.io/v5.0/1/quote?fromTokenAddress=0x...&toTokenAddress=0x...&amount=1000000000000000000'
      );
      this.quote = await res.json();
    }
  }
};
</script>`;

const Example = () =>{

   const ReactCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={DA_EXAMPLE_REACT} lang="javascript" />
      </div>);
   };

   const AngularCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={DA_EXAMPLE_ANGULAR} lang="javascript" />
      </div>);
   };

   const VueCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={DA_EXAMPLE_VUE} lang="javascript" />
      </div>);
   };

 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Examples</b></h2></div>
    <div className="mtop15p">Here’s a <b>Simple UI implementation</b> to fetch and display swap quotes using a 
    hypothetical DEX aggregator API (can be adapted to real ones like 1inch or Paraswap):</div>
    <div className="mtop15p">
      <Tab menulinks={[{ id:"react", label:"React", url:"#", component:(<ReactCode />) },
            { id:"angular", label:"Angular", url:"#", component:(<AngularCode />) },
            { id:"vue", label:"Vue", url:"#", component:(<VueCode />) }]} />
    </div>
 </div>);
};

export default Example;