import React from "react";
import { Card } from "e-ui-react";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p">
      <Card padding={15} backgroundColor="#eee">
         <div><h4 className="blog-head"><b>Why Static Load Balancing Isn’t Always Enough?</b></h4></div>
         <div className="mtop15p">In traditional computing systems, static load balancing strategies like Round Robin or 
            IP Hashing assume a predictable and uniform workload. But in real-world systems — where user traffic, request 
            complexity, and server performance can fluctuate rapidly — static algorithms fall short. A node that was once 
            fast may become overwhelmed. A new node might remain underutilized. This is 
            where <b>Adaptive Load Balancing</b> shines.</div>
      </Card>
   </div>

   <div className="mtop15p"><h2 className="blog-head"><b>Introduction to Adaptive Load Balancing</b></h2></div>
   <div className="mtop15p"><b>Adaptive Load Balancing</b> is a dynamic strategy that 
   continuously <b>monitors real-time system performance</b> and adjusts traffic distribution accordingly. Unlike static 
   techniques, adaptive algorithms <b>respond to current server loads</b>, <b>resource utilization</b>, <b>network latency</b>, 
   and <b>other metrics</b> to make smarter routing decisions.</div>
   <div className="mtop15p"><h4 className="blog-head"><b>Key Features:</b></h4></div>
   <div>
      <ul>
         <li className="mtop5p">Monitors server metrics like CPU usage, memory, and active connections</li>
         <li className="mtop5p">Dynamically updates routing rules based on system health</li>
         <li className="mtop5p">Minimizes bottlenecks by avoiding overloaded servers</li>
         <li className="mtop5p">Can be integrated with health check tools or performance metrics APIs</li>
      </ul>
   </div>

   <div className="mtop15p"><h2 className="blog-head"><b>How Adaptive Load Balancing Works?</b></h2></div>
   <div>
      <ol>
         <li className="mtop5p"><b>Monitoring:</b> The system gathers real-time metrics (e.g., CPU load, 
         memory, I/O, response time) from each backend node.</li>
         <li className="mtop5p"><b>Evaluation:</b> A central or distributed controller evaluates which nodes are performing well.</li>
         <li className="mtop5p"><b>Decision Making:</b> Based on metrics, requests are routed to the node that is least 
         burdened at that moment.</li>
         <li className="mtop5p"><b>Rebalancing:</b> If a node slows down, traffic is automatically shifted elsewhere without 
         manual intervention.</li>
      </ol>
   </div>
 </div>);
};

export default Introduction;