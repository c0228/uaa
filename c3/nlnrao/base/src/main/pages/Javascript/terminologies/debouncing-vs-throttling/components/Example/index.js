import React from "react";
import { Highlight } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const DEBOUNCING_EXAMPLE_JS = `function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

function searchQuery(query) {
  console.log(\`Fetching results for: \${query}\`);
}

const debouncedSearch = debounce(searchQuery, 500);

document.getElementById("search").addEventListener("input", (e) => {
  debouncedSearch(e.target.value);
});`;

const THROTTLING_EXAMPLE_JS = `function throttle(func, limit) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}

function logScrollPosition() {
  console.log(\`Scroll position: \${window.scrollY}\`);
}

const throttledScroll = throttle(logScrollPosition, 200);

window.addEventListener("scroll", throttledScroll);`;

const Example = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p"><h2 className="blog-head"><b>Examples  & Related Topics</b></h2></div>
   <div>
      <ol>
         <li className="mtop15p">
            <div><h4 className="blog-head"><b>Debouncing Example</b></h4></div>
            <div className="mtop5p"><b>Use case:</b> Search box that fetches suggestions only when the user stops typing.</div>
            <div className="mtop5p">
               <Highlight content={DEBOUNCING_EXAMPLE_JS} lang="javascript" />
            </div>
            <div className="mtop5p"><h5 className="blog-head"><b>How it works:</b></h5></div>
            <div>
               <ul>
                  <li className="mtop5p">Each keystroke <b>resets the timer.</b></li>
                  <li className="mtop5p">Function runs <b>only after 500ms of inactivity.</b></li>
               </ul>
            </div>
         </li>
         <li className="mtop15p">
            <div><h4 className="blog-head"><b>Throttling Example</b></h4></div>
            <div><b>Use case:</b> Tracking scroll position but updating it at most every 200ms.</div>
            <div className="mtop5p">
               <Highlight content={THROTTLING_EXAMPLE_JS} lang="javascript" />
            </div>
            <div className="mtop5p"><h5 className="blog-head"><b>How it works:</b></h5></div>
            <div>
               <ul>
                  <li className="mtop5p">The function executes immediately, then <b>ignores further calls</b> until 
                  the time limit passes.</li>
               </ul>
            </div>
            <div><h5 className="blog-head"><b>Key Differences Table</b></h5></div>
            <div className="mtop5p">
               <SimpleTable header={["Feature", "Debouncing", "Throttling"]} 
                  columns={[
                     [(<div>Purpose</div>),(<div>Run <b>only after</b> user stops triggering the event</div>), (<div>Run <b>at regular intervals</b> while the event is active</div>)],
                     [(<div>Best for</div>),(<div>Search inputs, auto-saving drafts</div>), (<div>Scroll events, window resizing, mouse movements</div>)],
                     [(<div>Execution rate</div>),(<div>Executes <b>once after inactivity</b></div>), (<div>Executes <b>repeatedly at controlled intervals</b></div>)],
                     [(<div>Example delay</div>),(<div>Runs after 500ms of no typing</div>), (<div>Runs every 200ms during scroll</div>)]
                  ]} />
            </div>
         </li>
         <li className="mtop15p">
            <div><h4 className="blog-head"><b>When to Use Which</b></h4></div>
            <div>
               <ul>
                  <li className="mtop5p"><b>Use Debouncing:</b> When you want the final action after a burst of events (e.g., search autocomplete, 
                  resize finish).</li>
                  <li className="mtop5p"><b>Use Throttling:</b> When you want regular updates during an event without overloading performance 
                  (e.g., scroll tracking, game loops).</li>
               </ul>
            </div>
         </li>
         <li className="mtop15p">
            <div><h4 className="blog-head"><b>Combining Both</b></h4></div>
            <div className="mtop5p">Sometimes you can use <b>both techniques together.</b></div>
            <div>Example: Infinite scroll where:</div>
            <div>
               <ul>
                  <li className="mtop5p"><b>Throttle</b> controls how often new items load while scrolling.</li>
                  <li className="mtop5p"><b>Debounce</b> delays the final “scroll to bottom” analytics event until scrolling stops.</li>
               </ul>
            </div>
         </li>
      </ol>
   </div>
 </div>);
};

export default Example;