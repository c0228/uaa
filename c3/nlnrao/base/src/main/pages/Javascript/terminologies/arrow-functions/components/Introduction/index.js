import React from "react";
import { Card, Highlight } from "e-ui-react";

const BEFORE_EXAMPLE1_JS = `function Person(name) {
  this.name = name;
  setTimeout(function() {
    console.log(this.name);
  }, 1000);
}

new Person("John"); // Output: undefined`;

const BEFORE_EXAMPLE2_JS = `const self = this; // store reference
// or
setTimeout(function(){}.bind(this), 1000);`;

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p">
      <Card padding={15} backgroundColor="#eee">
         <div><h4 className="blog-head"><b>The Problem Before</b></h4></div>
         <div className="mtop15p">Before <b>ES6</b> introduced arrow functions, JavaScript developers often struggled with 
         the <code><b>this</b></code> keyword in certain scenarios, especially inside:</div>
         <div>
            <ul>
               <li className="mtop5p"><b>Callback functions</b></li>
               <li className="mtop5p"><b>Event listeners</b></li>
               <li className="mtop5p"><b>setTimeout / setInterval</b></li>
               <li className="mtop5p"><b>Object methods calling other methods</b></li>
            </ul>
         </div>
         <div className="mtop15p">The problem was that <code><b>this</b></code> <b>in regular functions</b> changes based 
         on <b>how</b> and <b>where</b> the function is called, not where it is written.</div>
         <div className="mtop5p">For example:</div>
         <div className="mtop5p">
            <Highlight content={BEFORE_EXAMPLE1_JS} lang="javascript" />
         </div>
         <div className="mtop5p">Here, inside <code><b>setTimeout</b></code>, <code><b>this</b></code> doesn’t refer 
         to the <code><b>Person</b></code> object — it refers to the <b>global object</b> (<code><b>window</b></code> in 
         browsers), leading to bugs.</div>
         <div className="mtop5p">Developers used <b>workarounds</b> like:</div>
         <div className="mtop5p">
            <Highlight content={BEFORE_EXAMPLE2_JS} lang="javascript" />
         </div>
         <div className="mtop5p">These solutions worked but made the code less clean. This led to the introduction 
            of <b>arrow functions</b> with a different behavior for <code><b>this</b></code>.</div>
      </Card>
   </div>
   <div className="mtop15p"><h2 className="blog-head"><b>Introduction  – Arrow Functions and <code><b>this</b></code></b></h2></div>
   <div className="mtop15p">Arrow functions were introduced in <b>ES6</b> to provide a <b>shorter syntax</b> and, more importantly, 
   a <b>lexical</b> <code><b>this</b></code> <b>binding</b>.</div>
   <div>
      <ul>
         <li className="mtop5p">In <b>regular functions,</b> <code><b>this</b></code> is <b>dynamic</b> — determined at call time.</li>
         <li className="mtop5p">In <b>arrow functions,</b> <code><b>this</b></code> is <b>lexical</b> — it’s taken from the scope in which the function is written, not where it’s called.</li>
      </ul>
   </div>
   <div className="mtop5p">This means arrow functions <b>don’t have their own</b> <code><b>this</b></code>, and 
   they <b>inherit it</b> from their surrounding scope.</div>
 </div>);
};

export default Introduction;