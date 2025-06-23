import React from "react";
import { Card } from "e-ui-react";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div><i>Data Structures and Algorithms (DSA) is a core part of computer science and programming. Every algorithm 
        has two primary resource costs: <code><b>time</b></code> and <code><b>space</b></code>.</i></div>
    <div className="mtop5p">
        <Card padding={15} backgroundColor="#eee">
            <div><b>Time complexity</b> measures how the runtime of an algorithm changes with input size.</div>
            <div><b>Space complexity</b> refers to the amount of memory an algorithm uses as the input size grows.</div>
            <div className="mtop5p"><i>"Understanding these complexities helps in writing efficient programs. Time and space 
            complexity are usually expressed using Big-O notation. <code><b>Big-O</b></code> helps in evaluating the 
            worst-case scenario for an algorithm. There are other notations 
            like <code><b>Omega</b></code> and <code><b>Theta</b></code> for best and average cases"</i></div>
        </Card>
    </div>
 </div>);
};

export default Introduction;