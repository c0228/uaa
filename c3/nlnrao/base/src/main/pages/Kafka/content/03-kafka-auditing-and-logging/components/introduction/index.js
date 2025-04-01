import React from "react";
import { Highlight } from "e-ui-react";
import OrderList from "@MainComponents/order-list/index.js";
import { BlogIndexHeader } from "@MainComponents/blog-index-header/index.js";

const APP_LOG4J_PROPERTIES = `log4j.logger.kafka=INFO, kafkaAppender
log4j.logger.org.apache.kafka=DEBUG`;

const INTEGRATE_KERB_AUTH = `security.protocol=SASL_PLAINTEXT
sasl.kerberos.service.name=kafka`;

const CENTRAL_LOG_MANAGE = `input {
  file {
    path => "/var/log/kafka/*.log"
    start_position => "beginning"
  }
}
output {
  elasticsearch {
    hosts => ["http://localhost:9200"]
  }
}`; 

const KAFKA_LOG_RETENTION = `log.retention.hours=720 # Logs retained for 30 days
log.retention.bytes=1073741824 # 1GB per log segment`;

const Introduction = () =>{
 return (<div className="lh28p fs16p mtop15p">
    <div><i>Apache Kafka is widely used for building real-time streaming applications and data pipelines. However, organizations 
        handling sensitive data must implement robust auditing and logging mechanisms to track message access, modifications, and 
        ensure compliance with regulations such as GDPR, HIPAA, and PCI DSS.<br/><br/>
        In this blog, we will discuss best practices, implementation techniques, and tools to establish a secure, compliant Kafka 
        auditing and logging framework.</i></div>

    <div align="center" className="mtop15p"><h2 className="blog-head"><b>1. Understanding Compliance Requirements</b></h2></div>
    <div>Regulatory frameworks impose strict guidelines on how data is processed, stored, and accessed:</div>
    <OrderList data={[(<div><b>GDPR (General Data Protection Regulation):</b> Requires organizations to track and log data access, 
        modifications, and deletion requests for personal data.</div>),
        (<div><b>HIPAA (Health Insurance Portability and Accountability Act):</b> Mandates detailed auditing of protected health 
            information (PHI) access and transmission.</div>),
        (<div><b>PCI DSS (Payment Card Industry Data Security Standard):</b> Enforces logging and monitoring of cardholder data access 
            to prevent fraud.</div>)]} />
    
    <div align="center" className="mtop15p"><h2 className="blog-head"><b>2. Key Components of Kafka Auditing and Logging</b></h2></div>
    <div>To ensure compliance, a Kafka-based system must include:</div>
    <OrderList data={[(<div>Message Access Logging – Track when and how messages are accessed.</div>),
            (<div>Message Modification Auditing – Detect and log any alterations to message content.</div>),
            (<div>User Authentication & Authorization Logs – Maintain records of who accessed the system.</div>),
            (<div>Data Retention Policies – Define how long logs and messages are stored.</div>),
            (<div>Encryption & Masking – Protect sensitive data at rest and in transit.</div>)]} />

    <div align="center" className="mtop15p"><h2 className="blog-head"><b>3. Implementing Auditing in Kafka</b></h2></div>
    <div className="mtop15p">
        <BlogIndexHeader type="h4" index="a" title="Enabling Kafka Broker Logging" />
        <div>Kafka brokers generate logs that capture important events such as producer, consumer, and broker activities. 
            To enable broker logging:</div>
        <div>
            <ol>
                <li>
                    <div>Modify the <code><b>log4j.properties</b></code> file:</div>
                    <Highlight content={APP_LOG4J_PROPERTIES} lang="html" />
                </li>
                <li>
                    <div>Enable audit logs by configuring <code><b>server.properties</b></code>:</div>
                    <Highlight content={`log.dirs=/var/log/kafka`} lang="html" />
                </li>
                <li>Use external log management tools like ELK Stack (Elasticsearch, Logstash, Kibana) for analysis.</li>
            </ol>
        </div>
    </div>
    <div className="mtop15p">
        <BlogIndexHeader type="h4" index="b" title="Auditing Message Access and Modifications" />
        <div>To track message access and modifications, organizations can:</div>
        <OrderList data={[(<div>
                <div><b>Enable Kafka ACLs (Access Control Lists):</b></div>
                <Highlight content={`kafka-acls --authorizer-properties zookeeper.connect=localhost:2181 --add --allow-principal User:admin --operation Read --topic sensitive_topic`} lang="html" />
            </div>),
            (<div>
                <div><b>Use Kafka Connect with Audit Log Sink:</b></div>
                <div>Deploy Kafka Connectors that log message access details to a database or monitoring system.</div>
            </div>),
            (<div>
                <div><b>Leverage Schema Registry:</b></div>
                <div>Maintain versioned schemas to track changes in message formats and detect unauthorized modifications.</div>
            </div>)]} />
    </div>
    <div className="mtop15p">
        <BlogIndexHeader type="h4" index="c" title="User Authentication & Authorization Logging" />
        <div>To ensure secure access:</div>
        <OrderList data={[(<div>
                    <div><b>Integrate with Kerberos for authentication:</b></div>
                    <Highlight content={INTEGRATE_KERB_AUTH} lang="html" />
                </div>),
                (<div>
                    <div><b>Enable role-based access control (RBAC) with LDAP or Apache Ranger.</b></div>
                </div>),
                (<div>
                    <div><b>Log every authentication and authorization request.</b></div>
                </div>)
        ]} />      
    </div>

    <div align="center" className="mtop15p"><h2 className="blog-head"><b>4. Monitoring and Analyzing Kafka Logs</b></h2></div>
    <div className="mtop15p">
        <BlogIndexHeader type="h4" index="a" title="Centralized Log Management with ELK Stack" />
        <div>Organizations can forward Kafka logs to Elasticsearch for visualization and analysis using Logstash:</div>
        <Highlight content={CENTRAL_LOG_MANAGE} lang="html" />
    </div>
    <div className="mtop15p">
        <BlogIndexHeader type="h4" index="b" title="Real-time Alerting with Prometheus & Grafana" />
        <OrderList data={[(<div>Use <b>Prometheus Kafka Exporter</b> to monitor log events.</div>),
            (<div>Set up <b>Grafana dashboards</b> for visual insights.</div>),
            (<div>Configure <b>alerting rules</b> for suspicious activities.</div>)]} />
    </div>

    <div align="center" className="mtop15p"><h2 className="blog-head"><b>5. Data Retention and Compliance</b></h2></div>
    <div>Kafka allows setting log retention policies to ensure compliance with regulations:</div>
    <Highlight content={KAFKA_LOG_RETENTION} lang="html" />
    <div>Additionally, implement data masking for sensitive fields using Kafka Streams.</div>
 </div>);
};

export default Introduction;