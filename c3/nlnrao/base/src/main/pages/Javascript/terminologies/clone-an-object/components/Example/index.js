import React from "react";
import { Highlight, Icon } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const OBJECT_EXAMPLE_ASSIGN = `const obj1 = { a: 1, b: 2 };
const obj2 = Object.assign({}, obj1);

obj2.a = 10;
console.log(obj1.a); // 1 (no change)`;

const SPREAD_EXAMPLE_OPERATOR = `const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { ...obj1 };

obj2.b.c = 99;
console.log(obj1.b.c); // 99 (still linked)`;

const JSON_EXAMPLE_PARSESTRINGIFY = `const obj1 = { a: 1, b: { c: 2 } };
const obj2 = JSON.parse(JSON.stringify(obj1));

obj2.b.c = 99;
console.log(obj1.b.c); // 2 (independent)`;

const STRUCTURED_EXAMPLE_CLONE = `const obj1 = { a: 1, b: { c: 2 }, d: new Date() };
const obj2 = structuredClone(obj1);

obj2.b.c = 99;
console.log(obj1.b.c); // 2
console.log(obj2.d === obj1.d); // false (new Date object)`;

const LODASH_EXAMPLE_CLONE = `const _ = require("lodash");

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = _.cloneDeep(obj1);

obj2.b.c = 99;
console.log(obj1.b.c); // 2`;

const CLONE_EXAMPLE_ARRAYS = `const arr1 = [{ a: 1 }, { b: 2 }];
const arr2 = arr1.map(obj => ({ ...obj }));

arr2[0].a = 99;
console.log(arr1[0].a); // 1`;

const CLONE_EXAMPLE_FUNCTIONS = `const obj1 = { a: 1, greet() { console.log("Hi"); } };
const obj2 = { ...obj1 };
obj2.greet(); // Hi`;

