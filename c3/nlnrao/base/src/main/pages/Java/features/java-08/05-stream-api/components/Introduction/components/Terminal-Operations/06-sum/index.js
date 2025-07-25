import React from "react";
import { Highlight } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const SUM_EXAMPLE_BASIC = `import java.util.stream.IntStream;

public class Main {
    public static void main(String[] args) {
        int total = IntStream.of(1, 2, 3, 4, 5).sum();
        System.out.println(total); // Output: 15
    }
}`;

const SUM_EXAMPLE_LIST = `import java.util.Arrays;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(10, 20, 30);
        int sum = numbers.stream()
                         .mapToInt(Integer::intValue)
                         .sum();
        System.out.println(sum); // Output: 60
    }
}`;

const SUM_EXAMPLE_LONG = `import java.util.stream.LongStream;

public class Main {
    public static void main(String[] args) {
        long total = LongStream.of(100L, 200L, 300L).sum();
        System.out.println(total); // Output: 600
    }
}`;

const EMPTY_STREAM_BEHAVIOUR = `int total = IntStream.empty().sum(); // Output: 0 (not Optional)`;

const Sum = () =>{
 return (<div className="mtop5p lh28p fs16p">
    <div><h5 className="blog-head"><b>1. What is <code>sum()</code>?</b></h5></div>
    <div className="mtop5p">The <code><b>sum()</b></code> method is a <b>terminal operation</b> available 
    on <b>primitive specializations</b> of streams in Java 8 and later:</div>
    <div>
        <ul>
            <li className="mtop5p"><code><b>IntStream</b></code></li>
            <li className="mtop5p"><code><b>LongStream</b></code></li>
            <li className="mtop5p"><code><b>DoubleStream</b></code></li>
        </ul>
    </div>
    <div className="mtop5p">It is used to calculate the <b>sum of elements</b> in a primitive stream.</div>

    <div className="mtop15p"><h5 className="blog-head"><b>2. Why Use <code>sum()</code>?</b></h5></div>
    <div>
        <ul>
            <li className="mtop5p">Fast and concise way to compute the <b>sum of numbers</b>.</li>
            <li className="mtop5p">Automatically handles empty streams (returns <code><b>0</b></code>).</li>
            <li className="mtop5p">More efficient than using <code><b>reduce()</b></code> for summing.</li>
        </ul>
    </div>

    <div className="mtop15p"><h5 className="blog-head"><b>3. Examples:</b></h5></div>
    <div className="mtop5p"><h5 className="blog-head"><b>Example #1: Sum of Integers</b></h5></div>
    <div className="mtop5p"><Highlight content={SUM_EXAMPLE_BASIC} lang="java" /></div>
    <div className="mtop5p"><h5 className="blog-head"><b>Example #2: Sum from a List of Integers</b></h5></div>
    <div className="mtop5p"><Highlight content={SUM_EXAMPLE_LIST} lang="java" /></div>
    <div className="mtop5p"><h5 className="blog-head"><b>Example #3: Sum of Long Values</b></h5></div>
    <div className="mtop5p"><Highlight content={SUM_EXAMPLE_LONG} lang="java" /></div>

    <div className="mtop15p"><h5 className="blog-head"><b>Empty Stream Behavior</b></h5></div>
    <div className="mtop5p"><Highlight content={EMPTY_STREAM_BEHAVIOUR} lang="java" /></div>

    <div className="mtop15p"><h5 className="blog-head"><b>4. Differences - <code>sum()</code> vs <code>reduce()</code></b></h5></div>
    <div className="mtop5p mbot15p">
        <SimpleTable header={["Feature", "sum()", "reduce(0,Integer::sum)"]} 
                columns={[
                    ["Readability","Cleaner and more readable","Slightly more verbose"],
                    ["Performance","Slightly more optimized for primitives","May create boxing/unboxing (if not careful)"],
                    ["Return Type",(<div><code><b>int</b></code>, <code><b>long</b></code>, or <code><b>double</b></code></div>),"Customizable return types"],
                ]} />
    </div>

 </div>);
};

export default Sum;