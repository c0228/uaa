import React from "react";
import OrderList from "@MainComponents/order-list/index.js";

const Introduction = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
    <div><i>With the rapid evolution of data management in distributed systems, the concept of polyglot persistence 
        has gained traction. It refers to the practice of using different types of databases within a system based on 
        specific requirements rather than relying on a single database for all needs. This approach allows developers to 
        optimize for scalability, consistency, performance, and complexity.<br/><br/>
        In this blog, we will explore when to use <b>SQL</b>, <b>NoSQL</b>, or <b>NewSQL</b> in a distributed environment, 
        analyzing their impact on consistency, performance, and complexity.</i></div>
    <div className="mtop15p"><h2 className="blog-head"><b>Understanding Polyglot Persistence</b></h2></div>
    <div className="mtop15p">Polyglot persistence acknowledges that a single database model may not be suitable for every 
        component of an application. For example, an e-commerce platform may use:</div>
    <OrderList data={[(<div><b>SQL</b> for transactional consistency in orders and payments.</div>),
        (<div><b>NoSQL</b> for flexible product catalogs and customer reviews.</div>),
        (<div><b>NewSQL</b> for distributed scalability while maintaining strong consistency in financial transactions.</div>)]} />
    <div>The goal is to leverage each database’s strengths while minimizing weaknesses in different parts of the system.</div>
 </div>);
};

export default Introduction;