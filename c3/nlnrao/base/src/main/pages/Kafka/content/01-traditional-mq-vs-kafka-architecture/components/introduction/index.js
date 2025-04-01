import React from "react";

const Introduction = () =>{
 return (<div className="lh28p fs16p mtop15p">
    <div><i>In the world of distributed messaging systems, Apache Kafka and traditional message queues like RabbitMQ and 
        ActiveMQ serve as crucial middleware for handling real-time data flow between applications. While they share some 
        fundamental messaging principles, their architectures and operational models differ significantly, impacting their 
        scalability, fault tolerance, and message ordering guarantees. Understanding these differences is essential for 
        selecting the right tool for your use case.</i></div>
    <div className="mtop15p"><h2 className="blog-head"><b>Kafka's Architecture: Topics, Partitions, and Brokers</b></h2></div>
    <div className="mtop15p"><h4><b>Topics and Partitions</b></h4></div>
    <div>Apache Kafka organizes messages into topics, which act as logical containers for messages. Each topic is further 
        divided into <b>partitions</b>, which enable parallelism and scalability by distributing messages across multiple brokers. 
        Messages within a partition are ordered and assigned an incremental offset.</div>
    <div className="mtop15p"><h4><b>Brokers and Clusters</b></h4></div>
    <div>Kafka brokers are responsible for storing, retrieving, and serving messages. A Kafka cluster consists of multiple brokers, 
        ensuring redundancy and fault tolerance. A partition is assigned to one leader broker and replicated to multiple follower 
        brokers, providing high availability.</div>
    <div className="mtop15p"><h4><b>Consumer Groups and Offsets</b></h4></div>
    <div>Kafka consumers belong to <b>consumer groups</b>, where each consumer in a group reads from a unique set of partitions.
     This parallel consumption model improves throughput and scalability. Offsets track message consumption, allowing consumers 
     to reprocess messages as needed.</div>
 </div>);
};

export default Introduction;