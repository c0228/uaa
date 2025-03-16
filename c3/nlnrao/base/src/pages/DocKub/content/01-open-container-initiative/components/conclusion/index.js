import React from "react";

const Conclusion = () =>{
 return (<div className="lh28p fs16p mtop15p">
    <div><h2 className="blog-head"><b>Conclusion</b></h2></div>
    <div>OCI has standardized container runtime and image specifications, ensuring interoperability among different container 
        runtimes. While <code><b>runc</b></code> is the foundation for container execution, <code><b>containerd</b></code> and 
        <code><b> CRI-O</b></code> provide higher-level abstractions suited for Docker and Kubernetes, respectively. The choice 
        of runtime depends on performance, security, and orchestration needs, with <code><b>CRI-O</b></code> being ideal for 
        Kubernetes, <code><b>containerd</b></code> for Docker, and <code><b>runc</b></code> for low-level execution control.</div>
 </div>);
};

export default Conclusion;