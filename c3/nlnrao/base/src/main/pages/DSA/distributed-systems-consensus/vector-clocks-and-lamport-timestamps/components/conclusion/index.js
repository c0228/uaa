import React from "react";

const Conclusion = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
    <div className="mtop15p">Lamport Timestamps and Vector Clocks are <b>core concepts</b> in distributed systems for 
    achieving <b>event ordering and causal tracking</b>. While Lamport’s method is easier to implement and understand, 
    Vector Clocks provide <b>stronger guarantees</b> by tracking <b>causal and concurrent relationships</b>.</div>
    <div className="mtop15p">Use <b>Lamport Timestamps</b> if:</div>
    <div className="mtop15p">
      <ul>
         <li>You only need a <b>partial order</b> of events.</li>
         <li>Simplicity and performance are priorities.</li>
      </ul>
    </div>
    <div className="mtop15p">Use <b>Vector Clocks</b> if:</div>
    <div className="mtop15p">
      <ul>
         <li>You need to <b>track concurrency</b> explicitly.</li>
         <li>Applications involve <b>conflict resolution</b>, like in CRDTs or distributed databases.</li>
      </ul>
    </div>
    <div className="mtop15p">Both approaches underpin the <b>consistency and reliability</b> of modern distributed 
    technologies — from <b>blockchains to distributed databases</b>. Understanding them builds the foundation for 
    designing <b>fault-tolerant</b>, <b>concurrent</b>, and <b>event-consistent</b> systems.</div>
 </div>);
};

export default Conclusion;