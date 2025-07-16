import React from "react";
import { Tab, Highlight } from "e-ui-react";

const RWALI_EXAMPLE_REACT = `// RwaUpload.js
import React, { useState } from "react";

export default function RwaUpload() {
  const [invoice, setInvoice] = useState(null);

  const handleUpload = (e) => {
    setInvoice(e.target.files[0]);
  };

  const handleSubmit = () => {
    alert(\`Invoice \${invoice.name} submitted for tokenization!\`);
    // You'd connect to a smart contract/tokenization API here
  };

  return (
    <div className="p-4 border rounded-md max-w-sm">
      <h2 className="text-xl font-bold mb-2">Upload RWA Invoice</h2>
      <input type="file" onChange={handleUpload} />
      <button onClick={handleSubmit} className="bg-blue-500 text-white p-2 mt-2">
        Tokenize RWA
      </button>
    </div>
  );
}`;

const RWALI_EXAMPLE_ANGULAR_COMPONENT = `// rwa-upload.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-rwa-upload',
  templateUrl: './rwa-upload.component.html'
})
export class RwaUploadComponent {
  invoiceFile!: File;

  onFileChange(event: any) {
    this.invoiceFile = event.target.files[0];
  }

  tokenize() {
    alert(\`Invoice \${this.invoiceFile.name} submitted for tokenization!\`);
    // Connect with backend or smart contract logic
  }
}`;

const RWALI_EXAMPLE_ANGULAR_HTML = `<!-- rwa-upload.component.html -->
<div class="upload-box">
  <h2>Upload RWA Invoice</h2>
  <input type="file" (change)="onFileChange($event)" />
  <button (click)="tokenize()">Tokenize RWA</button>
</div>`;

const RWALI_EXAMPLE_VUE = `<template>
  <div class="upload-container">
    <h2>Upload RWA Invoice</h2>
    <input type="file" @change="handleUpload" />
    <button @click="tokenize">Tokenize RWA</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      invoice: null
    };
  },
  methods: {
    handleUpload(e) {
      this.invoice = e.target.files[0];
    },
    tokenize() {
      alert(\`Invoice \${this.invoice.name} submitted for tokenization!\`);
      // Integration point for smart contract or backend
    }
  }
};
</script>`;

const Example = () =>{

   const ReactCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={RWALI_EXAMPLE_REACT} lang="java" />
      <div align="center" className="mtop5p"><b>RwaUpload.js</b></div>
      </div>);
   };

   const AngularCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <div><Highlight content={RWALI_EXAMPLE_ANGULAR_COMPONENT} lang="javascript" /></div>
      <div className="mtop5p" align="center"><b>rwa-upload.component.ts</b></div>
      <div className="mtop15p"><Highlight content={RWALI_EXAMPLE_ANGULAR_HTML} lang="html" /></div>
      <div className="mtop5p" align="center"><b>rwa-upload.component.html</b></div>
      </div>);
   };

   const VueCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={RWALI_EXAMPLE_VUE} lang="python" />
      </div>);
   };

 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Example Use Case: Tokenizing Invoice Finance</b></h2></div>
    <div className="mtop15p">
      <div>Let’s assume a business wants to raise funds by tokenizing its invoices. The infrastructure enables:</div>
      <div>
         <ol>
            <li className="mtop5p">Upload of the invoice document.</li>
            <li className="mtop5p">Smart contract tokenization into a tradable asset.</li>
            <li className="mtop5p">Listing on a liquidity marketplace for investors.</li>
            <li className="mtop5p">Verification by oracles to ensure authenticity.</li>
         </ol>
      </div>
    </div>
    <div className="mtop15p">Now let’s build <b>mini components</b> to show how you could <b>interface this</b> 
    in a frontend app using <b>React</b>, <b>Angular</b>, and <b>Vue</b>.</div>
    <div className="mtop15p">
         <Tab menulinks={[{ id:"java", label:"Java", url:"#", component:(<ReactCode />) },
            { id:"javascript", label:"Javascript", url:"#", component:(<AngularCode />) },
            { id:"python", label:"Python", url:"#", component:(<VueCode />) }]} />
    </div>
 </div>);
};

export default Example;