import React from "react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p"><i>
      As we navigate deeper into the world of <b>Web 3.0</b>, the decentralized internet is no longer a distant vision — it's 
      a fast-evolving reality. At the heart of this revolution lies a concept called the <b>Smart Contract</b > — a self-executing 
      piece of code that governs trustless agreements between parties on blockchain networks.
   </i></div>
   <div className="mtop15p"><i>While many developers jump straight into writing Solidity code, understanding 
      the <b>lifecycle of a smart contract</b> — from development to deployment to interaction and upgradeability — 
      is <b>crucial</b> for building secure and effective decentralized applications (dApps).</i></div>
   <div className="mtop15p"><h2 className="blog-head"><b>Introduction: What Is the Lifecycle of a Smart Contract?</b></h2></div>
   <div className="mtop15p">A <b>Smart Contract Lifecycle</b> refers to the <b>entire journey</b> of a smart contract, from the 
   moment it's conceptualized and developed to its deployment on a blockchain and subsequent interactions or upgrades. Here 
   are the primary stages:</div>
   <div className="mtop15p">
      <ol>
         <li>
            <div><h4 className="blog-head"><b>Design & Planning</b></h4></div>
            <div>
               <ul>
                  <li className="mtop5p">Define the business logic.</li>
                  <li className="mtop5p">Draft requirements (who, what, conditions, outcomes).</li>
                  <li className="mtop5p">Security considerations from the start.</li>
               </ul>
            </div>
         </li>
         <li className="mtop15p">
            <div><h4 className="blog-head"><b>Development</b></h4></div>
            <div>
               <ul>
                  <li className="mtop5p">Written in languages like <b>Solidity (Ethereum)</b>, <b>Rust (Solana)</b>, etc.</li>
                  <li className="mtop5p">Tools like <b>Remix</b>, <b>Hardhat</b>, or <b>Truffle</b> used.</li>
                  <li className="mtop5p">Unit testing is essential at this stage.</li>
               </ul>
            </div>
         </li>
         <li className="mtop15p">
            <div><h4 className="blog-head"><b>Testing</b></h4></div>
            <div>
               <ul>
                  <li className="mtop5p">Deploy to <b>local</b>, <b>testnets</b> (Rinkeby, Mumbai), or <b>in-memory</b> blockchains.</li>
                  <li className="mtop5p">Run unit, integration, and security tests.</li>
               </ul>
            </div>
         </li>
         <li className="mtop15p">
            <div><h4 className="blog-head"><b>Deployment</b></h4></div>
            <div>
               <ul>
                  <li className="mtop5p">Publish to a blockchain (Ethereum, BNB Chain, etc.).</li>
                  <li className="mtop5p">Generate a <b>contract address</b> and <b>ABI (Application Binary Interface)</b>.</li>
               </ul>
            </div>
         </li>
         <li className="mtop15p">
            <div><h4 className="blog-head"><b>Interaction</b></h4></div>
            <div>
               <ul>
                  <li className="mtop5p">Users interact via dApps using Web3 libraries (Web3.js, Ethers.js).</li>
                  <li className="mtop5p">Use of wallet integrations like <b>MetaMask</b>.</li>
               </ul>
            </div>
         </li>
         <li className="mtop15p">
            <div><h4 className="blog-head"><b>Upgradeability (Optional)</b></h4></div>
            <div>
               <ul>
                  <li className="mtop5p">Smart contracts are immutable by default.</li>
                  <li className="mtop5p">Patterns like <b>Proxy Contracts</b> help introduce upgrade logic.</li>
               </ul>
            </div>
         </li>
         <li className="mtop15p">
            <div><h4 className="blog-head"><b>Deactivation (Optional)</b></h4></div>
            <div>
               <ul>
                  <li className="mtop5p">Some contracts may have a <b>self-destruct</b> function.</li>
                  <li className="mtop5p">Others may be made inoperable via access control.</li>
               </ul>
            </div>
         </li>
      </ol>
   </div>
 </div>);
};

export default Introduction;