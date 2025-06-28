import React from "react";
import { Icon } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const Introduction = () =>{
 const DisplayIcon = ({ status }) =>{
   return (<Icon type="FontAwesome" name={status?"fa-check-circle":"fa-times-circle"} 
      size={14} color={status?"green":"red"} style={{ marginRight:'5px' }} />);
 };
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p"><i>
      <div>In the world of <b>distributed systems</b>, physical clocks cannot be trusted to stay in perfect sync across 
      machines. Network latency, hardware differences, and drift in local clocks mean there's no single "real" time across 
      the system. Yet, we often need to know <b>which event happened before which</b> — particularly in databases, messaging systems, 
      or distributed logs.</div>
      <div>To solve this, we use <b>logical clocks</b> — abstractions that help us <b>order events</b> without relying on 
      physical time.</div>
   </i></div>
   <div className="mtop15p"><h2 className="blog-head"><b>Introduction: Lamport Timestamps and Vector Clocks</b></h2></div>
   <div className="mtop15p">There are two fundamental approaches to logical time:</div>
   <div className="mtop15p">
      <ol>
         <li>
            <div><h4><b>Lamport Timestamps</b></h4></div>
            <div>
               <ul>
                  <li className="mtop5p">Introduced by Leslie Lamport in 1978.</li>
                  <li className="mtop5p">A simple method to assign a numeric timestamp to each event.</li>
                  <li className="mtop5p">Maintains a <b>monotonic counter</b> at each process.</li>
                  <li className="mtop5p">Guarantees <b>causal ordering</b>: if <code><b>A -&gt; B</b></code>, then <code><b>timestamp(A) &lt; timestamp(B)</b></code>.</li>
                  <li className="mtop5p">However, it <b>does not detect concurrency</b> between events.</li>
               </ul>
            </div>
         </li>
         <li className="mtop15p">
            <div><h4><b>Vector Clocks</b></h4></div>
            <div>
               <ul>
                  <li className="mtop5p">An improvement over Lamport Timestamps.</li>
                  <li className="mtop5p">Each process maintains a <b>vector</b> of counters — one for each process.</li>
                  <li className="mtop5p">
                     <div>Detects <b>causality and concurrency</b>:</div>
                     <div>
                        <ul>
                           <li className="mtop5p">A happened before <code><b>B &#8658; vector(A) &lt; vector(B)</b></code></li>
                           <li className="mtop5p">A concurrent 
                           with <code><b>B &#8658; neither vector(A) &lt; vector(B) nor vector(B) &lt; vector(A)</b></code></li>
                        </ul>
                     </div>
                  </li>
               </ul>
            </div>
         </li>
      </ol>
   </div>
   <div className="mtop15p">
      <SimpleTable header={["Feature","Lamport Timestamp","Vector Clock"]} 
        columns={[
            ["Tracks causality",(<div><DisplayIcon status="Y" /> Yes</div>),(<div><DisplayIcon status="Y" /> Yes</div>)],
            ["Detects concurrency",(<div><DisplayIcon />No</div>),(<div><DisplayIcon status="Y" /> Yes</div>)],
            ["Space complexity","O(1)","O(N)"],
          ]} />
   </div>
 </div>);
};

export default Introduction;