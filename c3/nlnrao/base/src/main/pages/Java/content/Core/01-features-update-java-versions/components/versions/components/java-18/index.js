import React from "react";
import { Highlight, Accordian } from "e-ui-react";
import { BlogIndexHeader } from "@MainComponents/blog-index-header/index.js";
import OrderList from "@MainComponents/order-list/index.js";

const CODE_SNIPPETS_JAVA = `/**
 * <pre>{@code
 * List<String> list = List.of("Java", "18");
 * System.out.println(list);
 * }</pre>
 */`;

const PATTERN_MATCHING_JAVA = `static void process(Object obj) {
    switch (obj) {
        case Integer i -> System.out.println("Integer: " + i);
        case String s  -> System.out.println("String: " + s.toUpperCase());
        default        -> System.out.println("Unknown type");
    }
}`;

const Java18 = () =>{
 const Features = () =>{
  return (<div>

    <div className="mtop10p padLeft5p">
        <BlogIndexHeader type="simple" index="1" title="UTF-8 as Default Charset" />
        <OrderList data={[(<div className="mtop5p">The default character encoding in Java is now UTF-8 
            (instead of platform-dependent encodings).</div>),
            (<div className="mtop5p">
                <div>Ensures consistency across different OS environments.</div>
                <div className="mtop5p padLeft5p"><b>Example:</b></div>
                <Highlight content={`System.out.println(Charset.defaultCharset());  // UTF-8 (on all platforms)`} lang="java" />
            </div>),
            (<div className="mtop5p">
                <div><b>Benefits:</b></div>
                <div>
                    <ul>
                        <li>Avoids encoding-related bugs.</li>
                        <li>Ensures cross-platform consistency in text processing.</li>
                    </ul>
                </div>
            </div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="2" title="Simple Web Server" />
        <OrderList data={[(<div className="mtop5p">
                <div>Introduces a lightweight command-line web server for testing and prototyping.</div>
                <Highlight content={`jwebserver  # Starts a local web server (default port 8000)`} lang="java" />
            </div>),
            (<div className="mtop5p">Supports static file serving via HTTP.</div>),
            (<div className="mtop5p">Good for quick API testing and frontend development.</div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="3" title="Code Snippets in Java API Documentation" />
        <OrderList data={[(<div className="mtop5p">
                <div>Enhances JavaDocs by allowing structured code snippets.</div>
                <div className="mtop5p padLeft5p"><b>Example in JavaDoc:</b></div>
                <Highlight content={CODE_SNIPPETS_JAVA} lang="java" />
            </div>),
            (<div className="mtop5p">
                <div><b>Benefits:</b></div>
                <div>
                    <ul>
                        <li>Improves readability and documentation quality.</li>
                        <li>Allows interactive documentation in tools.</li>
                    </ul>
                </div>
            </div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="4" title="Foreign Function & Memory API" />
        <OrderList data={[(<div className="mtop5p">Enhances Java's ability to call native libraries efficiently.</div>),
            (<div className="mtop5p">Improves performance over JNI (Java Native Interface).</div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="5" title="Pattern Matching for switch" />
        <OrderList data={[(<div className="mtop5p">
            <div>Enhances <code><b>switch</b></code> expressions with pattern matching.</div>
            <div className="mtop5p padLeft5p"><b>Example:</b></div>
            <Highlight content={PATTERN_MATCHING_JAVA} lang="java" />
        </div>),
            (<div className="mtop5p">
                <div><b>Benefits:</b></div>
                <div>
                    <ul>
                        <li>Makes <code><b>switch</b></code> more powerful and flexible.</li>
                        <li>Reduces the need for <code><b>if-else</b></code> chains.</li>
                    </ul>
                </div>
            </div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="6" title="Vector API" />
        <OrderList data={[(<div className="mtop5p">Improves performance for vector-based computations.</div>),
            (<div className="mtop5p">Useful in data processing, AI, and machine learning applications.</div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="7" title="Internet Address Resolution" />
        <OrderList data={[(<div className="mtop5p">Modernizes Java’s network resolution for better performance and security.</div>),
            (<div className="mtop5p">Uses modern resolver libraries instead of outdated OS-dependent resolvers.</div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="8" title="Deprecations and Removals in Java 18" />
        <OrderList data={[(<div className="mtop5p"><b>Finalization is deprecated (JEP 421):</b> Prepares for removal in future versions.</div>),
            (<div className="mtop5p">No major removals, but more legacy features are being phased out.</div>)]} />
    </div>

  </div>);
 };
 return (<div className="mtop15p">
     <div className="mtop15p"><h4><b>Java SE 18 (March, 2022):</b></h4></div>
     <div className="mtop15p">Java 18 was a <b>short-term release</b> that introduced several enhancements and incubator 
     features, focusing on performance improvements, better networking, and new APIs.</div>
     <div className="mtop15p">
         <Accordian id="Java18" data={[{
                 id:"java18-features", 
                 title: (<div><b>FEATURES:</b></div>),
                 component:(<Features />)
             }]} />
     </div>
  </div>);
};

export default Java18;