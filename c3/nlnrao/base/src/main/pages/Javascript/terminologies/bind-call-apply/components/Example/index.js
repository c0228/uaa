import React from "react";
import { Highlight } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const BIND_EXAMPLE_JS = `const person = {
  name: "Alice"
};

function greet(greeting) {
  console.log(\`\${greeting}, my name is \${this.name}\`);
}

const boundGreet = greet.bind(person, "Hello");
boundGreet(); // Hello, my name is Alice`;

const CALL_EXAMPLE_JS = `const person = { name: "Bob" };

function greet(greeting, punctuation) {
  console.log(\`\${greeting}, my name is \${this.name}\${punctuation}\`);
}

greet.call(person, "Hi", "!"); // Hi, my name is Bob!`;

const APPLY_EXAMPLE_JS = `const person = { name: "Charlie" };

function greet(greeting, punctuation) {
  console.log(\`\${greeting}, my name is \${this.name}\${punctuation}\`);
}

greet.apply(person, ["Hey", "!!"]); // Hey, my name is Charlie!!`;

const FUNCTION_EXAMPLE_BORROW = `const person1 = { name: "David" };
const person2 = { name: "Emma" };

function introduce(hobby) {
  console.log(\`Hi, I am \${this.name} and I love \${hobby}\`);
}

introduce.call(person1, "reading");   // Hi, I am David and I love reading
introduce.apply(person2, ["painting"]); // Hi, I am Emma and I love painting

const laterIntro = introduce.bind(person1, "coding");
laterIntro(); // Hi, I am David and I love coding`;

const Example = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p"><h2 className="blog-head"><b>Examples</b></h2></div>
   <div className="mtop15p"><h4 className="blog-head"><b>bind() – Creates a New Function with Fixed <code>this</code></b></h4></div>
   <div className="mtop5p">
      <Highlight content={BIND_EXAMPLE_JS} lang="javascript" />
   </div>
   <div className="mtop15p"><b>Key Points:</b></div>
   <div>
      <ul>
         <li className="mtop5p">Does <b>not</b> execute immediately.</li>
         <li className="mtop5p">Returns a new function with <code><b>this</b></code> locked to <code><b>person</b></code>.</li>
      </ul>
   </div>
   <div className="mtop15p"><h4 className="blog-head"><b>call() – Calls Function Immediately (Arguments Individually)</b></h4></div>
   <div className="mtop15p">
      <Highlight content={CALL_EXAMPLE_JS} lang="javascript" />
   </div>
   <div className="mtop15p"><b>Key Points:</b></div>
   <div>
      <ul>
         <li className="mtop5p">Executes <b>right away.</b></li>
         <li className="mtop5p">Pass arguments <b>separately.</b></li>
      </ul>
   </div>
   <div className="mtop15p"><h4 className="blog-head"><b>apply() – Calls Function Immediately (Arguments as Array)</b></h4></div>
   <div className="mtop15p">
      <Highlight content={APPLY_EXAMPLE_JS} lang="javascript" />
   </div>
   <div className="mtop15p"><b>Key Points:</b></div>
   <div>
      <ul>
         <li className="mtop5p">Executes <b>right away.</b></li>
         <li className="mtop5p">Pass arguments as a <b>single array..</b></li>
      </ul>
   </div>

   <div className="mtop15p"><h2 className="blog-head"><b>Side-by-Side Comparison</b></h2></div>
   <div className="mtop15p">
      <SimpleTable header={["Feature", "bind()", "call()", "apply()"]} 
            columns={[
                  ["Executes immediately?",
                  "No (returns a new function)",
                  "Yes", 
                  "Yes"],
                  ["Arguments type",
                  "List (can preset values when binding)",
                  (<div><code><b>List (arg1, arg2, ...)</b></code></div>),
                  (<div><code><b>Array ([arg1, arg2, ...])</b></code></div>)],
                  ["Main use case",
                  (<div>Permanent binding of <code><b>this</b></code> for later use</div>),
                  (<div>One-time function call with <code><b>this</b></code></div>),
                  (<div>One-time call with arguments in array</div>)],
               ]} />
   </div>

   <div className="mtop15p"><h2 className="blog-head"><b>Real-Life Use Case: Function Borrowing</b></h2></div>
   <div className="mtop15p">
      <Highlight content={FUNCTION_EXAMPLE_BORROW} lang="javascript" />
   </div>
 </div>);
};

export default Example;