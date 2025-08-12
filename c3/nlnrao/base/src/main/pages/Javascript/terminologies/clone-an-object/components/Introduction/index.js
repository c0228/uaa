import React from "react";
import { Card, Highlight } from "e-ui-react";

const PROBLEM_EXAMPLE_CLONE = `const obj1 = { name: "Alice" };
const obj2 = obj1; // Not a copy, just another reference

obj2.name = "Bob";
console.log(obj1.name); // Bob (changed unexpectedly!)`;

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p">
      <Card padding={15} backgroundColor="#eee">
         <div><h4 className="blog-head"><b>The Problem Before</b></h4></div>
         <div className="mtop15p">In JavaScript, <b>objects are reference types</b>. This means:</div>
         <div>
            <ul>
               <li className="mtop5p">When you assign one object to another variable, <b>both variables point to the same object in memory.</b></li>
               <li className="mtop5p">If you change one, the other changes too.</li>
            </ul>
         </div>
         <div className="mtop5p">Example of the problem:</div>
         <div className="mtop5p">
            <Highlight content={PROBLEM_EXAMPLE_CLONE} lang="javascript" />
         </div>
         <div className="mtop5p">This becomes problematic when you <b>want to duplicate an object</b> without affecting 
         the original.</div>
         <div className="mtop5p">Before dedicated cloning methods, developers 
         used <b>manual loops</b> or <code><b>JSON.parse(JSON.stringify(obj))</b></code> to make copies, but these had 
         limitations — especially with <b>nested objects, functions, Dates, Maps, Sets,</b> etc.</div>
      </Card>
   </div>
   <div className="mtop15p"><h2 className="blog-head"><b>Introduction  – What Is Object Cloning?</b></h2></div>
   <div className="mtop15p"><b>Cloning</b> means creating an exact copy of an object <b>with a different reference</b> in 
   memory. There are two main types:</div>
   <div>
      <ul>
         <li className="mtop5p"><b>Shallow Clone -</b> Copies only one level deep; nested objects are still shared by reference.</li>
         <li className="mtop5p"><b>Deep Clone -</b> Copies all levels recursively; nested objects are truly independent.</li>
      </ul>
   </div>
 </div>);
};

export default Introduction;