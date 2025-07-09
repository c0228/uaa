import React from "react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const Conclusion = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Summary</b></h2></div>
    <div className="mtop15p">
        <SimpleTable header={["Property","Details"]} 
        columns={[
            ["Type","Non-comparative, Stable"],
            ["Time Complexity",(<div><code><b>O(nk)</b></code></div>)],
            ["Space Complexity",(<div><code><b>O(n + k)</b></code></div>)],
            ["Stable","Yes"],
            ["Adaptive","No"],
            ["Best Use Case","Sorting integers with limited digits"],
            ["Language Support","Python, Java, JavaScript examples provided"]
          ]} />
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
    <div className="mtop15p">Radix Sort is a powerful, linear-time sorting algorithm under the right constraints. It is 
    non-comparative, stable, and well-suited for sorting large sets of integers or strings where digit-wise analysis is 
    efficient.</div>
    <div className="mtop15p">However, it comes with caveats — especially in terms of space and applicability. If you're 
    dealing with numerical datasets and performance matters, <b>Radix Sort may be your secret weapon</b>.</div>
    <div className="mtop15p mbot15p">If you're building fast, stable sort mechanisms in low-level data 
    pipelines, <b>Radix Sort</b> deserves a place in your algorithmic toolbox!</div>
 </div>);
};

export default Conclusion;