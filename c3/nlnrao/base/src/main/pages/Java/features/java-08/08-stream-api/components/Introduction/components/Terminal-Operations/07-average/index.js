import React from "react";
import { Highlight } from "e-ui-react";

const AVERAGE_EXAMPLE_BASIC = `import java.util.stream.IntStream;
import java.util.OptionalDouble;

public class Main {
    public static void main(String[] args) {
        OptionalDouble avg = IntStream.of(10, 20, 30, 40).average();
        avg.ifPresent(System.out::println);  // Output: 25.0
    }
}`;

const AVERAGE_EXAMPLE_LIST = `import java.util.Arrays;
import java.util.List;
import java.util.OptionalDouble;

public class Main {
    public static void main(String[] args) {
        List<Integer> marks = Arrays.asList(70, 80, 90);
        OptionalDouble avg = marks.stream()
                                  .mapToInt(Integer::intValue)
                                  .average();
        System.out.println(avg.orElse(0.0));  // Output: 80.0
    }
}`;
const AVERAGE_EXAMPLE_EMPTYSTREAM = `OptionalDouble avg = IntStream.empty().average();
System.out.println(avg.isPresent()); // Output: false
System.out.println(avg.orElse(0.0)); // Output: 0.0`;

const AVERAGE_EXAMPLE_LONGDOUBLESTREAM = `double avgLong = java.util.stream.LongStream.of(10L, 20L).average().orElse(0.0); // 15.0
double avgDouble = java.util.stream.DoubleStream.of(1.5, 2.5).average().orElse(0.0); // 2.0`;

const AVERAGE_EXAMPLE_NONPRIMITIVE = `List<Double> values = Arrays.asList(10.0, 20.0, 30.0);
double avg = values.stream()
                   .mapToDouble(Double::doubleValue)
                   .average()
                   .orElse(0.0);`;

const Average = () =>{
 return (<div className="mtop5p lh28p fs16p">
    <div><h5 className="blog-head"><b>1. What is <code>average()</code>?</b></h5></div>
    <div className="mtop5p">The <code><b>average()</b></code> method is a <b>terminal operation</b> in Java Stream API 
    that calculates the <b>average (mean)</b> of elements in a primitive stream like:</div>
    <div>
        <ul>
            <li className="mtop5p"><code><b>IntStream</b></code></li>
            <li className="mtop5p"><code><b>LongStream</b></code></li>
            <li className="mtop5p"><code><b>DoubleStream</b></code></li>
        </ul>
    </div>
    <div className="mtop5p"><h5 className="blog-head"><b>Method Signature</b></h5></div>
    <div className="mtop5p"><Highlight content={`OptionalDouble average()`} lang="java" /></div>
    <div>
        <ul>
            <li className="mtop5p">Returns <code><b>OptionalDouble</b></code> because the stream might be <b>empty</b>.</li>
        </ul>
    </div>

    <div className="mtop15p"><h5 className="blog-head"><b>2. Why Use <code>average()</code>?</b></h5></div>
    <div>
        <ul>
            <li className="mtop5p">To calculate the <b>mean value</b> directly from a stream of numbers.</li>
            <li className="mtop5p">More concise and efficient than computing it manually.</li>
        </ul>
    </div>

    <div className="mtop15p"><h5 className="blog-head"><b>3. Examples:</b></h5></div>
    <div className="mtop5p"><h5 className="blog-head"><b>Example #1: Average of Integers</b></h5></div>
    <div className="mtop5p"><Highlight content={AVERAGE_EXAMPLE_BASIC} lang="java" /></div>
    <div className="mtop5p"><h5 className="blog-head"><b>Example #2: Average from a List</b></h5></div>
    <div className="mtop5p"><Highlight content={AVERAGE_EXAMPLE_LIST} lang="java" /></div>
    <div className="mtop5p"><h5 className="blog-head"><b>Example #3: Handling Empty Streams</b></h5></div>
    <div className="mtop5p"><Highlight content={AVERAGE_EXAMPLE_EMPTYSTREAM} lang="java" /></div>
    <div className="mtop5p"><h5 className="blog-head"><b>Example #4: LongStream and DoubleStream</b></h5></div>
    <div className="mtop5p"><Highlight content={AVERAGE_EXAMPLE_LONGDOUBLESTREAM} lang="java" /></div>
    <div className="mtop5p"><h5 className="blog-head"><b>Tip: Convert Non-Primitive Streams</b></h5></div>
    <div className="mtop5p"><Highlight content={AVERAGE_EXAMPLE_NONPRIMITIVE} lang="java" /></div>
 </div>);
};

export default Average;