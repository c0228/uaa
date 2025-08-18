import React from "react";
import { Card, Highlight, Accordian } from "e-ui-react";

const VARDECLARE_EXAMPLE_ES5 = `var name = "John";
var age = 25;`;

const VARDECLARE_EXAMPLE_ES6 = `let name = "John"; // block-scoped
const age = 25;    // block-scoped and cannot be reassigned`;

const FUNCTIONS_EXAMPLE_ES5 = `var add = function(a, b) {
    return a + b;
};`;

const FUNCTIONS_EXAMPLE_ES6 = `const add = (a, b) => a + b; // Arrow function`;

const TL_EXAMPLE_ES5 = `var name = "Alice";
var greeting = "Hello, " + name + "!";`;

const TL_EXAMPLE_ES6 = `let name = "Alice";
let greeting = \`Hello, \${name}!\`;`;

const DP_EXAMPLE_ES5 = `function multiply(a, b) {
  b = (typeof b !== "undefined") ? b : 1;
  return a * b;
}
console.log(multiply(5)); // 5`;

const DP_EXAMPLE_ES6 = `function multiply(a, b = 1) {
  return a * b;
}
console.log(multiply(5)); // 5`;

const CLASSES_EXAMPLE_ES5 = `function Person(name) {
  this.name = name;
}
Person.prototype.sayHello = function() {
  console.log("Hello, " + this.name);
};
var p1 = new Person("John");
p1.sayHello();`;

const CLASSES_EXAMPLE_ES6 = `class Person {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    console.log(\`Hello, \${this.name}\`);
  }
}
let p1 = new Person("John");
p1.sayHello();`;

const MODULES_EXAMPLE_ES5 = `// In math.js
exports.add = function(a, b) {
  return a + b;
};

// In app.js
var math = require('./math');
console.log(math.add(2, 3));`;

const MODULES_EXAMPLE_ES6 = `// In math.js
export function add(a, b) {
  return a + b;
}

// In app.js
import { add } from './math.js';
console.log(add(2, 3));`;

const PROMISES_EXAMPLE_ES5 = `getData(function(a){
  getMoreData(a, function(b){
    getEvenMoreData(b, function(c){
      console.log(c);
    });
  });
});`;

const PROMISES_EXAMPLE_ES6 = `getData()
  .then(a => getMoreData(a))
  .then(b => getEvenMoreData(b))
  .then(c => console.log(c))
  .catch(err => console.error(err));`;

const DESTRUCTURING_EXAMPLE_ES5 = `var person = { name: "John", age: 25 };
var name = person.name;
var age = person.age;

var numbers = [1, 2, 3];
var first = numbers[0];
var second = numbers[1];`;

const DESTRUCTURING_EXAMPLE_ES6 = `let person = { name: "John", age: 25 };
let { name, age } = person;

let numbers = [1, 2, 3];
let [first, second] = numbers;`;

