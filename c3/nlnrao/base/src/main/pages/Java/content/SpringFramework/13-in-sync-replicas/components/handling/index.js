import React from "react";
import OrderList from "@MainComponents/order-list/index.js";

const Handling = () =>{
 return (<div className="lh28p fs16p mtop15p mbot15p">
    <div className="mtop15p"><h2 className="blog-head"><b>Handling ISR Shrinkage and Unavailability</b></h2></div>
    <div className="mtop15p">ISRs can shrink when follower replicas fall behind due to network issues, 
        broker failures, or slow processing speeds. Kafka handles these situations using various strategies.</div>
    <div>
        <ol>
            <li className="mtop15p">
                <div><b>ISR Shrinkage Due to Replica Lag</b></div>
                <div>When a replica fails to catch up <code><b>within replica.lag.time.max.ms</b></code>, it is 
                removed from the ISR list.</div>
                <div className="mtop15p"><b>Impact:</b></div>
                <div>
                    <OrderList data={[(<div>If the leader fails, fewer replicas are eligible for leader 
                        election, reducing fault tolerance.</div>),
                        (<div>If all ISRs shrink to just the leader, replication redundancy is lost, increasing 
                            the risk of data loss.</div>)]} />
                </div>
                <div className="mtop15p"><b>Mitigation Strategies:</b></div>
                <div>
                    <OrderList data={[(<div>Optimize broker configurations 
                        (<code><b>replica.fetch.wait.max.ms</b></code>, 
                        <code><b>replica.lag.time.max.ms</b></code>).</div>),
                        (<div>Use monitoring tools like Kafka’s <code><b>kafka-replica-verification.sh</b></code> 
                        to track ISR health.</div>),
                        (<div>Scale out brokers to distribute the replication load more efficiently.</div>)]} />
                </div>
            </li>
            <li className="mtop15p">
                <div><b>ISR Unavailability for Producers</b></div>
                <div className="mtop15p">If all followers lag behind and the ISR shrinks to just the leader, 
                    producers with <code><b>acks=all</b></code> cannot receive acknowledgments.</div>
                <div className="mtop15p"><b>Impact:</b></div>
                <div>
                    <OrderList data={[(<div>Producers may block indefinitely, waiting for an acknowledgment that never comes.</div>),
                            (<div>Message production throughput drops significantly.</div>)]} />
                </div>
                <div className="mtop15p"><b>Mitigation Strategies:</b></div>
                <div>
                    <OrderList data={[(<div>Tune producer retry mechanisms (<code><b>retries</b></code>, <code><b>retry.backoff.ms</b></code>).</div>),
                        (<div>Adjust ISR size thresholds (<code><b>min.insync.replicas</b></code>) to balance consistency and availability.</div>),
                        (<div>Implement monitoring alerts to detect ISR shrinkage in real time.</div>)]} />
                </div>
            </li>
            <li className="mtop15p">
                <div><b>ISR Unavailability for Consumers</b></div>
                <div className="mtop15p">Consumers read from the leader replica, so ISR shrinkage does not directly impact them. However, if the 
                    leader crashes and no ISR is available for failover, consumption stalls.</div>
                <div className="mtop15p"><b>Impact:</b></div>
                <div>
                    <OrderList data={[(<div>Consumer applications may experience delays or unavailability.</div>),
                        (<div>If <code><b>unclean.leader.election.enable=true</b></code>, an out-of-sync replica can become the new leader, 
                        leading to data inconsistencies.</div>)]} />
                </div>
                <div className="mtop15p"><b>Mitigation Strategies:</b></div>
                <div>
                    <OrderList data={[(<div>Keep <code><b>unclean.leader.election.enable=false</b></code> to prevent stale leaders from taking over.</div>),
                        (<div>Increase replication factor to ensure more ISRs for failover.</div>),
                        (<div>Use Kafka’s <code><b>lag monitoring</b></code> metrics to track ISR health.</div>)]} />
                </div>
            </li>
        </ol>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
    <div className="mtop15p mbot15p">In-Sync Replicas (ISRs) are essential for Kafka’s fault tolerance and data consistency. By managing ISRs effectively, organizations 
        can ensure high availability, prevent data loss, and maintain system reliability. Regular monitoring, tuning replication settings, and optimizing producer 
        acknowledgments help maintain a stable and resilient Kafka cluster. Understanding and handling ISR shrinkage and unavailability is crucial for ensuring 
        Kafka’s seamless performance in production environments.</div>
 </div>);
};

export default Handling;