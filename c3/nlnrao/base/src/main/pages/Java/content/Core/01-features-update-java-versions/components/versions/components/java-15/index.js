import React from "react";
import { Highlight, Accordian } from "e-ui-react";
import { BlogIndexHeader } from "@MainComponents/blog-index-header/index.js";
import OrderList from "@MainComponents/order-list/index.js";

const SEALED_CLASSES_EXAMPLE = `sealed class Animal permits Dog, Cat {}

final class Dog extends Animal {}
final class Cat extends Animal {}`;

const RECORDS_SECOND_PREVIEW = `record Person(String name, int age) {}`;

const TEXT_BLOCKS_FINALIZED = `String json = """
    {
        "name": "John",
        "age": 25
    }
    """;`;

const HIDDEN_CLASSES_JAVA15 = `Lookup lookup = MethodHandles.lookup();
Class<?> hiddenClass = lookup.defineHiddenClass(bytecode, true).lookupClass();`;

const PATTERN_MATCHING_SECOND = `if (obj instanceof String str) {
    System.out.println(str.length()); // No need for explicit casting
}`;

const Java15 = () =>{
 
 const Features = () =>{
  return (<div>
    <div className="mtop10p padLeft5p">
        <BlogIndexHeader type="simple" index="1" title="Sealed Classes (Preview)" />
        <OrderList data={[(<div className="mtop5p">Restricts which classes can extend or implement a superclass or interface.</div>),
            (<div className="mtop5p">
                <div>Enhances control over inheritance and prevents unwanted subclassing.</div>
                <div className="mtop5p padleft5p"><b>Example:</b></div>
                <Highlight content={SEALED_CLASSES_EXAMPLE} lang="java" />
            </div>),
            (<div className="mtop5p">
                <div><b>Benefits:</b></div>
                <div>
                    <ul>
                        <li>Provides explicit control over the class hierarchy.</li>
                        <li>Helps maintain better security and encapsulation.</li>
                    </ul>
                </div>
            </div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="2" title="Records (Second Preview)" />
        <OrderList data={[(<div className="mtop5p">Further refinements to Records introduced in Java 14.</div>),
            (<div className="mtop5p">
                <div>Immutable data classes with automatic implementations of <code><b>equals()</b></code>, 
                <code><b>hashCode()</b></code> and <code><b>toString()</b></code>.</div>
                <Highlight content={RECORDS_SECOND_PREVIEW} lang="java" />
            </div>),
            (<div className="mtop5p">
                <div><b>Benefits:</b></div>
                <div>
                    <ul>
                        <li>Reduces boilerplate code.</li>
                        <li>Improves readability and maintainability.</li>
                    </ul>
                </div>
            </div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="3" title=" Text Blocks (Finalized)" />
        <OrderList data={[(<div className="mtop5p">Previously in preview in Java 13 & 14, now fully integrated.</div>),
            (<div className="mtop5p">
                <div>Makes handling multi-line strings easier.</div>
                <div className="mtop5p padLeft5p"><b>Example:</b></div>
                <Highlight content={TEXT_BLOCKS_FINALIZED} lang="java" />
            </div>),
            (<div className="mtop5p">
                <div><b>Benefits:</b></div>
                <div>
                    <ul>
                        <li>No need for escape sequences.</li>
                        <li>More readable and maintainable code.</li>
                    </ul>
                </div>
            </div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="4" title="Hidden Classes" />
        <OrderList data={[(<div className="mtop5p">Introduces classes that are not discoverable by other classes.</div>),
            (<div className="mtop5p">
                <div>Useful for frameworks that generate classes dynamically (like proxies or lambda functions).</div>
                <div className="padLeft5p mtop5p"><b>Example:</b></div>
                <Highlight content={HIDDEN_CLASSES_JAVA15} lang="java" />
            </div>),
            (<div className="mtop5p">
                <div><b>Benefits:</b></div>
                <div>
                    <ul>
                        <li>Improves security by restricting access to dynamically generated classes.</li>
                        <li>Reduces memory footprint for certain applications.</li>
                    </ul>
                </div>
            </div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="5" title="Pattern Matching for instanceof (Second Preview)" />
        <OrderList data={[(<div className="mtop5p">
            <div>Enhances <code><b>instanceof</b></code> checks by eliminating redundant casting.</div>
            <div className="mtop5p padLeft5p"><b>Example:</b></div>
            <Highlight content={PATTERN_MATCHING_SECOND} lang="java" />
        </div>),
            (<div className="mtop5p">
                <div><b>Benefits:</b></div>
                <div>
                    <ul>
                        <li>Reduces unnecessary code.</li>
                        <li>Improves performance.</li>
                    </ul>
                </div>
            </div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="6" title="ZGC (Z Garbage Collector) Now Production-Ready" />
        <OrderList data={[(<div className="mtop5p">ZGC now officially supported in Java 15.</div>),
            (<div className="mtop5p">Reduces GC pause times to milliseconds.</div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="7" title="Shenandoah GC Improvements" />
        <OrderList data={[(<div className="mtop5p">Enhancements to the Shenandoah garbage collector.</div>),
            (<div className="mtop5p">Reduces pause times even further.</div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="8" title="Deprecation and Removal of Features" />
        <OrderList data={[(<div className="mtop5p"><b>Nashorn JavaScript Engine Removed:</b> The JavaScript 
            engine (introduced in Java 8) was removed due to lack of maintenance.</div>),
            (<div className="mtop5p"><b>RMI Activation System Removed:</b> RMI-based activation system was 
            deprecated due to low usage.</div>)]} />
    </div>

  </div>);
 };

 return (<div className="mtop15p">
    <div className="mtop15p"><h4><b>Java SE 15 (September, 2020):</b></h4><hr/></div>
    <div className="mtop15p"><b>Java 15</b> continued the trend of <b>preview features</b>, <b>performance improvements</b> 
        and <b>security enhancements</b>. It introduced new language constructs like <b>sealed classes</b>, 
        <b>improved memory management</b> and <b>better garbage collection mechanisms</b>.
    <div className="mtop15p">
        <Accordian id="Java15" data={[{
                id:"java15-features", 
                title: (<div><b>FEATURES:</b></div>),
                component:(<Features />)
            }]} />
    </div>
</div>   
 </div>);
};

export default Java15;