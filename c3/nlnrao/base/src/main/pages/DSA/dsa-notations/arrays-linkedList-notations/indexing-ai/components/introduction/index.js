import React from "react";
import { Card } from "e-ui-react";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><i>
    <div>Before diving into complex data structures like trees, heaps, or graphs, every programmer must understand how elements 
    are accessed and manipulated in basic structures like <b>arrays</b>. The foundation of all data access starts with a 
    simple yet powerful idea: <b>Indexing</b>.</div>
    <div>In programming and data analysis, you'll often see expressions 
    like <code><b>A(i)</b></code> or <code><b>A[i]</b></code> — but what do they really mean?</div>    
    </i></div>

    <div className="mtop15p"><h2 className="blog-head"><b>Introduction</b></h2></div>
    <div className="mtop5p"><h4 className="blog-head"><b>What is Indexing?</b></h4></div>
    <div className="mtop5p"><b>Indexing</b> is the operation of accessing an element at a specific position in a 
    collection — typically an <b>array</b>, <b>list</b>, or <b>string</b>.</div>
    <div>
        <Card padding={15} backgroundColor="#eee">
            <div><b>A(i)</b> or <b>A[i]</b> means:</div>
            <div>Retrieve the value <b>stored at position i</b> in array A.</div>
        </Card>
    </div>
    <div className="mtop15p"><h4 className="blog-head"><b>Indexing Rules:</b></h4></div>
    <div className="mtop5p">
        <ol>
            <li>
                <div>Most modern programming languages use <b>0-based indexing</b>.</div>
                <div>That means:</div>
                <div>
                    <ul>
                        <li><code><b>A[0]</b></code> =  First element</li>
                        <li><code><b>A[1]</b></code> = Second element</li>
                        <li><code><b>A[n-1]</b></code> = Last element (for array of size n)</li>
                    </ul>
                </div>
            </li>
            <li>Some math notations or languages (like MATLAB or Fortran) use <b>1-based indexing</b>.</li>
        </ol>
    </div>

    <div className="mtop5p"><h4 className="blog-head"><b>Why is Indexing Important?</b></h4></div>
    <div>
        <ul>
            <li><b>Random Access:</b> Arrays allow <b>O(1)</b> time access with indexing.</li>
            <li><b>Efficient Iteration:</b> Looping from <b>A[0]</b> to <b>A[n-1]</b> lets us scan or modify data quickly.</li>
            <li><b>Foundation</b> for strings, matrices, and even graphs!</li>
        </ul>
    </div>
 </div>);
};

export default Introduction;