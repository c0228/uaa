import React from "react";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><i>When we think of blockchains, we often imagine fairness, transparency, and decentralized consensus. 
        But beneath this democratic exterior lies a powerful incentive system that gives some participants—especially miners and 
        validators—opportunities to profit by reordering, inserting, or censoring transactions in a block. This subtle yet 
        influential practice is known as <b>MEV</b>: Miner (or Maximal) Extractable Value.</i></div>
    <div className="mtop15p"><i>It’s an invisible tax on users, a hidden revenue for validators, and sometimes, a threat to 
    blockchain neutrality.</i></div>
    
    <div className="mtop15p"><h2 className="blog-head"><b>Introduction to MEV: The Hidden Economics of Blockchain</b></h2></div>
    <div className="mtop15p"><h4 className="blog-head"><b>What Is MEV?</b></h4></div>
    <div className="mtop15p">
        <div><b>MEV (Miner Extractable Value)</b> refers to the <b>maximum value a block producer (miner or validator)</b> can 
        extract from block production <b>by controlling the ordering of transactions</b>. This includes:</div>
        <ul>
            <li className="mtop5p">Reordering transactions</li>
            <li className="mtop5p">Inserting their own transactions</li>
            <li className="mtop5p">Censoring or delaying others</li>
        </ul>
    </div>
    <div className="mtop15p"><h4 className="blog-head"><b>Evolution of the Term</b></h4></div>
    <div className="mtop15p">Originally called <b>Miner Extractable Value</b>, it has now evolved to <b>Maximal Extractable Value</b> to 
    reflect its broader applicability across all consensus mechanisms (e.g., Proof of Stake validators, not just PoW miners).</div>

    <div align="center" className="mtop15p"><h2 className="blog-head"><b>How MEV Works?</b></h2></div>
    <div className="mtop15p">Every time you submit a transaction to the blockchain, it enters a waiting pool (called the <b>mempool</b>). 
    Miners or validators can <b>observe the mempool</b>, and <b>reorder or insert</b> transactions in a block they’re about to validate.</div>
    <div className="mtop15p"><h4 className="blog-head"><b>Types of MEV Strategies</b></h4></div>
    <div>
        <ol>
            <li className="mtop5p">
                <div><b>Front-running</b></div>
                <ul>
                    <li>A validator sees a profitable trade and places their own transaction just before it.</li>
                    <li><u>Example:</u> In DeFi, someone submits a large swap on Uniswap &#8594; validator puts their own swap in front 
                    to benefit from price slippage.</li>
                </ul>
            </li>
            <li className="mtop5p">
                <div><b>Back-running</b></div>
                <ul>
                    <li>Placing a trade right <b>after</b> a large transaction to benefit from its price impact.</li>
                </ul>
            </li>
            <li className="mtop5p">
                <div><b>Sandwich Attacks</b></div>
                <ul>
                    <li>A combination of front-running and back-running to profit from a user’s trade.</li>
                    <li><u>Attack structure</u>: <code><b>Attacker Buy &#8594; User Trade &#8594; Attacker Sell</b></code></li>
                </ul>
            </li>
            <li className="mtop5p">
                <div><b>Liquidation Arbitrage</b></div>
                <ul>
                    <li>Validators prioritize and execute liquidations in lending protocols like Aave or Compound for profit.</li>
                </ul>
            </li>
            <li className="mtop5p">
                <div><b>NFT Sniping</b></div>
                <ul>
                    <li>Scanning pending NFT mints and inserting faster mint transactions.</li>
                </ul>
            </li>
        </ol>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>MEV in Ethereum and Other Blockchains</b></h2></div>
    <div className="mtop15p"><h4 className="blog-head"><b>Ethereum (EVM Chains)</b></h4></div>
    <div>
        <ul>
            <li className="mtop5p">MEV is significant due to the high DeFi activity.</li>
            <li className="mtop5p">Tools like <b>Flashbots</b> emerged to reduce harmful MEV by 
            introducing <b>private transaction ordering</b> between searchers and validators.</li>
        </ul>
    </div>
    <div className="mtop15p"><h4 className="blog-head"><b>Solana, BNB Chain, Polygon</b></h4></div>
    <div>
        <ul>
            <li className="mtop5p">MEV also exists, but detection is harder due to architectural differences.</li>
            <li className="mtop5p">Solana’s high-speed parallel processing and fee markets have created new MEV dynamics.</li>
        </ul>
    </div>
    <div className="mtop15p"><h4 className="blog-head"><b>Bitcoin</b></h4></div>
    <div>
        <ul>
            <li className="mtop5p">Limited MEV as transactions are simpler.</li>
            <li className="mtop5p">Some fee-sniping exists during congestion.</li>
        </ul>
    </div>


    <div className="mtop15p"><h2 className="blog-head"><b>The MEV Supply Chain</b></h2></div>
    <div>
        <ol>
            <li className="mtop5p"><b>Searchers:</b> Bots that scan the mempool for profitable MEV opportunities.</li>
            <li className="mtop5p"><b>Builders:</b> Assemble optimized blocks containing MEV transactions.</li>
            <li className="mtop5p"><b>Relayers:</b> Middlemen that deliver blocks to validators.</li>
            <li className="mtop5p"><b>Validators (or Miners):</b> Ultimately decide which block gets produced.</li>
        </ol>
    </div>
    <div className="mtop5p">This has evolved into the <b>Proposer-Builder Separation (PBS) model</b> — where 
    validators outsource block-building to professional builders.</div>
 </div>);
};

export default Introduction;