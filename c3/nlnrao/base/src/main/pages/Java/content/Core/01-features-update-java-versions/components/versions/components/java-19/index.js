import React from "react";
import { Highlight, Accordian } from "e-ui-react";
import { BlogIndexHeader } from "@Components/blog-index-header/index.js";
import OrderList from "@Components/order-list/index.js";

const VIRTUAL_THREADS_JAVA = `try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {
    executor.submit(() -> System.out.println("Running in a virtual thread!"));
}`;

const STRUCTURED_CONCURRENCY_JAVA = `try (var scope = new StructuredTaskScope.ShutdownOnFailure()) {
    Future<String> task1 = scope.fork(() -> fetchData());
    Future<Integer> task2 = scope.fork(() -> computeData());
    scope.join();
    System.out.println(task1.resultNow() + " " + task2.resultNow());
}`;

const FOREIGN_FUNCTION_MEMORY_API = `try (MemorySegment segment = MemorySegment.allocateNative(100)) {
    segment.set(ValueLayout.JAVA_INT, 0, 42);
    int value = segment.get(ValueLayout.JAVA_INT, 0);
    System.out.println("Value: " + value);
}`;

const PATTERN_MATCHING_SWITCH = `static void process(Object obj) {
    switch (obj) {
        case Integer i -> System.out.println("Integer: " + i);
        case String s  -> System.out.println("String: " + s.toUpperCase());
        default        -> System.out.println("Unknown type");
    }
}`;

const VECTOR_API_JAVA = `VectorSpecies<Float> SPECIES = FloatVector.SPECIES_PREFERRED;
FloatVector v1 = FloatVector.fromArray(SPECIES, new float[]{1.0f, 2.0f, 3.0f, 4.0f}, 0);
FloatVector v2 = FloatVector.fromArray(SPECIES, new float[]{5.0f, 6.0f, 7.0f, 8.0f}, 0);
FloatVector result = v1.add(v2);
System.out.println(result);`;

const Java19 = () =>{
 const Features = () =>{
  return (<div>

    <div className="mtop10p padLeft5p">
        <BlogIndexHeader type="simple" index="1" title="Virtual Threads" />
        <OrderList data={[(<div className="mtop5p">Introduces lightweight threads to improve scalability.</div>),
            (<div>
                <div>Greatly reduces the cost of maintaining thousands of concurrent tasks.</div>
                <div className="mtop5p padLeft5p"><b>Example:</b></div>
                <Highlight content={VIRTUAL_THREADS_JAVA} lang="java" />
            </div>),
            (<div className="mtop5p">
                <div><b>Benefits:</b></div>
                <div>
                    <ul>
                        <li>Improves application throughput with millions of lightweight threads.</li>
                        <li>Reduces memory consumption compared to traditional platform threads.</li>
                    </ul>
                </div>
            </div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="2" title="Structured Concurrency" />
        <OrderList data={[(<div className="mtop5p">
                <div>Simplifies concurrent programming by managing multiple threads as a unit.</div>
                <div className="mtop5p padLeft5p"><b>Example:</b></div>
                <Highlight content={STRUCTURED_CONCURRENCY_JAVA} lang="java" />
            </div>),
            (<div className="mtop5p">
                <div><b>Benefits:</b></div>
                <div>
                    <ul>
                        <li>Reduces boilerplate in multi-threaded applications.</li>
                        <li>Helps manage parallel tasks effectively.</li>
                    </ul>
                </div>
            </div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="3" title="Foreign Function & Memory API" />
        <OrderList data={[(<div className="mtop5p">Improves Java’s ability to interact with native libraries.</div>),
            (<div className="mtop5p">
                <div>Eliminates the need for JNI (Java Native Interface).</div>
                <div className="mtop5p padLeft5p"><b>Example:</b></div>
                <Highlight content={FOREIGN_FUNCTION_MEMORY_API} lang="java" />
            </div>),
            (<div className="mtop5p">
                <div><b>Benefits:</b></div>
                <div>
                    <ul>
                        <li>More efficient than JNI for calling native code.</li>
                        <li>Reduces memory safety issues.</li>
                    </ul>
                </div>
            </div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="4" title="Pattern Matching for switch" />
        <OrderList data={[(<div className="mtop5p">
            <div>Enhances <code><b>switch</b></code> expressions with pattern matching capabilities.</div>
            <div className="padLeft5p mtop5p"><b>Example:</b></div>
            <Highlight content={PATTERN_MATCHING_SWITCH} lang="java" />
        </div>),
            (<div className="mtop5p">
                <div><b>Benefits:</b></div>
                <div>
                    <ul>
                        <li>Makes <code><b>switch</b></code> more powerful and readable.</li>
                        <li>Reduces the need for <code><b>if-else</b></code> chains.</li>
                    </ul>
                </div>
            </div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="5" title="Vector API" />
        <OrderList data={[(<div className="mtop5p">
                <div>Enhances performance for data processing and mathematical computations using vectorized operations.</div>
                <div className="mtop5p padLeft5p"><b>Example:</b></div>
                <Highlight content={VECTOR_API_JAVA} lang="java" />
            </div>),
            (<div className="mtop5p">
                <div><b>Benefits:</b></div>
                <div>
                    <ul>
                        <li>Provides significant performance improvements for computational-heavy applications.</li>
                    </ul>
                </div>
            </div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="6" title="Linux/RISC-V Port" />
        <OrderList data={[(<div className="mtop5p">Adds support for the RISC-V architecture on Linux.</div>),
            (<div className="mtop5p">Enables Java applications to run on energy-efficient RISC-V processors.</div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="7" title="Deprecations and Removals in Java 19" />
        <OrderList data={[(<div className="mtop5p">Finalization is deprecated (JEP 421) → Prepares for removal in future versions.</div>),
            (<div className="mtop5p">Legacy security manager is being phased out.</div>)]} />
    </div>

  </div>);
 };
 return (<div className="mtop15p">
     <div className="mtop15p"><h4><b>Java SE 19 (September, 2022):</b></h4></div>
     <div className="mtop15p">Java 19 was a <b>short-term release</b> focused on performance improvements, 
     preview features, and experimental APIs to enhance scalability, performance, and developer productivity.</div>
     <div className="mtop15p">
         <Accordian id="Java19" data={[{
                 id:"java19-features", 
                 title: (<div><b>FEATURES:</b></div>),
                 component:(<Features />)
             }]} />
     </div>
  </div>);
};

export default Java19;