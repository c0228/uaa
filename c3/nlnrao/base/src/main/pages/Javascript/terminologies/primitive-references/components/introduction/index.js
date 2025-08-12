import React from "react";
import { Card, Highlight } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

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
                            <div>Here, <b>modifying</b> <code><b>obj2</b></code> <b>also affects</b> <code><b>obj1</b></code> because 
                            both reference the same object in memory.</div>
                        </li>
                    </ul>
                </Card>
                <div className="mtop5p"><h5 className="blog-head"><b><b>Common Reference Types in JavaScript:</b></b></h5></div>
                <div>
                    <ul>
                        <li className="mtop5p"><b>Objects</b></li>
                        <li className="mtop5p"><b>Arrays</b></li>
                        <li className="mtop5p"><b>Functions</b></li>
                        <li className="mtop5p"><b>Dates, Maps, Sets, etc.</b></li>
                    </ul>
                </div>
            </div>
    </div>
    <div className="mtop5p">This distinction is <b>crucial for understanding variable behavior, memory management, and debugging</b> in JavaScript.</div>
    <div className="mtop15p"><h4 className="blog-head"><b>Key Differences Between Primitive and Reference Types</b></h4></div>
    <div className="mtop5p">
        <SimpleTable header={["Feature", "Primitive Types",	"Reference Types"]} 
                columns={[
                    ["Stored as", "Value", "Memory reference"],
                    ["Mutability", "Immutable", "Mutable"],
                    ["Copy behavior", "Creates a new copy", "Copies the reference (pointer)"],
                    ["Example", <div><code><b>let x = 5</b></code></div>, <div><code><b>let arr = [1, 2, 3]</b></code></div>],
                ]} />
    </div>

    <div className="mtop15p"><h4 className="blog-head"><b>Memory Storage</b></h4></div>
    <div className="mtop15p">In JavaScript, the two main memory areas are the <b>stack</b> and the <b>heap</b>. Where a value is stored depends 
    on its data type.</div>
    <div className="mtop15p"><h5 className="blog-head"><b>The Stack: Primitive Data Types</b></h5></div>
    <div className="mtop15p"><b>Primitive data types</b> are stored directly on the <b>stack</b>. This is a fast and efficient memory 
    space because it's a "last-in, first-out" (LIFO) structure. The JavaScript engine knows the exact size a primitive value will take 
    up, which allows it to allocate a fixed amount of memory for each value. When a function finishes executing, its associated data is 
    automatically removed from the stack.</div>
    <div className="mtop5p">This is why when you assign one primitive variable to another, a copy of the actual value is made. Changes to one 
    variable don't affect the other because they exist in separate memory locations on the stack.</div>

    <div className="mtop15p"><h5 className="blog-head"><b>The Heap: Reference Data Types</b></h5></div>
    <div className="mtop15p"><b>Reference data types</b>, or objects, are stored in the <b>heap</b>. The heap is a less organized memory area 
    with a much larger capacity than the stack. Unlike primitives, the size of a reference type (like an object or an array) is not fixed and 
    can grow dynamically.</div>
    <div className="mtop15p">When a reference type is created, the actual data is stored in the heap, but the variable itself, along with 
    a <b>pointer</b> (memory address) to the data in the heap, is stored on the stack.</div>
    <div className="mtop15p">Because variables for reference types store a memory address rather than the value itself, when you assign one 
    reference variable to another, you are copying the pointer, not the entire object.</div>
    <div className="mtop15p">Both variables then point to the same location in the heap, so a change to the object via one variable will be 
    reflected in the other.</div>
 </div>);
};

export default Introduction;