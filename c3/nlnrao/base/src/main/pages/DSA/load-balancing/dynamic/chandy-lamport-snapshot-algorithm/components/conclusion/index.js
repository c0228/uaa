import React from "react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const Conclusion = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
   <div className="mtop15p">The <b>Chandy-Lamport Snapshot Algorithm</b> isn’t a traditional load balancing algorithm 
   by itself — but it’s a <i>powerful enabler</i> of intelligent load balancing in distributed systems.</div>
   <div className="mtop15p">
      <SimpleTable header={["Feature","Details"]} 
        columns={[
            ["Purpose","Capture consistent global state in distributed systems"],
            ["Use Case in Load Balancing","Health check, load analysis, migration decisions"],
            ["Works in","Asynchronous, message-passing systems"],
            ["Languages","Python, Java, JavaScript – simple simulation examples above"],
          ]} />
   </div>
   <div className="mtop15p">By capturing a consistent global state <b>without stopping the system</b>, this algorithm 
   supports key operational decisions:</div>
   <div>
      <ul>
         <li className="mtop5p">Redistributing workloads.</li>
         <li className="mtop5p">Understanding system bottlenecks.</li>
         <li className="mtop5p">Designing fault-tolerant, self-healing load balancers.</li>
      </ul>
   </div>
   <div className="mtop15p">As systems grow more decentralized and reactive, understanding and integrating such 
   snapshot mechanisms into your load balancing infrastructure becomes not just helpful, but essential.</div>
 </div>);
};

export default Conclusion;


