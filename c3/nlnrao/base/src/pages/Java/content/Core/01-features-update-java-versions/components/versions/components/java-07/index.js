import React from "react";
import { BlogIndexHeader } from "@Components/blog-index-header/index.js";
import OrderList from "@Components/order-list/index.js";

const Java07 = () =>{

 const ProjectCoinDetails = () =>{
    return (<div className="mtop5p">
        <div className="padLeft15p">Java 7 introduced several minor language enhancements under <b>Project Coin</b>, 
            making code more concise and readable.</div>
        <div className="mtop5p">
           <OrderList data={[(<div>
                 <div><b>String in Switch Statement</b></div>
                 <div>
                    <ul>
                       <li className="mtop5p">Switch statements now support <code><b>String</b></code> values 
                       instead of only <code><b>int</b></code> and <code><b>enum</b></code>.</li>
                    </ul>
                 </div>
              </div>),
              (<div className="mtop5p">
                 <div><b>Try-With-Resources (Automatic Resource Management)</b></div>
                 <div>
                    <ul>
                       <li className="mtop5p"><i>Auto-closes resources</i> (files, sockets, DB connections) without 
                       needing <code><b>finally</b></code> block.</li>
                    </ul>
                 </div>
              </div>),
              (<div className="mtop5p">
                 <div><b>Multi-Catch Exception Handling</b></div>
                 <div>
                    <ul>
                       <li className="mtop5p">Catching multiple exceptions in a single <code><b>catch</b></code> block.</li>
                    </ul>
                 </div>
              </div>),
              (<div className="mtop5p">
                 <div><b>Underscores in Numeric Literals</b></div>
                 <div>
                    <ul>
                       <li className="mtop5p">Improved readability for large numbers.</li>
                    </ul>
                 </div>
              </div>),
              (<div className="mtop5p">
                 <div><b>Diamond Operator (&lt;&gt; for Type Inference)</b></div>
                 <div>
                    <ul>
                       <li className="mtop5p">Simplifies generics instantiation.</li>
                    </ul>
                 </div>
              </div>)]} />
        </div>
     </div>);
 };

 return (<div className="mtop15p">
  <div className="mtop15p"><h4><b>Java SE 7 (2011):</b></h4></div>
    <div className="mtop15p padLeft5p">
       <BlogIndexHeader type="simple" index="1" title="Project Coin (Small Language Enhancements)" />
       <ProjectCoinDetails />
    </div>
    <div className="mtop15p padLeft5p">
       <BlogIndexHeader type="simple" index="2" title="Fork/Join Framework (Parallel Processing)" />
       <OrderList data={[(<div>Introduced <code><b>java.util.concurrent.ForkJoinPool</b></code> for efficient parallel processing.</div>),
                (<div>Ideal for <b>recursive</b> and <b>large-scale tasks</b>.</div>)]} />
    </div>
    <div className="mtop15p padLeft5p">
       <BlogIndexHeader type="simple" index="3" title="NIO.2 (New Input/Output API Enhancements)" />
       <OrderList data={[(<div>Improved file system operations, symbolic links, and path management.</div>)]} />
    </div>
    <div className="mtop15p padLeft5p">
       <BlogIndexHeader type="simple" index="4" title="New File I/O (java.nio.file)" />
       <OrderList data={[(<div>Better handling of file metadata and operations.</div>)]} />
    </div>
    <div className="mtop15p padLeft5p">
       <BlogIndexHeader type="simple" index="5" title="Enhanced Garbage Collection (G1 GC)" />
       <OrderList data={[(<div>Introduced <b>G1 GC (Garbage First Garbage Collector)</b>, improving memory management 
        and performance.</div>)]} />
    </div>
    <div className="mtop15p padLeft5p">
       <BlogIndexHeader type="simple" index="6" title="Improved Exception Handling for Reflection API" />
       <OrderList data={[(<div>More precise exception handling when working with reflection.</div>)]} />
    </div>
    <div className="mtop15p padLeft5p">
       <BlogIndexHeader type="simple" index="7" title="Java Networking Enhancements" />
       <OrderList data={[(<div>Better support for secure communication (TLS 1.2, SNI support).</div>)]} />
    </div>
  </div>);
};

export default Java07;