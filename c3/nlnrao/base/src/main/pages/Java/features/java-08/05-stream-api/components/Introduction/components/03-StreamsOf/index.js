import React from "react";
import { Highlight } from "e-ui-react";

const StreamsOf = () =>{
 return (<div className="mtop5p">
    <div><code><b>Stream.of()</b></code> is a <b>static factory method</b> introduced in <b>Java 8</b> to create 
    a <b>Stream</b> from a <b>fixed set of elements</b> (varargs).</div>
    <div className="mtop15p">It is part of the <code><b>java.util.stream.Stream</b></code> interface and is often used
     when you already have elements (or values) and want to 
     apply <b>stream operations</b> (like <code><b>filter</b></code>, <code><b>map</b></code>, <code><b>reduce</b></code>, etc.).</div>
    
    <div className="mtop15p"><h5 className="blog-head"><b>Method Signature</b></h5></div>
    <div className="mtop5p"><Highlight content={`static <T> Stream<T> of(T... values)`} lang="java" /></div>
    <div className="mtop15p">
        <ul>
            <li>It accepts <b>varargs</b> of type <code><b>T</b></code> (i.e., variable number of arguments).</li>
            <li className="mtop5p">It returns a <code><b>Stream&lt;T&gt;</b></code> that contains the supplied values.</li>
        </ul>
    </div>

    <div className="mtop5p"><h5 className="blog-head"><b>Example</b></h5></div>
    <div className="mtop5p">
        <Highlight content={`Stream<String> languages = Stream.of("Java", "Python", "Go", "Rust");`} lang="java" />
    </div>

    <div className="mtop15p"><h5 className="blog-head"><b>When to Use <code>Stream.of()</code></b></h5></div>
    <div className="mtop15p">
        <div>Use it when:</div>
        <div>
            <ul>
                <li className="mtop5p">You have <b>fixed number of elements</b> and want to convert them into a stream.</li>
                <li className="mtop5p">You want to <b>quickly test</b> stream operations 
                (like <code><b>map</b></code>, <code><b>filter</b></code>, <code><b>reduce</b></code>, etc.).</li>
                <li className="mtop5p">You want to perform operations on <b>primitive values</b>, <b>objects</b>, or <b>arrays</b>.</li>
            </ul>
        </div>
    </div>

    <div className="mtop15p"><h5 className="blog-head"><b>Primitive Stream Variants</b></h5></div>
    <div className="mtop5p">
        <ul>
            <li>
                <div><code><b>IntStream.of(...)</b></code></div>
                <div className="mtop5p">
                    <Highlight content={`IntStream intStream = IntStream.of(1, 2, 3, 4);`} lang="java" />
                </div>
            </li>
            <li className="mtop5p">
                <div><code><b>LongStream.of(...)</b></code></div>
                <div className="mtop5p">
                    <Highlight content={`LongStream intStream = LongStream.of(1, 2, 3, 4);`} lang="java" />
                </div>
            </li>
            <li className="mtop5p">
                <div><code><b>DoubleStream.of(...)</b></code></div>
                <div className="mtop5p">
                    <Highlight content={`DoubleStream intStream = DoubleStream.of(1, 2, 3, 4);`} lang="java" />
                </div>
            </li>
        </ul>
    </div>
 </div>);
};

export default StreamsOf;