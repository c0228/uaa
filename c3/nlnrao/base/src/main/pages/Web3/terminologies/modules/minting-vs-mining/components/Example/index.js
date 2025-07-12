import React from "react";
import { Tab, Highlight, Card } from "e-ui-react";

const MM_EXAMPLE_REACT = `import React, { useState } from 'react';

const MintVsMine = () => {
  const [mode, setMode] = useState('mint');

  const handleAction = () => {
    alert(mode === 'mint' ? 'Minting token...' : 'Mining block...');
  };

  return (
    <div>
      <h2>Minting vs Mining</h2>
      <button onClick={() => setMode('mint')}>Mint Mode</button>
      <button onClick={() => setMode('mine')}>Mine Mode</button>
      <p>Current Mode: <strong>{mode}</strong></p>
      <button onClick={handleAction}>
        {mode === 'mint' ? 'Mint Token' : 'Mine Block'}
      </button>
    </div>
  );
};

export default MintVsMine;`;

const MM_EXAMPLE_ANGULAR_COMPONENT = `// mint-vs-mine.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-mint-vs-mine',
  templateUrl: './mint-vs-mine.component.html',
})
export class MintVsMineComponent {
  mode: 'mint' | 'mine' = 'mint';

  setMode(newMode: 'mint' | 'mine') {
    this.mode = newMode;
  }

  handleAction() {
    alert(this.mode === 'mint' ? 'Minting token...' : 'Mining block...');
  }
}`;

const MM_EXAMPLE_ANGULAR_HTML = `<!-- mint-vs-mine.component.html -->
<h2>Minting vs Mining</h2>
<button (click)="setMode('mint')">Mint Mode</button>
<button (click)="setMode('mine')">Mine Mode</button>
<p>Current Mode: <strong>{{ mode }}</strong></p>
<button (click)="handleAction()">
  {{ mode === 'mint' ? 'Mint Token' : 'Mine Block' }}
</button>`;

const MM_EXAMPLE_VUE = `<template>
  <div>
    <h2>Minting vs Mining</h2>
    <button @click="mode = 'mint'">Mint Mode</button>
    <button @click="mode = 'mine'">Mine Mode</button>
    <p>Current Mode: <strong>{{ mode }}</strong></p>
    <button @click="handleAction">
      {{ mode === 'mint' ? 'Mint Token' : 'Mine Block' }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mode: 'mint',
    };
  },
  methods: {
    handleAction() {
      alert(this.mode === 'mint' ? 'Minting token...' : 'Mining block...');
    },
  },
};
</script>`;

const Example = () =>{

   const ReactCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={MM_EXAMPLE_REACT} lang="javascript" />
      </div>);
   };

   const AngularCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <div className="mtop5p"><Highlight content={MM_EXAMPLE_ANGULAR_COMPONENT} lang="javascript" /></div>
      <div align="center" className="mtop5p"><b>mint-vs-mine.component.ts</b></div>
      <div className="mtop5p"><Highlight content={MM_EXAMPLE_ANGULAR_HTML} lang="html" /></div>
      <div align="center" className="mtop5p"><b>mint-vs-mine.component.html</b></div>
      </div>);
   };

   const VueCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={MM_EXAMPLE_VUE} lang="javascript" />
      </div>);
   };

 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Examples: Component View of Minting vs Mining</b></h2></div>
    <div className="mtop15p">
      <Card padding={15} backgroundColor="#eee">
         <div><h4 className="blog-head"><b>Use Case:</b></h4></div>
         <div className="mtop5p">Display a toggle between <i>“<u>Mint Token</u>”</i> and <i>“<u>Mine Block</u>”</i> modes 
         with user action buttons.</div>
      </Card>
    </div>
    <div className="mtop15p">
      <Tab menulinks={[{ id:"react", label:"React", url:"#", component:(<ReactCode />) },
            { id:"angular", label:"Angular", url:"#", component:(<AngularCode />) },
            { id:"vue", label:"Vue", url:"#", component:(<VueCode />) }]} />
    </div>
 </div>);
};

export default Example;