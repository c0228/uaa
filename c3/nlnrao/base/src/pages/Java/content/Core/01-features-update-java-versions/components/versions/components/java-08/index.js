import React from "react";
import { Accordian } from "e-ui-react";
import { BlogIndexHeader } from "@Components/blog-index-header/index.js";
import OrderList from "@Components/order-list/index.js";

const Java08 = () =>{
 const Features = () =>{
   return (<div>
    <div className="mtop10p padLeft5p">
        <BlogIndexHeader type="simple" index="1" title="Lambda Expressions (Functional Programming)" />
        <OrderList data={[(<div className="mtop5p">Introduced functional programming in Java.</div>),
            (<div className="mtop5p">Allows writing more concise and readable code.</div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="2" title="Functional Interfaces (java.util.function)" />
        <OrderList data={[(<div className="mtop5p">Introduced built-in functional interfaces like 
            <code><b>Predicate</b></code>, <code><b>Consumer</b></code>, <code><b>Function</b></code>, and 
            <code><b>Supplier</b></code>.</div>),
            (<div className="mtop5p">A functional interface contains exactly one abstract method.</div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="3" title="Stream API (java.util.stream)" />
        <OrderList data={[(<div className="mtop5p">Used for processing collections (<code><b>List</b></code>, 
            <code><b>Set</b></code>, <code><b>Map</b></code>) efficiently.</div>),
            (<div className="mtop5p">Enables functional-style operations like filtering, mapping, and reducing.</div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="4" title="Default and Static Methods in Interfaces" />
        <OrderList data={[(<div className="mtop5p">Interfaces can now have methods with implementations.</div>),
            (<div className="mtop5p">Allows backward compatibility without breaking existing code.</div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="5" title="New Date and Time API (java.time)" />
        <OrderList data={[(<div className="mtop5p">Replaces old <code><b>java.util.Date</b></code> and 
            <code><b>java.util.Calendar</b></code> classes.</div>),
            (<div className="mtop5p">More readable, immutable, and thread-safe.</div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="6" title="Optional Class (java.util.Optional)" />
        <OrderList data={[(<div className="mtop5p">Handles <code><b>null</b></code> values safely and avoids 
            <code><b>NullPointerException</b></code>.</div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="7" title="JavaScript Engine (Nashorn)" />
        <OrderList data={[(<div className="mtop5p">Replaces the older Rhino JavaScript engine.</div>),
            (<div className="mtop5p">Allows Java to execute JavaScript code natively.</div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="8" title="Collectors API (java.util.stream.Collectors)" />
        <OrderList data={[(<div className="mtop5p">Simplifies data collection operations.</div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="9" title="Concurrent Accumulators (java.util.concurrent)" />
        <OrderList data={[(<div className="mtop5p">Improves multi-threaded programming performance.</div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="10" title="Performance Enhancements" />
        <OrderList data={[(<div className="mtop5p">Garbage Collection (G1 GC) improvements.</div>),
            (<div className="mtop5p">Faster JVM execution with Compact Profiles.</div>),
            (<div className="mtop5p">Better handling of Parallel Streams.</div>)]} />
    </div>
</div>);
 };
 return (<div className="mtop15p">
    <div className="mtop15p"><h4><b>Java SE 8 (2014):</b></h4><hr/></div>
    <div className="mtop15p"><b>Java 8</b> was a <b>game-changing release</b>, introducing 
        <b>functional programming features</b>, <b>improved API usability</b>, <b>better performance</b>, and 
        <b>enhanced security</b>. This version marked a major shift in Java programming by introducing 
        <b>Lambda Expressions</b>, <b>Stream API</b>, and <b>Default Methods</b>.</div>
    <div className="mtop15p">
          <Accordian id="Java08" data={[{
             id:"java08-features", 
             title: (<div><b>FEATURES:</b></div>),
             component:(<Features />)
          }]} />
    </div>
 </div>);
};

export default Java08;