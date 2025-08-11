import React from "react";
import { Highlight } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";
import IMG_EVENTLOOP_CALLSTACK from "./../../assets/1.png";

const EVENT_LOOP_EXECUTION_CODE = `console.log("Start");

setTimeout(() => {
  console.log("Timeout Callback");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise Callback");
});

console.log("End");`;

const EVENT_LOOP_EXECUTION_OUTPUT = `Start
End
Promise Callback
Timeout Callback`;

const Example = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Example — Execution Order</b></h2></div>
    <div className="mtop5p">
      <Highlight content={EVENT_LOOP_EXECUTION_CODE} lang="javascript" />
    </div>
    <div className="mtop5p padLeft5p"><h5 className="blog-head"><b>Step-by-step Execution:</b></h5></div>
    <div>
      <ol>
         <li className="mtop5p"><code><b>console.log("Start")</b></code> - Runs immediately.</li>
         <li className="mtop5p"><code><b>setTimeout</b></code> is scheduled - Goes to <b>Web APIs</b> - callback waits in <b>Task Queue</b>.</li>
         <li className="mtop5p"><code><b>Promise.then()</b></code> callback is placed in <b>Microtask Queue</b>.</li>
         <li className="mtop5p"><code><b>console.log("End")</b></code> - Runs next.</li>
         <li className="mtop5p"><b>Microtasks</b> are processed first - <code><b>"Promise Callback"</b></code> runs.</li>
         <li className="mtop5p">Then <b>macrotasks</b> from Task Queue - <code><b>"Timeout Callback"</b></code> runs.</li>
      </ol>
    </div>
    <div className="mtop5p padLeft5p"><h5 className="blog-head"><b>Output:</b></h5></div>
    <div className="mtop5p">
      <Highlight content={EVENT_LOOP_EXECUTION_OUTPUT} lang="javascript" />
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Key Differences — Event Loop vs Call Stack</b></h2></div>
    <div className="mtop15p">
      <SimpleTable header={["Aspect", "Call Stack", "Event Loop"]} 
        columns={[
            [(<div><b>Purpose</b></div>), (<div>Stores function calls and executes them in order</div>), (<div>Decides when queued tasks enter the call stack</div>)],
            [(<div><b>Type</b></div>), (<div>Data structure (stack — LIFO)</div>), (<div>Mechanism/process</div>)],
            [(<div><b>Handles</b></div>), (<div>Synchronous execution</div>), (<div>Coordination of async tasks</div>)],
            [(<div><b>Execution</b></div>), (<div>Runs immediately in sequence</div>), (<div>Waits for the stack to be empty before adding async callbacks</div>)],
            [(<div><b>Example</b></div>), (<div><code><b>console.log()</b></code> directly pushes to the stack</div>), (<div><code><b>setTimeout()</b></code> waits, then Event Loop pushes callback later</div>)]
          ]} />
    </div>
    <div className="mtop15p"><h2 className="blog-head"><b>Flow of Event Loop & Call Stack</b></h2></div>
    <div className="mtop15p"><img src={IMG_EVENTLOOP_CALLSTACK} /></div>
    <div>
      <ol>
         <li className="mtop5p">
            <div><h5 className="blog-head"><b>Call Stack</b></h5></div>
            <div className="mtop5p">This is where <b>JavaScript executes code line-by-line.</b></div>
            <div>
               <ul>
                  <li className="mtop5p">When a function is called, it’s <b>pushed</b> onto the stack.</li>
                  <li className="mtop5p">When it finishes, it’s <b>popped</b> off.</li>
                  <li className="mtop5p">The stack can only hold one function at a time (single-threaded).</li>
               </ul>
            </div>
         </li>
         <li className="mtop5p">
            <div><h5 className="blog-head"><b>Web APIs</b></h5></div>
            <div>
               <ul>
                  <li className="mtop5p">When you call something like <code><b>setTimeout</b></code>, <code><b>fetch</b></code>, or event listeners, the actual work isn’t done in the stack.</li>
                  <li className="mtop5p">The <b>browser (or Node.js runtime)</b> handles it in the <b>Web APIs environment</b>.</li>
                  <li className="mtop5p"><u>Example</u>: <code><b>setTimeout</b></code> counts down <b>outside</b> the stack.</li>
               </ul>
            </div>
         </li>
         <li className="mtop5p">
            <div><h5 className="blog-head"><b>Task Queue — Macrotasks</b></h5></div>
            <div>
               <ul>
                  <li className="mtop5p">When an async task (like <code><b>setTimeout</b></code>) finishes, its callback is 
                  sent to the <b>Task Queue</b>.</li>
                  <li className="mtop5p">This queue is <b>checked</b> only when: The Call Stack is empty or the Microtask Queue 
                  has been processed.</li>
               </ul>
            </div>
         </li>
         <li className="mtop5p">
            <div><h5 className="blog-head"><b>Microtask Queue — High Priority Tasks</b></h5></div>
            <div>
               <ul>
                  <li className="mtop5p">Microtasks include <code><b>Promise.then</b></code>, <code><b>queueMicrotask()</b></code>, and <code><b>MutationObserver</b></code>.</li>
                  <li className="mtop5p">These run <b>before</b> any macrotask from the Task Queue.</li>
                  <li className="mtop5p">Even if you have a <code><b>setTimeout</b></code> ready, JavaScript will first empty 
                  the <b>Microtask Queue</b>.</li>
               </ul>
            </div>
         </li>
         <li className="mtop5p">
            <div><h5 className="blog-head"><b>Event Loop — The Traffic Controller</b></h5></div>
            <div className="mtop5p">Constantly checks:</div>
            <div>
               <ul>
                  <li className="mtop5p"><b>Is the Call Stack empty?</b></li>
                  <li className="mtop5p">If yes, <b>process all microtasks</b>.</li>
                  <li className="mtop5p">If no microtasks, <b>take one macrotask from the Task Queue</b> and run it.</li>
               </ul>
            </div>
         </li>
      </ol>
    </div>
    <div className="mtop15p"><h4 className="blog-head"><b>Flow in the Diagram:</b></h4></div>
    <div>
      <ol>
         <li className="mtop5p"><b>Synchronous code</b> runs in <b>Call Stack</b> first.</li>
         <li className="mtop5p">If there’s an async call - goes to <b>Web APIs.</b></li>
         <li className="mtop5p">
            <div>Finished async results go to:</div>
            <div>
               <ul>
                  <li className="mtop5p"><b>Microtask Queue -</b> if it’s a promise or microtask (High priority)</li>
                  <li className="mtop5p"><b>Task Queue -</b> if it’s setTimeout or similar (Lower priority)</li>
               </ul>
            </div>
         </li>
         <li className="mtop5p"><b>Event Loop</b> always takes from <b>Microtask Queue</b> before <b>Task Queue</b>.</li>
         <li className="mtop5p">The chosen callback is <b>pushed into the Call Stack</b> to execute.</li>
      </ol>
    </div>
 </div>);
};

export default Example;