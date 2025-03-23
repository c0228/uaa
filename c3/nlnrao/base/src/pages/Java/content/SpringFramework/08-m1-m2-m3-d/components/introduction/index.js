import React from "react";
import OrderList from '@Components/order-list/index.js';
import { BlogIndexHeader } from "@Components/blog-index-header/index.js";

const Introduction = () =>{
 return (<div className="lh28p fs16p mtop15p">
    <div><i>In a microservices architecture, each microservice typically has its own database to maintain data autonomy and 
        ensure scalability. However, when multiple microservices participate in a single business transaction, maintaining 
        data consistency becomes a challenge. This blog discusses how to handle distributed transactions in a system where 
        Microservice M1 calls M2, and M2 calls M3, ensuring that if M3's transaction fails, all previous transactions are 
        rolled back.</i></div>

    <div className="mtop15p"><h2 className="blog-head"><b>Understanding the Problem</b></h2></div>
    <div className="mtop15p">
        Consider a system with three microservices:
        <OrderList data={[(<div><b>M1</b> is associated with <b>Database D1</b>.</div>),
                    (<div><b>M2</b> is associated with <b>Database D2</b>.</div>),
                    (<div><b>M3</b> is associated with <b>Database D3</b>.</div>)]} />
        <div className="mtop15p">M1 calls M2, and M2 calls M3. If M3’s transaction fails, the changes made by 
            M1 and M2 should be rolled back to maintain data consistency.</div>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Challenges in Distributed Transactions</b></h2></div>
    <div>
        <ol>
            <li className="mtop15p"><b>Atomicity:</b><br/> Transactions should be atomic, meaning either all operations complete 
            successfully or none should persist.</li>
            <li className="mtop15p"><b>Consistency:</b><br/> The system should always remain in a valid state.</li>
            <li className="mtop15p"><b>Isolation:</b><br/> Transactions should not interfere with each other.</li>
            <li className="mtop15p"><b>Durability:</b><br/> Once committed, transactions should remain in the system even after failures.</li>
        </ol>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Solutions to Maintain Consistency</b></h2></div>
    <div className="padleft15p">
        <div className="mtop15p">
            <BlogIndexHeader type="h4" index="1" title="Two-Phase Commit (2PC)" />
            <div>Two-Phase Commit (2PC) is a protocol where transactions are coordinated between multiple 
                microservices in two phases:</div>
            <div>
                <ol>
                    <li><b>Prepare Phase:</b> Each microservice performs the transaction and prepares to 
                    commit. It locks resources and informs the coordinator.</li>
                    <li><b>Commit Phase:</b> If all microservices agree, the transaction is committed. If any 
                    microservice fails, a rollback is triggered.</li>
                </ol>
            </div>
            <div><b>Implementation Steps:</b></div>
            <div><OrderList data={[(<div>Use a <b>Transaction Coordinator</b> to manage distributed transactions.</div>),
                            (<div>Ensure microservices support transactional resource locking.</div>),
                            (<div>Implement rollback procedures in case of failure.</div>)]} /></div>
            <div><b>Limitations:</b></div>
            <div><OrderList data={[(<div>Increases latency.</div>),
                        (<div>Can lead to deadlocks.</div>),
                        (<div>Not scalable for large systems.</div>)]} /></div>


            <BlogIndexHeader type="h4" index="2" title="Saga Pattern" />
            <div>Saga is a sequence of transactions where each transaction updates the database and triggers the 
                next step. If a failure occurs, compensating transactions undo the previous updates.</div>
            <div><b>Implementation Steps:</b></div>
            <div><OrderList data={[(<div>Each microservice executes a local transaction.</div>),
                        (<div>If a failure occurs, each service executes a compensating transaction to revert changes.</div>),
                        (<div>Orchestrator-based or Choreography-based Sagas can be used.</div>)]} /></div>
            <div><b>Orchestration-Based Saga:</b></div>
            <div><OrderList data={[(<div>A centralized orchestrator manages the transaction flow.</div>),
                        (<div>If M3 fails, the orchestrator triggers compensating transactions in M1 and M2.</div>)]} /></div>
            <div><b>Choreography-Based Saga:</b></div>
            <div><OrderList data={[(<div>Each microservice listens for events and responds accordingly.</div>),
                        (<div>If M3 fails, it emits an event that triggers rollback operations in M1 and M2.</div>)]} /></div>
            <div><b>Advantages:</b></div>
            <div><OrderList data={[(<div>Scalable and loosely coupled.</div>),
                        (<div>Works well with event-driven architectures.</div>)]} /></div>

            <BlogIndexHeader type="h4" index="3" title="Eventual Consistency with Message Queues" />
            <div>Instead of strict transactional integrity, eventual consistency ensures that changes propagate across 
                microservices over time.</div>
            <div><b>Implementation Steps:</b></div>
            <div><OrderList data={[(<div>Use <b>message queues</b> like Kafka or RabbitMQ to pass transaction events.</div>),
                        (<div>Implement <b>retry mechanisms</b> for failed transactions.</div>),
                        (<div>Use <b>idempotency</b> to avoid duplicate processing.</div>)]} /></div>
            <div><b>Advantages:</b></div>
            <div><OrderList data={[(<div>High availability and scalability.</div>),
                        (<div>No global locks or blocking.</div>)]} /></div>
        </div>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Choosing the Right Approach</b></h2></div>
    <div><OrderList data={[(<div><b>Use 2PC</b> if strong consistency is required and performance impact is acceptable.</div>),
                (<div><b>Use Saga Pattern</b> for long-running transactions in event-driven systems.</div>),
                (<div><b>Use Eventual Consistency</b> when scalability is the priority and some delay in data 
                consistency is acceptable.</div>)]} /></div>

    <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
    <div>Handling distributed transactions in microservices requires careful consideration of consistency, scalability, and 
        failure recovery mechanisms. The choice between 2PC, Saga Pattern, or Eventual Consistency depends on the system's 
        needs. By implementing the right rollback strategy, microservices can ensure data integrity even in failure scenarios.</div>
 </div>);
};

export default Introduction;