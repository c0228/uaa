import React from "react";
import { Card } from "e-ui-react";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p">
      <Card padding={15} backgroundColor="#eee">
         <div><h4 className="blog-head"><b>The Problem Before Event Delegation</b></h4></div>
         <div className="mtop15p">In the early days of JavaScript, handling events on multiple elements meant adding 
            event listeners to each element individually. For example, if you had a list of 100 items and wanted to 
            trigger a function when each item was clicked, you would have to attach 100 
            separate <code><b>click</b></code> event listeners.</div>
         <div className="mtop5p">This approach led to several issues:</div>
         <div>
            <ul>
               <li className="mtop5p"><b>Performance Overhead:</b> Attaching multiple listeners consumed more 
               memory and slowed down execution.</li>
               <li className="mtop5p"><b>Maintenance Complexity:</b> Adding new elements dynamically required 
               attaching new event listeners again.</li>
               <li className="mtop5p"><b>Duplication of Code:</b> The same event logic often had to be repeated.</li>
            </ul>
         </div>
         <div className="mtop5p">These problems called for a smarter approach — one where we could manage multiple 
         elements’ events more efficiently. That’s where <b>Event Delegation</b> came in.</div>
      </Card>
   </div>
   <div className="mtop15p"><h2 className="blog-head"><b>Introduction: What is Event Delegation?</b></h2></div>
   <div className="mtop15p"><b>Event Delegation</b> is a technique in JavaScript where instead of attaching event 
   listeners to multiple child elements, you attach a single event listener to a common parent element.</div>
   <div className="mtop15p">It works because of <b>Event Bubbling</b> — when an event occurs on an element, it bubbles 
   up through its ancestors until it reaches the root (<code><b>document</b></code>). By leveraging this, you can 
   capture events from child elements at the parent level.</div>

   <div className="mtop5p">In simple terms:</div>
   <div>
      <ul>
         <li className="mtop5p">Add one event listener to the parent.</li>
         <li className="mtop5p">Identify which child triggered the event using properties like <code><b>event.target</b></code>.</li>
         <li className="mtop5p">Handle the logic accordingly.</li>
      </ul>
   </div>
   <div>This technique makes <b>code faster, cleaner, and easier to maintain</b>.</div>
 </div>);
};

export default Introduction;