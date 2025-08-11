import React from "react";
import { Card } from "e-ui-react";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p">
      <Card padding={15} backgroundColor="#eee">
         <div><h4 className="blog-head"><b>The Problem Before Event Loop</b></h4></div>
         <div className="mtop15p">In the early days, JavaScript was mainly used for small tasks like form validation or basic 
            DOM manipulation. The execution model was <b>synchronous</b> — one statement at a time, in order.</div>
         <div className="mtop5p">While this was fine for small scripts, it caused a <b>big problem</b> when tasks took too long:</div>
         <div>
            <ul>
               <li className="mtop5p">
                  <div className="blog-head"><b>Blocking operations:</b></div>
                  <div>If you had a heavy computation or a network request, the browser would “freeze” until it was done.</div>
               </li>
               <li className="mtop5p">
                  <div className="blog-head"><b>Poor user experience:</b></div>
                  <div>Imagine clicking a button, but the UI won’t respond because a for loop is busy counting to 1 billion.</div>
               </li>
               <li className="mtop5p">
                  <div className="blog-head"><b>No multitasking:</b></div>
                  <div>JavaScript couldn’t “pause” one task and continue another.</div>
               </li>
            </ul>
         </div>
         <div className="mtop5p">There was a need for a mechanism that could <b>handle long-running operations asynchronously</b> without 
         blocking the rest of the code. That’s where the <b>event loop</b> and <b>call stack</b> concepts became crucial.
         </div>
      </Card>
   </div>
   <div className="mtop15p"><h2 className="blog-head"><b>Introduction — Event Loop & Call Stack</b></h2></div>
   <div className="mtop15p">JavaScript is <b>single-threaded</b> — it has <b>one call stack</b>, meaning it executes one function 
   at a time.</div>
   <div>
      <ul>
         <li className="mtop15p"><b>Call Stack -</b> A data structure that keeps track of function calls in the order they need to be executed.</li>
         <li className="mtop5p"><b>Event Loop -</b> A mechanism that manages execution between synchronous code and asynchronous tasks (like timers, 
         network requests, DOM events).</li>
      </ul>
   </div>
   <div className="mtop5p">The event loop decides <b>when</b> functions from asynchronous callbacks get pushed to the call stack.</div>

   <div className="mtop15p"><h2 className="blog-head"><b>How They Work Together?</b></h2></div>
   <div>
      <ol>
         <li className="mtop5p"><b>Call Stack</b> runs synchronous code first.</li>
         <li className="mtop5p">If an asynchronous task is triggered (e.g., <code><b>setTimeout</b></code>), the browser or Node.js runtime 
         handles it <b>outside</b> the call stack.</li>
         <li className="mtop5p">When that task is complete, its callback is placed into a <b>queue</b> (Task Queue or Microtask Queue).</li>
         <li className="mtop5p">The <b>Event Loop</b> checks: If the call stack is empty, it takes the first callback from the queue and pushes it to the call stack.</li>
         <li className="mtop5p">This cycle continues infinitely, making JavaScript feel “asynchronous” despite being single-threaded.</li>
      </ol>
   </div>
 </div>);
};

export default Introduction;