import React from "react";
import OrderList from "@Components/order-list/index.js";

const Introduction = () =>{
 return (<div className="lh28p fs16p mtop15p">
    <div><i>Apache Kafka is a widely used distributed event streaming platform that powers real-time data pipelines and 
        applications. Given the sensitive nature of the data that Kafka processes, securing it through encryption at rest 
        and in transit is crucial. This blog explores best practices for encrypting data in a Kafka cluster, including 
        recommended encryption algorithms, key management systems, and the associated performance implications.</i></div>
        
    <div align="center" className="mtop15p"><h2 className="blog-head"><b>1. Encryption at Rest in Kafka</b></h2></div>
    <div className="mtop15p"><h4><b>Importance of Encryption at Rest</b></h4></div>
    <div>Encryption at rest protects stored data from unauthorized access in case of physical theft or unauthorized 
        access to storage media.</div>
    <div className="mtop15p mbot15p"><h4><b>Techniques for Encrypting Kafka Data at Rest</b></h4></div>
    <div>
        <ol>
            <li className="mtop15p">
                <div><b>Filesystem-Level Encryption:</b></div>
                <OrderList data={[(<div>Use disk encryption tools such as LUKS (Linux Unified Key Setup) or BitLocker 
                    for encrypting storage volumes.</div>),
                    (<div>Transparent Data Encryption (TDE) ensures that Kafka log segments remain encrypted at the 
                        OS level.</div>)]} />
            </li>
            <li className="mtop15p">
                <div><b>Kafka Broker-Level Encryption:</b></div>
                <OrderList data={[(<div>Kafka does not natively support data encryption at the log segment level, 
                    but data can be encrypted before being written to topics.</div>),
                    (<div>Implement an encryption mechanism at the producer level before sending data.</div>)]} />
            </li>
            <li className="mtop15p">
                <div><b>Broker Storage Encryption:</b></div>
                <OrderList data={[(<div>Encrypt Kafka log segments using AES-256 encryption.</div>),
                    (<div>Enable encryption on the underlying storage system, such as AWS S3 or encrypted EBS 
                        volumes for cloud deployments.</div>)]} />
            </li>
        </ol>
    </div>
    <div className="mtop15p mbot15p"><h4><b>Key Management for Data at Rest</b></h4></div>
    <OrderList data={[(<div>Use Key Management Systems (KMS) such as AWS KMS, HashiCorp Vault, or Google Cloud 
        KMS to manage encryption keys securely.</div>),
            (<div>Rotate encryption keys periodically to reduce the risk of key compromise.</div>),
            (<div>Use envelope encryption, where a data encryption key (DEK) encrypts data, and a key encryption 
                key (KEK) secures the DEK.</div>)]} />
    <div className="mtop15p mbot15p"><h4><b>Performance Considerations for Encryption at Rest</b></h4></div>
    <OrderList data={[(<div>Encrypting data at rest introduces minimal performance overhead when using 
        hardware-accelerated AES encryption.</div>),
            (<div>Ensure disk I/O performance is optimized by choosing SSDs and fine-tuning Kafka’s log 
                segment configuration.</div>),
            (<div>Use broker-side compression (e.g., Snappy, LZ4) before encryption to minimize storage overhead.</div>)]} />
 </div>);
};

export default Introduction;