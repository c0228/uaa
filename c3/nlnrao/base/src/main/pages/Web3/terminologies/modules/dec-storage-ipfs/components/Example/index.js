import React from "react";
import { Tab, Highlight } from "e-ui-react";

const IPFS_EXAMPLE_REACT = `// IPFSUpload.jsx
import React, { useState } from 'react';
import { create } from 'ipfs-http-client';

const client = create('https://ipfs.infura.io:5001');

const IPFSUpload = () => {
  const [fileUrl, setFileUrl] = useState('');

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    try {
      const added = await client.add(file);
      setFileUrl(\`https://ipfs.io/ipfs/\${added.path}\`);
    } catch (error) {
      console.error('Upload error:', error);
    }
  };

  return (
    <div>
      <h2>Upload to IPFS</h2>
      <input type="file" onChange={handleFileChange} />
      {fileUrl && <p>IPFS URL: <a href={fileUrl}>{fileUrl}</a></p>}
    </div>
  );
};

export default IPFSUpload;`;

const IPFS_EXAMPLE_ANGULAR = `// ipfs-upload.component.ts
import { Component } from '@angular/core';
import { create } from 'ipfs-http-client';

const client = create({ url: 'https://ipfs.infura.io:5001' });

@Component({
  selector: 'app-ipfs-upload',
  template: \`
    <h2>Upload to IPFS</h2>
    <input type="file" (change)="onFileSelected($event)" />
    <p *ngIf="fileUrl">IPFS URL: <a [href]="fileUrl" target="_blank">{{ fileUrl }}</a></p>
  \`
})
export class IpfsUploadComponent {
  fileUrl = '';

  async onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return;

    const file = input.files[0];
    try {
      const added = await client.add(file);
      this.fileUrl = \`https://ipfs.io/ipfs/\${added.path}\`;
    } catch (error) {
      console.error('Upload error:', error);
    }
  }
}`;

const IPFS_EXAMPLE_VUE = `<!-- IPFSUpload.vue -->
<template>
  <div>
    <h2>Upload to IPFS</h2>
    <input type="file" @change="onFileChange" />
    <p v-if="fileUrl">IPFS URL: <a :href="fileUrl" target="_blank">{{ fileUrl }}</a></p>
  </div>
</template>

<script>
import { create } from 'ipfs-http-client';

const client = create('https://ipfs.infura.io:5001');

export default {
  data() {
    return {
      fileUrl: ''
    };
  },
  methods: {
    async onFileChange(e) {
      const file = e.target.files[0];
      try {
        const added = await client.add(file);
        this.fileUrl = \`https://ipfs.io/ipfs/\${added.path}\`;
      } catch (err) {
        console.error('Upload error:', err);
      }
    }
  }
};
</script>`;

const Example = () =>{

   const ReactCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={IPFS_EXAMPLE_REACT} lang="javascript" />
      </div>);
   };

   const AngularCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={IPFS_EXAMPLE_ANGULAR} lang="javascript" />
      </div>);
   };

   const VueCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={IPFS_EXAMPLE_VUE} lang="javascript" />
      </div>);
   };

 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Practical Examples: Uploading to IPFS in React, Angular, and Vue</b></h2></div>
    <div className="mtop15p">We’ll use the <code><b>ipfs-http-client</b></code> library for all examples below. First, install it using:</div>
    <div className="mtop15p">
      <Highlight content={`npm install ipfs-http-client`} lang="python" />
    </div>
    <div className="mtop15p">
      <Tab menulinks={[{ id:"react", label:"React", url:"#", component:(<ReactCode />) },
            { id:"angular", label:"Angular", url:"#", component:(<AngularCode />) },
            { id:"vue", label:"Vue", url:"#", component:(<VueCode />) }]} />
    </div>
 </div>);
};

export default Example;