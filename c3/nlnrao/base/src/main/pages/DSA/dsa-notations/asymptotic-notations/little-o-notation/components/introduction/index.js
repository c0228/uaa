import React from "react";
import { Card } from "e-ui-react";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div><i>When we analyze the performance of an algorithm, we often turn to <b>asymptotic notation</b> — a mathematical way 
    to express the running time or space complexity as the input size grows. You may be familiar with the popular notations 
    like <b>Big-O (O)</b>, <b>Omega (&Omega;)</b> and <b>Theta (&Theta;)</b>, which give us upper, lower, or tight bounds on 
    algorithm complexity. But there's another, less commonly discussed yet powerful notation — <b>Little-o (o) notation</b>.</i></div>
    <div className="mtop15p"><i>While Big-O tells us an algorithm's <u>worst-case</u> upper 
    bound, <b>Little-o helps us define a strictly tighter upper bound</b>. It’s especially useful when we want to make precise 
    comparisons between algorithms or functions where performance is improving and we want to measure “how much better” it is.</i></div>
    
    <div className="mtop15p"><h2 className="blog-head"><b>Introduction: What is Little-o Notation?</b></h2></div>
    <div className="mtop15p">In simple terms, <b>Little-o (o) notation</b> is a mathematical notation used to describe an <i>upper bound</i> on 
    the growth rate of a function that is <b>not tight</b>. Formally,</div>
    <div className="mtop10p">
        <Card padding={15} backgroundColor="#eee">
        A function f(n) is <b>o(g(n))</b>, written as <b>f(n) &isin; o(g(n))</b>, if and only if for every constant <b>c &gt; 0</b>, there 
        exists a constant n₀ such that for all <b>n &gt; n<sub>0</sub></b>, <b>f(n) &lt; c * g(n)</b>
        </Card>
    </div>
    <div className="mtop5p">In other words, <b>f(n) grows strictly slower than g(n)</b> as n becomes very large.</div>

    <div className="mtop15p"><h2 className="blog-head"><b>Intuition Behind Little-o</b></h2></div>
    <div className="mtop15p">
        <div>Imagine you're analyzing two algorithms:</div>
        <div>
            <ul>
                <li><b>Algorithm A:</b> runs in time <code><b>f(n) = n</b></code></li>
                <li><b>Algorithm B:</b> runs in time <code><b>g(n) = n log n</b></code></li>
            </ul>
        </div>
        <div>Here, <code><b>f(n)</b></code> is <b>not</b> in <code><b>o(g(n))</b></code> because both functions grow at 
        similar rates.</div>
        <div>However, if:</div>
        <div>
            <ul>
                <li><code><b>f(n) = log n</b></code></li>
                <li><code><b>g(n) = n</b></code></li>
            </ul>
        </div>
        <div>Then <code><b>f(n) &isin; o(g(n))</b></code> because <code><b>log(n)</b></code> grows <b>much slower</b> than <code><b>n</b></code>, and 
        eventually the ratio approaches <b>0</b>.</div>
    </div>
 </div>);
};

export default Introduction;