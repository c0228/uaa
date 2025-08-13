import React from "react";
import { Card } from "e-ui-react";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p">
      <Card padding={15} backgroundColor="#eee">
         <div><h4 className="blog-head"><b>The Problem Before Debouncing & Throttling</b></h4></div>
         <div className="mtop15p">Before developers widely used <b>debouncing</b> and <b>throttling</b>, websites often 
         suffered from <b>performance bottlenecks</b> due to <b>excessive event firing.</b></div>
         <div className="mtop5p">Common scenarios where the problem appeared:</div>
         <div>
            <ul>
               <li className="mtop5p"><b>Scroll events</b> fired <b>dozens of times per second</b> when a user scrolled, 
                  overwhelming the browser.</li>
               <li className="mtop5p"><b>Resize events</b> triggered hundreds of times while resizing the window.</li>
               <li className="mtop5p"><b>Keyup/keydown events</b> in search boxes caused a network request <b>for every keystroke,</b> 
                  wasting bandwidth and slowing responses.</li>
            </ul>
         </div>
         <div className="mtop15p">Without control over how frequently these events triggered, the browser could:</div>
         <div>
            <ul>
               <li className="mtop5p">Freeze or lag during heavy user interaction.</li>
               <li className="mtop5p">Perform <b>unnecessary API calls,</b> slowing both the frontend and backend.</li>
               <li className="mtop5p">Cause <b>layout thrashing</b> and reflows, hurting smoothness.</li>
            </ul>
         </div>
         <div className="mtop15p">To solve this, JavaScript developers introduced <b>debouncing</b> and <b>throttling</b> — 
         techniques that <b>limit how often a function is executed</b> in response to frequent events.</div>
      </Card>
   </div>
   <div className="mtop15p"><h2 className="blog-head"><b>Introduction  – What are Debouncing & Throttling?</b></h2></div>
   <div className="mtop15p">Both <b>debouncing</b> and <b>throttling</b> are <b>performance optimization techniques</b> for 
   controlling how often an event handler is executed.</div>
   <div>
      <ul>
         <li className="mtop5p"><b>Debouncing:</b> Ensures a function runs <b>only after</b> a certain time has 
         passed <b>without the event being triggered again.</b></li>
         <li className="mtop5p"><b>Throttling:</b> Ensures a function runs <b>at most once every fixed time interval,</b> regardless 
         of how many times the event is triggered.</li>
      </ul>
   </div>
   <div className="mtop5p">Think of it like:</div>
   <div>
      <ul>
         <li className="mtop5p"><b>Debounce</b> = “Call me <b>only when things have settled down.</b>”</li>
         <li className="mtop5p"><b>Throttle</b> = “Call me <b>regularly, but not too often.</b>”</li>
      </ul>
   </div>
 </div>);
};

export default Introduction;