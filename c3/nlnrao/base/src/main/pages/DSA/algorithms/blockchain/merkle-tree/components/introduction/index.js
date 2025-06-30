import React from "react";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p"><i>Imagine you’re syncing files between distributed systems or verifying data integrity across 
   blockchain nodes. How do you ensure that <b>large data structures remain unchanged</b>, without comparing every byte?</i></div>
   <div className="mtop15p">Enter the <b>Merkle Tree</b> — a powerful cryptographic tree structure that helps 
   you <b>verify data efficiently</b>, even in distributed systems like <b>blockchains</b>, <b>Git</b>, and <b>P2P networks</b>.</div>
   
   <div className="mtop15p"><h2 className="blog-head"><b>Introduction to Merkle Tree</b></h2></div>
   <div className="mtop15p">
      <div>A <b>Merkle Tree</b>, named after Ralph Merkle, is a <b>binary tree</b> in which:</div>
      <div>
         <ul>
            <li>Every <b>leaf node</b> contains a hash of a data block.</li>
            <li>Every <b>non-leaf node</b> contains the <b>hash of its child nodes</b>.</li>
         </ul>
      </div>
      <div>The <b>root hash</b>, also called the <b>Merkle Root</b>, acts like a fingerprint of the entire dataset.</div>
   </div>

   <div className="mtop15p"><h2 className="blog-head"><b>Why Use Merkle Trees?</b></h2></div>
   <div>
      <ul>
         <li className="mtop5p">Efficient data verification</li>
         <li className="mtop5p">Fast data integrity checks</li>
         <li className="mtop5p">Ideal for distributed systems</li>
         <li className="mtop5p">Used in <b>blockchains</b> (Bitcoin, Ethereum), <b>version 
         control</b> (Git), <b>file systems</b>, and <b>audit logs</b></li>
      </ul>
   </div>

   <div className="mtop15p"><h2 className="blog-head"><b>How Merkle Tree Works?</b></h2></div>
   <div className="mtop15p">Let’s say we have 4 data 
   blocks: <code><b>A</b></code>, <code><b>B</b></code>, <code><b>C</b></code>, <code><b>D</b></code>.</div>
   <div>
      <ol>
         <li>Compute individual hashes: <code><b>hashA</b></code>, <code><b>hashB</b></code>, <code><b>hashC</b></code>, <code><b>hashD</b></code></li>
         <li>
            <div>Pair and hash them:</div>
            <ul>
               <li><code><b>hashAB = hash(hashA + hashB)</b></code></li>
               <li><code><b>hashCD = hash(hashC + hashD)</b></code></li>
            </ul>
         </li>
         <li>
            <div>Compute the root:</div>
            <ul>
               <li><code><b>root = hash(hashAB + hashCD)</b></code></li>
            </ul>
         </li>
      </ol>
   </div>
   <div className="mtop5p">Any change in a data block causes a <b>cascade of changes</b> up to the Merkle Root — making it easy 
   to <b>detect tampering</b>.</div>

 </div>);
};

export default Introduction;