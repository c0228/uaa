import React from "react";
import { Card, Highlight } from "e-ui-react";
import ConstantTime from './components/constant-time/index.js';
import LogarithmicTime from './components/logarithmic-time/index.js';
import LinearTime from './components/linear-time/index.js';
import LinearithmicTime from './components/linearithmic-time/index.js';
import QuadraticTime from './components/quadratic-time/index.js';
import CubicTime from './components/cubic-time/index.js';
import ExponentialTime from './components/exponential-time/index.js';
import FactorialTime from './components/factorial-time/index.js';

const BigONotation = () =>{
 return (<div>
    <div><h2 align="center" className="blog-head mtop15p"><b>Big-O Notation (O)</b></h2></div>
    <div className="mtop15p fs16p lh28p">
        <Card padding={15} backgroundColor="#eee">
            <div><h4 className="blog-head"><b>What is Big-O?</b></h4></div>
            <div>
                <ul>
                    <li>Big-O represents the <b>upper bound</b> of an algorithm's runtime.</li>
                    <li>It gives the <b>worst-case time complexity</b>.</li>
                </ul>
            </div>
        </Card>
        <div><h4 className="blog-head mtop15p"><b>Formal Definition</b></h4></div>
        <div className="padLeft5p">Let <code><b>f(n)</b></code> and <code><b>g(n)</b></code> be functions. 
        <code><b>f(n) = O(g(n))</b></code> if there exist constants <code><b>c &gt; 0</b></code> 
        and <code><b>n0 &gt; 0</b></code> such that:</div>
        <div className="mtop5p">
            <Highlight content={`f(n) ≤ c * g(n) for all n ≥ n0`} lang="javascript" />
        </div>
        <div className="padLeft5p">
            This means <code><b>g(n)</b></code> grows faster or equally fast as <code><b>f(n)</b></code>.
        </div>
        <div><hr/></div>
        <div><h4 className="blog-head mtop15p"><b>Notations Overview</b></h4></div>
        <div className="mtop5p">
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr style={{ backgroundColor:'#eee' }}>
                            <td><b>Notation</b></td>
                            <td><b>Name</b></td>
                            <td><b>Example Algorithm</b></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><b>O(1)</b></td>
                            <td>Constant</td>
                            <td>Access array element</td>
                        </tr>
                        <tr>
                            <td><b>O(log n)</b></td>
                            <td>Logarithmic</td>
                            <td>Binary Search</td>
                        </tr>
                        <tr>
                            <td><b>O(n)</b></td>
                            <td>Linear</td>
                            <td>Linear Search, Traversal</td>
                        </tr>
                        <tr>
                            <td><b>O(n log n)</b></td>
                            <td>Linearithmic</td>
                            <td>Merge Sort, Heap Sort</td>
                        </tr>
                        <tr>
                            <td><b>O(n<sup>2</sup>)</b></td>
                            <td>Quadratic</td>
                            <td>Bubble Sort, Selection Sort</td>
                        </tr>
                        <tr>
                            <td><b>O(n<sup>3</sup>)</b></td>
                            <td>Cubic</td>
                            <td>Naive matrix multiplication</td>
                        </tr>
                        <tr>
                            <td><b>O(2<sup>n</sup>)</b></td>
                            <td>Exponential</td>
                            <td>Recursive Fibonacci, Backtracking</td>
                        </tr>
                        <tr>
                            <td><b>O(n!)</b></td>
                            <td>Factorial</td>
                            <td>Brute-force permutations</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div><hr/></div>
        <div className="mtop15p">
            <ol>
                <li><ConstantTime /></li>
                <li className="mtop15p"><LogarithmicTime /></li>
                <li className="mtop15p"><LinearTime /></li>
                <li className="mtop15p"><LinearithmicTime /></li>
                <li className="mtop15p"><QuadraticTime /></li>
                <li className="mtop15p"><CubicTime /></li>
                <li className="mtop15p"><ExponentialTime /></li>
                <li className="mtop15p"><FactorialTime /></li>
            </ol>
        </div>
    </div>
 </div>);
};

export default BigONotation;