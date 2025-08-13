import React from "react";
import { Highlight } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const DOM_EXAMPLE_JS = `<p id="demo">Hello</p>
<script>
  document.getElementById("demo").textContent = "Updated Text";
</script>
`;

const SHADOW_EXAMPLE_JS = `<div id="shadow-host"></div>
<script>
  const host = document.getElementById("shadow-host");
  const shadow = host.attachShadow({ mode: "open" });
  shadow.innerHTML = \`<style>h2 { color: blue; }</style><h2>Shadow Encapsulated</h2>\`;
</script>`;

const Example = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p"><h2 className="blog-head"><b>Examples & Key Differences</b></h2></div>
   <div>
      <ol>
         <li className="mtop5p">
            <div><h4 className="blog-head"><b>DOM Example</b></h4></div>
            <div className="mtop5p">
               <Highlight content={DOM_EXAMPLE_JS} lang="javascript" />
            </div>
            <div>Updates happen <b>directly in the DOM.</b></div>
         </li>
         <li className="mtop5p">
            <div><h4 className="blog-head"><b>Virtual DOM Example</b></h4></div>
            <div><b>Conceptual flow:</b></div>
            <div>
               <ol>
                  <li className="mtop5p">Change in UI triggers Virtual DOM update.</li>
                  <li className="mtop5p">Virtual DOM is compared with old Virtual DOM.</li>
                  <li className="mtop5p">Only differences are updated in real DOM.</li>
               </ol>
            </div>
            <div><b>Benefit:</b> Faster, fewer unnecessary updates.</div>
         </li>
         <li className="mtop5p">
            <div><h4 className="blog-head"><b>Shadow DOM Example</b></h4></div>
            <div className="mtop5p">
               <Highlight content={SHADOW_EXAMPLE_JS} lang="javascript" />
            </div>
            <div>Here, the <code><b>&lt;h2&gt;</b></code> stays blue even if an outside CSS 
            sets <code><b>h2 {`{ color: green; }`}</b></code>.</div>
         </li>
      </ol>
   </div>
   <div className="mtop15p"><h2 className="blog-head"><b>Comparison Table</b></h2></div>
   <div className="mtop5p">
      <SimpleTable header={["Feature", "DOM", "Virtual DOM", "Shadow DOM"]} 
         columns={[
               [(<div><b>What it is</b></div>), "Browser’s live HTML representation", "In-memory copy of DOM", "Encapsulated DOM for components"],
               [(<div><b>Performance</b></div>), "Direct updates (can be slow for large apps)", "Optimized updates via diffing", "Similar to DOM, but scoped"],
               [(<div><b>Encapsulation</b></div>), "None", "None", "Strong encapsulation"],
               [(<div><b>Use case</b></div>), "Small apps, vanilla JS", "Large dynamic UIs (React, Vue)", "Web Components, style isolation"],
            ]} />			
   </div>
 </div>);
};

export default Example;