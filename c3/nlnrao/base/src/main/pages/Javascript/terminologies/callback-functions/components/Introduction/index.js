import React from "react";
import { Card, Highlight } from "e-ui-react";

const FETCH_EXAMPLE_JS = `function fetchData() {
  setTimeout(() => {
    console.log("Data fetched");
  }, 2000);
}

console.log("Start");
fetchData();
console.log("End");`;

const FETCH_OUTPUT_JS = `Start
End
Data fetched`;

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p">
      <Card padding={15} backgroundColor="#eee">
         <div><h4 className="blog-head"><b>The Problem Before</b></h4></div>
         <div className="mtop15p">Before <b>callback functions</b> became common in JavaScript, developers faced a big 
         challenge when dealing with <b>asynchronous tasks</b> like:</div>
         <div>
            <ul>
               <li className="mtop5p">Reading a file from disk</li>
               <li className="mtop5p">Fetching data from a server</li>
               <li className="mtop5p">Waiting for a timer to finish</li>
            </ul>
         </div>
         <div className="mtop5p">If we used regular functions in sequence, JavaScript would execute them <b>immediately</b>, 
         without waiting for the previous task to complete.</div>
         <div className="mtop5p"><b>Example problem:</b></div>
         <div className="mtop5p">
            <Highlight content={FETCH_EXAMPLE_JS} lang="javascript" />
         </div>
         <div className="mtop5p"><b>Output:</b></div>
         <div className="mtop5p">
            <Highlight content={FETCH_OUTPUT_JS} lang="javascript" />
         </div>
         <div className="mtop5p">
            Here, <code><b>"End"</b></code> is printed before <code><b>"Data fetched"</b></code>, because JavaScript 
            is <b>non-blocking</b> and <b>asynchronous</b>.
         </div>
         <div className="mtop5p">
            Before callbacks, handling such cases often meant writing <b>polling logic</b> or blocking loops, which made 
            code inefficient and harder to maintain.
         </div>
      </Card>
   </div>
   
   <div className="mtop15p"><h2 className="blog-head"><b>Introduction  – What Are Callback Functions?</b></h2></div>
   <div className="mtop15p">
      A <b>callback function</b> is a function passed as an argument to another function, and it is executed <b>after</b> the 
      outer function has completed its task.
   </div>
   <div>
      <ul>
         <li className="mtop5p"><b>Purpose:</b> To ensure that a piece of code runs <b>only after</b> something else has finished.</li>
         <li className="mtop5p"><b>Type:</b> Callbacks can be <b>synchronous</b> or <b>asynchronous</b>.</li>
      </ul>
   </div>
   <div className="mtop5p">In short:</div>
   <div className="mtop5p"><b>“I’ll call you back when I’m done.”</b></div>
 </div>);
};

export default Introduction;