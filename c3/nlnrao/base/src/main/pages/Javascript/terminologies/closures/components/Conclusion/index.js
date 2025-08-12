import React from "react";
import { Card } from "e-ui-react";

const Conclusion = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
   <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
   <div className="mtop15p">
      <div>Closures are one of JavaScript’s most powerful features, allowing:</div>
      <div>
         <ul>
            <li className="mtop5p"><b>Data privacy</b> (simulating private variables)</li>
            <li className="mtop5p"><b>State preservation</b> across function calls</li>
            <li className="mtop5p"><b>Safe asynchronous handling</b> (timers, events)</li>
         </ul>
      </div>
   </div>
   <div className="mtop15p"><h5 className="blog-head"><b>Key takeaways:</b></h5></div>
   <div>
      <ul>
         <li className="mtop5p">Closures form naturally in JavaScript — you don’t need special syntax.</li>
         <li className="mtop5p">They rely on <b>lexical scoping</b> — a function remembers variables from where it was defined, not where it’s called.</li>
         <li className="mtop5p">Overusing closures can lead to <b>memory leaks</b> if references to outer scopes are not released when no longer needed.</li>
      </ul>
   </div>
   <div className="mtop15p mbot15p">
      <Card padding={15} backgroundColor="#eee">
         <b>In short:</b> Closures let functions “carry” their environment with them, making JavaScript flexible, powerful, and 
         sometimes tricky for beginners.
      </Card>
   </div>
 </div>);
};

export default Conclusion;