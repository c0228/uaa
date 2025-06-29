import React from "react";

const Conclusion = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
    <div className="mtop15p">
      <div><b>Bloom Filters</b> are a brilliant example of how theoretical computer science ideas translate into real-world 
      efficiency. They’re ideal when:</div>
      <div>
         <ul>
            <li>Memory is limited.</li>
            <li>Some false positives are okay.</li>
            <li>You need <b>fast, scalable</b> set membership testing.</li>
         </ul>
      </div>
      <div>Whether you're building search engines, DNS systems, or security 
      filters, <b>Bloom Filters offer a lightweight yet powerful solution</b>.</div>
    </div>
 </div>);
};

export default Conclusion;