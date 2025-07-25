import React from "react";
import { Highlight } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const SEQ_EXAMPLE1_JAVA = `import java.util.Arrays;
import java.util.List;

public class SequentialExample {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Alice", "Bob", "Charlie", "David", "Eva");

        names.stream()
             .parallel()                // Enable parallel processing
             .map(String::toUpperCase)
             .sequential()             // Switch back to sequential
             .forEach(System.out::println); // This will now run sequentially
    }
}`;

const SEQ_OUTPUT1_JAVA = `ALICE
BOB
CHARLIE
DAVID
EVA`;

const SEQ_EXAMPLE2_JAVA = `Stream.of(1, 2, 3, 4, 5, 6)
      .parallel()
      .map(n -> {
          System.out.println("Parallel: " + n + " - " + Thread.currentThread().getName());
          return n * n;
      })
      .sequential()
      .forEachOrdered(n -> {
          System.out.println("Sequential: " + n);
      });`;

const Sequential = () =>{
 return (<div className="mtop5p lh28p fs16p">
    <div><h5 className="blog-head"><b>1. What is <code>sequential()</code>?</b></h5></div>
    <div className="mtop5p">The <code><b>sequential()</b></code> method in Java Stream API is 
    an <b>intermediate operation</b> that <b>converts a parallel stream back into a sequential stream</b>. This ensures that the 
    remaining operations in the pipeline will be executed <b>sequentially (one thread at a time)</b>.</div>

    <div><h5 className="blog-head"><b>Syntax:</b></h5></div>
    <div className="mtop5p"><Highlight content={`Stream<T> sequential()`} lang="java" /></div>

     <div><h5 className="blog-head"><b>2. When to Use <code>sequential()</code>?</b></h5></div>
     <div className="mtop5p">Use <code><b>sequential()</b></code> when:</div>
     <ul>
        <li className="mtop5p">You previously called <code><b>parallel()</b></code> but want 
        to <b>switch back to sequential processing</b> for the rest of the pipeline.</li>
        <li className="mtop5p">You want to <b>preserve the order</b>of processing and output.</li>
        <li className="mtop5p">You want to <b>avoid multi-threading</b> for specific downstream operations.</li>
     </ul>

    <div className="mtop15p"><h5 className="blog-head"><b>3. Examples:</b></h5></div>
    <div className="mtop5p"><h5 className="blog-head"><b>Example #1: Using <code>sequential()</code> after <code>parallel()</code></b></h5></div>
    <div className="mtop5p"><Highlight content={SEQ_EXAMPLE1_JAVA} lang="java" /></div>
    <div className="mtop5p"><b>Output (maintains order because <code>sequential()</code> ensures it):</b></div>
    <div className="mtop5p"><Highlight content={SEQ_OUTPUT1_JAVA} lang="java" /></div>
    <div className="mtop5p"><h5 className="blog-head"><b>Example #2:</b></h5></div>
    <div className="mtop5p"><Highlight content={SEQ_EXAMPLE2_JAVA} lang="java" /></div>

    <div className="mtop15p"><h5 className="blog-head"><b>4. Difference Between <code>parallel()</code> and <code>sequential()</code></b></h5></div>
    <div className="mtop5p">
        <SimpleTable header={["Method", "Description"]} 
            columns={[
                [(<div><code><b>parallel()</b></code></div>), "Enables parallel stream processing"],
                [(<div><code><b>sequential()</b></code></div>), "Reverts to sequential processing"],
            ]} />
    </div>
 </div>);
};

export default Sequential;