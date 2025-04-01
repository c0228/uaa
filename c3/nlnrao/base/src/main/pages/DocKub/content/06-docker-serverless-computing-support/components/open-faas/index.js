import React from "react";
import OrderList from "@MainComponents/order-list/index.js";

const OpenFaaS = () =>{
 return (<div className="lh28p fs16p mtop15p">
    <div className="mtop15p"><h2 className="blog-head"><b>OpenFaaS: Simplifying Serverless on Kubernetes</b></h2></div>
    <div>OpenFaaS is another open-source serverless framework designed to run functions on Kubernetes. It is lightweight, 
        developer-friendly, and supports various programming languages.</div>
    <div className="mtop15p"><h4><b>Features of OpenFaaS:</b></h4></div>
    <div>
        <ol>
            <li><b>Function as a Service (FaaS) –</b> Enables developers to run code as functions.</li>
            <li><b>Event-driven Scaling –</b> Functions scale up and down based on events.</li>
            <li><b>Simple CLI and UI –</b> Provides easy deployment and monitoring tools.</li>
            <li><b>Docker-based –</b> Functions are packaged as Docker containers.</li>
            <li><b>Multi-cloud Compatibility –</b> Runs on Kubernetes and other container orchestration platforms.</li>
        </ol>
    </div>
    <div className="mtop15p"><h4><b>Advantages of OpenFaaS:</b></h4></div>
    <OrderList data={[(<div><b>Ease of Use:</b> Simple deployment and function management.</div>),
                (<div><b>Lower Resource Usage:</b> More lightweight than Knative.</div>),
                (<div><b>Language Agnostic:</b> Supports multiple programming languages.</div>),
                (<div><b>Faster Cold Starts:</b> Optimized for quick startup times.</div>)]} />
    <div className="mtop15p"><h4><b>Disadvantages of OpenFaaS:</b></h4></div>
    <OrderList data={[(<div><b>Limited Advanced Features:</b> Does not provide as many built-in enterprise features as Knative.</div>),
                (<div><b>Manual Scaling Configurations:</b> Requires additional configurations for complex autoscaling.</div>),
                (<div><b>Security Considerations:</b> Needs proper configurations for access control and security.</div>)]} />
    <div className="mtop15p"><h2 className="blog-head"><b>Choosing Between Knative and OpenFaaS</b></h2></div>
    <div>The choice between Knative and OpenFaaS depends on the specific needs of the application.</div>
    <div className="table-responsive">
        <table className="table">
            <thead>
                <tr style={{ backgroundColor:'#eee' }}>
                    <td><b>Feature</b></td>
                    <td><b>Knative</b></td>
                    <td><b>OpenFaas</b></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><b>Complexity</b></td>
                    <td>High</td>
                    <td>Low</td>
                </tr>
                <tr>
                    <td><b>Scaling</b></td>
                    <td>Automatic</td>
                    <td>Event-driven</td>
                </tr>
                <tr>
                    <td><b>Cold Start</b></td>
                    <td>Optimized</td>
                    <td>Faster</td>
                </tr>
                <tr>
                    <td><b>Integration</b></td>
                    <td>A CI/CD, Service Mesh</td>
                    <td>Simplier Deployment</td>
                </tr>
                <tr>
                    <td><b>Use Case</b></td>
                    <td>Enterprise workloads</td>
                    <td>Lighweight serverless functions</td>
                </tr>
            </tbody>
        </table>
    </div>
 </div>);
};

export default OpenFaaS;