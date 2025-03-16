import React from "react";

const Introduction = () =>{
 return (<div className="lh28p fs16p mtop15p">
    <div><i>The Open Container Initiative (OCI) is an open governance structure formed in 2015 by the Linux Foundation to 
        establish standard specifications for container technology. The primary goal of OCI is to ensure interoperability and 
        avoid fragmentation in the container ecosystem. Before OCI, containerization was dominated by proprietary formats, leading 
        to compatibility issues across platforms.</i></div>
    <div className="mtop15p"><h4><b>Key OCI Specifications</b></h4></div>
    <div className="mtop15p">OCI has defined two major specifications:</div>
    <div>
        <ol>
            <li><b>OCI Runtime Specification:</b> Defines how a container runtime should run a container.</li>
            <li><b>OCI Image Specification:</b> Establishes how container images should be created, stored, 
            and distributed.</li>
        </ol>
    </div>
    <div>These specifications allow different runtimes and container tools to work seamlessly across various platforms.</div>
 </div>);
};

export default Introduction;