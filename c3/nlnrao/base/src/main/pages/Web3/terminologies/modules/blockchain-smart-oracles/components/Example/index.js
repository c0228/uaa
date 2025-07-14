import React from "react";
import { Tab, Highlight } from "e-ui-react";

const BSO_EXAMPLE_REACT = `// OracleDataFetcher.jsx
import React, { useState } from 'react';
import axios from 'axios';

const OracleDataFetcher = () => {
  const [weather, setWeather] = useState(null);

  const fetchData = async () => {
    const response = await axios.get("https://api.weatherapi.com/v1/current.json?key=YOUR_KEY&q=London");
    const temp = response.data.current.temp_c;
    setWeather(temp);

    // Simulate oracle sending data to smart contract
    console.log(\`Oracle pushing \${temp}°C to smart contract\`);
  };

  return (
    <div>
      <h2>Weather Oracle</h2>
      <button onClick={fetchData}>Fetch Temperature</button>
      {weather && <p>Temperature in London: {weather}°C</p>}
    </div>
  );
};

export default OracleDataFetcher;`;

const BSO_EXAMPLE_ANGULAR_SERVICE = `// oracle.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class OracleService {
  constructor(private http: HttpClient) {}
  getPriceData() {
    return this.http.get<any>('https://api.coindesk.com/v1/bpi/currentprice/BTC.json');
  }
}`;

const BSO_EXAMPLE_ANGULAR_COMPONENT = `// oracle.component.ts
import { Component } from '@angular/core';
import { OracleService } from './oracle.service';

@Component({
  selector: 'app-oracle',
  template: \`
    <h2>Bitcoin Oracle</h2>
    <button (click)="fetchPrice()">Get BTC Price</button>
    <p *ngIf="price">BTC Price: \${{ price }}</p>
  \`
})
export class OracleComponent {
  price: number | null = null;

  constructor(private oracleService: OracleService) {}

  fetchPrice() {
    this.oracleService.getPriceData().subscribe((data) => {
      this.price = data.bpi.USD.rate_float;
      console.log(\`Oracle pushing $\${this.price} to smart contract\`);
    });
  }
}`;

const BSO_EXAMPLE_VUE = `<template>
  <div>
    <h2>Stock Oracle</h2>
    <button @click="fetchStock">Get AAPL Price</button>
    <p v-if="price">AAPL: \${{ price }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      price: null
    };
  },
  methods: {
    async fetchStock() {
      const res = await axios.get('https://finnhub.io/api/v1/quote?symbol=AAPL&token=YOUR_TOKEN');
      this.price = res.data.c;
      console.log(\`Oracle pushing AAPL price $\${this.price} to smart contract\`);
    }
  }
};
</script>`;

const Example = () =>{

const ReactCode = ()=>{
 return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
    <div align="center" className="mtop5p"><h5 className="blog-head"><b>React JS – Smart Oracle Component</b></h5></div>
    <div className="mtop5p"><Highlight content={BSO_EXAMPLE_REACT} lang="javascript" /></div>
    <div align="center" className="mtop5p"><b>OracleDataFetcher.jsx</b></div>
 </div>);
};

const AngularCode = ()=>{
 return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
    <div align="center" className="mtop5p"><h5 className="blog-head"><b>Angular – Smart Oracle Service + Component</b></h5></div>
    <div className="mtop5p"><Highlight content={BSO_EXAMPLE_ANGULAR_SERVICE} lang="javascript" /></div>
    <div align="center" className="mtop5p"><b>oracle.service.ts</b></div>
    <div className="mtop15p"><Highlight content={BSO_EXAMPLE_ANGULAR_COMPONENT} lang="javascript" /></div>
    <div align="center" className="mtop5p"><b>oracle.component.ts</b></div>
 </div>);
};

const VueCode = ()=>{
 return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
    <div align="center" className="mtop5p"><b>Vue – Smart Oracle Integration</b></div>
    <div className="mtop5p"><Highlight content={BSO_EXAMPLE_VUE} lang="javascript" /></div>
 </div>);
};

 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Implementation Examples</b></h2></div>
    <div className="mtop15p">Here are simplified component examples in <b>React JS</b>, <b>Angular</b>, and <b>Vue</b> that simulate fetching off-chain data through an oracle and sending it to a smart contract.</div>
    <div className="mtop15p">
        <Tab menulinks={[{ id:"react", label:"React", url:"#", component:(<ReactCode />) },
            { id:"angular", label:"Angular", url:"#", component:(<AngularCode />) },
            { id:"vue", label:"Vue", url:"#", component:(<VueCode />) }]} />
    </div>
 </div>);
};

export default Example;