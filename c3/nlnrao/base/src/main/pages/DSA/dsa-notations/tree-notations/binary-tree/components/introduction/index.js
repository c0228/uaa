import React from "react";
import { Highlight } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const GRAPH_NOTATION_EXAMPLE = `         A
       /  \\
      B    C
     /  \\   \\
    D    E    F
`;

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><i>
    <div>In computer science, graphs are widely used to represent relationships. One special and simplified form of a graph 
    is the <b>Tree</b>. Among the different types of trees, the <b>Binary Tree</b> stands out as the most fundamental data 
    structure — playing a major role in <b>searching</b>, <b>sorting</b>, and <b>hierarchical storage</b>.</div>
    <div className="mtop15p">Before learning <b>AVL Trees</b>, <b>B-Trees</b>, or <b>Heaps</b>, understanding the notation and structure of 
    a <b>Binary Tree</b> is essential.</div>    
    </i></div>
    <div className="mtop15p"><h2 className="blog-head"><b>Introduction</b></h2></div>
    <div className="mtop15p"><h4 className="blog-head"><b>What is a Binary Tree?</b></h4></div>
    <div className="mtop15p">
        <div>A <b>Binary Tree</b> is a type of graph with the following properties:</div>
        <div>
            <ul>
                <li>It is a <b>connected, acyclic graph</b>.</li>
                <li>It has <b>one root node</b> (starting point).</li>
                <li><b>Each node</b> can have at most <b>two children</b>: <u><i>Left child</i></u>, <u><i>Right child</i></u></li>
            </ul>
        </div>
        <div className="mtop5p">In graph terms, a <b>Binary Tree</b> is a <b>directed acyclic graph (DAG)</b> with 
        constraints on child count.</div>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Graph Notation of a Binary Tree</b></h2></div>
    <div className="mtop15p">
        <div>A Binary Tree is often represented as:</div>
        <div><Highlight content={`T = (V, E)`} lang="python" /></div>
        <div className="mtop5p">
            <ul>
                <li><code><b>V</b></code> -&gt; Set of Nodes (Vertices)</li>
                <li><code><b>E</b></code> -&gt; Set of directed edges (from parent to child)</li>
            </ul>
        </div>
    </div>
    <div className="mtop15p"><h5 className="blog-head"><b>Example Binary Tree:</b></h5></div>
    <div className="mtop15p"><Highlight content={GRAPH_NOTATION_EXAMPLE} lang="java" /></div>
    <div className="mtop5p">
        <ul>
            <li><b>V = &#123;A, B, C, D, E, F&#125;</b></li>
            <li><b>E = &#123;(A, B), (A, C), (B, D), (B, E), (C, F)&125;</b></li>
        </ul>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Binary Tree Terms (Graph Perspective)</b></h2></div>
    <div className="mtop15p">
        <SimpleTable header={["Tree Term","Graph Equivalent"]} 
        columns={[
            ["Root", "Start Node / Head"],
            ["Child","Directed Edge"],
            ["Leaf Node","Node with no children"],
            ["Subtree","Subgraph"],
            ["Depth/Height","Path length"],
          ]} />
    </div>
 </div>);
};

export default Introduction;