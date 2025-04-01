import React from "react";
import OrderList from "@MainComponents/order-list/index.js";

const CombineEncryption = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
    <div align="center"><h2 className="blog-head"><b>3. Combining Encryption at Rest and in Transit for Kafka Security</b></h2></div>

    <div className="mtop15p"><h4><b>Best Practices for Secure Kafka Deployment</b></h4></div>
    <OrderList data={[(<div>Implement both encryption at rest and in transit to achieve end-to-end data security.</div>),
        (<div>Regularly audit encryption configurations and rotate keys and certificates.</div>),
        (<div>Monitor SSL handshake failures and storage encryption logs for potential security breaches.</div>),
        (<div>Leverage Kafka authorization (e.g., ACLs) alongside encryption to restrict access to sensitive data.</div>)]} />
    
    <div className="mtop15p"><h4><b>Performance Trade-offs and Optimizations</b></h4></div>
    <OrderList data={[(<div>Use hardware acceleration for encryption to minimize impact on Kafka’s performance.</div>),
        (<div>Optimize SSL/TLS configurations with session resumption and TLS offloading.</div>),
        (<div>Compress messages before encryption to reduce processing overhead.</div>)]} />

 </div>);
};

export default CombineEncryption;