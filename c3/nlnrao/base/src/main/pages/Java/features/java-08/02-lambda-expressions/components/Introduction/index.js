import React from "react";
import { Card, Highlight } from "e-ui-react";

const AC_EXAMPLE_JAVA = `Collections.sort(names, new Comparator<String>() {
    public int compare(String a, String b) {
        return a.compareTo(b);
    }
});`;

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p">
      <Card padding={15} backgroundColor="#eee">
         <div><h4 className="blog-head"><b>The Problems Before Lambda Expression</b></h4></div>
         <div className="mtop15p">
            Before Java 8, Java developers faced a common set of challenges when trying to write clean, concise, and expressive 
            code — especially when working with behavior that needed to be passed around (e.g., sorting, filtering, event handling). 
            The main problems were:
            <div>
               <ol>
                  <li className="mtop15p">
                     <div><h5 className="blog-head"><b>Verbosity of Anonymous Classes</b></h5></div>
                     <div className="mtop5p">o define inline behavior (such as custom sorting logic), we had to 
                     create anonymous inner classes. These took multiple lines of code and cluttered readability.</div>
                     <div className="mtop5p"><Highlight content={AC_EXAMPLE_JAVA} lang="java" /></div>
                  </li>
                  <li className="mtop15p">
                     <div><h5 className="blog-head"><b>No First-Class Functions</b></h5></div>
                     <div className="mtop5p">Java lacked the ability to treat <b>functions as values</b>. That means, we couldn’t 
                     directly pass behavior into methods or assign them to variables. Every behavior needed a concrete class 
                     or anonymous implementation.</div>
                  </li>
                  <li className="mtop15p">
                     <div><h5 className="blog-head"><b>Inefficient Functional-Style Operations</b></h5></div>
                     <div className="mtop5p">Java developers often mimicked functional patterns 
                        (like <code><b>map</b></code>, <code><b>filter</b></code>, <code><b>reduce</b></code>) 
                        using loops, but this was neither expressive nor efficient. The lack of native functional support made 
                        such tasks verbose and less readable.</div>
                  </li>
               </ol>
            </div>
         </div>
      </Card>
   </div>
   <div className="mtop15p"><h2 className="blog-head"><b>Introduction to Lambda Expressions</b></h2></div>
   <div className="mtop15p">Lambda Expressions, introduced in <b>Java 8</b>, brought functional programming concepts into Java. Simply put, 
   a lambda expression is a <b>short block of code</b> that takes in parameters and returns a value. Lambdas 
   let us treat <b>functions as method arguments or assign them to variables</b>, thereby enabling cleaner and more flexible code.</div>
   <div className="mtop15p"><h4 className="blog-head"><b>Syntax:</b></h4></div>
   <div className="mtop5p">
      <Card padding={15} backgroundColor="#eee">
         (parameters) &#8594; &#123; body &#125;
      </Card>
   </div>
   <div className="mtop5p">If there is a single statement and a single parameter, even parentheses and braces can be omitted.</div>
 </div>);
};

export default Introduction;