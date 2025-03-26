import React from "react";
import { Accordian } from "e-ui-react";
import { BlogIndexHeader } from "@Components/blog-index-header/index.js";
import OrderList from "@Components/order-list/index.js";

const Java09 = () =>{
 const Features = () =>{
   return (<div>
    <div className="mtop10p padLeft5p">
        <BlogIndexHeader type="simple" index="1" title="Java Platform Module System (JPMS) – Project Jigsaw" />
        <OrderList data={[(<div className="mtop5p">Introduced <b>Modularity</b> to Java applications by breaking the JDK into modules.</div>),
            (<div className="mtop5p">Improves performance, security, and maintainability.</div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="2" title="JShell (REPL – Read-Eval-Print Loop)" />
        <OrderList data={[(<div className="mtop5p">Allows executing Java code interactively without compilation.</div>),
            (<div className="mtop5p">Great for quick testing and learning.</div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="3" title="Factory Methods for Immutable Collections (List.of(), Set.of(), Map.of())" />
        <OrderList data={[(<div className="mtop5p">Simplifies creating immutable lists, sets, and maps.</div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="4" title="Private Methods in Interfaces" />
        <OrderList data={[(<div className="mtop5p">Interfaces can now have private helper methods.</div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="5" title="Stream API Enhancements" />
        <OrderList data={[(<div className="mtop5p">New methods in <b>Stream API</b>: <code><b>dropWhile()</b></code>, 
            <code><b>takeWhile()</b></code>, and <code><b>ofNullable()</b></code>.</div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="6" title="HTTP Client (New java.net.http Package)" />
        <OrderList data={[(<div className="mtop5p">Introduced a modern HTTP client for handling HTTP/2 and WebSockets.</div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="7" title="Improved Try-With-Resources" />
        <OrderList data={[(<div className="mtop5p">Now supports final or effectively final resources.</div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="8" title="Process API Enhancements (java.lang.ProcessHandle)" />
        <OrderList data={[(<div className="mtop5p">Improved management of system processes.</div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="9" title="Compact Strings (Memory Optimization in String Class)" />
        <OrderList data={[(<div className="mtop5p">Reduces memory consumption for applications dealing with many Strings.</div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="10" title="Multi-Resolution Image API (java.awt.image)" />
        <OrderList data={[(<div className="mtop5p">Allows handling multiple resolutions of an image dynamically.</div>)]} />
    </div>
   </div>);
 };
 return (<div className="mtop15p">
    <div className="mtop15p"><h4><b>Java SE 9 (2017):</b></h4><hr/></div>
    <div className="mtop15p"><b>Java 9</b> introduced <b>major architectural changes</b> and several <b>enhancements</b> to 
    improve performance, scalability, and modularity. The most significant change was <b>Project Jigsaw</b>, which introduced 
    the <b>Java Module System</b>.</div>
    <div className="mtop15p">
        <Accordian id="Java09" data={[{
                id:"java09-features", 
                title: (<div><b>FEATURES:</b></div>),
                component:(<Features />)
            }]} />
    </div>

 </div>);
};

export default Java09;