const Example = () =>{
 const DisplayIcon = ({ status }) =>{
   return (<Icon type="FontAwesome" name={status?"fa-check-circle":"fa-times-circle"} size={14} color={status?"green":"red"} />);
 };
 const WarningIcon = () =>{
   return (<Icon type="FontAwesome" name="fa-warning" size={14} color="orange" />);
 };
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p"><h2 className="blog-head"><b>Examples</b></h2></div>
   <div className="mtop15p"><h4 className="blog-head"><b>1. Shallow Clone Methods</b></h4></div>
   <div className="padLeft5p">
      <div className="mtop5p"><h5 className="blog-head"><b>a) Using Object.assign()</b></h5></div>
      <div className="mtop5p">
         <Highlight content={OBJECT_EXAMPLE_ASSIGN} lang="javascript" />
      </div>
      <div>
         <ul>
            <li className="mtop5p"><DisplayIcon status={true} /> Copies properties</li>
            <li className="mtop5p"><DisplayIcon /> Nested objects are still references</li>
         </ul>
      </div>
      <div className="mtop5p"><h5 className="blog-head"><b>b) Using Spread Operator <code><b>{`{...obj}`}</b></code></b></h5></div>
      <div className="mtop5p">
         <Highlight content={SPREAD_EXAMPLE_OPERATOR} lang="javascript" />
      </div>
      <div>
         <ul>
            <li className="mtop5p">Short and clean syntax</li>
            <li>Still shallow copy</li>
         </ul>
      </div>
   </div>
   <div className="mtop15p"><h4 className="blog-head"><b>2. Deep Clone Methods</b></h4></div>
   <div className="padLeft5p">
      <div className="mtop5p"><h5 className="blog-head"><b>a) Using JSON.parse(JSON.stringify(obj))</b></h5></div>
      <div className="mtop5p">
         <Highlight content={JSON_EXAMPLE_PARSESTRINGIFY} lang="javascript" />
      </div>
      <div>
         <ul>
            <li className="mtop5p"><DisplayIcon status={true} /> Deep clone for simple objects</li>
            <li className="mtop5p"><DisplayIcon /> Loses functions, <code><b>Date</b></code>, <code><b>Map</b></code>, <code><b>Set</b></code>, <code><b>undefined</b></code></li>
         </ul>
      </div>
      <div className="mtop5p"><h5 className="blog-head"><b>b) Using Structured Clone (Modern API)</b></h5></div>
      <div className="mtop5p">
         <Highlight content={STRUCTURED_EXAMPLE_CLONE} lang="javascript" />
      </div>
      <div>
         <ul>
            <li className="mtop5p"><DisplayIcon status={true} /> Handles Dates, Maps, Sets, and more</li>
            <li className="mtop5p"><DisplayIcon /> Not supported in very old browsers</li>
         </ul>
      </div>
      <div className="mtop5p"><h5 className="blog-head"><b>c) Using Lodash <code>_.cloneDeep()</code></b></h5></div>
      <div className="mtop5p">
         <Highlight content={LODASH_EXAMPLE_CLONE} lang="javascript" />
      </div>
      <div>
         <ul>
            <li className="mtop5p"><DisplayIcon status={true} /> Reliable deep cloning for all types</li>
            <li className="mtop5p"><DisplayIcon /> Requires external library</li>
         </ul>
      </div>
   </div>
   <div className="mtop15p"><h4 className="blog-head"><b>Special Cases – Cloning Complex Objects</b></h4></div>
   <div className="padLeft5p">
      <div className="mtop5p"><h5 className="blog-head"><b>Cloning Arrays of Objects</b></h5></div>
      <div className="mtop5p">
         <Highlight content={CLONE_EXAMPLE_ARRAYS} lang="javascript" />
      </div>
      <div className="mtop5p"><h5 className="blog-head"><b>Cloning with Functions Inside</b></h5></div>
      <div className="mtop5p">
         <Highlight content={CLONE_EXAMPLE_FUNCTIONS} lang="javascript" />
      </div>
      <div>
         <ul>
            <li className="mtop5p">Works with shallow copies but deep copies with <code><b>JSON</b></code> method will lose functions.</li>
         </ul>
      </div>
   </div>
   <div className="mtop5p"><h2 className="blog-head"><b>Summary Table</b></h2></div>
   <div className="mtop5p">
      <SimpleTable header={["Method","Type","Supports Functions","Supports Dates/Maps/Sets","Easy to Use"]} 
            columns={[
                  [(<div><code><b>Object.assign()</b></code></div>),(<div>Shallow</div>),(<div><DisplayIcon status={true} /> Yes</div>),(<div><DisplayIcon status={true} /> Yes</div>),(<div><DisplayIcon status={true} /> Yes</div>)],
                  [(<div><code><b>Spread {`{...obj}`}</b></code></div>),(<div>Shallow</div>),(<div><DisplayIcon status={true} /> Yes</div>),(<div><DisplayIcon status={true} /> Yes</div>),(<div><DisplayIcon status={true} /> Yes</div>)],
                  [(<div><code><b>JSON.parse(JSON.stringify)</b></code></div>),(<div>Deep (basic)</div>),(<div><DisplayIcon /> No</div>),(<div><DisplayIcon /> No</div>),(<div><DisplayIcon status={true} /> Yes</div>)],
                  [(<div><code><b>structuredClone()</b></code></div>),(<div>Deep</div>),(<div><DisplayIcon /> No</div>),(<div><DisplayIcon status={true} /> Yes</div>),(<div><DisplayIcon status={true} /> Yes</div>)],
                  [(<div><code><b>_.cloneDeep() (Lodash)</b></code></div>),(<div>Deep</div>),(<div><DisplayIcon status={true} /> Yes</div>),(<div><DisplayIcon status={true} /> Yes</div>),(<div><WarningIcon /> Needs lib</div>)]
               ]} />
   </div>
 </div>);
};

export default Example;