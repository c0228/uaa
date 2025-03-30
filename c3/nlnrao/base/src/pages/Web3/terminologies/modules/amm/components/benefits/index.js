import React from "react";

const Benefits = () =>{
 return (<div className="mtop15p mbot15p fs16p lh28p">
    <div className="mtop15p"><h2 className="blog-head"><b>Benefits of AMMs</b></h2></div>
    <div className="mtop15p">
        <div>AMMs have introduced numerous advantages in DeFi, including:</div>
        <div>
            <ul>
                <li><b>Decentralization:</b> No intermediaries or central authority control.</li>
                <li><b>Permissionless Trading:</b> Anyone can swap assets without restrictions.</li>
                <li><b>Passive Income:</b> LPs earn fees by providing liquidity.</li>
                <li><b>24/7 Availability:</b> AMMs function continuously without market closures.</li>
            </ul>
        </div>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Challenges of AMMs</b></h2></div>
    <div className="mtop15p">
        <div>Despite their benefits, AMMs face several challenges:</div>
        <div>
            <ul>
                <li><b>Impermanent Loss:</b> LPs may incur losses due to market volatility.</li>
                <li><b>Slippage:</b> Large trades can cause significant price impact.</li>
                <li><b>Smart Contract Risks:</b> Bugs and vulnerabilities may lead to fund losses.</li>
                <li><b>Front-Running Attacks:</b> Malicious traders exploit transactions for profit.</li>
            </ul>
        </div>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Future of AMMs</b></h2></div>
    <div className="mtop15p">
        <div>As DeFi evolves, AMMs are expected to integrate with:</div>
        <div>
            <ul>
                <li><b>Layer 2 Scaling Solutions</b> for faster and cheaper transactions.</li>
                <li><b>Cross-Chain Liquidity Pools</b> to enhance interoperability.</li>
                <li><b>AI-Powered Market Making</b> for better efficiency and risk management.</li>
            </ul>
        </div>
    </div>

 </div>);
};

export default Benefits;