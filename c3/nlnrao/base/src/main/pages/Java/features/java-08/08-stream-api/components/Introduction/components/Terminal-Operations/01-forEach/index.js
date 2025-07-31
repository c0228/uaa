import React from "react";
import { Card, Highlight } from "e-ui-react";

const FOREACH_EXAMPLE_PRINTING = `import java.util.Arrays;
import java.util.List;

public class ForEachExample {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Alice", "Bob", "Charlie");

        names.stream()
             .forEach(name -> System.out.println("Hello " + name));
    }
}`;

const FOREACH_OUTPUT_PRINTING = `Hello Alice
Hello Bob
Hello Charlie`;

const FOREACH_EXAMPLE_PARALLEL = `List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);

numbers.parallelStream()
       .forEach(n -> System.out.println("Processing: " + n));`;

const FOREACH_OUTPUT_PARALLEL = `Processing: 3
Processing: 1
Processing: 2
Processing: 5
Processing: 4`;

const FOREACH_EXAMPLE_MAINTAIN = `numbers.parallelStream()
       .forEachOrdered(n -> System.out.println("Ordered: " + n));`;

const ForEach = () =>{
 return (<div className="mtop5p lh28p fs16p">
    <div><h5 className="blog-head"><b>1. What is <code>forEach(Consumer&lt;T&gt;)</code>?</b></h5></div>
    <div className="mtop5p">The <code><b>forEach()</b></code> method in the Stream API is a <b>terminal operation</b> used 
    to <b>perform an action for each element in the stream</b>.</div>
    <div className="mtop5p">It takes a <code><b>Consumer&lt;T&gt;</b></code> as an argument — a functional interface with the 
    method <code><b>void accept(T t)</b></code> — and applies it to every element in the stream.</div>
    <div className="mtop5p"><h5 className="blog-head"><b>Syntax:</b></h5></div>
    <div className="mtop5p"><Highlight content={`void forEach(Consumer<? super T> action)`} lang="java" /></div>

    <div><h5 className="blog-head"><b>2. When to Use <code><b>forEach()</b></code>?</b></h5></div>
    <div className="mtop15p">
        <div>Use <code><b>forEach()</b></code> when:</div>
        <div>
            <ul>
                <li className="mtop5p">You want to <b>perform side-effects</b> (like printing, logging, or modifying external state) on each element.</li>
                <li className="mtop5p">You don't need to <b>collect or return</b> the processed data.</li>
                <li className="mtop5p">The operation is the <b>last step</b> in the stream pipeline.</li>
            </ul>
        </div>
    </div>

    <div className="mtop15p"><h5 className="blog-head"><b>3. Examples:</b></h5></div>
    <div className="mtop5p"><h5 className="blog-head"><b>Example #1: Printing Each Element</b></h5></div>
    <div className="mtop5p"><Highlight content={FOREACH_EXAMPLE_PRINTING} lang="java" /></div>
    <div className="mtop5p padLeft5p"><b>Output:</b></div>
    <div className="mtop5p"><Highlight content={FOREACH_OUTPUT_PRINTING} lang="java" /></div>
    <div className="mtop5p"><h5 className="blog-head"><b>Example #2: Parallel Stream</b></h5></div>
    <div className="mtop5p"><Highlight content={FOREACH_EXAMPLE_PARALLEL} lang="java" /></div>
    <div className="mtop5p padLeft5p"><b>Output may vary in order each time:</b></div>
    <div className="mtop5p"><Highlight content={FOREACH_OUTPUT_PARALLEL} lang="java" /></div>
    <div className="mtop5p"><h5 className="blog-head"><b>Example #3: Use <code>forEachOrdered()</code> to maintain order</b></h5></div>
    <div className="mtop5p"><Highlight content={FOREACH_EXAMPLE_MAINTAIN} lang="java" /></div>
    <div className="mtop15p">
        <Card padding={15} backgroundColor="#eee">
            <div><h5 className="blog-head"><b>Note:</b></h5></div>
            <div>
                <ul>
                    <li className="mtop5p">In a <b>parallel stream</b>, <code><b>forEach()</b></code> <b>does not guarantee order</b>.</li>
                    <li className="mtop5p">Use <code><b>forEachOrdered()</b></code> if <b>preserving encounter order</b> is important.</li>
                </ul>
            </div>
        </Card>
    </div>

 </div>);
};

export default ForEach;