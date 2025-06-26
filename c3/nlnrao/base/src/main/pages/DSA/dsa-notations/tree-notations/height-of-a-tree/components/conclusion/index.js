
import React from "react";
import { Card } from "e-ui-react";

const Conclusion = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
    <div className="mtop15p">
        <ul>
            <li>The <b>height of a tree (h)</b> is the number of edges on the <b>longest downward path</b> from the root to a leaf.</li>
            <li>It plays a critical role in determining tree <b>performance</b>, <b>depth</b>, and <b>balance</b>.</li>
            <li>Whether you're optimizing a database index or managing recursion, height is a <b>must-know concept</b> in tree algorithms.</li>
        </ul>
    </div>
    <div>
        <Card padding={15} backgroundColor="#eee">
            In the forest of algorithms, the <b>height</b> of a tree is what decides how deep you have to go to find your answer.
        </Card>
    </div>
 </div>);
};

export default Conclusion;