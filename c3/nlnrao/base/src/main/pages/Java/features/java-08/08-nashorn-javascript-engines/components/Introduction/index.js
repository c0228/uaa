import React from "react";
import { Card, Highlight } from "e-ui-react";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p">Java 8 not only introduced <b>Lambdas, Streams and Collectors,</b> but it also brought a powerful feature 
   for <b>scripting with JavaScript: the Nashorn JavaScript Engine</b>. This feature made it easier <b>to run JavaScript code inside 
   Java applications</b> without relying on external scripting engines.</div>
   <div className="mtop15p">
      <Card padding={15} backgroundColor="#eee">
         <div align="center"><h4 className="blog-head"><b>The Problems Before Nashorn JavaScript Engine</b></h4></div>
         <div className="mtop15p">Before Java 8, Java developers could execute JavaScript using the <b>Rhino engine</b>, which 
         came with Java 6 as part of the <b>JSR 223 (Scripting for the Java Platform)</b> specification.</div>
         <div className="mtop15p">However, Rhino had <b>several limitations</b>:</div>
         <div>
            <ul>
               <li className="mtop5p">
                  <div><h5 className="blog-head"><b>Slow Performance</b></h5></div>
                  <div className="mtop5p">Rhino was written in Java and interpreted scripts, making it <b>much slower</b> than 
                  modern JavaScript engines.</div>
               </li>
               <li className="mtop5p">
                  <div><h5 className="blog-head"><b>Incomplete ECMAScript Support</b></h5></div>
                  <div className="mtop5p">Rhino did <b>not fully support ECMAScript 5.1</b>, which limited the use of modern 
                  JS syntax and features.</div>
               </li>
               <li className="mtop5p">
                  <div><h5 className="blog-head"><b>Limited Integration with Java</b></h5></div>
                  <div className="mtop5p">Interacting with Java objects from JavaScript was <b>less efficient and verbose</b>.</div>
               </li>
            </ul>
         </div>
         <div className="mtop5p">With the rising popularity of <b>JavaScript and Node.js</b>, Java needed 
         a <b>faster and modern scripting engine</b>, which led to the <b>Nashorn engine</b> in Java 8.</div>
      </Card>
   </div>
   <div className="mtop15p"><h2 className="blog-head"><b>Introduction to Nashorn JavaScript Engine</b></h2></div>
   <div className="mtop15p"><b>Nashorn</b> is a <b>lightweight, high-performance JavaScript engine</b> introduced 
   in <b>Java 8</b>. It replaced Rhino as the default JavaScript engine for the JVM.</div>
   <div className="mtop15p"><h5 className="blog-head"><b>Key Highlights:</b></h5></div>
   <div>
      <ol>
         <li className="mtop5p">
            <div><b>Faster Execution:</b></div>
            <div>Nashorn uses the <b>invoke dynamic feature</b> from Java 7 to boost performance.</div>
         </li>
         <li className="mtop5p">
            <div><b>Better ECMAScript Support:</b></div>
            <div>It supports <b>ECMAScript 5.1</b>, allowing modern JavaScript syntax.</div>
         </li>
         <li className="mtop5p">
            <div><b>Tight Java Integration:</b></div>
            <div>Java and JavaScript can call each other’s methods easily.</div>
         </li>
         <li className="mtop5p">
            <div><b>JJS Command-Line Tool:</b></div>
            <div>Java 8 included a command-line tool called <code><b>jjs</b></code> to run JavaScript files directly using Nashorn.</div>
         </li>
      </ol>
   </div>
   <div className="mtop15p"><h5 className="blog-head"><b>Package Used:</b></h5></div>
   <div className="mtop5p"><Highlight content={`import javax.script.*;`} lang="java" /></div>
 </div>);
};

export default Introduction;