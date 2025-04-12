import React from "react";

const Conclusion = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
    <div>Scaling databases is not just about adding machines — it's about a <b>fundamental rethinking of your data architecture</b>, 
    your access patterns, your failure domains, and your consistency needs. As you scale from one user to a billion, expect:</div>
    <div>
        <ul>
            <li className="mtop5p"><b>Sharding</b> to be unavoidable.</li>
            <li className="mtop5p"><b>Chunking</b> and migration to manage growth.</li>
            <li className="mtop5p"><b>Router logic </b>to determine how efficiently your data is accessed.</li>
            <li className="mtop5p">And above all, to <b>treat your database architecture as a dynamic system</b> — one that adapts 
            with usage, not a static piece.</li>
        </ul>
    </div>
    <div className="mtop15p">Whether you're building the next social network, video platform, or global marketplace — design your data 
        strategy with elasticity, observability, and resilience in mind.</div>
 </div>);
};

export default Conclusion;