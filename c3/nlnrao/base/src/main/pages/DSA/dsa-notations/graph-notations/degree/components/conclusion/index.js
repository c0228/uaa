import React from "react";

const Conclusion = () =>{
 return (<div className="mtop35p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
    <div className="mtop15p">
        <ul>
            <li><code><b>Deg(v)</b></code> is a foundational metric in graph theory, representing how connected a vertex is within a graph.</li>
            <li>In undirected graphs, it counts total edges linked to a vertex.</li>
            <li>In directed graphs, it splits into <b>in-degree</b> and <b>out-degree</b>.</li>
            <li>Understanding <code><b>Deg(v)</b></code> helps analyze node centrality, detect isolated or dominant nodes, and build 
            efficient graph algorithms.</li>
        </ul>
    </div>
    <div className="mtop5p">Whether you're writing algorithms or analyzing real-world networks — <b>Degree matters</b>!</div>
 </div>);
};

export default Conclusion;