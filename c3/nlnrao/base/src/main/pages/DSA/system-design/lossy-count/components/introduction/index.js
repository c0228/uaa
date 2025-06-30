import React from "react";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p"><i>
      <div>Imagine you're building a system to track <b>frequent search terms</b>, <b>top products</b>, or <b>popular URLs</b> from 
      a <b>high-speed data stream</b> like Twitter feeds or real-time logs.</div>
      <div className="mtop15p">
         <div>In such a scenario:</div>
         <div>
            <ul>
               <li>You can’t store every item due to memory limits.</li>
               <li>You still want to <b>approximate the top frequent items</b> with reasonable accuracy.</li>
            </ul>
         </div>
         <div>This is where the <b>Lossy Count algorithm</b> comes in handy. It lets you estimate 
         the <b>most frequent elements in a stream</b> using <b>limited memory</b>, making it a perfect fit 
         for <b>stream analytics</b>, <b>recommendation engines</b> and <b>real-time dashboards</b>.</div>
      </div>
   </i></div>

   <div className="mtop15p"><h2 className="blog-head"><b>Introduction to Lossy Count Algorithm</b></h2></div>
   <div className="mtop15p"><b>Lossy Count</b> is a <b>streaming frequency approximation algorithm</b> developed by Gurmeet Singh Manku and Rajeev 
   Motwani at Stanford. It belongs to the family of <b>approximate counting algorithms</b> like HyperLogLog and Count-Min Sketch, 
   but with a focus on <b>frequency counts</b>, not just cardinality.</div>
   <div className="mtop15p"><h4 className="blog-head"><b>Key Ideas:</b></h4></div>
   <div>
      <ul>
         <li className="mtop5p">Processes elements in <b>buckets</b> or <b>windows</b>.</li>
         <li className="mtop5p">Maintains a count for each element, along with an <b>error margin</b>.</li>
         <li className="mtop5p">Eliminates items that are unlikely to be frequent (hence “lossy”).</li>
         <li className="mtop5p">Guarantees results within an &epsilon; (epsilon) error bound.</li>
      </ul>
   </div>

   <div className="mtop15p"><h2 className="blog-head"><b>How It Works?</b></h2></div>
   <div>
      <ol>
         <li className="mtop5p">The stream is divided into <b>buckets of width w = 1/&epsilon;</b>.</li>
         <li className="mtop5p">
            <div>Each item is stored with:</div>
            <div>
               <ul>
                  <li>Count (<code><b>c</b></code>)</li>
                  <li>Error (<code><b>&Delta;</b></code>)</li>
               </ul>
            </div>
         </li>
         <li className="mtop5p">After processing each bucket, items with <code><b>c + &Delta; &le; current bucket ID</b></code> are deleted.</li>
         <li className="mtop5p">At any time, you can query the frequent items above a threshold.</li>
      </ol>
   </div>
 </div>);
};

export default Introduction;