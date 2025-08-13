import React from "react";
import { Card, Highlight } from "e-ui-react";

const WITHOUT_EXAMPLE_CURRYING = `function multiply(a, b, c) {
  return a * b * c;
}

console.log(multiply(2, 3, 4)); // 24
// If you want a multiply-by-2 function, you need to create:
function multiplyBy2(b, c) {
  return multiply(2, b, c);
}`;

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p">
      <Card padding={15} backgroundColor="#eee">
         <div><h4 className="blog-head"><b>The Problem Before Currying</b></h4></div>
         <div className="mtop15p">Before <b>currying</b> became a popular concept in JavaScript (borrowed from functional 
         programming), developers faced several challenges when working with functions that took multiple arguments:</div>
         <div>
            <ul>
               <li className="mtop5p"><b>Reusability was limited —</b> A function designed to work with three arguments 
               always required all three to be passed every time.</li>
               <li className="mtop5p"><b>Partial application was tricky —</b> If you wanted to “fix” the value of one argument and 
               reuse the function for the others, you had to write a new wrapper function manually.</li>
               <li className="mtop5p"><b>Function composition became harder —</b> Chaining small, reusable functions was cumbersome 
               when each expected all arguments at once.</li>
            </ul>
         </div>
         <div className="mtop5p"><b>Example without currying:</b></div>
         <div>
            <Highlight content={WITHOUT_EXAMPLE_CURRYING} lang="javascript" />
         </div>
         <div className="mtop5p">Here, we had to <b>manually create multiplyBy2</b> — this gets repetitive.</div>
         <div>Currying solves this by <b>transforming a multi-argument function into a series of single-argument functions.</b></div>
      </Card>
   </div>
   <div className="mtop15p"><h2 className="blog-head"><b>Introduction  – What is Currying?</b></h2></div>
   <div className="mtop15p">
      <b>Currying</b> is a technique where a function that takes multiple arguments 
      is <b>converted into a sequence of functions</b> that each take <b>one argument at a time.</b>
   </div>
   <div className="mtop5p">In Javascript:</div>
   <div>
      <ul>
         <li className="mtop5p">Currying helps <b>reuse</b> and <b>compose</b> functions.</li>
         <li className="mtop5p">It allows you to pass arguments <b>incrementally</b>, storing intermediate results 
         until all arguments are provided.</li>
      </ul>
   </div>
   <div className="mtop5p">Mathematically:</div>
   <div className="mtop5p">
      <Highlight content={`f(a, b, c) → f(a)(b)(c)`} lang="javascript" />
   </div>
 </div>);
};

export default Introduction;