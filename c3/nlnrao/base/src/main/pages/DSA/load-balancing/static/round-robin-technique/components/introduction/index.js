import React from "react";
import { Highlight } from "e-ui-react";

const RRT_HOW_IT_WORKS = `Request 1 → Server-A
Request 2 → Server-B
Request 3 → Server-C
Request 4 → Server-A (wrap around)`;

const RRT_WRR_JSON = `{
  "Server-A": 1,
  "Server-B": 3
}`;

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p"><i>As modern applications scale and serve millions of users, distributing traffic efficiently 
      across servers becomes critical. Without proper load distribution, systems may suffer from high latency, downtime, 
      or even complete service outages. This is where <b>Load Balancing Algorithms</b> play a vital role. Among the simplest and 
      most widely used is the <b>Round Robin technique</b>.</i></div>
   <div className="mtop15p"><h2 className="blog-head"><b>Introduction to Round Robin Load Balancing</b></h2></div>
   <div className="mtop15p">The <b>Round Robin technique</b> is a time-tested and straightforward load balancing algorithm. It 
   works just like taking turns in a queue — each server receives requests one after another in a circular order, regardless of 
   their current load.</div>
   
   <div className="mtop15p"><h4 className="blog-head"><b>How It Works?</b></h4></div>
   <div>
      <ol>
         <li className="mtop5p">Maintain a list of available servers.</li>
         <li className="mtop5p">Assign each incoming request to the next server in the list.</li>
         <li className="mtop5p">After the last server, loop back to the first server.</li>
         <li className="mtop5p">Continue this cycle for each new request.</li>
      </ol>
   </div>
   <div className="mtop15p">It’s called "<i><u>Round Robin</u></i>" because the allocation rotates around the servers like players 
   in a round-robin sports tournament.</div>

   <div className="mtop15p">Imagine you have a <b>list of servers</b> like this:</div>
   <div className="mtop5p"><Highlight content={`[Server-A, Server-B, Server-C]`} lang="javascript" /></div>
   <div className="mtop15p">The <b>load balancer</b> maintains an internal pointer, starting at 
   index <code><b>0</b></code>. Every new incoming request is directed to the server at that index, and the pointer moves 
   to the next one:</div>
   <div className="mtop5p"><Highlight content={RRT_HOW_IT_WORKS} lang="javascript" /></div>
   <div className="mtop15p">This is the <b>core of the Round Robin principle</b> — distributing requests in order, looping 
   indefinitely.</div>

   <div className="mtop15p"><h2 className="blog-head"><b>Types of Round Robin Variants</b></h2></div>
   <div className="mtop15p">There are multiple variations of Round Robin that enhance or extend its basic behavior:</div>
   <div>
      <ol>
         <li className="mtop15p">
            <div><h4><b>Basic Round Robin</b></h4></div>
            <div>
               <ul>
                  <li className="mtop5p">Each server receives <b>equal traffic</b>.</li>
                  <li className="mtop5p">Great when all servers are <b>identical</b> in terms of hardware and processing capability.</li>
               </ul>
            </div>
         </li>
         <li className="mtop15p">
            <div><h4><b>Weighted Round Robin</b></h4></div>
            <div>
               <ul>
                  <li className="mtop5p">Servers are assigned <b>weights</b> depending on their performance.</li>
                  <li className="mtop5p">A server with weight 3 gets three times the traffic of a server with weight 1.</li>
               </ul>
            </div>
            <div><b>Example:</b></div>
            <div className="mtop5p">
               <Highlight content={RRT_WRR_JSON} lang="json" />
            </div>
            <div className="mtop5p"><b>Distribution:</b> B, B, B, A, B, B, B, A ...</div>
            <div className="mtop5p">Useful when:</div>
            <div>
               <ul>
                  <li className="mtop5p">You have <b>mixed hardware</b>.</li>
                  <li className="mtop5p">One server is faster or has more memory.</li>
               </ul>
            </div>
         </li>
         <li className="mtop15p">
            <div><h4><b>Dynamic Round Robin</b></h4></div>
            <div>
               <ul>
                  <li className="mtop5p">Similar to Weighted Round Robin, but weights are <b>dynamically adjusted</b> at runtime.</li>
                  <li className="mtop5p">Adjusts based on current server <b>CPU load</b>, <b>latency</b>, or <b>network throughput</b>.</li>
               </ul>
            </div>
            <div><b>Example:</b></div>
            <div>
               <ul>
                  <li className="mtop5p"><i><u>Initially</u></i>: All servers get equal weight.</li>
                  <li className="mtop5p"><i><u>At runtime</u></i>: If Server-B slows down, its weight drops, and it gets fewer requests.</li>
               </ul>
            </div>
         </li>
         <li className="mtop15p">
            <div><h4><b>Round Robin with Session Affinity (Sticky Sessions)</b></h4></div>
            <div>
               <ul>
                  <li className="mtop5p">Once a client hits a server, all future requests from that client go to the <b>same server</b>.</li>
                  <li className="mtop5p">Ideal for <b>stateful applications</b> (e.g., shopping carts).</li>
               </ul>
            </div>
            <div><b>Implementation:</b></div>
            <div>
               <ul>
                  <li className="mtop5p">Stickiness via <b>session cookies</b> or <b>IP binding</b>.</li>
               </ul>
            </div>
         </li>
      </ol>
   </div>

   <div className="mtop15p"><h4 className="blog-head"><b>Use Cases</b></h4></div>
   <div>
      <ul>
         <li className="mtop5p">Stateless web applications</li>
         <li className="mtop5p">Scenarios where all servers have similar capacity</li>
         <li className="mtop5p">DNS-level load balancing</li>
         <li className="mtop5p">Simple reverse proxies (e.g., Nginx default behavior)</li>
      </ul>
   </div>

 </div>);
};

export default Introduction;