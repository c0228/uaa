import React from "react";
import { Highlight } from "e-ui-react";

const POINTER_EXAMPLE_C = `int x = 10;
int* p = &x;     // p holds address of x
printf("%d", *p); // dereference p → outputs 10
`;

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><i>
        <div>Every variable in your code is stored somewhere in memory. While high-level languages often abstract this 
            detail, <b>pointer notation</b> lets programmers directly work with <b>memory addresses</b>. In systems programming 
            and languages like C or C++, pointer notation is vital for efficient, low-level operations.</div> 
        <div className="mtop15p">Even though <b>Python</b>, <b>Java</b>, and <b>JavaScript</b> don’t use traditional pointers, understanding 
        the <b>concept</b> and <b>pointer-like behavior</b> in these languages is essential.</div>   
    </i></div>
    <div className="mtop15p"><h2 className="blog-head"><b>Introduction to Pointer Notation: Understanding the Basics of Memory Access</b></h2></div>
    <div className="mtop15p"><h4 className="blog-head"><b>What is a Pointer?</b></h4></div>
    <div className="mtop5p">A <b>pointer</b> is a variable that <b>stores the memory address</b> of another variable.</div>
    <div className="mtop15p"><h4 className="blog-head"><b>Pointer Notation:</b></h4></div>
    <div className="mtop5p">
        <div>In languages like <b>C/C++</b> (where it originates), pointer notation includes:</div>
        <div>
            <ul>
                <li><code><b>*</b></code> (dereference operator)</li>
                <li><code><b>&</b></code> (address-of operator)</li>
            </ul>
        </div>
    </div>
    <div className="mtop15p"><h5 className="blog-head"><b>Example in C:</b></h5></div>
    <div className="mtop5p">
        <Highlight content={POINTER_EXAMPLE_C} lang="c" />
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Why Learn Pointer Notation?</b></h2></div>
    <div className="mtop5p">
        <ul>
            <li>Essential for <b>memory management</b>, <b>data structures</b>, and <b>system-level programming</b></li>
            <li>Helps understand <b>references</b> and <b>object mutability</b> in modern languages</li>
            <li>Crucial in <b>performance-critical</b> applications</li>
        </ul>
    </div>
 </div>);
};

export default Introduction;