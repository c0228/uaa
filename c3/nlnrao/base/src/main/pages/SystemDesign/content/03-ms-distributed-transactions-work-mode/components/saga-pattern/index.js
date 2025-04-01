import React from "react";
import OrderList from "@Components/order-list/index.js";

const SagaPattern = () =>{
 return (<div className="mtop15p mbot25p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>The Saga Pattern</b></h2></div>
    <div className="mtop15p">An alternative to 2PC, the <b>Saga pattern</b> breaks a distributed transaction into a 
    sequence of smaller local transactions, each with a compensating action in case of failure.</div>
    <div className="mtop15p"><h4><b>Types of Saga Implementations</b></h4></div>
    <div>
        <ol>
            <li><b>Choreography:</b> Services publish events to trigger subsequent steps.</li>
            <li><b>Orchestration:</b> A central orchestrator controls the transaction flow.</li>
        </ol>
    </div>
    <div className="mtop15p"><h4><b>Trade-offs of the Saga Pattern</b></h4></div>
    <div><b>Advantages:</b></div>
    <OrderList data={[(<div>Non-blocking, improving scalability.</div>),
        (<div>Works well with eventual consistency.</div>),
        (<div>Fault-tolerant with compensation mechanisms.</div>)]} />
    <div><b>Disadvantages:</b></div>
    <OrderList data={[(<div>Complexity in handling compensation logic.</div>),
        (<div>Difficult to maintain across multiple services.</div>),
        (<div>Increased latency due to event-driven communication.</div>)]} />

    <div className="mtop15p"><h2 className="blog-head"><b>Consistency vs. Performance Trade-offs</b></h2></div>
    <div className="mtop15p"><b>Advantages:</b></div>
    <OrderList data={[(<div><b>Strong Consistency:</b> Ensures all reads return the latest committed data (used in 2PC).</div>),
            (<div><b>Eventual Consistency:</b> Data updates propagate asynchronously, leading to temporary inconsistencies 
            but improving system availability (used in the Saga pattern).</div>)]} />
    <div className="mtop15p"><b>Disadvantages:</b></div>
    <OrderList data={[(<div>2PC reduces performance due to its synchronous nature and blocking behavior.</div>),
            (<div>The Saga pattern allows better performance by enabling concurrent execution.</div>),
            (<div>Event-driven architectures (Saga) reduce direct service dependencies, improving responsiveness.</div>)]} />

    <div className="mtop15p"><h2 className="blog-head"><b>When Is Eventual Consistency a Better Choice?</b></h2></div>
    <div>Eventual consistency is preferable when:</div>
    <OrderList data={[(<div>The system requires high availability and responsiveness.</div>),
        (<div>Minor inconsistencies are tolerable for short durations.</div>),
        (<div>Scalability is a key concern.</div>),
        (<div>Services are loosely coupled and communicate asynchronously.</div>)]} />
    <div><b>Examples:</b></div>
    <OrderList data={[(<div>E-commerce order processing (updating inventory and payment systems separately).</div>),
        (<div>User profile updates across multiple microservices.</div>),
        (<div>Distributed caching systems where immediate consistency isn’t critical.</div>)]} />
 </div>);
};

export default SagaPattern;