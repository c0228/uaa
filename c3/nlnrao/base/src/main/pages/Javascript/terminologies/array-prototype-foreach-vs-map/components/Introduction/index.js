import React from "react";
import { Card } from "e-ui-react";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p">
      <Card padding={15} backgroundColor="#eee">
        <div><h4 className="blog-head"><b>The Problem Before</b></h4></div>
        <div className="mtop5p">In the early days of JavaScript, iterating 
         over arrays was often done using <code><b>for</b></code> or <code><b>while</b></code> loops. While they 
         worked fine, these loops:</div>
         <div>
            <ul>
               <li className="mtop5p">Required manual index handling (<code><b>for(let i = 0; i &lt; arr.length; i++)</b></code>)</li>
               <li className="mtop5p">Made the code longer and less readable</li>
               <li className="mtop5p">Increased the risk of bugs, especially when modifying arrays during iteration</li>
               <li className="mtop5p">Didn’t clearly express the intention of “doing something for every element” vs “transforming 
                  each element into a new array”</li>
            </ul>
         </div>
         <div className="mtop5p">Developers needed <b>built-in array methods</b> that could:</div>
         <div>
            <ol>
               <li className="mtop5p">Iterate over arrays without extra boilerplate</li>
               <li className="mtop5p">Separate “performing an action” from “producing a transformed array”</li>
            </ol>
         </div>
         <div className="mtop5p">To solve this, JavaScript introduced <code><b>forEach()</b></code> and <code><b>map()</b></code> — 
         each serving different purposes.</div>
      </Card>
   </div>
   <div className="mtop15p"><h2 className="blog-head"><b>Introduction</b></h2></div>
   <div className="mtop15p">Although <code><b>forEach()</b></code> and <code><b>map()</b></code> look similar (both iterate over each 
      array element in order), they are fundamentally different:</div>
   <div>
      <ul>
         <li className="mtop5p"><code><b>forEach()</b></code> - Executes a function for each element 
         but <b>does not return a new array</b>.</li>
         <li className="mtop5p"><code><b>map()</b></code> - Executes a function for each 
         element <b>and returns a new array</b> containing the results.</li>
      </ul>
   </div>
   <div className="mtop5p">Think of it like this:</div>
   <div>
      <ul>
         <li className="mtop5p"><code><b>forEach()</b></code> - “Do something for each item.”</li>
         <li className="mtop5p"><code><b>map()</b></code> - “Transform each item and give me the new array.”</li>
      </ul>
   </div>
 </div>);
};

export default Introduction;