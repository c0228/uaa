import React from "react";
import { Highlight } from "e-ui-react";

const INTSTREAM_EXAMPLE_JAVA = `import java.util.stream.IntStream;

public class AsDoubleStreamExample1 {
    public static void main(String[] args) {
        IntStream.range(1, 4)     // 1, 2, 3
                 .asDoubleStream()
                 .map(d -> d / 2.0)
                 .forEach(System.out::println);
    }
}`;

const INTSTREAM_OUTPUT_JAVA = `0.5
1.0
1.5`;

const LONGSTREAM_EXAMPLE_JAVA = `import java.util.stream.LongStream;

public class AsDoubleStreamExample2 {
    public static void main(String[] args) {
        LongStream.of(100L, 200L, 300L)
                  .asDoubleStream()
                  .map(d -> d * 1.1)
                  .forEach(System.out::println);
    }
}`;

const LONGSTREAM_OUTPUT_JAVA = `110.0
220.00000000000003
330.0`;

const AsDoubleStream = () =>{
 return (<div className="mtop5p lh28p fs16p">
    <div><h5 className="blog-head"><b>1. What is <code>asDoubleStream()</code>?</b></h5></div>
    <div className="mtop5p"><code><b>asDoubleStream()</b></code> is an <b>intermediate operation</b> used 
    with <code><b>IntStream</b></code> or <code><b>LongStream</b></code> to convert their elements to a <code><b>DoubleStream</b></code>.</div>
    <div className="mtop5p"><h5 className="blog-head"><b>Syntax:</b></h5></div>
    <div className="mtop5p">For <code><b>IntStream</b></code>:</div>
    <div className="mtop5p"><Highlight content={`DoubleStream asDoubleStream()`} lang="java" /></div>
    <div className="mtop5p">For <code><b>LongStream</b></code>:</div>
    <div className="mtop5p"><Highlight content={`DoubleStream asDoubleStream()`} lang="java" /></div>

    <div className="mtop15p"><h5 className="blog-head"><b>2. When to Use?</b></h5></div>
    <div className="mtop5p">Use <code><b>asDoubleStream()</b></code> when:</div>
    <div>
        <ul>
            <li className="mtop5p">You're working with <code><b>IntStream</b></code> or <code><b>LongStream</b></code>, but you want 
            to <b>perform floating-point operations</b> (e.g., division, average, etc.).</li>
            <li className="mtop5p">You want to <b>promote primitive values to doubles</b> for further operations requiring higher precision.</li>
        </ul>
    </div>

    <div className="mtop15p"><h5 className="blog-head"><b>3. Examples:</b></h5></div>
    <div className="mtop15p"><h5 className="blog-head"><b>Example #1: From <code>IntStream</code></b></h5></div>
    <div className="mtop5p"><Highlight content={INTSTREAM_EXAMPLE_JAVA} lang="java" /></div>
    <div className="mtop5p"><b>Output:</b></div>
    <div className="mtop5p"><Highlight content={INTSTREAM_OUTPUT_JAVA} lang="java" /></div>
    <div className="mtop15p"><h5 className="blog-head"><b>Example #1: From <code>LongStream</code></b></h5></div>
    <div className="mtop5p"><Highlight content={LONGSTREAM_EXAMPLE_JAVA} lang="java" /></div>
    <div className="mtop5p"><b>Output:</b></div>
    <div className="mtop5p"><Highlight content={LONGSTREAM_OUTPUT_JAVA} lang="java" /></div>
 </div>);
};

export default AsDoubleStream;