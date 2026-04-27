import React from "react";
import { Card } from "e-ui-react";

const Conclusion = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
    <div className="mtop5p">Simple JSON APIs transformed how software systems communicate.</div>
    <div className="mtop5p">They:</div>
    <div>
        <ul>
            <li className="mtop5p">Removed unnecessary complexity</li>
            <li className="mtop5p">Enabled fast frontend-backend interaction</li>
            <li className="mtop5p">Allowed seamless integration across platforms and languages</li>
        </ul>
    </div>
    <div className="mtop5p">Whether you are building:</div>
    <div>
        <ul>
            <li className="mtop5p">A mobile app</li>
            <li className="mtop5p">A web application</li>
            <li className="mtop5p">A microservice</li>
            <li className="mtop5p">A game backend</li>
        </ul>
    </div>
    <Card padding={15} backgroundColor="#eee">
        <div><b>Simple JSON APIs are the foundation.</b></div>
        <div>Their simplicity is their power.</div>
        <div><i>“If humans can read it and machines can process it fast — that’s a good API.”</i></div>
    </Card>
 </div>);
};

export default Conclusion;