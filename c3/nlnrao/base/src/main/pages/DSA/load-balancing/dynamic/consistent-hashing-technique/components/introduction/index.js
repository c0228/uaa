import React from "react";
import { Card } from "e-ui-react";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p">
      <Card padding={15} backgroundColor="#eee">
         <div><h4 className="blog-head"><b>Why Does Load Balancing Need Intelligence?</b></h4></div>
         <div className="mtop15p">Imagine millions of users accessing your website. You distribute this traffic to multiple 
         servers. But what happens if a server crashes? Or a new one is added? Traditional load balancing techniques might 
         reassign a large number of users to different servers, breaking cache locality and increasing response times. This 
         is where <b>Consistent Hashing</b> shines. It minimizes reassignments and keeps things efficient and scalable.</div>
      </Card>
   </div>
   <div className="mtop15p"><h2 className="blog-head"><b>Introduction to Consistent Hashing</b></h2></div>
   <div className="mtop15p"><b>Consistent Hashing</b> is a load balancing algorithm primarily used in distributed systems to 
   distribute traffic or data evenly across multiple servers or nodes. It reduces the impact of server changes (addition or 
   removal) on the overall distribution of keys (users, requests, data).</div>
   <div className="mtop15p"><h4 className="blog-head"><b>Key Benefits:</b></h4></div>
   <div>
      <ul>
         <li className="mtop5p">Minimal re-distribution of data when nodes are added or removed</li>
         <li className="mtop5p">Efficient for caching systems (e.g., Memcached, CDN)</li>
         <li className="mtop5p">Highly scalable and fault-tolerant</li>
      </ul>
   </div>

   <div className="mtop15p"><h2 className="blog-head"><b>How Consistent Hashing Works?</b></h2></div>
   <div>
      <ol>
         <li className="mtop5p">All servers are arranged in a circular hash space (0 to 2<sup>32</sup> - 1).</li>
         <li className="mtop5p">Each server is assigned a hash using a hash function (e.g., SHA-256).</li>
         <li className="mtop5p">Each data item (or request) is also hashed.</li>
         <li className="mtop5p">A data item is routed to the first server <b>clockwise</b> from its hash.</li>
         <li className="mtop5p">When a server joins or leaves, only a <b>subset of keys</b> is remapped.</li>
      </ol>
   </div>

   <div className="mtop15p"><h4 className="blog-head"><b>Virtual Nodes (VNodes)</b></h4></div>
   <div className="mtop15p">To avoid uneven data distribution (due to poor hash spread), we 
   introduce <b>virtual nodes</b> — multiple points for the same server in the ring.</div>

 </div>);
};

export default Introduction;