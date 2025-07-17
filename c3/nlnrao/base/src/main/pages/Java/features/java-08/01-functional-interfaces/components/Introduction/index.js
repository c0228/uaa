import React from "react";
import { Card, Highlight } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const ANONYMOUS_EXAMPLE_JAVA = `Runnable runnable = new Runnable() {
    @Override
    public void run() {
        System.out.println("Running...");
    }
};`;

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p">
        <Card padding={15} backgroundColor="#eee">
            <div><h4 className="blog-head"><b>The Problem with Anonymous Classes</b></h4></div>
            <div className="mtop15p">Before Java 8, developers relied heavily on <b>anonymous inner classes</b> to implement 
            interfaces, especially for use cases like event handling, thread execution, or strategy patterns. While functional 
            in nature, <b>anonymous classes were verbose</b>, <b>cluttered</b> and <b>hard to read</b> — especially when used 
            for implementing a single-method interface.</div>
            <div className="mtop5p">Take this example:</div>
            <div className="mtop5p"><Highlight content={ANONYMOUS_EXAMPLE_JAVA} lang="java" /></div>
            <div className="mtop5p">This simple task of printing a line requires 5+ lines of boilerplate code. When such patterns 
            are repeated across codebases, it results in <b>low readability</b>, <b>higher maintenance cost</b> and <b>poor developer experience</b>.</div>
            <div className="mtop5p">To solve this, <b>Java 8 introduced lambda expressions</b>, but for lambdas to work, they 
            needed a contract: <b>interfaces with a single abstract method</b> — which became known as <b>Functional Interfaces</b>.</div>
        </Card>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Introduction to Functional Interfaces</b></h2></div>
    <div className="mtop15p">A <b>Functional Interface</b> in Java is an interface that contains <b>exactly one abstract method</b>. These 
    interfaces provide target types for <b>lambda expressions</b> and <b>method references</b>, which allow for more concise, readable 
    and maintainable code.</div>
    <div>
        <Card padding={15} backgroundColor="#eee">
            <div><b>Note:</b></div>
            <div>A <b>Functional Interface</b> is an interface that contains <b>only one abstract method</b>. It can have
             multiple <code><b>default</b></code> or <code><b>static</b></code> methods, but only <b>one abstract method</b>, which 
             makes it eligible to be used with <b>lambda expressions</b>, <b>method references</b>, and <b>streams</b>.</div>
        </Card>
    </div>
    <div className="mtop15p">The main motivation behind functional interfaces was to simplify the syntax and encourage a more functional 
        programming style in Java, especially in operations on <b>collections</b> and <b>streams</b>.</div>
    <div className="mtop15p">Java 8 also introduced the <code><b>@FunctionalInterface</b></code> annotation to explicitly declare an 
    interface as functional and ensure it is used correctly.</div>

    <div className="mtop15p"><h4 className="blog-head"><b>Key Characteristics:</b></h4></div>
    <div className="mtop15p">
        <ul>
            <li>Contains exactly <b>one abstract method</b></li>
            <li className="mtop5p">Can have multiple <b>default</b> or <b>static methods</b></li>
            <li className="mtop5p">Used as the target type for lambda expressions</li>
        </ul>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Why Use Functional Interfaces?</b></h2></div>
    <div className="mtop15p">
        <ul>
            <li><b>Less boilerplate</b> code compared to anonymous inner classes</li>
            <li className="mtop5p">Enables <b>lambda expressions</b>, enhancing readability</li>
            <li className="mtop5p">Encourages <b>functional-style programming</b> in Java</li>
            <li className="mtop5p">Useful in <b>Streams API</b>, <b>event handling</b>, <b>callbacks</b>, etc.</li>
        </ul>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Common In-Built Functional Interfaces</b></h2></div>
    <div className="mtop15p">Java 08 comes with a rich set of built-in functional interfaces under 
    the <code><b>java.util.function</b></code> package. Here are a few commonly used ones:</div>
    <div className="mtop15p">
            <SimpleTable header={["Interface", "Abstract Method", "Purpose"]} 
                    columns={[
                        [(<div><code><b>Function&lt;T,R&gt;</b></code></div>), (<div><code><b>R apply(T t)</b></code></div>), "Takes input and returns a result"],
                        [(<div><code><b>Consumer&lt;T&gt;</b></code></div>), (<div><code><b>void accept(T t)</b></code></div>), "Takes input and returns nothing"],
                        [(<div><code><b>Supplier&lt;T&gt;</b></code></div>), (<div><code><b>T get()</b></code></div>), "Takes no input and returns result"],
                        [(<div><code><b>Predicate&lt;T&gt;</b></code></div>), (<div><code><b>boolean test(T t)</b></code></div>), "Returns boolean based on input"],
                        [(<div><code><b>UnaryOperator&lt;T&gt;</b></code></div>), (<div><code><b>T apply(T t)</b></code></div>), "Same input and output types"], 
                    ]} />
    </div>
 </div>);

};

export default Introduction;