import React from "react";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p"><i>
      In today's digital ecosystem, performance and scalability are not just luxuries—they are necessities. Whether it’s a global 
      e-commerce platform or a regional video streaming app, the load on servers can fluctuate dramatically. Most traditional 
      load balancing techniques work well under uniform assumptions, like each server being equal in power. But in the real 
      world, server resources—CPU, memory, disk I/O, etc.—differ vastly.
   </i></div>
   <div className="mtop15p"><h2 className="blog-head"><b>Introduction</b></h2></div>
   <div className="mtop15p"><b>Resource-Based Load Balancing</b> is a dynamic technique that distributes incoming network 
   traffic or computational jobs based on the current availability of key resources on each server or node. Instead of assuming 
   uniformity, this method actively <b>monitors server health and resource usage</b> (CPU load, memory consumption, network 
   latency, etc.) and routes tasks accordingly.</div>

   <div className="mtop15p"><h4 className="blog-head"><b>Why It is needed?</b></h4></div>
   <div className="mtop15p">Traditional algorithms like Round Robin or Least Connections don’t consider the actual 
   hardware/software health of a server. A server with 90% CPU usage may still receive requests under such algorithms, 
   leading to poor performance.</div>
   <div className="mtop15p"><b>Resource-based techniques ensure that requests are sent to servers that are truly capable of 
   handling more load</b>, not just ones that seem idle.</div>

   <div className="mtop15p"><h2 className="blog-head"><b>Key Concepts</b></h2></div>
   <div>
      <ul>
         <li className="mtop5p"><b>Resource Metrics:</b> CPU, RAM, I/O wait, Network latency</li>
         <li className="mtop5p"><b>Monitoring Agent:</b> Tracks metrics on each node/server</li>
         <li className="mtop5p"><b>Decision Engine:</b> Uses those metrics to choose the least-loaded resource</li>
         <li className="mtop5p"><b>Dynamic Weighting:</b> Recalibrates server preference continuously</li>
      </ul>
   </div>
 </div>);
};

export default Introduction;