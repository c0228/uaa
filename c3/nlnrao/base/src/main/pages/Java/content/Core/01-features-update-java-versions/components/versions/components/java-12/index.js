import React from "react";
import { Highlight, Accordian } from "e-ui-react";
import { BlogIndexHeader } from "@Components/blog-index-header/index.js";
import OrderList from "@Components/order-list/index.js";

const SWITCH_JAVA12_BEFORE = `int number = 2;
String result;
switch (number) {
    case 1: result = "One"; break;
    case 2: result = "Two"; break;
    default: result = "Unknown"; break;
}`;

const SWITCH_JAVA12_AFTER = `int number = 2;
String result = switch (number) {
    case 1 -> "One";
    case 2 -> "Two";
    default -> "Unknown";
};
System.out.println(result);`;

const Java12 = () =>{

 const Features = () =>{
    return (<div>
        <div className="mtop10p padLeft5p">
        <BlogIndexHeader type="simple" index="1" title="Switch Expressions (Preview)" />
        <OrderList data={[(<div className="mtop5p">
                <div>Switch statements can now return values, making them more concise and readable.</div>
                <div className="mtop5p padLeft5p"><b>Example (Before Java 12):</b></div>
                <Highlight content={SWITCH_JAVA12_BEFORE} lang="java" />
                <div className="mtop5p padLeft5p"><b>Example (From Java 12):</b></div>
                <Highlight content={SWITCH_JAVA12_AFTER} lang="java" />
            </div>),
            (<div className="mtop5p">
                <div><b>Benefits:</b></div>
                <div>
                    <ul>
                        <li className="mtop5p">No need for <code><b>break</b></code> statements.</li>
                        <li className="mtop5p">More compact and readable.</li>
                        <li className="mtop5p"><code><b>switch</b></code> can now be an <b>expression</b> 
                            instead of a <b>statement</b>.</li>
                    </ul>
                </div>
            </div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="2" title="Default CDS Archives (Faster Startup Time)" />
        <OrderList data={[(<div className="mtop5p"><b>Class Data Sharing (CDS) is enabled by default</b>, 
            reducing startup time and memory footprint.</div>),
            (<div className="mtop5p">Previously, <b>CDS</b> had to be explicitly configured.</div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="3" title="Shenandoah GC (Low-Pause Time GC)" />
        <OrderList data={[(<div className="mtop5p">New experimental garbage collector (GC) designed for 
            low-pause time applications.</div>),
            (<div className="mtop5p">Better than G1 GC for applications needing ultra-low-latency.</div>),
            (<div className="mtop5p">
                <div>Enable it with:</div>
                <Highlight content={`java -XX:+UseShenandoahGC MyApplication`} lang="html" />
            </div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="4" title="Microbenchmark Suite" />
        <OrderList data={[(<div className="mtop5p">Introduced a <b>built-in benchmarking tool</b> for 
            testing Java performance.</div>),
            (<div className="mtop5p">Previously, developers had to use third-party libraries like 
            <code><b>JMH (Java Microbenchmark Harness)</b></code>.</div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="5" title="JVM Constants API" />
        <OrderList data={[(<div className="mtop5p">New API (<code><b>java.lang.invoke.constant</b></code>) 
            to work with class-file constants in a standard way.</div>),
            (<div className="mtop5p">Useful for framework developers and compiler optimizations.</div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="6" title="G1 Garbage Collector Improvements" />
        <OrderList data={[(<div className="mtop5p">Refined memory allocation and improved efficiency.</div>),
            (<div className="mtop5p">Now returns unused heap memory back to the operating system.</div>)]} />
    </div>

    </div>);
 };

 return (<div className="mtop15p">
    <div className="mtop15p"><h4><b>Java SE 12 (March, 2019):</b></h4><hr/></div>
    <div className="mtop15p"><b>Java 12</b> continued the <b>6-month release cycle</b>, introducing <b>new preview features</b>, 
        <b>performance improvements</b>, and <b>garbage collection enhancements</b>. This version <b>focused on internal 
        optimizations</b> rather than major language changes.
    </div>
    <div className="mtop15p">
        <Accordian id="Java12" data={[{
            id:"java12-features", 
            title: (<div><b>FEATURES:</b></div>),
            component:(<Features />)
        }]} />
    </div>
 </div>);
};

export default Java12;