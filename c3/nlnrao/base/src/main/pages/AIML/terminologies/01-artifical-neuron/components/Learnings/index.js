import React from "react";
import { Card } from "e-ui-react";
import { MathJax, MathJaxContext } from "better-react-mathjax";

const Learnings = () =>{
 const NeuronBasicFormula = () =>{
     return (<MathJaxContext>
       <div className="mathJaxContext-formula">
         <p>
           <MathJax inline>{`\\( y = f( \\sum \w_{i}.x_{i}  + b ) \\)`}</MathJax>
         </p>
       </div>
     </MathJaxContext>);
 };
 return (<div className="mtop15p lh28p fs16p">
    <div><h2 className="blog-head"><b>4. Training Types for a Neuron</b></h2></div>
    <div className="mtop15p">An <b>artificial neuron</b> is just a function:</div>
    <div className="mtop5p">
        <NeuronBasicFormula />
    </div>
    <div className="mtop5p">It doesn’t know by itself whether it is supervised, unsupervised, or reinforcement.</div>
    <div>The <b>learning type depends on how we train it and what data we give.</b></div>
    <div className="mtop5p">A <b>single neuron</b> is just math. The <b>training method</b> (supervised, unsupervised, RL) 
     defines how its weights are updated.</div>

    <div className="mtop15p"><h4 className="blog-head"><b>4.1 Supervised Learning</b></h4></div>

    <div className="mtop15p"><h4 className="blog-head"><b>4.2 Unsupervised Learning</b></h4></div>

    <div className="mtop15p"><h4 className="blog-head"><b>4.3 Reinforcement Learning (RL)</b></h4></div>
 </div>);
};

export default Learnings;