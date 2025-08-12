import React from "react";
import { Card } from "e-ui-react";

const Conclusion = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
   <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
   <div className="mtop15p">Arrow functions not only make JavaScript code <b>shorter</b> but 
   also <b>simplify the handling of <code>this</code></b>:</div>
   <div>
      <ul>
         <li className="mtop5p"><b>Regular functions:</b> <code><b>this</b></code> depends on <b>how</b> the function is called.</li>
         <li className="mtop5p"><b>Arrow functions:</b> <code><b>this</b></code> is <b>lexically inherited</b> from the surrounding scope.</li>
      </ul>
   </div>
   <div className="mtop5p"><h5 className="blog-head"><b>When to use arrow functions for <code>this</code>?</b></h5></div>
   <div>
      <ul>
         <li className="mtop5p">Inside callbacks, timers, or event handlers where you want <code><b>this</b></code> to refer 
         to the outer scope.</li>
         <li className="mtop5p">Avoid using arrow functions as object methods if you want <code><b>this</b></code> to refer 
         to that object itself.</li>
      </ul>
   </div>
   <div className="mtop5p mbot15p">
      <Card padding={15} backgroundColor="#eee">
         <b>In short:</b><br/> Arrow functions make <code><b>this</b></code> predictable by removing its dynamic nature and binding 
         it to the surrounding context.
      </Card>
   </div>
 </div>);
};

export default Conclusion;