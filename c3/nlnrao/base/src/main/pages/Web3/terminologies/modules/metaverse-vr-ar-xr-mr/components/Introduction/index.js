import React from "react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p"><i>As Web 3.0 unfolds into a decentralized, immersive, and intelligent internet, new terminologies 
   are reshaping how we interact with digital environments. Among them, <b>Metaverse</b> and its extended 
   realities — <b>VR</b>, <b>AR</b>, ,<b>XR</b> and <b>MR</b> — are leading the transformation of how humans experience the 
   web. If you're building decentralized apps, NFTs, or blockchain-based environments, understanding these immersive techs 
   is crucial.</i></div>
   
   <div className="mtop15p"><h2 className="blog-head"><b>Introduction: What Are VR, AR, XR, and MR in the Metaverse?</b></h2></div>
   <div className="mtop15p">The <b>Metaverse</b> refers to an evolving 3D digital universe made possible by interconnected 
   virtual worlds. It's a persistent space where people can socialize, work, trade, and play — all enhanced 
   with <b>immersive technologies</b>.</div>
   <div className="mtop15p">Let’s break down these key terminologies:</div>
   <div className="mtop15p">
      <SimpleTable header={["Term", "Full Form", "Description"]} 
        columns={[
            [(<div><b>VR</b></div>),"Virtual Reality","Fully immersive digital experience with no real-world input. Users wear headsets (e.g., Oculus Rift)."],
            [(<div><b>AR</b></div>),"Augmented Reality","Real-world environment enhanced with digital overlays (e.g., Pokémon GO)."],
            [(<div><b>MR</b></div>),"Mixed Reality","Combines real and virtual worlds that interact in real-time (e.g., HoloLens)."],
            [(<div><b>XR</b></div>),"Extended Reality","Umbrella term that includes VR, AR, and MR."]
          ]} />
   </div>
   <div className="mtop15p">These technologies form the backbone of the <b>Metaverse</b>, where blockchain, NFTs, and smart contracts 
   meet immersive 3D experiences.</div>

   <div className="mtop15p"><h2 className="blog-head"><b>Real-World Examples of Metaverse Integration</b></h2></div>
   <div className="mtop15p">
      <SimpleTable header={["Technology","Use Case"]} 
        columns={[
            [(<div><b>VR</b></div>),"Virtual events, VR gaming, decentralized social spaces"],
            [(<div><b>AR</b></div>),"AR filters in decentralized apps, NFT previews in the real world"],
            [(<div><b>MR</b></div>),"Blockchain-enabled collaboration tools (e.g., virtual architecture design)"],
            [(<div><b>XR</b></div>),"Web3 education, immersive token launches, DAO governance in 3D"]
          ]} />
   </div>
 </div>);
};

export default Introduction;