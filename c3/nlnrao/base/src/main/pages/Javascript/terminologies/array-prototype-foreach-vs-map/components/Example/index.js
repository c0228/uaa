import React from "react";
import { Highlight } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const FOREACH_EXAMPLE_JS = `const numbers = [1, 2, 3];
numbers.forEach(num => {
  console.log(num * 2); // Just logs, no new array returned
});`;

const FOREACH_OUTPUT_JS = `2
4
6`;

const MAP_EXAMPLE_JS = `const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]`;

const MAP_OUTPUT_JS = `[2, 4, 6]`;

const DIFFERENCE_EXAMPLE_JS = `const resultForEach = [1, 2, 3].forEach(num => num * 2);
console.log(resultForEach); // undefined

const resultMap = [1, 2, 3].map(num => num * 2);
console.log(resultMap); // [2, 4, 6]`;

const Example = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p"><h2 className="blog-head"><b>Examples</b></h2></div>
   <div className="mtop15p"><h4 className="blog-head"><b>Example 1: Using <code>forEach()</code> (Performing an Action)</b></h4></div>
   <div className="mtop5p">
      <Highlight content={FOREACH_EXAMPLE_JS} lang="javascript" />
   </div>
   <div className="mtop5p"><b>Output:</b></div>
   <div className="mtop5p">
      <Highlight content={FOREACH_OUTPUT_JS} lang="javascript" />
   </div>
   <div className="mtop5p">Here, we <b>do something</b> (print) but don’t get a transformed array back.</div>

   <div className="mtop15p"><h4 className="blog-head"><b>Example 2: Using <code>map()</code> (Transforming Data)</b></h4></div>
   <div className="mtop5p">
      <Highlight content={MAP_EXAMPLE_JS} lang="javascript" />
   </div>
   <div className="mtop5p"><b>Output:</b></div>
   <div className="mtop5p">
      <Highlight content={MAP_OUTPUT_JS} lang="javascript" />
   </div>
   <div className="mtop5p">Here, we get a <b>new array</b> (<code><b>[2, 4, 6]</b></code>) without changing the original array.</div>

   <div className="mtop15p"><h4 className="blog-head"><b>Example 3: Key Difference in Return Values</b></h4></div>
   <div className="mtop5p">
      <Highlight content={DIFFERENCE_EXAMPLE_JS} lang="javascript" />
   </div>
   <div>
      <ul>
         <li className="mtop5p"><code><b>forEach()</b></code> - Always returns <b>undefined</b></li>
         <li className="mtop5p"><code><b>map()</b></code> - Always returns a new array</li>
      </ul>
   </div>

   <div className="mtop15p"><h2 className="blog-head"><b>When to Use What</b></h2></div>
   <div className="mtop15p">
      <SimpleTable header={["Feature", "forEach()", "map()"]} 
               columns={[
                     ["Purpose","Perform an action on each element","Transform each element into a new value"],
                     ["Return value",<div><code><b>undefined</b></code></div>,"New array with transformed values"],
                     ["Modifies original?","No (but can modify if you mutate inside)","No (unless you mutate objects inside)"],
                     ["Chaining possible?","No","Yes"]
                  ]} />		 		
   </div>
 </div>);
};

export default Example;