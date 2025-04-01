import React from "react";
import OrderList from "@Components/order-list/index.js";

const TraditionalMsg = () =>{
 return (<div className="lh28p fs16p mtop15p">

    <div className="mtop15p"><h2 className="blog-head"><b>Traditional Message Queues: RabbitMQ and ActiveMQ</b></h2></div>
    <div className="mtop15p"><h4><b>Message Queues and Exchanges</b></h4></div>
    <div>Traditional message queues use a <b>queue-based architecture</b>, where producers send messages to queues, and 
    consumers retrieve them. RabbitMQ uses <b>exchanges</b> to route messages to the appropriate queue based on defined rules.</div>
    <div className="mtop15p"><h4><b>Brokers and Clustering</b></h4></div>
    <div>RabbitMQ and ActiveMQ rely on a central broker to manage message delivery. While clustering is supported, 
    scaling requires more careful design compared to Kafka’s distributed nature.</div>
    <div className="mtop15p"><h4><b>Acknowledgments and Delivery Guarantees</b></h4></div>
    <div>Traditional message queues provide <b>acknowledgment-based delivery</b>, ensuring reliable message processing. 
    Consumers acknowledge messages after processing, preventing loss but requiring additional overhead.</div>

    <div className="mtop15p"><h2 className="blog-head"><b>Comparison: Kafka vs. Traditional Message Queues</b></h2></div>
    <div className="mtop15p"><h4><b>Scalability</b></h4></div>
    <OrderList data={[(<div><b>Kafka</b> scales horizontally by adding brokers and partitions. Parallel processing allows high 
        throughput for real-time data streaming.</div>),
            (<div><b>RabbitMQ/ActiveMQ</b> scale vertically and require clustering configurations for horizontal scaling, often 
                leading to bottlenecks in large-scale deployments.</div>)]} />
    <div className="mtop15p"><h4><b>Fault Tolerance</b></h4></div>
    <OrderList data={[(<div><b>Kafka</b> provides built-in replication and leader-follower models to ensure data durability 
        and high availability.</div>),
        (<div><b>RabbitMQ/ActiveMQ</b> rely on mirrored queues and failover strategies, which can introduce complexity.</div>)]} />
    <div className="mtop15p"><h4><b>Message Ordering</b></h4></div>
    <OrderList data={[(<div><b>Kafka</b> guarantees ordering within a partition but not across partitions.</div>),
        (<div><b>RabbitMQ/ActiveMQ</b> ensure strict ordering per queue but can face limitations in distributed setups.</div>)]} />

    <div className="mtop15p"><h2 className="blog-head"><b>When to Choose Kafka Over Traditional Message Queues</b></h2></div>
    <OrderList data={[(<div><b>Event-driven architectures and real-time analytics</b></div>),
        (<div><b>Log aggregation and stream processing</b></div>),
        (<div><b>High-throughput applications requiring horizontal scalability</b></div>),
        (<div><b>Decoupled microservices needing replay capabilities</b></div>)]} />
    
    <div className="mtop15p"><h2 className="blog-head"><b>When to Choose Traditional Message Queues Over Kafka</b></h2></div>
    <OrderList data={[(<div><b>Request-response communication in microservices</b></div>),
            (<div><b>Transactional message processing with strict ordering</b></div>),
            (<div><b>Low-latency and guaranteed delivery scenarios</b></div>),
            (<div><b>Lightweight messaging for small-scale applications</b></div>)]} />
 </div>);
};

export default TraditionalMsg;