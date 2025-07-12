import React from "react";
import { Tab, Highlight } from "e-ui-react";

const MAAS_EXAMPLE_REACT = `import React, { useEffect } from 'react';
import { Maas } from '@maas/sdk';

const MetaverseRoom = () => {
  useEffect(() => {
    Maas.init({
      apiKey: 'your-api-key',
      roomId: 'demo-room',
    });
  }, []);

  return (
    <div>
      <h2>Welcome to Your Metaverse Room</h2>
      <div id="maas-container" style={{ height: '500px' }}></div>
    </div>
  );
};

export default MetaverseRoom;`;

const MAAS_EXAMPLE_ANGULAR_COMPONENT = `// metaverse.component.ts
import { Component, OnInit } from '@angular/core';
declare const Maas: any;

@Component({
  selector: 'app-metaverse',
  templateUrl: './metaverse.component.html',
})
export class MetaverseComponent implements OnInit {
  ngOnInit(): void {
    Maas.init({
      apiKey: 'your-api-key',
      roomId: 'demo-room',
    });
  }
}`;

const MAAS_EXAMPLE_ANGULAR_HTML = `<!-- metaverse.component.html -->
<h2>Welcome to Your Metaverse Room</h2>
<div id="maas-container" style="height: 500px;"></div>`;

const MAAS_EXAMPLE_VUE = `<template>
  <div>
    <h2>Welcome to Your Metaverse Room</h2>
    <div id="maas-container" style="height: 500px;"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    const Maas = require('@maas/sdk');
    Maas.init({
      apiKey: 'your-api-key',
      roomId: 'demo-room',
    });
  },
};
</script>`;

const Example = () =>{

   const ReactCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={MAAS_EXAMPLE_REACT} lang="javascript" />
      </div>);
   };

   const AngularCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
         <div className="mtop5p"><Highlight content={MAAS_EXAMPLE_ANGULAR_COMPONENT} lang="javascript" /></div>
         <div align="center" className="mtop5p"><b>metaverse.component.ts</b></div>
         <div className="mtop15p"><Highlight content={MAAS_EXAMPLE_ANGULAR_HTML} lang="html" /></div>
         <div align="center" className="mtop5p"><b>metaverse.component.html</b></div>
      </div>);
   };

   const VueCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={MAAS_EXAMPLE_VUE} lang="javascript" />
      </div>);
   };

 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Code Examples</b></h2></div>
    <div className="mtop15p">Let’s explore how you can integrate a simple MaaS-powered component (e.g., joining 
      a virtual world room) using <b>React</b>, <b>Angular</b>, and <b>Vue</b>. We'll assume the use of a 
      fictional MaaS SDK called <code><b>@maas/sdk</b></code>.</div>
    <div className="mtop15p">
      <Tab menulinks={[{ id:"react", label:"React", url:"#", component:(<ReactCode />) },
            { id:"angular", label:"Angular", url:"#", component:(<AngularCode />) },
            { id:"vue", label:"Vue", url:"#", component:(<VueCode />) }]} />
    </div>
 </div>);
};

export default Example;