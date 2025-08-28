import React from "react";
import { Card } from "e-ui-react";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <Card padding={15} backgroundColor="#eee">
        <div>Before Artificial Intelligence and Machine Learning (AI/ML) became popular, computers were designed to follow strict 
            rules and logic written by humans. This worked well for structured tasks like calculations, sorting, or database 
            management. But problems arose when systems needed to deal with <b>uncertainty, patterns, or learning from experience</b> — 
            things that humans do naturally.</div>
        <div className="mtop5p">For example:
            <ul>
                <li className="mtop5p">How do you make a computer recognize a cat in an image?</li>
                <li className="mtop5p">How can a machine understand spoken language?</li>
                <li className="mtop5p">How can a system predict stock prices or recommend a movie?</li>
            </ul>
        </div>
        <div className="mtop5p">Traditional programming required <b>explicit rules,</b> but these real-world problems don’t have 
        simple rules. Instead, they require learning from data, making decisions with approximations, and adapting over time.</div>
        <div className="mtop5p">That’s where <b>Artificial Neurons,</b> the basic building blocks of Neural Networks, came into the 
        picture. Inspired by the way human brain cells (neurons) process information, artificial neurons allow machines to <b>learn 
        patterns, generalize, and adapt</b> — things classical programming could never achieve on its own.</div>
    </Card>
    <div className="mtop15p"><h2 className="blog-head"><b>Introduction: What is an Artificial Neuron?</b></h2></div>
    <div className="mtop15p">An <b>Artificial Neuron</b> is a mathematical model inspired by the biological neuron in our brain. Just like 
    real neurons receive signals, process them, and send outputs to other neurons, artificial neurons mimic this process to learn 
    from data.</div>
    <div className="mtop15p">
        <div>A biological neuron works like this:</div>
        <div>
            <ul>
                <li className="mtop5p"><b>Inputs (Dendrites):</b> Receive signals from other neurons.</li>
                <li className="mtop5p"><b>Processing (Cell Body):</b> Sum and process the signals.</li>
                <li className="mtop5p"><b>Output (Axon):</b> Send the signal to the next neuron.</li>
            </ul>
        </div>
    </div>
    <div className="mtop15p">
        <div>An Artificial Neuron works similarly in AI/ML:</div>
        <div>
            <ol>
                <li className="mtop5p"><b>Inputs (x1, x2, x3, ...):</b> Data values (like pixels in an image or words in a sentence).</li>
                <li className="mtop5p"><b>Weights (w1, w2, w3, ...):</b> Importance given to each input.</li>
                <li className="mtop5p"><b>Summation:</b> A weighted sum of all inputs is calculated.</li>
                <li className="mtop5p"><b>Bias (b):</b> An extra parameter to adjust the curve.</li>
                <li className="mtop5p"><b>Activation Function:</b> A mathematical function decides whether the neuron should “fire” (pass the signal) or not.</li>
                <li className="mtop5p"><b>Output (y):</b> Final processed signal passed to the next layer.</li>
            </ol>
        </div>
        <div className="mtop15p">Mathematically, an artificial neuron can be expressed as:</div>
        <div className="mtop5p">
            <Card padding={15} backgroundColor="#eee">
                <div>y = f( w<sub>1</sub>.x<sub>1</sub> + w<sub>2</sub>.x<sub>2</sub> + w<sub>3</sub>.x<sub>3</sub> + .... + w<sub>n</sub>.x<sub>n</sub> + b )</div> 
            </Card>
        </div>
        <div className="mtop5p">where <b>f</b> is the activation function (like sigmoid, ReLU, or tanh).</div>
    </div>
 </div>);
};

export default Introduction;