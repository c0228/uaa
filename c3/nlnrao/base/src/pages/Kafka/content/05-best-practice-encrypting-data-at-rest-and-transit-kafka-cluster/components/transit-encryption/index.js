import React from "react";
import { Highlight } from "e-ui-react";
import OrderList from "@Components/order-list/index.js"; 

const GEN_SSL_CERTIFICATE = `openssl req -new -x509 -keyout ca-key -out ca-cert -days 365
openssl req -new -keyout broker-key -out broker-req
openssl x509 -req -CA ca-cert -CAkey ca-key -in broker-req -out broker-cert`;

const CONF_KAFKA_BROKERS = `listeners=SSL://:9093
security.inter.broker.protocol=SSL
ssl.keystore.location=/path/to/broker.keystore.jks
ssl.keystore.password=yourpassword
ssl.truststore.location=/path/to/truststore.jks
ssl.truststore.password=yourpassword`;

const CONF_PROP_CONSUMERS = `security.protocol=SSL
ssl.truststore.location=/path/to/truststore.jks
ssl.truststore.password=yourpassword`;

const TransitEncryption = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
    <div align="center"><h2 className="blog-head"><b>2. Encryption in Transit in Kafka</b></h2></div>
    <div className="mtop15p"><h4><b>Importance of Encryption in Transit</b></h4></div>
    <div>Encryption in transit ensures that data flowing between Kafka producers, brokers, 
        and consumers is secure from eavesdropping and man-in-the-middle attacks.</div>
    <div className="mtop15p"><h4><b>Enabling SSL/TLS in Kafka</b></h4></div>
    <div>Kafka supports SSL/TLS encryption for encrypting data in transit. Follow these steps to enable SSL/TLS:</div>
    <div>
        <ol>
            <li>
                <div><b>Generate SSL Certificates:</b></div>
                <OrderList data={[(<div>Use OpenSSL to generate a certificate authority (CA) and sign certificates for 
                    brokers and clients.</div>),
                    (<div>
                        <div>Example commands:</div>
                        <Highlight content={GEN_SSL_CERTIFICATE} lang="html" />
                    </div>)]} />
            </li>
            <li>
                <div><b>Configure Kafka Brokers:</b></div>
                <OrderList data={[(<div>
                    <div>Update <code><b>server.properties</b></code>:</div>
                    <Highlight content={CONF_KAFKA_BROKERS} lang="html" />
                </div>)]} />
            </li>
            <li>
                <div><b>Configure Producers and Consumers:</b></div>
                <OrderList data={[(<div>
                    <div>Update producer/consumer properties:</div>
                    <Highlight content={CONF_PROP_CONSUMERS} lang="html" />
                </div>)]} />
            </li>
        </ol>
    </div>

    <div className="mtop15p"><h4><b>Key Management for Encryption in Transit</b></h4></div>
    <OrderList data={[(<div>Use an enterprise-grade KMS to manage SSL certificates.</div>),
        (<div>Automate SSL certificate rotation using tools like Certbot or HashiCorp Vault.</div>),
        (<div>Implement mutual TLS authentication (mTLS) for an additional layer of security.</div>)]} />

    <div className="mtop15p"><h4><b>Performance Considerations for Encryption in Transit</b></h4></div>
    <OrderList data={[(<div>SSL/TLS encryption adds CPU overhead due to cryptographic computations.</div>),
        (<div>Use modern ciphers like TLS 1.3 and AES-GCM for better security and performance.</div>),
        (<div>Offload encryption to hardware (e.g., Intel AES-NI) to minimize impact on Kafka throughput.</div>)]} />
 </div>);
};

export default TransitEncryption;