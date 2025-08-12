import React from "react";
import { Highlight } from "e-ui-react";

const EXAMPLE_REGULAR_FUNCTION = `function Person(name) {
  this.name = name;
  setTimeout(function() {
    console.log(this.name); // undefined
  }, 1000);
}

new Person("John");
`;

const OUTPUT_REGULAR_FUNCTION = `undefined`;

const EXAMPLE_ARROW_FUNCTION = `function Person(name) {
  this.name = name;
  setTimeout(() => {
    console.log(this.name); // John
  }, 1000);
}

new Person("John");`;

const OUTPUT_ARROW_FUNCTION = `John`;

const EXAMPLE_ARROW_FUNCOBJECT = `const obj = {
  name: "Alice",
  regularFn: function() {
    console.log(this.name); // Alice
  },
  arrowFn: () => {
    console.log(this.name); // undefined (inherits from global scope)
  }
};

obj.regularFn();
obj.arrowFn();`;

const WITHOUT_BIND_REGULARFUNC = `function Counter() {
  this.count = 0;
  setInterval(function() {
    this.count++;
    console.log(this.count); // NaN
  }, 1000);
}

new Counter();`;

const WITHOUT_BIND_ARROWFUNC = `function Counter() {
  this.count = 0;
  setInterval(() => {
    this.count++;
    console.log(this.count); // 1, 2, 3...
  }, 1000);
}

new Counter();`;

const Example = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p"><h2 className="blog-head"><b>Examples</b></h2></div>
   <div className="mtop15p"><h4 className="blog-head"><b>Example 1: Regular Function (Problematic <code><b>this</b></code>)</b></h4></div>
   <div className="mtop15p">
      <Highlight content={EXAMPLE_REGULAR_FUNCTION} lang="javascript" />
   </div>
   <div className="mtop15p"><b>Output:</b></div>
   <div className="mtop15p">
      <Highlight content={OUTPUT_REGULAR_FUNCTION} lang="javascript" />
   </div>
   <div className="mtop5p">Here, <code><b>this</b></code> inside the regular function refers to the global object.</div>

   <div className="mtop15p"><h4 className="blog-head"><b>Example 2: Arrow Function (Inherited <code>this</code>)</b></h4></div>
   <div className="mtop15p">
      <Highlight content={EXAMPLE_ARROW_FUNCTION} lang="javascript" />
   </div>
   <div className="mtop15p"><b>Output:</b></div>
   <div className="mtop15p">
      <Highlight content={OUTPUT_ARROW_FUNCTION} lang="javascript" />
   </div>
   <div className="mtop15p">Here, the arrow function <b>inherits</b> <code><b>this</b></code> <b>from the</b> <code><b>Person</b></code> <b>function’s scope,</b> fixing 
   the problem.</div>

   <div className="mtop15p"><h4 className="blog-head"><b>Example 3: Using Arrow Function in Object Methods</b></h4></div>
   <div className="mtop15p">
      <Highlight content={EXAMPLE_ARROW_FUNCOBJECT} lang="javascript" />
   </div>
   <div className="mtop15p"><b>Key takeaway:</b></div>
   <div>
      <ul>
         <li className="mtop5p">Arrow functions <b>inherit</b> <code><b>this</b></code> <b>from where they were defined</b> (in this case, 
         the global scope, not the object).</li>
      </ul>
   </div>

   <div className="mtop15p"><h4 className="blog-head"><b>Example 4: Nested Functions Without <code>bind()</code></b></h4></div>
   <div className="mtop5p"><h5 className="blog-head"><b>Before ES6 (Regular Functions)</b></h5></div>
   <div className="mtop15p">
      <Highlight content={WITHOUT_BIND_REGULARFUNC} lang="javascript" />
   </div>
   <div className="mtop15p"><b>With Arrow Functions</b></div>
   <div className="mtop15p">
      <Highlight content={WITHOUT_BIND_ARROWFUNC} lang="javascript" />
   </div>
   <div className="mtop5p">Arrow functions solve the <code><b>this</b></code> confusion without extra variables or <code><b>.bind()</b></code>.</div>
 </div>);
};

export default Example;