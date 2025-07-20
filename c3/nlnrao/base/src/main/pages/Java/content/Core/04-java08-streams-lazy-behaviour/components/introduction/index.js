import React from "react";
import { Card, Highlight } from "e-ui-react";

const BASIC_LAZY_EVALUATION = `import java.util.Arrays;
import java.util.List;

public class LazyDemo {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Steve", "Sam", "Alice", "Bob");

        names.stream()
             .filter(name -> {
                 System.out.println("Filtering: " + name);
                 return name.startsWith("S");
             }); // No terminal operation, so nothing happens
    }
}`;

const TRIGGER_EXECUTION_TERMINAL = `names.stream()
     .filter(name -> {
         System.out.println("Filtering: " + name);
         return name.startsWith("S");
     })
     .forEach(System.out::println);`;

const TRIGGER_EXECUTION_OUTPUT = `Filtering: Steve
Steve
Filtering: Sam
Sam
Filtering: Alice
Filtering: Bob`;

const SHORTCIRCUIT_LAZY_CODE = `import java.util.stream.Stream;

public class ShortCircuitingDemo {
    public static void main(String[] args) {
        Stream.of("one", "two", "three", "four")
              .filter(s -> {
                  System.out.println("Filtering: " + s);
                  return s.length() > 3;
              })
              .findFirst(); // Terminal operation with short-circuiting
    }
}`;

const SHORTCIRCUIT_LAZY_OUTPUT = `Filtering: one
Filtering: two
Filtering: three`;

const OPERATION_FUSION_PERFORMANCE = `List<String> result = names.stream()
    .map(s -> {
        System.out.println("Mapping: " + s);
        return s.toUpperCase();
    })
    .filter(s -> {
        System.out.println("Filtering: " + s);
        return s.startsWith("S");
    })
    .collect(Collectors.toList());`;

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p">
      <Card padding={15} backgroundColor="#eee">
         <div><h4 className="blog-head"><b>The Problems Before Java 8</b></h4></div>
         <div className="mtop5p">Before Java 8, Java developers often struggled with writing concise and readable code 
            when it came to data processing. Tasks like filtering, mapping, grouping, and sorting required verbose and 
            imperative code. Common problems included:</div>
         <div>
            <ul>
               <li className="mtop5p"><b>Boilerplate Loops:</b> Iterating over collections with nested loops cluttered 
               business logic.</li>
               <li className="mtop5p"><b>Mutability Issues:</b> Manual accumulation often required external mutable 
               containers.</li>
               <li className="mtop5p"><b>Parallelism Complexity:</b> Writing parallel processing code was error-prone and 
               required deep knowledge of threads and synchronization.</li>
               <li className="mtop5p"><b>Poor Readability:</b> Operations like filtering or transforming data were hard to 
               express clearly using older for-loop logic.</li>
            </ul>
         </div>
         <div className="mtop5p">These limitations prompted the introduction of a more functional approach to data manipulation.</div>
      </Card>
   </div>
   <div className="mtop15p"><h2 className="blog-head"><b>Introduction: Java 8 Streams & Lazy Evaluation</b></h2></div>
   <div className="mtop15p">Java 8 introduced the <b>Stream API</b> — a major leap forward in functional-style programming 
   for processing collections.</div>
   <div className="mtop5p">One of the <b>most powerful features</b> of the Stream API is <b>lazy evaluation</b>.</div>
   <div className="mtop5p"><b>Lazy evaluation</b> means that stream operations are not executed immediately when they are 
   defined. Instead, they are executed <b>only when a terminal operation is invoked</b>. This allows Java to:</div>
   <div>
      <ul>
         <li className="mtop5p">Avoid unnecessary computations.</li>
         <li className="mtop5p">Optimize the processing pipeline (like short-circuiting).</li>
         <li className="mtop5p">Improve performance by fusing multiple operations.</li>
      </ul>
   </div>
   <div className="mtop15p"><h2 className="blog-head"><b>What Are Stream Operations?</b></h2></div>
   <div className="mtop15p">
      <div>Stream operations are categorized into two types:</div>
      <div>
         <ol>
            <li className="mtop5p"><b>Intermediate Operations:</b> These return a new stream and are 
            lazy (e.g., <code><b>filter</b></code>, <code><b>map</b></code>, <code><b>sorted</b></code>).</li>
            <li className="mtop5p"><b>Terminal Operations:</b> These trigger the actual 
            computation (e.g., <code><b>collect</b></code>, <code><b>forEach</b></code>, <code><b>count</b></code>).</li>
         </ol>
      </div>
   </div>
   <div className="mtop15p"><h4 className="blog-head"><b>Examples: Lazy Behaviour in Action</b></h4></div>
   <div className="mtop15p">Let’s explore Java 8 Streams and their lazy evaluation with real examples.</div>

   <div className="mtop15p"><h4 className="blog-head"><b>Example 1: Basic Lazy Evaluation</b></h4></div>
   <div className="mtop15p"><Highlight content={BASIC_LAZY_EVALUATION} lang="java" /></div>
   <div className="mtop5p"><b>Output:</b> Nothing!</div>
   <div className="mtop15p"><b>Explaination:</b> The <code><b>filter()</b></code> operation is <b>lazy</b> and 
   is not executed until a terminal operation like <code><b>collect()</b></code> or <code><b>forEach()</b></code> is 
   called.</div>

   <div className="mtop15p"><h4 className="blog-head"><b>Example 2: Triggering Execution with Terminal Operation</b></h4></div>
   <div className="mtop15p"><Highlight content={TRIGGER_EXECUTION_TERMINAL} lang="java" /></div>
   <div className="mtop5p"><b>Output:</b></div>
   <div className="mtop15p"><Highlight content={TRIGGER_EXECUTION_OUTPUT} lang="java" /></div>
   <div className="mtop15p"><b>Explanation:</b> Now the stream is <b>executed</b> because <code><b>forEach</b></code> is 
   a terminal operation.</div>

   <div className="mtop15p"><h4 className="blog-head"><b>Example 3: Short-Circuiting with Lazy Evaluation</b></h4></div>
   <div className="mtop15p"><Highlight content={SHORTCIRCUIT_LAZY_CODE} lang="java" /></div>
   <div className="mtop5p"><b>Output:</b></div>
   <div className="mtop15p"><Highlight content={SHORTCIRCUIT_LAZY_OUTPUT} lang="java" /></div>
   <div className="mtop15p"><b>Explanation:</b> As soon as a matching element is 
   found, <code><b>findFirst()</b></code> <b>short-circuits</b> and stops further processing, thanks to <b>lazy evaluation</b>.</div>
 
   <div className="mtop15p"><h4 className="blog-head"><b>Example 4: Operation Fusion for Performance</b></h4></div>
   <div className="mtop15p"><Highlight content={OPERATION_FUSION_PERFORMANCE} lang="java" /></div>
   <div className="mtop15p"><b>Explanation:</b> Here, Java fuses <code><b>map()</b></code> and <code><b>filter()</b></code> together 
   internally. Rather than running two separate loops, it performs them in a single pass, improving performance.</div>
 </div>);
};

export default Introduction;