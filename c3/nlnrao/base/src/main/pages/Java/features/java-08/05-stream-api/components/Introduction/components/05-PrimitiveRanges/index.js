import React from "react";
import { Highlight, Card } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const PrimitiveRanges = () =>{
 return (<div className="mtop5p">
    <div className="mtop5p">
            <div>Before Java 8, operations on primitives
                (like <code><b>int</b></code>, <code><b>long</b></code>, <code><b>double</b></code>) in 
                collections were:</div>
            <div>
                <ul>
                    <li className="mtop5p">Verbose</li>
                    <li className="mtop5p">Required <b>boxing/unboxing</b> to work 
                    with <code><b>Stream&lt;T&gt;</b></code> (since it only supports object types)</li>
                    <li className="mtop5p">Less performant for large data due to boxing overhead</li>
                </ul>
            </div>
            <hr/>
            <div className="mtop5p"><h5 className="blog-head"><b>Problem:</b></h5></div>
            <div className="mtop5p">
                <Highlight content={`Stream<Integer> intStream = Stream.of(1, 2, 3, 4);`} lang="java" />
            </div>
            <div>Each <code><b>int</b></code> is auto-boxed into <code><b>Integer</b></code>, which:</div>
            <div>
                <ul>
                    <li className="mtop5p">Increases memory usage</li>
                    <li className="mtop5p">Slows down performance</li>
                </ul>
            </div>
            <div className="mtop5p"><h5 className="blog-head"><b>Solution:</b></h5></div>
            <div className="mtop5p"><b>Java 8</b> introduced <b>primitive-specific stream types</b> in <code><b>java.util.stream</b></code>:</div>
            <div>
                <ul>
                    <li className="mtop5p"><code><b>IntStream</b></code> -  for <code><b>int</b></code></li>
                    <li className="mtop5p"><code><b>LongStream</b></code> - for <code><b>long</b></code></li>
                    <li className="mtop5p"><code><b>DoubleStream</b></code> - for <code><b>double</b></code></li>
                </ul>
            </div>
            <div>These types avoid boxing and offer methods suited for numeric computations.</div>
            <hr/>
            <div className="mtop15p"><h5 className="blog-head"><b>Primitive Stream Creation Methods – Summary Table</b></h5></div>
            <div className="mtop5p">
                <SimpleTable header={["Stream Type", "Creation Method", "Description", "Example"]} 
                        columns={[
                            [(<div><b>IntStream</b></div>), 
                            (<div><code><b>IntStream.of(int... values)</b></code></div>),
                            "Creates stream from given values",
                            (<div><code><b>IntStream.of(1, 2, 3)</b></code></div>)
                        ],
                        [
                            (<div></div>),
                            (<div><code><b>IntStream.range(start, end)</b></code></div>),
                            (<div>Stream of ints from <code><b>start</b></code> (inclusive) to <code><b>end</b></code> (exclusive)</div>),
                            (<div><code><b>IntStream.range(1, 5)</b></code> &#8594; 1, 2, 3, 4</div>)
                        ],
                        [
                            (<div></div>),
                            (<div><code><b>IntStream.rangeClosed(start, end)</b></code></div>),
                            (<div>Stream from <code><b>start</b></code> to <code><b>end</b></code> (inclusive)</div>),
                            (<div><code><b>IntStream.rangeClosed(1, 5)</b></code> &#8594; 1,2,3,4,5</div>)
                        ],
                        [
                            (<div></div>),
                            (<div><code><b>IntStream.iterate(seed, unaryOperator)</b></code></div>),
                            "Infinite stream with repeated application of operator",
                            (<div><code><b>IntStream.iterate(1, n &#8594; n + 1).limit(5)</b></code></div>)
                        ],
                        [
                            (<div></div>),
                            (<div><code><b>IntStream.generate(IntSupplier)</b></code></div>),
                            "Infinite stream using generator function",
                            (<div><code><b>IntStream.generate(() &#8594; 42).limit(3)</b></code></div>)
                        ],
                        [
                            (<div></div>),
                            (<div><code><b>IntStream.concat(IntStream a, IntStream b)</b></code></div>),
                            "Concatenates two IntStreams",
                            (<div><code><b>IntStream.concat(IntStream.of(1), IntStream.of(2))</b></code></div>)
                        ],
                        [
                            (<div></div>),
                            (<div><code><b>IntStream.empty()</b></code></div>),
                            "Returns an empty IntStream",
                            (<div><code><b>IntStream.empty()</b></code></div>)
                        ],
                        [
                            (<div><b>LongStream</b></div>),
                            (<div><code><b>LongStream.of(long... values)</b></code></div>),
                            "Creates stream from given long values",
                            (<div><code><b>LongStream.of(100L, 200L)</b></code></div>)
                        ],
                        [
                            (<div></div>),
                            (<div><code><b>LongStream.range(start, end)</b></code></div>),
                            (<div>Stream from <code><b>start</b></code> (inclusive) to <code><b>end</b></code> (exclusive)</div>),
                            (<div><code><b>LongStream.range(100, 105)</b></code> &#8594; 100 – 104</div>),
                        ],
                        [
                            (<div></div>),
                            (<div><code><b>LongStream.rangeClosed(start, end)</b></code></div>),
                            (<div>Stream from <code><b>start</b></code> to <code><b>end</b></code> inclusive</div>),
                            (<div><code><b>LongStream.rangeClosed(100, 105)</b></code> &#8594; 100 - 105</div>),
                        ],
                        [
                            (<div></div>),
                            (<div><code><b>LongStream.iterate(seed, unaryOperator)</b></code></div>),
                            "Infinite stream of long values",
                            (<div><code><b>LongStream.iterate(1, n &#8594; n + 1).limit(3)</b></code></div>),
                        ],
                        [
                            (<div></div>),
                            (<div><code><b>LongStream.generate(LongSupplier)</b></code></div>),
                            (<div>Infinite stream from generator</div>),
                            (<div><code><b>LongStream.generate(() &#8594; 1L).limit(2)</b></code></div>),
                        ],
                        [
                            (<div></div>),
                            (<div><code><b>LongStream.concat(LongStream a, LongStream b)</b></code></div>),
                            "Concatenates two LongStreams",
                            (<div><code><b>LongStream.concat(LongStream.of(1), LongStream.of(2))</b></code></div>),
                        ],
                        [
                            (<div></div>),
                            (<div><code><b>LongStream.empty()</b></code></div>),
                            "Returns an empty LongStream",
                            (<div><code><b>LongStream.empty()</b></code></div>),
                        ],
                        [
                            (<div><b>DoubleStream</b></div>),
                            (<div><code><b>DoubleStream.of(double... values)</b></code></div>),
                            "Creates stream from given double values",
                            (<div><code><b>DoubleStream.of(1.1, 2.2, 3.3)</b></code></div>),
                        ],
                        [
                            (<div></div>),
                            (<div><code><b>DoubleStream.iterate(seed, unaryOperator)</b></code></div>),
                            "Infinite stream from seed with operator",
                            (<div><code><b>DoubleStream.iterate(1.0, d &#8594; d + 0.5).limit(3)</b></code></div>),
                        ],
                        [
                            (<div></div>),
                            (<div><code><b>DoubleStream.generate(DoubleSupplier)</b></code></div>),
                            "Infinite stream from generator",
                            (<div><code><b>DoubleStream.generate(()  &#8594; Math.random()).limit(2)</b></code></div>),
                        ],
                        [
                            (<div></div>),
                            (<div><code><b>DoubleStream.concat(DoubleStream a, DoubleStream b)</b></code></div>),
                            "Concatenates two DoubleStreams",
                            (<div><code><b>DoubleStream.concat(DoubleStream.of(1.0), DoubleStream.of(2.0))</b></code></div>),
                        ],
                        [
                            (<div></div>),
                            (<div><code><b>DoubleStream.empty()</b></code></div>),
                            "Returns an empty DoubleStream",
                            (<div><code><b>DoubleStream.empty()</b></code></div>),
                        ]
                        ]} />
            </div>
            <div className="mtop5p"><h5 className="blog-head"><b>Note:</b></h5></div>
            <div className="mbot15p">
                <ul>
                    <li className="mtop5p"><code><b>DoubleStream</b></code> does not 
                    support <code><b>range()</b></code> or <code><b>rangeClosed()</b></code> (no fixed increment support).</li>
                    <li className="mtop5p"><code><b>generate()</b></code> and <code><b>iterate()</b></code> produce <b>infinite</b> streams; 
                    you must call <code><b>.limit(n)</b></code> to avoid infinite loops.</li>
                </ul>
            </div>
    </div>
 </div>);
};

export default PrimitiveRanges;