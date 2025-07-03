import React from "react";
import { Icon } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const Others = () =>{

const DisplayIcon = ({ status }) =>{
    return (<Icon type="FontAwesome" name={(status=='Y'?'fa-check-circle':'fa-times-circle')} 
        color={(status=='Y'?'green':'red')} />);
};

 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Asymptotic Notations</b></h2></div>
    <div className="mtop15p">
        <SimpleTable header={["Notation","Definition","Quick Sort"]} 
            columns={[
                [(<b>Big-O (O)</b>),"Worst-case time complexity",(<div><code><b>O(n^2)</b></code> (when pivot is bad)</div>)],
                [(<b>Omega (&Omega;)</b>),"Best-case time complexity",(<div><code><b>&Omega;(n log n)</b></code></div>)],
                [(<b>Theta (&Theta;)</b>),"Average-case complexity",(<div><code><b>&Theta;(n log n)</b></code></div>)],
                [(<b>Little-o (o)</b>),"Strictly lower than Big-O",(<div><code><b>o(n^2)</b></code></div>)],
                [(<b>Little-omega (&omega;)</b>),"Strictly greater than Omega",(<div><code><b>&omega;(n)</b></code></div>)],
            ]} />
    </div>
    <div>
        <ul>
            <li className="mtop5p"><b>Worst Case:</b> When the pivot is always the smallest or largest</li>
            <li className="mtop5p"><b>Best Case:</b> When pivot divides the array exactly in half</li>
            <li className="mtop5p"><b>Average Case:</b> Most random inputs</li>
        </ul>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Space Complexity</b></h2></div>
    <div className="padLeft15p">
        <div><h4 className="blog-head"><b>Auxiliary Space</b></h4></div>
        <div>
            <ul>
                <li className="mtop5p"><u>In-place for <b>Lomuto</b> or <b>Hoare</b> partition schemes</u>: <code><b>O(log n)</b></code> due to recursion stack</li>
                <li className="mtop5p"><u>Non-in-place (like array split in JS/Python above)</u>: <code><b>O(n)</b></code> due to new arrays</li>
            </ul>
        </div>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Stability</b></h2></div>
    <div>
        <ul>
            <li className="mtop5p">
                <div><b>Quick Sort is not stable</b> in its in-place form.</div>
                <div><u>Example</u>: Duplicate values may not retain their relative ordering.</div>
                <div>However, stable versions can be implemented using additional memory.</div>
            </li>
        </ul>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Adaptability</b></h2></div>
    <div>
        <ul>
            <li className="mtop5p">
                <div><b>Quick Sort is NOT adaptive.</b></div>
                <div>Even if the array is nearly sorted, it does not optimize performance unlike 
                algorithms like <b>Insertion Sort</b>.</div>
            </li>
        </ul>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>When to Use Quick Sort?</b></h2></div>
    <div className="mtop15p">
        <SimpleTable header={["Use When", "Yes/No"]} 
        columns={[
            ["Large datasets with random distribution",(<div><DisplayIcon status="Y" /> <b>Yes</b></div>)],
            ["In-place sorting with limited memory	",(<div><DisplayIcon status="Y" /> <b>Yes</b></div>)],
            ["Datasets requiring guaranteed worst-case performance",(<div><DisplayIcon /> <b>No</b></div>)],
            ["Stability is required",(<div><DisplayIcon /> <b>No</b></div>)],
            ["Average-case performance is more important than worst",(<div><DisplayIcon status="Y" /> <b>Yes</b></div>)],
          ]} />
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Summary</b></h2></div>
    <div className="mtop15p">
        <SimpleTable header={["Property","Quick Sort"]} 
        columns={[
            [(<div><b>Time Complexity</b></div>),(<div>Best: <code><b>O(n log n)</b></code>, Worst: <code><b>O(n<sup>2</sup>)</b></code></div>)],
            [(<div><b>Space Complexity</b></div>),(<div><code><b>O(log n)</b></code> (in-place) or <code><b>O(n)</b></code></div>)],
            [(<div><b>Stability</b></div>),(<div><DisplayIcon /> <b>Not Stable</b></div>)],
            [(<div><b>Adaptive</b></div>),(<div><DisplayIcon /> <b>No</b></div>)],
            [(<div><b>In-place</b></div>),(<div><DisplayIcon status="Y" /> Yes (with partitioning)</div>)],
            [(<div><b>Real-world Use</b></div>),(<div><DisplayIcon status="Y" /> Yes (most common)</div>)]
          ]} />
    </div>
 </div>);
};

export default Others;