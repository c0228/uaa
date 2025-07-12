import React from "react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><i>In the traditional Web2 ecosystem, applications and data are centralized, often locked within 
    walled gardens. Web3 disrupts this by decentralizing control, data, and value using blockchain technology. However, one of 
    the biggest challenges in Web3 today is <i>interoperability</i> — the ability of different blockchain networks to talk to each 
    other. This is where <b>Cross-chain Technology</b> becomes crucial.</i></div>
    <div className="mtop15p"><h2 className="blog-head"><b>Introduction: What Is Cross-chain Technology?</b></h2></div>
    <div className="mtop15p"><b>Cross-chain technology</b> enables communication and value transfer between two or more separate 
    blockchain networks. Instead of being confined to a single ecosystem (like Ethereum, Solana, or Polkadot), developers and 
    users can operate across multiple chains seamlessly.</div>

    <div className="mtop15p"><h4 className="blog-head"><b>Why Is It Important?</b></h4></div>
    <div className="mtop15p">
        <ul>
            <li>Different chains serve different purposes: Ethereum for DeFi, Solana for speed, Polkadot for governance, etc.</li>
            <li className="mtop5p">Assets like NFTs, tokens, or smart contracts may need to interact across these ecosystems.</li>
            <li className="mtop5p">Cross-chain bridges or protocols make these interactions possible without relying on a 
            centralized exchange.</li>
        </ul>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>How Does Cross-chain Work?</b></h2></div>
    <div className="mtop15p">
        <div>There are several methods to enable cross-chain operations:</div>
        <div>
            <ol>
                <li className="mtop5p"><b>Bridges –</b> Smart contracts or protocols that lock assets on one chain and 
                mint equivalent on another.</li>
                <li className="mtop5p"><b>Atomic Swaps –</b> Peer-to-peer exchange of tokens across chains without intermediaries.</li>
                <li className="mtop5p"><b>Relay Chains –</b> A central chain (like Polkadot) that connects and validates transactions across parachains.</li>
                <li className="mtop5p"><b>Wrapped Tokens –</b> A token from one blockchain that is represented (wrapped) on another chain 
                (e.g., WBTC on Ethereum for Bitcoin).</li>
            </ol>
        </div>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Real-World Examples</b></h2></div>
    <div className="mtop15p">
        <SimpleTable header={["Protocol","Use Case","Technology"]} 
                    columns={[
                        ["Polkadot","Relay chain for parachains","Shared security model"],
                        ["Cosmos","IBC Protocol for inter-chain data","Tendermint BFT Consensus"],
                        ["Avalanche","Subnet communication","Avalanche Consensus"],
                        ["Chainlink CCIP","Secure cross-chain messaging","Oracle-powered relays"],
                        ["Wormhole Bridge","Ethereum - Solana bridge","Wrapped asset mechanism"],
                    ]} />
    </div>
 </div>);
};

export default Introduction;