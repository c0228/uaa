import React from "react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p">
        <div><i>In the world of software development and computer science, performance is king. Whether you're building a 
        mobile app, a web server, or a machine learning algorithm, efficiency matters. Imagine writing two different algorithms 
        that solve the same problem — say, sorting a list. Both work correctly, but one finishes in milliseconds, while the other 
        takes minutes. The difference? <b>Algorithmic efficiency</b>.</i></div>
        <div className="mtop15p">But how do we compare the performance of algorithms in a meaningful, language-independent way — 
        without running them on every possible input? That's where <b>Big-O Notation</b> comes in.</div>
    </div>
    <div className="mtop15p"><h2 className="blog-head"><b>Introduction</b></h2></div>
    <div className="mtop15p"><i>
        <div><b>Big-O Notation</b> is a mathematical notation used to describe the <b>time and space complexity</b> of an 
        algorithm in terms of input size, usually denoted as <code><b>n</b></code>. It gives us a way to express how the runtime 
        or memory usage grows as the input grows. Think of Big-O as a <b>worst-case efficiency scale</b>. It doesn't give exact 
        timings, but instead focuses on how the algorithm <b>scales</b>:</div>
    </i></div>
    <div className="mtop15p">
        <SimpleTable header={["Big-O","Name","Example Algorithm","Growth Rate"]} 
            columns={[
                [(<b>O(1)</b>),"Constant Time","Accessing an array index","Fastest"],
                [(<b>O(log n)</b>),"Logarithmic Time","Binary Search","Shrinks fast"],
                [(<b>O(n)</b>),"Linear Time","Linear Search","Straight line"],
                [(<b>O(n log n)</b>),"Log-linear Time","Merge Sort, Quick Sort","Balanced"],
                [(<b>O(n²)</b>),"Quadratic Time","Bubble Sort, Selection Sort","Slow"],
                [(<b>O(2ⁿ)</b>),"Exponential Time","Recursive Fibonacci","Very Slow"],
                [(<b>O(n!)</b>),"Factorial Time","Solving Travelling Salesman","Extremely Slow"]
            ]} />
    </div>

    <div className="mtop15p"><h4 className="blog-head"><b>Key Concepts:</b></h4></div>
    <div className="mtop15p">
        <ul>
            <li>
                <div><b>Asymptotic Analysis:</b></div>
                <div>Big-O ignores constants and lower-order terms. It's about how performance <b>behaves at scale</b>, 
                not on small inputs.</div>
            </li>
            <li>
                <div><b>Worst-case Focus:</b></div>
                <div>Big-O typically analyzes the <b>worst-case scenario</b> to prepare for the most demanding inputs.</div>
            </li>
            <li>
                <div><b>Comparison Tool:</b></div>
                <div>It helps compare different algorithms objectively, even across languages or systems.</div>
            </li>
        </ul>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Why Is Big-O Important?</b></h2></div>
    <div className="mtop15p">
        <ul>
            <li><b>Predictability:</b> You can anticipate performance before running the code.</li>
            <li><b>Scalability:</b> Know whether your code will survive large inputs.</li>
            <li><b>Optimization:</b> Focus your efforts where they matter most.</li>
            <li><b>Interview Readiness:</b> Big-O is a staple topic in technical interviews.</li>
        </ul>
    </div>
 </div>);
};

export default Introduction;