import React from "react";
import { Highlight } from "e-ui-react";

const BASIC_EXAMPLE_ASYNCHRONOUS_CALLBACK = `function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Alice", sayBye);`;

const BASIC_OUTPUT_ASYNCHRONOUS_CALLBACK = `Hello Alice
Goodbye!`;

const SETTIMEOUT_EXAMPLE_ASYNCHRONOUS_CALLBACK = `function fetchData(callback) {
  setTimeout(() => {
    console.log("Data fetched");
    callback();
  }, 2000);
}

function processData() {
  console.log("Processing data...");
}

fetchData(processData);`;

const SETTIMEOUT_OUTPUT_ASYNCHRONOUS_CALLBACK = `Data fetched
Processing data...`;

const CALLBACK_EXAMPLE_REALUSE = `const numbers = [1, 2, 3];
numbers.forEach(function(num) {
  console.log(num * 2);
});`;

const CALLBACK_OUTPUT_REALUSE = `2
4
6`;

const PROBLEM_EXAMPLE_CALLBACKHELL = `getData(function(a) {
  processA(a, function(b) {
    processB(b, function(c) {
      console.log("Final result: " + c);
    });
  });
});`;

const Example = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p"><h2 className="blog-head"><b>Examples</b></h2></div>
   <div className="mtop15p"><h4 className="blog-head"><b>Basic Synchronous Callback</b></h4></div>
   <div className="mtop5p">
      <Highlight content={BASIC_EXAMPLE_ASYNCHRONOUS_CALLBACK} lang="javascript" />
   </div>
   <div className="mtop5p"><h5 className="blog-head"><b>Output:</b></h5></div>
   <div className="mtop5p">
      <Highlight content={BASIC_OUTPUT_ASYNCHRONOUS_CALLBACK} lang="javascript" />
   </div>
   <div className="mtop5p">Here, <code><b>sayBye</b></code> is executed immediately 
   after <code><b>greet</b></code> finishes.</div>

   <div className="mtop15p"><h4 className="blog-head"><b>Asynchronous Callback (setTimeout)</b></h4></div>
   <div className="mtop5p">
      <Highlight content={SETTIMEOUT_EXAMPLE_ASYNCHRONOUS_CALLBACK} lang="javascript" />
   </div>
   <div className="mtop5p"><h5 className="blog-head"><b>Output:</b></h5></div>
   <div className="mtop5p">
      <Highlight content={SETTIMEOUT_OUTPUT_ASYNCHRONOUS_CALLBACK} lang="javascript" />
   </div>
   <div className="mtop5p">Here, <code><b>processData</b></code> runs <b>after</b> data is fetched, even 
   though it’s asynchronous.</div>

   <div className="mtop15p"><h4 className="blog-head"><b>Callback in Real Use (Array forEach)</b></h4></div>
   <div className="mtop5p">
      <Highlight content={CALLBACK_EXAMPLE_REALUSE} lang="javascript" />
   </div>
   <div className="mtop5p"><h5 className="blog-head"><b>Output:</b></h5></div>
   <div className="mtop5p">
      <Highlight content={CALLBACK_OUTPUT_REALUSE} lang="javascript" />
   </div>
   <div className="mtop5p">Here, the function inside <code><b>forEach</b></code> is a <b>callback</b> executed 
   for each element.</div>

   <div className="mtop15p"><h4 className="blog-head"><b>Problem with Callbacks – Callback Hell</b></h4></div>
   <div className="mtop5p">
      <Highlight content={PROBLEM_EXAMPLE_CALLBACKHELL} lang="javascript" />
   </div>
   <div className="mtop5p">Too many nested callbacks lead to <b>callback hell</b>, making code hard to read and debug. 
   This problem eventually led to <b>Promises</b> and <b>async/await</b> in JavaScript.</div>
 </div>);
};

export default Example;