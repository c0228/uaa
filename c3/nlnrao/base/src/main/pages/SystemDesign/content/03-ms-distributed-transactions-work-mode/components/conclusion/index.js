import React from "react";

const Conclusion = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
    <div className="mtop15p mbot15p">Distributed transactions in microservices require trade-offs between consistency, performance, 
        and fault tolerance. While 2PC provides strong consistency, it comes at the cost of scalability. The Saga pattern 
        offers flexibility with eventual consistency, making it a preferred choice for high-performance distributed systems. 
        Choosing the right approach depends on business requirements, system architecture, and performance needs.</div>
 </div>);
};

export default Conclusion;