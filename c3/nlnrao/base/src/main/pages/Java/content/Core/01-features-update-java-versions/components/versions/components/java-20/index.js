import React from "react";
import { Highlight, Accordian } from "e-ui-react";
import { BlogIndexHeader } from "@Components/blog-index-header/index.js";
import OrderList from "@Components/order-list/index.js";

const VIRTUAL_THREADS_JAVA = `try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {
    executor.submit(() -> System.out.println("Running in a virtual thread!"));
}`;

const STRUCTURAL_CONCURRENCY_JAVA = `try (var scope = new StructuredTaskScope.ShutdownOnFailure()) {
    Future<String> task1 = scope.fork(() -> fetchData());
    Future<Integer> task2 = scope.fork(() -> computeData());
    scope.join();
    System.out.println(task1.resultNow() + " " + task2.resultNow());
}`;

const RECORD_PATTERN_JAVA = `record Point(int x, int y) {}

static void printCoordinates(Object obj) {
    if (obj instanceof Point(int x, int y)) {
        System.out.println("Coordinates: " + x + ", " + y);
    }
}`;

const FOREIGN_FUNCTION_MEMORY = `try (MemorySegment segment = MemorySegment.allocateNative(100)) {
    segment.set(ValueLayout.JAVA_INT, 0, 42);
    int value = segment.get(ValueLayout.JAVA_INT, 0);
    System.out.println("Value: " + value);
}`;

const PATTERN_MATCHING_SWITCHING = `static void process(Object obj) {
    switch (obj) {
        case Integer i -> System.out.println("Integer: " + i);
        case String s  -> System.out.println("String: " + s.toUpperCase());
        default        -> System.out.println("Unknown type");
    }
}`;

const SCOPED_VALUES_JAVA = `static final ScopedValue<String> USER_ID = ScopedValue.newInstance();

static void processRequest() {
    ScopedValue.where(USER_ID, "12345").run(() -> {
        System.out.println("Processing user: " + USER_ID.get());
    });
}`;

const Java20 = () =>{
 const Features = () =>{
  return (<div>

    <div className="mtop10p padLeft5p">
        <BlogIndexHeader type="simple" index="1" title="Virtual Threads (Second Preview)" />
        <OrderList data={[(<div className="mtop5p">Enhances lightweight virtual threads from Java 19.</div>),
            (<div className="mtop5p">
                <div>Improves thread scalability and performance for concurrent applications.</div>
                <Highlight content={VIRTUAL_THREADS_JAVA} lang="java" />
            </div>),
            (<div>
                <div><b>Benefits:</b></div>
                <div>
                    <ul>
                        <li>Scales better than traditional threads.</li>
                        <li>Reduces thread creation overhead.</li>
                    </ul>
                </div>
            </div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="2" title="Structured Concurrency (Second Incubator)" />
        <OrderList data={[(<div className="mtop5p">
                <div>Simplifies handling multiple threads as a single unit.</div>
                <div className="mtop5p padLeft5p"><b>Example:</b></div>
                <Highlight content={STRUCTURAL_CONCURRENCY_JAVA} lang="java" />
            </div>),
            (<div className="mtop5p">
                <div><b>Benefits:</b></div>
                <div>
                    <ul>
                        <li>Makes multithreading more predictable.</li>
                        <li>Handles failures in parallel tasks better.</li>
                    </ul>
                </div>
            </div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="3" title="Record Patterns (Second Preview)" />
        <OrderList data={[(<div className="mtop5p">
            <div>Enhances pattern matching to work with record types.</div>
            <div className="padLeft5p mtop5p"><b>Example:</b></div>
            <Highlight content={RECORD_PATTERN_JAVA} lang="java" />
        </div>),
            (<div className="mtop5p">
                <div><b>Benefits:</b></div>
                <div>
                    <ul>
                        <li>Simplifies pattern matching for immutable data.</li>
                    </ul>
                </div>
            </div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="4" title="Foreign Function & Memory API (Third Preview)" />
        <OrderList data={[(<div className="mtop5p">
                <div>Improves Java's ability to call native code without JNI.</div>
                <div className="mtop5p padLeft5p"><b>Example:</b></div>
                <Highlight content={FOREIGN_FUNCTION_MEMORY} lang="java" />
            </div>),
            (<div className="mtop5p">
                <div><b>Benefits:</b></div>
                <div>
                    <ul>
                        <li>More efficient than JNI for interacting with native code.</li>
                        <li>Improves security and performance.</li>
                    </ul>
                </div>
            </div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="5" title="Pattern Matching for switch (Fourth Preview)" />
        <OrderList data={[(<div className="mtop5p">
                <div>Further enhances <code><b>switch</b></code> expressions with advanced pattern matching.</div>
                <div className="mtop5p padLeft5p"><b>Example:</b></div>
                <Highlight content={PATTERN_MATCHING_SWITCHING} lang="java" />
            </div>),
            (<div className="mtop5p">
                <div><b>Benefits:</b></div>
                <div>
                    <ul>
                        <li>Makes <code><b>switch</b></code> statements more readable.</li>
                        <li>Reduces repetitive <code><b>if-else</b></code> checks.</li>
                    </ul>
                </div>
            </div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="6" title="Scoped Values (Incubator)" />
        <OrderList data={[(<div className="mtop5p">
                <div>Provides immutable, thread-local variables that can be shared in a controlled way.</div>
                <div className="padLeft5p mtop5p"><b>Example:</b></div>
                <Highlight content={SCOPED_VALUES_JAVA} lang="java" />
            </div>),
            (<div className="mtop5p">
                <div><b>Benefits:</b></div>
                <div>
                    <ul>
                        <li>More efficient than <code><b>ThreadLocal</b></code>.</li>
                        <li>Simplifies state-sharing across threads.</li>
                    </ul>
                </div>
            </div>)]} />
    </div>

  </div>);
 };
 return (<div className="mtop15p">
     <div className="mtop15p"><h4><b>Java SE 20 (March, 2023):</b></h4></div>
     <div className="mtop15p">Java 20 is a <b>short-term release</b> with six preview/incubating features aimed at improving 
        performance, concurrency, and memory management.</div>
     <div className="mtop15p">
         <Accordian id="Java20" data={[{
                 id:"java20-features", 
                 title: (<div><b>FEATURES:</b></div>),
                 component:(<Features />)
             }]} />
     </div>
  </div>);
};

export default Java20;