import React from "react";
import { Highlight } from "e-ui-react";

const BASIC_EXAMPLE_CURRYING = `function multiply(a) {
  return function(b) {
    return function(c) {
      return a * b * c;
    };
  };
}

console.log(multiply(2)(3)(4)); // 24`;

const SHORT_EXAMPLE_ARROWFUNC = `const multiply = a => b => c => a * b * c;
console.log(multiply(2)(3)(4)); // 24`;

const REUSABILITY_EXAMPLE_CURRYING = `const multiplyBy2 = multiply(2);
console.log(multiplyBy2(3)(4)); // 24
console.log(multiplyBy2(10)(5)); // 100`;

const PARTIAL_EXAMPLE_APP = `function multiply(a, b, c) {
  return a * b * c;
}
const multiplyBy2 = multiply.bind(null, 2);
console.log(multiplyBy2(3, 4)); // 24`;

const CREATE_EXAMPLE_GENERIC = `function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function(...nextArgs) {
        return curried.apply(this, args.concat(nextArgs));
      };
    }
  };
}

function sum(a, b, c) {
  return a + b + c;
}

const curriedSum = curry(sum);

console.log(curriedSum(1)(2)(3)); // 6
console.log(curriedSum(1, 2)(3)); // 6
console.log(curriedSum(1)(2, 3)); // 6`;

const PRACTICAL_EXAMPLE_CONFIG = `const setConfig = apiUrl => token => endpoint => {
  return fetch(\`\${apiUrl}/\${endpoint}\`, {
    headers: { Authorization: \`Bearer \${token}\` }
  });
};

const apiWithAuth = setConfig('https://api.example.com')('my-secret-token');
apiWithAuth('users'); // fetches https://api.example.com/users with token`;

const Example = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Examples & Related Topics</b></h2></div>
    <div>
      <ol>
         <li className="mtop15p">
            <div><h4 className="blog-head"><b>Basic Currying Example</b></h4></div>
            <div className="mtop5p">
               <Highlight content={BASIC_EXAMPLE_CURRYING} lang="javascript" />
            </div>
            <div>Here:</div>
            <div>
               <ul>
                  <li className="mtop5p"><code><b>multiply(2)</b></code> returns a function expecting <code><b>b</b></code>.</li>
                  <li className="mtop5p">That returns another function expecting <code><b>c</b></code>.</li>
                  <li className="mtop5p">Finally, <code><b>a * b * c</b></code> is calculated.</li>
               </ul>
            </div>
         </li>
         <li className="mtop15p">
            <div><h4 className="blog-head"><b>Using Arrow Functions for Short Syntax</b></h4></div>
            <div className="mtop5p">
               <Highlight content={SHORT_EXAMPLE_ARROWFUNC} lang="javascript" />
            </div>
            <div className="mtop5p">More concise and functional.</div>
         </li>
         <li className="mtop15p">
            <div><h4 className="blog-head"><b>Why Currying is Useful?</b></h4></div>
            <div className="padLeft5p">
               <div className="mtop5p"><h5 className="blog-head"><b>a) Reusability</b></h5></div>
               <div className="mtop5p">
                  <Highlight content={REUSABILITY_EXAMPLE_CURRYING} lang="javascript" />
               </div>
               <div className="mtop5p">We fixed the first argument (<code><b>a = 2</b></code>) and reused the function.</div>
               <div className="mtop5p"><h5 className="blog-head"><b>b) Function Composition</b></h5></div>
               <div className="mtop5p">Currying allows small functions to be chained together in functional programming.</div>
            </div>
         </li>
         <li className="mtop15p">
            <div><h4 className="blog-head"><b>Currying vs Partial Application</b></h4></div>
            <div className="mtop5p"><b>Partial Application</b> fixes <b>some</b> arguments but may take multiple arguments at 
            each step.<b>Currying</b> strictly takes <b>one argument at a time.</b></div>
            <div className="mtop5p"><b>Example (Partial Application):</b></div>
            <div className="mtop5p">
               <Highlight content={PARTIAL_EXAMPLE_APP} lang="javascript" />
            </div>
         </li>
         <li className="mtop15p">
            <div><h4 className="blog-head"><b>Creating a Generic Curry Function</b></h4></div>
            <div className="mtop5p">
               <Highlight content={CREATE_EXAMPLE_GENERIC} lang="javascript" />
            </div>
            <div className="mtop5p">
               This version works with <b>flexible argument passing.</b>
            </div>
         </li>
         <li className="mtop15p">
            <div><h4 className="blog-head"><b>Practical Example – Configuration Functions</b></h4></div>
            <div className="mtop5p">
               <Highlight content={PRACTICAL_EXAMPLE_CONFIG} lang="javascript" />
            </div>
            <div className="mtop5p">Here, we:</div>
            <div>
               <ul>
                  <li className="mtop5p">Fixed <code><b>apiUrl</b></code> and <code><b>token</b></code> once.</li>
                  <li className="mtop5p">Reused <code><b>apiWithAuth</b></code> for multiple endpoints.</li>
               </ul>
            </div>
         </li>
      </ol>
    </div>
 </div>);
};

export default Example;