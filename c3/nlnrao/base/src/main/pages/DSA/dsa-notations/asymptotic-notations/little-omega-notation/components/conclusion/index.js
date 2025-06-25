import React from "react";

const Conclusion = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
    <div className="mtop15p">Little-Omega (&omega;) is less commonly used in practical algorithm analysis compared to Big-O, but it is 
    mathematically significant when:</div>
    <div>
        <ul>
            <li>You need to <b>prove that a function outpaces another</b>, without bounding it above or even at the same rate.</li>
            <li>You're analyzing <b>non-tight</b> lower bounds in theoretical computer science or complexity theory.</li>
        </ul>
    </div>
    <div>It helps to sharpen your understanding of growth rates and adds another precise tool to your asymptotic toolbox.</div>
    <div><h5 className="blog-head"><b>Summary:</b></h5></div>
    <div>
        <ul>
            <li>Use <code><b>&omega;(g(n))</b></code> to show <b>strictly faster growth</b> than <code><b>g(n)</b></code></li>
            <li>It gives a <b>non-tight lower bound</b></li>
            <li>It’s different from <code><b>&Omega;(g(n))</b></code>, which allows the same rate of growth</li>
        </ul>
    </div>
 </div>);
};

export default Conclusion;