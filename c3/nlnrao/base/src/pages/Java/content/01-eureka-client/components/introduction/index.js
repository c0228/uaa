import React from "react";
import OrderList from "@Components/order-list/index.js";

const Introduction = () =>{
 return (<div className="lh28p fs16p">
    <div className="mtop15p"><i>Spring Boot provides built-in support for microservices architecture, and one of its key 
        components is <b>Spring Cloud Netflix Eureka</b>. Eureka is a service registry that helps in dynamic 
        service discovery, load balancing, and fault tolerance.</i></div>
    <div className="mtop15p"><h2 className="blog-head"><b>Why use Eureka?</b></h2></div>
    <div className="mtop15p">
        <OrderList data={[(<div><b>Service Discovery:</b> Automatically registers and discovers microservices.</div>),
            (<div><b>Load Balancing:</b> Distributes traffic efficiently among service instances.</div>),
            (<div><b>Fault Tolerance:</b> Ensures availability even if some services go down.</div>),
            (<div><b>Decentralized Architecture:</b> Each service can act as a client and a server.</div>)]} />
    </div>
 </div>);
};

export default Introduction;