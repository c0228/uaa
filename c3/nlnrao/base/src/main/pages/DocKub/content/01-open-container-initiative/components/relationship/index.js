import React from "react";
import OrderList from "@MainComponents/order-list/index.js";

const Relationship = () =>{
 return (<div className="lh28p fs16p mtop15p">
    <div align="center" className="mtop15p"><h2 className="blog-head"><b>Relationship Between OCI and Container Runtimes</b></h2></div>
    <div className="mtop15p">
    Container runtimes are responsible for running containers as per the OCI specifications. There are two types of 
    container runtimes:
    <ol>
        <li><b>Low-level runtimes (OCI-compliant):</b> Responsible for creating and running container processes.</li>
        <li><b>High-level runtimes:</b> Provide additional management capabilities and work as an interface 
            between orchestration tools and low-level runtimes.</li>
    </ol>
    </div>
    <div className="mtop15p"><h4><b>Popular OCI-Compliant Runtimes</b></h4></div>
    <div>
        <ol>
            <li className="mtop15p">
                <div><b>runc</b></div>
                <div><code><b>runc</b></code> is a lightweight, CLI-based low-level runtime developed by Docker 
                     and later donated to OCI. It directly follows the OCI Runtime Specification.</div>
                <div className="list-group">
                    <div className="list-group-item" style={{ backgroundColor:'#eee' }}>
                        <div align="center"><b>How <code>runc</code> relates to Docker?</b></div>
                        <div>Docker originally used <code><b>runc</b></code> internally to create and run containers. 
                        However, it later adopted a more modular architecture with <code><b>containerd</b></code>.</div>
                    </div>
                    <div className="list-group-item" style={{ backgroundColor:'#eee' }}>
                        <div><b>Use Cases:</b></div>
                        <div>
                            <OrderList data={[(<div>Running minimalistic containers in high-performance environments.</div>),
                                (<div>Integrating into other high-level runtimes.</div>)]} />
                        </div>
                    </div>
                </div>
            </li>
            <li className="mtop15p">
                <div><b>containerd</b></div>
                <div><code><b>containerd</b></code> is a higher-level container runtime developed by Docker and later contributed 
                to the CNCF. It abstracts container lifecycle management (image transfer, execution, networking, and storage) 
                while still relying on <code><b>runc</b></code>.</div>
                <div className="list-group">
                    <div className="list-group-item" style={{ backgroundColor:'#eee' }}>
                        <div align="center"><b>How <code><b>containerd</b></code> relates to Docker?</b></div>
                        Docker Engine uses <code><b>containerd</b></code> to manage containers internally, making it a crucial 
                        part of the Docker ecosystem.
                    </div>
                    <div className="list-group-item" style={{ backgroundColor:'#eee' }}>
                        <div><b>Use Cases:</b></div>
                        <OrderList data={[(<div>Kubernetes container runtime.</div>),
                            (<div>Enterprise container management.</div>),
                            (<div>Efficient CI/CD pipelines.</div>)]} />
                    </div>
                </div>
            </li>
            <li className="mtop15p">
                <div><b>CRI-O</b></div>
                <div><code><b>CRI-O</b></code> is an alternative container runtime specifically designed for Kubernetes. 
                It follows the <b>Container Runtime Interface (CRI)</b> and works with Kubernetes without needing Docker.</div>
                <div className="list-group">
                    <div className="list-group-item" style={{ backgroundColor:'#eee' }}>
                        <div align="center"><b>How it relates to Docker?</b></div>
                        <div>Unlike <code><b>containerd</b></code>, CRI-O does not depend on Docker. It provides a minimal, 
                        Kubernetes-native runtime while supporting OCI images and leveraging <code><b>runc</b></code> for execution.</div>
                    </div>
                    <div className="list-group-item" style={{ backgroundColor:'#eee' }}>
                        <div><b>Use Cases:</b></div>
                        <OrderList data={[(<div>Lightweight Kubernetes clusters.</div>),
                                (<div>Secure and minimal runtime environments.</div>)]} />
                    </div>
                </div>
            </li>
        </ol>
    </div>
 </div>);
};

export default Relationship;