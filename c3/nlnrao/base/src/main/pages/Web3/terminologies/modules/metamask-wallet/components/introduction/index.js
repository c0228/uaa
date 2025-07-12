import React from "react";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><i>In the decentralized world of Web 3.0, where <b>users own their data</b>, 
    <b>transactions happen without intermediaries</b>, and <b>applications run on the blockchain</b>, the <b>gateway to interaction</b> is 
    the wallet. And one name dominates this space: <b>MetaMask</b>.</i></div>
    
    <div className="mtop15p"><h2 className="blog-head"><b>Introduction to MetaMask Wallet</b></h2></div>
    <div className="mtop15p"><b>MetaMask</b> is a <b>cryptocurrency wallet</b> and <b>gateway to blockchain apps</b>, primarily 
    functioning as a browser extension or a mobile app. It allows users 
    to <b>store and manage private keys</b>, <b>interact with Ethereum-based decentralized applications (dApps)</b>, and <b>sign transactions securely</b>.</div>
    <div className="mtop15p"><h5 className="blog-head"><b>Key features of MetaMask:</b></h5></div>
    <div className="mtop15p">
        <ul>
            <li>Acts as a <b>bridge between web browsers and the Ethereum blockchain</b>.</li>
            <li className="mtop5p">Supports <b>Ethereum (ETH)</b> and <b>ERC-20 tokens</b></li>
            <li className="mtop5p">Provides <b>account management</b> and <b>secure key vault</b></li>
            <li className="mtop5p">Offers a simple <b>UI to connect to dApps</b></li>
            <li className="mtop5p">Enables <b>network switching</b> (e.g., Ethereum Mainnet, Polygon, Binance Smart Chain, etc.)</li>
        </ul>
    </div>
    <div className="mtop15p">MetaMask doesn’t just store tokens — it <b>empowers users to interact with Web3</b>.</div>

    <div className="mtop15p"><h2 className="blog-head"><b>How MetaMask Works with Frontend Frameworks?</b></h2></div>
    <div className="mtop15p">When building a Web3 dApp using <b>React</b>, <b>Angular</b> or <b>Vue</b>, MetaMask acts as 
    the <b>entry point</b> to connect wallets, fetch accounts, and sign blockchain transactions.</div>
    <div className="mtop15p">Below are <b>code examples</b> demonstrating how 
    to <b>connect to MetaMask</b>, <b>fetch the user's Ethereum account</b> and <b>handle errors</b>.</div>
 </div>);
};

export default Introduction;