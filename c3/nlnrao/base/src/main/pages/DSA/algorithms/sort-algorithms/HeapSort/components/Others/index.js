import React from "react";
import { Icon, Highlight } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const HEAP_STABILITY_CODE = `Before:  (3, 'a'), (3, 'b')
After:   (3, 'b'), (3, 'a')  ← Not stable`;

const Others = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Asymptotic Notations for Heap Sort</b></h2></div>
    <div className="mtop15p">
      <SimpleTable header={["Case","Time Complexity","Notation"]} 
        columns={[
            [(<div><b>Best Case</b></div>),"O(n log n)",(<div>&Omega;(n log n)</div>)],
            [(<div><b>Average Case</b></div>),"O(n log n)",(<div>&Theta;(n log n)</div>)],
            [(<div><b>Worst Case</b></div>),"O(n log n)","O(n log n)"]
          ]} />
    </div>
    <div className="mtop15p">
      <ul>
         <li>
            <div><b>Big-O (O) [ Upper Bound ]:</b></div>
            <div>In worst-case, heap sort performs <b>O(n log n)</b>.</div>
         </li>
         <li className="mtop5p">
            <div><b>Big-Omega (&Omega;) [ Lower Bound ]:</b></div>
            <div>It never performs better than <code><b>&Omega;(n log n)</b></code>.</div>
         </li>
         <li className="mtop5p">
            <div><b>Big-Theta (&Theta;) [ Exact Bound ]:</b></div>
            <div>Heap sort consistently performs at <code><b>&Theta;(n log n)</b></code>.</div>
         </li>
         <li className="mtop5p">
            <div><b>Little-o (o):</b></div>
            <div>Heap Sort is not <code><b>o(n log n)</b></code> — it cannot do significantly better than this.</div>
         </li>
         <li className="mtop5p">
            <div><b>Little-omega (&omega;):</b></div>
            <div>Heap Sort is not <code><b>&omega;(n log n)</b></code> — it won’t do significantly worse.</div>
         </li>
      </ul>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Space Complexity</b></h2></div>
    <div>
      <ul>
         <li className="mtop5p"><b>Auxiliary Space:</b> <code><b>O(1)</b></code> – In-place sorting</li>
         <li className="mtop5p"><b>No recursion stack overhead</b> (unless implemented recursively)</li>
         <li className="mtop5p">Suitable for environments with limited memory.</li>
      </ul>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Stability</b></h2></div>
    <div className="mtop15p">
      <b>Heap Sort is NOT a stable sorting algorithm</b>. Equal elements may not preserve their original order due 
      to swapping during heapify.
    </div>
    <div className="padLeft5p mtop15p"><b>Example:</b></div>
    <Highlight content={HEAP_STABILITY_CODE} lang="python" />

    <div className="mtop15p"><h2 className="blog-head"><b>Adaptability</b></h2></div>
    <div className="mtop15p">
      <div>Heap Sort is <b>not adaptive</b>.</div>
      <div>
         <ul>
            <li>It doesn’t take advantage of partially sorted data.</li>
            <li>Performs the same number of comparisons regardless of input distribution.</li>
         </ul>
      </div>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>When to Use Heap Sort?</b></h2></div>
    <div className="mtop15p">
      <div>Use Heap Sort when:</div>
      <div>
         <ul>
            <li className="mtop5p">You need <b>consistent performance</b> irrespective of data order.</li>
            <li className="mtop5p">You have <b>limited memory</b> and want <b>in-place sorting</b>.</li>
            <li className="mtop5p">You don't care about <b>stability</b>.</li>
            <li className="mtop5p">You're dealing with <b>real-time systems</b> where worst-case performance matters.</li>
         </ul>
      </div>
    </div>
    <div className="mtop15p">
         <div>Avoid it when:</div>
         <div>
            <ul>
               <li className="mtop5p">You need <b>stable sorting</b> (e.g., for databases).</li>
               <li className="mtop5p">Input is <b>partially sorted</b> (then, Insertion Sort or Merge Sort may do better).</li>
            </ul>
         </div>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Summary</b></h2></div>
    <div className="mtop15p">
      <SimpleTable header={["Attribute","Heap Sort"]} 
        columns={[
            ["Time Complexity",(<div><code><b>O(n log n)</b></code> in all cases</div>)],
            ["Space",(<div><code><b>O(1)</b></code>  (in-place)</div>)],
            ["Stability",(<div><Icon type="FontAwesome" name="fa-times-circle" color="red" size={14} /> Not Stable</div>)],
            ["Adaptive",(<div><Icon type="FontAwesome" name="fa-times-circle" color="red" size={14} /> Not Adaptive</div>)],
            ["Best For","Consistent sorting without memory overhead"],
            ["Not Ideal For","Stability-required scenarios"]
          ]} />
    </div>

 </div>);
};

export default Others;