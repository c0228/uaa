import React from "react";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><i>In traditional finance, real-world assets (RWAs) like real estate, invoices, or commodities are 
        hard to trade instantly or globally due to a lack of transparency, intermediaries, and regulatory overheads. Liquidity is 
        locked, transactions are slow, and access is exclusive to large institutions.</i></div>
    <div className="mtop15p"><i>With the evolution of <b>Web 3.0</b>, decentralization allows us to tokenize real-world assets and 
    make them available on-chain. But tokenizing is only half the challenge. <b>How do you enable liquidity?</b> That's 
    where <b>RWA Liquidity Infrastructure</b> comes in — enabling seamless trade, lending, or borrowing of tokenized assets on-chain.</i></div>
    <div className="mtop15p"><h2 className="blog-head"><b>Introduction to RWA Liquidity Infrastructure</b></h2></div>
    <div className="mtop15p"><b>RWA Liquidity Infrastructure</b> refers to the technical and protocol-level plumbing that enables 
    the integration, tokenization, verification, and liquidity provisioning of real-world assets in DeFi platforms.</div>
    <div className="mtop15p"><h4 className="blog-head"><b>Key Components:</b></h4></div>
    <div className="mtop15p">
        <ul>
            <li><b>Tokenization Layer:</b> Converts RWAs to on-chain tokens (ERC-20, ERC-721).</li>
            <li className="mtop5p"><b>Verification Oracles:</b> Validate the real-world ownership and legal rights.</li>
            <li className="mtop5p"><b>Liquidity Protocols:</b> Allow these tokens to be used in DEXs, Lending pools, etc.</li>
            <li className="mtop5p"><b>Compliance Modules:</b> Handle KYC/AML and regional laws for asset transfer.</li>
        </ul>
    </div>
 </div>);
};

export default Introduction;