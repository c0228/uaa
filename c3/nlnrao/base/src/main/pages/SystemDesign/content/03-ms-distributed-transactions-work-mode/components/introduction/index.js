import React from "react";

const Introduction = () =>{
 return (<div className="mtop15p mbot25p lh28p fs16p">
    <div><i>In modern microservices architectures, services often need to update multiple databases or systems atomically. 
        This introduces challenges in maintaining data consistency across distributed components. Traditional monolithic 
        applications handle transactions using ACID (Atomicity, Consistency, Isolation, Durability) principles. However, in 
        microservices, distributed transactions require specialized patterns such as Two-Phase Commit (2PC) and the Saga 
        pattern. This blog explores these approaches, their trade-offs, and when eventual consistency is a better choice.</i></div>
    <div className="mtop15p"><h2 className="blog-head"><b>Understanding Distributed Transactions</b></h2></div>
    <div className="mtop15p">A distributed transaction spans multiple microservices, requiring coordination to ensure consistency. 
        These transactions are complex due to network failures, independent data stores, and the CAP theorem (Consistency, 
        Availability, and Partition Tolerance), which dictates trade-offs between consistency and availability.</div>
    <div className="mtop15p"><h2 className="blog-head"><b>Two-Phase Commit (2PC)</b></h2></div>
    <div className="mtop15p"><h4><b>How 2PC Works</b></h4></div>
    <div>2PC is a distributed protocol that ensures all participants in a transaction either commit or roll back. It consists 
        of two phases:</div>
    <div>
        <ol>
            <li><b>Prepare Phase:</b> The coordinator asks all involved microservices if they can commit.</li>
            <li><b>Commit Phase:</b> If all participants agree, the coordinator sends a commit message; otherwise, it sends 
            a rollback message.</li>
        </ol>
    </div>
    <div className="mtop15p"><h4><b>Trade-offs of 2PC</b></h4></div>
    <div className="mtop15p"><b>Advantages:</b></div>
    <div>
        <ol>
            <li>Ensures strong consistency.</li>
            <li>Atomicity across multiple services.</li>
            <li>Prevents data inconsistencies.</li>
        </ol>
    </div>
    <div className="mtop15p"><b>Disadvantages:</b></div>
    <div>
        <ol>
            <li>Introduces blocking behavior, reducing system availability.</li>
            <li>Higher latency due to synchronous communication.</li>
            <li>Risk of coordinator failure, leading to transaction deadlocks.</li>
            <li>Not scalable for high-throughput systems.</li>
        </ol>
    </div>
 </div>);
};

export default Introduction;