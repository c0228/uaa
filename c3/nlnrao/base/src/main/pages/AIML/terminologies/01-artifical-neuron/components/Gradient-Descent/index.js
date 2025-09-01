import React from "react";
import { Card } from "e-ui-react";
import { MathJax, MathJaxContext } from "better-react-mathjax";

const GradientDescent = () =>{
 const GradientDescentBasicFormula = () =>{
    return (<MathJaxContext>
      <div className="mathJaxContext-formula">
        <p>
          <MathJax inline>{`\\( \\omega = \\omega - \\eta * \\frac{\\partial  L}{\\partial  \\omega} \\)`}</MathJax>
        </p>
      </div>
    </MathJaxContext>);
 };
 const GradientDescentSlope = () =>{
    return (<MathJaxContext>
      <div>
        <p>
          <MathJax inline>{`\\( \\frac{\\partial  L}{\\partial  \\omega} \\)`}</MathJax>  = slope (gradient)
        </p>
      </div>
    </MathJaxContext>);
 };
 return (<div className="mtop15p lh28p fs16p">
    <div><h4 className="blog-head"><b>2.1 What is Gradient Descent?</b></h4></div>
    <div className="padLeft5p">
        <div className="mtop15p">Gradient Descent is <b>a way for an Artificial Neuron (or Neural Network) to learn.</b>
        It’s like a <b>climber trying to get down from a mountain to the lowest valley (minimum point).</b></div>
        <div>
            <ul>
                <li className="mtop5p">The <b>mountain</b> is your <b>error (loss function)</b> → how wrong the neuron’s prediction is.</li>
                <li className="mtop5p">The <b>climber</b> is the <b>neuron</b> → trying to reduce error.</li>
                <li className="mtop5p">The <b>steps taken</b> are controlled by the <b>learning rate</b> → how fast or slow it moves.</li>
            </ul>
        </div>
        <div className="mtop5p"><b><u>The goal</u>:</b> find the lowest point (minimum error).</div>
    </div>
    

    <div className="mtop15p"><h4 className="blog-head"><b>2.2 Why do we need it?</b></h4></div>
    <div className="padLeft5p">
        <div className="mtop5p">An Artificial Neuron takes inputs, multiplies them with weights, adds bias, and gives an output.
        But at first, it doesn’t know which <b>weights</b> and <b>bias</b> are good.</div>
        <div className="mtop5p">So, it guesses random numbers → produces <b>wrong answers</b>.</div>
        <div className="mtop5p">We need a way to adjust <b>weights</b> and <b>bias</b> so the answers become correct.</div>
        <div className="mtop5p">That’s where Gradient Descent comes in. It teaches the neuron to slowly improve weights and bias.</div>
    </div>
    

    <div className="mtop15p"><h4 className="blog-head"><b>2.3 The Key Idea</b></h4></div>
    <div className="padLeft5p">
        <ul>
            <li className="mtop5p">
                <div><b>Loss (Error):</b></div>
                <div>How wrong the neuron’s answer is.</div>
                <div>(Example: Predicted house price = $250,000 but real = $300,000 → error = $50,000)</div>
            </li>
            <li className="mtop5p">
                <div><b>Gradient:</b></div>
                <div>The slope that tells us how the error changes when we change weights.</div>
                <div>(Like checking if you are on an uphill or downhill path on the hill.)</div>
            </li>
            <li className="mtop5p">
                <div><b>Descent:</b></div>
                <div>We always move <b>downhill</b> (reducing error).</div>
                <div>(Never go uphill, because that increases error.)</div>
            </li>
        </ul>
    </div>
    <div className="mtop15p"><h4 className="blog-head"><b>2.4 The Formula (Don’t worry, very simple)</b></h4></div>
    <div className="mtop5p">For each weight &omega;,
        <GradientDescentBasicFormula />
        <div className="mtop5p">
            Where:
            <ul>
                <li className="mtop5p">&omega; = weight,</li>
                <li className="mtop5p">L = loss (error)</li>
                <li className="mtop5p"><GradientDescentSlope /></li>
                <li className="mtop5p">&eta; = <b>learning rate</b> (step size)</li>
            </ul>
        </div>
    </div>
    <div>
        <div><b>Meaning:</b></div>
        <Card padding={15} backgroundColor="#eee">
            <b>New weight = Old weight – Small step downhill.</b>
        </Card>
    </div>
    <div className="mtop15p"><h4 className="blog-head"><b>2.5 Why is it Important?</b></h4></div>
    <div className="mtop5p">Without Gradient Descent, a neuron won’t <b>learn</b>.</div>
    <div className="mtop5p">It will just keep guessing randomly.</div>
    <div className="mtop5p">Gradient Descent is like the <b>teacher</b> that shows the neuron how to improve step by step.</div>
    

 </div>);
};

export default GradientDescent;