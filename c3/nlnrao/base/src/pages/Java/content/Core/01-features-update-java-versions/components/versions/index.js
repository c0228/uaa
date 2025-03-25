import React from "react";
import { BlogIndexHeader } from "@Components/blog-index-header/index.js";
import OrderList from "@Components/order-list/index.js";
import Java00 from "./components/java-00/index.js";
import Java01 from "./components/java-01/index.js";
import Java02 from "./components/java-02/index.js";
import Java03 from "./components/java-03/index.js";
import Java04 from "./components/java-04/index.js";
import Java05 from "./components/java-05/index.js";
import Java07 from "./components/java-07/index.js";

const Versions = () =>{
 return (<div className="lh28p mtop15p mbot15p fs16p">
   <div align="center" className="mtop15p"><h2 className="blog-head"><b>Versions and History</b></h2></div>
   <div className="mtop15p">As of March 2025, the latest version of Java is Java SE 24, released on March 18, 2025</div>
   <div className="mtop15p">Java has undergone significant evolution since its inception, introducing numerous features 
      across its versions. Here's a detailed overview of the features introduced from Java 1.0 to the latest release:​</div>
   
   <div align="center" className="mtop15p"><b>JAVA PROGRAMMING LANGUAGE (RELEASED BY SUN MICROSYSTEMS)</b></div>

   <Java00 />

   <Java01 />

   <Java02 />

   <Java03 />

   <Java04 />

   <Java05 />

   

   

   <div className="mtop15p">
      <div className="mtop15p"><h4><b>Java SE 6 (2006):</b></h4></div>
      <div className="mtop15p">
         <OrderList data={[(<div>
               <div><b>Performance Improvements</b></div>
               <div>
                  <ul>
                     <li className="mtop5p">Better Memory Management & Faster JVM Execution.</li>
                     <li className="mtop5p">Improved <b>Just-In-Time (JIT) Compilation</b> for optimized performance.</li>
                     <li className="mtop5p">Reduced startup time for applications.</li>
                     <li className="mtop5p"><b>Garbage Collection (GC) Enhancements</b> for better memory handling.</li>
                  </ul>
               </div>
            </div>),
            (<div className="mtop5p">
               <div><b>Scripting Support (JavaScript & Other Languages)</b></div>
               <div>
                  <ul>
                     <li className="mtop5p">Introduced <code><b>javax.script</b></code> API for integrating <b>JavaScript</b> and 
                        <b>other scripting languages</b> inside Java applications.</li>
                     <li className="mtop5p"><b>Nashorn JavaScript Engine</b> was included by default.</li>
                  </ul>
               </div>
            </div>),
            (<div className="mtop5p">
               <div><b>JDBC 4.0 Enhancements</b></div>
               <div>
                  <ul>
                     <li className="mtop5p">Added <b>automatic database driver loading</b>.</li>
                     <li className="mtop5p">Improved <b>exception handling</b> with <code><b>SQLException</b></code> subclasses.</li>
                     <li className="mtop5p">Connection management improvements.</li>
                  </ul>
               </div>
            </div>),
            (<div className="mtop5p">
               <div><b>Web Services Enhancements (JAX-WS)</b></div>
               <div>
                  <ul>
                     <li className="mtop5p">Built-in support for Web Services via JAX-WS 2.0 API.</li>
                     <li className="mtop5p">Simplified development of SOAP-based web services.</li>
                  </ul>
               </div>
            </div>),
            (<div className="mtop5p">
               <div><b>Compiler API</b></div>
               <div>
                  <ul>
                     <li className="mtop5p">Allowed <b>Java programs to compile Java code at runtime</b>.</li>
                  </ul>
               </div>
            </div>),
            (<div className="mtop5p">
               <div><b>Pluggable Annotations Processing</b></div>
               <div>
                  <ul>
                     <li className="mtop5p">Provided <b>annotation processing support</b> at compile time.</li>
                  </ul>
               </div>
            </div>),
            (<div className="mtop5p">
               <div><b>GUI Improvements (Swing & AWT Enhancements)</b></div>
               <div>
                  <ul>
                     <li className="mtop5p">Improved <b>native look-and-feel for Swing applications</b>.</li>
                     <li className="mtop5p">Support for Splash Screens</li>
                  </ul>
               </div>
            </div>),
            (<div className="mtop5p">
               <div><b>Console Class for User Input</b></div>
               <div>
                  <ul>
                     <li className="mtop5p">New <code><b>java.io.Console</b></code> class for reading password input securely.</li>
                  </ul>
               </div>
            </div>),
            (<div className="mtop5p">
               <div><b>Desktop API (java.awt.Desktop)</b></div>
               <div>
                  <ul>
                     <li className="mtop5p">Enabled Java applications to open files, launch browsers, and send emails.</li>
                  </ul>
               </div>
            </div>),
            (<div className="mtop5p">
               <div><b>Monitoring and Management Enhancements</b></div>
               <div>
                  <ul>
                     <li className="mtop5p">Improved JMX (Java Management Extensions).</li>
                     <li className="mtop5p">Enhanced troubleshooting tools (<code><b>jmap</b></code>, <code><b>jconsole</b></code>).</li>
                  </ul>
               </div>
            </div>)]} />
      </div>
   </div>

   <Java07 />

   <div className="mtop15p">
      <div className="mtop15p"><h4><b>Java SE 8 (2014):</b></h4></div>
      <div className="mtop15p">
         <OrderList data={[(<div></div>)]} />
      </div>
   </div>

   <div className="mtop15p">
      <div className="mtop15p"><h4><b>Java SE 9 (2017):</b></h4></div>
      <div className="mtop15p">
         <OrderList data={[(<div></div>)]} />
      </div>
   </div>

   <div className="mtop15p">
      <div className="mtop15p"><h4><b>Java SE 10 (March, 2018):</b></h4></div>
      <div className="mtop15p">
         <OrderList data={[(<div></div>)]} />
      </div>
   </div>

   <div className="mtop15p">
      <div className="mtop15p"><h4><b>Java SE 11 (September, 2018):</b></h4></div>
      <div className="mtop15p">
         <OrderList data={[(<div></div>)]} />
      </div>
   </div>

   <div className="mtop15p">
      <div className="mtop15p"><h4><b>Java SE 12 (March, 2019):</b></h4></div>
      <div className="mtop15p">
         <OrderList data={[(<div></div>)]} />
      </div>
   </div>

   <div className="mtop15p">
      <div className="mtop15p"><h4><b>Java SE 13 (September, 2019):</b></h4></div>
      <div className="mtop15p">
         <OrderList data={[(<div></div>)]} />
      </div>
   </div>

   <div className="mtop15p">
      <div className="mtop15p"><h4><b>Java SE 14 (March, 2020):</b></h4></div>
      <div className="mtop15p">
         <OrderList data={[(<div></div>),
            (<div></div>),
            (<div></div>),
            (<div></div>)]} />
      </div>
   </div>

   <div className="mtop15p">
      <div className="mtop15p"><h4><b>Java SE  ():</b></h4></div>
      <div className="mtop15p">
         <OrderList data={[(<div></div>),
            (<div></div>),
            (<div></div>),
            (<div></div>)]} />
      </div>
   </div>

   <div className="mtop15p">
      <div className="mtop15p"><h4><b>Java SE  ():</b></h4></div>
      <div className="mtop15p">
         <OrderList data={[(<div></div>),
            (<div></div>),
            (<div></div>),
            (<div></div>)]} />
      </div>
   </div>

 </div>);
};

export default Versions;