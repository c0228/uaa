import React from "react";

const Conclusion = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
    <div className="mtop15p">The <b>artificial neuron</b> is the basic computational unit of an Artificial Neural Network (ANN), 
        inspired by the biological structure of the human brain. Just as biological neurons receive signals, process them, 
        and transmit outputs, artificial neurons take <b>inputs</b>, apply <b>weights</b>, add a <b>bias</b>, and pass the result 
        through an <b>activation function</b> to generate an output.</div>
    <div className="mtop15p">The concept builds on mathematics and linear algebra, where weighted sums capture relationships 
        between inputs, and activation functions introduce <b>non-linearity,</b> enabling the network to solve complex problems 
        beyond simple linear mappings. Learning in an artificial neuron happens through <b>adjusting weights and bias</b> using 
        algorithms like <b>Gradient Descent,</b> which minimizes error (loss) by following the slope of the loss function.</div>
    <div className="mtop15p mbot15p">In summary, artificial neurons form the foundation of modern AI systems. By interconnecting 
        thousands or millions of such neurons into layers, we create <b>Neural Networks</b> capable of tasks such as image 
        recognition, natural language understanding, and decision-making. This simple yet powerful abstraction is the 
        cornerstone of <b>Machine Learning</b> and <b>Deep Learning,</b> bridging the gap between human cognition and artificial 
        intelligence.</div>
 </div>);
};

export default Conclusion;