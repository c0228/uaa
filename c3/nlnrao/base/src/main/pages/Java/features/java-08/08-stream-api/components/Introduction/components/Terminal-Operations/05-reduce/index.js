import React from "react";
import { Highlight } from "e-ui-react"
import SimpleTable from "@MainComponents/simple-table/index.js";

const REDUCE_EXAMPLE1_SUM = `import java.util.stream.*;

public class Main {
    public static void main(String[] args) {
        int sum = Stream.of(1, 2, 3, 4, 5)
                        .reduce(0, (a, b) -> a + b);
        System.out.println(sum); // Output: 15
    }
}`;

const REDUCE_EXAMPLE2_MULTIPLY = `int product = Stream.of(1, 2, 3, 4)
                    .reduce(1, (a, b) -> a * b);
System.out.println(product); // Output: 24`;

const REDUCE_EXAMPLE3_LONGEST = `Optional<String> longest = Stream.of("Java", "SpringBoot", "Go", "Python")
    .reduce((s1, s2) -> s1.length() > s2.length() ? s1 : s2);

longest.ifPresent(System.out::println); // Output: SpringBoot`;

const REDUCE_EXAMPLE4_PARALLEL = `int total = Stream.of("A", "BB", "CCC")
    .parallel()
    .reduce(
        0,
        (partialResult, str) -> partialResult + str.length(), // accumulator
        Integer::sum                                          // combiner
    );
System.out.println(total); // Output: 6`;

const Reduce = () =>{
 return (<div className="mtop5p lh28p fs16p">
    <div className="mtop5p"><h5 className="blog-head"><b>1. What is <code>reduce(...)</code>?</b></h5></div>
    <div className="mtop5p">The <code><b>reduce()</b></code> method is a <b>terminal operation</b> in Java Stream API that 
    performs a <b>reduction</b> (also called a <b>fold</b>) on the elements of the stream using an <b>accumulation function</b> and 
    returns an <b>Optional result</b>.</div>

    <div className="mtop15p"><h5 className="blog-head"><b>2. Why Use <code>reduce(...)</code>?</b></h5></div>
    <div className="mtop5p">Use <code><b>reduce()</b></code> when:</div>
    <div>
        <ul>
            <li className="mtop5p">You want to <b>combine all elements</b> of a stream into a single result (e.g., sum, product, concatenation, min, max, etc.).</li>
            <li className="mtop5p">You are looking for <b>custom reduction behavior</b> beyond built-in collectors 
            like <code><b>sum()</b></code> or <code><b>collect()</b></code>.</li>
        </ul>
    </div>

    <div className="mtop15p"><h5 className="blog-head"><b>3. Three Overloads of <code>reduce(...)</code>?</b></h5></div>
    <div className="mtop5p">
        <SimpleTable header={["Method Signature", "Description"]} 
                columns={[
                    [(<div><code><b>Optional&lt;T&gt; reduce(BinaryOperator&lt;T&gt; accumulator)</b></code></div>), "Reduces elements using binary operator"],
                    [(<div><code><b>T reduce(T identity, BinaryOperator&lt;T&gt; accumulator)</b></code></div>), "Uses identity + binary operator"],
                    [(<div><code><b>&lt;U&gt; U reduce(U identity, BiFunction&lt;U, ? super T, U&gt; accumulator, 
                        BinaryOperator&lt;U&gt; combiner)</b></code></div>), "Parallel-friendly reduction with transformation"],
                ]} />
    </div>

    <div className="mtop15p"><h5 className="blog-head"><b>4. Examples:</b></h5></div>
    <div className="mtop15p"><h5 className="blog-head"><b>Example #1: Sum using <code>reduce()</code></b></h5></div>
    <div className="mtop5p"><Highlight content={REDUCE_EXAMPLE1_SUM} lang="java" /></div>
    <div className="mtop15p"><h5 className="blog-head"><b>Example #2: Multiply All Elements</b></h5></div>
    <div className="mtop5p"><Highlight content={REDUCE_EXAMPLE2_MULTIPLY} lang="java" /></div>
    <div className="mtop15p"><h5 className="blog-head"><b>Example #3: Find Longest String</b></h5></div>
    <div className="mtop5p"><Highlight content={REDUCE_EXAMPLE3_LONGEST} lang="java" /></div>
    <div className="mtop15p"><h5 className="blog-head"><b>Example #4: Parallel Reduction with Combiner</b></h5></div>
    <div className="mtop5p"><Highlight content={REDUCE_EXAMPLE4_PARALLEL} lang="java" /></div>


    <div className="mtop15p"><h5 className="blog-head"><b>5. Key Concepts</b></h5></div>
    <div className="mtop5p">
        <SimpleTable header={["Term", "Meaning"]} 
                columns={[
                    [(<div><b>identity</b></div>), "Default value for the reduction (like 0 for sum, 1 for product)"],
                    [(<div><b>accumulator</b></div>), "How each element is combined into the result"],
                    [(<div><b>combiner</b></div>), "Merges intermediate results (used in parallel streams)"],
                ]} />
    </div>

    <div className="mtop15p"><h5 className="blog-head"><b>6. Differences - <code>reduce()</code> vs <code>collect()</code></b></h5></div>
    <div className="mtop5p">
        <SimpleTable header={["Feature", "reduce()", "collect()"]} 
                columns={[
                    ["Result Type", "One value (e.g., Integer, String)", "Any type (List, Set, Map, etc.)"],
                    ["Use Case", "Sum, product, max, min, etc.", "Convert stream to collection"],
                    ["Performance", "Can be parallelized", "More powerful and flexible"],
                ]} />
    </div>
 </div>);
};

export default Reduce;