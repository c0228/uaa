
import React from "react";

const Conclusion = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
    <div>While <b>Big-O</b> tells us the worst-case ceiling for an algorithm’s growth, <b>Little-o</b> dives 
    deeper — it tells us whether an algorithm grows <b>strictly slower</b> than a given benchmark function.</div>
    <div className="mtop15p"><h4 className="blog-head"><b>Key Takeaways:</b></h4></div>
    <div className="mtop15p">
        <ul>
            <li>Use <b>Little-o</b> when you want to prove that your algorithm is <b>better than</b> (but not equal to) some complexity class.</li>
            <li>In practice, <b>Python experiments</b> with ratios help develop an intuitive sense of asymptotic growth.</li>
            <li>Little-o is <b>important in theory</b>, such as in optimization proofs or competitive analysis, but rarely used in code documentation.</li>
        </ul>
    </div>
    <div>So next time you think your algorithm is faster than <code><b>O(n^2)</b></code>, check — maybe it’s in <code><b>o(n^2)!</b></code></div>
 </div>);
};

export default Conclusion;