import React from "react";
import { Card, Highlight } from "e-ui-react";

const BEFORE_PROBLEM_EXAMPLE = `const person = {
  name: "Alice",
  greet: function() {
    console.log(\`Hello, my name is \${this.name}\`);
  }
};

const greetFn = person.greet;
greetFn(); // Hello, my name is undefined`;

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p">
      <Card padding={15} backgroundColor="#eee">
         <div><h4 className="blog-head"><b>The Problem Before</b></h4></div>
         <div className="mtop15p">
            Before <code><b>bind()</b></code>, <code><b>call()</b></code> and <code><b>apply()</b></code> were introduced, 
            developers faced a recurring problem with <b>function borrowing</b> and <b><code>this</code> keyword binding.</b>
         </div>
         <div className="mtop15p">Consider this situation:</div>
         <div className="mtop15p">
            <Highlight content={BEFORE_PROBLEM_EXAMPLE} lang="javascript" />
         </div>
         <div className="mtop15p"><h5 className="blog-head"><b>Why undefined?</b></h5></div>
         <div className="mtop5p">Because when we store <code><b>person.greet</b></code> in a separate variable, it loses 
         its <code><b>this</b></code> <b>reference</b> — now <code><b>this</b></code> points to the global object.</div>
         <div className="mtop5p">Before these methods, to fix this we had to:</div>
         <div>
            <ul>
               <li className="mtop5p">Store <code><b>this</b></code> in another variable (<code><b>const self = this</b></code>)</li>
               <li className="mtop5p">Write custom wrapper functions</li>
               <li className="mtop5p">Manually reassign method calls</li>
            </ul>
         </div>
         <div className="mtop5p">This was messy.</div>
         <div className="mtop5p">JavaScript introduced <code><b>bind()</b></code>, <code><b>call()</b></code>, and <code><b>apply()</b></code> to 
         explicitly control the value of <code><b>this</b></code> and pass arguments more flexibly.</div>
      </Card>
   </div>
   <div className="mtop15p"><h2 className="blog-head"><b>Introduction – What Are They?</b></h2></div>
   <div className="mtop15p">
      All three methods — <code><b>bind()</b></code>, <code><b>call()</b></code>, and <code><b>apply()</b></code> — are 
      available on <b>JavaScript functions</b> and are used to <b>set the</b> <code><b>this</b></code> <b>value</b> explicitly 
      when calling or preparing a function.
   </div>
   <div>
      <ul>
         <li className="mtop5p"><code><b>bind(thisArg, arg1, arg2, ...)</b></code> - Returns a <b>new function</b> with <code><b>this</b></code> fixed 
         to <code><b>thisArg</b></code> (doesn’t call immediately).</li>
         <li className="mtop5p"><code><b>call(thisArg, arg1, arg2, ...)</b></code> - Calls the function <b>immediately</b> with <code><b>this</b></code> set 
         to <code><b>thisArg</b></code> and arguments passed individually.</li>
         <li className="mtop5p"><code><b>apply(thisArg, [argsArray])</b></code> - Calls the function <b>immediately</b> with <code><b>this</b></code> set 
         to <code><b>thisArg</b></code> and arguments passed as an array.</li>
      </ul>
   </div>
 </div>);
};

export default Introduction;