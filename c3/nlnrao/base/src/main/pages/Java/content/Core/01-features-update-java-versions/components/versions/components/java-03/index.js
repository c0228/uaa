import React from "react";
import { Accordian } from "e-ui-react";
import { BlogIndexHeader } from "@MainComponents/blog-index-header/index.js";
import OrderList from "@MainComponents/order-list/index.js";

const Java03 = () =>{
 const Features = () =>{
  return (<div>
     <div className="mtop10p padLeft5p">
            <BlogIndexHeader type="simple" index="1" title="HotSpot JVM (Performance Boost)" />
            <OrderList data={[(<div className="mtop5p"><b>Default JVM replaced with HotSpot JVM</b> 
                for better performance and efficiency.</div>),
                (<div className="mtop5p">Provided <b>Faster Just-In-Time (JIT) compilation for quicker 
                    execution</b>, <b>Optimized memory management and garbage collection</b> and 
                      <b>Better thread synchronization and execution speed</b>.</div>)]} />
        </div>

        <div className="mtop15p padLeft5p">
            <BlogIndexHeader type="simple" index="2" title="Java Naming and Directory Interface (JNDI) – Now Part of Core Java" />
            <OrderList data={[(<div className="mtop5p">JNDI, previously an extension, was <b>integrated into core Java</b>.</div>),
                (<div className="mtop5p">Used for accessing naming and directory services such as: <b>LDAP (Lightweight 
                    Directory Access Protocol)</b>, <b>DNS (Domain Name System)</b> and <b>RMI Registry</b></div>)]} />
        </div>

        <div className="mtop15p padLeft5p">
            <BlogIndexHeader type="simple" index="3" title="Java Sound API" />
            <OrderList data={[(<div className="mtop5p">Introduced <b>better support for audio playback</b>, <b>MIDI sequencing</b>, 
                    and <b>sound synthesis</b>.</div>),
                (<div className="mtop5p">Features includes: <b>Playback of audio files</b> (<code><b>.wav</b></code>, 
                    <code><b>.aiff</b></code>, <code><b>.au</b></code>), Support for <b>MIDI and sampled audio</b> and 
                    <b>Mixing and control over sound data</b>.</div>)]} />
        </div>

        <div className="mtop15p padLeft5p">
            <BlogIndexHeader type="simple" index="4" title="RMI (Remote Method Invocation) Enhancements" />
            <OrderList data={[(<div className="mtop5p"><b>RMI over IIOP (Internet Inter-ORB Protocol)</b> introduced.</div>),
                (<div className="mtop5p">Improved <b>communication between Java</b> and <b>CORBA-based applications</b>.</div>)]} />
        </div>

        <div className="mtop15p padLeft5p">
            <BlogIndexHeader type="simple" index="5" title="Performance and Memory Optimization" />
            <OrderList data={[(<div className="mtop5p"><b>Reduced startup time</b> for applications.</div>),
                (<div className="mtop5p"><b>Faster class loading</b> using <b>Lazy Class Loading</b> (loads classes only when required).</div>),
                (<div className="mtop5p">Improved <b>garbage collection</b> efficiency.</div>)]} />
        </div>

        <div className="mtop15p padLeft5p">
            <BlogIndexHeader type="simple" index="6" title="Networking Enhancements" />
            <OrderList data={[(<div className="mtop5p"><b>Java Platform Debugger Architecture (JPDA)</b> introduced for better debugging tools.</div>),
                (<div className="mtop5p"><b>Socket and I/O improvements</b> for better networking performance.</div>),
                (<div className="mtop5p">Support for <b>non-blocking I/O operations</b> (preparing for NIO in Java 1.4).</div>)]} />
        </div>
  </div>);
 };
 return (<div className="mtop15p">
    <div className="mtop15p"><h4><b>Java SE 1.3 (2000):</b></h4><hr/></div>
    <div className="mtop15p">Java 1.3 focused on <b>performance improvements</b>, <b>better JVM support</b>, and 
        <b>enhancements to Java APIs</b>. It introduced <b>HotSpot JVM</b>, improved networking, and refined existing 
        APIs for better efficiency.</div>
    <div className="mtop15p">
        <Accordian id="Java03" data={[{
            id:"java03-features", 
            title: (<div><b>FEATURES:</b></div>),
            component:(<Features />)
         }]} />
    </div>
        
 </div>);
};

export default Java03;