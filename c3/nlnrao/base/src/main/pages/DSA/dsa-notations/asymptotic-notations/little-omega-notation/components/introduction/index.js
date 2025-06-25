import React from "react";
import { Card } from "e-ui-react";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div><i>
        <div>In the world of algorithms and data structures, it's important to evaluate how efficient an algorithm is — not just 
        for one input size, but for <u>all large enough</u> inputs. That’s where <b>asymptotic notations</b> come into play. They 
        help us express the behavior of algorithms as the input size approaches infinity. You might be familiar with common 
        notations like <b>Big-O</b>, <b>Big-Theta (&Theta;)</b> and <b>Big-Omega (&Omega;)</b>, which offer upper, tight, and 
        lower bounds respectively.</div>
        <div>But what about cases where we want to show that a function grows strictly faster than another—even if it's not a 
            tight or loose bound? That’s where <b>Little-Omega (&omega;)</b> notation enters the stage.</div>
        </i></div>
    <div className="mtop15p"><h2 className="blog-head"><b>Introduction: Little-Omega (&omega;) Notation</b></h2></div>
    <div className="mtop15p">Little-Omega (denoted as <code><b>&omega;</b></code>) is an <b>asymptotic lower-bound notation</b> that 
    describes functions that grow <b>faster</b> than another function, <b>but not at the same rate</b>.</div>
    <div className="mtop5p">In formal terms:</div>
    <div>
        <Card padding={15} backgroundColor="#eee">
            A function <b>f(n)</b> is <b>&omega;(g(n))</b> if for every constant <code><b>c &gt; 0</b></code>, there exists a 
            value n<sub>0</sub> such that:<br/><code><b>f(n) &gt; c·g(n) for all n &gt; n<sub>0</sub></b></code>
        </Card>
    </div>
    <div className="mtop5p">
        This means that as <code><b>n</b></code> grows large, <code><b>f(n)</b></code> eventually becomes greater than any constant 
        multiple of <code><b>g(n)</b></code> — and stays that way. Unlike Big-Omega (&Omega;), Little-Omega <b>does not 
        allow</b> <code><b>f(n)</b></code> to grow at the same rate as <code><b>g(n)</b></code>; it must grow strictly faster.
    </div>
    <div className="mtop15p"><h5 className="blog-head"><b>Think of it this way:</b></h5></div>
    <div className="mtop15p">
        <ul>
            <li><code><b>f(n) = &omega;(g(n))</b></code> means <code><b>f(n)</b></code> grows much faster than <code><b>g(n)</b></code>.</li>
            <li>There's <b>no constant</b> <code><b>c</b></code> for which <code><b>f(n) &le; c·g(n)</b></code> for all large <code><b>n</b></code>.</li>
        </ul>
    </div>

 </div>);
};

export default Introduction;