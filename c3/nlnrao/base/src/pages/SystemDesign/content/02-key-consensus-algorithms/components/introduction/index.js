import React from "react";
import OrderList from "@Components/order-list/index.js";

const Introduction = ()=>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
    <div><i>Consensus algorithms play a crucial role in distributed systems by ensuring that multiple nodes in a 
        network agree on a common value despite potential failures. These algorithms are fundamental for building 
        reliable, fault-tolerant systems that operate over multiple nodes. Some of the most prominent consensus 
        algorithms include Paxos, Raft, and variations such as Multi-Paxos and Fast Paxos.<br/><br/>
        This blog explores key consensus algorithms, their implications, and their suitability for different 
        distributed environments. We will also discuss the challenges associated with large-scale deployments of 
        these algorithms.</i></div>
    <div className="mtop15p"><h2 className="blog-head"><b>What is Consensus in Distributed Systems?</b></h2></div>
    <div className="mtop15p">Consensus is the process of achieving agreement among multiple nodes in a distributed 
        system. A consensus algorithm ensures that:</div>
    <OrderList data={[(<div>All non-faulty nodes agree on the same value.</div>),
            (<div>The agreed-upon value was proposed by at least one node.</div>),
            (<div>The system remains functional even if some nodes fail.</div>)]} />

 </div>);
};

export default Introduction;