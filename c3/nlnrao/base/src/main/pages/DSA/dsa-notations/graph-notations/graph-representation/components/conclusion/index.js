import React from "react";
import { Card } from "e-ui-react";

const Conclusion = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
    <div className="mtop15p">
        <div>Understanding the notation <code><b>G = (V, E)</b></code> is the first step to mastering graph theory. 
        It gives a clear blueprint of:</div>
        <div>
            <ul>
                <li>The <b>structure</b> of the graph</li>
                <li>The <b>data</b> needed to implement it</li>
                <li>The <b>basis</b> for building advanced algorithms</li>
            </ul>
        </div>
        <div>Choosing the right representation (edge list, matrix, or list) depends on the use case — such 
            as <b>space efficiency</b>, <b>lookup speed</b>, or <b>graph density</b>.</div>
        <div>
            <Card padding={15} backgroundColor="#eee">
                Whether you’re building a social network or finding the shortest path on a map, every graph 
                begins with just one line: <code><b>G = (V, E)</b></code>
            </Card>
        </div>
    </div>
 </div>);
};

export default Conclusion;