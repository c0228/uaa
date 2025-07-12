import React from "react";
import { Tab, Highlight } from "e-ui-react";

const NFTDO_EXAMPLE_REACT = `import React, { useEffect, useState } from 'react';

const NFTGallery = () => {
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    // Simulate NFT API response
    setNfts([
      { id: 1, title: 'Pixel Cat', owner: '0xAbc...', image: '/cat.png' },
      { id: 2, title: 'CryptoPunk 123', owner: '0xDef...', image: '/punk.png' }
    ]);
  }, []);

  return (
    <div>
      <h2>NFT Collection</h2>
      {nfts.map(nft => (
        <div key={nft.id} style={{ border: '1px solid #ccc', margin: '10px' }}>
          <img src={nft.image} alt={nft.title} width="100" />
          <h3>{nft.title}</h3>
          <p><strong>Owner:</strong> {nft.owner}</p>
        </div>
      ))}
    </div>
  );
};

export default NFTGallery;`;

const NFTDO_EXAMPLE_ANGULAR_COMPONENT = `// nft-gallery.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nft-gallery',
  templateUrl: './nft-gallery.component.html'
})
export class NftGalleryComponent implements OnInit {
  nfts = [];

  ngOnInit() {
    this.nfts = [
      { id: 1, title: 'Pixel Cat', owner: '0xAbc...', image: '/cat.png' },
      { id: 2, title: 'CryptoPunk 123', owner: '0xDef...', image: '/punk.png' }
    ];
  }
}`;

const NFTDO_EXAMPLE_ANGULAR_HTML = `<!-- nft-gallery.component.html -->
<h2>NFT Collection</h2>
<div *ngFor="let nft of nfts" style="border: 1px solid #ccc; margin: 10px;">
  <img [src]="nft.image" [alt]="nft.title" width="100" />
  <h3>{{ nft.title }}</h3>
  <p><strong>Owner:</strong> {{ nft.owner }}</p>
</div>`;

const NFTDO_EXAMPLE_VUE = `<template>
  <div>
    <h2>NFT Collection</h2>
    <div v-for="nft in nfts" :key="nft.id" style="border: 1px solid #ccc; margin: 10px;">
      <img :src="nft.image" :alt="nft.title" width="100" />
      <h3>{{ nft.title }}</h3>
      <p><strong>Owner:</strong> {{ nft.owner }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nfts: [
        { id: 1, title: 'Pixel Cat', owner: '0xAbc...', image: '/cat.png' },
        { id: 2, title: 'CryptoPunk 123', owner: '0xDef...', image: '/punk.png' }
      ]
    };
  }
};
</script>`;

const Example = () =>{

   const ReactCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
         <Highlight content={NFTDO_EXAMPLE_REACT} lang="javascript" />
         <div align="center" className="mtop5p"><b>NFTGallery.js</b></div>
      </div>);
   };

   const AngularCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={NFTDO_EXAMPLE_ANGULAR_COMPONENT} lang="javascript" />
      <div align="center" className="mtop5p"><b>nft-gallery.component.ts</b></div>
      <div className="mtop15p"><Highlight content={NFTDO_EXAMPLE_ANGULAR_HTML} lang="html" /></div>
      <div align="center" className="mtop5p"><b>nft-gallery.component.html</b></div>
      </div>);
   };

   const VueCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={NFTDO_EXAMPLE_VUE} lang="javascript" />
      <div align="center" className="mtop5p"><b>NFTGallery.vue</b></div>
      </div>);
   };

 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Code Examples of NFTs & Digital Ownership</b></h2></div>
    <div className="mtop15p">Let’s explore a simple UI to <b>display NFT assets</b> and <b>show ownership</b> across 
    frameworks.</div>
    <div className="mtop15p">
      <Tab menulinks={[{ id:"react", label:"React", url:"#", component:(<ReactCode />) },
            { id:"angular", label:"Angular", url:"#", component:(<AngularCode />) },
            { id:"vue", label:"Vue", url:"#", component:(<VueCode />) }]} />
    </div>
 </div>);
};

export default Example;