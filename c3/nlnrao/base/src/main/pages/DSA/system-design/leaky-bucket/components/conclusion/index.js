import React from "react";

const Conclusion = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
    <div className="mtop15p">The <b>Leaky Bucket Algorithm</b> is a simple yet powerful tool for <b>rate limiting</b> in 
    distributed systems. It ensures that no matter how spiky the input, the <b>output remains consistent and predictable</b>.</div>
    <div className="mtop15p"><h4 className="blog-head"><b>Use Cases:</b></h4></div>
    <div>
      <ul>
         <li className="mtop5p">API Gateways</li>
         <li className="mtop5p">Payment gateways</li>
         <li className="mtop5p">Network shaping</li>
         <li className="mtop5p">Messaging systems like Kafka consumers/producers</li>
      </ul>
    </div>
    <div className="mtop15p"><h4 className="blog-head"><b>Key Takeaways:</b></h4></div>
    <div>
      <ul>
         <li className="mtop5p">Smooth traffic over time</li>
         <li className="mtop5p">Enforce steady request rate</li>
         <li className="mtop5p">Drop excessive bursts instead of crashing the system</li>
      </ul>
    </div>
    <div>In large-scale distributed systems, stability is as important as speed. 
     The <b>Leaky Bucket Algorithm</b> ensures that stability.</div>
 </div>);
};

export default Conclusion;