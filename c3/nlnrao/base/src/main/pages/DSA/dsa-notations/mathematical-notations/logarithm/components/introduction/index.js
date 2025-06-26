import React from "react";
import { Card } from "e-ui-react";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><i>
        <div>In the world of mathematics and computer science, some concepts quietly power much of what we 
        do — <b>logarithms</b> are one of them. Though the word may sound intimidating, logarithms are simply the inverse 
        of exponents and are essential for simplifying complex calculations.</div>
        <div className="mtop15p">From measuring earthquake intensity and sound levels to optimizing algorithms and analyzing 
        data growth, logarithms appear everywhere. Whether you're solving mathematical equations, analyzing code 
        efficiency like <code><b>O(log n)</b></code>, or scaling machine learning models, a strong understanding of 
        logarithms gives you a serious advantage.</div>
        <div className="mtop15p">Before diving into coding or data science, it's important to grasp what logarithms mean 
        and how to use them effectively.</div>
    </i></div>
    <div className="mtop15p"><h2 className="blog-head"><b>Introduction to Logarithm Notation (log)</b></h2></div>
    <div className="mtop5p">The <b>logarithm</b> answers the question:</div>
    <div className="mtop5p">
        <Card padding={15} backgroundColor="#eee">
            <b>"To what power must a base be raised to get a certain number?"</b>
        </Card>
    </div>
    <div className="mtop5p"><h5 className="blog-head"><b>Standard Form:</b></h5></div>
    <div className="mtop5p">
        <Card padding={15} backgroundColor="#eee">
            <div style={{ color:'#d63384' }}><b>log<sub>b</sub>(x) = y &#8660; b<sup>y</sup> = x</b></div>
        </Card>
    </div>
    <div className="mtop5p">
        <ul>
            <li><b>x</b> is the number (input)</li>
            <li><b>b</b> is the base</li>
            <li><b>y</b> is the result (exponent)</li>
        </ul>
    </div>
    <div className="mtop5p"><h5 className="blog-head"><b>Examples:</b></h5></div>
    <div className="mtop5p">
        <ul>
            <li>log<sub>10</sub>(100) = 2 -&gt; because 10<sup>2</sup> = 100</li>
            <li>log<sub>2</sub>(8) = 3 -&gt; because 2<sup>3</sup> = 8</li>
            <li>log<sub>e</sub>(x) is called the <b>natural logarithm</b>, denoted as <b>ln(x)</b></li>
        </ul>
    </div>


    <div className="mtop15p"><h2 className="blog-head"><b>Properties of Logarithms</b></h2></div>
    <div className="mtop5p">Some common rules:</div>
    <div className="mtop5p">
        <ol>
            <li><b>Product Rule:</b> <code><b>log<sub>b</sub>(xy) = log<sub>b</sub>(x) + log<sub>b</sub>(y)</b></code></li>
            <li><b>Quotient Rule:</b> <code><b>log<sub>b</sub>(x/y) = log<sub>b</sub>(x) - log<sub>b</sub>(y)</b></code></li>
            <li><b>Power Rule:</b> <code><b>log<sub>b</sub>(x<sup>r</sup>) = r . lob<sub>b</sub>(x)</b></code></li>
            <li><b>Change of Base Rule:</b> <code><b>log<sub>b</sub>(x) = log<sub>k</sub>(x) / log<sub>k</sub>(b)</b></code></li>
        </ol>
    </div>
 </div>);
};

export default Introduction;