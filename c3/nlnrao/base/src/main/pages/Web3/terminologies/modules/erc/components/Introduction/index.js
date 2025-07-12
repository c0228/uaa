import React from "react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p"><i>As Web 3.0 gains traction, it introduces a slew of standards and protocols that shape 
   decentralized ecosystems. If you're exploring the Ethereum blockchain, you’ve likely come across terms 
   like <b>ERC-20</b>, <b>ERC-721</b>, or <b>ERC-1155</b>. These are not random numbers; they are proposals 
   known as <b>Ethereum Request for Comment (ERC)</b> that define how smart contracts should behave.</i></div>
   <div className="mtop15p">But what exactly is an ERC, and why is it central to the development of decentralized 
   apps (dApps)? Let’s dive in.</div>
   <div className="mtop15p"><h2 className="blog-head"><b>Introduction to ERC (Ethereum Request for Comment)</b></h2></div>
   <div className="mtop15p"><b>ERC</b> stands for <b>Ethereum Request for Comment</b>. It’s a formal proposal used to define 
   standards on the Ethereum blockchain. ERCs are submitted via <b>Ethereum Improvement Proposals (EIPs)</b> and reviewed by 
   the Ethereum community. Once approved, they act as <b>guidelines for developers</b> to ensure interoperability and 
   consistency across dApps and smart contracts.</div>
   <div className="mtop15p">
      <div>Popular ERC standards include:</div>
      <div>
         <ul>
            <li className="mtop5p"><b>ERC-20 –</b> Standard for fungible tokens (e.g., cryptocurrencies)</li>
            <li className="mtop5p"><b>ERC-721 –</b> Standard for non-fungible tokens (NFTs)</li>
            <li className="mtop5p"><b>ERC-1155 –</b> Standard for semi-fungible tokens (multi-token standard)</li>
         </ul>
      </div>
      <div className="mtop5p">These standards make it easy for wallets, marketplaces, and dApps to integrate and 
         interact with tokens or contracts without needing to reinvent the wheel.</div>
   </div>
 </div>);
};

export default Introduction;