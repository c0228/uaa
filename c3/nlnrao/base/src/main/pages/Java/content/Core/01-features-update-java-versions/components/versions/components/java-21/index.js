import React from "react";
import { Highlight, Accordian } from "e-ui-react";
import { BlogIndexHeader } from "@Components/blog-index-header/index.js";
import OrderList from "@Components/order-list/index.js";

const VIRTUAL_THREADS_JAVA = `ExecutorService executor = Executors.newVirtualThreadPerTaskExecutor();
executor.submit(() -> System.out.println("Running in a virtual thread!"));
executor.shutdown();`;

const SEQ_COLLECTIONS_JAVA = `SequencedCollection<String> list = new ArrayList<>(List.of("A", "B", "C"));
System.out.println(list.getFirst()); // Output: A
System.out.println(list.getLast());  // Output: C`;

const RECORD_PATTERN_JAVA = `record Point(int x, int y) {}

static void process(Object obj) {
    if (obj instanceof Point(int x, int y)) {
        System.out.println("X: " + x + ", Y: " + y);
    }
}`;

const PATTERN_MATCHING_JAVA = `static void process(Object obj) {
    switch (obj) {
        case Integer i -> System.out.println("Integer: " + i);
        case String s  -> System.out.println("String: " + s.toUpperCase());
        default        -> System.out.println("Unknown type");
    }
}`;

const UNNAMED_CLASSES_MAIN = `void main() {
    System.out.println("Hello, Java 21!");
}`;

const STRING_TEMPLATES_JAVA = `String name = "Alice";
String message = STR."Hello, \{name}!";
System.out.println(message); // Output: Hello, Alice!`;

const SCOPED_VALUES_JAVA = `static final ScopedValue<String> USER_ID = ScopedValue.newInstance();

void process() {
    ScopedValue.where(USER_ID, "12345").run(() -> {
        System.out.println("User: " + USER_ID.get());
    });
}`;

const FOREIGN_FUNCTION_MEMORY = `try (Arena arena = Arena.ofConfined()) {
    MemorySegment segment = arena.allocate(100);
}`;

