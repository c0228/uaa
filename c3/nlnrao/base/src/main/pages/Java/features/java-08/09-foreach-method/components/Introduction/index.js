import React from "react";
import { Card, Highlight } from "e-ui-react";

const FORLOOP_EXAMPLE_JAVA = `List<String> names = Arrays.asList("John", "Alice", "Bob");

for (int i = 0; i < names.size(); i++) {
    System.out.println(names.get(i));
}`;

const ENHANCELOOP_EXAMPLE_JAVA = `for (String name : names) {
    System.out.println(name);
}`;

const ITERATORS_EXAMPLE_JAVA = `Iterator<String> iterator = names.iterator();
while (iterator.hasNext()) {
    System.out.println(iterator.next());
}`;

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p">Java 8 introduced several new features that made coding easier, more expressive, and more efficient. 
      Among them, the <code><b>forEach()</b></code> <b>method</b> is one of the most commonly used features, especially for iterating 
      over collections. Before diving into its usage, let’s understand why it was introduced.</div>
   <div className="mtop15p">
      <Card padding={15} backgroundColor="#eee">
         <div><h4 className="blog-head"><b>Problems Before Java 8</b></h4></div>
         <div className="mtop15p">Before Java 8, iterating over collections like <b>List</b>, <b>Set</b>, or <b>Map</b> required 
         traditional loops or iterators. The common approaches were:</div>
         <div>
            <ol>
               <li className="mtop15p">
                  <div><h5 className="blog-head"><b>Using a For Loop</b></h5></div>
                  <div className="mtop5p"><Highlight content={FORLOOP_EXAMPLE_JAVA} lang="java" /></div>
                  <div><b>Problem:</b> Verbose and prone to <code><b>IndexOutOfBoundsException</b></code> if not handled carefully.</div>
               </li>
               <li className="mtop15p">
                  <div><h5 className="blog-head"><b>Using an Enhanced For Loop (For-Each Loop)</b></h5></div>
                  <div className="mtop5p"><Highlight content={ENHANCELOOP_EXAMPLE_JAVA} lang="java" /></div>
                  <div><b>Problem:</b> Although shorter, it doesn’t leverage <b>functional programming</b> and doesn’t easily 
                  support <b>parallelism</b>.</div>
               </li>
               <li className="mtop15p">
                  <div><h5 className="blog-head"><b>Using Iterators</b></h5></div>
                  <div className="mtop5p"><Highlight content={ITERATORS_EXAMPLE_JAVA} lang="java" /></div>
                  <div><b>Problem:</b> Extra boilerplate code and less readable for simple tasks.</div>
               </li>
            </ol>
         </div>
         <div className="mtop5p"><b>In short</b>, pre-Java 8 iteration methods were <b>imperative</b>, not <b>functional</b>. They 
         required explicit loops and lacked a <b>declarative approach</b> to processing collections.</div>
      </Card>
   </div>
   <div className="mtop15p"><h2 className="blog-head"><b>Introduction to forEach() Method</b></h2></div>
   <div className="mtop15p">Java 8 introduced the <code><b>forEach()</b></code> <b>method</b> as part of 
   the <b>Iterable interface</b> and <b>Streams API</b> to simplify iteration in a <b>functional style</b>.</div>
   <div className="mtop15p"><h4 className="blog-head"><b>Key Points About forEach():</b></h4></div>
   <div>
      <ul>
         <li className="mtop5p">It is a <b>default method</b> in the <code><b>Iterable</b></code> interface.</li>
         <li className="mtop5p">It <b>accepts a lambda expression</b> or method reference to process each element.</li>
         <li className="mtop5p">It <b>reduces boilerplate code</b>.</li>
         <li className="mtop5p">Works well with <b>Streams</b> to <b>support parallel processing</b>.</li>
      </ul>
   </div>
   <div className="mtop5p"><h5 className="blog-head"><b>Syntax:</b></h5></div>
   <div className="mtop5p"><Highlight content={`collection.forEach(action);`} lang="java" /></div>
   <div className="mtop5p">Where <code><b>action</b></code> is a lambda expression or method reference that consumes each element.</div>
 </div>);
};

export default Introduction;