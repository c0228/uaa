import React from "react";
import OrderList from "@MainComponents/order-list/index.js";

const Knative = () =>{
 return (<div className="lh28p fs16p mtop15p">
    <div className="mtop15p"><h2 className="blog-head"><b>Knative: Serverless Framework for Kubernetes</b></h2></div>
    <div className="mtop15p">Knative is an open-source serverless platform built on Kubernetes that provides a 
        consistent approach to deploying and managing serverless workloads.</div>
    <div className="mtop15p"><h4><b>Features of Knative:</b></h4></div>
    <div>
        <ol>
            <li>Knative Serving – Provides the ability to deploy and auto-scale applications.</li>
            <li>Knative Eventing – Manages event-driven execution of workloads.</li>
            <li>Scale to Zero – Applications scale down to zero when not in use.</li>
            <li>Built-in Traffic Management – Supports canary deployments and blue-green releases.</li>
            <li>Extensibility – Can integrate with CI/CD pipelines and service mesh frameworks.</li>
        </ol>
    </div>

    <div className="mtop15p"><h4><b>Advantages of Knative:</b></h4></div>
    <OrderList data={[(<div><b>Seamless Kubernetes Integration:</b> Works directly with Kubernetes resources.</div>),
                (<div><b>Efficient Scaling:</b> Scales workloads automatically based on demand.</div>),
                (<div><b>Standardized API:</b> Provides a unified API for deploying serverless applications.</div>),
                (<div><b>Multi-cloud Support:</b> Can be used across different cloud providers.</div>)]} />

    <div className="mtop15p"><h4><b>Disadvantages of Knative:</b></h4></div>
    <OrderList data={[(<div><b>Complex Setup:</b> Requires additional configuration on Kubernetes.</div>),
                (<div><b>Resource Intensive:</b> Uses more resources compared to some serverless alternatives.</div>),
                (<div><b>Steeper Learning Curve:</b> Requires knowledge of Kubernetes internals.</div>)]} />

 </div>);





};

export default Knative;