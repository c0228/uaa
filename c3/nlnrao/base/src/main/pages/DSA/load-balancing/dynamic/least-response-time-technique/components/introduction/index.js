import React from "react";
import { Highlight } from "e-ui-react";

const HTW_EXAMPLE_FORMULA = `Score = ResponseTime * ActiveConnections
Select server with the lowest score.`;

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p"><i>In today’s digital age, where milliseconds can define user satisfaction, <b>load balancing</b> plays 
   a critical role in ensuring high availability, reliability, and optimal performance of web applications and services. While 
   traditional load balancing techniques like <b>Round Robin</b> or <b>Least Connections</b> are effective, they may not always 
   factor in the <i>actual experience</i> of the user — that’s where the <b>Least Response Time Technique</b> comes in.</i></div>
   
   <div className="mtop15p"><h2 className="blog-head"><b>Introduction</b></h2></div>
   <div className="mtop15p">The <b>Least Response Time</b> load balancing algorithm routes incoming traffic to the server that 
   has the <b>lowest average response time</b>. It dynamically monitors and calculates how long each server takes to respond to 
   requests and picks the one responding fastest.</div>
   <div className="mtop15p">This method is more <b>user-centric</b>, prioritizing performance from the end-user's perspective. 
   It combines elements of:</div>
   <div>
      <ul>
         <li className="mtop5p"><b>Server response time tracking</b></li>
         <li className="mtop5p"><b>Number of active connections</b></li>
         <li className="mtop5p"><b>Real-time monitoring</b></li>
      </ul>
   </div>
   <div className="mtop5p">This strategy is especially useful 
   for <b>dynamic environments</b>, <b>microservices</b>, <b>cloud-native architectures</b>, 
   and <b>real-time applications</b> where latency is a key concern.</div>

   <div className="mtop15p"><h2 className="blog-head"><b>How It Works?</b></h2></div>
   <div className="mtop15p">
      <div>Each server periodically updates its:</div>
      <div>
         <ul>
            <li className="mtop5p"><b>Average Response Time (RTT) —</b> How long it takes to respond to a request.</li>
            <li className="mtop5p"><b>Number of Active Connections —</b> How many current requests it's processing.</li>
         </ul>
      </div>
      <div className="mtop5p">The load balancer selects the server with 
      the <b>smallest combination of active connections</b> and <b>response time</b>.</div>
   </div>
   <div className="mtop15p"><h4 className="blog-head"><b>Formula (simplified):</b></h4></div>
   <div className="mtop5p">
      <Highlight content={HTW_EXAMPLE_FORMULA} lang="javascript" />
   </div>
 </div>);
};

export default Introduction;