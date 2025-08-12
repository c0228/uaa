import React from "react";
import { Highlight } from "e-ui-react";

const BASIC_EXAMPLE_CLOSURE = `function outer() {
  let message = "Hello from outer!";
  function inner() {
    console.log(message); // Access outer variable
  }
  return inner;
}

const fn = outer();
fn(); // Hello from outer!`;

const PRIVATEVAR_EXAMPLE_CLOSURE = `function createCounter() {
  let count = 0; // Private variable
  return {
    increment: function() {
      count++;
      console.log(count);
    },
    decrement: function() {
      count--;
      console.log(count);
    }
  };
}

const counter = createCounter();
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
// console.log(counter.count); // undefined (protected)`;

const SETTIMEOUT_EXAMPLE_CLOSURE = `function delayedMessage(msg, delay) {
  setTimeout(function() {
    console.log(msg);
  }, delay);
}

delayedMessage("Hello after 2 seconds", 2000);`;

const LOOP_EXAMPLE_CLOSURE = `for (var i = 1; i <= 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}
// Output after 1s: 4, 4, 4`;

const FIX_EXAMPLE_CLOSURE = `for (var i = 1; i <= 3; i++) {
  (function(x) {
    setTimeout(function() {
      console.log(x);
    }, 1000);
  })(i);
}
// Output after 1s: 1, 2, 3`;

const FIXLET_EXAMPLE_CLOSURE = `for (let i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 1000);
}`;

const EVENTLISTENERS_EXAMPLE_CLOSURE = `function setupButton(id, color) {
  document.getElementById(id).addEventListener("click", function() {
    console.log(\`Button \${id} clicked! Color: \${color}\`);
  });
}

setupButton("btn1", "red");
setupButton("btn2", "blue");`;

const Example = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p"><h2 className="blog-head"><b>Examples</b></h2></div>
   <div className="mtop15p"><h4 className="blog-head"><b>1. Basic Closure</b></h4></div>
   <div className="mtop15p">
      <Highlight content={BASIC_EXAMPLE_CLOSURE} lang="javascript" />
   </div>
   <div className="mtop5p">Here, <code><b>inner</b></code> still accesses <code><b>message</b></code> even 
   though <code><b>outer()</b></code> has already finished.</div>

   <div className="mtop15p"><h4 className="blog-head"><b>2. Closure for Private Variables</b></h4></div>
   <div className="mtop15p">
      <Highlight content={PRIVATEVAR_EXAMPLE_CLOSURE} lang="javascript" />
   </div>
   <div className="mtop5p"><code><b>count</b></code> cannot be accessed directly — it’s private inside the closure.</div>

   <div className="mtop15p"><h4 className="blog-head"><b>3. Closure with setTimeout</b></h4></div>
   <div className="mtop15p">
      <Highlight content={SETTIMEOUT_EXAMPLE_CLOSURE} lang="javascript" />
   </div>
   <div className="mtop5p">Even after <code><b>delayedMessage</b></code> finishes, the callback 
   inside <code><b>setTimeout</b></code> remembers <code><b>msg</b></code>.</div>

   <div className="mtop15p"><h4 className="blog-head"><b>4. Loop with Closure Problem (var)</b></h4></div>
   <div className="mtop15p">
      <Highlight content={LOOP_EXAMPLE_CLOSURE} lang="javascript" />
   </div>
   <div className="mtop5p"><b>Why?</b></div>
   <div className="mtop5p">Because <code><b>var</b></code> is function-scoped, and all callbacks share the 
   same <code><b>i</b></code>.</div>
   <div className="mtop5p"><b>Fix with closure (IIFE):</b></div>
   <div className="mtop15p">
      <Highlight content={FIX_EXAMPLE_CLOSURE} lang="javascript" />
   </div>
   <div className="mtop5p"><b>Fix with <code><b>let</b></code>:</b></div>
   <div className="mtop15p">
      <Highlight content={FIXLET_EXAMPLE_CLOSURE} lang="javascript" />
   </div>
   <div className="mtop5p"><code><b>let</b></code> creates a block-scoped variable for each iteration.</div>

   <div className="mtop15p"><h4 className="blog-head"><b>5. Real-life Use: Event Listeners with Closures</b></h4></div>
   <div className="mtop15p">
      <Highlight content={EVENTLISTENERS_EXAMPLE_CLOSURE} lang="javascript" />
   </div>
   <div className="mtop5p">Each event handler <b>remembers</b> its own <code><b>color</b></code> through a closure.</div>
 </div>);
};

export default Example;