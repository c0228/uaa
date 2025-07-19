import React from "react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const Conclusion = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
   <div className="mtop15p"><h2 className="blog-head"><b>Advantages of Fork/Join Framework</b></h2></div>
   <div className="mtop15p">
      <SimpleTable header={["Feature", "Description"]} 
        columns={[
            ["Work Stealing", "Threads that finish early help others"],
            ["Fine-Grained Parallelism", "Suitable for recursive divide-and-conquer tasks"],
            ["Easy to Use", (<div>Just extend <code><b>RecursiveTask</b></code> or <code><b>RecursiveAction</b></code></div>)],
            ["Built-in Thread pool", "No need to manage threads manually"]
          ]} />
   </div>
   <div className="mtop15p"><h2 className="blog-head"><b>Limitations</b></h2></div>
   <div>
      <ul>
         <li className="mtop5p">Not ideal for I/O-bound tasks (use <code><b>ExecutorService</b></code> instead).</li>
         <li className="mtop5p">Can lead to <b>overhead</b> if tasks are too small (always choose a reasonable <b>threshold</b>).</li>
         <li className="mtop5p">May require <b>tuning the pool size</b> based on system resources.</li>
      </ul>
   </div>
   <div className="mtop15p"><h2 className="blog-head"><b>When to Use Fork/Join Framework</b></h2></div>
   <div className="mtop15p">
      <div>Use it when:</div>
      <div>
         <ul>
            <li className="mtop5p">The problem can be broken into <b>smaller sub-problems</b>.</li>
            <li className="mtop5p">Tasks are <b>CPU-bound</b>, not I/O-bound.</li>
            <li className="mtop5p">Recursive <b>divide-and-conquer</b> is appropriate (e.g., quicksort, 
               mergesort, Fibonacci, matrix operations, image processing).</li>
         </ul>
      </div>
   </div>

   <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
   <div className="mtop15p mbot15p">The <b>Fork/Join Framework</b> is a powerful tool for <b>parallelizing computational tasks</b> in 
   Java. It eliminates the need for manual thread management in recursive tasks and is highly optimized 
   for <b>multi-core systems</b>. With its <b>work-stealing algorithm</b> and built-in pool, it enables efficient task 
   execution for <b>divide-and-conquer problems</b>.</div>
 </div>);
};

export default Conclusion;