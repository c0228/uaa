import React from "react";
import { Accordian } from "e-ui-react";
import { BlogIndexHeader } from "@MainComponents/blog-index-header/index.js";
import OrderList from "@MainComponents/order-list/index.js";

const Java04 = () =>{
 const Features = () =>{
   return (<div>
    <div className="mtop10p padLeft5p">
    <BlogIndexHeader type="simple" index="1" title="New Input/Output (NIO) – High-Performance I/O" />
    <OrderList data={[(<div className="mtop5p">Introduced <code><b>java.nio</b></code> package, improving 
            <b>file and network I/O operations</b>.</div>),
        (<div className="mtop5p">Key Features: <b>Buffer-based I/O</b> (instead of traditional stream-based), 
            <b>Memory-mapped files</b> for faster file access, <b>Non-blocking I/O (Selectable Channels)</b> 
            for scalable network programming and <b>Improved File and Socket operations</b>.</div>)]} />
</div>

<div className="mtop15p padLeft5p">
    <BlogIndexHeader type="simple" index="2" title="Regular Expressions (java.util.regex)" />
    <OrderList data={[(<div className="mtop5p">Added <b>built-in support for Regular Expressions (Regex)</b> in Java.</div>),
        (<div className="mtop5p">New Classes: <code><b>Pattern</b></code> (Defines a Regex Pattern), 
               <code><b>Matcher</b></code> (Performs Match Operations).</div>)]} />
</div>

<div className="mtop15p padLeft5p">
    <BlogIndexHeader type="simple" index="3" title="Exception Chaining" />
    <OrderList data={[(<div className="mtop5p">Allowed <b>one exception to be linked to another</b>, helping <b>debug nested exceptions</b>.</div>),
        (<div className="mtop5p">Introduced <b>new constructors</b> in <code><b>Throwable</b></code>, <code><b>Exception</b></code>, and 
                  <code><b>RuntimeException</b></code> classes.</div>)]} />
</div>

<div className="mtop15p padLeft5p">
    <BlogIndexHeader type="simple" index="4" title="Logging API (java.util.logging)" />
    <OrderList data={[(<div className="mtop5p">Introduced a <b>built-in logging framework</b> (<code><b>java.util.logging</b></code>).</div>),
        (<div className="mtop5p">Eliminated dependency on third-party logging tools.</div>),
        (<div className="mtop5p">Provided <b>log levels</b> like <code><b>INFO</b></code>, <code><b>WARNING</b></code>, 
            <code><b>SEVERE</b></code>, etc.</div>)]} />
</div>

<div className="mtop15p padLeft5p">
    <BlogIndexHeader type="simple" index="5" title="IPv6 Support" />
    <OrderList data={[(<div className="mtop5p"><b>Full support for IPv6 networking.</b></div>),
        (<div className="mtop5p">Enhanced <code><b>java.net</b></code> package for IPv6 sockets, DNS lookups, and addresses.</div>)]} />
</div>

<div className="mtop15p padLeft5p">
    <BlogIndexHeader type="simple" index="6" title="Image I/O API (javax.imageio)" />
    <OrderList data={[(<div className="mtop5p"><b>Faster and better image processing</b>.</div>),
        (<div className="mtop5p">Supported <b>reading/writing JPEG</b>, <b>PNG</b>, <b>GIF</b> and <b>BMP formats</b>.</div>)]} />
</div>

<div className="mtop15p padLeft5p">
    <BlogIndexHeader type="simple" index="7" title="Assertions (assert keyword)" />
    <OrderList data={[(<div className="mtop5p">Introduced <code><b>assert</b></code> keyword for debugging.</div>)]} />
</div>

<div className="mtop15p padLeft5p">
    <BlogIndexHeader type="simple" index="8" title="Preferences API (java.util.prefs)" />
    <OrderList data={[(<div className="mtop5p">New <b>Preferences API</b> for storing user and system configuration settings.</div>)]} />
</div>

<div className="mtop15p padLeft5p">
    <BlogIndexHeader type="simple" index="9" title="Performance Improvements" />
    <OrderList data={[(<div className="mtop5p"><b>Garbage Collection (GC) Enhancements:</b> New GC algorithms for better memory management.</div>),
        (<div className="mtop5p"><b>HotSpot JVM Optimization:</b> Improved <b>runtime performance</b> and <b>startup time</b>.</div>)]} />
</div>
</div>);
 };
 return (<div className="mtop15p">
    <div className="mtop15p"><h4><b>Java SE 1.4 (2002):</b></h4><hr/></div>
    <div className="mtop15p">Java 1.4 was a major release that <b>focused on performance</b>, <b>stability</b>, and <b>scalability</b>. 
    It introduced <b>NIO (New Input/Output)</b>, <b>Regular Expressions</b>, <b>Exception Chaining</b>, <b>Logging API</b>, and 
    <b>IPv6 support</b>. This version was the first Java release developed under the <b>Java Community Process (JCP)</b>.</div>
    <div className="mtop15p">
        <Accordian id="Java04" data={[{
            id:"java04-features", 
            title: (<div><b>FEATURES:</b></div>),
            component:(<Features />)
         }]} />
    </div>
    
 </div>);
};

export default Java04;