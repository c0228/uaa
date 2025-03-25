import React from "react";
import { BlogIndexHeader } from "@Components/blog-index-header/index.js";
import OrderList from "@Components/order-list/index.js";

const Java06 = () =>{
 return (<div className="mtop15p">
    <div className="mtop15p"><h4><b>Java SE 6 (2006):</b></h4></div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="1" title="Performance Improvements" />
        <OrderList data={[(<div className="mtop5p">Better Memory Management & Faster JVM Execution.</div>),
            (<div className="mtop5p">Improved <b>Just-In-Time (JIT) Compilation</b> for optimized performance.</div>),
            (<div className="mtop5p">Reduced startup time for applications.</div>),
            (<div className="mtop5p"><b>Garbage Collection (GC) Enhancements</b> for better memory handling.</div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="2" title="Scripting Support (JavaScript & Other Languages)" />
        <OrderList data={[(<div className="mtop5p">Introduced <code><b>javax.script</b></code> API for integrating 
            <b>JavaScript</b> and <b>other scripting languages</b> inside Java applications.</div>),
                (<div className="mtop5p"><b>Nashorn JavaScript Engine</b> was included by default.</div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="3" title="JDBC 4.0 Enhancements" />
        <OrderList data={[(<div className="mtop5p">Added <b>automatic database driver loading</b>.</div>),
            (<div className="mtop5p">Improved <b>exception handling</b> with <code><b>SQLException</b></code> subclasses.</div>),
            (<div className="mtop5p">Connection management improvements.</div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="4" title="Web Services Enhancements (JAX-WS)" />
        <OrderList data={[(<div className="mtop5p">Built-in support for Web Services via JAX-WS 2.0 API.</div>),
                (<div className="mtop5p">Simplified development of SOAP-based web services.</div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="5" title="Compiler API" />
        <OrderList data={[(<div className="mtop5p">Allowed <b>Java programs to compile Java code at runtime</b>.</div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="6" title="Pluggable Annotations Processing" />
        <OrderList data={[(<div className="mtop5p">Provided <b>annotation processing support</b> at compile time.</div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="7" title="GUI Improvements (Swing & AWT Enhancements)" />
        <OrderList data={[(<div className="mtop5p">Improved <b>native look-and-feel for Swing applications</b>.</div>),
                (<div className="mtop5p">Support for Splash Screens</div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="8" title="Console Class for User Input" />
        <OrderList data={[(<div className="mtop5p">New <code><b>java.io.Console</b></code> class for reading password 
            input securely.</div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="9" title="Desktop API (java.awt.Desktop)" />
        <OrderList data={[(<div className="mtop5p">Enabled Java applications to open files, launch browsers, 
            and send emails.</div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="10" title="Monitoring and Management Enhancements" />
        <OrderList data={[(<div className="mtop5p">Improved JMX (Java Management Extensions).</div>),
                (<div className="mtop5p">Enhanced troubleshooting tools (<code><b>jmap</b></code>, 
                        <code><b>jconsole</b></code>).</div>)]} />
    </div>

 </div>);
};

export default Java06;