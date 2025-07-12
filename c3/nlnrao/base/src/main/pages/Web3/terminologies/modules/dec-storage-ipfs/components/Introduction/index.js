import React from "react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p"><i>From static HTML pages of <b>Web 1.0</b>, to interactive platforms and social media 
   of <b>Web 2.0</b>, the internet has drastically evolved. However, <b>Web 2.0</b> centralized control of data in the hands 
   of a few tech giants. <b>Web 3.0</b> seeks to flip this model by 
   offering <b>user ownership</b>, <b>decentralized control</b> and <b>censorship-resistant platforms</b>.</i></div>
   <div className="mtop15p"><i>At the heart of this decentralization lies <b>Decentralized Storage</b> — and the most 
   prominent among them is <b>IPFS (InterPlanetary File System)</b>.</i></div>
   
   <div className="mtop15p"><h2 className="blog-head"><b>Introduction: What is Decentralized Storage and IPFS?</b></h2></div>
   <div className="mtop15p"><b>Decentralized Storage</b> enables the storage and retrieval of data across a peer-to-peer 
   network instead of centralized servers like AWS, Azure, or Google Cloud.</div>

   <div className="mtop15p"><h2 className="blog-head"><b>What is InterPlanetary File System (IPFS)?</b></h2></div>
   <div className="mtop15p">
      <b>IPFS (InterPlanetary File System)</b> is a <b>peer-to-peer hypermedia protocol</b> designed to make the 
      web <b>faster</b>, <b>safer</b>, and <b>more open</b>. Instead of using location-based 
      addressing (<code><b>https://example.com/image.jpg</b></code>), IPFS uses <b>content-based addressing</b> — each 
      file has a unique hash (CID) representing its contents.
   </div>
   <div className="mtop15p">
      <div>When you upload a file to IPFS:</div>
      <div>
         <ul>
            <li className="mtop5p">It is split into smaller chunks.</li>
            <li className="mtop5p">Each chunk is given a cryptographic hash.</li>
            <li className="mtop5p">The file is retrievable via its unique content ID (CID), regardless of which node hosts it.</li>
         </ul>
      </div>
   </div>
 </div>);
};

export default Introduction;