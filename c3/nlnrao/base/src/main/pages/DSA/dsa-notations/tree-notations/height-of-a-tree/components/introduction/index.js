
import React from "react";
import { Card, Highlight } from "e-ui-react";

const HT_EXAMPLE_STRUCTURE = `        A
       / \\
      B   C
     /     \\
    D       E
             \\
              F
`;

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div><i>Trees are one of the most fundamental data structures in computer science, used in everything from file systems 
    and databases to artificial intelligence and compilers. Understanding their structure is crucial to optimizing algorithms 
    and designing systems. One of the most important properties of a tree is its <b>height</b>, usually denoted as <b>h</b>.
    </i></div>


    <div className="mtop15p"><h2 className="blog-head"><b>Introduction</b></h2></div>
    <div className="mtop15p"><h4 className="blog-head"><b>What is the Height of a Tree?</b></h4></div>
    <div className="mtop5p">In <b>tree notation</b>, the <b>height</b> of a tree is defined as:</div>
    <div className="mtop5p">
        <Card padding={15} backgroundColor="#eee">
            <b>h = The length of the longest path from the root to a leaf node</b>
        </Card>
    </div>
    <div className="mtop5p">This path is measured by the number of <b>edges</b>, not nodes.</div>
    <div className="mtop5p">Alternatively, some definitions (especially in CS problems) define height 
    as the <b>number of levels</b> minus 1.</div>

    <div className="mtop15p"><h4 className="blog-head"><b>Tree Height Notation</b></h4></div>
    <div className="mtop5p">Let’s represent a tree as:</div>
    <div className="mtop5p"><Highlight content={`T = (V, E)`} lang="python" /></div>
    <div className="mtop5p">
        <ul>
            <li><b>V:</b> Set of vertices (nodes)</li>
            <li><b>E:</b> Set of edges (connections between nodes)</li>
            <li><b>h:</b> Height of the tree</li>
        </ul>
    </div>

    <div className="mtop15p"><h5 className="blog-head"><b>Example Tree</b></h5></div>
    <div className="mtop5p"><Highlight content={HT_EXAMPLE_STRUCTURE} lang="python" /></div>
    <div className="mtop5p">
        <ul>
            <li><b>Root:</b> A</li>
            <li><b>Longest path:</b> A -&gt; C -&gt; E -&gt; F</li>
            <li><b>Number of edges in the longest path:</b> 3</li>
        </ul>
    </div>
    <div><b>Height h</b> = 3</div>

    <div className="mtop15p"><h2 className="blog-head"><b>Why is Tree Height Important?</b></h2></div>
    <div className="mtop15p">
        <ul>
            <li>Determines <b>tree balance</b></li>
            <li>Affects <b>search time</b> (e.g., in Binary Search Trees: O(h))</li>
            <li>Impacts <b>memory & recursion depth</b></li>
            <li>Critical for <b>AVL trees</b>, <b>B-trees</b>, and <b>heaps</b></li>
        </ul>
    </div>
 </div>);
};

export default Introduction;