const Introduction = () =>{
 const VarDeclare = () =>{
   return (<div>
      <div><h5 className="blog-head"><b>ES5:</b></h5></div>
      <div className="mtop5p">
         <Highlight content={VARDECLARE_EXAMPLE_ES5} lang="javascript" />
      </div>
      <div className="mtop5p padLeft5p"><b>Function-scoped –</b> Variables leak outside loops and blocks.</div>
      <div className="mtop15p"><h5 className="blog-head"><b>ES6:</b></h5></div>
      <div className="mtop5p">
         <Highlight content={VARDECLARE_EXAMPLE_ES6} lang="javascript" />
      </div>
      <div className="mtop5p padLeft5p"><b>Block-scoped –</b> Safer and less bug-prone.</div>
   </div>);
 };

 const Functions = () =>{
   return (<div>
      <div><h5 className="blog-head"><b>ES5:</b></h5></div>
      <div className="mtop5p">
         <Highlight content={FUNCTIONS_EXAMPLE_ES5} lang="javascript" />
      </div>
      <div><h5 className="blog-head"><b>ES6:</b></h5></div>
      <div className="mtop5p">
         <Highlight content={FUNCTIONS_EXAMPLE_ES6} lang="javascript" />
      </div>
      <div className="mtop5p padLeft5p"><b>Arrow Functions</b> have a cleaner syntax and automatically bind <code><b>this</b></code>.</div>
   </div>);
 };

 const TemplateLiterals = () =>{
   return (<div>
      <div><h5 className="blog-head"><b>ES5:</b></h5></div>
      <div className="mtop5p">
         <Highlight content={TL_EXAMPLE_ES5} lang="javascript" />
      </div>
      <div><h5 className="blog-head"><b>ES6:</b></h5></div>
      <div className="mtop5p">
         <Highlight content={TL_EXAMPLE_ES6} lang="javascript" />
      </div>
      <div className="mtop5p padLeft5p"><b>Backticks (`)</b> allow multi-line strings and embedded expressions.</div>
   </div>);
 };

 const DefaultParams = () =>{
   return (<div>
      <div><h5 className="blog-head"><b>ES5:</b></h5></div>
      <div className="mtop5p">
         <Highlight content={DP_EXAMPLE_ES5} lang="javascript" />
      </div>
      <div><h5 className="blog-head"><b>ES6:</b></h5></div>
      <div className="mtop5p">
         <Highlight content={DP_EXAMPLE_ES6} lang="javascript" />
      </div>
   </div>);
 };

 const Classes = () =>{
   return (<div>
      <div><h5 className="blog-head"><b>ES5:</b></h5></div>
      <div className="mtop5p">
         <Highlight content={CLASSES_EXAMPLE_ES5} lang="javascript" />
      </div>
      <div><h5 className="blog-head"><b>ES6:</b></h5></div>
      <div className="mtop5p">
         <Highlight content={CLASSES_EXAMPLE_ES6} lang="javascript" />
      </div>
   </div>);
 };

 const Modules = () =>{
   return (<div>
      <div><h5 className="blog-head"><b>ES5 (using external libraries like RequireJS):</b></h5></div>
      <div className="mtop5p">
         <Highlight content={MODULES_EXAMPLE_ES5} lang="javascript" />
      </div>
      <div><h5 className="blog-head"><b>ES6 (native modules):</b></h5></div>
      <div className="mtop5p">
         <Highlight content={MODULES_EXAMPLE_ES6} lang="javascript" />
      </div>
   </div>);
 };

 const Promises = () =>{
   return (<div>
      <div><h5 className="blog-head"><b>ES5 (callback hell):</b></h5></div>
      <div className="mtop5p">
         <Highlight content={PROMISES_EXAMPLE_ES5} lang="javascript" />
      </div>
      <div><h5 className="blog-head"><b>ES6 (Promises):</b></h5></div>
      <div className="mtop5p">
         <Highlight content={PROMISES_EXAMPLE_ES6} lang="javascript" />
      </div>
   </div>);
 };

 const Destructuring = () =>{
   return (<div>
      <div><h5 className="blog-head"><b>ES5:</b></h5></div>
      <div className="mtop5p">
         <Highlight content={DESTRUCTURING_EXAMPLE_ES5} lang="javascript" />
      </div>
      <div><h5 className="blog-head"><b>ES6:</b></h5></div>
      <div className="mtop5p">
         <Highlight content={DESTRUCTURING_EXAMPLE_ES6} lang="javascript" />
      </div>
   </div>);
 };

 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p">
      <Card padding={15} backgroundColor="#eee">
         <div><h4 className="blog-head"><b>The Problems Before ES6</b></h4></div>
         <div className="mtop15p">Before <b>ES6</b> (ECMAScript 2015) came into existence, developers were working with 
            <b>ES5</b> (released in 2009). While ES5 was a significant improvement over earlier versions of JavaScript, it still 
            had several limitations that made development less efficient and more error-prone:</div>
         <div>
            <ul>
               <li className="mtop5p"><b>Verbose and Repetitive Code –</b> Declaring variables, functions, and object properties 
                  required extra lines of code.</li>
               <li className="mtop5p"><b>No Block Scope for Variables –</b> Using <code><b>var</b></code> led to scope-related bugs because variables 
                  were <b>function-scoped,</b> not <b>block-scoped.</b></li>
               <li className="mtop5p">Poor Syntax for OOP – Creating classes, inheritance, and object-oriented patterns was 
                  lengthy and complicated.</li>
               <li className="mtop5p"><b>Limited Functions for Arrays and Strings –</b> Operations like searching, mapping, filtering, 
                  or transforming arrays were less powerful and required extra code.</li>
               <li className="mtop5p"><b>Asynchronous Hell (Callback Hell) –</b> Working with asynchronous operations was messy because 
                  JavaScript didn’t have native <code><b>Promise</b></code> or <code><b>async/await</b></code> support.</li>
               <li className="mtop5p"><b>No Module Support –</b> All JavaScript code was in one big file or had to rely on hacks like 
                  IIFEs (Immediately Invoked Function Expressions) to avoid variable clashes.</li>
            </ul>
         </div>
         <div className="mtop5p"><b>In short –</b> JavaScript needed a more modern, cleaner, and feature-rich syntax to make 
         coding easier, faster, and less error-prone.</div>
      </Card>
   </div>
   <div className="mtop15p"><h2 className="blog-head"><b>Introduction to ES5 and ES6</b></h2></div>
   <div>
      <ul>
         <li className="mtop15p">
            <div><h4 className="blog-head"><b>ES5 (ECMAScript 5) –</b></h4></div>
            <div className="mtop15p">Released in 2009, ES5 focused on improving stability, security, and better error handling. 
            It brought features like <code><b>Array.prototype.forEach()</b></code>, <code><b>Object.create()</b></code>, 
            strict mode (<code><b>'use strict'</b></code>), and JSON support.</div>
         </li>
         <li className="mtop15p">
            <div><h4 className="blog-head"><b>ES6 (ECMAScript 2015)</b></h4></div>
            <div className="mtop15p">Released in 2015, ES6 was a revolutionary update to JavaScript. It 
               introduced <b>modern syntax</b> and <b>powerful features</b> to make JavaScript development cleaner, more 
               maintainable, and scalable. Features like <code><b>let</b></code> and <code><b>const</b></code>, arrow functions, 
               classes, template literals, promises, modules, destructuring, and default parameters 
               made JavaScript feel like a modern programming language.</div>
         </li>
      </ul>
   </div>
   <div className="mtop15p"><h2 className="blog-head"><b>Key Differences Between ES5 and ES6</b></h2></div>
   <div className="mtop15p">
      <Accordian id="AccordianExample" 
         data={[{ id:"Item#1", title: (<b>1. Variable Declaration</b>), component: <VarDeclare />  },
        { id:"Item#2", title: (<b>2. Functions</b>), component: <Functions />  },
        { id:"Item#3", title: (<b>3. Template Literals</b>), component: <TemplateLiterals />  },
        { id:"Item#4", title: (<b>4. Default Parameters</b>), component: <DefaultParams />  },
        { id:"Item#5", title: (<b>5. Classes</b>), component: <Classes />  },
        { id:"Item#6", title: (<b>6. Modules</b>), component: <Modules />  },
        { id:"Item#7", title: (<b>7. Promises</b>), component: <Promises />  },
        { id:"Item#8", title: (<b>8. Destructuring</b>), component: <Destructuring />  }
   ]} 
  />
   </div>
 </div>);
};

export default Introduction;