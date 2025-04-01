import React from "react";
import OrderList from "@MainComponents/order-list/index.js";

const Introduction = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
    <div><i>In modern distributed systems, data flows between multiple services, databases, and clients. As systems evolve, 
        changes to data structures and schemas become inevitable. However, improper handling of these changes can lead to 
        service disruptions, compatibility issues, and data corruption. Data versioning and schema evolution strategies are 
        crucial to maintaining system integrity and ensuring seamless service interoperability.</i></div>

    <div className="mtop15p"><h2 className="blog-head"><b>Understanding Data Versioning</b></h2></div>
    <div className="mtop15p">Data versioning involves maintaining different versions of data structures to ensure compatibility 
        across services. This helps in scenarios where multiple microservices interact with evolving data schemas. The key goals 
        of data versioning include:</div>
    <OrderList data={[(<div><b>Backward Compatibility –</b> Ensuring older services can still process newer data formats.</div>),
        (<div><b>Forward Compatibility –</b> Allowing new services to read older data structures.</div>),
        (<div><b>Schema Evolution –</b> Gradual updates to schemas without breaking existing functionalities.</div>)]} />
        
 </div>);
};

export default Introduction;