import React from "react";
import { Highlight, Accordian } from "e-ui-react";
import { BlogIndexHeader } from "@MainComponents/blog-index-header/index.js";
import OrderList from "@MainComponents/order-list/index.js";

const PATTERN_MATCH_FINALIZED = `if (obj instanceof String str) {
    System.out.println(str.toUpperCase()); // No explicit casting required
}`;

const SEALED_CLASSES_PREVIEW = `sealed class Animal permits Dog, Cat {}

final class Dog extends Animal {}
final class Cat extends Animal {}
`;

const Java16 = () =>{
 const Features = () =>{
   return (<div>

    <div className="mtop10p padLeft5p">
        <BlogIndexHeader type="simple" index="1" title="Records (Finalized)" />
        <OrderList data={[(<div className="mtop5p">Records were introduced as a preview in Java 14 & 15.</div>),
            (<div className="mtop5p">Now fully integrated in Java 16.</div>),
            (<div className="mtop5p">
                <div className="padLeft5p">Simplifies the creation of immutable data-holding classes.</div>
                <Highlight content={`public record Person(String name, int age) {}`} lang="java" />
            </div>),
            (<div className="mtop5p">
                <div><b>Benefits:</b></div>
                <div>
                    <ul>
                        <li>Reduces boilerplate code.</li>
                        <li>Automatically provides <code><b>equals()</b></code>, <code><b>hashCode()</b></code> and 
                            <code><b>toString()</b></code>.</li>
                    </ul>
                </div>
            </div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="2" title="Pattern Matching for instanceof (Finalized)" />
        <OrderList data={[(<div className="mtop5p">
                <div className="padLeft5p">Simplifies type checks and eliminates unnecessary casting.</div>
                <Highlight content={PATTERN_MATCH_FINALIZED} lang="java" />
            </div>),
            (<div className="mtop5p">
                <div><b>Benefits:</b></div>
                <div>
                    <ul>
                        <li>Improves code readability and conciseness.</li>
                        <li>Eliminates redundant type casting.</li>
                    </ul>
                </div>
            </div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="3" title="Sealed Classes (Second Preview)" />
        <OrderList data={[(<div className="mtop5p">Refines the concept introduced in Java 15.</div>),
            (<div className="mtop5p">
                <div>Restricts which classes can extend or implement an interface.</div>
                <Highlight content={SEALED_CLASSES_PREVIEW} lang="java" />
            </div>),
            (<div className="mtop5p">
                <div><b>Benefits:</b></div>
                <div>
                    <ul>
                        <li>Provides better control over class hierarchies.</li>
                        <li>Prevents unwanted subclassing.</li>
                    </ul>
                </div>
            </div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="4" title="Strongly Encapsulated JDK Internals" />
        <OrderList data={[(<div className="mtop5p">Encapsulation of JDK internals, making them inaccessible via reflection.</div>),
            (<div className="mtop5p">Reduces security risks.</div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="5" title="Foreign Memory Access API (Third Incubator)" />
        <OrderList data={[(<div className="mtop5p">Allows Java programs to access native memory outside the JVM.</div>),
            (<div className="mtop5p">Useful for high-performance applications.</div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="6" title="Vector API (Incubator)" />
        <OrderList data={[(<div className="mtop5p">Introduces an API for performing vector computations.</div>),
            (<div className="mtop5p">Improves performance in data processing and machine learning applications.</div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="7" title="Unix-Domain Socket Support for Windows" />
        <OrderList data={[(<div className="mtop5p">Windows now supports Unix-domain sockets, improving compatibility.</div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="8" title="ZGC (Z Garbage Collector) Enhancements" />
        <OrderList data={[(<div className="mtop5p">Improved performance and reduced latency.</div>),
            (<div className="mtop5p">Memory uncommit functionality added (returns unused memory to the OS).</div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="9" title="Deprecations and Removals in Java 16" />
        <OrderList data={[(<div className="mtop5p">Security Manager is deprecated for removal.</div>),
            (<div className="mtop5p"><code><b>sun.misc.Unsafe.defineAnonymousClass()</b></code> removed.</div>),
            (<div className="mtop5p">Default value of <code><b>-XX:+EnableJVMCIProduct</b></code> is set to 
                <code><b>true</b></code> for improved JVM performance.</div>)]} />
    </div>

   </div>);
 };
 return (<div className="mtop15p">
    <div className="mtop15p"><h4><b>Java SE 16 (March, 2021):</b></h4><hr/></div>
    <div className="mtop15p"><b>Java 16</b> brought various <b>performance improvements</b>, 
    <b>language enhancements</b>, and <b>better memory management</b>. It continued the trend of 
    preview features, refining existing functionality while introducing new capabilities.
    </div>
    <div className="mtop15p">
            <Accordian id="Java16" data={[{
                    id:"java16-features", 
                    title: (<div><b>FEATURES:</b></div>),
                    component:(<Features />)
                }]} />
    </div>
 </div>);
};

export default Java16;