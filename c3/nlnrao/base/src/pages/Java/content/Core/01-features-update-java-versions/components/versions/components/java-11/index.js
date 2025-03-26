import React from "react";
import { Highlight, Accordian } from "e-ui-react";
import { BlogIndexHeader } from "@Components/blog-index-header/index.js";
import OrderList from "@Components/order-list/index.js";

const JAVA_SINGLEFILE_COMPILE = `java HelloWorld.java`;

const JAVA_SINGLEFILE_NOCOMPILE = `javac HelloWorld.java  
java HelloWorld`;

const VAR_LAMBDA_EXPRESSIONS = `List<String> list = List.of("Java", "Python", "C++");
list.forEach((var item) -> System.out.println(item));`;

const Java11 = () =>{

 const Features = () =>{
   return (<div>
    <div className="mtop10p padLeft5p">
        <BlogIndexHeader type="simple" index="1" title="Running Java Files with java file.java (No Compilation Required)" />
        <OrderList data={[(<div className="mtop5p">
                <div>You can now run single-file Java programs without compiling them separately.</div>
                <div className="mtop15p padLeft5p"><b>Before Java 11:</b></div>
                <Highlight content={JAVA_SINGLEFILE_COMPILE} lang="java" />
                <div className="padLeft5p"><b>After Java 11:</b></div>
                <Highlight content={JAVA_SINGLEFILE_NOCOMPILE} lang="java" />
            </div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="2" title="var in Lambda Expressions" />
        <OrderList data={[(<div className="mtop5p">
            <div>Allows using var inside lambda parameters for improved readability and consistency.</div>
            <div className="mtop15p padLeft5p"><b>Example:</b></div>
            <Highlight content={VAR_LAMBDA_EXPRESSIONS} lang="java" />
        </div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="3" title="New String Methods" />
        <OrderList data={[(<div className="mtop5p">
            <div>Several useful methods were added to <code><b>String</b></code> class:</div>
            <div class="table-responsive mtop15p">
                <table class="table">
                    <thead>
                        <tr style={{ backgroundColor:'#eee' }}>
                            <td><b>Method</b></td>
                            <td><b>Description</b></td>
                            <td><b>Example</b></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><code><b>isBlank()</b></code></td>
                            <td>Checks if a string is empty or contains only whitespace.</td>
                            <td><code><b>" ".isBlank()</b></code> (true)</td>
                        </tr>
                        <tr>
                            <td><code><b>lines()</b></code></td>
                            <td>Splits string into a stream of lines.</td>
                            <td><code><b>"Hello\nWorld".lines()</b></code></td>
                        </tr>
                        <tr>
                            <td><code><b>strip()</b></code> <code><b>stripLeading()</b></code>
                                <code><b>stripTrailing()</b></code></td>
                            <td>Removes whitespace (better than <code><b>trim()</b></code>).</td>
                            <td><code><b>" Hello ".strip()</b></code> results <code>"Hello"</code></td>
                        </tr>
                        <tr>
                            <td><code><b>repeat(n)</b></code></td>
                            <td>Repeats the string <code><b>n</b></code> times.</td>
                            <td><code><b>"Java".repeat(3)</b></code> results <code><b>"JavaJavaJava"</b></code></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="4" title="New Files Methods (for File Handling)" />
        <OrderList data={[(<div className="mtop5p">
            <div>New methods in <code><b>java.nio.file.Files</b></code> simplify file operations.</div>
            <div class="table-responsive mtop15p">
                <table class="table">
                    <thead>
                        <tr>
                            <td><b>Method</b></td>
                            <td><b>Description</b></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><code><b>writeString(Path, String, Charset)</b></code></td>
                            <td>Writes a string to a file.</td>
                        </tr>
                        <tr>
                            <td><code><b>readString(Path, Charset)</b></code></td>
                            <td>Reads a file’s contents into a string.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="5" title=" HTTP Client (Standardized in java.net.http)" />
        <OrderList data={[(<div className="mtop5p">Java 9 introduced an experimental HTTP client, which is now 
            fully integrated.</div>),
            (<div className="mtop5p">Supports HTTP/2, WebSockets, and Asynchronous Requests.</div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="6" title="Removal of Deprecated APIs" />
        <OrderList data={[(<div className="mtop5p">Java EE Modules (<code><b>javax.xml</b></code> 
            <code><b>javax.activation</b></code> <code><b>javax.annotation</b></code> etc.)</div>),
            (<div className="mtop5p">CORBA (Common Object Request Broker Architecture)</div>),
            (<div>JavaFX is now a separate module</div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="7" title="Garbage Collector (GC) Improvements" />
        <OrderList data={[(<div className="mtop5p">
            <div><b>ZGC (Experimental Low-Latency GC):</b></div>
            <div>
                <ul>
                    <li>Scalable, reduces pause times, and improves performance.</li>
                    <li>
                        <div className="padLeft5p">Enabled with:</div>
                        <Highlight content={`java -XX:+UseZGC MyApplication`} lang="html" />
                    </li>
                </ul>
            </div>
        </div>),
        (<div className="mtop5p">
            <div><b>Epsilon GC (No-Op GC):</b></div>
            <div>
                <ul>
                    <li>Does not free memory, useful for performance testing.</li>
                    <li>
                        <div className="padLeft5p">Enabled with:</div>
                        <Highlight content={`java -XX:+UseEpsilonGC MyApplication`} lang="html" />
                    </li>
                </ul>
            </div>
        </div>)]} />
    </div>

    <div className="mtop15p padLeft5p">
        <BlogIndexHeader type="simple" index="8" title="Flight Recorder and Mission Control (Open Source)" />
        <OrderList data={[(<div className="mtop5p"><b>Java Flight Recorder (JFR):</b> Collects performance 
            data with minimal overhead.</div>),
            (<div className="mtop5p"><b>Java Mission Control (JMC):</b> Analyzes JFR recordings to diagnose 
            performance issues.</div>)]} />
    </div>
   </div>);
 };
 
 return (<div className="mtop15p">
    <div className="mtop15p"><h4><b>Java SE 11 (September, 2018):</b></h4><hr/></div>
    <div className="mtop15p"><b>Java 11</b> is a <b>Long-Term Support (LTS) release</b>, meaning it receives extended 
    support and security updates. It introduced several <b>important enhancements</b>, including <b>removal of deprecated APIs</b>, 
    <b>performance improvements</b>, and <b>new features</b>.</div>
    <div className="mtop15p">
            <Accordian id="Java11" data={[{
                    id:"java11-features", 
                    title: (<div><b>FEATURES:</b></div>),
                    component:(<Features />)
                }]} />
    </div>
    

 </div>);
};

export default Java11;

