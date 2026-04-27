import React from "react";
import { Card, Highlight } from "e-ui-react";

const JSON_EXAMPLE_JS = `{
  "id": 101,
  "name": "Laptop",
  "price": 75000,
  "available": true
}`;

const Introduction = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
	<div className="mtop15p">
		<Card padding={15} backgroundColor="#eee">
		<div><h4 className="blog-head"><b>Pre-Introduction: How JSON APIs Came Into Existence</b></h4></div>
        <div>In the early days of the internet, applications mostly communicated using <b>HTML pages.</b> Browsers requested 
        pages, and servers responded with full HTML documents.</div>
        <div>This worked well for websites, but it became inefficient when different systems (mobile apps, desktop software, 
            servers) needed to <b>exchange only data,</b> not UI.</div>
        <div>Before JSON, data exchange formats like <b>XML, SOAP, and CSV</b> were widely used.</div>
        <div>Problems with older formats:</div>
        <div>
            <ul>
                <li className="mtop5p">XML was <b>too verbose</b></li>
                <li className="mtop5p">SOAP was <b>complex and heavy</b></li>
                <li className="mtop5p">CSV lacked <b>structure and hierarchy</b></li>
            </ul>
        </div>
        <div>As JavaScript became popular in browsers, developers needed a <b>lightweight, human-readable, and machine-friendly</b> format.
        This led to the rise of <b>JSON (JavaScript Object Notation).</b></div>
        <div>Once JSON became standard for data representation, APIs naturally evolved to <b>send and receive JSON,</b> giving birth to <b>Simple JSON APIs.</b></div>
		</Card>
	</div>
    <div className="mtop15p"><h2 className="blog-head"><b>Introduction: What Is a Simple JSON API?</b></h2></div>
    <div className="mtop5p">
        <div>A Simple JSON API is a web API that:</div>
        <ul>
        <li className="mtop5p">Uses <b>HTTP</b> (GET, POST, PUT, DELETE)</li>
        <li className="mtop5p">Sends and receives <b>JSON data</b></li>
        <li className="mtop5p">Focuses on <b>clarity, simplicity, and minimal structure</b></li>
        </ul>
    </div>
    <div className="mtop5p">At its core, a JSON API allows:</div>
    <ul>
        <li className="mtop5p">A <b>client</b> (browser, mobile app, another server)</li>
        <li className="mtop5p">To communicate with a <b>server</b></li>
        <li className="mtop5p">Using <b>JSON as the data format</b></li>
    </ul>
    <div className="mtop5p"><b>Example JSON Response:</b></div>
    <div className="mtop5p">
        <Highlight content={JSON_EXAMPLE_JS} lang="javascript" />
    </div>

    <div className="mtop5p"><h4><b>Why JSON APIs Are Popular?</b></h4></div>
    <div>
        <ul>
            <li className="mtop5p">Easy to read and write</li>
            <li className="mtop5p">Language-independent</li>
            <li className="mtop5p">Lightweight and fast</li>
            <li className="mtop5p">Works perfectly with REST and HTTP</li>
        </ul>
    </div>
 </div>);
};

export default Introduction;