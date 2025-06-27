import React from "react";
import { Card } from "e-ui-react";

const Conclusion = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
    <div className="mtop15p">
        <div><b>Practical Byzantine Fault Tolerance (PBFT)</b> is a foundational algorithm in the world of secure, 
        distributed systems. Unlike energy-hungry alternatives, PBFT is:</div>
        <div>
            <ul>
                <li><b>Fast and deterministic</b></li>
                <li><b>Ideal for enterprise blockchains</b></li>
                <li><b>Well-suited for systems with a limited number of trusted nodes</b></li>
            </ul>
        </div>
    </div>
    <div className="mtop15p">Though it doesn't scale well for <b>thousands of nodes</b>, PBFT is <b>still relevant</b> for 
    consortium and permissioned networks that need trust, speed, and fault tolerance.</div>
    <div className="mtop15p mbot15p">
        <Card padding={15} backgroundColor="#eee">
            <div><b>Note:</b></div>
            <div>If you're building blockchain applications or distributed consensus systems, understanding PBFT helps you 
            grasp <b>how consensus can work without mining</b> — and still be <b>secure and efficient</b>.</div>
        </Card>
    </div>
 </div>);
};

export default Conclusion;