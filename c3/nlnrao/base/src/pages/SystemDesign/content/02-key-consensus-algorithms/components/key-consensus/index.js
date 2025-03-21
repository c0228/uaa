import React from "react";
import OrderList from '@Components/order-list/index.js';
import { Order } from "e-ui-react";

const KeyConsenus = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Key Consensus Algorithms</b></h2></div>
    <div>
        <ol>
            <li className="mtop15p">
                <div><h4><b>Paxos</b></h4></div>
                <div className="mtop15p"><b>Overview: </b></div>
                <div>Paxos, introduced by Leslie Lamport in 1989, is one of the most well-known consensus algorithms. It 
                    ensures fault tolerance in distributed environments and allows nodes to agree on a single value even 
                    when some nodes fail.</div>
                <div className="mtop15p"><b>How Paxos Works:</b></div>
                <OrderList data={[(<div><b>Proposers</b> propose values.</div>),
                            (<div><b>Acceptors</b> receive proposals and vote.</div>),
                            (<div><b>Learners</b> learn the agreed-upon value.</div>),
                            (<div>The protocol involves two phases: Prepare and Accept.</div>)]} />
                <div className="mtop15p"><b>Implications:</b></div>
                <OrderList data={[(<div>Guarantees safety in asynchronous networks.</div>),
                        (<div>Can tolerate up to (N-1)/2 node failures.</div>),
                        (<div>Provides strong consistency but has high communication overhead.</div>)]} />
                <div className="mtop15p"><b>Challenges:</b></div>
                <OrderList data={[(<div>Complex to implement correctly.</div>),
                        (<div>High latency due to multiple message exchanges.</div>),
                        (<div>Difficult to scale due to multiple rounds of communication.</div>)]} />
            </li>
            <li className="mtop15p">
                <div><h4><b>Multi-Paxos</b></h4></div>
                <div className="mtop15p"><b>Overview:</b></div>
                <div>Multi-Paxos is an optimization of Paxos designed for repeated consensus decisions, such as 
                    leader election in a distributed database.</div>
                <div className="mtop15p"><b>Key Features:</b></div>
                <OrderList data={[(<div>Elects a stable leader to reduce consensus rounds.</div>),
                    (<div>Improves performance by reducing the number of message exchanges.</div>)]} />
                <div className="mtop15p"><b>Implications:</b></div>
                <OrderList data={[(<div>Reduces latency compared to classic Paxos.</div>),
                    (<div>Still complex but more practical for real-world deployments.</div>),
                    (<div>Used in systems like Google Spanner and Chubby.</div>)]} />
                <div className="mtop15p"><b>Challenges:</b></div>
                <OrderList data={[(<div>Leader failure causes temporary unavailability.</div>),
                    (<div>Requires a mechanism to handle leader elections efficiently.</div>)]} />
            </li>
            <li className="mtop15p">
                <div><h4><b>Raft</b></h4></div>
                <div className="mtop15p"><b>Overview:</b></div>
                <div>Raft was introduced by Diego Ongaro and John Ousterhout as a more understandable alternative to Paxos. 
                    It simplifies consensus while maintaining similar properties.</div>
                <div className="mtop15p"><b>How Raft Works:</b></div>
                <OrderList data={[(<div>Uses a leader-based approach like Multi-Paxos.</div>),
                        (<div>The leader is elected via voting and handles all log replication.</div>),
                        (<div>Followers replicate logs and respond to leader requests.</div>)]} />
                <div className="mtop15p"><b>Implications:</b></div>
                <OrderList data={[(<div>Easier to implement and understand than Paxos.</div>),
                        (<div>Provides better debuggability and modular design.</div>),
                        (<div>Used in systems like etcd and Consul.</div>)]} />
                <div className="mtop15p"><b>Challenges:</b></div>
                <OrderList data={[(<div>Leader election can cause short unavailability during failures.</div>),
                        (<div>Not optimized for high-scale environments with thousands of nodes.</div>)]} />
            </li>
            <li className="mtop15p">
                <div><h4><b>Zab (ZooKeeper Atomic Broadcast)</b></h4></div>
                <div className="mtop15p"><b>Overview:</b></div>
                <div><i>Zab</i> is the consensus protocol used by Apache ZooKeeper. It ensures that a sequence of updates is 
                consistently replicated across nodes.</div>
                <div className="mtop15p"><b>Key Features:</b></div>
                <OrderList data={[(<div>Uses a primary-backup model for consensus.</div>),
                    (<div>Designed for high availability and throughput.</div>)]} />
                <div className="mtop15p"><b>Implications:</b></div>
                <OrderList data={[(<div>Strong consistency guarantees for distributed coordination services.</div>),
                    (<div>Used in Hadoop, Kafka, and HBase.</div>)]} />
                <div className="mtop15p"><b>Challenges:</b></div>
                <OrderList data={[(<div>Single leader model can become a bottleneck under heavy loads.</div>),
                    (<div>Requires dedicated ZooKeeper clusters for reliability.</div>)]} />
            </li>
        </ol>
    </div>
 </div>);
};

export default KeyConsenus;