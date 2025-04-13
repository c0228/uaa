import React from "react";
import { Card, Highlight } from "e-ui-react";

const PY_VARIABLES_LIST = `# Example
age = 25
name = "John"
is_student = True`;

const Introduction = () =>{
 return (<div className="mtop15p mbot15p fs16p lh28p">
    <div><i>Variables are the basic building blocks of any programming language. They are like containers that store data values. 
        Python makes working with variables incredibly simple and powerful, especially when compared to languages like Java or 
        JavaScript.<br/>
        In this blog post, we will explore:<br/>
        <ul>
            <li className="mtop5p"> What are variables in Python?</li>
            <li className="mtop5p">How to declare and use them</li>
            <li className="mtop5p">Python’s built-in data types</li>
            <li className="mtop5p">Dynamic typing vs Static typing</li>
            <li className="mtop5p">Type casting in Python</li>
            <li className="mtop5p">Variable naming conventions</li>
            <li className="mtop5p">Python vs JavaScript vs Java in variable handling</li>
            <li className="mtop5p">Real-world examples to demonstrate power and simplicity</li>
        </ul>
        </i></div>
    <Card padding={10}>
        <div align="center" className="mtop15p"><h2 className="blog-head"><b>1. What is a Variable?</b></h2></div>
        <div className="mtop15p">A <b>variable</b> is a named location in memory that stores a value. You can think of it as a label 
            on a box. You put something inside (like a number or a string), and you can access it later using the label.</div>
        <div className="mtop15p padLeft5p">In Python, variables are extremely flexible and <b>do not require explicit type declaration</b>.</div>
        <Highlight content={PY_VARIABLES_LIST} lang="python" />
    </Card>

    <div align="center" className="mtop15p"><h2 className="blog-head"><b>2. How Variables Work in Python?</b></h2></div>
    <div className="mtop15p">In Python, everything is an object — even numbers and functions.</div>
    <div className="mtop15p padLeft5p">When you write:</div>
    <Highlight content={`x = 10`} lang="python" />
    <div className="mtop15p">You're actually creating an integer object <code><b>10</b></code> and then binding the 
    name <code><b>x</b></code> to it.</div>
    <div className="mtop15p">Python handles all the heavy lifting in the background:
        <ul>
            <li className="mtop5p">Allocating memory</li>
            <li className="mtop5p">Assigning data types</li>
            <li className="mtop5p">Managing reference counts</li>
        </ul>
    </div>
    <div className="mtop15p padLeft5p">You don't have to declare the type like in Java:</div>
    <Highlight content={`int x = 10; // Required in Java`} lang="java" />
    <div className="mtop15p">Or worry about hoisting issues like in JavaScript.</div>
 </div>);
};

export default Introduction;