const Java21 = () =>{
 const Features = () =>{
  return (<div>

    <div className="mtop10p padLeft5p">
        <BlogIndexHeader type="simple" index="1" title="Virtual Threads (Final)" />
        <OrderList data={[(<div className="mtop5p">Enhances concurrency by enabling lightweight threads.</div>),
            (<div className="mtop5p">Finalized after previous previews in Java 19 and 20.</div>),
            (<div className="mtop5p">
                <div>Massively reduces thread management overhead.</div>
                <div className="mtop5p padLeft5p"><b>Example:</b></div>
                <Highlight content={VIRTUAL_THREADS_JAVA} lang="java" />
            </div>),
            (<div className="mtop5p">
                <div><b>Benefits:</b></div>
                <div>
                    <ul>
                        <li>Handles millions of threads efficiently.</li>
                        <li>Simplifies scalable concurrent applications.</li>
                    </ul>
                </div>
            </div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="2" title="Sequenced Collections" />
        <OrderList data={[(<div className="mtop5p">Introduces new interfaces: <code><b>SequencedCollection</b></code>, 
            <code><b>SequencedSet</b></code>, <code><b>SequencedMap</b></code></div>),
            (<div className="mtop5p">
                <div>Provides a standard way to access elements in first/last order.</div>
                <div className="mtop5p padLeft5p"><b>Example:</b></div>
                <Highlight content={SEQ_COLLECTIONS_JAVA} lang="java" />
            </div>),
            (<div className="mtop5p">
                <div><b>Benefits:</b></div>
                <div>
                    <ul>
                        <li>Eliminates the need for custom implementations for ordered collections.</li>
                    </ul>
                </div>
            </div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="3" title="Record Patterns (Final) " />
        <OrderList data={[(<div className="mtop5p">
                <div>Enhances pattern matching by allowing deeper deconstruction of records.</div>
                <div className="padLeft5p mtop5p"><b>Example:</b></div>
                <Highlight content={RECORD_PATTERN_JAVA} lang="java" />
            </div>),
            (<div className="mtop5p">
                <div><b>Benefits:</b></div>
                <div>
                    <ul>
                        <li>Improves readability and reduces boilerplate code.</li>
                    </ul>
                </div>
            </div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="4" title="Pattern Matching for switch (Final)" />
        <OrderList data={[(<div className="mtop5p">
                <div>Makes <code><b>switch</b></code> more expressive with pattern matching.</div>
                <div className="padLeft5p mtop5p"><b>Example:</b></div>
                <Highlight content={PATTERN_MATCHING_JAVA} lang="java" />
            </div>),
            (<div className="mtop5p">
                <div><b>Benefits:</b></div>
                <div>
                    <ul>
                        <li>More concise and expressive <code><b>switch</b></code> expressions.</li>
                    </ul>
                </div>
            </div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="5" title="Unnamed Classes & Instance Main Methods (Preview)" />
        <OrderList data={[(<div className="mtop5p">Simplifies Java syntax for beginners and small scripts.</div>),
            (<div className="mtop5p">
                <div>Allows <code><b>main</b></code> method without a class declaration.</div>
                <div className="mtop5p padLeft5p"><b>Example:</b></div>
                <Highlight content={UNNAMED_CLASSES_MAIN} lang="java" />
            </div>),
            (<div className="mtop5p">
                <div><b>Benefits:</b></div>
                <div>
                    <ul>
                        <li>Reduces verbosity in simple Java programs.</li>
                    </ul>
                </div>
            </div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="6" title="String Templates (Preview)" />
        <OrderList data={[(<div className="mtop5p">
                <div>Allows embedded expressions inside strings.</div>
                <div className="mtop5p padLeft5p"><b>Example:</b></div>
                <Highlight content={STRING_TEMPLATES_JAVA} lang="java" />
            </div>),
                (<div className="mtop5p">
                    <div><b>Benefits:</b></div>
                    <div>
                        <ul>
                            <li>Safer and more readable than string concatenation.</li>
                        </ul>
                    </div>
                </div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="7" title="Scoped Values (Preview)" />
        <OrderList data={[(<div className="mtop5p">
                <div>Provides a lightweight alternative to ThreadLocal.</div>
                <div className="padLeft5p mtop5p"><b>Example:</b></div>
                <Highlight content={SCOPED_VALUES_JAVA} lang="java" />
            </div>),
                (<div className="mtop5p">
                    <div><b>Benefits:</b></div>
                    <div>
                        <ul>
                            <li>More efficient and safer state-sharing across threads.</li>
                        </ul>
                    </div>
                </div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="8" title="Foreign Function & Memory API (Final)" />
        <OrderList data={[(<div className="mtop5p">
                <div>Simplifies interaction with native code without JNI.</div>
                <div className="mtop5p padLeft5p"><b>Example:</b></div>
                <Highlight content={FOREIGN_FUNCTION_MEMORY} lang="java" />
            </div>),
                (<div className="mtop5p">
                    <div><b>Benefits:</b></div>
                    <div>
                        <ul>
                            <li>Safer and more efficient memory access.</li>
                        </ul>
                    </div>
                </div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="9" title="Generational ZGC (Final)" />
        <OrderList data={[(<div className="mtop5p">Improves the Z Garbage Collector by adding generational support.</div>),
                (<div className="mtop5p">Reduces pause times and improves efficiency.</div>)]} />
    </div>

    <div className="mtop15p mbot15p padLeft5p">
        <BlogIndexHeader type="simple" index="10" title="Key Security Enhancements" />
        <OrderList data={[(<div className="mtop5p">Stronger cryptographic algorithms.</div>),
            (<div className="mtop5p">TLS 1.3 improvements.</div>),
            (<div className="mtop5p">More secure random number generation.</div>)]} />
    </div>

    <div align="center" className="mtop15p"><h4><b>Summary of Java 21</b></h4></div>

    <div className="mtop15p table-responsive">
        <table className="table">
            <thead>
                <tr>
                    <td><b>Feature</b></td>
                    <td><b>Status</b></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Virtual Threads</td>
                    <td>Final</td>
                </tr>
                <tr>
                    <td>Sequenced Collections</td>
                    <td>Final</td>
                </tr>
                <tr>
                    <td>Record Patterns</td>
                    <td>Final</td>
                </tr>
                <tr>
                    <td>Pattern Matching for <code><b>switch</b></code></td>
                    <td>Final</td>
                </tr>
                <tr>
                    <td>Unnamed Classes & Instance Main Methods</td>
                    <td>Preview</td>
                </tr>
                <tr>
                    <td>String Templates</td>
                    <td>Preview</td>
                </tr>
                <tr>
                    <td>Scoped Values</td>
                    <td>Preview</td>
                </tr>
                <tr>
                    <td>Foreign Function & Memory API</td>
                    <td>Final</td>
                </tr>
                <tr>
                    <td>Generational ZGC</td>
                    <td>Final</td>
                </tr>
            </tbody>
        </table>
    </div>

  </div>);
 };
 return (<div className="mtop15p">
     <div className="mtop15p"><h4><b>Java SE 21 (September, 2023):</b></h4></div>
     <div className="mtop15p">Java 21 is a <b>Long-Term Support (LTS)</b> release, meaning it will receive updates for 
     several years. This version introduces 15 major features, improving performance, security, and developer productivity.
     </div>
     <div className="mtop15p">
         <Accordian id="Java21" data={[{
                 id:"java21-features", 
                 title: (<div><b>FEATURES:</b></div>),
                 component:(<Features />)
             }]} />
     </div>
  </div>);
};

export default Java21;