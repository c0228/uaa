import React from "react";

const Conclusion = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p"><h2 className="blog-head"><b>Advantages of Weighted Round Robin</b></h2></div>
   <div>
      <ul>
         <li className="mtop5p"><b>Proportional Distribution:</b> It honors the strength of each server.</li>
         <li className="mtop5p"><b>Improves Performance:</b> Reduces load on weak servers, leading to optimal response times.</li>
         <li className="mtop5p"><b>Simple Yet Effective:</b> A minor modification to Round Robin but brings significant 
         efficiency improvements.</li>
      </ul>
   </div>
   <div className="mtop15p"><h2 className="blog-head"><b>Limitations</b></h2></div>
   <div>
      <ul>
         <li className="mtop5p"><b>Static Weights:</b> Weights are typically configured manually and don’t adapt to runtime 
         load unless combined with monitoring tools.</li>
         <li className="mtop5p"><b>Doesn't Handle Failures Automatically:</b> If a weighted server goes down, it still might 
         be selected unless failure detection is implemented.</li>
      </ul>
   </div>

   <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
   <div className="mtop15p"><b>Weighted Round Robin</b> is a smart enhancement of the classic Round Robin algorithm, especially 
   effective in <b>heterogeneous environments</b> where not all servers are created equal. By assigning weights based on server 
   capacity, it ensures that powerful servers handle more traffic, leading to <b>better performance and reliability</b>.</div>
   <div className="mtop15p">Whether you're writing your own load balancer or configuring one 
   like <b>Nginx</b>, <b>HAProxy</b>, or <b>Kubernetes Ingress</b>, understanding WRR gives you a powerful tool for system 
   scalability.</div>
 </div>);
};

export default Conclusion;