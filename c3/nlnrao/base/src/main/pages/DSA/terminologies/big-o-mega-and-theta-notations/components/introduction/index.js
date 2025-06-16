import React from "react";

const Introduction = () =>{
 return (<div>
    <div className="mtop15p lh28p fs16p"><i>Understanding algorithmic efficiency is at the heart of writing 
    performant code. In this blog, we explore Big-O, Omega (&Omega;), and Theta (&Theta;) notations deeply. We will 
    analyze their definitions, usages, and implications in real-world programming.</i></div>
    <div align="center"><h2 className="blog-head mtop15p"><b>Introduction to Asymptotic Notations</b></h2></div>
    <div className="mtop15p fs16p lh28p">
     <b><i>Asymptotic notations</i></b> describe the behavior of an algorithm in terms of input size <b><i>n</i></b> as 
     it approaches infinity. These notations allow us to express performance independent of machine or language.
    </div>
    <div><h4 className="blog-head mtop15p"><b>Why Do We Need It?</b></h4></div>
    <div className="fs16p lh28p">
        <ul>
            <li>To compare algorithms efficiently.</li>
            <li>To predict performance in scalable systems.</li>
        </ul>
    </div>

 </div>);
};

export default Introduction;