import React from "react";
import { Card, Highlight } from "e-ui-react";

const VIRTUAL_EXAMPLE_DOM = `function App() {
  return <h1>Hello Virtual DOM</h1>;
}`;

const SHADOW_EXAMPLE_DOM = `const shadowHost = document.getElementById("shadow-host");
const shadowRoot = shadowHost.attachShadow({ mode: "open" });
shadowRoot.innerHTML = \`
  <style>p { color: red; }</style>
  <p>Inside Shadow DOM</p>
\`;`;

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p">
      <Card padding={15} backgroundColor="#eee">
         <div><h4 className="blog-head"><b>The Problem Before These Concepts</b></h4></div>
         <div className="mop15p">Before advanced DOM handling techniques came along, JavaScript developers struggled 
            with <b>slow UI updates</b> and <b>style conflicts.</b></div>
         <div>
            <ol>
               <li className="mtop5p">
                  <div><h5 className="blog-head"><b>With the traditional DOM</b></h5></div>
                  <div>
                     <ul>
                        <li className="mtop5p">The browser would <b>re-render the whole page</b> even for a small change.</li>
                        <li className="mtop5p">Large DOM trees caused <b>performance bottlenecks</b> — scrolling, animations, and 
                        interactions could feel sluggish.</li>
                     </ul>
                  </div>
               </li>
               <li className="mtop5p">
                  <div><h5 className="blog-head"><b>Without Virtual DOM</b></h5></div>
                  <div>
                     <ul>
                        <li className="mtop5p">UI frameworks had to manually track what needed to be updated.</li>
                        <li className="mtop5p">Multiple reflows and repaints slowed apps significantly.</li>
                     </ul>
                  </div>
               </li>
               <li className="mtop5p">
                  <div><h5 className="blog-head"><b>Without Shadow DOM</b></h5></div>
                  <div>
                     <ul>
                        <li className="mtop5p">CSS and JavaScript from different components could <b>leak into each other,</b> 
                        breaking styles and behaviors.</li>
                        <li className="mtop5p">Building reusable, encapsulated components was harder.</li>
                     </ul>
                  </div>
               </li>
            </ol>
         </div>
         <div className="mtop5p">
            These problems led to the <b>evolution of DOM management techniques</b> — first the Virtual DOM for 
            performance, then the Shadow DOM for encapsulation.
         </div>
      </Card>
   </div>
   <div className="mtop15p"><h2 className="blog-head"><b>Introduction – What Are DOM, Virtual DOM, and Shadow DOM?</b></h2></div>
   <div>
      <ol>
         <li className="mtop15p">
            <div><h4 className="blog-head"><b>DOM (Document Object Model)</b></h4></div>
            <div>
               <ul>
                  <li className="mtop5p">The <b>DOM</b> is the browser’s in-memory representation of the HTML document.</li>
                  <li className="mtop5p">JavaScript can <b>read, update, and delete</b> DOM elements.</li>
                  <li className="mtop5p">It’s <b>live</b>, meaning changes are immediately reflected on screen.</li>
               </ul>
            </div>
            <div><b>Example:</b></div>
            <div className="mtop5p">
               <Highlight content={`document.getElementById("title").textContent = "Hello World!";`} lang="javascript" />
            </div>
            <div className="mtop5p">Changes directly affect the <b>real DOM.</b></div>
         </li>
         <li className="mtop15p">
            <div><h4 className="blog-head"><b>Virtual DOM</b></h4></div>
            <div>
               <ul>
                  <li className="mtop5p">The <b>Virtual DOM</b> is an <b>in-memory copy</b> of the real DOM, usually maintained by 
                  frameworks like <b>React, Vue, or Preact.</b></li>
                  <li className="mtop5p">
                     <div>When something changes, the framework:</div>
                     <div>
                        <ol>
                           <li className="mtop5p">Updates the Virtual DOM.</li>
                           <li className="mtop5p">Compares (diffs) it with the previous version.</li>
                           <li className="mtop5p">Updates only the <b>changed parts</b> in the real DOM.</li>
                        </ol>
                     </div>
                     <div>This <b>minimizes reflows and repaints,</b> improving performance.</div>
                     <div className="mtop5p"><b>Example in React:</b></div>
                     <div className="mtop5p">
                        <Highlight content={VIRTUAL_EXAMPLE_DOM} lang="javascript" />
                     </div>
                     <div className="mtop5p">
                        React’s reconciliation algorithm decides <b>exactly which DOM elements to update,</b> instead of 
                        re-rendering everything.
                     </div>
                  </li>
                  <li className="mtop15p">
                     <div><h4 className="blog-head"><b>Shadow DOM</b></h4></div>
                     <div>
                        <ul>
                           <li className="mtop5p">The <b>Shadow DOM</b> provides <b>encapsulation</b> for HTML, CSS, and JS 
                           inside a component.</li>
                           <li className="mtop5p">Styles and scripts inside a Shadow DOM <b>don’t leak out</b> to the rest of 
                           the page, and external styles don’t leak in.</li>
                           <li className="mtop5p">It’s a <b>browser feature</b> — no framework required.</li>
                        </ul>
                     </div>
                     <div className="mtop5p"><b>Example:</b></div>
                     <div className="mtop5p">
                        <Highlight content={SHADOW_EXAMPLE_DOM} lang="javascript" />
                     </div>
                     <div className="mtop5p">Here, the <code><b>&lt;p&gt;</b></code> is red <b>only inside the shadow 
                        DOM,</b> unaffected by outside CSS.</div>
                  </li>
               </ul>
            </div>
         </li>
      </ol>
   </div>
 </div>);
};

export default Introduction;