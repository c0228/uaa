import React from "react";

const Conclusion = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
   <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
   <div className="mtop15p">Currying transforms multi-argument functions into a <b>chain of single-argument 
   functions,</b> making your code:</div>
   <div>
      <ul>
         <li className="mtop5p"><b>More reusable</b> (fixing certain parameters easily)</li>
         <li className="mtop5p"><b>Easier to compose</b> (chaining small functional blocks)</li>
         <li className="mtop5p"><b>Cleaner and more declarative</b> in functional programming styles</li>
      </ul>
   </div>
   <div className="mtop5p">It’s not just a “cool trick” from mathematics — it’s a <b>practical tool</b> for 
   writing scalable, maintainable JavaScript code.</div>
   <div className="mtop5p">Think of it like a <b>vending machine:</b></div>
   <div className="mbot15p">
      <ul>
         <li className="mtop5p">Normally, you put in all coins at once (normal function).</li>
         <li className="mtop5p">With currying, you can <b>insert one coin at a time,</b> and the machine remembers until 
         you’re ready to get the snack. </li>
      </ul>
   </div>
 </div>);
};

export default Conclusion;