import React from "react";
import { Highlight } from "e-ui-react";
import { BlogIndexHeader } from "@MainComponents/blog-index-header/index.js";
import OrderList from "@MainComponents/order-list/index.js";

const APP_CONFIG_EXAMPLE = `listeners=SASL_SSL://0.0.0.0:9093
security.inter.broker.protocol=SASL_SSL
sasl.enabled.mechanisms=SCRAM-SHA-256`;

const CONFIG_READ_ACCESS = `kafka-acls --authorizer-properties zookeeper.connect=localhost:2181 \
--add --allow-principal User:consumer-user --operation Read --topic my-secure-topic`;

const Introduction = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
    <div><i>Apache Kafka is a powerful event-streaming platform used widely in distributed systems, but it can be a 
        target for security threats if not properly hardened. This guide outlines best practices for securing a Kafka 
        cluster, including authentication, authorization, encryption, network security, monitoring, vulnerability scanning, 
        penetration testing, and security patching.</i></div>

    <div align="center" className="mtop15p"><h2 className="blog-head"><b>1. Authentication and Authorization</b></h2></div>
    
    <div className="mtop15p">
    <BlogIndexHeader type="h4" index="1.1" title="Enabling Authentication" />
    <div className="padLeft5p">
        <div>Authentication ensures that only legitimate users and applications can access the Kafka cluster. Configure 
            authentication using:</div>
        <OrderList data={[(<div><b>SSL/TLS Certificates:</b> Secure communication with SSL encryption and client 
            authentication.</div>),
            (<div>
                <div><b>SASL (Simple Authentication and Security Layer):</b> Implement authentication mechanisms such as:</div>
                <OrderList data={[(<div>SCRAM (Salted Challenge Response Authentication Mechanism)</div>),
                        (<div>Kerberos (for enterprise-grade security)</div>),
                        (<div>OAuth (for cloud-based authentication)</div>)]} />
            </div>)]} />
        <div className="mtop15p"><b>Configuration Example:</b></div>
        <div>Enable authentication in <code><b>server.properties</b></code>:</div>
        <Highlight content={APP_CONFIG_EXAMPLE} lang="html" />
    </div>
    </div>

    <div className="mtop15p">
    <BlogIndexHeader type="h4" index="1.2" title="Implementing Authorization" />
    <div className="padLeft5p">
        <div>Authorization ensures that only permitted users can access or modify Kafka resources. Use 
            <b>Kafka Access Control Lists (ACLs)</b> to enforce strict access control.</div>
        <div className="mtop15p"><b>Configuration Example:</b></div>
        <div>Grant read access to a topic:</div>
        <Highlight content={CONFIG_READ_ACCESS} lang="html" />
    </div>
    </div>

 </div>);
};

export default Introduction;