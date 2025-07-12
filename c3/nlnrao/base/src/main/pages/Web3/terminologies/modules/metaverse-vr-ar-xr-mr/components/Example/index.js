import React from "react";
import { Tab, Highlight } from "e-ui-react";

const MVAXM_EXAMPLE_REACT = `import React from "react";

const VRModelViewer = () => {
  return (
    <model-viewer
      src="https://model-url.glb"
      ar
      ar-modes="webxr scene-viewer quick-look"
      environment-image="neutral"
      auto-rotate
      camera-controls
      style={{ width: "100%", height: "500px" }}
    >
    </model-viewer>
  );
};

export default VRModelViewer;`;

const MVAXM_EXAMPLE_ANGULAR_COMPONENT = `import { Component } from '@angular/core';

@Component({
  selector: 'app-vr-model-viewer',
  templateUrl: './vr-model-viewer.component.html',
  styleUrls: ['./vr-model-viewer.component.css']
})
export class VRModelViewerComponent {}`;

const MVAXM_EXAMPLE_ANGULAR_HTML = `<model-viewer
  src="https://model-url.glb"
  ar
  ar-modes="webxr scene-viewer quick-look"
  environment-image="neutral"
  auto-rotate
  camera-controls
  style="width: 100%; height: 500px;">
</model-viewer>`;

const MVAXM_EXAMPLE_VUE = `<template>
  <model-viewer
    src="https://model-url.glb"
    ar
    ar-modes="webxr scene-viewer quick-look"
    environment-image="neutral"
    auto-rotate
    camera-controls
    style="width: 100%; height: 500px;">
  </model-viewer>
</template>

<script>
export default {
  name: "VRModelViewer"
};
</script>`;

const Example = () =>{

   const ReactCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={MVAXM_EXAMPLE_REACT} lang="javascript" />
      <div align="center" className="mtop5p"><b>VRModelViewer.js</b></div>
      </div>);
   };

   const AngularCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={MVAXM_EXAMPLE_ANGULAR_COMPONENT} lang="javascript" />
      <div align="center" className="mtop5p"><b>VRModelViewer.component.js</b></div>
      <div className="mtop15p"><Highlight content={MVAXM_EXAMPLE_ANGULAR_HTML} lang="javascript" /></div>
      <div align="center" className="mtop5p"><b>VRModelViewer.component.html</b></div>
      </div>);
   };

   const VueCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={MVAXM_EXAMPLE_VUE} lang="javascript" />
      <div align="center" className="mtop5p"><b>VRModelViewer.vue</b></div>
      </div>);
   };

 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Code Examples: Implementing AR/VR Components</b></h2></div>
    <div className="mtop15p">Let’s see basic <b>3D Model Viewers</b> (common in Metaverse apps) 
    using <b>React</b>, <b>Angular</b> and <b>Vue</b>:</div>
    <div className="mtop15p"><h5 className="blog-head"><b>Install (for 3D model rendering with AR support):</b></h5></div>
    <div className="mtop5p"><code><b>npm install @google/model-viewer</b></code></div>
    <div className="mtop15p">
      <Tab menulinks={[{ id:"react", label:"React", url:"#", component:(<ReactCode />) },
            { id:"angular", label:"Angular", url:"#", component:(<AngularCode />) },
            { id:"vue", label:"Vue", url:"#", component:(<VueCode />) }]} />
    </div>
    <div className="mtop15p">
       The <code><b>model-viewer</b></code> Web Component simplifies rendering GLB/GLTF models with AR support across frameworks.
    </div>
 </div>);
};

export default Example;