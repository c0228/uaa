import React from "react";
import { Highlight } from "e-ui-react";

const BOXED_EXAMPLE_PRIMITIVE = `Stream<Integer> boxedInt = IntStream.of(1, 2, 3).boxed();
Stream<Long> boxedLong = LongStream.of(100L, 200L).boxed();
Stream<Double> boxedDouble = DoubleStream.of(1.1, 2.2).boxed();`;

const BOXED_EXAMPLE_CONVERT = `import java.util.stream.*;
import java.util.*;

public class BoxedExample {
    public static void main(String[] args) {
        List<Integer> list = IntStream.range(1, 6)  // [1, 2, 3, 4, 5]
                                       .boxed()
                                       .collect(Collectors.toList());

        System.out.println(list);
    }
}`;

const BOXED_OUTPUT_CONVERT = `[1, 2, 3, 4, 5]`;

const BOXED_EXAMPLE_USING = `IntStream.range(1, 4)
         .boxed()
         .map(i -> "Number: " + i)
         .forEach(System.out::println);`;

const BOXED_OUTPUT_USING = `Number: 1
Number: 2
Number: 3`;

const Boxed = () =>{
 return (<div className="mtop5p lh28p fs16p">
    <div><h5 className="blog-head"><b>1. What is <code>boxed()</code>?</b></h5></div>
    <div className="mtop5p"><code><b>boxed()</b></code> is an intermediate operation used 
    to <b>convert a primitive stream</b> (like <code><b>IntStream</b></code>, <code><b>LongStream</b></code>, or <code><b>DoubleStream</b></code>) into 
    a <b>stream of their wrapper objects</b> (<code><b>Stream&lt;Integer&gt;</b></code>, <code><b>Stream&lt;Long&gt;</b></code>, <code><b>Stream&lt;Double&gt;</b></code>).</div>
    
    <div className="mtop5p"><h5 className="blog-head"><b>Syntax:</b></h5></div>
    <div className="mtop5p"><Highlight content={BOXED_EXAMPLE_PRIMITIVE} lang="java" /></div>

    <div className="mtop15p"><h5 className="blog-head"><b>2. Why use <code>boxed()</code>?</b></h5></div>
    <div className="mtop5p">Primitive streams (<code><b>IntStream</b></code>, <code><b>LongStream</b></code>, <code><b>DoubleStream</b></code>) are more 
        memory-efficient and provide specialized operations like <code><b>sum()</b></code>, <code><b>average()</b></code>, etc.</div>
    <div className="mtop5p">However, <b>some operations like</b> <code><b>collect()</b></code>, <code><b>map()</b></code> <b>(to objects), or using Collections require boxed types</b>, hence the need for <code><b>boxed()</b></code>.</div>

    <div className="mtop15p"><h5 className="blog-head"><b>3. Examples:</b></h5></div>
    <div className="mtop5p"><h5 className="blog-head"><b>Example #1: Convert <code>IntStream</code> to <code>List&lt;Integer&gt;</code></b></h5></div>
    <div className="mtop5p"><Highlight content={BOXED_EXAMPLE_CONVERT} lang="java" /></div>
    <div className="mtop5p"><b>Output:</b></div>
    <div className="mtop5p"><Highlight content={BOXED_OUTPUT_CONVERT} lang="java" /></div>
    <div className="mtop5p"><h5 className="blog-head"><b>Example #2: Using with Map or Custom Logic</b></h5></div>
    <div className="mtop5p"><Highlight content={BOXED_EXAMPLE_USING} lang="java" /></div>
    <div className="mtop5p"><b>Output:</b></div>
    <div className="mtop5p"><Highlight content={BOXED_OUTPUT_USING} lang="java" /></div>
 </div>);
};

export default Boxed;