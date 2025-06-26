import React from "react";
import { Icon, Card } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const Conclusion = () =>{
 const DisplayIcon = ({ status }) => <Icon type="FontAwesome" name={(status==='Y'?'fa-check-circle':'fa-times-circle')} color={(status==='Y'?'green':'red')} size={16} /> 
 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Conclusion: When to Use Adjacency List?</b></h2></div>
    <div className="mtop15p">
        <SimpleTable header={["Feature","Adjacency List"]} 
        columns={[
            ["Space Efficient (Sparse)",(<div><DisplayIcon status="Y" /> Yes</div>)],
            ["Lookup Time (Edge exists?)",(<div><DisplayIcon /> O(V) in worst case</div>)],
            ["Traversal Performance",(<div><DisplayIcon status="Y" /> Good</div>)],
            ["Memory Usage",(<div><DisplayIcon status="Y" /> Low for sparse graphs</div>)],
            ["Best Use Case",(<div>Sparse, Large Graphs</div>)],
          ]} />
    </div>
    <div className="mtop5p">
        <div>The <b>Adjacency List</b> is a practical and scalable way to represent graphs when:</div>
        <div>
            <ul>
                <li>The number of edges is <b>much less</b> than <b>V<sup>2</sup></b>.</li>
                <li>You care about <b>space optimization</b>.</li>
                <li>You plan to use traversal algorithms extensively.</li>
            </ul>
        </div>
        <div>
            <Card padding={15} backgroundColor="#eee">
            For most real-world scenarios where graphs are sparse, <b>Adjacency List is the go-to choice</b> for its elegance and efficiency.
            </Card>
        </div>
    </div>
 </div>);
};

export default Conclusion;