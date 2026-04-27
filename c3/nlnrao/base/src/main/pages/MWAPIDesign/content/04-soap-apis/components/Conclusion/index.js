import React from "react";
import { Card } from "e-ui-react";

const Conclusion = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
    <div>SOAP APIs were designed for a time when <b>enterprise reliability and security</b> were more 
    important than developer convenience.</div>
    <div>They provide:</div>
    <ul>
        <li className="mtop5p">Strict contracts</li>
        <li className="mtop5p">Built-in security standards</li>
        <li className="mtop5p">Platform and language independence</li>
        <li className="mtop5p">Guaranteed message structure</li>
    </ul>
    <div>While REST and JSON APIs dominate modern development, <b>SOAP is still actively used</b> in:</div>
    <ul>
        <li className="mtop5p">Banking systems</li>
        <li className="mtop5p">Government platforms</li>
        <li className="mtop5p">Insurance and payment gateways</li>
    </ul>
    <div><b>SOAP APIs may be heavy, but they are rock-solid.</b></div>
    <div>Understanding SOAP gives you a <b>strong foundation in enterprise system design</b> and helps you work with 
    legacy and mission-critical systems confidently.</div>
 </div>);
};

export default Conclusion;