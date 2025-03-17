import React from "react";
import OrderList from "@Components/order-list/index.js";

const KeyTechnologies = () =>{
 return (<div className="lh28p fs16p mtop15p">
    <div className="mtop15p"><h2 className="blog-head"><b>Key Technologies Enabling Serverless Containers</b></h2></div>
    <div>To effectively run Docker containers in a serverless manner, advanced lightweight virtualization and sandboxing 
        technologies are required. Two notable solutions are <b>Firecracker</b> and <b>Kata Containers</b>.</div>
    <div className="mtop15p"><h4><b>Firecracker: Lightweight Virtualization for Serverless Computing</b></h4></div>
    <div>Firecracker is a microVM technology developed by AWS to provide lightweight virtualization for serverless 
        workloads. It is widely used in AWS Lambda and AWS Fargate.</div>
    <div className="mtop15p"><b>Features of Firecracker:</b></div>
    <OrderList data={[(<div><b>MicroVMs:</b> Firecracker creates micro virtual machines (microVMs) that provide strong 
        isolation with minimal overhead.</div>),
        (<div><b>Fast Boot Time:</b> Unlike traditional VMs, Firecracker microVMs start in milliseconds, enabling rapid scaling.</div>),
        (<div><b>Secure by Design:</b> With a minimal attack surface, Firecracker enhances security in multi-tenant environments.</div>),
        (<div><b>Resource Efficiency:</b> Firecracker consumes fewer resources compared to full-fledged VMs, making it suitable 
            for high-density deployments.</div>)]} />
    <div className="mtop15p"><b>Firecracker with Docker:</b></div>
    <div>Firecracker can be integrated with Docker to run containers inside microVMs, combining container flexibility 
        with VM-level security. This approach is particularly useful for running untrusted workloads securely.</div>
 </div>);
};

export default KeyTechnologies;