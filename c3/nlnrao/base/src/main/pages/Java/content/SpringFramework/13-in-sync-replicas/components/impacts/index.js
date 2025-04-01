import React from "react";
import OrderList from "@MainComponents/order-list/index.js";

const Impacts = () =>{
 return (<div className="lh28p fs16p mtop15p">
    <div className="mtop15p"><h2 className="blog-head"><b>Impact of ISRs -</b></h2></div>
    <div className="mtop15p"><h4><b>Fault Tolerance:</b></h4></div>
    <div className="mtop15p">Fault tolerance is a key characteristic of Kafka’s architecture. 
        ISRs play a significant role in achieving fault tolerance in the following ways:</div>
    <div>
        <OrderList data={[(<div className="mtop15p">
            <div><b>Ensuring Data Availability</b></div>
            <div>When the leader of a partition fails, Kafka elects a new leader from the ISR list to 
                ensure seamless availability. Since ISRs contain the most up-to-date data, this transition 
                minimizes the risk of data loss.</div>
        </div>),
        (<div className="mtop15p">
            <div><b>Automatic Failover</b></div>
            <div>If a broker hosting the leader replica crashes, a new leader is selected from the ISRs 
                using ZooKeeper (in older versions) or Kafka’s <b>KRaft mode</b> (in newer versions). This automatic 
                failover mechanism ensures that Kafka remains highly available.</div>
        </div>),
        (<div className="mtop15p">
            <div><b>Data Durability</b></div>
            <div>Since all ISRs contain the most recent data, even if the leader crashes, a new leader 
                from the ISR set can continue processing requests without losing committed messages.</div>
        </div>)]} />
    </div>
    <div className="mtop15p"><h4><b>Data Consistency:</b></h4></div>
    <div className="mtop15p">
        Kafka provides strong consistency guarantees by leveraging ISRs. The <b>acks</b> parameter in the producer 
        configuration determines the consistency level:</div>
    <div>
        <ol>
            <li className="mtop15p">
                <div><code><b>acks=0</b></code> <b>(No Acknowledgment)</b></div>
                <ul>
                    <li>The producer does not wait for any acknowledgment from Kafka.</li>
                    <li>High throughput but no guarantee of message durability.</li>
                </ul>
            </li>
            <li className="mtop15p">
                <div><code><b>acks=1</b></code> <b>(Leader Acknowledgment)</b></div>
                <ul>
                    <li>The leader acknowledges the message without waiting for ISRs to replicate it.</li>
                    <li>Ensures minimal durability but risks data loss if the leader fails before followers sync.</li>
                </ul>
            </li>
            <li className="mtop15p">
                <div><code><b>acks=all</b></code> <b>(ISR Acknowledgment)</b></div>
                <ul>
                    <li>The leader waits for all ISRs to acknowledge the message.</li>
                    <li>Provides the highest consistency by ensuring data is replicated before confirming receipt to the producer.</li>
                </ul>
            </li>
        </ol>
    </div>
 </div>);
};

export default Impacts;