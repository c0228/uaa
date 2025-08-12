import React from "react";
import { Card } from "e-ui-react";

const Conclusion = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
   <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
   <div className="mtop15p">Cloning objects in JavaScript is essential when you want to <b>duplicate data without sharing references.</b></div>
   <div>
      <ul>
         <li className="mtop5p"><b>Use Shallow Clone</b> (<code><b>Object.assign or {`{...obj}`}</b></code>) when objects are flat.</li>
         <li className="mtop5p"><b>Use Deep Clone</b> (<code><b>structuredClone</b></code>, <code><b>Lodash</b></code>, or <code><b>JSON trick</b></code>) when you have nested objects.</li>
         <li className="mtop5p">For <b>complex data structures</b> (Dates, Maps, Sets, functions), 
         choose <b>structuredClone</b> or <b>Lodash</b> for safety.</li>
      </ul>
   </div>
   <div className="mtop5p mbot15p">
      <Card padding={15} backgroundColor="#eee">
         <b>Golden Rule:</b><br/> Shallow copy is faster but not independent for nested objects; deep copy is safer but more 
         expensive in performance.
      </Card>
   </div>
 </div>);
};

export default Conclusion;