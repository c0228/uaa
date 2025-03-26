import React from "react";
import { Accordian } from "e-ui-react";
import { BlogIndexHeader } from "@Components/blog-index-header/index.js";
import OrderList from "@Components/order-list/index.js";

const Java00 = () =>{
 const Features = () =>{
  return (<div>
    <div className="mtop10p padLeft5p">
        <BlogIndexHeader type="simple" index="1" title="Platform Independence" />
        <OrderList data={[(<div>"Write Once, Run Anywhere" using the <b>Java Virtual Machine (JVM)</b>.</div>)]} />
    </div>
    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="2" title="Object-Oriented Programming (OOPs)" />
        <OrderList data={[(<div>Supports <b>encapsulation</b>, <b>inheritance</b>, and <b>polymorphism</b>.</div>)]} />
    </div>
    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="3" title="Automatic Memory Management" />
        <OrderList data={[(<div>Introduced <b>Garbage Collection (GC)</b> for automatic memory handling.</div>)]} />
    </div>
    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="4" title="Multithreading Support" />
        <OrderList data={[(<div>Provided built-in <b>multithreading</b> using the <code><b>Thread</b></code> class 
            and <code><b>Runnable</b></code> interface.</div>)]} />
    </div>
    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="5" title="Security Model" />
        <OrderList data={[(<div>Introduced <b>Java Security Manager</b> to restrict untrusted code execution.</div>)]} />
    </div>
    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="6" title="Applets Support" />
        <OrderList data={[(<div>Allowed embedding Java programs inside web browsers using <b>Java Applets</b>.</div>)]} />
    </div>
    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="7" title="AWT (Abstract Window Toolkit)" />
        <div className="padLeft10p">Java 1.0's <b>first GUI framework</b> for creating window-based applications. 
            It included:
        </div>
        <OrderList data={[(<div><b>Basic UI components:</b> Buttons, text fields, labels, checkboxes, etc.</div>),
            (<div><b>Event handling</b> using <code><b>Event</b></code> and <code><b>EventListener</b></code>.</div>),
            (<div><b>Layouts</b> like <code><b>FlowLayout</b></code>, <code><b>GridLayout</b></code>, and 
            <code><b>BorderLayout</b></code>.</div>)]} />
    </div>
    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="8" title="Java API Library" />
        <div className="padLeft10p">Core libraries such as:</div>
            <OrderList data={[(<div><b>java.lang</b> (basic classes like <code><b>String</b></code>, <code><b>Math</b></code>, 
                <code><b>System</b></code>)</div>),
                (<div><b>java.util</b> (collections like <code><b>Vector</b></code>, <code><b>Hashtable</b></code>)</div>),
                (<div><b>java.io</b> (file handling)</div>),
                (<div><b>java.net</b> (network programming)</div>),
                (<div><b>java.awt</b> (GUI programming)</div>)]} />
        </div>
    </div>);
 };

 return (<div className="mtop15p">
    <div className="mtop15p"><h4><b>Java SE 1.0 (January 23, 1996):</b></h4><hr /></div>
    <div className="mtop15p">Java SE 1.0, was released by Sun Microsystems on January 23, 1996. 
        It was the first official version of Java and laid the foundation for the Java programming language.</div>
    <div className="mtop15p">
    <Accordian id="Java00" data={[{
        id:"java00-features", 
        title: (<div><b>FEATURES:</b></div>),
        component:(<Features />)
    }]} />
    </div>
 </div>);
};

export default Java00;