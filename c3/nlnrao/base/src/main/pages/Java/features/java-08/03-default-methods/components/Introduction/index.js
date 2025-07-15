import React from "react";
import { Card, Highlight } from "e-ui-react";

const DEFAULT_EXAMPLE_JAVA8 = `interface MyInterface {
    default void show() {
        System.out.println("Default implementation");
    }
}`;

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p">
      <Card padding={15} backgroundColor="#eee">
         <div><h4 className="blog-head"><b>The Diamond Problem of Interfaces in Java</b></h4></div>
         <div className="mtop15p">Before Java 8, interfaces in Java could only contain <b>abstract methods</b>. This meant any class 
         implementing an interface <b>had to provide its own implementation</b> for every method declared in that interface.</div>
         <div className="mtop15p">While this ensured strict contracts, it created several challenges:</div>
         <div>
            <ul>
               <li className="mtop5p"><b>Breaking Changes:</b> If you wanted to <b>add a new method to an existing interface</b>, you 
               would break all the classes that already implemented that interface. This was a serious issue in large APIs like Java 
               Collections Framework.</li>
               <li className="mtop5p"><b>Code Duplication:</b> Developers had to <b>rewrite common logic</b> across multiple classes 
               even if the logic could have been shared.</li>
               <li className="mtop5p"><b>No Method Implementation:</b> There was no way to provide any method body inside interfaces, 
               making interfaces less powerful in terms of extensibility.</li>
            </ul>
         </div>
         <div className="mtop15p">These problems became more apparent as developers moved 
            towards <b>functional programming and API evolution</b>, especially while working 
            with <b>Lambdas</b> and <b>Streams</b> in Java 8.</div>
         <div className="mtop15p">To address these limitations, <b>Java 8 introduced Default Methods</b> in interfaces.</div>
      </Card>
   </div>
   <div className="mtop15p"><h2 className="blog-head"><b>Introduction: What Are Default Methods?</b></h2></div>
   <div className="mtop15p">A <b>Default Method</b> is a method in an interface that has a <b>default implementation</b>. It allows 
   developers to add <b>new functionality to interfaces</b> without breaking the classes that implement them.</div>
   <div className="mtop15p padLeft5p"><h4 className="blog-head"><b>Syntax:</b></h4></div>
   <div className="mtop5p"><Highlight content={DEFAULT_EXAMPLE_JAVA8} lang="java" /></div>
   <div className="mtop15p padLeft5p">The key benefit - Classes implementing the interface <b>do not need to override</b> the default method 
   unless they want a custom behavior.</div>
 </div>);
};

export default Introduction;