import React from "react";
import { Highlight, Accordian } from "e-ui-react";
import { BlogIndexHeader } from "@Components/blog-index-header/index.js";
import OrderList from "@Components/order-list/index.js";

const REGULARCLASS_BEFORE_JAVA14 = `class Person {
    private final String name;
    private final int age;

    Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() { return name; }
    public int getAge() { return age; }

    @Override
    public String toString() {
        return "Person{name='" + name + "', age=" + age + "}";
    }
}
`;

const REGULARCLASS_FROM_JAVA14 = `record Person(String name, int age) {}`;

const INSTANCEOF_BEFORE_JAVA14 = `if (obj instanceof String) {
    String str = (String) obj;
    System.out.println(str.length());
}`;

const PATTERNMATCH_FROM_JAVA14 = `if (obj instanceof String str) {
    System.out.println(str.length());
}`;

const SWITCH_EXPRESSION_JAVA14 = `int day = 3;
String dayType = switch (day) {
    case 1, 7 -> "Weekend";
    case 2, 3, 4, 5, 6 -> "Weekday";
    default -> throw new IllegalArgumentException("Invalid day");
};
System.out.println(dayType);`;

const NULLPOINTER_BEFORE_JAVA14 = `String text = null;
int length = text.length();  // Throws NullPointerException`;

const GENERICERROR_BEFORE_JAVA14 = `Exception in thread "main" java.lang.NullPointerException`;

const DETAILEDMSG_BEFORE_JAVA14 = `Exception in thread "main" java.lang.NullPointerException:
Cannot invoke "String.length()" because "text" is null`;

const TEXTBLOCKS_STANDARD_FEATURE = `String html = """
    <html>
        <body>
            <h1>Hello, World!</h1>
        </body>
    </html>
    """;
System.out.println(html);`;

const JFR_EVENT_STREAMING = `try (var stream = FlightRecorder.startStreaming()) {
    stream.onEvent("jdk.GarbageCollection", event -> 
        System.out.println("GC event: " + event));
}`;

