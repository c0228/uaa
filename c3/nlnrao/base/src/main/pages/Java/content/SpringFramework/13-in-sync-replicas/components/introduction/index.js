import React from "react";
import OrderList from "@MainComponents/order-list/index.js";

const Introduction = () =>{
 return (<div className="lh28p fs16p mtop15p">
    <div><i>Apache Kafka is a distributed event streaming platform designed for high-throughput, fault tolerance, and real-time 
        data processing. One of its critical components ensuring reliability and data consistency is the concept of In-Sync 
        Replicas (ISRs). In this blog, we will explore ISRs in detail, their impact on fault tolerance and data consistency, 
        and how Kafka handles scenarios when ISRs shrink or become unavailable.</i></div>
    <div className="mtop15p"><h2 className="blog-head"><b>What Are In-Sync Replicas (ISRs)?</b></h2></div>
    <div className="mtop15p">What Are In-Sync Replicas (ISRs)?

Kafka uses a replication mechanism to ensure data availability and durability. Each topic partition has 
a <b>leader replica</b> and one or more <b>follower replicas</b> distributed across different brokers.</div>
<div>
    <OrderList data={[(<div><b>Leader Replica:</b> The active replica that serves read and write requests for the partition.</div>),
        (<div><b>Follower Replicas:</b> The replicas that asynchronously replicate data from the leader.</div>),
        (<div><b>In-Sync Replicas (ISRs):</b> The set of replicas (including the leader) that are up-to-date with the leader.</div>)]} />
</div>
<div>A replica is considered in sync if it has caught up to the latest offset of the leader within a defined 
    time window (<code><b>replica.lag.time.max.ms</b></code>).</div>
 </div>);
};


export default Introduction;