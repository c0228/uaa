import React from "react";
import { Card, Highlight } from "e-ui-react";

const BEFORE8FUTURE_EXAMPLE_JAVA = ``;

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p">Java 8 introduced several features to make <b>asynchronous programming</b> easier and more efficient. One 
   such feature is the <b>CompletableFuture</b>, which is part of the <code><b>java.util.concurrent</b></code> package. It helps 
   developers write <b>non-blocking, asynchronous, and concurrent code</b> with ease.</div>
   <div className="mtop15p">
      <Card padding={15} backgroundColor="#eee">
         <div>Before Java 8, asynchronous programming in Java was challenging because of these reasons:</div>
         <div>
            <ol>
               <li className="mtop5p">
                  <div><h5 className="blog-head"><b>Thread and Future Limitations:</b></h5></div>
                  <div>
                     <ul>
                        <li className="mtop5p">Java 5 introduced <b>Future</b> with the <b>ExecutorService</b> for <i>async tasks</i>.</li>
                        <li className="mtop5p">
                           <div>But <b>Future</b> had limitations:</div>
                           <div>
                              <ul>
                                 <li className="mtop5p">No easy way to <b>manually complete</b> a task.</li>
                                 <li className="mtop5p"><b>Blocking:</b> We had to call <code><b>future.get()</b></code> to retrieve the 
                                 result, which blocked the thread.</li>
                                 <li className="mtop5p"><b>Chaining Asynchronous Tasks</b> was not supported (like completing one task 
                                 after another).</li>
                              </ul>
                           </div>
                        </li>
                     </ul>
                  </div>
               </li>
               <li className="mtop5p">
                  <div><h5 className="blog-head"><b>Callback Hell with Threads:</b></h5></div>
                  <div>
                     <ul>
                        <li className="mtop5p">Handling <b>nested callbacks</b> or <b>dependent asynchronous tasks</b> required 
                        complex boilerplate code.</li>
                     </ul>
                  </div>
               </li>
            </ol>
         </div>
         <div className="mtop15p"><h5 className="blog-head"><b>Example (Before Java 8 using Future):</b></h5></div>
         <div className="mtop5p"><Highlight content={BEFORE8FUTURE_EXAMPLE_JAVA} lang="java" /></div>
         <div>
            <ul>
               <li className="mtop5p"><b>Problem:</b> <code><b>future.get()</b></code> <b>blocks the thread</b> until the result is ready.</li>
               <li className="mtop5p"><b>Difficult to combine multiple async tasks</b> without blocking.</li>
            </ul>
         </div>
      </Card>
   </div>
   <div className="mtop15p"><h2 className="blog-head"><b>Introduction to CompletableFuture</b></h2></div>
   <div className="mtop15p">
      <div>To solve these problems, <b>Java 8 introduced CompletableFuture,</b> which:</div>
      <div>
         <ul>
            <li className="mtop5p">Is a part of <code><b>java.util.concurrent</b></code> package.</li>
            <li className="mtop5p">Supports <b>asynchronous programming without blocking threads</b>.</li>
            <li className="mtop5p">Allows <b>chaining multiple async tasks</b> (thenApply, thenCompose, thenCombine).</li>
            <li className="mtop5p">Supports <b>manual completion</b> using <code><b>complete()</b></code> method.</li>
            <li className="mtop5p">Supports <b>non-blocking callbacks</b> using methods 
            like <code><b>thenApply()</b></code>, <code><b>thenAccept()</b></code>, and <code><b>thenRun()</b></code>.</li>
         </ul>
      </div>
   </div>
   <div className="mtop15p"><h4 className="blog-head"><b>Key Benefits:</b></h4></div>
   <div>
      <ul>
         <li className="mtop5p">No more blocking with <code><b>get()</b></code> unless required.</li>
         <li className="mtop5p">Easy <b>task chaining</b> and <b>combining multiple futures</b>.</li>
         <li className="mtop5p">Clean and <b>readable asynchronous code</b>.</li>
      </ul>
   </div>
 </div>);
};

export default Introduction;