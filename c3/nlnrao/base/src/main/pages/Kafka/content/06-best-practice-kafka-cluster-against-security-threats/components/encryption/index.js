import React from "react";
import { Highlight } from "e-ui-react";
import { BlogIndexHeader } from "@Components/blog-index-header/index.js";
import OrderList from "@Components/order-list/index.js";

const APP_SERVER_PROP = `ssl.keystore.location=/etc/kafka/keystore.jks
ssl.keystore.password=yourpassword
ssl.truststore.location=/etc/kafka/truststore.jks
ssl.truststore.password=yourpassword`;

const Encryption = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
    <div align="center" className="mtop15p"><h2 className="blog-head"><b>2. Encryption</b></h2></div>

    <div className="mtop15p">
        <BlogIndexHeader type="h4" index="2.1" title="Encrypting Data in Transit" />
        <div className="padLeft5p">
            <div>Use <b>SSL/TLS</b> to encrypt data transmitted between Kafka brokers, clients, and ZooKeeper.</div>
            <div className="mtop15p"><b>Steps to Enable SSL:</b></div>
            <div>
                <ol>
                    <li>Generate a self-signed certificate or obtain one from a trusted Certificate Authority (CA).</li>
                    <li>Configure Kafka brokers to use the certificate.</li>
                    <li>Update client configurations to use SSL.</li>
                </ol>
            </div>
            <div className="mtop15p">Example <code><b>server.properties</b></code>:</div>
            <Highlight content={APP_SERVER_PROP} lang="html" />
        </div>
    </div>

    <div className="mtop15p">
    <BlogIndexHeader type="h4" index="2.2" title="Encrypting Data at Rest" />
    <div className="padleft5p">Kafka does not provide built-in data encryption at rest, so use disk encryption (e.g., LUKS, BitLocker) 
        and secure file systems like EFS (Elastic File System) for AWS deployments.</div>
    </div>

 </div>);
};

export default Encryption;