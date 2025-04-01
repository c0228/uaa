import React from "react";
import OrderList from "@Components/order-list/index.js";

const Solutions = () =>{
 return (<div className="lh28p fs16p mtop15p">
    <div className="mtop15p"><h2 className="blog-head"><b>Solutions: KubeEdge and MicroK8s</b></h2></div>

    <div className="mtop15p"><h4><b>KubeEdge</b></h4></div>
    <div className="padLeft5p">
    <div>KubeEdge is an open-source project that extends Kubernetes for edge computing. It enables edge nodes 
        to function independently while syncing with the cloud when needed.</div>
    <div><b>Key Features:</b></div>
    <OrderList data={[(<div><b>Offline Mode:</b> Edge nodes can operate without continuous cloud connectivity.</div>),
        (<div><b>Lightweight Footprint:</b> Reduces the computational load on edge devices.</div>),
        (<div><b>IoT Integration:</b> Supports MQTT and other IoT protocols for device communication.</div>)]} />
    </div>

    <div className="mtop15p"><h4><b>MicroK8s</b></h4></div>
    <div className="padLeft5p">
    <div>MicroK8s is a lightweight, single-node Kubernetes distribution optimized for IoT and edge environments. 
        It simplifies Kubernetes deployment on constrained devices.</div>
    <div><b>Key Features:</b></div>
    <OrderList data={[(<div><b>Minimal Resource Consumption:</b> Runs on low-end hardware like Raspberry Pi.</div>),
        (<div><b>Built-in Add-ons:</b> Includes DNS, storage, and monitoring capabilities.</div>),
        (<div><b>Easy Deployment:</b> Offers a simple installation process with minimal configuration.</div>)]} />
    </div>
 </div>);
};

export default Solutions;