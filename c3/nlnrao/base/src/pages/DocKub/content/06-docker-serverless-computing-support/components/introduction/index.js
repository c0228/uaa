import React from "react";
import OrderList from "@Components/order-list/index.js";

const Introduction = () =>{
 return (<div className="lh28p fs16p mtop15p">
    <div className="mbot15p"><i>Serverless computing has revolutionized how applications are deployed and managed. It 
        enables developers to focus on writing code without worrying about infrastructure management. Kubernetes, originally 
        designed for container orchestration, has evolved to support serverless workloads through various frameworks, including 
        Knative and OpenFaaS. This blog explores how Kubernetes enables serverless computing and the advantages and disadvantages 
        of using Knative and OpenFaaS.</i></div>
    <div align="center" className="mtop15p"><h2 className="blog-head"><b>Understanding Serverless Computing</b></h2></div>
    <div className="mtop15p">Serverless computing allows developers to run applications without managing servers. In this model, cloud providers 
        handle resource allocation, scaling, and maintenance, enabling a pay-as-you-go approach where users are only billed 
        for the compute resources their applications consume.</div>
    <div className="mtop15p"><h4><b>Key Characteristics of Serverless Computing:</b></h4></div>
    <div>
        <ol>
            <li><b>Automatic Scaling –</b> Workloads scale up and down based on demand.</li>
            <li><b>Event-driven Execution –</b> Functions execute in response to events.</li>
            <li><b>Abstraction of Infrastructure –</b> Developers do not manage servers.</li>
            <li><b>Cost Efficiency –</b> Users pay only for actual usage.</li>
            <li><b>Rapid Deployment –</b> Faster iteration and release cycles.</li>
        </ol>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>How Kubernetes Supports Serverless Computing?</b></h2></div>
    <div>Kubernetes provides a powerful foundation for serverless computing through its native features like autoscaling, 
        service discovery, and workload management. However, Kubernetes alone does not offer a fully serverless experience, 
        which is why projects like Knative and OpenFaaS bridge the gap by providing serverless capabilities on top of 
        Kubernetes.</div>
    <div className="mtop15p"><h4><b>Features of Kubernetes that Support Serverless:</b></h4></div>
    <OrderList data={[(<div><b>Horizontal Pod Autoscaler (HPA):</b> Automatically scales pods based on CPU/memory utilization.</div>),
            (<div><b>Custom Resource Definitions (CRDs):</b> Allows extending Kubernetes to support serverless frameworks.</div>),
            (<div><b>Event-driven Architecture:</b> Can be integrated with messaging systems like Kafka.</div>),
            (<div><b>Service Mesh Integration:</b> Enables secure, scalable communication between microservices.</div>)]} />
    
    












 </div>);
};

export default Introduction;