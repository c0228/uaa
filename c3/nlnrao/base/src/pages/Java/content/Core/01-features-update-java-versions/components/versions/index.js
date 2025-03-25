import React from "react";
import { BlogIndexHeader } from "@Components/blog-index-header/index.js";
import OrderList from "@Components/order-list/index.js";
import Java00 from "./components/java-00/index.js";
import Java01 from "./components/java-01/index.js";
import Java02 from "./components/java-02/index.js";
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

   

   <div className="mtop15p">
      <div className="mtop15p"><h4><b>Java SE 1.3 (2000):</b></h4></div>
      <div className="mtop15p">
         <OrderList data={[(<div>
            <div><b>HotSpot JVM (Performance Boost)</b></div>
            <div>
               <ul>
                  <li><b>Default JVM replaced with HotSpot JVM</b> for better performance and efficiency.</li>
                  <li>Provided <b>Faster Just-In-Time (JIT) compilation for quicker execution</b>, <b>Optimized memory management and garbage collection</b> and 
                     <b>Better thread synchronization and execution speed</b>.
                  </li>
               </ul>
            </div>
         </div>),
         (<div className="mtop15p">
            <div><b>Java Naming and Directory Interface (JNDI) – Now Part of Core Java</b></div>
            <div>
               <ul>
                  <li>JNDI, previously an extension, was <b>integrated into core Java</b>.</li>
                  <li>Used for accessing naming and directory services such as: <b>LDAP (Lightweight Directory Access Protocol)</b>, 
                     <b>DNS (Domain Name System)</b> and <b>RMI Registry</b></li>
               </ul>
            </div>
         </div>),
         (<div className="mtop15p">
            <div><b>Java Sound API</b></div>
            <div>
               <ul>
                  <li className="mtop5p">Introduced <b>better support for audio playback</b>, <b>MIDI sequencing</b>, and <b>sound synthesis</b>.</li>
                  <li className="mtop5p">Features includes: <b>Playback of audio files</b> (<code><b>.wav</b></code>, <code><b>.aiff</b></code>, <code><b>.au</b></code>), 
                     Support for <b>MIDI and sampled audio</b> and <b>Mixing and control over sound data</b>.</li>
               </ul>
            </div>
         </div>),
         (<div className="mtop15p">
            <div><b>RMI (Remote Method Invocation) Enhancements</b></div>
            <div>
               <ul>
                  <li className="mtop5p"><b>RMI over IIOP (Internet Inter-ORB Protocol)</b> introduced.</li>
                  <li className="mtop5p">Improved <b>communication between Java</b> and <b>CORBA-based applications</b>.</li>
               </ul>
            </div>
         </div>),
         (<div className="mtop15p">
            <div><b>Performance and Memory Optimization</b></div>
            <div>
               <ul>
                  <li className="mtop5p"><b>Reduced startup time</b> for applications.</li>
                  <li className="mtop5p"><b>Faster class loading</b> using <b>Lazy Class Loading</b> (loads classes only when required).</li>
                  <li className="mtop5p">Improved <b>garbage collection</b> efficiency.</li>
               </ul>
            </div>
         </div>),
         (<div className="mtop15p">
            <div><b>Networking Enhancements</b></div>
            <div>
               <ul>
                  <li><b>Java Platform Debugger Architecture (JPDA)</b> introduced for better debugging tools.</li>
                  <li><b>Socket and I/O improvements</b> for better networking performance.</li>
                  <li>Support for <b>non-blocking I/O operations</b> (preparing for NIO in Java 1.4).</li>
               </ul>
            </div>
         </div>)]} />
      </div>
   </div>



   <div className="mtop15p">
      <div className="mtop15p"><h4><b>Java SE 1.4 (2002):</b></h4></div>
      <div className="mtop15p">
         <OrderList data={[(<div>
            <div><b>New Input/Output (NIO) – High-Performance I/O</b></div>
            <div>
               <ul>
                  <li className="mtop5p">Introduced <code><b>java.nio</b></code> package, improving <b>file and network I/O operations</b>.</li>
                  <li className="mtop5p">Key Features: <b>Buffer-based I/O</b> (instead of traditional stream-based), <b>Memory-mapped files</b> for faster file access, 
                     <b>Non-blocking I/O (Selectable Channels)</b> for scalable network programming and <b>Improved File and Socket operations</b>.</li>
               </ul>
            </div>
         </div>),(<div className="mtop15p">
            <div><b>Regular Expressions (java.util.regex)</b></div>
            <div>
               <ul>
                  <li className="mtop5p">Added <b>built-in support for Regular Expressions (Regex)</b> in Java.</li>
                  <li className="mtop5p">New Classes: <code><b>Pattern</b></code> (Defines a Regex Pattern), <code><b>Matcher</b></code> (Performs Match Operations).</li>
               </ul>
            </div>
         </div>),(<div className="mtop15p">
            <div><b>Exception Chaining</b></div>
            <div>
               <ul>
                  <li className="mtop5p">Allowed <b>one exception to be linked to another</b>, helping <b>debug nested exceptions</b>.</li>
                  <li className="mtop5p">Introduced <b>new constructors</b> in <code><b>Throwable</b></code>, <code><b>Exception</b></code>, and 
                     <code><b>RuntimeException</b></code> classes.</li>
               </ul>
            </div>
         </div>),
         (<div className="mtop15p">
            <div><b>Logging API (java.util.logging)</b></div>
            <div>
               <ul>
                  <li className="mtop5p">Introduced a <b>built-in logging framework</b> (<code><b>java.util.logging</b></code>).</li>
                  <li className="mtop5p">Eliminated dependency on third-party logging tools.</li>
                  <li className="mtop5p">Provided <b>log levels</b> like <code><b>INFO</b></code>, <code><b>WARNING</b></code>, <code><b>SEVERE</b></code>, etc.</li>
               </ul>
            </div>
         </div>),
         (<div className="mtop15p">
            <div><b>IPv6 Support</b></div>
            <div>
               <ul>
                  <li className="mtop5p"><b>Full support for IPv6 networking.</b></li>
                  <li className="mtop5p">Enhanced <code><b>java.net</b></code> package for IPv6 sockets, DNS lookups, and addresses.</li>
               </ul>
            </div>
         </div>),
         (<div className="mtop15p">
            <div><b>Image I/O API (javax.imageio)</b></div>
            <div>
               <ul>
                  <li className="mtop5p"><b>Faster and better image processing</b>.</li>
                  <li className="mtop5p">Supported <b>reading/writing JPEG</b>, <b>PNG</b>, <b>GIF</b> and <b>BMP formats</b>.</li>
               </ul>
            </div>
         </div>),
         (<div className="mtop15p">
            <div><b>Assertions (assert keyword)</b></div>
            <div>
               <ul>
                  <li className="mtop5p">Introduced <code><b>assert</b></code> keyword for debugging.</li>
               </ul>
            </div>
         </div>),
         (<div className="mtop15p">
            <div><b>Preferences API (java.util.prefs)</b></div>
            <div>
               <ul>
                  <li className="mtop5p">New <b>Preferences API</b> for storing user and system configuration settings.</li>
               </ul>
            </div>
         </div>),
         (<div className="mtop15p">
            <div><b>Performance Improvements</b></div>
            <div>
               <ul>
                  <li className="mtop5p"><b>Garbage Collection (GC) Enhancements:</b> New GC algorithms for better memory management.</li>
                  <li className="mtop5p"><b>HotSpot JVM Optimization:</b> Improved <b>runtime performance</b> and <b>startup time</b>.</li>
               </ul>
            </div>
         </div>)]} />
      </div>
   </div>

   <div className="mtop15p">
      <div className="mtop15p"><h4><b>Java SE 1.5 (2004):</b></h4></div>
      <div className="mtop15p">
         <OrderList data={[(<div>
            <div><b>Generics (Type Safety for Collections)</b></div>
            <div>
               <ul>
                  <li className="mtop5p">Allowed defining <b>data type constraints</b> at compile-time.</li>
                  <li className="mtop5p">Eliminated the need for <b>explicit casting</b>.</li>
               </ul>
            </div>
         </div>),
         (<div className="mtop15p">
            <div><b>Enhanced for-loop (for-each loop)</b></div>
            <div>
               <ul>
                  <li><b>Simplified iteration</b> over arrays and collections.</li>
               </ul>
            </div>
         </div>),
         (<div className="mtop15p">
            <div><b>Autoboxing and Unboxing</b></div>
            <div>
               <ul>
                  <li className="mtop5p">Automatic conversion between <b>primitive types</b> and <b>wrapper classes</b>.</li>
                  <li className="mtop5p">Eliminated manual conversion.</li>
               </ul>
            </div>
         </div>),
         (<div className="mtop15p">
            <div><b>Varargs (Variable Arguments)</b></div>
            <div>
               <ul>
                  <li className="mtop5p">Allowed <b>passing multiple arguments</b> of the same type without creating an array.</li>
               </ul>
            </div>
         </div>),
         (<div className="mtop15p">
            <div><b>Enumerations (enum)</b></div>
            <div>
               <ul>
                  <li className="mtop5p">Introduced <code><b>enum</b></code> type for <b>defining constants</b>.</li>
                  <li className="mtop5p">More powerful than traditional <code><b>final static</b></code> constants.</li>
               </ul>
            </div>
         </div>),
         (<div className="mtop15p">
            <div><b>Concurrency Utilities (java.util.concurrent)</b></div>
            <div>
               <ul>
                  <li className="mtop5p">Added <code><b>Executor Framework</b></code>, <code><b>ThreadPool</b></code>, <code><b>Locks</b></code>, 
                     <code><b>Atomic Variables</b></code>.</li>
                  <li className="mtop5p">Improved <b>multithreading performance and reliability</b>.</li>
               </ul>
            </div>
         </div>),
         (<div className="mtop15p">
            <div><b>Static Imports</b></div>
            <div>
               <ul>
                  <li>Allowed <b>direct access to static members</b> without qualifying the class name.</li>
               </ul>
            </div>
         </div>),
         (<div className="mtop15p">
            <div><b>Annotations (Metadata for Classes and Methods)</b></div>
            <div>
               <ul>
                  <li className="mtop5p">Introduced <b>built-in annotations</b> like: <code><b>@Override</b></code> (Ensures method overrides a superclass 
                  method), <code><b>@Deprecated</b></code> (Marks a method as deprecated), <code><b>@SuppressWarnings</b></code> (Suppresses compiler 
                  warnings)</li>
               </ul>
            </div>
         </div>),
         (<div className="mtop15p">
            <div><b>Improved Garbage Collection (GC)</b></div>
            <div>
               <ul>
                  <li><b>New GC algorithms</b> for <b>improved performance and memory management</b>.</li>
               </ul>
            </div>
         </div>)]} />
      </div>
   </div>

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