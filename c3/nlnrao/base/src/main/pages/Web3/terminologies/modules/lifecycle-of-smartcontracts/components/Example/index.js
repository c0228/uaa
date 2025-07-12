import React from "react";
import { Tab, Highlight } from "e-ui-react";

const LCSC_EXAMPLE_REACT = `import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import contractABI from './MyContractABI.json';

const CONTRACT_ADDRESS = '0xYourContractAddressHere';

function SmartContractInteractor() {
  const [message, setMessage] = useState('');
  const [provider, setProvider] = useState(null);
  const [contract, setContract] = useState(null);

  useEffect(() => {
    const init = async () => {
      const ethProvider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = ethProvider.getSigner();
      const contractInstance = new ethers.Contract(CONTRACT_ADDRESS, contractABI, signer);
      setProvider(ethProvider);
      setContract(contractInstance);
    };
    init();
  }, []);

  const handleClick = async () => {
    const tx = await contract.setMessage('Hello Web3!');
    await tx.wait();
    const newMsg = await contract.getMessage();
    setMessage(newMsg);
  };

  return (
    <div>
      <button onClick={handleClick}>Update Message</button>
      <p>Message: {message}</p>
    </div>
  );
}

export default SmartContractInteractor;`;

const LCSC_EXAMPLE_ANGULAR_SERVICE = `// smart-contract.service.ts
import { Injectable } from '@angular/core';
import Web3 from 'web3';
import abi from '../assets/MyContractABI.json';

@Injectable({ providedIn: 'root' })
export class SmartContractService {
  private web3: Web3;
  private contract: any;
  private contractAddress = '0xYourContractAddressHere';

  constructor() {
    this.web3 = new Web3(window.ethereum);
    this.contract = new this.web3.eth.Contract(abi as any, this.contractAddress);
  }

  async setMessage(message: string) {
    const accounts = await this.web3.eth.getAccounts();
    return this.contract.methods.setMessage(message).send({ from: accounts[0] });
  }

  async getMessage() {
    return this.contract.methods.getMessage().call();
  }
}`;

const LCSC_EXAMPLE_ANGULAR_HTML = `<!-- app.component.html -->
<button (click)="updateMessage()">Set Message</button>
<p>{{ message }}</p>`;

const LCSC_EXAMPLE_ANGULAR_COMPONENT = `// app.component.ts
import { Component } from '@angular/core';
import { SmartContractService } from './smart-contract.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  message = '';

  constructor(private contractService: SmartContractService) {}

  async updateMessage() {
    await this.contractService.setMessage('Hello Angular Web3!');
    this.message = await this.contractService.getMessage();
  }
}`;

const LCSC_EXAMPLE_VUE = `<template>
  <div>
    <button @click="updateMessage">Set Message</button>
    <p>Message: {{ message }}</p>
  </div>
</template>

<script>
import { ethers } from 'ethers';
import contractABI from './MyContractABI.json';

export default {
  data() {
    return {
      message: '',
      contract: null,
    };
  },
  async mounted() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    this.contract = new ethers.Contract('0xYourContractAddressHere', contractABI, signer);
  },
  methods: {
    async updateMessage() {
      const tx = await this.contract.setMessage('Hello from Vue!');
      await tx.wait();
      this.message = await this.contract.getMessage();
    }
  }
};
</script>`;

const Example = () =>{

   const ReactCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
         <div className="mtop5p"><b>Using <code>ethers.js</code>:</b></div>
         <div className="mtop5p"><Highlight content={LCSC_EXAMPLE_REACT} lang="javascript" /></div>
      </div>);
   };

   const AngularCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
         <div className="mtop5p"><b>Using <code>web3.js</code>:</b></div>
         <div className="mtop5p"><Highlight content={LCSC_EXAMPLE_ANGULAR_SERVICE} lang="javascript" /></div>
         <div align="center" className="mtop5p"><b>smart-contract.service.ts</b></div>
         <div className="mtop5p"><Highlight content={LCSC_EXAMPLE_ANGULAR_HTML} lang="javascript" /></div>
         <div align="center" className="mtop5p"><b>app.component.html</b></div>
         <div className="mtop5p"><Highlight content={LCSC_EXAMPLE_ANGULAR_COMPONENT} lang="javascript" /></div>
         <div align="center" className="mtop5p"><b>app.component.ts</b></div>
      </div>);
   };

   const VueCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
         <div className="mtop5p"><b>Using <code>ethers.js</code>:</b></div>
         <div className="mtop5p"><Highlight content={LCSC_EXAMPLE_VUE} lang="javascript" /></div>
      </div>);
   };

 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Examples: Integrating Smart Contract Lifecycle in Frontend Frameworks</b></h2></div>
    <div className="mtop15p">Let’s now look at how frontend apps can <b>interact</b> with deployed smart contracts using:</div>
    <div className="mtop15p">
      <Tab menulinks={[{ id:"react", label:"React", url:"#", component:(<ReactCode />) },
            { id:"angular", label:"Angular", url:"#", component:(<AngularCode />) },
            { id:"vue", label:"Vue", url:"#", component:(<VueCode />) }]} />
    </div>
 </div>);
};

export default Example;