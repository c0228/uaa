import React from "react";
import { Highlight } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const ITERATE_EXAMPLE_01 = `Stream.iterate(0, n -> n + 2)
      .limit(5)
      .forEach(System.out::println);
// Output: 0 2 4 6 8`;

const ITERATE_EXAMPLE_02 = `Stream.iterate(new int[]{0, 1}, a -> new int[]{a[1], a[0] + a[1]})
      .limit(10)
      .map(a -> a[0])
      .forEach(System.out::println);

// Output: 0 1 1 2 3 5 8 13 21 34`;

const ITERATE_EXAMPLE_03 = `Stream.iterate(LocalDate.now(), date -> date.plusDays(1))
      .limit(5)
      .forEach(System.out::println);`;

const GENERATE_EXAMPLE_01 = `Stream.generate(Math::random)
      .limit(5)
      .forEach(System.out::println);`;

const GENERATE_EXAMPLE_02 = `Stream.generate(() -> "Hello")
      .limit(3)
      .forEach(System.out::println);
// Output: Hello Hello Hello`;

const GENERATE_EXAMPLE_03 = `Stream.generate(UUID::randomUUID)
      .limit(2)
      .forEach(System.out::println);`;

const GENERATE_EXAMPLE_04 = `AtomicInteger counter = new AtomicInteger(1);

Stream.generate(() -> counter.getAndIncrement())
      .limit(5)
      .forEach(System.out::println);
// Output: 1 2 3 4 5`;


