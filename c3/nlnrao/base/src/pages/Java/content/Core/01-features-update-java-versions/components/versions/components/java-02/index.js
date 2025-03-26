import React from "react";
import { Accordian } from "e-ui-react";
import { BlogIndexHeader } from "@Components/blog-index-header/index.js";
import OrderList from "@Components/order-list/index.js";

const Java02 = () =>{
 const Features = () =>{
  return (<div>
    <div className="mtop10p padLeft5p">
        <BlogIndexHeader type="simple" index="1" title="Java Foundation Classes (JFC)" />
        <OrderList data={[(<div className="mtop5p"><b>Swing API</b> (<code><b>javax.swing</b></code>) 
                introduced <b>lightweight GUI components</b>, replacing AWT components.</div>),
            (<div className="mtop5p"><b>Pluggable Look-and-Feel (PLAF)</b> support, allowing applications to change 
                their UI themes dynamically.</div>),
            (<div className="mtop5p">Enhanced event handling and support for <b>drag-and-drop functionality</b>.</div>),
            (<div className="mtop5p"><b>Java 2D API</b> for advanced graphics and imaging.</div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="2" title="Collections Framework (java.util)" />
        <OrderList data={[(<div className="mtop5p">Introduced <b>new data structures</b> for better 
                memory management and performance.</div>),
            (<div className="mtop5p">Replaced older classes like <code><b>Vector</b></code> and 
                <code><b>Hashtable</b></code> with modern alternatives.</div>),
            (<div className="mtop5p">Added new interfaces: <code><b>Collection</b></code>, 
                <code><b>List</b></code>, <code><b>Set</b></code>, <code><b>Map</b></code> and 
                <code><b>Iterator</b></code>.</div>),
            (<div className="mtop5p">New concrete implementations: <code><b>ArrayList</b></code> and 
                <code><b>LinkedList</b></code> (for lists), <code><b>HashSet</b></code> and 
                <code><b>TreeSet</b></code> (for sets) and <code><b>HashMap</b></code> and 
                <code><b>TreeMap</b></code> (for maps).</div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="3" title="Just-In-Time (JIT) Compiler for Performance Optimization" />
        <OrderList data={[(<div className="mtop5p">Improved <b>JVM performance</b> by compiling bytecode into native 
            machine code at runtime.</div>),
            (<div className="mtop5p">Reduced execution time and improved overall <b>application efficiency</b>.</div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="4" title="Java Plug-in for Web Browsers" />
        <OrderList data={[(<div className="mtop5p">Allowed <b>Java Applets</b> to run on any web browser using the Java Runtime Environment (JRE).</div>),
            (<div className="mtop5p">Provided <b>better integration</b> between Java and browser environments.</div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="5" title="Security Enhancements" />
        <OrderList data={[(<div className="mtop5p"><b>Code Signing:</b> Allowed developers to sign their Java applications for authentication.</div>),
            (<div className="mtop5p"><b>Java Authentication and Authorization Service (JAAS)</b> introduced for advanced security management.</div>),
            (<div className="mtop5p">Enhanced <b>Access Control Mechanism</b> with fine-grained permission settings.</div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="6" title="Internationalization and Unicode Support" />
        <OrderList data={[(<div className="mtop5p">Expanded support for <b>more languages and character sets</b>.</div>),
                (<div className="mtop5p">Improved <b>text rendering</b> and <b>font handling</b>.</div>)]} />
    </div>
    

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="7" title="RMI (Remote Method Invocation) Over IIOP" />
        <OrderList data={[(<div className="mtop5p">Enabled <b>Java applications to communicate</b> over the Internet using 
            <b>CORBA (Common Object Request Broker Architecture)</b>.</div>),
            (<div className="mtop5p">Improved <b>distributed computing</b> capabilities.</div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="8" title="Performance and Memory Improvements" />
        <OrderList data={[(<div className="mtop5p">Enhanced <b>Garbage Collection</b> for better memory management.</div>),
            (<div className="mtop5p">Introduced <b>Weak References</b> to optimize memory handling.</div>)]} />
    </div>
  </div>);
 };

 return (<div className="mtop15p">
    <div className="mtop15p"><h4><b>Java SE 1.2 (1998):</b></h4><hr/></div>
    <div className="mtop15p">Java 1.2, also known as Java 2 (J2SE 1.2), was a major release that introduced 
        significant enhancements to the Java platform. It marked the beginning of the 
        <b>Java 2 Platform, Standard Edition (J2SE)</b> and introduced various improvements in <b>performance</b>, 
        <b>security</b>, <b>GUI</b>, <b>collections framework</b>, and <b>Java Virtual Machine (JVM)</b>.</div>
    <div className="mtop15p">
        <Accordian id="Java02" data={[{
            id:"java02-features", 
            title: (<div><b>FEATURES:</b></div>),
            component:(<Features />)
        }]} />
    </div>
 </div>);
};

export default Java02;