import React from "react";
import { Tab, Highlight } from "e-ui-react";

const ONCHAIN_EXAMPLE_REACT = `// OnChainDataComponent.jsx
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import contractABI from './MyContract.json';

const OnChainDataComponent = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    async function fetchData() {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract('0xYourContract', contractABI, provider);
      const result = await contract.getData(); // On-chain call
      setData(result);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h3>On-Chain Data</h3>
      <p>{data}</p>
    </div>
  );
};

export default OnChainDataComponent;`;

const OFFCHAIN_EXAMPLE_REACT = `// OffChainDataComponent.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';

const OffChainDataComponent = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://api.example.com/offchain-data');
      setData(response.data.message);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h3>Off-Chain Data</h3>
      <p>{data}</p>
    </div>
  );
};

export default OffChainDataComponent;`;

const ONCHAIN_EXAMPLE_ANGULAR_COMPONENT = `// onchain-data.component.ts
import { Component, OnInit } from '@angular/core';
import { ethers } from 'ethers';
import contractABI from './MyContract.json';

@Component({
  selector: 'app-onchain-data',
  template: \`<h3>On-Chain Data</h3><p>{{ data }}</p>\`
})
export class OnchainDataComponent implements OnInit {
  data = '';

  async ngOnInit() {
    const provider = new ethers.providers.Web3Provider((window as any).ethereum);
    const contract = new ethers.Contract('0xYourContract', contractABI, provider);
    this.data = await contract.getData(); // On-chain
  }
}`;

const OFFCHAIN_EXAMPLE_ANGULAR_COMPONENT = `// offchain-data.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-offchain-data',
  template: \`<h3>Off-Chain Data</h3><p>{{ data }}</p>\`
})
export class OffchainDataComponent implements OnInit {
  data = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('https://api.example.com/offchain-data')
      .subscribe(res => this.data = res.message);
  }
}`;

const ONCHAIN_EXAMPLE_VUE = `<!-- OnChainData.vue -->
<template>
  <div>
    <h3>On-Chain Data</h3>
    <p>{{ data }}</p>
  </div>
</template>

<script>
import { ethers } from 'ethers';
import contractABI from './MyContract.json';

export default {
  data() {
    return { data: '' };
  },
  async mounted() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract('0xYourContract', contractABI, provider);
    this.data = await contract.getData(); // On-chain
  }
};
</script>`;

const OFFCHAIN_EXAMPLE_VUE = `<!-- OffChainData.vue -->
<template>
  <div>
    <h3>Off-Chain Data</h3>
    <p>{{ data }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return { data: '' };
  },
  async mounted() {
    const response = await axios.get('https://api.example.com/offchain-data');
    this.data = response.data.message;
  }
};
</script>`;

const Example = () =>{

const ReactCode = ()=>{
 return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
   <div className="mtop5p"><Highlight content={ONCHAIN_EXAMPLE_REACT} lang="javascript" /></div>
   <div align="center" className="mtop5p"><b>OnChainDataComponent.jsx</b></div>
   <div className="mtop15p"><Highlight content={OFFCHAIN_EXAMPLE_REACT} lang="javascript" /></div>
   <div align="center" className="mtop5p"><b>OffChainDataComponent.jsx</b></div>
 </div>);
};

const AngularCode = ()=>{
 return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
    <div className="mtop5p"><Highlight content={ONCHAIN_EXAMPLE_ANGULAR_COMPONENT} lang="javascript" /></div>
    <div align="center" className="mtop5p"><b>onchain-data.component.ts</b></div>
    <div className="mtop15p"><Highlight content={OFFCHAIN_EXAMPLE_ANGULAR_COMPONENT} lang="javascript" /></div>
    <div align="center" className="mtop5p"><b>offchain-data.component.ts</b></div>
 </div>);
};

const VueCode = ()=>{
 return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
    <div className="mtop5p"><Highlight content={ONCHAIN_EXAMPLE_VUE} lang="html" /></div>
    <div align="center" className="mtop5p"><b>OnChainData.vue</b></div>
    <div className="mtop15p"><Highlight content={OFFCHAIN_EXAMPLE_VUE} lang="html" /></div>
    <div align="center" className="mtop5p"><b>OffChainData.vue</b></div>
 </div>);
};

 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Examples in Code</b></h2></div>
    <div className="mtop15p">Let’s see how you can handle <b>On-Chain vs Off-Chain data</b> using simple components 
    in <b>React JS</b>, <b>Angular</b> and <b>Vue JS</b>.</div>
    <div className="mtop15p">
        <Tab menulinks={[{ id:"react", label:"React", url:"#", component:(<ReactCode />) },
            { id:"angular", label:"Angular", url:"#", component:(<AngularCode />) },
            { id:"vue", label:"Vue", url:"#", component:(<VueCode />) }]} />
    </div>
 </div>);
};

export default Example;