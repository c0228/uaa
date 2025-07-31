import React from "react";
import { Card, Highlight } from "e-ui-react"

const STATIC_EXAMPLE_JAVA = `interface InterfaceName {
    static void methodName() {
        // method body
    }
}`;

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p">Java 8 introduced several new features that made coding more flexible, concise, and developer-friendly. 
      One of these powerful features is the <b>Static Methods in Interfaces</b>, which changed how we write and organize utility 
      functions in Java.</div>
   <div className="mtop15p">
      <Card padding={15} backgroundColor="#eee">
         <div>Before Java 8, interfaces in Java could only contain <b>abstract methods</b> (methods without a body) and <b>constants</b>. If 
         we wanted to provide a <b>common utility method</b> for all implementing classes, we had only a few options:</div>
         <div>
            <ol>
               <li className="mtop15p">
                  <div><h5 className="blog-head"><b>Use a separate Utility Class:</b></h5></div>
                  <div>
                     <ul>
                        <li className="mtop5p">We often created helper classes 
                           like <code><b>Collections</b></code>, <code><b>Arrays</b></code>, or <code><b>Math</b></code> to hold 
                           static methods.</li>
                        <li className="mtop5p"><i><u>Example</u></i>: <code><b>Collections.sort(list);</b></code></li>
                     </ul>
                  </div>
               </li>
               <li className="mtop15p">
                  <div><h5 className="blog-head"><b>Default Implementation in Abstract Classes:</b></h5></div>
                  <div>
                     <ul>
                        <li className="mtop5p">Another workaround was to create an <b>abstract class</b> that had static or common methods.</li>
                        <li className="mtop5p">But this approach <b>forced inheritance</b> even when not needed, breaking flexibility.</li>
                     </ul>
                  </div>
               </li>
            </ol>
         </div>
         <div className="mtop5p"><h5 className="blog-head"><b>Problem:</b></h5></div>
         <div>
            <ul>
               <li className="mtop5p">Interfaces couldn’t contain <b>method implementations</b>.</li>
               <li className="mtop5p">Utility functions had to be placed <b>outside</b> the interface, leading 
               to <b>code scattering</b> and less cohesion.</li>
            </ul>
         </div>
      </Card>
   </div>
   <div className="mtop15p"><h2 className="blog-head"><b>Introduction to Static Methods in Interfaces</b></h2></div>
   <div className="mtop15p">Java 8 solved this limitation by allowing <b>static methods in interfaces</b>.</div>
   <div className="mtop15p"><h4 className="blog-head"><b>Key Points:</b></h4></div>
   <div>
      <ul>
         <li className="mtop5p">Static methods <b>belong to the interface itself,</b> not to the implementing class.</li>
         <li className="mtop5p">They can <b>only be called using the interface name,</b> not through the object.</li>
         <li className="mtop5p">They help in <b>grouping related utility methods</b> directly inside the interface, 
         improving <b>encapsulation and cohesion</b>.</li>
      </ul>
   </div>
   <div className="mtop15p"><h5 className="blog-head"><b>Syntax:</b></h5></div>
   <div className="mtop5p"><Highlight content={STATIC_EXAMPLE_JAVA} lang="java" /></div>
 </div>);
};

export default Introduction;