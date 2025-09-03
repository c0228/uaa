import React from "react";
import { Card, Accordian } from "e-ui-react";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import SimpleTable from "@MainComponents/simple-table/index.js";

const Introduction = () =>{
 const XORProblem = () =>{
     const PerceptronFormula = () =>{
        return (<MathJaxContext>
            <div className="mathJaxContext-formula">
                <p>
                <MathJax inline>{`\\( y = step( w_{1}.x_{1} + w_{2}.x_{2} + w_{3}.x_{3} + .... + w_{n}.x_{n} + b ) \\)`}</MathJax>
                </p>
            </div>
        </MathJaxContext>);
    };
    return (<div>
        <div><h5 className="blog-head"><b>1. About Single Neuron (Perceptron)</b></h5></div>
        <div>Let's see a perceptron (single neuron) what it actually does — mathematically & geometrically. </div>
        <div className="mtop5p">A basic perceptron computes:</div>
        <PerceptronFormula />
        <div className="mtop5p">
            <ul>
                <li className="mtop5p"><code><b>step(z)</b></code> is a threshold function that returns 1 if 
                    z &gt; 0 and 0 otherwise.</li>
                <li className="mtop5p">
                    <div>The decision boundary is the hyperplane &omega; . x + b = 0.</div>
                    <ul>
                        <li>In 2D that boundary is a <b>line</b>.</li>
                        <li>The perceptron is a <b>linear classifier:</b> it splits input space into two 
                            half-spaces (one side - label 1, the other - label 0).</li>
                    </ul>
                </li>
            </ul>
            <div><b>Key fact:</b> a single perceptron can only separate classes that are <b>linearly separable</b> — i.e., 
                you can draw a single straight line (or hyperplane) that separates the two classes.</div>
            <div className="mtop5p"><h5 className="blog-head"><b>2. The XOR problem — why it is not linearly separable?</b></h5></div>
            <div className="mtop5p">XOR truth table (inputs are binary):</div>
            <div className="mtop5p">
                <SimpleTable header={["x1", "x2", "XOR"]} 
                            columns={[
                                ["0", "0", "0"],
                                ["0", "1", "1"],
                                ["1", "0", "1"],
                                ["1", "1", "0"]
                            ]} />
            </div>
            <div className="mtop5p">Plot these four points in the plane:</div>
            <div>
                <ul>
                    <li className="mtop5p">(0,0) : class 0</li>
                    <li className="mtop5p">(1,1) : class 0</li>
                    <li className="mtop5p">(1,0) : class 1</li>
                    <li className="mtop5p">(0,1) : class 1</li>
                </ul>
            </div>
            <div className="mtop5p">Try to draw one straight line that separates the class-1 points from class-0 points — you 
                cannot. Class-0 points are diagonally opposite, and class-1 points are the other two corners. No single line 
                can separate them.</div>
            <div className="mtop5p">A short algebraic contradiction (sketch):</div>
            <div>
                <ul>
                    <li className="mtop5p">Suppose a linear 
                        classifier <code><b>f(x) = step( &omega;<sub>1</sub>.x<sub>1</sub> + &omega;<sub>2</sub>.x<sub>2</sub> + b )</b></code> represents XOR.</li>
                    <li className="mtop5p">From <code><b>f(0,0) = 0</b></code>, we get <code><b>b &le; 0</b></code></li>
                    <li className="mtop5p">From <code><b>f(1,0) = 1</b></code> and <code><b>f(0,1) = 1</b></code>, <br/> we 
                    get <code><b>&omega;<sub>1</sub> + b &gt; 0</b></code> and <code><b>&omega;<sub>2</sub> + b &gt; 0</b></code>,
                    So <code><b>&omega;<sub>1</sub> &gt; -b &ge; 0</b></code> and <code><b>&omega;<sub>2</sub> &gt; -b &ge; 0</b></code> </li>
                    <li className="mtop5p">But from <code><b>f(1,1) = 0</b></code>, we need &omega<sub>1</sub> + &omega<sub>2</sub> + b &le; 0. Summing 
                    the earlier inequalities leads to contradiction.<br/>
                    Thus, no weights and bias exist that satisfy all four constraints.</li>
                </ul>
            </div>
            <div className="mtop5p"><b>Conclusion:</b> Single-layer Perceptron can't learn XOR.</div>
            <div className="mtop5p"><h5 className="blog-head"><b>3. How adding a hidden layer fixes it — the idea?</b></h5></div>
            <div className="mtop5p"><b>The trick:</b> use a <b>hidden layer</b> to <b>transform the input space</b> into a representation where 
                the classes become linearly separable.</div>
            <div>
                <ul>
                    <li className="mtop5p">Hidden neurons compute intermediate features (nonlinear transforms) such as “OR” or “AND”.</li>
                    <li className="mtop5p">The output neuron then combines those features linearly (and applies threshold) to produce XOR.</li>
                </ul>
            </div>
            <div className="mtop5p"><b>Key property:</b> if you stack linear layers <b>without</b> a non-linear activation between them, the whole 
            stack is still linear (composition of linear maps is linear). So the <b>non-linearity</b> (sigmoid, tanh, ReLU, step, etc.) between 
            layers is essential. It lets the network build piecewise/nonlinear decision boundaries.</div>
            <div className="mtop5p">This ability to create new feature representations is why multi-layer networks can solve problems 
                (like XOR) that single-layer perceptrons cannot.</div>
            
            <div className="mtop5p"><h5 className="blog-head"><b>4. Concrete Multi-Layer Perceptron (MLP) construction for XOR<br/> (2 inputs &rarr; 2 hidden neurons &rarr; 1 output)</b></h5></div>
        </div>
    </div>);
 };
 return (<div className="mtop15p mbot15p lh28p fs16p">
    <div className="mtop15p">
        <Card padding={15} backgroundColor="#eee">
            <div><h4 className="blog-head"><b>How the Concept of Artifical Layers Emerged?</b></h4></div>
            <div className="mtop5p">In the early days of Artificial Intelligence, researchers worked with 
            the <b>Perceptron</b> (a single artificial neuron). The perceptron could classify data that was linearly 
            separable, but it failed on more complex problems like the <b>XOR problem.</b></div>
            <div className="mtop5p">
                <Accordian id="AccordianExample" 
                    data={[{ 
                                id:"Item#1", 
                                title: (<div><b>FAQ: Why a single neuron (perceptron) fails on XOR — and how adding layers fixes it (detailed)?</b></div>), 
                                component: <XORProblem /> 
                            }]} 
                />
            </div>
        </Card>
    </div>
    <div className="mtop15p"><h2 className="blog-head"><b>Introduction</b></h2></div>

 </div>);
};

export default Introduction;