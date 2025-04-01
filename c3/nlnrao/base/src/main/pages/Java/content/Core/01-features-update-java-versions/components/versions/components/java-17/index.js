import React from "react";
import { Highlight, Accordian } from "e-ui-react";
import { BlogIndexHeader } from "@MainComponents/blog-index-header/index.js";
import OrderList from "@MainComponents/order-list/index.js";

const PATTERN_MATCH_SWITCH = `static void test(Object obj) {
    switch (obj) {
        case Integer i -> System.out.println("Integer: " + i);
        case String s -> System.out.println("String: " + s);
        case null -> System.out.println("Null value");
        default -> System.out.println("Unknown type");
    }
}`;

const PRNG_API_JAVA = `RandomGenerator generator = RandomGenerator.of("L128X1024MixRandom");
System.out.println(generator.nextInt());`;

const Java17 = () =>{
 const Features = () =>{
    return (<div>

        <div className="mtop10p padLeft5p">
            <BlogIndexHeader type="simple" index="1" title="Sealed Classes (Finalized)" />
            <OrderList data={[(<div className="mtop5p">Sealed classes restrict which classes can extend them, ensuring better control over inheritance.</div>),
                (<div className="mtop5p">Finalized after being in preview in Java 15 and Java 16.</div>),
                (<div className="mtop5p">
                    <div><b>Benefits:</b></div>
                    <div>
                        <ul>
                            <li>Provides stricter control over class hierarchies.</li>
                            <li>Enhances security and maintainability.</li>
                        </ul>
                    </div>
                </div>)]} />
        </div>

        <div className="mtop15p padLeft5p">
            <BlogIndexHeader type="simple" index="2" title="Pattern Matching for switch (Preview)" />
            <OrderList data={[(<div className="mtop5p">
                <div>Allows <code><b>switch</b></code> to work with multiple types, reducing boilerplate code.</div>
                <Highlight content={PATTERN_MATCH_SWITCH} lang="java" />
            </div>),
                (<div className="mtop5p">
                    <div><b>Benefits:</b></div>
                    <div>
                        <ul>
                            <li>Improves readability and efficiency.</li>
                            <li>Supports multiple data types in <code><b>switch</b></code>.</li>
                        </ul>
                    </div>
                </div>)]} />
        </div>

        <div className="mtop15p padLeft5p">
            <BlogIndexHeader type="simple" index="3" title="Foreign Function & Memory API (Incubator)" />
            <OrderList data={[(<div className="mtop5p">Allows Java applications to interact with native code efficiently.</div>),
                (<div className="mtop5p">Improves performance by eliminating JNI (Java Native Interface) overhead.</div>)]} />
        </div>

        <div className="mtop15p padLeft5p">
            <BlogIndexHeader type="simple" index="4" title="New macOS Rendering Pipeline" />
            <OrderList data={[(<div className="mtop5p">Introduces a new rendering pipeline for macOS, using Metal instead of OpenGL.</div>),
                (<div className="mtop5p">Enhances performance and future-proofing for macOS users.</div>)]} />
        </div>

        <div className="mtop15p padLeft5p">
            <BlogIndexHeader type="simple" index="5" title="Deprecation of Security Manager" />
            <OrderList data={[(<div className="mtop5p">The Security Manager feature is officially deprecated for removal.</div>),
                (<div className="mtop5p">Modern security mechanisms (like sandboxing) are now preferred.</div>)]} />
        </div>

        <div className="mtop15p padLeft5p">
            <BlogIndexHeader type="simple" index="6" title="Strongly Encapsulated JDK Internals" />
            <OrderList data={[(<div className="mtop5p">Access to internal Java APIs is now restricted.</div>),
                (<div className="mtop5p">Encourages developers to use standard, supported APIs instead.</div>)]} />
        </div>

        <div className="mtop15p padLeft5p">
            <BlogIndexHeader type="simple" index="7" title="New Pseudo-Random Number Generator (PRNG) API" />
            <OrderList data={[(<div className="mtop5p">Introduces a flexible and extensible API for random number generation.</div>),
                (<div className="mtop5p">
                    <div>Supports various PRNG algorithms like <code><b>L32X64MixRandom</b></code> and <code><b>Xoshiro256PlusPlus</b></code>.</div>
                    <div className="padLeft5p"><b>Example:</b></div>
                    <Highlight content={PRNG_API_JAVA} lang="java" />
                </div>),
                (<div className="mtop5p">
                    <div><b>Benefits:</b></div>
                    <div>
                        <ul>
                            <li>Provides better control over random number generation.</li>
                            <li>Offers more secure and efficient algorithms.</li>
                        </ul>
                    </div>
                </div>)]} />
        </div>

        <div className="mtop15p padLeft5p">
            <BlogIndexHeader type="simple" index="8" title="Deprecation and Removal of Legacy Features" />
            <OrderList data={[(<div className="mtop5p">Applets are deprecated for future removal.</div>),
                (<div className="mtop5p">RMI Activation System is removed.</div>),
                (<div className="mtop5p"><code><b>SecurityManager</b></code> is marked for removal.</div>),
                (<div className="mtop5p"><code><b>FixedDatagramSocketImpl</b></code> removed to simplify networking stack.</div>)]} />
        </div>
        
    </div>);
 };
 return (<div className="mtop15p">
    <div className="mtop15p"><h4><b>Java SE 17 (September, 2021):</b></h4></div>
    <div className="mtop15p">Java 17 is a <b>Long-Term Support (LTS) release</b>, meaning it will receive extended 
        support and updates. It introduced <b>stability</b>, <b>performance enhancements</b>, <b>security improvements</b> 
        and <b>finalized multiple preview features</b> from earlier versions.
    </div>
    <div className="mtop15p">
        <Accordian id="Java17" data={[{
                id:"java17-features", 
                title: (<div><b>FEATURES:</b></div>),
                component:(<Features />)
            }]} />
    </div>
 </div>);
};

export default Java17;