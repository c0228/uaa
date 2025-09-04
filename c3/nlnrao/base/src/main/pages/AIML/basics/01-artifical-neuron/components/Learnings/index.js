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
    <div><h2 className="blog-head"><b>5. Training Types for a Neuron</b></h2></div>
    <div className="mtop15p">An <b>artificial neuron</b> is just a function:</div>
    <div className="mtop5p">
        <NeuronBasicFormula />
    </div>
    <div className="mtop5p">It doesn’t know by itself whether it is supervised, unsupervised, or reinforcement.</div>
    <div>The <b>learning type depends on how we train it and what data we give.</b></div>

    <div className="mtop15p"><h4 className="blog-head"><b>5.1 Supervised Learning</b></h4></div>
    <div>
      <ul>
        <li className="mtop5p"><b>What happens?</b> We give <b>inputs + correct outputs (labels).</b></li>
        <li className="mtop5p">Neuron learns by comparing prediction vs. correct output and reducing error (via Gradient Descent).</li>
        <li className="mtop5p"><b>Example:</b> Predicting marks from study hours (input = hours, label = marks).</li>
        <li className="mtop5p">Most neural networks (like image recognition, language models) use this.</li>
      </ul>
    </div>

    <div className="mtop15p"><h4 className="blog-head"><b>5.2 Unsupervised Learning</b></h4></div>
    <div>
      <ul>
        <li className="mtop5p"><b>What happens?</b> We give <b>only inputs, no correct outputs.</b></li>
        <li className="mtop5p">Neuron tries to find <b>patterns or groups</b> in the data by itself.</li>
        <li className="mtop5p"><b>Example algorithms:</b> Autoencoders, Self-Organizing Maps.</li>
        <li className="mtop5p"><b>Example:</b> Grouping customers into clusters based on shopping habits (no labels given).</li>
      </ul>
    </div>

    <div className="mtop15p"><h4 className="blog-head"><b>5.3 Reinforcement Learning (RL)</b></h4></div>
    <div>
      <ul>
        <li className="mtop5p"><b>What happens?</b> Neuron (or network) is like an “agent” in an environment.</li>
        <li className="mtop5p">It takes actions - receives <b>reward or penalty.</b></li>
        <li className="mtop5p">Learns a strategy (policy) that maximizes reward over time.</li>
        <li className="mtop5p"><b>Example:</b> A game-playing AI (like AlphaGo) — no labels, just win/lose rewards.</li>
      </ul>
    </div>

    <div className="mtop15p">
      <Card padding={15} backgroundColor="#eee">
        <div><b>Note:</b></div>
        <div>A <b>single neuron</b> is just math. The <b>training method</b> (supervised, unsupervised, RL) defines how its weights and bias 
          are updated.</div>
        <div>In practice:</div>
        <div>
          <ul>
            <li className="mtop5p">Most basic ANN (Artificial Neural Network) training = <b>Supervised Learning</b>.</li>
            <li className="mtop5p">Some specialized models = <b>Unsupervised</b> (autoencoders, clustering).</li>
            <li className="mtop5p">RL uses <b>neural networks as agents.</b></li>
          </ul>
        </div>
      </Card>
    </div>
 </div>);
};

export default Learnings;