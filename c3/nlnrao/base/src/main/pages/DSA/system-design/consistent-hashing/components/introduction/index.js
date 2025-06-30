import React from "react";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p"><i>Imagine you’re running a large-scale system like a distributed cache (e.g., Memcached) or a 
   NoSQL database (like Cassandra). As your user base grows, you might need to add or remove servers. But if your data 
   redistribution logic isn’t smart, even a small change can shuffle everything — causing major downtime or data loss.</i></div>
   <div className="mtop15p"><i>That’s where <b>Consistent Hashing</b> comes to the rescue.</i></div> 
   <div className="mtop15p"><h2 className="blog-head"><b>Introduction to Consistent Hashing</b></h2></div>
   <div className="mtop15p"><b>Consistent Hashing</b> (<i>A Smarter Way to Distribute Data</i>) is a strategy for distributing data across a cluster of nodes such that 
   minimal data is moved when nodes are added or removed. It was first introduced in the context 
   of <b>distributed caching systems</b> like <b>DynamoDB</b> and <b>Cassandra</b>.</div>
   <div className="mtop15p">Unlike traditional hashing where data is rehashed entirely when the number of buckets (servers) 
   changes, consistent hashing maps both <b>keys</b> and <b>nodes</b> to the same <b>circular hash ring</b> (0 to 2<sup>32</sup> - 1). Keys 
   are stored in the next node clockwise on the ring. This drastically reduces the number of keys that need to be moved when nodes join or leave.</div>
 </div>);
};

export default Introduction;