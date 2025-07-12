import React from "react";
import { Tab, Highlight } from "e-ui-react";

const PPB_EXAMPLE_REACT = `import React, { useState } from 'react';

const BlockchainTypeInfo = () => {
  const [type, setType] = useState('public');

  const info = {
    public: "Public blockchains are open and decentralized. Examples: Ethereum, Bitcoin.",
    private: "Private blockchains are permissioned and centralized. Examples: Hyperledger, Corda."
  };

  return (
    <div>
      <h2>Blockchain Type Info</h2>
      <button onClick={() => setType('public')}>Public Blockchain</button>
      <button onClick={() => setType('private')}>Private Blockchain</button>
      <p>{info[type]}</p>
    </div>
  );
};

export default BlockchainTypeInfo;`;

const PPB_EXAMPLE_ANGULAR_COMPONENT = `// blockchain-info.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-blockchain-info',
  templateUrl: './blockchain-info.component.html'
})
export class BlockchainInfoComponent {
  selected = 'public';

  get info() {
    return this.selected === 'public'
      ? 'Public blockchains are open and decentralized. Examples: Ethereum, Bitcoin.'
      : 'Private blockchains are permissioned and centralized. Examples: Hyperledger, Corda.';
  }
}`;

const PPB_EXAMPLE_ANGULAR_HTML = `<!-- blockchain-info.component.html -->
<h2>Blockchain Type Info</h2>
<button (click)="selected='public'">Public Blockchain</button>
<button (click)="selected='private'">Private Blockchain</button>
<p>{{ info }}</p>`;

const PPB_EXAMPLE_VUE = `<template>
  <div>
    <h2>Blockchain Type Info</h2>
    <button @click="type = 'public'">Public Blockchain</button>
    <button @click="type = 'private'">Private Blockchain</button>
    <p>{{ info }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: 'public',
    };
  },
  computed: {
    info() {
      return this.type === 'public'
        ? 'Public blockchains are open and decentralized. Examples: Ethereum, Bitcoin.'
        : 'Private blockchains are permissioned and centralized. Examples: Hyperledger, Corda.';
    },
  },
};
</script>`;

const Example = () =>{

   const ReactCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={PPB_EXAMPLE_REACT} lang="javascript" />
      </div>);
   };

   const AngularCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={PPB_EXAMPLE_ANGULAR_COMPONENT} lang="javascript" />
      <div align="center" className="mtop5p"><b>blockchain-info.component.ts</b></div>
      <div className="mtop15p"><Highlight content={PPB_EXAMPLE_ANGULAR_HTML} lang="html" /></div>
      <div align="center" className="mtop5p"><b>blockchain-info.component.html</b></div>
      </div>);
   };

   const VueCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={PPB_EXAMPLE_VUE} lang="javascript" />
      </div>);
   };

 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Example Components: Accessing Blockchain Info (React, Angular, Vue)</b></h2></div>
    <div className="mtop15p">
      <Tab menulinks={[{ id:"react", label:"React", url:"#", component:(<ReactCode />) },
            { id:"angular", label:"Angular", url:"#", component:(<AngularCode />) },
            { id:"vue", label:"Vue", url:"#", component:(<VueCode />) }]} />
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>When to Use What?</b></h2></div>
    <div className="mtop15p">
      <ul>
         <li>
            <div>Use <b>Public Blockchains</b> when:</div>
            <div>
               <ul>
                  <li className="mtop5p">You want full decentralization and community trust.</li>
                  <li className="mtop5p">Transparency and immutability are critical.</li>
                  <li className="mtop5p">You're building DeFi, NFTs, DAOs.</li>
               </ul>
            </div>
         </li>
         <li className="mtop5p">
            <div>Use <b>Private Blockchains</b> when:</div>
            <div>
               <ul>
                  <li className="mtop5p">Your use case is internal to an organization.</li>
                  <li className="mtop5p">Data privacy and access control are necessary.</li>
                  <li className="mtop5p">Performance is prioritized over decentralization.</li>
               </ul>
            </div>
         </li>
      </ul>
    </div>
 </div>);
};

export default Example;