import React from "react";
import { Highlight } from "e-ui-react";

const SS_METHOD_SIGNATURES = `IntSummaryStatistics summaryStatistics()
LongSummaryStatistics summaryStatistics()
DoubleSummaryStatistics summaryStatistics()`;

const SS_EXAMPLE_INTSTREAM = `import java.util.IntSummaryStatistics;
import java.util.stream.IntStream;

public class Main {
    public static void main(String[] args) {
        IntSummaryStatistics stats = IntStream.of(10, 20, 30, 40, 50).summaryStatistics();
        System.out.println("Count: " + stats.getCount());
        System.out.println("Sum: " + stats.getSum());
        System.out.println("Min: " + stats.getMin());
        System.out.println("Max: " + stats.getMax());
        System.out.println("Average: " + stats.getAverage());
    }
}`;

const SS_OUTPUT_INTSTREAM = `Count: 5
Sum: 150
Min: 10
Max: 50
Average: 30.0`;

const SS_EXAMPLE_LONGSTREAM = `import java.util.LongSummaryStatistics;
import java.util.stream.LongStream;

public class Main {
    public static void main(String[] args) {
        LongSummaryStatistics stats = LongStream.of(100L, 200L, 300L).summaryStatistics();
        System.out.println(stats); // Prints full stats
    }
}`;

const SS_EXAMPLE_DOUBLESTREAM = `import java.util.DoubleSummaryStatistics;
import java.util.stream.DoubleStream;

public class Main {
    public static void main(String[] args) {
        DoubleSummaryStatistics stats = DoubleStream.of(5.5, 7.5, 10.0).summaryStatistics();
        System.out.println("Average: " + stats.getAverage());
        System.out.println("Min: " + stats.getMin());
    }
}`;

const SS_EXAMPLE_INTEGERSLIST = `import java.util.*;
import java.util.stream.*;

public class Main {
    public static void main(String[] args) {
        List<Integer> scores = Arrays.asList(85, 90, 78, 92, 88);
        IntSummaryStatistics stats = scores.stream()
                                           .mapToInt(Integer::intValue)
                                           .summaryStatistics();
        System.out.println(stats);
    }
}`;

const SummaryStatistics = () =>{
 return (<div className="mtop5p lh28p fs16p">
    <div><h5 className="blog-head"><b>1. What is <code>summaryStatistics()</code>?</b></h5></div>
    <div className="mtop15p">The <code><b>summaryStatistics()</b></code> method in Java Stream API provides 
    a <b>quick statistical summary</b> of numeric data. It is available in primitive streams:</div>
    <div>
        <ul>
            <li className="mtop5p"><code><b>IntStream</b></code></li>
            <li className="mtop5p"><code><b>LongStream</b></code></li>
            <li className="mtop5p"><code><b>DoubleStream</b></code></li>
        </ul>
    </div>
    <div className="mtop5p">It returns an object containing:</div>
    <div className="mtop5p"><b>count, sum, min, average, and max</b></div>
    <div className="mtop15p"><h5 className="blog-head"><b>Method Signatures</b></h5></div>
    <div className="mtop5p"><Highlight content={SS_METHOD_SIGNATURES} lang="java" /></div>

    <div className="mtop15p"><h5 className="blog-head"><b>2. Why Use <code>summaryStatistics()</code>?</b></h5></div>
    <div>
        <ul>
            <li className="mtop5p">To <b>collect multiple statistics</b> in one pass (efficient).</li>
            <li className="mtop5p">Avoids separate calls to <code><b>sum()</b></code>, <code><b>min()</b></code>, <code><b>max()</b></code>, <code><b>average()</b></code>, <code><b>count()</b></code>.</li>
        </ul>
    </div>

    <div className="mtop15p"><h5 className="blog-head"><b>3. Examples:</b></h5></div>
    <div className="mtop5p"><h5 className="blog-head"><b>Example #1: <code>IntStream</code></b></h5></div>
    <div className="mtop5p"><Highlight content={SS_EXAMPLE_INTSTREAM} lang="java" /></div>
    <div className="mtop5p"><b>Output:</b></div>
    <div className="mtop5p"><Highlight content={SS_OUTPUT_INTSTREAM} lang="java" /></div>
    <div className="mtop5p"><h5 className="blog-head"><b>Example #2: <code>LongStream</code></b></h5></div>
    <div className="mtop5p"><Highlight content={SS_EXAMPLE_LONGSTREAM} lang="java" /></div>
    <div className="mtop5p"><h5 className="blog-head"><b>Example #3: <code>DoubleStream</code></b></h5></div>
    <div className="mtop5p"><Highlight content={SS_EXAMPLE_DOUBLESTREAM} lang="java" /></div>
    <div className="mtop5p"><h5 className="blog-head"><b>Example #4: From a List of Integers</b></h5></div>
    <div className="mtop5p"><Highlight content={SS_EXAMPLE_INTEGERSLIST} lang="java" /></div>
 </div>);
};

export default SummaryStatistics;