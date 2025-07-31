import React from "react";
import { Highlight } from "e-ui-react";

const ASLONGSTREAM_EXAMPLE1_JAVA = `import java.util.stream.DoubleStream;
import java.util.stream.LongStream;

public class AsLongStreamExample {
    public static void main(String[] args) {
        DoubleStream.of(10.5, 20.9, 30.1)
                    .asLongStream()
                    .forEach(System.out::println);
    }
}`;

const ASLONGSTREAM_OUTPUT1_JAVA = `10
20
30`;

const ASLONGSTREAM_EXAMPLE2_JAVA = `DoubleStream employeeSalaries = DoubleStream.of(45000.99, 50000.25, 55000.75);
LongStream salaryIDs = employeeSalaries.asLongStream();  // truncates decimals`;

const AsLongStream = () =>{
 return (<div className="mtop5p lh28p fs16p">
    <div><h5 className="blog-head"><b>1. What is <code>asLongStream()</code>?</b></h5></div>
    <div className="mtop15p"><code><b>asLongStream()</b></code> is an <b>intermediate operation</b> that converts 
    a <code><b>DoubleStream</b></code> into a <code><b>LongStream</b></code> by <b>casting each</b> <code><b>double</b></code> <b>value to a</b> <code><b>long</b></code>.</div>
    <div className="mtop5p"><h5 className="blog-head"><b>Syntax:</b></h5></div>
    <div className="mtop5p"><Highlight content={`LongStream asLongStream()`} lang="java" /></div>

    <div><h5 className="blog-head"><b>2. When to Use <code>asLongStream()</code>?</b></h5></div>
    <div className="mtop15p">Use <code><b>asLongStream()</b></code> when:</div>
    <div>
        <ul>
            <li className="mtop5p">You're working with a <code><b>DoubleStream</b></code>, but your next operations or data structure 
            require <code><b>long</b></code> values.</li>
            <li className="mtop5p">You want to <b>convert decimal values to whole numbers</b> (by truncating the decimal part, i.e., not rounding).</li>
        </ul>
    </div>

    <div className="mtop15p"><h5 className="blog-head"><b>3. Examples:</b></h5></div>
    <div className="mtop5p"><h5 className="blog-head"><b>Example #1:</b></h5></div>
    <div className="mtop5p"><Highlight content={ASLONGSTREAM_EXAMPLE1_JAVA} lang="java" /></div>
    <div className="mtop5p"><b>Output:</b></div>
    <div className="mtop5p"><Highlight content={ASLONGSTREAM_OUTPUT1_JAVA} lang="java" /></div>
    <div className="mtop5p">All decimal points are <b>truncated</b>, not rounded.</div>
    <div className="mtop5p"><h5 className="blog-head"><b>Example #2:</b></h5></div>
    <div className="mtop5p">Suppose you're calculating salaries in <code><b>double</b></code> but need whole number employee IDs 
    for processing:</div>
    <div className="mtop5p"><Highlight content={ASLONGSTREAM_EXAMPLE2_JAVA} lang="java" /></div>
 </div>);
};

export default AsLongStream;