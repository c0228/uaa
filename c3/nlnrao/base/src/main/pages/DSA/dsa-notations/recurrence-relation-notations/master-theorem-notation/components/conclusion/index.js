import React from "react";

const Conclusion = () =>{
 return (<div className="mtop35p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
    <div className="mtop15p">The <b>Master Theorem Notation</b> is a powerful tool for quickly solving recurrence relations 
    that arise from divide-and-conquer algorithms. It saves you from expanding the recurrence manually and provides an elegant 
    shortcut to understanding the algorithm’s growth rate.
    </div>
    <div className="mtop15p">By matching your recurrence to the standard form, and applying one of the three cases, you can 
    determine complexities like:</div>
    <div>
        <ul>
            <li><b>O(n log n)</b> for Merge Sort</li>
            <li><b>O(log n)</b> for Binary Search</li>
            <li><b>O(n<ssup>2</ssup>)</b> for certain recursive brute-force algorithms</li>
        </ul>
    </div>
 </div>);
};

export default Conclusion;