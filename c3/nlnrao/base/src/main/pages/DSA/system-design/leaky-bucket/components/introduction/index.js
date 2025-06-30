import React from "react";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p"><i>
      <div>In high-traffic systems like APIs, payment gateways, or messaging platforms, managing <b>load spikes</b> is crucial. 
      Without regulation, too many requests at once can crash the server or degrade performance for everyone.</div> 
      <div className="mtop15p">Enter <b>rate limiting algorithms</b>.</div>
      <div className="mtop15p">Among the popular ones — <b>Token Bucket</b>, <b>Fixed Window</b>, and <b>Leaky Bucket</b> — 
      the <b>Leaky Bucket</b> algorithm is particularly known for <b>smoothing traffic bursts</b> and enforcing a <b>steady flow</b> of 
      requests. Think of it as traffic police for your backend.</div>
   </i></div>
   <div className="mtop15p"><h2 className="blog-head"><b>Introduction to Leaky Bucket</b></h2></div>
   <div className="mtop15p">
      <div>The <b>Leaky Bucket algorithm</b> enforces a fixed <b>output rate</b> (outflow of requests), no matter how bursty the 
      input is. It works like this:</div>
      <div>
         <ul>
            <li>Requests are <b>poured into a bucket</b> (just like water).</li>
            <li>The bucket has a <b>fixed capacity</b> (max queue length).</li>
            <li>It <b>leaks</b> (processes requests) at a <b>constant rate</b>.</li>
            <li>If the bucket overflows (too many requests), the new ones are <b>dropped</b>.</li>
         </ul>
      </div>
   </div>
   <div className="mtop15p"><h4 className="blog-head"><b>Why Use Leaky Bucket?</b></h4></div>
   <div className="mtop15p">
         <ul>
            <li>Smooths out bursts of traffic</li>
            <li>Prevents server overload</li>
            <li>Enforces a constant rate for downstream systems</li>
            <li>Useful in <b>rate limiting</b>, <b>network shaping</b>, <b>API gateways</b>, and <b>stream processing</b></li>
         </ul>
   </div>
 </div>);
};

export default Introduction;