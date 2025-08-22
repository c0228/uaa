import React from "react";
import { Highlight } from "e-ui-react";

const WOEVENTDELEGATION_EXAMPLE_JS = `// Suppose you have multiple buttons inside a list
const buttons = document.querySelectorAll('.my-buttons button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    console.log(\`Button \${button.innerText} clicked\`);
  });
});`;

const WEVENTDELEGATION_EXAMPLE_JS = `// Attach the event listener to the parent container
const container = document.querySelector('.my-buttons');

container.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    console.log(\`Button \${event.target.innerText} clicked\`);
  }
});`;

const HANDLEDYNELEMENTS_EXAMPLE_JS = `const list = document.querySelector('#todo-list');

// Add listener only once to the parent
list.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    console.log(\`Clicked on: \${event.target.innerText}\`);
  }
});

// Dynamically adding new items
const newItem = document.createElement('li');
newItem.textContent = "New Task";
list.appendChild(newItem);
// No need to add another event listener!`;

const FILTERSPECIFIC_EXAMPLE_JS = `document.querySelector('#menu').addEventListener('click', (event) => {
  if (event.target.matches('.menu-item')) {
    console.log(\`Menu item selected: \${event.target.dataset.value}\`);
  }
});`;

const Example = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Examples of Event Delegation</b></h2></div>
    <div className="mtop15p"><h4 className="blog-head"><b>Example 1: Without Event Delegation</b></h4></div>
    <div className="mtop5p">
      <Highlight content={WOEVENTDELEGATION_EXAMPLE_JS} lang="javascript" />
    </div>
    <div className="mtop5p padLeft5p"><b>Problem:</b> Each button has its own event listener. If 100 buttons exist, 
    that’s 100 listeners.</div>
    <div className="mtop15p"><h4 className="blog-head"><b>Example 2: With Event Delegation</b></h4></div>
    <div className="mtop5p">
      <Highlight content={WEVENTDELEGATION_EXAMPLE_JS} lang="javascript" />
    </div>
    <div className="mtop5p padLeft5p"><b>Advantage:</b> Only one event listener handles all current and future buttons.</div>

    <div className="mtop15p"><h4 className="blog-head"><b>Example 3: Handling Dynamic Elements</b></h4></div>
    <div className="mtop5p">Event delegation also shines when new elements are dynamically added.</div>
    <div className="mtop5p">
      <Highlight content={HANDLEDYNELEMENTS_EXAMPLE_JS} lang="javascript" />
    </div>
    <div className="mtop5p">Even the newly added <code><b>&lt;li&gt;</b></code> works automatically, thanks to delegation.</div>

    <div className="mtop15p"><h4 className="blog-head"><b>Example 4: Filtering Specific Children</b></h4></div>
    <div className="mtop5p">Sometimes you may need to target only specific elements inside the parent.</div>
    <div className="mtop5p">
      <Highlight content={FILTERSPECIFIC_EXAMPLE_JS} lang="javascript" />
    </div>
    <div className="mtop5p"><code><b>event.target.matches()</b></code> is very handy when you want to check if the clicked 
    element matches a selector.</div>
 </div>);
};

export default Example;