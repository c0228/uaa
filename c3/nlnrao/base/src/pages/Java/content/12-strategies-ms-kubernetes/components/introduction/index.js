import React from "react";
import OrderList from '@Components/order-list/index.js';

const Introduction = () =>{
 return (<div className="lh18p fs16p mtop15p">
    <div><i>Deploying Spring Boot microservices on Kubernetes involves multiple steps, from containerizing applications to 
        configuring networking and observability. Kubernetes provides a scalable and efficient 
        way to manage microservices with automated deployments, scaling, and service discovery.</i></div>
    <div className="mtop15p"><h2 className="blog-head"><b>Prerequisites</b></h2></div>
    <div>
        <div>Before we begin, ensure that you have:</div>
        <OrderList data={[(<div>A Spring Boot microservice application</div>),
            (<div>Docker installed and configured</div>),
            (<div>Kubernetes cluster set up (Minikube, AKS, EKS, or GKE)</div>),
            (<div>kubectl CLI installed</div>),
            (<div>Helm (optional, for managing Kubernetes applications)</div>)]} />
    </div>
 </div>);
};

export default Introduction;