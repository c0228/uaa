import React from "react";
import { Card, Highlight } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const EVENTBUBBLING_EXAMPLE_JS = `<!DOCTYPE html>
<html>
<head>
  <title>Event Bubbling Example</title>
</head>
<body>
  <div id="parent" style="padding:20px; background:lightblue;">
    Parent Div
    <button id="child">Click Me</button>
  </div>

  <script>
    document.getElementById("parent").addEventListener("click", function() {
      console.log("Parent Div clicked!");
    });

    document.getElementById("child").addEventListener("click", function() {
      console.log("Button clicked!");
    });
  </script>
</body>
</html>`;

const EVENTBUBBLING_OUTPUT_JS = `Button clicked!
Parent Div clicked!`;

const EVENTCAPTURING_EXAMPLE_JS = `<!DOCTYPE html>
<html>
<head>
  <title>Event Capturing Example</title>
</head>
<body>
  <div id="parent" style="padding:20px; background:lightgreen;">
    Parent Div
    <button id="child">Click Me</button>
  </div>

  <script>
    document.getElementById("parent").addEventListener("click", function() {
      console.log("Parent Div clicked in Capturing!");
    }, true); // useCapture = true

    document.getElementById("child").addEventListener("click", function() {
      console.log("Button clicked!");
    }, true);
  </script>
</body>
</html>`;

const EVENTCAPTURING_OUTPUT_JS = `Parent Div clicked in Capturing!
Button clicked!`;

