import React from "react";
import OrderList from "@MainComponents/order-list/index.js";

const Introduction = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
    <div><i>The Byzantine Generals' Problem is a fundamental issue in distributed computing and blockchain networks, 
        where independent nodes must reach consensus despite the possibility of malicious or faulty nodes. Byzantine 
        Fault Tolerance (BFT) algorithms, such as <b>Practical Byzantine Fault Tolerance (PBFT)</b> and <b>Tendermint</b>, 
        are designed to ensure consensus in such adversarial conditions.<br/><br/>
        In this blog, we explore the Byzantine Generals' Problem, how BFT algorithms like PBFT and Tendermint address 
        this issue, and their scalability and complexity limitations. Additionally, we provide code examples in 
        <b>Node.js</b>, <b>Python</b>, and <b>Java</b> to illustrate these concepts.</i></div>
    <div align="center" className="mtop15p"><h2 className="blog-head"><b>Understanding the Byzantine Generals' Problem</b></h2></div>
    <div className="mtop15p mbot15p">
        <div><h4><b>What is the Problem?</b></h4></div>
        <div className="mtop15p">Imagine multiple generals leading different divisions of an army, attempting to coordinate 
            an attack on a city. Some generals may be traitors who send conflicting information. The problem is: 
            <b>How can the loyal generals reach a consensus despite unreliable or malicious nodes?</b><br/><br/>
            This problem extends to distributed systems and blockchain networks, where nodes must agree on a single 
            state despite faults or malicious actors.</div>
        <div className="mtop15p"><h4><b>Why is it Important?</b></h4></div>
        <div className="mtop15p">
            <OrderList data={[(<div>Ensures network consistency and reliability.</div>),
                (<div>Prevents malicious actors from disrupting consensus.</div>),
                (<div>Maintains decentralization and security in blockchain networks.</div>)]} />
        </div>
    </div>

    <div className="mtop15p mbot15p">
        <div><h2 className="blog-head"><b>Byzantine Fault Tolerance (BFT)</b></h2></div>
        <div className="mtop15p"><h4><b>Definition</b></h4></div>
        <div className="mtop15p">Byzantine Fault Tolerance (BFT) is the ability of a system to function correctly 
            even when some nodes exhibit arbitrary (Byzantine) failures, including sending incorrect or conflicting 
            messages.</div>
        <div className="mtop15p"><h4><b>How BFT Works in Blockchain?</b></h4></div>
        <div className="mtop15p">BFT algorithms ensure that at least <code><b>2/3</b></code> of honest nodes reach 
        consensus. If the total number of nodes is <code><b>N</b></code>, the system can tolerate up to 
        <code><b>(N-1)/3</b></code> Byzantine nodes.</div>
        <div>Examples of BFT-based consensus mechanisms include:</div>
        <OrderList data={[(<div><b>PBFT (Practical Byzantine Fault Tolerance)</b></div>),
            (<div><b>Tendermint</b> (used in Cosmos Blockchain)</div>),
            (<div><b>HotStuff</b> (used in Libra/Diem)</div>)]} />
    </div>
 </div>);
};

export default Introduction;