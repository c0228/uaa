import React from "react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const Conclusion = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
   <div className="mtop15p"><h2 className="blog-head"><b>Common Optional Methods</b></h2></div>
   <div className="mtop5p">
      <SimpleTable header={["Method", "Description"]} 
        columns={[
            [(<div><code><b>of()</b></code></div>),"Creates Optional with a non-null value"],
            [(<div><code><b>ofNullable()</b></code></div>),"Creates Optional with null or non-null value"],
            [(<div><code><b>empty()</b></code></div>),"Creates an empty Optional"],
            [(<div><code><b>isPresent()</b></code></div>),"Checks if value is present"],
            [(<div><code><b>ifPresent()</b></code></div>),"Executes block if value is present"],
            [(<div><code><b>orElse(default)</b></code></div>),"Returns value or default if empty"],
            [(<div><code><b>orElseGet()</b></code></div>),"Returns value or uses Supplier for default"],
            [(<div><code><b>orElseThrow()</b></code></div>),"Throws exception if value is not present"],
            [(<div><code><b>map()</b></code></div>),"Transforms the value if present"],
            [(<div><code><b>flatMap()</b></code></div>),"Similar to map but for nested Optionals"]
          ]} />
   </div>
   <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
   <div className="mtop15p">The <b>Java 8 Optional class</b> is a <b>powerful tool</b> to handle <code><b>null</b></code> values 
   in a safe and cleaner way.</div>
   <div>
      <ul>
         <li className="mtop5p">It <b>reduces NullPointerExceptions</b>.</li>
         <li className="mtop5p"><b>Eliminates redundant null checks.</b></li>
         <li className="mtop5p">Encourages <b>functional programming style</b> with streams and lambda expressions.</li>
      </ul>
   </div>
   <div className="mtop5p mbot15p">By adopting <code><b>Optional</b></code>, your code becomes <b>more expressive, readable, and less error-prone</b>.</div>
 </div>);
};

export default Conclusion;