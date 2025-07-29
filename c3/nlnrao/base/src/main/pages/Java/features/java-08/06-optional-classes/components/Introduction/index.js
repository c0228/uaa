import React from "react";
import { Card, Highlight } from "e-ui-react";

const MULTIPLE_NULL_CHECKS = `if(person != null) {
    if(person.getName() != null) {
        System.out.println(person.getName());
    }
}`;

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div>
      <Card padding={15} backgroundColor="#eee">
         <div align="center"><h4 className="blog-head"><b>The Problem Before Optional</b></h4></div>
         <div className="mtop15p">Before Java 8, developers frequently faced the <b>NullPointerException (NPE)</b> issue.
         In Java, if a method returns <code><b>null</b></code> and the calling code directly uses that value without checking, 
         the program throws an NPE.</div>
         <div className="mtop15p"><h4 className="blog-head"><b>Common issues before Optional:</b></h4></div>
         <div>
            <ol>
               <li className="mtop5p">
                  <div><h5 className="blog-head"><b>NullPointerException:</b></h5></div>
                  <div className="mtop5p">
                     <Highlight content={`String name = person.getName(); // If person is null → NPE`} lang="java" />
                  </div>
               </li>
               <li className="mtop5p">
                  <div><h5 className="blog-head"><b>Multiple Null Checks:</b></h5></div>
                  <div className="mtop5p">Developers had to write boilerplate code:</div>
                  <div className="mtop5p">
                     <Highlight content={MULTIPLE_NULL_CHECKS} lang="java" />
                  </div>
               </li>
               <li className="mtop5p">
                  <div><h5 className="blog-head"><b>Code Readability and Maintenance Issues:</b></h5></div>
                  <div>
                     <ul>
                        <li className="mtop5p">Nested <code><b>if</b></code> statements.</li>
                        <li className="mtop5p">Hard to maintain when multiple objects need null checks.</li>
                     </ul>
                  </div>
               </li>
            </ol>
         </div>
         <div className="mtop5p">To address these issues, <b>Java 8 introduced the Optional class</b>.</div>
      </Card>
   </div>
   <div className="mtop15p"><h2 className="blog-head"><b>Introduction to Java 8 Optional Class</b></h2></div>
   <div className="mtop15p">The <code><b>Optional&lt;T&gt;</b></code> class, introduced in <b>Java 8</b>, is a <b>container object</b> that 
   may or may not contain a non-null value.</div>
   <div>
      <ul>
         <li className="mtop5p">It is part of <code><b>java.util</b></code> package.</li>
         <li className="mtop5p">It helps <b>avoid explicit null checks</b> and <b>reduces NPEs</b>.</li>
      </ul>
   </div>
   <div><h5 className="blog-head"><b>Key Points:</b></h5></div>
   <div>
      <ul>
         <li className="mtop5p">Optional is a <b>final class</b>.</li>
         <li className="mtop5p">It can <b>contain</b> or <b>be empty</b>.</li>
         <li className="mtop5p">Provides <b>methods to check and retrieve values safely</b>.</li>
         <li className="mtop5p">Promotes <b>functional programming style</b> with methods 
            like <code><b>map</b></code>, <code><b>filter</b></code>, <code><b>ifPresent</b></code> and <code><b>orElse</b></code>.</li>
      </ul>
   </div>

   <div className="mtop15p"><h4 className="blog-head"><b>Creating and Using Optional</b></h4></div>
   <div className="mtop5p">There are <b>3 main ways</b> to create an Optional:</div>
   <div>
      <ol>
         <li className="mtop5p"><code><b>Optional.of(value)</b></code> <b>–</b> For non-null values.</li>
         <li className="mtop5p"><code><b>Optional.ofNullable(value)</b></code> <b>–</b> For nullable values.</li>
         <li className="mtop5p"><code><b>Optional.empty()</b></code> <b>–</b> Creates an empty Optional.</li>
      </ol>
   </div>
 </div>);
};

export default Introduction;