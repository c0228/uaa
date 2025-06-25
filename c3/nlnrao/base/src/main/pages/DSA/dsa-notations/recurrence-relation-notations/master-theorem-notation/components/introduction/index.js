import React from "react";
import { Card } from "e-ui-react";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div><i>
        <div>In the world of <b>Data Structures and Algorithms (DSA)</b>, analyzing the time complexity of recursive 
        functions is crucial. Many recursive algorithms — like <b>Merge Sort</b>, <b>Binary Search</b> and <b>Divide-and-Conquer algorithms</b> — don’t 
        have straightforward time complexities. Instead, they are expressed as <b>recurrence relations</b>.</div>
        <div className="mtop15p">To solve such recurrence relations and determine how efficient an algorithm is, we often rely 
            on a powerful tool: the <b>Master Theorem</b>.</div>
        </i></div>
    <div className="mtop15p"><h2 className="blog-head"><b>Introduction to Master Theorem Notation</b></h2></div>
    <div className="mtop5p"><h4 className="blog-head"><b>What is a Recurrence Relation?</b></h4></div>
    <div className="mtop5p">A <b>recurrence relation</b> defines a function based on its value at smaller inputs. For example:</div>
    <div className="mtop5p">
        <Card padding={15} backgroundColor="#eee">
            T(n) = 2T(n/2) + n
        </Card>
    </div>
    <div className="mtop5p">This means that solving a problem of size <code><b>n</b></code> requires:</div>
    <div>
        <ul>
            <li>2 subproblems of size <code><b>n/2</b></code></li>
            <li>Plus <code><b>n</b></code> time to combine the results</li>
        </ul>
    </div>
    <div>This kind of recurrence commonly appears in <b>Divide and Conquer</b> algorithms.</div>

    <div className="mtop15p"><h4 className="blog-head"><b>Master Theorem - The Formal Definition</b></h4></div>
    <div className="mtop5p">The <b>Master Theorem</b> provides a <b>direct way</b> to find the <b>asymptotic complexity</b> for 
    recurrence relations of the form:</div>
    <div>
        <Card padding={15} backgroundColor="#eee">
            T(n) = a.T(n/b) + f(n)
        </Card>
    </div>
    <div>
        Where:
        <ul>
            <li><b>a &ge; 1:</b> number of subproblems</li>
            <li><b>b &gt; 1:</b> size reduction factor</li>
            <li><b>f(n):</b> the work done outside the recursive calls</li>
        </ul>
    </div>

    <div className="mtop15p"><h4 className="blog-head"><b>The Three Master Theorem Cases</b></h4></div>
    <div className="mtop5p">Let <code><b>f(n) = &Theta;(n<sup>d</sup>)</b></code>. Then:</div>
    <div>
        <ol>
            <li>
                <div><b>Case 1: Polynomial smaller than recursive cost</b></div>
                <div>
                    <ul>
                        <li>If <code><b>f(n) = O(n<sup>log<sub>b</sub>(a-&epsilon;)</sup>)</b></code>, for some <code><b>&epsilon; &gt; 0,</b></code></li>
                        <li>Then: <code><b>T(n) = &Theta;(n<sup>log<sub>b</sub>a</sup>)</b></code></li>
                    </ul>
                </div>
            </li>
            <li>
                <div><b>Case 2: Polynomial equal to recursive cost</b></div>
                <div>
                    <ul>
                        <li>If <code><b>f(n) = &Theta;(n<sup>log<sub>b</sub>a</sup>)</b></code>,</li>
                        <li>Then: <code><b>T(n) = &Theta;(n<sup>log<sub>b</sub>a</sup>.log n)</b></code></li>
                    </ul>
                </div>
            </li>
            <li>
                <div><b>Case 3: Polynomial dominates recursive cost</b></div>
                <div>
                    <ul>
                        <li>If <code><b>f(n) = &Omega;(n<sup>log<sub>b</sub>a+&epsilon;</sup>)</b></code> for 
                        some &epsilon; &gt; 0, and if regularity condition holds:</li>
                        <li>Then: <code><b>T(n) = &Theta;(f(n))</b></code></li>
                    </ul>
                </div>
            </li>
        </ol>
    </div>
 </div>);
};

export default Introduction;