const EVENTDELEGATION_EXAMPLE_JS = `<ul id="menu">
  <li>Home</li>
  <li>About</li>
  <li>Contact</li>
</ul>

<script>
document.getElementById("menu").addEventListener("click", function(event) {
  if(event.target.tagName === "LI") {
    console.log("Clicked on:", event.target.textContent);
  }
});
</script>`;

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p">
      <Card padding={15} backgroundColor="#eee">
           <div><h4 className="blog-head"><b>The Need for Event Flow</b></h4></div>
      <div className="mtop15p">In the early days of JavaScript and DOM programming, handling user interactions 
      wasn’t as smooth as it is today. Developers often struggled with scenarios like:</div>
      <div>
         <ul>
            <li className="mtop5p"><b>Nested Elements:</b> Suppose you had a button inside 
            a <code><b>&lt;div&gt;</b></code>. If a click event happened on the button, how 
            could you also detect if it should trigger actions on the parent <code><b>&lt;div&gt;</b></code>?</li>
            <li className="mtop5p"><b>Multiple Event Handlers:</b> If both parent and child had event listeners, which 
            one should run first?</li>
            <li className="mtop5p"><b>Event Management:</b> Without a structured flow, handling events across nested 
            elements quickly became confusing and inconsistent across browsers.</li>
         </ul>
      </div>
      <div className="mtop5p">To solve these issues, the <b>W3C DOM Level 2 Event Model</b> introduced a clear <b>event flow 
         mechanism,</b> which is divided into three phases:</div>
      <div>
         <ul>
            <li className="mtop5p"><b>Capturing Phase</b> (from the root down to the target)</li>
            <li className="mtop5p"><b>Target Phase</b> (the event hits the target element)</li>
            <li className="mtop5p"><b>Bubbling Phase</b> (from the target up to the root)</li>
         </ul>
      </div>
      <div className="mtop5p">This model gave developers flexibility to choose <b>when</b> they want their event listeners 
      to trigger: while the event is going <b>down</b> (capturing) or while it’s <b>bubbling up.</b></div>
      </Card>
   </div>
   <div className="mtop15p"><h2 className="blog-head"><b>Introduction to Event Flow</b></h2></div>
   <div className="mtop15p">
      When an event is fired (like <code><b>click</b></code>, <code><b>keydown</b></code>, etc.), it doesn’t just happen on 
      the target element. Instead, it goes through these phases:
      <div>
         <ul>
            <li className="mtop5p"><b>Event Capturing (Trickling):</b> The event starts from the document root and moves 
            down the DOM tree until it reaches the target.</li>
            <li className="mtop5p"><b>Target Phase:</b> The event is at the element that was actually interacted with.</li>
            <li className="mtop5p"><b>Event Bubbling:</b> After reaching the target, the event moves back up the DOM tree, 
            triggering any parent listeners on its way.</li>
         </ul>
      </div>
      <div className="mtop5p">
         By default, most browsers use <b>event bubbling.</b> However, developers can specify whether a listener should work 
         in the <b>capturing phase</b> or <b>bubbling phase</b> by passing a third argument 
         (<code><b>true</b></code> or <code><b>false</b></code>) in <code><b>addEventListener</b></code>.
      </div>
   </div>
   <div className="mtop15p"><h2 className="blog-head"><b>Event Bubbling</b></h2></div>
   <div className="mtop15p"><h5 className="blog-head"><b>Definition</b></h5></div>
   <div className="mtop5p">Event bubbling means the event is first captured and handled by the <b>target element,</b> and then 
   it bubbles up to its ancestors.</div>
   <div className="mtop15p"><h5 className="blog-head"><b>Example</b></h5></div>
   <div className="mtop5p">
      <Highlight content={EVENTBUBBLING_EXAMPLE_JS} lang="javascript" />
   </div>
   <div className="mtop5p padLeft5p"><h5 className="blog-head"><b>Output in Console (when button is clicked)</b></h5></div>
   <div className="mtop5p">
      <Highlight content={EVENTBUBBLING_OUTPUT_JS} lang="javascript" />
   </div>
   <div className="mtop5p">The event bubbles from the button (child) to the parent.</div>

   <div className="mtop15p"><h2 className="blog-head"><b>Event Capturing</b></h2></div>
   <div className="mtop15p"><h5 className="blog-head"><b>Definition</b></h5></div>
   <div className="mtop6p">Event capturing (or trickling) means the event is captured <b>from the top of the DOM tree down to 
      the target element.</b></div>
   <div className="mtop15p"><h5 className="blog-head"><b>Example</b></h5></div>
   <div className="mtop5p">
      <Highlight content={EVENTCAPTURING_EXAMPLE_JS} lang="javascript" />
   </div>
   <div className="mtop5p padLeft5p"><h5 className="blog-head"><b>Output in Console (when button is clicked)</b></h5></div>
   <div className="mtop5p">
      <Highlight content={EVENTCAPTURING_OUTPUT_JS} lang="javascript" />
   </div>
   <div className="mtop5p">Here, the parent handler runs <b>before</b> the child because capturing travels <b>downward.</b></div>

   <div className="mtop15p"><h2 className="blog-head"><b>Comparison: Event Bubbling vs Event Capturing</b></h2></div>
   <div className="mtop5p">
      <SimpleTable header={["Feature", "Event Bubbling", "Event Capturing"]} 
            columns={[
                  [(<div><b>Direction</b></div>), (<div>From target -&gt; up to root</div>), (<div>From root -&gt; down to target</div>)],
                  [(<div><b>Default Behavior</b></div>), (<div>Yes (most browsers)</div>), (<div>No (must explicitly set useCapture)</div>)],
                  [(<div><b>Common Use Case</b></div>), (<div>Delegation, handling multiple children</div>), (<div>Rare, but useful for special cases</div>)],
                  [(<div><b>Example</b></div>), (<div>Click on child triggers parent later</div>), (<div>Parent triggers before child</div>)]
               ]} />         
   </div>

   <div className="mtop15p"><h2 className="blog-head"><b>Event Delegation</b></h2></div>
   <div className="mtop15p">
      <b>Event Delegation</b> is a powerful pattern that uses <b>event bubbling</b> to handle events efficiently. Instead of 
      attaching listeners to many child elements, you attach one listener to a parent and determine the target 
      using <code><b>event.target</b></code>.
   </div>
   <div className="mtop15p"><h5 className="blog-head"><b>Example:</b></h5></div>
   <div className="mtop5p">
      <Highlight content={EVENTDELEGATION_EXAMPLE_JS} lang="javascript" />
   </div>
   <div className="mtop5p">Now, no matter how many <code><b>&lt;li&gt;</b></code> items you add, you only need one event 
   listener on the <code><b>&lt;ul&gt;</b></code>.</div>
 </div>);
};

export default Introduction;