import React from "react";
import { Card } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const Introduction = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
	<div className="mtop15p">
		<Card padding={15} backgroundColor="#eee">
		<div><h4 className="blog-head"><b>Pre-Introduction: How REST Came into Existence</b></h4></div>
        <div>Before the 2000s, most distributed systems relied on tightly coupled communication models 
            like <b>RPC (Remote Procedure Call)</b> and <b>SOAP (Simple Object Access Protocol).</b> These 
            systems worked, but they had problems:</div>
        <div>
            <ul>
                <li className="mtop5p">Heavy XML-based payloads</li>
                <li className="mtop5p">Tight coupling between client and server</li>
                <li className="mtop5p">Difficult scalability and versioning</li>
                <li className="mtop5p">Poor performance for large-scale web systems</li>
            </ul>
        </div>
        <div>As the <b>World Wide Web</b> started growing rapidly, there was a need for a simpler, scalable, 
        and standardized way to build web-based communication systems.</div>
        <div className="mtop5p">In <b>2000, Roy Fielding,</b> in his doctoral dissertation, 
        introduced <b>REST (Representational State Transfer).</b> REST was not a protocol or a technology — it 
        was an <b>architectural style</b> derived from how the web itself works. The idea was simple: 
        use <i>the existing web standards efficiently instead of inventing new ones.</i></div>
        <div className="mtop5p">This concept later became the foundation of what we now call <b>RESTful APIs.</b></div>
		</Card>
	</div>
    <div className="mtop15p"><h2 className="blog-head"><b>Introduction: What Are RESTful APIs?</b></h2></div>
    <div className="mtop5p">A <b>RESTful API</b> is an application programming interface that follows the principles 
    of <b>REST architecture</b> to allow communication between client and server over HTTP.</div>
    <div className="mtop5p"><h4 className="blog-head"><b>Core Principles of REST</b></h4></div>
    <div className="padLeft5p">
        <div className="mtop5p"><b>1. Client–Server Separation</b></div>
        <div>The client handles UI and user interaction, while the server handles data and business logic.</div>
        <div className="mtop5p"><b>2. Statelessness</b></div>
        <div>Each request from the client must contain all the information needed. The server does not store client session state.</div>
        <div className="mtop5p"><b>3. Uniform Interface</b></div>
        <div>Resources are identified using <b>URLs</b>, and operations are performed using standard HTTP methods.</div>
        <div className="mtop5p"><b>4. Resource-Based</b></div>
        <div>Everything is treated as a resource (users, products, orders).</div>
        <div className="mtop5p"><b>5. Cacheable</b></div>
        <div>Responses should define whether they are cacheable to improve performance.</div>
    </div>
    <div className="mtop5p"><h4 className="blog-head"><b>Common HTTP Methods Used</b></h4></div>
    <div className="mtop5p">
        <SimpleTable header={["Method", "Purpose"]} 
                columns={[
                    ["GET", "Retrieve data"],
                    ["POST", "Create new data"],
                    ["PUT", "Update entire data"],
                    ["PATCH", "Update partial data"],
                    ["DELETE", "Remove data"],
				]} />
    </div>
 </div>);
};

export default Introduction;