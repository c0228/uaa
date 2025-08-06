import React from "react";
import { Card, Highlight } from "e-ui-react";

const PRIMITIVE_NO_EFFECT = `let a = 10;
let b = a; // b is a copy of a

b = 20;
console.log(a); // 10
console.log(b); // 20`;

const REFERENCE_WITH_EFFECT = `let obj1 = { name: "John" };
let obj2 = obj1; // obj2 points to the same memory location as obj1

obj2.name = "Doe";
console.log(obj1.name); // "Doe"`;

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p">
        <Card padding={15} backgroundColor="#eee">
            <div align="center"><h4 className="blog-head"><b>The Problem Before Data Types</b></h4></div>
            <div className="mtop15p">
                Before modern programming languages like JavaScript became popular, developers often struggled 
                with <b>storing and manipulating data efficiently</b>.
            </div>
            <div>
                <ul>
                    <li className="mtop5p">Imagine having only one type of container for all kinds of data: numbers, text, or even objects.</li>
                    <li className="mtop5p">Without proper <i>data classification</i>, programs would be prone to errors because the system 
                    wouldn’t know how to handle different operations.</li>
                    <li className="mtop5p">For example, adding a number and a string together could result in unexpected behavior if the 
                        language couldn’t differentiate them.</li>
                </ul>
            </div>
            <div className="mtop15p">To solve this, JavaScript <b>introduced a clear separation of data types,</b> which are categorized 
            into <b>Primitive</b> and <b>Reference</b> types. This classification helps developers <b>store, manage, and operate on data reliably.</b></div>
        </Card>
    </div>
    <div className="mtop15p"><h2 className="blog-head"><b>Introduction to JavaScript Data Types</b></h2></div>
    <div className="mtop15p">
        <div>JavaScript data types are broadly divided into two categories:</div>
            <div className="mtop5p">
                <div><h4 className="blog-head"><b>1. Primitive Data Types</b></h4></div>
                <Card padding={15} backgroundColor="#eee">
                    <div><b>Definition:</b></div>
                    <ul>
                        <li className="mtop5p">These store <b>single, immutable values.</b></li>
                        <li className="mtop5p">
                            <div>When you copy a primitive value to another variable, <b>a separate copy is 
                            created (Changes to one variable do not affect another because they are stored by value).</b></div>
                            <div className="mtop5p"><Highlight content={PRIMITIVE_NO_EFFECT} lang="javascript" /></div>
                        </li>
                    </ul>
                </Card>
                <div className="mtop5p"><h5 className="blog-head"><b><b>Types of Primitive Data Types:</b></b></h5></div>
                <div>
                    <ul>
                        <li className="mtop5p"><b>String –</b> Represents text</li>
                        <li className="mtop5p"><b>Number –</b> Represents both integers and floating-point numbers</li>
                        <li className="mtop5p"><b>Boolean –</b> Represents true or false</li>
                        <li className="mtop5p"><b>Undefined –</b> Declared but not assigned a value</li>
                        <li className="mtop5p"><b>Null –</b> Represents an empty or non-existent value</li>
                        <li className="mtop5p"><b>Symbol (ES6) –</b> Represents unique identifiers</li>
                        <li className="mtop5p"><b>BigInt (ES11) –</b> Represents integers larger than Number.MAX_SAFE_INTEGER</li>
                    </ul>
                </div>
            </div>
            <div className="mtop5p">
                <div><h4 className="blog-head"><b>2. Reference (Non-Primitive) Data Types</b></h4></div>
                <Card padding={15} backgroundColor="#eee">
                    <div><b>Definition:</b></div>
                    <ul>
                        <li className="mtop5p">These store <b>references (memory addresses) of objects</b> rather than actual values.</li>
                        <li className="mtop5p">
                            <div>When you copy a reference type, <b>both variables point to the same object in memory.</b></div>
                            <div className="mtop5p"><Highlight content={REFERENCE_WITH_EFFECT} lang="javascript" /></div>
                        </li>
                    </ul>
                </Card>
            </div>
    </div>
    <div className="mtop5p">This distinction is <b>crucial for understanding variable behavior, memory management, and debugging</b> in JavaScript.</div>
 </div>);
};

export default Introduction;