import React from "react";
import OrderList from "@Components/order-list/index.js";

const Versions = () =>{
 return (<div className="lh28p mtop15p mbot15p fs16p">
   <div align="center" className="mtop15p"><h2 className="blog-head"><b>Versions and History</b></h2></div>
   <div className="mtop15p">As of March 2025, the latest version of Java is Java SE 24, released on March 18, 2025</div>
   <div className="mtop15p">Java has undergone significant evolution since its inception, introducing numerous features 
      across its versions. Here's a detailed overview of the features introduced from Java 1.0 to the latest release:​</div>
   
   <div className="mtop15p">
      <div className="mtop15p"><h4><b>Java SE 1.0 (January 23, 1996):</b></h4></div>
      <div className="mtop15p">
         <OrderList data={[(<div><b>Initial Release:</b> Introduced core language features, basic libraries, and the 
         Abstract Window Toolkit (AWT) for GUI development</div>)]} />
      </div>
   </div>

   <div className="mtop15p">
      <div className="mtop15p"><h4><b>Java SE 1.1 (1997):</b></h4></div>
      <div className="mtop15p">
         <OrderList data={[(<div><b>Event Delegation Model:</b> Improved event handling in AWT.</div>),
            (<div><b>Inner Classes:</b> Allowed classes to be defined within other classes.</div>),
            (<div><b>JavaBeans:</b> Component architecture for reusable software components.</div>),
            (<div><b>JDBC:</b> Java Database Connectivity for database interactions.</div>)]} />
      </div>
   </div>

   <div className="mtop15p">
      <div className="mtop15p"><h4><b>Java SE 1.2 (1998):</b></h4></div>
      <div className="mtop15p">
         <OrderList data={[(<div><b>Swing:</b> Introduced a new set of GUI components.</div>),
            (<div><b>Collections Framework:</b> Unified architecture for representing and manipulating collections.</div>),
            (<div><b>JIT Compiler:</b> Enhanced performance by compiling bytecode to native code at runtime.</div>)]} />
      </div>
   </div>

   <div className="mtop15p">
      <div className="mtop15p"><h4><b>Java SE 1.3 (2000):</b></h4></div>
      <div className="mtop15p">
         <OrderList data={[(<div><b>HotSpot JVM:</b> Introduced for improved performance.</div>),
            (<div><b>JavaSound API:</b> For audio capabilities.</div>),
            (<div><b>RMI over IIOP:</b> Enhanced Remote Method Invocation.</div>)]} />
      </div>
   </div>

   <div className="mtop15p">
      <div className="mtop15p"><h4><b>Java SE 1.4 (2002):</b></h4></div>
      <div className="mtop15p">
         <OrderList data={[(<div><b>Assertions:</b> Introduced for debugging purposes.</div>),
            (<div><b>Regular Expressions:</b> Integrated regex support.</div>),
            (<div><b>Exception Chaining:</b> Allowed exceptions to reference causes.</div>),
            (<div><b>NIO:</b> New Input/Output for high-performance I/O operations.</div>)]} />
      </div>
   </div>

   <div className="mtop15p">
      <div className="mtop15p"><h4><b>Java SE 1.5 (2004):</b></h4></div>
      <div className="mtop15p">
         <OrderList data={[(<div><b>Generics:</b> Enabled stronger type checks at compile time.</div>),
            (<div><b>Enhanced for Loop:</b> Simplified iteration over collections.</div>),
            (<div><b>Autoboxing/Unboxing:</b> Automatic conversion between primitives and their wrapper classes.​</div>),
            (<div><b>Enums:</b> Defined a fixed set of constants.</div>),
            (<div><b>Varargs:</b> Allowed methods to accept variable-length arguments.</div>)]} />
      </div>
   </div>

   <div className="mtop15p">
      <div className="mtop15p"><h4><b>Java SE 6 (2006):</b></h4></div>
      <div className="mtop15p">
         <OrderList data={[(<div><b>Scripting Language Support:</b> Integration with scripting languages like JavaScript.</div>),
            (<div><b>Compiler API:</b> Access to the compiler from programs.</div>),
            (<div><b>Pluggable Annotations:</b> Enhanced annotation processing.</div>)]} />
      </div>
   </div>

   <div className="mtop15p">
      <div className="mtop15p"><h4><b>Java SE 7 (2011):</b></h4></div>
      <div className="mtop15p">
         <OrderList data={[(<div><b>Diamond Operator:</b> Simplified instantiation of generic classes.</div>),
            (<div><b>Try-with-Resources:</b> Automatic resource management.</div>),
            (<div><b>Strings in Switch:</b> Allowed switch statements to operate on strings.</div>),
            (<div><b>Fork/Join Framework:</b> Facilitated parallel processing.</div>)]} />
      </div>
   </div>

   <div className="mtop15p">
      <div className="mtop15p"><h4><b>Java SE 8 (2014):</b></h4></div>
      <div className="mtop15p">
         <OrderList data={[(<div><b>Lambda Expressions:</b> Introduced functional programming constructs.</div>),
            (<div><b>Stream API:</b> For processing sequences of elements.​</div>),
            (<div><b>Optional Class:</b> To handle null values gracefully.</div>),
            (<div><b>Date and Time API:</b> New date and time library.</div>)]} />
      </div>
   </div>

   <div className="mtop15p">
      <div className="mtop15p"><h4><b>Java SE 9 (2017):</b></h4></div>
      <div className="mtop15p">
         <OrderList data={[(<div><b>Module System (Project Jigsaw):</b> Introduced modularity to the JDK.</div>),
            (<div><b>JShell:</b> Interactive tool for evaluating code snippets.​</div>),
            (<div><b>Reactive Streams:</b> Introduced for asynchronous programming.</div>)]} />
      </div>
   </div>

   <div className="mtop15p">
      <div className="mtop15p"><h4><b>Java SE 10 (March, 2018):</b></h4></div>
      <div className="mtop15p">
         <OrderList data={[(<div><b>Local-Variable Type Inference:</b> Introduced the <code><b>var</b></code> keyword.</div>)]} />
      </div>
   </div>

   <div className="mtop15p">
      <div className="mtop15p"><h4><b>Java SE 11 (September, 2018):</b></h4></div>
      <div className="mtop15p">
         <OrderList data={[(<div><b>HTTP Client API:</b> Standardized HTTP client.​</div>),
            (<div><b>Local-Variable Syntax for Lambda Parameters:</b> Allowed <code><b>var</b></code> in lambda expressions.</div>),
            (<div><b>Removed JavaFX from JDK:</b> JavaFX became a separate module.</div>)]} />
      </div>
   </div>

   <div className="mtop15p">
      <div className="mtop15p"><h4><b>Java SE 12 (March, 2019):</b></h4></div>
      <div className="mtop15p">
         <OrderList data={[(<div><b>Switch Expressions (Preview):</b> Enhanced switch statements.</div>)]} />
      </div>
   </div>

   <div className="mtop15p">
      <div className="mtop15p"><h4><b>Java SE 13 (September, 2019):</b></h4></div>
      <div className="mtop15p">
         <OrderList data={[(<div><b>Text Blocks (Preview):</b> Simplified multi-line string literals.</div>)]} />
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