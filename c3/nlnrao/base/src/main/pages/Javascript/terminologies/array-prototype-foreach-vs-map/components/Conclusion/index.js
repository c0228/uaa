import React from "react";

const Conclusion = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
    <div className="mtop15p">While <code><b>forEach()</b></code> and <code><b>map()</b></code> both help in 
    iterating over arrays more cleanly than traditional loops, they solve <b>different problems:</b></div>
    <div>
      <ul>
         <li className="mtop5p">Use <code><b>forEach()</b></code> when you just want to perform an action for each 
         element (like logging, saving to a database, or updating something in place).</li>
         <li className="mtop5p">Use <code><b>map()</b></code> when you need to <b>transform</b> each element 
         and <b>create a new array</b>.</li>
      </ul>
    </div>
    <div className="mtop5p">Remember:</div>
    <div>
      <div className="mtop5p"><b>forEach()</b> is for side effects,</div>
      <div className="mtop5p"><b>map()</b> is for transformations.</div>
    </div>
    <div className="mtop5p mbot15p">By understanding their differences, we’ll write cleaner, more intention-revealing 
      JavaScript code.</div>
 </div>);
};

export default Conclusion;