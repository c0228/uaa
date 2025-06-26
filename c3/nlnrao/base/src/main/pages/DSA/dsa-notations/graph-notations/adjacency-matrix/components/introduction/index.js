import React from "react";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div><i>
        <div>In the world of <b>data structures</b>, graphs are powerful tools used to model relationships between entities. 
        From <b>social networks, maps, web crawlers</b> to <b>AI pathfinding algorithms</b>, graphs represent connections 
        between nodes.</div>
        <div className="mtop15p">But how do we <b>represent</b> these graphs in code?</div>
        <div className="mtop15p">There are <b>two common representations:</b>
            <ul>
                <li><b>Adjacency List</b></li>
                <li><b>Adjacency Matrix</b></li>
            </ul>
        </div>
        </i></div>
    <div className="mtop15p"><h2 className="blog-head"><b>Introduction  to Adjacency Matrix</b></h2></div>
    <div className="mtop15p">
        <div>An <b>Adjacency Matrix</b> is a <b>2D matrix</b> used to represent a <b>graph</b>.</div>
        <div>It’s especially useful when:</div>
        <div>
            <ul>
                <li>The graph is <b>dense</b> (many edges).</li>
                <li>You need <b>quick lookups</b> to check if an edge exists between two vertices.</li>
            </ul>
        </div>
    </div>

    <div className="mtop15p"><h4 className="blog-head"><b>Definition:</b></h4></div>
    <div className="mtop15p">
        <div>If a graph has <code><b>n</b></code> vertices, the adjacency matrix <code><b>A</b></code> is 
        an <code><b>n x n</b></code> matrix such that:</div>
        <div>
            <ul>
                <li>
                    <div>For an <b>undirected graph</b>:</div>
                    <div><code><b>A[i][j] = 1</b></code> if there is an edge between vertex <code><b>i</b></code> and 
                    vertex <code><b>j</b></code>, else <code><b>0</b></code>.</div>
                </li>
                <li>
                    <div>For a <b>directed graph</b>:</div>
                    <div><code><b>A[i][j] = 1</b></code> means edge from <code><b>i</b></code> to <code><b>j</b></code> exists.</div>
                </li>
                <li>
                    <div>For a <b>weighted graph</b>:</div>
                    <div><code><b>A[i][j] = weight</b></code> of the edge; if no edge exists, then 
                    usually <code><b>0</b></code> or <code><b>&infin;</b></code>.</div>
                </li>
            </ul>
        </div>
    </div>
 </div>);
};

export default Introduction;