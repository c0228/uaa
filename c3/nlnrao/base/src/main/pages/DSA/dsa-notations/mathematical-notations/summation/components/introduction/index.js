import React from "react";
import ImgSrc1 from "./../../assets/general-form.png";
import ImgSrc2 from "./../../assets/example.png";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><i>
        <div><b>summation notation (&sum;)</b> is an essential concept that bridges theory with practical computation. This 
        powerful symbol is the shorthand for adding a sequence of numbers and is widely used in algorithms, data analysis, 
        and even machine learning.</div>
        <div className="mtop15p">Understanding summation isn't just a matter of math—it’s a tool 
        to <b>think programmatically</b>, optimize loops, and model problems.</div> 
    </i></div>
    <div className="mtop15p"><h2 className="blog-head"><b>Introduction to Summation Notation (&sum;)</b></h2></div>
    <div className="mtop15p">
        The <b>summation notation</b>, represented by the Greek letter <b>Sigma (&sum;)</b>, is a concise way to express 
        the addition of a sequence of terms.
    </div>
    <div className="mtop15p"><b>General Form:</b></div>
    <div className="mtop15p">
        <img src={ImgSrc1} style={{ width:'100px', height:'auto' }} />
    </div>
    <div className="mtop5p">
        <ul>
            <li><b>i:</b> Index of summation (starts at a)</li>
            <li><b>a:</b> Lower bound (start of the sum)</li>
            <li><b>b:</b> Upper bound (end of the sum)</li>
            <li><b>f(i):</b> Function applied to each index</li>
        </ul>
    </div>
    <div className="mtop15p"><b>Example:</b></div>
    <div className="mtop15p">
        <img src={ImgSrc2} style={{ width:'240px', height:'auto' }} />
    </div>
    <div className="mtop15p">
        <div>You’ll often see summations used in areas like:</div>
        <div>
            <ul>
                <li>Calculating the total of a sequence</li>
                <li>Statistical formulas (mean, variance)</li>
                <li>Algorithm complexities (like nested loops)</li>
                <li>Mathematical series (arithmetic or geometric)</li>
            </ul>
        </div>
    </div>
 </div>);
};

export default Introduction;