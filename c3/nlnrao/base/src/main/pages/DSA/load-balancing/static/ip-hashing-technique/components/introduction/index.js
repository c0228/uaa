import React from "react";
import { Card } from "e-ui-react";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p"><i>In today’s distributed systems, websites and applications often experience high traffic. 
   To ensure reliability, performance, and fault tolerance, <b>load balancing</b> becomes a vital part of the system design. 
   Various algorithms exist to evenly distribute incoming traffic across multiple servers, and one of the simplest yet effective 
   techniques is the <b>IP Hashing algorithm</b>.</i></div>
   <div className="mtop15p"><h2 className="blog-head"><b>Introduction</b></h2></div>
   <div className="mtop15p"><b>IP Hashing</b> is a deterministic load balancing algorithm that maps client IP addresses to 
   specific backend servers using a hash function. The idea is straightforward:</div>
   <div className="mtop5p">
      <Card padding={15} backgroundColor="#eee">
         If the same client sends repeated requests, the algorithm will (almost always) direct those to the same server.
      </Card>
   </div>
   <div className="mtop5p">
      This technique helps in <b>session persistence</b> (also known as sticky sessions) where user data is cached on a 
      specific server. It’s also lightweight since it doesn’t require tracking connections or storing complex metadata.
   </div>

   <div className="mtop15p"><h2 className="blog-head"><b>How it Works?</b></h2></div>
   <div>
      <ol>
         <li className="mtop5p">The load balancer receives a client request.</li>
         <li className="mtop5p">It extracts the client’s IP address.</li>
         <li className="mtop5p">It applies a hash function to the IP address.</li>
         <li className="mtop5p">The result is mapped to a server in the pool (using modulo operation).</li>
      </ol>
   </div>

   <div className="mtop15p"><h2 className="blog-head"><b>When to Use IP Hashing?</b></h2></div>
   <div>
      <ul>
         <li className="mtop5p">When you want <b>session stickiness</b> without using cookies or external storage.</li>
         <li className="mtop5p">When backend servers are <b>homogeneous</b> and have similar capacities.</li>
         <li className="mtop5p">When <b>DNS-based load balancing</b> is not granular enough.</li>
      </ul>
   </div>
 </div>);
};

export default Introduction;