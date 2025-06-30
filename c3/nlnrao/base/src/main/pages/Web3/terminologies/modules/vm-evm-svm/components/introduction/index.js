import React from "react";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><i>Blockchain platforms are not just about cryptocurrencies — they're programmable, decentralized 
        ecosystems that run applications. Behind the scenes, special computing environments 
        known as <b>Virtual Machines (VMs)</b> make this possible. These VMs simulate an actual machine where code can be executed 
        in a secure and deterministic manner. Two of the most prominent blockchain VMs in today's decentralized space are 
        the <b>Ethereum Virtual Machine (EVM)</b> and the <b>Solana Virtual Machine (SVM)</b>.</i></div>
    <div className="mtop15p"><i>Understanding how EVM and SVM work can help developers choose the right platform for building 
    decentralized applications (dApps) based on performance, scalability, tooling, and ecosystem support.</i></div>

    <div className="mtop15p"><h2 className="blog-head"><b>Introduction: What Is a Virtual Machine in Blockchain?</b></h2></div>
    <div className="mtop15p">A <b>Virtual Machine (VM)</b> in blockchain is a software layer that interprets and executes smart 
    contract code in a safe and isolated environment. It ensures that every node on the network produces the same result from 
    the same code, providing <b>determinism</b> and <b>consensus</b>.</div>

    <div className="mtop15p"><h4 className="blog-head"><b>Why Use VMs?</b></h4></div>
    <div>
        <ul>
            <li className="mtop5p">Sandbox execution (isolated from hardware)</li>
            <li className="mtop5p">Secure and deterministic computation</li>
            <li className="mtop5p">Portability across nodes</li>
            <li className="mtop5p">Cross-platform interoperability</li>
            <li className="mtop5p">Language abstraction</li>
        </ul>
    </div>
    <div className="mtop5p">In blockchain, a VM provides the foundation to execute decentralized programs, enforce consensus, and 
    maintain ledger integrity.</div>


    <div className="mtop15p"><h2 className="blog-head"><b>Ethereum Virtual Machine (EVM)</b></h2></div>
    <div className="mtop15p"><h4 className="blog-head"><b>Overview</b></h4></div>
    <div className="mtop5p">The <b>EVM</b> is the runtime environment for smart contracts in Ethereum. Every Ethereum node runs 
    the EVM to maintain consensus across the blockchain.</div>

    <div className="mtop15p"><h4 className="blog-head"><b>Key Features</b></h4></div>
    <div>
        <ul>
            <li className="mtop5p"><b>Stack-based architecture</b></li>
            <li className="mtop5p">Executes <b>bytecode</b> compiled from high-level languages like <b>Solidity</b> or <b>Vyper</b></li>
            <li className="mtop5p"><b>Turing-complete</b> programming</li>
            <li className="mtop5p">Gas-based metering to prevent infinite loops</li>
            <li className="mtop5p">Immutable and deterministic</li>
        </ul>
    </div>

    <div className="mtop15p"><h4 className="blog-head"><b>Developer Experience</b></h4></div>
    <div>
        <ul>
            <li className="mtop5p"><b>Rich tooling</b> (Remix, Hardhat, Truffle)</li>
            <li className="mtop5p">Extensive documentation</li>
            <li className="mtop5p">Wide community and network effect</li>
            <li className="mtop5p">Compatible with Layer 2 chains and other EVM-based blockchains like BNB Chain, 
            Polygon, Avalanche C-Chain</li>
        </ul>
    </div>

    <div className="mtop15p"><h4 className="blog-head"><b>Limitations</b></h4></div>
    <div>
        <ul>
            <li className="mtop5p">Limited <b>transaction throughput</b> (~15-30 TPS)</li>
            <li className="mtop5p">High gas fees</li>
            <li className="mtop5p">Sequential execution model (non-parallelizable)</li>
        </ul>
    </div>



    <div className="mtop15p"><h2 className="blog-head"><b>Solana Virtual Machine (SVM)</b></h2></div>
    <div className="mtop15p"><h4 className="blog-head"><b>Overview</b></h4></div>
    <div className="mtop15p">The <b>SVM</b> is the execution layer used by the Solana blockchain, optimized for high 
    throughput and parallel execution. It supports <b>smart contracts</b> written in Rust, C, and C++.</div>

    <div className="mtop15p"><h4 className="blog-head"><b>Key Features</b></h4></div>
    <div>
        <ul>
            <li className="mtop5p"><b>Parallel execution</b> using a model called <b>Sealevel</b></li>
            <li className="mtop5p">Extremely fast: Up to <b>65,000 TPS</b></li>
            <li className="mtop5p">No EVM compatibility (different architecture and tooling)</li>
            <li className="mtop5p">Uses <b>Proof of History (PoH)</b> to optimize consensus timing</li>
        </ul>
    </div>

    <div className="mtop15p"><h4 className="blog-head"><b>Developer Experience</b></h4></div>
    <div>
        <ul>
            <li className="mtop5p">Uses <b>Rust</b> (more performant but steeper learning curve)</li>
            <li className="mtop5p">Strong integration with Web3 and Solana-specific SDKs</li>
            <li className="mtop5p">Program accounts are data-specific (storage is offloaded to accounts rather than 
            embedded in the contract)</li>
        </ul>
    </div>

    <div className="mtop15p"><h4 className="blog-head"><b>Limitations</b></h4></div>
    <div>
        <ul>
            <li className="mtop5p">Less mature ecosystem compared to Ethereum</li>
            <li className="mtop5p">Complex development model for new developers</li>
            <li className="mtop5p">Requires knowledge of <b>low-level memory management</b></li>
        </ul>
    </div>
 </div>);
};

export default Introduction;