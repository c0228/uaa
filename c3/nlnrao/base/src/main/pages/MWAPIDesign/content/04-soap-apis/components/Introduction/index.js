import React from "react";
import { Card, Highlight } from "e-ui-react";

const Introduction = () =>{

 const SOAP_EXAMPLE_REQUEST = `<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Header/>
  <soap:Body>
    <GetUserRequest>
      <userId>1</userId>
    </GetUserRequest>
  </soap:Body>
</soap:Envelope>`;

const SOAP_EXAMPLE_RESPONSE = `<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <GetUserResponse>
      <id>1</id>
      <username>rao</username>
      <email>rao@example.com</email>
    </GetUserResponse>
  </soap:Body>
</soap:Envelope>`;

 return (<div className="mtop15p mbot15p lh28p fs16p">
	<div className="mtop15p">
		<Card padding={15} backgroundColor="#eee">
		    <div><h4 className="blog-head"><b>Pre-Introduction: How SOAP APIs Were Introduced?</b></h4></div>
            <div>In the late 1990s and early 2000s, enterprises faced a serious problem:</div>
            <div><b>Different systems built in different languages needed a reliable way to communicate over the internet.</b></div>
            <div className="mtop5p">At that time:</div>
            <ul>
                <li className="mtop5p">Java, .NET, C++, and legacy mainframe systems were widely used</li>
                <li className="mtop5p">Systems were hosted on <b>different operating systems</b></li>
                <li className="mtop5p">Security, reliability, and strict contracts were mandatory for enterprises</li>
            </ul>
            <div className="mtop5p">Simple data exchange formats were not enough. Enterprises needed:</div>
            <ul>
                <li className="mtop5p">Strong typing</li>
                <li className="mtop5p">Formal contracts</li>
                <li className="mtop5p">Built-in error handling</li>
                <li className="mtop5p">Security and transaction standards</li>
            </ul>
            <div className="mtop5p">To solve this, <b>SOAP (Simple Object Access Protocol)</b> was introduced by Microsoft and 
            later standardized by <b>W3C</b>.</div>
            <div className="mtop5p">SOAP was designed to be:</div>
            <ul>
                <li className="mtop5p"><b>Platform-independent</b></li>
                <li className="mtop5p"><b>Language-independent</b></li>
                <li className="mtop5p"><b>Highly structured and secure</b></li>
            </ul>
		</Card>
	</div>
    <div className="mtop15p"><h2 className="blog-head"><b>Introduction: What Is a SOAP API?</b></h2></div>
    <div className="mtop5p">A <b>SOAP API</b> is a web service that:</div>
    <ul>
        <li className="mtop5p">Uses <b>SOAP protocol</b></li>
        <li className="mtop5p">Exchanges data in <b>XML format</b></li>
        <li className="mtop5p">Follows a <b>strict contract</b> defined using <b>WSDL</b></li>
    </ul>
    <div>SOAP APIs are commonly used in <b>banking, government, telecom, and enterprise 
        systems</b> where reliability matters more than simplicity.</div>
    <div className="mtop15p"><h4 className="blog-head"><b>Key Components of SOAP:</b></h4></div>
    <div>
        <ol>
            <li className="mtop5p"><b>SOAP Envelope –</b> Root element of the message</li>
            <li className="mtop5p"><b>SOAP Header –</b> Metadata (security, authentication, transactions)</li>
            <li className="mtop5p"><b>SOAP Body –</b> Actual request or response data</li>
            <li className="mtop5p"><b>WSDL –</b> Describes how the service works</li>
        </ol>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>SOAP Message Structure</b></h2></div>
    <div className="mtop5p"><h4 className="blog-head"><b>SOAP Request Example (XML)</b></h4></div>
    <div className="mtop5p"><Highlight content={SOAP_EXAMPLE_REQUEST} lang="html"/></div>
    <div className="mtop5p"><h4 className="blog-head"><b>SOAP Response Example (XML)</b></h4></div>
    <div className="mtop5p"><Highlight content={SOAP_EXAMPLE_RESPONSE} lang="html"/></div>

    <div className="mtop15p"><h2 className="blog-head"><b>WSDL: The Contract of SOAP APIs</b></h2></div>
    <div className="mtop5p"><b>WSDL (Web Services Description Language)</b> defines:</div>
    <ul>
        <li className="mtop5p">Available operations</li>
        <li className="mtop5p">Request and response structure</li>
        <li className="mtop5p">Data types</li>
        <li className="mtop5p">Service endpoint URL</li>
    </ul>
    <div>Think of WSDL as a strict agreement between client and server.</div>
    <div className="mtop5p">If REST is “flexible conversation”, SOAP is a <b>signed legal contract.</b></div>
 </div>);
};

export default Introduction;