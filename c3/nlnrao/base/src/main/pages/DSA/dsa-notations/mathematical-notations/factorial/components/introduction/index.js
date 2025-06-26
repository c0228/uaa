import React from "react";
import { Card } from "e-ui-react";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div><i>
        <div>In mathematics and computer science, certain symbols carry tremendous meaning despite their simple appearance. 
        One such symbol is the <b>factorial (!)</b>. At first glance, it may seem like just a curious punctuation mark next 
        to a number. But dig deeper, and you'll find it's a powerful tool used 
        in <b>combinatorics</b>, <b>probability</b>, <b>recursion</b>, <b>permutations</b>, and <b>algorithm design</b>.</div>
        <div>Whether you're preparing for competitive coding, data science, or advanced math, understanding 
        the <b>factorial notation</b> is a must.</div>
    </i></div>
    <div className="mtop15p"><h2 className="blog-head"><b>Introduction to Factorial Notation (!)</b></h2></div>
    <div className="mtop15p">The <b>factorial of a non-negative integer n</b>, written as <b>n!</b>, is the product of all 
    positive integers <i>less than</i> or <i>equal to</i> <b>n</b>.</div>
    <div className="mtop5p"><h5 className="blog-head"><b>Factorial Formula:</b></h5></div>
    <div className="mtop5p">
        <Card padding={15} backgroundColor="#eee">
            <b>n! = n * (n-1) * (n-2) * ... * 2 * 1</b>
        </Card>
    </div>
    <div className="mtop15p">By definition:</div>
    <div className="mtop5p">
        <ul>
            <li>0! = 1</li>
            <li>1! = 1</li>
            <li>5! = 5 * 4 * 3 * 2 * 1 = 120</li>
        </ul>
    </div>
    <div className="mtop5p"><h5 className="blog-head"><b>Uses of Factorial:</b></h5></div>
    <div className="mtop5p">
        <ul>
            <li>
                <div><b>Permutations:</b> Number of ways to arrange items.</div>
                <Card padding={15} backgroundColor="#eee">P(n,r) = n!/(n-r)!</Card>
            </li>
            <li className="mtop5p">
                <div><b>Combinations:</b></div>
                <Card padding={15} backgroundColor="#eee">C(n,r) = n! / r!(n-r)!</Card>
            </li>
            <li className="mtop5p"><b>Recursive algorithms</b></li>
            <li className="mtop5p"><b>Mathematical series (e.g., Taylor series)</b></li>
            <li className="mtop5p"><b>Algorithm complexity calculations</b></li>
        </ul>
    </div>
 </div>);
};

export default Introduction;