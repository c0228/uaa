import React from "react";

const Conclusion = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
   <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
   <div>
      <ul>
         <li className="mtop5p"><code><b>bind()</b></code> - Doesn’t call immediately, returns a new function 
         with <code><b>this</b></code> locked for later use.</li>
         <li className="mtop5p"><code><b>call()</b></code> - Calls immediately with <code><b>this</b></code> set and 
         arguments passed individually.</li>
         <li className="mtop5p"><code><b>apply()</b></code> - Calls immediately with <code><b>this</b></code> set and 
         arguments passed as an array.</li>
      </ul>
   </div>
   <div><h5 className="blog-head"><b>When to use what?</b></h5></div>
   <div>
      <ul>
         <li className="mtop5p">Use <code><b>bind()</b></code> when you want to save a function to call later with a fixed <code><b>this</b></code>.</li>
         <li className="mtop5p">Use <code><b>call()</b></code> when you have arguments listed individually.</li>
         <li className="mtop5p">Use <code><b>apply()</b></code> when arguments are already in an array.</li>
      </ul>
   </div>
   <div className="mtop5p">Think of it like this:</div>
   <div className="mbot15p">
      <ul>
         <li className="mtop5p"><b>bind = “Bind now, call later”</b></li>
         <li className="mtop5p"><b>call = “Bind and call now” (list arguments)</b></li>
         <li className="mtop5p"><b>apply = “Bind and call now” (array arguments)</b></li>
      </ul>
   </div>
 </div>);
};

export default Conclusion;