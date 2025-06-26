import React from "react";
import { Highlight, Card } from "e-ui-react";

const PIP_NOTATION_EXPLAIN = `        root
       /    \\
   left     right
`;

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><i>
        <div>In computer science, trees are hierarchical data structures used in organizing, sorting, and 
            searching data. But how do you <b>visit or access every node</b> in a tree?</div>
        <div className="mtop15p">
            <div>That's where <b>tree traversal</b> comes in. Three primary depth-first traversal techniques are:</div>
            <div>
                <ul>
                    <li><b>Preorder</b></li>
                    <li><b>Inorder</b></li>
                    <li><b>Postorder</b></li>
                </ul>
            </div>
            <div>Each follows a different order of visiting nodes, and understanding them is key to mastering binary 
            trees, expression trees, syntax trees, and more.</div>
        </div>
    </i></div>
    <div className="mtop15p"><h2 className="blog-head"><b>Introduction</b></h2></div>
    <div className="mtop15p"><h4 className="blog-head"><b>What is Tree Traversal?</b></h4></div>
    <div className="mtop5p">
        <div><b>Tree Traversal</b> is the process of visiting each node in a tree <b>exactly once</b> in a specific order. 
        The goal can be:</div>
        <div>
            <ul>
                <li>Accessing all elements</li>
                <li>Searching for a node</li>
                <li>Evaluating an expression</li>
                <li>Printing the structure</li>
            </ul>
        </div>
    </div>

    <div className="mtop15p"><h4 className="blog-head"><b>Notations Explained</b></h4></div>
    <div className="mtop5p">Given a binary tree node:</div>
    <div className="mtop5p">
        <Highlight content={PIP_NOTATION_EXPLAIN} lang="css" />
    </div>
    <div className="mtop15p">
        <div>We define three types of traversals:</div>
        <div>
            <ol>
                <li className="mtop15p">
                    <div><h5 className="blog-head"><b>Preorder (NLR)</b></h5></div>
                    <div>
                        <ul>
                            <li>Visit <b>Node</b></li>
                            <li>Traverse <b>Left subtree</b></li>
                            <li>Traverse <b>Right subtree</b></li>
                        </ul>
                    </div>
                    <div>
                        <Card padding={15} backgroundColor="#eee">
                            <b>Order:</b> <code><b>Root -&gt; Left -&gt; Right</b></code>
                        </Card>
                    </div>
                </li>
                <li className="mtop15p">
                    <div><h5 className="blog-head"><b>Inorder (LNR)</b></h5></div>
                    <div>
                        <ul>
                            <li>Traverse <b>Left subtree</b></li>
                            <li>Visit <b>Node</b></li>
                            <li>Traverse <b>Right subtree</b></li>
                        </ul>
                    </div>
                    <div>
                        <Card padding={15} backgroundColor="#eee">
                            <b>Order:</b> <code><b>Left -&gt; Root -&gt; Right</b></code>
                        </Card>
                    </div>
                </li>
                <li className="mtop15p">
                    <div><h5 className="blog-head"><b>Postorder (LRN)</b></h5></div>
                    <div>
                        <ul>
                            <li>Traverse <b>Left subtree</b></li>
                            <li>Traverse <b>Right subtree</b></li>
                            <li>Visit <b>Node</b></li>
                        </ul>
                    </div>
                    <div>
                        <Card padding={15} backgroundColor="#eee">
                            <b>Order:</b> <code><b>Left -&gt; Right  -&gt; Root</b></code>
                        </Card>
                    </div>
                </li>
            </ol>
        </div>
    </div>
 </div>);
};

export default Introduction;