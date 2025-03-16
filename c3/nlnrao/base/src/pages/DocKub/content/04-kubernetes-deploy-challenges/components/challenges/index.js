import React from "react";

const Challenges = () =>{
 return (<div className="lh28p fs16p mtop15p">
    <div align="center" className="mtop15p"><h2 className="blog-head"><b>Challenges in Deploying and Managing Kubernetes at the Edge</b></h2></div>
    <div>
        <ol>
            <li className="mtop15p">
                <div><b>Resource Constraints</b></div>
                <div>Edge devices typically have limited CPU, memory, and storage compared to cloud data centers. Running a full 
                    Kubernetes cluster on resource-constrained hardware can be challenging.</div>
                <div><b>Solutions:</b> Lightweight Kubernetes distributions like MicroK8s and K3s minimize resource usage while 
                maintaining core Kubernetes functionalities.</div>
            </li>
            <li className="mtop15p">
                <div><b>Network Connectivity Issues</b></div>
                <div>Edge environments often experience intermittent or unreliable network connections, making communication 
                    between nodes difficult.</div>
                <div><b>Solution:</b> Kubernetes-based solutions like KubeEdge enable offline operations by running workloads on 
                edge devices even when disconnected from the cloud.</div>
            </li>
            <li className="mtop15p">
                <div><b>Security Concerns</b></div>
                <div>Edge computing environments are more vulnerable to security threats due to their distributed nature and 
                    physical accessibility.</div>
                <div><b>Solution:</b> Secure boot mechanisms, encrypted communications, and zero-trust security models help 
                    protect edge deployments.</div>
            </li>
            <li className="mtop15p">
                <div><b>Cluster Management Complexity</b></div>
                <div>Managing multiple edge nodes across geographically distributed locations adds operational overhead.</div>
                <div><b>Solution:</b> Automated orchestration tools, remote monitoring, and centralized control planes help 
                streamline cluster management.</div>
            </li>
        </ol>
    </div>
 </div>);
};

export default Challenges;