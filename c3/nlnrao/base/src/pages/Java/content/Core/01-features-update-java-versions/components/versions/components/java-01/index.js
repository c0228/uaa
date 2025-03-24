import React from "react";
import { BlogIndexHeader } from "@Components/blog-index-header/index.js";
import OrderList from "@Components/order-list/index.js";

const Java01 = () =>{
 return (<div className="mtop15p">
    <div className="mtop15p"><h4><b>Java SE 1.1 (1997):</b></h4></div>
    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="1" title="Event Delegation Model (Improved AWT Event Handling)" />
        <OrderList data={[(<div>Java 1.0 used an <b>inheritance-based event model</b>, where every component had 
            to handle events, leading to <b>inefficient</b> and <b>complex</b> code.</div>),
            (<div>Java 1.1 introduced the <b>Delegation Event Model</b>, where event listeners could be 
                registered with GUI components, making event handling: <i>More efficient</i>, <i>Easier to manage</i>, 
                <i>Better separation of concerns</i>.</div>),
            (<div><b>New Interfaces Introduced: </b> <code><b>ActionListener</b></code>, 
                <code><b>MouseListener</b></code>, <code><b>KeyListener</b></code> and 
                <code><b>WindowListener</b></code>.</div>)]} />
    </div>


    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="2" title="Inner Classes (Nested Classes)" />
        <OrderList data={[(<div>Java 1.1 introduced <b>inner classes</b>, allowing better encapsulation and organization of code.</div>),
            (<div>
                <div><b>Types of inner classes:</b></div>
                <ul>
                    <li className="mtop5p"><b>Member Inner Classes </b></li>
                    <li className="mtop5p"><b>Local Inner Classes</b></li>
                    <li className="mtop5p"><b>Anonymous Inner Classes</b></li>
                    <li className="mtop5p"><b>Static Nested Classes</b></li>
                </ul>
            </div>),
            (<div>
                <div><b>Benefis:</b></div>
                <ul>
                    <li className="mtop5p"><i>Improves encapsulation</i></li>
                    <li className="mtop5p"><i>Reduces code complexity</i></li>
                    <li className="mtop5p"><i>Useful for GUI event handling</i></li>
                </ul>
            </div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="3" title="Java Database Connectivity (JDBC) – Database Support" />
        <OrderList data={[(<div>JDBC API (java.sql package) introduced for database connectivity.</div>),
            (<div>
                <div>Allowed Java applications to communicate with databases using:</div>
                <ul>
                    <li className="mtop5p"><b>JDBC Drivers</b> (Type 1, Type 2, Type 3, Type 4)</li>
                    <li className="mtop5p"><b>SQL Query Execution</b> (<code><b>Statement</b></code>, <code><b>PreparedStatement</b></code>)</li>
                    <li className="mtop5p"><b>ResultSet</b> for processing query results.</li>
                </ul>
            </div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="4" title="Reflection API (java.lang.reflect)" />
        <OrderList data={[(<div><b>Introduced reflection mechanism</b>, allowing runtime inspection and manipulation of classes, methods, and fields.</div>),
            (<div>
                <div><b>New classes:</b></div> 
                <ul>
                    <li><code><b>Class</b></code> (To get metadata about a class)</li>
                    <li><code><b>Method</b></code> (To invoke methods dynamically)</li>
                    <li><code><b>Field</b></code>  (To access class fields dynamically)</li>
                    <li><code><b>Constructor</b></code> (To create new instances dynamically)</li>
                </ul>
            </div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="5" title="JavaBeans Component Model" />
        <OrderList data={[(<div><b>Reusable software components</b> for GUI applications.</div>),
            (<div>JavaBeans are self-contained <b>reusable components</b> that follow certain rules: <b>No-argument constructor</b>, 
                   provide <b>Getter and Setter Methods</b>, should be <b>serializable</b>.</div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="6" title="Networking Enhancements (RMI)" />
        <OrderList data={[(<div><b>Remote Method Invocation (RMI)</b> allowed Java applications to call methods on remote objects over a network.</div>),
            (<div>Improved Java’s capability for <b>distributed computing</b>.</div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="7" title="JAR (Java Archive) File Format" />
        <OrderList data={[(<div>Introduced the <b>JAR file format</b> to package Java classes and resources into a single compressed file.</div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="8" title="Internationalization & Character Encoding" />
        <OrderList data={[(<div>Added support for <b>Unicode 2.0</b>, allowing applications to work with multiple languages.</div>),
            (<div>New classes in <code><b>java.text</b></code> for <b>date</b>, <b>time</b>, <b>currency</b>, and <b>message formatting</b>.</div>)]} />
    </div>
    
    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="9" title="Security Enhancements" />
        <OrderList data={[(<div>Improved <b>Security Manager and Permissions API</b>.</div>),
            (<div>Enhanced <b>Applet Security Model</b>.</div>)]} />
    </div>

 </div>);
};

export default Java01;