import React from "react";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p"><i>
      <div>Imagine a busy roundtable of computers where everyone wants a turn to share their workload — but only one can 
         speak at a time, and only if they’re holding a special baton. This baton is called a <b>“token”</b>, and the idea 
         comes from one of the pioneers of computer science: <b>Andrew S. Tanenbaum</b>.</div>
      <div className="mtop15p">In distributed systems, fair and efficient access to resources is a major challenge. Load 
      balancing algorithms help achieve this by distributing workloads across multiple nodes. Among them, <b>Tanenbaum’s 
      Token Ring Algorithm</b> is a classic, deterministic method used for <b>mutual exclusion and load distribution</b>.</div>
   </i></div>
   
   <div className="mtop15p"><h2 className="blog-head"><b>Introduction</b></h2></div>
   <div className="mtop15p"><b>Tanenbaum’s Token Ring Algorithm</b> is a distributed algorithm 
   for <b>mutual exclusion</b> and <b>balanced task execution</b> in <b>ring-based network topologies</b>. Each 
   node (or server) in the network is logically arranged in a ring, and a unique <b>token</b> circulates 
   through the ring.</div>
   <div className="mtop15p">Only the node possessing the token can access the critical section or assign itself a new task. 
   This prevents <b>resource contention</b> and guarantees that <b>no two nodes</b> work on the same task simultaneously.</div>

   <div className="mtop15p"><h4 className="blog-head"><b>Key Concepts:</b></h4></div>
   <div>
      <ul>
         <li className="mtop5p"><b>Token:</b> A special data structure passed between nodes.</li>
         <li className="mtop5p"><b>Ring Topology:</b> Logical structure where each node has exactly one successor and one predecessor.</li>
         <li className="mtop5p"><b>Mutual Exclusion:</b> Ensures that only one node performs critical work at any time.</li>
      </ul>
   </div>

   <div className="mtop15p"><h2 className="blog-head"><b>Why Use It for Load Balancing?</b></h2></div>
   <div className="mtop15p">In load balancing, especially in peer-to-peer and decentralized systems, it becomes essential to:</div>
   <div>
      <ul>
         <li className="mtop5p">Prevent <b>overloading</b> of nodes.</li>
         <li className="mtop5p">Ensure <b>fairness</b>.</li>
         <li className="mtop5p">Avoid <b>collisions</b> or repeated assignments.</li>
      </ul>
   </div>
   <div className="mtop5p">Tanenbaum’s algorithm ensures:</div>
   <div>
      <ul>
         <li className="mtop5p"><b>Fair turn-taking</b>.</li>
         <li className="mtop5p"><b>No central coordinator</b>.</li>
         <li className="mtop5p"><b>Predictable performance</b> (no starvation, bounded waiting).</li>
      </ul>
   </div>
 </div>);
};

export default Introduction;