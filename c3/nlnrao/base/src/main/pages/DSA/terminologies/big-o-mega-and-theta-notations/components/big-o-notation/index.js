import React from "react";
import { Card, Highlight } from "e-ui-react";
import ConstantTime from './components/constant-time/index.js';


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
        <div className="mtop15p">
            <ol>
                <li>
                    <ConstantTime />
                </li>
                <li className="mtop15p">
                    <div className="blog-head"><b>O(n) - Linear Time</b></div>
                </li>
            </ol>
        </div>
    </div>
 </div>);
};

export default BigONotation;