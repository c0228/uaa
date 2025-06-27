import React from "react";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><i>
    We use <b>Practical Byzantine Fault Tolerance (PBFT)</b> to ensure that a distributed system can continue to function 
    correctly even if some of its nodes act maliciously, fail, or send false information. PBFT helps the honest nodes reach 
    consensus on a decision or transaction without relying on heavy computation (like in blockchain mining), making it ideal 
    for fast, secure, and energy-efficient applications in permissioned networks such as financial systems, government 
    databases, or private blockchains.
    </i></div>
    <div className="mtop15p"><h2 className="blog-head"><b>The Problem of Trust in Distributed Systems</b></h2></div>
    <div className="mtop15p"><i>
        <div>In distributed systems, we rely on many nodes (servers or participants) to collectively make decisions or keep 
            data consistent. But what if <b>some nodes are faulty, slow, or even malicious?</b></div>
        <div className="mtop15p">This is the <b>Byzantine Generals Problem</b>, a thought experiment from computer science. 
        Imagine generals coordinating an attack but some are traitors giving false commands. How can the honest ones reach 
        consensus?</div>
        <div className="mtop15p">That's where <b>Byzantine Fault Tolerance (BFT)</b> comes in — 
        and <b>Practical Byzantine Fault Tolerance (PBFT)</b> is one of the earliest and most efficient real-world solutions.</div>
    </i></div>
    <div className="mtop15p"><h2 className="blog-head"><b>Introduction: What is Practical Byzantine Fault Tolerance (PBFT)?</b></h2></div>
    <div className="mtop15p">
        <div><b>PBFT</b> is a consensus algorithm designed to tolerate <b>Byzantine faults</b> in a distributed system. It ensures 
        that:</div>
        <div>
            <ul>
                <li>Even if <b>upto (n-1)/3 nodes</b> behave maliciously,</li>
                <li>The network still reaches agreement on the correct state or transaction.</li>
            </ul>
        </div>
    </div>
    <div className="mtop15p"><h4 className="blog-head"><b>Key Properties:</b></h4></div>
    <div className="mtop15p">
        <ul>
            <li><b>Safety:</b> Honest nodes will never agree on different results.</li>
            <li><b>Liveness:</b> The system continues to make progress.</li>
            <li><b>Decentralized:</b> No central authority needed.</li>
            <li><b>Efficient:</b> Unlike proof-of-work (e.g., Bitcoin), it doesn’t need energy-intensive computations.</li>
        </ul>
    </div>

    <div className="mtop15p"><h4 className="blog-head"><b>PBFT Consensus Phases:</b></h4></div>
    <div className="mop15p">
        <ol>
            <li><b>Pre-prepare:</b> Primary (leader) sends request to replicas.</li>
            <li><b>Prepare:</b> Replicas confirm and broadcast prepared messages.</li>
            <li><b>Commit:</b> After enough prepare messages, nodes commit and execute the operation.</li>
        </ol>
    </div>
    <div>It requires <code><b>3f + 1</b></code> nodes to tolerate <code><b>f</b></code> Byzantine faults.</div>

    <div className="mtop15p"><h2 className="blog-head"><b>Real-world Applications of PBFT:</b></h2></div>
    <div>
        <ul>
            <li><b>Hyperledger Fabric</b> (in earlier versions)</li>
            <li><b>Zilliqa, Tendermint Core</b></li>
            <li><b>Permissioned blockchains</b> in enterprise settings</li>
            <li><b>Air traffic control systems</b>, financial networks</li>
        </ul>
    </div>
 </div>);
};

export default Introduction;