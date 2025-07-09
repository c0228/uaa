import React from "react";

const Others = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>When to Use Radix Sort?</b></h2></div>
    <div className="mtop15p">
        <div>Use Radix Sort when:</div>
        <div>
            <ul>
                <li className="mtop5p">You are working with <b>non-negative integers</b> (or fixed-length strings with adjustments).</li>
                <li className="mtop5p">You expect large datasets where <b>k (digit count)</b> is small compared to <code><b>n</b></code>.</li>
                <li className="mtop5p">You <b>need stable sort</b> for compound keys (e.g., sorting student records).</li>
            </ul>
        </div>
        <div className="mtop15p">Avoid if:</div>
        <div>
            <ul>
                <li className="mtop5p">You need an in-place algorithm.</li>
                <li className="mtop5p">Data includes floating points, negative numbers, or complex types (needs extra handling).</li>
                <li className="mtop5p"><code><b>k</b></code> is large or unbounded (performance degrades).</li>
            </ul>
        </div>
    </div>
 </div>);
};

export default Others;