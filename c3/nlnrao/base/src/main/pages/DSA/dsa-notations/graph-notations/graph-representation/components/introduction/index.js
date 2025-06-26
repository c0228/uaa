import React from "react";
import { Card } from "e-ui-react";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><i>
        <div>Before diving deep into graph algorithms like DFS, BFS, or Dijkstra’s, it’s crucial to understand how a graph is 
        represented in computers. At the heart of this lies the basic mathematical model of a graph:</div>
        <div>
            <Card padding={15} backgroundColor="#eee">
            <code><b>G = (V, E)</b></code> — where <code><b>V</b></code> is the set of vertices, and <code><b>E</b></code> is the set of edges.
            </Card>
        </div>
        <div>This simple notation forms the core of everything in graph theory and computer science 
        applications like network routing, social networks, compilers, AI, and more.</div>
    </i></div>
    <div className="mtop15p"><h2 className="blog-head"><b>Introduction</b></h2></div>
    <div className="mtop15p"><h4 className="blog-head"><b>What is a Graph?</b></h4></div>
    <div className="mtop5p">A <b>graph</b> is a collection of nodes (<b>vertices</b>) and the connections (<b>edges</b>) between them.</div>
    <div className="mtop5p">
        <Card padding={15} backgroundColor="#eee">
            <div><b>Notation:</b></div>
            <div><code><b>G = (V, E)</b></code></div>
            <div>
                <ul>
                    <li><code><b>V</b></code>: Set of vertices or nodes</li>
                    <li><code><b>E</b></code>: Set of edges, which are pairs of vertices</li>
                </ul>
            </div>
        </Card>
    </div>

 </div>);
};

export default Introduction;