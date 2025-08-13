import React from "react";
import { Highlight, Icon } from "e-ui-react";

const ISNAN_EXAMPLE_JS = `console.log(isNaN("hello")); // true
console.log(isNaN(NaN));     // true
console.log(isNaN(123));     // false`;

const NUMISNAN_EXAMPLE_JS = `console.log(Number.isNaN("hello")); // false
console.log(Number.isNaN(NaN));     // true`;

const MATHOPERATION_EXAMPLE_NAN = `let a = NaN;
console.log(a + 5); // NaN
console.log(a * 2); // NaN`;

const GLOBAL_EXAMPLE_NAN = `console.log(NaN); // NaN
console.log(window.NaN); // NaN (in browsers)`;

const OBJIS_EXAMPLE_NAN = `console.log(Object.is(NaN, NaN)); // true`;

const AVOID_EXAMPLE_NAN = `function safeDivide(a, b) {
  if (typeof a !== "number" || typeof b !== "number" || Number.isNaN(a) || Number.isNaN(b)) {
    return "Invalid Input";
  }
  return a / b;
}

console.log(safeDivide(10, 2)); // 5
console.log(safeDivide(0, 0));  // "Invalid Input"`;

const Example = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Examples & Related Topics</b></h2></div>
    <div>
      <ol>
         <li className="mtop5p">
            <div><b>NaN is of type 'number'</b></div>
            <div className="mtop5p"><Highlight content={`console.log(typeof NaN); // "number"`} lang="javascript" /></div>
            <div>Even though NaN means "Not-a-Number", it’s still considered a numeric type in JavaScript.</div>
         </li>
         <li className="mtop5p">
            <div><b>NaN is not equal to itself</b></div>
            <div className="mtop5p"><Highlight content={`console.log(NaN === NaN); // false`} lang="javascript" /></div>
            <div>This is unusual! NaN is <b>the only value in JavaScript that is not equal to itself.</b></div>
            <div>
               <ul>
                  <li className="mtop5p">This is because NaN represents an <b>invalid number,</b> and comparing two 
                  invalid numbers doesn’t make sense.</li>
               </ul>
            </div>
         </li>
         <li className="mtop5p">
            <div><b>Checking for NaN</b></div>
            <div>Since <code><b>NaN === NaN</b></code> is <code><b>false</b></code>, we can’t check it directly.</div>
            <div><b>Using <code>isNaN()</code></b></div>
            <div className="mtop5p"><Highlight content={ISNAN_EXAMPLE_JS} lang="javascript" /></div>
            <div className="mtop5p">
               <Icon type="FontAwesome" name="fa-warning" size={14} color="orange" style={{ marginRight:'5px' }} />
               <b>Problem:</b> <code><b>isNaN()</b></code> converts the value to a number before checking, which can 
               give misleading results.
            </div>
            <div><b>Using <code>Number.isNaN()</code> (Better)</b></div>
            <div className="mtop5p"><Highlight content={NUMISNAN_EXAMPLE_JS} lang="javascript" /></div>
            <div><Icon type="FontAwesome" name="fa-check-circle" size={18} color="green" style={{ marginRight:'5px' }} /> 
            This <b>does not convert the value,</b> making it more reliable.</div>
         </li>
         <li className="mtop5p">
            <div><b>Operations with NaN</b></div>
            <div>NaN <b>infects</b> calculations—it spreads through math operations:</div>
            <div className="mtop5p">
               <Highlight content={MATHOPERATION_EXAMPLE_NAN} lang="javascript" />
            </div>
         </li>
         <li className="mtop5p">
            <div><b>Global NaN Property</b></div>
            <div>JavaScript has a global <b>NaN</b> variable:</div>
            <div className="mtop5p">
               <Highlight content={GLOBAL_EXAMPLE_NAN} lang="javascript" />
            </div>
            <div className="mtop5p">
               It is <b>read-only,</b> meaning you cannot overwrite it.
            </div>
         </li>
         <li className="mtop5p">
            <div><b><code>Object.is()</code> and NaN</b></div>
            <div><code>Object.is()</code> can correctly identify NaN as being equal to itself:</div>
            <div className="mtop5p">
               <Highlight content={OBJIS_EXAMPLE_NAN} lang="javascript" />
            </div>
            <div className="mtop5p">It’s useful when strict equality (<code><b>===</b></code>) doesn’t behave as expected.</div>
         </li>
         <li className="mtop5p">
            <div><b>Avoiding NaN in Code</b></div>
            <div>
               <ul>
                  <li className="mtop5p">Validate inputs before doing math</li>
                  <li className="mtop5p">Use <code><b>Number.isNaN()</b></code> to detect NaN values</li>
                  <li className="mtop5p">Handle edge cases like division by zero or parsing non-numeric strings</li>
               </ul>
            </div>
            <div><b>Example:</b></div>
            <div className="mtop5p">
               <Highlight content={AVOID_EXAMPLE_NAN} lang="javascript" />
            </div>
         </li>
      </ol>
    </div>
 </div>);
};

export default Example;