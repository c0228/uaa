import React from "react";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p"><i>
      <div>In distributed systems, ensuring consistency and coordination among processes is crucial — especially when there's 
      no central clock or shared memory. One foundational problem is <u>how to capture a global state</u> (e.g., to understand 
      the entire system’s behavior or detect deadlocks) without pausing the system. Enter 
      the <b>Chandy-Lamport Snapshot Algorithm</b> — a non-intrusive, elegant solution developed 
      for <u>asynchronous systems</u>.</div>  
      <div className="mtop15p">But how does it relate to <b>load balancing</b>? In modern systems, especially cloud-native or 
      microservices-based applications, global state snapshots can guide <b>load shedding</b>, <b>state migration</b>, and 
      <b>congestion control</b>, enabling intelligent load balancing decisions.</div> 
   </i></div>
   <div className="mtop15p"><h2 className="blog-head"><b>Introduction to Chandy-Lamport Snapshot Algorithm</b></h2></div>
   <div className="mtop15p">The <b>Chandy-Lamport Snapshot Algorithm</b> was introduced in 1985 to determine 
   a <i>consistent global state</i> of a distributed system. The idea is to record the local state of each process and the 
   state of communication channels between them — <b>without halting the system</b>.</div>
   <div className="mtop15p"><h4 className="blog-head"><b>Why It's Useful for Load Balancing?</b></h4></div>
   <div className="mtop15p">In distributed load balancers, system health and traffic patterns need to be analyzed in 
   real-time. A snapshot lets you:</div>
   <div>
      <ul>
         <li className="mtop5p">Analyze bottlenecks.</li>
         <li className="mtop5p">Migrate active sessions or services.</li>
         <li className="mtop5p">Detect overloaded or idle nodes.</li>
         <li className="mtop5p">Balance workloads <b>based on historical and real-time insights</b>.</li>
      </ul>
   </div>

   <div className="mtop15p"><h2 className="blog-head"><b>How It Works?</b></h2></div>
   <div>
      <ol>
         <li className="mtop5p"><b>Initiation:</b> One process (initiator) starts the snapshot and records its state.</li>
         <li className="mtop5p"><b>Marker Messages:</b> It sends a special <i>marker</i> message through all outgoing channels.</li>
         <li className="mtop5p"><b>Other Processes:</b>
            <ul>
               <li>On receiving the first marker: they record their own state and send markers out.</li>
               <li><b>On subsequent markers:</b> they record the channel state as the messages 
               received <b>after recording local state</b> and <b>before receiving marker</b>.</li>
            </ul>
         </li>
      </ol>
   </div>
   <div>This way, a consistent snapshot is built without stopping the system.</div>
 </div>);
};

export default Introduction;