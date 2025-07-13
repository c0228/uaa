import React from "react";
import { Highlight } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const WEB3_DEVELOPER_CODE = `// In React
if (window.ethereum) {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  // Interact with smart contracts
}`;

const Example = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p"><h2 className="blog-head"><b>Examples of Web 3 Browsers</b></h2></div>
   <div className="mtop15p"><h4 className="blog-head"><b>Brave Browser</b></h4></div>
   <div className="mtop15p">
      <div>One of the most well-known Web 3 browsers. Brave offers:</div>
      <div>
         <ul>
            <li className="mtop5p">Built-in Brave Wallet</li>
            <li className="mtop5p">BAT rewards for viewing privacy-respecting ads</li>
            <li className="mtop5p">Native support for dApps</li>
            <li className="mtop5p">IPFS protocol access</li>
         </ul>
      </div>
   </div>
   <div className="mtop15p"><h4 className="blog-head"><b>MetaMask (Browser Extension)</b></h4></div>
   <div className="mtop15p">While not a full browser, MetaMask is a Web 3 wallet and gateway that integrates with 
   Chrome, Firefox, and Brave, allowing these browsers to access the Ethereum blockchain and interact with dApps.</div>
   <div className="mtop15p"><h4 className="blog-head"><b>Opera Crypto Browser</b></h4></div>
   <div className="mtop15p">
      <div>Opera’s dedicated crypto browser offers:</div>
      <div>
         <ul>
            <li className="mtop5p">Built-in multi-wallet support (Ethereum, BNB Chain, Polygon)</li>
            <li className="mtop5p">dApp explorer</li>
            <li className="mtop5p">Crypto news feed</li>
            <li className="mtop5p">Protection against Web 3 phishing attacks</li>
         </ul>
      </div>
   </div>
   <div className="mtop15p"><h4 className="blog-head"><b>Opera Crypto Browser</b></h4></div>
   <div className="mtop15p">Status is a mobile-first Web 3 browser, messenger, and crypto wallet. It is completely 
   open-source and offers encrypted messaging and access to Ethereum dApps.</div>
   <div className="mtop15p"><h4 className="blog-head"><b>Beaker Browser</b></h4></div>
   <div className="mtop15p">Focused on peer-to-peer applications and content, Beaker supports the <b>Dat protocol</b>, 
   allowing users to host and browse websites without servers.</div>

   <div className="mtop15p"><h2 className="blog-head"><b>How Web 3 Browsers Differ from Traditional Browsers?</b></h2></div>
   <div className="mtop15p">
      <SimpleTable header={["Feature","Traditional Browsers","Web 3 Browsers"]} 
            columns={[
                  [(<div><b>Data Control</b></div>),"Centralized (by websites)","User-owned (wallets, DID)"],
                  [(<div><b>Authentication</b></div>),"Username/Password","Wallet-based or DID"],
                  [(<div><b>Interoperability</b></div>),"HTTP/HTTPS","Blockchain protocols (Ethereum, IPFS, etc.)"],
                  [(<div><b>Ad Model</b></div>),"Data-tracking based","Privacy-respecting with optional rewards"],
                  [(<div><b>App Support</b></div>),"Centralized web apps","Decentralized applications (dApps)"],
               ]} />
   </div>

   <div className="mtop15p"><h2 className="blog-head"><b>Developer Notes</b></h2></div>
   <div className="mtop15p">If you're building Web 3 apps, ensure your dApp frontend can detect browser-based 
   wallets (e.g., MetaMask) using libraries like:</div>
   <div className="mtop15p">
      <Highlight content={WEB3_DEVELOPER_CODE} lang="javascript" />
   </div>
   <div className="mtop15p">Angular and Vue developers can also leverage Web3.js or Ethers.js to build 
   blockchain-enabled frontends that detect and interact with Web 3 browsers.</div>
 </div>);
};

export default Example;