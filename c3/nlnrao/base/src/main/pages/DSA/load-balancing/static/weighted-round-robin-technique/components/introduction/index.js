import React from "react";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p"><i>
      <div>In today’s high-availability and high-performance web systems, <b>load balancing</b> is essential. From cloud-native 
      microservices to traditional monoliths, distributing client requests across multiple servers efficiently is the backbone 
      of modern scalability.</div>
      <div className="mtop15p">Among various load balancing algorithms, <b>Round Robin</b> is widely used for its simplicity. 
      But what happens when servers aren't equally capable? That’s where <b>Weighted Round Robin</b> steps in — an intelligent 
      upgrade to simple Round Robin.</div>
   </i></div>
   <div className="mtop15p"><h2 className="blog-head"><b>Introduction to Weighted Round Robin</b></h2></div>
   <div className="mtop15p"><h4 className="blog-head"><b>What is Weighted Round Robin (WRR)?</b></h4></div>
   <div className="mtop15p"><b>Weighted Round Robin (WRR)</b> is an advanced load balancing algorithm that distributes requests 
   based on the <b>weight assigned to each server</b>. These weights typically reflect the server's processing power, memory, 
   or network capacity.</div>

   <div className="mtop15p"><h2 className="blog-head"><b>How It Works?</b></h2></div>
   <div>
      <ul>
         <li className="mtop5p">Each server is assigned a <b>weight</b> (an integer value).</li>
         <li className="mtop5p">The load balancer distributes <b>requests proportionally</b> based on these weights.</li>
         <li className="mtop5p">For example, a server with weight <code><b>3</b></code> will receive three times more traffic 
         than a server with weight <code><b>1</b></code>.</li>
      </ul>
   </div>
 </div>);
};

export default Introduction;