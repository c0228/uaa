import React from "react";
import { Card } from "e-ui-react";

const Conclusion = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
    <div className="mtop15p">
        <ul>
            <li><b>Preorder</b>, <b>Inorder</b>, and <b>Postorder</b> are core notations used to traverse binary trees.</li>
            <li>These notations help in <b>printing</b>, <b>evaluating</b>, or <b>manipulating</b> tree structures.</li>
            <li>Each serves a different purpose:
                <ul>
                    <li><b>Preorder</b> -&gt; Clone/Serialize a tree</li>
                    <li><b>Inorder</b> -&gt; Retrieve sorted data (for BSTs)</li>
                    <li><b>Postorder</b> -&gt; Safely delete or evaluate trees</li>
                </ul>
            </li>
        </ul>
    </div>
    <div>
        <Card padding={15} backgroundColor="#eee">
            <div><b>Note:</b></div>
            <div>Mastering <b>tree traversals</b> opens the door to <b>recursion</b>, <b>search optimization</b>, and <b>advanced tree algorithms</b>.</div>
        </Card>
    </div>
 </div>);
};

export default Conclusion;