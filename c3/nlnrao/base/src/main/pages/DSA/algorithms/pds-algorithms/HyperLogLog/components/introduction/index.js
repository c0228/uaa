import React from "react";
import { Card } from "e-ui-react";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p"><i>Have you ever wondered how big systems like Google Analytics or Twitter 
   count <b>unique visitors</b>, <b>unique search terms</b>, or <b>unique IPs</b> across billions of data points without consuming 
   gigabytes of memory?</i></div>
   <div className="mtop15p"><i>Traditional methods like using a set or hashmap to count unique elements 
   are <b>memory-intensive</b>. That’s where <b>HyperLogLog</b> comes into play — a powerful algorithm that allows you 
   to <b>estimate the cardinality (number of unique elements)</b> with <b>minimal memory usage</b> and surprisingly high 
   accuracy.</i></div>

   <div className="mtop15p"><h2 className="blog-head"><b>Introduction to HyperLogLog</b></h2></div>
   <div className="mtop15p">
      <div><b>HyperLogLog (HLL)</b> is a <b>probabilistic data structure</b> used 
      to <b>estimate the number of distinct elements</b> in a data stream. It is especially useful in systems where:</div>
      <div>
         <ul>
            <li>Space is limited</li>
            <li>Absolute precision is not required</li>
            <li>Performance and scalability are critical</li>
         </ul>
      </div>
      <div>HyperLogLog is an <b>enhanced version</b> of an earlier algorithm called <b>LogLog</b>, developed by Philippe 
      Flajolet. It achieves high accuracy using <b>logarithmic space</b>, often requiring <b>just a few kilobytes</b> to 
      count <b>billions of unique items</b>.</div>
   </div>

   <div className="mtop15p"><h2 className="blog-head"><b>How Does HyperLogLog Work?</b></h2></div>
   <div>
      <ol>
         <li className="mtop5p">Hash each element into a uniformly distributed binary string.</li>
         <li className="mtop5p">
            <div>Split the string into two parts:</div>
            <ul>
               <li>The first few bits decide the bucket index.</li>
               <li>The remaining bits are used to find the position of the <b>leftmost 1 bit</b> (this helps estimate the "rarity" 
               of that hash).</li>
            </ul>
         </li>
         <li className="mtop5p">Store the <b>maximum observed rank</b> per bucket.</li>
         <li className="mtop5p">Estimate cardinality using a <b>harmonic mean</b> of all ranks with some bias corrections.</li>
      </ol>
   </div>
   <div>
      <Card padding={15} backgroundColor="#eee">
         The more trailing zeros in a hash, the rarer the hash. Rarer hashes = more unique items.
      </Card>
   </div>
 </div>);
};

export default Introduction;