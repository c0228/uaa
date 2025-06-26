import React from "react";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div><i>
        <div>Graphs are <b>non-linear</b> data structures used to model real-world relationships—social networks, 
        GPS maps, recommendation engines, file systems, and more.</div>
        <div className="mtop15p">To <b>process</b> or <b>traverse</b> graphs efficiently, we need a 
        suitable <b>representation</b> in memory. The two most widely used methods are:</div>
        <div>
            <ul>
                <li><b>Adjacency Matrix</b></li>
                <li><b>Adjacency List</b></li>
            </ul>
        </div>
        <div className="mtop5p">While matrices offer constant-time edge lookups, they consume significant memory. 
            Adjacency lists, on the other hand, offer a <b>space-efficient</b> and <b>scalable</b> alternative.</div>
        </i></div>
    <div className="mtop15p"><h2 className="blog-head"><b>Introduction to Adjacency List</b></h2></div>
    <div className="mtop15p"><h4 className="blog-head"><b>What is an Adjacency List?</b></h4></div>
    <div className="mtop5p">An <b>Adjacency List</b> is a <b>collection of lists or arrays</b>. Each <b>vertex</b> in the graph 
    maintains a list of all its <b>adjacent (connected) vertices</b>.</div>
    <div className="mtop15p"><h4 className="blog-head"><b>Features:</b></h4></div>
    <div className="mtop15p">
        <ul>
            <li>Efficient <b>space usage</b> (<code><b>O(V + E)</b></code> for <code><b>V</b></code> vertices and <code><b>E</b></code> edges).</li>
            <li>Ideal for <b>sparse graphs</b>.</li>
            <li>Fast for <b>traversal algorithms</b> like DFS and BFS.</li>
        </ul>
    </div>
 </div>);
};

export default Introduction;