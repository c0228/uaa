import React from "react";
import OrderList from "@MainComponents/order-list/index.js";

const Introduction = () =>{
 return (<div className="lh28p fs16p mtop15p">
    <div><i>In the world of microservices, an API Gateway plays a crucial role in managing, securing, and orchestrating API 
        requests between clients and backend services. Among the many API Gateway solutions available, 
        <b>Spring Cloud Gateway</b> and <b>Netflix Zuul</b> have
          been widely used in Java-based microservices architectures. However, as modern requirements 
        evolve, it becomes important to compare these two options and determine the best choice for a contemporary 
        microservices ecosystem.</i></div>
    <div className="mtop15p"><h2 className="blog-head"><b>What is an API Gateway?</b></h2></div>
    <div className="mtop15p">An <b>API Gateway</b> is a server that acts as an intermediary between clients and backend services, 
    offering features such as:
        <OrderList data={[(<div>Request routing</div>),
                (<div>Load balancing</div>),
                (<div>Authentication and Authorization</div>),
                (<div>Rate limiting</div>),
                (<div>Monitoring and logging</div>),
                (<div>Caching and transformation</div>)]} />
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>What is Zuul?</b></h2></div>
    <div className="mtop15p">Zuul, developed by Netflix, is a <b>Java-based API Gateway</b> designed for handling dynamic 
    routing, monitoring, security, and resiliency. It is often used in <b>Netflix OSS (Open Source Software)</b> microservices 
    architectures.</div>

    <div className="mtop15p"><h4><b>Key Features of Zuul:</b></h4></div>
    <div className="mtop15p">
        <ol>
            <li><b>Routing -</b> Routes requests to the appropriate microservice.</li>
            <li><b>Filters -</b> Offers pre-processing and post-processing filters.</li>
            <li><b>Load Balancing -</b> Works with Ribbon for client-side load balancing.</li>
            <li><b>Security -</b> Provides authentication and authorization mechanisms.</li>
            <li><b>Rate Limiting -</b> Controls API request rates.</li>
            <li><b>Monitoring & Metrics -</b> Collects request and response metrics for monitoring.</li>
        </ol>
    </div>

    <div className="mtop15p"><h4><b>Limitations of Zuul:</b></h4></div>
    <div><OrderList data={[(<div><b>Zuul 1 (Older version) is blocking -</b> It uses traditional servlet-based 
    blocking I/O, making it inefficient for high-performance applications.</div>),
        (<div><b>Lack of advanced reactive features -</b> Modern applications require non-blocking, reactive capabilities.</div>),
        (<div><b>Dependent on Ribbon -</b> Ribbon is now deprecated, which affects Zuul’s effectiveness in load balancing.</div>),
        (<div><b>Limited support for WebSockets -</b> WebSockets and SSE (Server-Sent Events) require additional configurations.</div>)]} /></div>
 
 </div>);
};

export default Introduction