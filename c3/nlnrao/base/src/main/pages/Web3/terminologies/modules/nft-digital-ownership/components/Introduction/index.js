import React from "react";
import { Card } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p"><i>The digital world is evolving rapidly, transitioning from the centralized Web 2.0 into a 
      decentralized and user-controlled ecosystem known as <b>Web 3.0</b>. One of the most powerful innovations driving this change 
      is the concept of <b>NFTs (Non-Fungible Tokens)</b>. Whether it's digital art, music, game assets, or virtual real estate — NFTs 
      are redefining what it means to <b>own something on the internet</b>.</i></div>
   <div className="mtop15p"><h2 className="blog-head"><b>Introduction to NFTs and Digital Ownership</b></h2></div>
   <div className="mtop15p">
      <Card padding={15} backgroundColor="#eee">
         <div><h4 className="blog-head"><b>What are NFTs?</b></h4></div>
         <div className="mtop5p">NFTs, or Non-Fungible Tokens, are <b>unique cryptographic assets</b> stored on 
         a <b>blockchain</b>. Unlike cryptocurrencies like Bitcoin or Ether (which are fungible, i.e., each unit is the same), 
         NFTs are unique and <b>cannot be exchanged one-to-one</b>.</div>
      </Card>
   </div>
   <div className="mtop15p"><h4 className="blog-head"><b>Why Digital Ownership Matters in Web 3.0?</b></h4></div>
   <div className="mtop15p">Web 3.0 puts control into the hands of users. Digital ownership through NFTs allows creators and 
   consumers to <b>own</b>, <b>trade</b>, or <b>monetize digital assets</b> directly—without intermediaries.</div>
   
   <div className="mtop15p"><h5 className="blog-head"><b>Examples of Digital Ownership:</b></h5></div>
   <div className="mtop15p">
      <ul>
         <li>A digital artist can sell a unique painting as an NFT.</li>
         <li className="mtop5p">A gamer can own in-game items as NFTs and trade them across platforms.</li>
         <li className="mtop5p">A user can buy virtual land in the Metaverse and have full rights over it.</li>
      </ul>
   </div>

   <div className="mtop15p"><h4 className="blog-head"><b>How It Works?</b></h4></div>
   <div className="mtop15p">
      <ul>
         <li>NFTs are <b>minted</b> on blockchains like Ethereum, Polygon, or Solana.</li>
         <li className="mtop5p">The token carries <b>metadata and a unique ID</b>.</li>
         <li className="mtop5p">Ownership is <b>immutable and traceable</b> on the blockchain ledger.</li>
      </ul>
   </div>
 </div>);
};

export default Introduction;