const StreamIterateGenerate = () =>{
 return (<div className="mtop5p">
    <div><code><b>Stream.iterate()</b></code> and <code><b>Stream.generate()</b></code> create <b>infinite streams</b>, and 
    they're commonly used when you need <b>repeated patterns</b>, <b>custom sequences</b>, or <b>lazy generation</b> of 
    elements.</div>
    <div className="mtop5p">
        <SimpleTable header={["Feature", "Stream.iterate()", "Stream.generate()"]} 
        columns={[
            [(<div><b>Type</b></div>), (<div>Deterministic, based on previous element</div>), (<div>Non-deterministic, based on supplier</div>)],
            [(<div><b>Parameters</b></div>), (<div><code><b>seed</b></code> <code><b>UnaryOperator</b></code></div>), (<div>Supplier</div>)],
            [(<div><b>Output</b></div>), (<div>Sequence computed by applying rule repeatedly</div>), (<div>Same value or computed anew each time</div>)],
            [(<div><b>Use Cases</b></div>), (<div>Counting, Fibonacci, time series</div>), (<div>Random numbers, constant values, UUIDs</div>)],
            [(<div><b>Infinite by default</b></div>), (<div>Yes (use <code><b>.limit()</b></code> to bound it)</div>), (<div>Yes (use <code><b>.limit()</b></code> to bound it)</div>)],
          ]} />
    </div>

    <div align="center" className="mtop15p"><h4 className="blog-head"><b><code>Stream.iterate()</code> – Explained</b></h4></div>
    <div className="mtop15p"><h5 className="blog-head"><b>Signature:</b></h5></div>
    <div className="mtop5p"><Highlight content={`static <T> Stream<T> iterate(T seed, UnaryOperator<T> f)`} lang="java" /></div>
    <div>
        <ul>
            <li className="mtop5p"><code><b>seed</b></code>: the <b>initial element</b></li>
            <li className="mtop5p"><code><b>f</b></code>: a function applied to the <b>previous element</b> to get the next</li>
        </ul>
    </div>
    <div className="mtop15p"><h5 className="blog-head"><b>How It Works?</b></h5></div>
    <div className="mtop5p"><Highlight content={`seed → f(seed) → f(f(seed)) → ...`} lang="java" /></div>
    <div className="mtop15p"><h5 className="blog-head"><b>Example #1: Generate even numbers</b></h5></div>
    <div className="mtop5p"><Highlight content={ITERATE_EXAMPLE_01} lang="java" /></div>
    <div className="mtop15p"><h5 className="blog-head"><b>Example #2: Fibonacci Series (using <code>map</code>)</b></h5></div>
    <div className="mtop5p"><Highlight content={ITERATE_EXAMPLE_02} lang="java" /></div>
    <div className="mtop15p"><h5 className="blog-head"><b>Example #3: Add Date Incrementally</b></h5></div>
    <div className="mtop5p"><Highlight content={ITERATE_EXAMPLE_03} lang="java" /></div>

    <div align="center" className="mtop15p"><h4 className="blog-head"><b><code>Stream.generate()</code> – Explained</b></h4></div>
    <div className="mtop15p"><h5 className="blog-head"><b>Signature:</b></h5></div>
    <div className="mtop5p"><Highlight content={`static <T> Stream<T> generate(Supplier<T> s)`} lang="java" /></div>
    <div>
        <ul>
            <li className="mtop5p"><code><b>Supplier</b></code> supplies each element <b>independently</b>.</li>
            <li className="mtop5p">Often used with <b>random values</b> or constant streams.</li>
        </ul>
    </div>
    <div className="mtop15p"><h5 className="blog-head"><b>Example #1: Generate 5 random numbers</b></h5></div>
    <div className="mtop5p"><Highlight content={GENERATE_EXAMPLE_01} lang="java" /></div>
    <div className="mtop15p"><h5 className="blog-head"><b>Example #2: Constant Value</b></h5></div>
    <div className="mtop5p"><Highlight content={GENERATE_EXAMPLE_02} lang="java" /></div>
    <div className="mtop15p"><h5 className="blog-head"><b>Example #3: Generate UUIDs</b></h5></div>
    <div className="mtop5p"><Highlight content={GENERATE_EXAMPLE_03} lang="java" /></div>
    <div className="mtop15p"><h5 className="blog-head"><b>Example #4: Use with AtomicInteger for counting</b></h5></div>
    <div className="mtop5p"><Highlight content={GENERATE_EXAMPLE_04} lang="java" /></div>

    <div className="mtop15p"><h5 className="blog-head"><b>Important Notes for Both</b></h5></div>
    <div className="mtop15p">
        <SimpleTable header={["Caution", "Explaination"]} 
                columns={[
                    ["Infinite by default", (<div>Always use <code><b>.limit(n)</b></code> unless you want to process infinitely</div>)],
                    ["Thread safety", (<div>Be careful using mutable state like counters — prefer <code><b>AtomicInteger</b></code></div>)],
                    ["Laziness", "Streams don’t compute anything until a terminal operation is called"]
                ]} />
    </div>

    <div className="mtop15p"><h5 className="blog-head"><b>When to Use What?</b></h5></div>
    <div className="mtop5p">
        <SimpleTable header={["Goal", "Recommended Method"]} 
                columns={[
                    ["Generate a growing sequence", (<div><code><b>Stream.iterate()</b></code></div>)],
                    ["Generate random/constant/new values", (<div><code><b>Stream.generate()</b></code></div>)],
                    ["Build Fibonacci or arithmetic sequences", (<div><code><b>Stream.iterate()</b></code></div>)],
                    ["Repeated strings, UUIDs, timestamps	", (<div><code><b>Stream.generate()</b></code></div>)]
                ]} />
    </div>
    <div className="mtop5p">
        <div>Both <code><b>Stream.iterate()</b></code> and <code><b>Stream.generate()</b></code> are:</div>
        <div>
            <ul>
                <li className="mtop5p">Useful for <b>lazy, infinite</b> data generation.</li>
                <li className="mtop5p">Can be <b>controlled using</b> <code><b>.limit()</b></code></li>
                <li className="mtop5p">Help with functional style constructs (no loops!)</li>
            </ul>
        </div>
        <div className="mbot15p">They are very helpful 
        in <b>tests</b>, <b>simulations</b>, <b>counters</b>, <b>timestamps</b>, <b>Fibonacci</b>, <b>infinite supplies</b> and 
        more.</div>
    </div>
 </div>);
};

export default StreamIterateGenerate;