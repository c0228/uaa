import React from "react";

const Security = () =>{
 return (<div className="lh28p fs16p mtop15p">
    <div align="center" className="mtop15p"><h2 className="blog-head"><b>1. Security in the Software Development Lifecycle (SDLC)</b></h2></div>
    <div className="mtop15p">Security testing should not be an afterthought; it should be embedded within every stage of the 
        Software Development Lifecycle (SDLC). Below is a high-level overview of how security can be integrated at each phase:</div>
    <div>
        <ol>
            <li className="mtop15p"><b>Requirement Analysis:</b> Define security requirements, compliance needs, and threat models.</li>
            <li className="mtop15p"><b>Design:</b> Incorporate secure design principles like the principle of least privilege (PoLP) and threat modeling.</li>
            <li className="mtop15p"><b>Development:</b> Use secure coding practices and static code analysis.</li>
            <li className="mtop15p"><b>Testing:</b> Perform dynamic and static security testing.</li>
            <li className="mtop15p"><b>Deployment:</b> Ensure secure configuration management and conduct penetration testing.</li>
            <li className="mtop15p"><b>Maintenance and Monitoring:</b> Continuously monitor for vulnerabilities and respond to incidents in real time.</li>
        </ol>
    </div>
 </div>);
};

export default Security;