const Java14 = () =>{
 const Features = () =>{
  return (<div>

    <div className="mtop10p padLeft5p">
        <BlogIndexHeader type="simple" index="1" title="Records (Preview)" />
        <OrderList data={[(<div className="mtop5p">Introduces a new way to create immutable data objects.</div>),
                (<div className="mtop5p">
                    <div>Eliminates boilerplate code for getter methods, constructors, <code><b>equals()</b></code>, 
                        <code><b>hashCode()</b></code>, and <code><b>toString()</b></code>.</div>
                    <div className="mtop5p padLeft5p"><b>Example (Before Java 14 – Using a Regular Class):</b></div>
                    <Highlight content={REGULARCLASS_BEFORE_JAVA14} lang="java" />
                    <div className="mtop5p padLeft5p"><b>Example (From Java 14 – Using Records):</b></div>
                    <Highlight content={REGULARCLASS_FROM_JAVA14} lang="java" />
                </div>),
                (<div className="mtop5p">
                    <div><b>Benefits:</b></div>
                    <div>
                        <ul>
                            <li>Less boilerplate code.</li>
                            <li>Auto-generated: <code><b>equals()</b></code>, <code><b>hashCode()</b></code> and 
                                <code><b>toString()</b></code>.</li>
                            <li>Immutable by default.</li>
                        </ul>
                    </div>
                </div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="2" title="Pattern Matching for instanceof (Preview)" />
        <OrderList data={[(<div className="mtop5p">
                    <div>Eliminates the need for explicit type casting after 
                        <code><b>instanceof</b></code> checks.</div>
                    <div className="mtop5p padLeft5p"><b>Example (Before Java 14):</b></div>
                    <Highlight content={INSTANCEOF_BEFORE_JAVA14} lang="java" />
                    <div className="mtop5p padLeft5p"><b>Example (From Java 14 - Using Pattern Matching):</b></div>
                    <Highlight content={PATTERNMATCH_FROM_JAVA14} lang="java" />
                </div>),
                (<div className="mtop5p">
                    <div><b>Benefits:</b></div>
                    <div>
                        <ul>
                            <li>Reduces redundant type casting.</li>
                            <li>Improves readability and performance.</li>
                        </ul>
                    </div>
                </div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="3" title="Switch Expressions (Standard Feature)" />
        <OrderList data={[(<div className="mtop5p">Finalized the switch expression (introduced in Java 12 and 13).</div>),
                (<div className="mtop5p">
                    <div>Now, <code><b>switch</b></code> can be used as an expression with 
                    <code><b>yield</b></code> for returning values.</div>
                    <div className="mtop5p padLeft5p"><b>Example:</b></div>
                    <Highlight content={SWITCH_EXPRESSION_JAVA14} lang="java" />
                </div>),
                (<div className="mtop5p">
                    <div><b>Benefits:</b></div>
                    <div>
                        <ul>
                            <li>More concise and expressive.</li>
                            <li>No fall-through issues.</li>
                        </ul>
                    </div>
                </div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="4" title="Helpful NullPointerException Messages" />
        <OrderList data={[(<div className="mtop5p">
                <div><b>Java 14</b> introduces detailed error messages when 
                    <code><b>NullPointerException</b></code> (NPE) occurs.</div>
            </div>),
            (<div className="mtop5p">
                <div>Helps in debugging by pinpointing exactly where the 
                    <code><b>null</b></code> reference is.</div>
                <div className="mtop5p padLeft5p"><b>Example:</b></div>
                <Highlight content={NULLPOINTER_BEFORE_JAVA14} lang="java" />
                <div className="mtop5p padLeft5p"><b>Before Java 14 (Generic Error Message):</b></div>
                <Highlight content={GENERICERROR_BEFORE_JAVA14} lang="java" />
                <div className="mtop5p padLeft5p"><b>After Java 14 (Detailed Message):</b></div>
                <Highlight content={DETAILEDMSG_BEFORE_JAVA14} lang="java" />
            </div>),
            (<div className="mtop5p">
                <div><b>Benefits:</b></div>
                <div>
                    <ul>
                        <li>Easier debugging.</li>
                        <li>Faster resolution of <code><b>NullPointerException</b></code> issues.</li>
                    </ul>
                </div>
            </div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="5" title="Text Blocks (Standard Feature)" />
        <OrderList data={[(<div className="mtop5p">Finalized after being in preview in Java 13.</div>),
                (<div className="mtop5p">
                    <div>Allows multi-line strings without escape sequences.</div>
                    <div className="padLeft5p"><b>Example:</b></div>
                    <Highlight content={TEXTBLOCKS_STANDARD_FEATURE} lang="java" />
                </div>),
                (<div>
                    <div><b>Benefits:</b></div>
                    <div>
                        <ul>
                            <li>No need for explicit newlines (<code><b>\n</b></code>).</li>
                            <li>Preserves formatting naturally.</li>
                        </ul>
                    </div>
                </div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="6" title="Foreign-Memory Access API (Incubator)" />
        <OrderList data={[(<div className="mtop5p">Introduced as an incubator feature.</div>),
            (<div className="mtop5p">Allows Java programs to access native memory outside the Java heap efficiently.</div>),
            (<div className="mtop5p">Useful for high-performance applications like databases and machine learning frameworks.</div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="7" title="JFR Event Streaming (Performance Monitoring)" />
        <OrderList data={[(<div className="mtop5p">Java Flight Recorder (JFR) now supports real-time event streaming.</div>),
            (<div className="mtop5p">
                <div>Allows applications to monitor and analyze performance without affecting execution.</div>
                <div className="mtop5p padLeft5p"><b>Example:</b></div>
                <Highlight content={JFR_EVENT_STREAMING} lang="java" />
            </div>),
                (<div className="mtop5p">
                    <div><b>Benefits:</b></div>
                    <div>
                        <ul>
                            <li>Real-time insights into JVM performance.</li>
                            <li>Helps in diagnosing memory issues dynamically.</li>
                        </ul>
                    </div>
                </div>)]} />
    </div>

  </div>);
 };
 return (<div className="mtop15p">
    <div className="mtop15p"><h4><b>Java SE 14 (March, 2020):</b></h4></div>
    <div className="mtop15p"><b>Java 14</b> introduced <b>several preview language features</b>, <b>performance improvements</b>, 
        and <b>new APIs</b>, enhancing <b>developer productivity</b>, <b>code readability</b>, and <b>memory management</b>.</div>
    <div className="mtop15p">
        <Accordian id="Java14" data={[{
                id:"java14-features", 
                title: (<div><b>FEATURES:</b></div>),
                component:(<Features />)
            }]} />
    </div>
 </div>);
};

export default Java14;