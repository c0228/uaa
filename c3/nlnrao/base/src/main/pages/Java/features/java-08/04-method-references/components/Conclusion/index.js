import React from "react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const Conclusion = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
   <div className="mtop15p"><h2 className="blog-head"><b>Why Use Method References?</b></h2></div>
   <div className="mtop15p">
      <ul>
         <li>Reduces boilerplate code</li>
         <li className="mtop15p">Improves readability</li>
         <li className="mtop15p">Leverages functional interfaces</li>
         <li className="mtop15p">Encourages cleaner lambda expressions</li>
         <li className="mtop15p">Great for collections and stream operations</li>
      </ul>
   </div>
   <div className="mtop15p"><h2 className="blog-head"><b>Quick Comparison: Lambda vs Method Reference</b></h2></div>
   <div className="mtop15p">
      <SimpleTable header={["Lambda Expression", "Method Reference"]} 
        columns={[
            [(<div><code><b>str &#8594; System.out.println(str)</b></code></div>),(<div><code><b>System.out::println</b></code></div>)],
            [(<div><code><b>(a, b) &#8594; Integer.compare(a, b)</b></code></div>),(<div><code><b>Integer::compare</b></code></div>)],
            [(<div><code><b>() &#8594; new Book()</b></code></div>),(<div><code><b>Book::new</b></code></div>)]
          ]} />
   </div>
   <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
   <div className="mtop15p"><b>Method References</b> in Java 8 bring the power of <b>functional programming</b> to Java in a clean, 
   readable, and efficient way. By reducing verbosity and making expressions more concise, developers can now write more expressive 
   code — especially in <b>Streams</b>, <b>Lambda expressions</b>, and <b>event-driven programming</b>.</div>
   <div className="mtop15p mbot15p">Learning how and when to use method references will help you write <b>modern</b>, <b>elegant Java code</b> that 
   aligns with best practices in Java 8 and beyond.</div>
 </div>);
};

export default Conclusion;