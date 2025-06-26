import React from "react";
import { Card } from "e-ui-react";

const Conclusion = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
    <div className="mtop15p">
        <ul>
            <li>A <b>Binary Tree</b> is a structured graph with a special constraint: each node has at most <b>two children</b>.</li>
            <li>It is defined by <code><b>T = (V, E)</b></code> where <code><b>V</b></code> is a set of nodes, 
            and <code><b>E</b></code> is a set of directed edges from parent to child.</li>
            <li>Binary Trees are used in:
                <ul>
                    <li><b>Binary Search Trees (BST)</b></li>
                    <li><b>Heaps</b></li>
                    <li><b>Expression Trees</b></li>
                    <li><b>File Systems</b></li>
                </ul>
            </li>
            <li>Whether you're solving tree traversal or designing a compiler, binary tree notation is the <b>first building block</b>.</li>
        </ul>
    </div>
    <div className="mtop5p">
        <Card padding={15} backgroundColor="#eee">
          A Binary Tree is a graph, shaped like a tree — rooted in logic, branching into algorithms.  
        </Card>
    </div>
 </div>);
};

export default Conclusion;