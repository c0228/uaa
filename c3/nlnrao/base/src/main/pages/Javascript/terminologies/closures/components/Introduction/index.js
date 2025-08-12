import React from "react";
import { Card, Highlight } from "e-ui-react";

const PROBLEM_EXAMPLE_JS =  `let counter = 0;
function increment() {
  counter++;
  console.log(counter);
}

increment(); // 1
increment(); // 2
counter = 99; // Oops! anyone can modify it
increment(); // 100`;

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p">
      <Card padding={15} backgroundColor="#eee">
         <div><h4 className="blog-head"><b>The Problem Before -</b></h4></div>
         <div className="mtop15p">Before developers understood <b>closures</b>, managing <b>private data</b> or preserving 
         a variable’s state between function calls in JavaScript was tricky.</div>
         <div className="mtop5p">Problems included:</div>
         <div>
            <ul>
               <li className="mtop5p"><b>No native private variables –</b> Any variable declared in an object was accessible and modifiable from outside.</li>
               <li className="mtop5p"><b>Loss of state –</b> Once a function finished executing, its local variables were gone.</li>
               <li className="mtop5p"><b>Reusing variables safely –</b> Global variables often caused naming conflicts and unintended overwrites.</li>
            </ul>
         </div>
         <div className="mtop5p"><b>Example problem:</b></div>
         <div className="mtop5p">
            <Highlight content={PROBLEM_EXAMPLE_JS} lang="javascript" />
         </div>
         <div className="mtop5p">
            Here, we cannot truly protect the <code><b>counter</b></code> variable from outside changes.
         </div>
         <div className="mtop5p">JavaScript introduced <b>closures</b> as a natural language feature to solve such problems.</div>
      </Card>
   </div>
   <div className="mtop15p"><h2 className="blog-head"><b>Introduction – What Is a Closure?</b></h2></div>
   <div className="mtop15p">A <b>closure</b> is created when a function <b>remembers</b> and <b>accesses</b> variables from 
   its <b>outer function’s scope</b>, even after that outer function has finished executing.</div>
   <div className="mtop5p">In simple terms:</div>
   <div className="mtop5p">A closure allows a function to "remember" where it was created and keep access to that scope.</div>
   <div className="mtop15p">
      <div>Closures are formed automatically in JavaScript when:</div>
      <div>
         <ul>
            <li className="mtop5p">You define a function <b>inside another function.</b></li>
            <li className="mtop5p">The inner function uses variables from the outer function.</li>
         </ul>
      </div>
   </div>
   <div className="mtop15p">
      <Card padding={15} backgroundColor="#eee">
         <div><h4 className="blog-head"><b>Related concepts:</b></h4></div>
         <div>
            <ul>
               <li className="mtop5p"><b>Lexical Scope -</b> Scope determined by where functions are written in code.</li>
               <li className="mtop5p"><b>Scope Chain -</b> How JavaScript looks for variables in outer scopes when not found 
               in the current one.</li>
            </ul>
         </div>
      </Card>
   </div>
 </div>);
};

export default Introduction;