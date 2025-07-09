import React from "react";
import { Icon } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const Others = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Space Complexity</b></h2></div>
    <div className="mtop15p">
        <SimpleTable header={["Type", "Value"]} 
                columns={[
                    [(<div><b>Auxiliary Space</b></div>),(<div><code><b>O(n + k)</b></code></div>)],
                    [(<div><b>In-place</b></div>),(<div><Icon type="FontAwesome" name="fa-times-circle" color="red" size={14} /> <b>No</b></div>)],
                ]} />
    </div>
    <div className="mtop15p">
        <div>It needs extra space for:</div>
        <div>
            <ul>
                <li className="mtop5p">Count array of size <code><b>k</b></code></li>
                <li className="mtop5p">Output array of size <code><b>n</b></code></li>
            </ul>
        </div>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Stability of Counting Sort</b></h2></div>
    <div className="mtop15p">
        <div><b>Yes, Counting Sort is stable</b>, meaning:</div>
        <div>
            <ul>
                <li className="mtop5p">Equal elements retain their original order in the sorted output.</li>
            </ul>
        </div>
        <div className="mtop5p">This is crucial when sorting records with secondary keys.</div>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Adaptability</b></h2></div>
    <div className="mtop15p">
        <ul>
            <li>Not adaptive.</li>
            <li className="mtop5p">Always takes <code><b>O(n + k)</b></code> time, regardless of the order of input.</li>
        </ul>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>When to Use Counting Sort?</b></h2></div>
    <div className="mtop15p">
        <div>Use Counting Sort when:</div>
        <div>
            <ul>
                <li className="mtop5p">You are sorting integers or characters.</li>
                <li className="mtop5p">The range <code><b>k</b></code> is not significantly larger than <code><b>n</b></code>.</li>
                <li className="mtop5p">You need a <b>stable and fast</b> sort for small datasets.</li>
            </ul>
        </div>
    </div>
    <div className="mtop15p">
        <div>Avoid it for:</div>
        <div>
            <ul>
                <li className="mtop5p">Large ranges (<code><b>k &gt;&gt; n</b></code>)</li>
                <li className="mtop5p">Floating-point numbers or custom objects without key conversion</li>
            </ul>
        </div>
    </div>
 </div>);
};

export default Others;