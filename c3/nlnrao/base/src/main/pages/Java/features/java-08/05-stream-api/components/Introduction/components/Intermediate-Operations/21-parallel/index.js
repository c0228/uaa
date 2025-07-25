import React from "react";
import { Highlight, Icon } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const STREAM_EXAMPLE_PARALLEL = `import java.util.Arrays;
import java.util.List;

public class ParallelStreamExample {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Alice", "Bob", "Charlie", "David", "Eva");

        names.stream()
             .parallel()
             .forEach(name -> {
                 System.out.println(name + " - " + Thread.currentThread().getName());
             });
    }
}`;

const STREAM_OUTPUT_PARALLEL = `Alice - ForkJoinPool.commonPool-worker-1
Charlie - ForkJoinPool.commonPool-worker-3
Eva - main
Bob - ForkJoinPool.commonPool-worker-2
David - ForkJoinPool.commonPool-worker-1`;

const STREAM_EXAMPLE_LIST = `Stream.of(1, 2, 3, 4, 5)
      .parallel()
      .map(n -> n * n)
      .forEach(System.out::println);`;

const ORDER_EXAMPLE_PRESERVED = `names.stream()
     .parallel()
     .forEachOrdered(System.out::println);  // Maintains order`;

const Parallel = () =>{
 return (<div className="mtop5p lh28p fs16p">
    <div><h5 className="blog-head"><b>1. What is <code>parallel()</code>?</b></h5></div>
    <div className="mtop5p">The <code><b>parallel()</b></code> method in Java Stream API is an <b>intermediate operation</b> that 
    converts a <b>sequential stream</b> into a <b>parallel stream</b>, allowing operations to be 
    executed <b>concurrently using multiple threads</b> for better performance on large datasets.</div>
    <div className="mtop5p"><h5 className="blog-head"><b>Syntax:</b></h5></div>
    <div className="mtop5p"><Highlight content={`Stream<T> parallel()`} lang="java" /></div>
    <div className="mtop5p">It is called on a <b>sequential stream</b> and returns a <b>parallel stream</b>.</div>

    <div className="mtop15p"><h5 className="blog-head"><b>2. When to Use <code>parallel()</code>?</b></h5></div>
    <div className="mtop5p">Use <code><b>parallel()</b></code> when:</div>
    <div>
        <ul>
            <li className="mtop5p">You are working with <b>large datasets</b>.</li>
            <li className="mtop5p">The operation is <b>CPU-intensive</b> and <b>stateless</b> (doesn't rely on shared mutable state).</li>
            <li className="mtop5p">You want to <b>speed up performance</b> using multiple cores.</li>
        </ul>
    </div>

    <div className="mtop15p"><h5 className="blog-head"><b>3. Examples:</b></h5></div>
    <div className="mtop5p"><h5 className="blog-head"><b>Example #1: With <code>parallel()</code></b></h5></div>
    <div className="mtop5p"><Highlight content={STREAM_EXAMPLE_PARALLEL} lang="java" /></div>
    <div className="mtop5p"><b>Output:</b></div>
    <div className="mtop5p"><Highlight content={STREAM_OUTPUT_PARALLEL} lang="java" /></div>
    <div className="mtop5p"><Icon type="FontAwesome" name="fa-warning" size={14} color="orange" /> <b>Note:</b> The order 
    is <b>not guaranteed</b> in <code><b>forEach()</b></code> with parallel streams.</div>
    <div className="mtop5p"><h5 className="blog-head"><b>Example #2: Use with <code>Stream.of()</code> or <code>List.stream()</code></b></h5></div>
    <div className="mtop5p"><Highlight content={STREAM_EXAMPLE_LIST} lang="java" /></div>
    <div className="mtop5p"><h5 className="blog-head"><b>Example #3: With Order Preserved</b></h5></div>
    <div className="mtop5p"><Highlight content={ORDER_EXAMPLE_PRESERVED} lang="java" /></div>
    <div className="mtop15p"><h5 className="blog-head"><b>4. Difference: <code>stream()</code> vs <code>parallelStream()</code></b></h5></div>
    <div className="mtop5p">
        <SimpleTable header={["Method", "Behaviour"]} 
                columns={[ 
                    [(<div><code><b>stream()</b></code></div>), (<div>Creates a <b>sequential</b> stream</div>)],
                    [(<div><code><b>parallelStream()</b></code></div>), (<div>Creates a <b>parallel</b> stream directly</div>)],
                    [(<div><code><b>stream().parallel()</b></code></div>), (<div>Converts to parallel stream during pipeline</div>)],
                ]} />
    </div>
 </div>);
};

export default Parallel;