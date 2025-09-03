import React from "react";
import { Card, Accordian  } from "e-ui-react";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import Sigmoid from './../../assets/sigmoid.png';
import TanH from './../../assets/tanh.png';
import reLU from './../../assets/reLU.png';
import FLOWDIAGRAM from './../../assets/flow-diagram.png';

const Introduction = () =>{
 const InputWeightsFormula = () =>{
    return (<MathJaxContext>
        <div className="mathJaxContext-formula">
            <p>
              <MathJax inline>{`\\( w_{1}.x_{1} + w_{2}.x_{2} + w_{3}.x_{3} + .... + w_{n}.x_{n} \\)`}</MathJax>
            </p>
        </div>
    </MathJaxContext>);
 };
 const BiasFormula = () =>{
    return (<MathJaxContext>
        <div className="mathJaxContext-formula">
            <p>
              <MathJax inline>{`\\( w_{1}.x_{1} + w_{2}.x_{2} + w_{3}.x_{3} + .... + w_{n}.x_{n} + b \\)`}</MathJax>
            </p>
        </div>
    </MathJaxContext>);
 };
  const ValueFormula = () =>{
    return (<MathJaxContext>
        <div className="mathJaxContext-formula">
            <p>
              <MathJax inline>{`\\( z = w_{1}.x_{1} + w_{2}.x_{2} + w_{3}.x_{3} + .... + w_{n}.x_{n} + b \\)`}</MathJax>
            </p>
        </div>
    </MathJaxContext>);
 };
 const AFunctionFormula= () =>{
    return (<MathJaxContext>
        <div className="mathJaxContext-formula">
            <p>
              <MathJax inline>{`\\( y = f(z) \\)`}</MathJax>
            </p>
        </div>
    </MathJaxContext>);
 };
 const SignmoidContent = () =>{
    const SigmoidFormula = () =>{
        return (<MathJaxContext>
            <div className="mathJaxContext-formula">
                <p>
                <MathJax inline>{`\\( y = f(z) = \\frac{1}{1 + e^{-z}} \\)`}</MathJax>
                </p>
            </div>
        </MathJaxContext>);
    };
    return (<div>
            <div className="padLeft5p">
                            <div><b>Overall Summary:</b></div>
                            <div>Outputs between <b>0 and 1</b> (good for probabilities).</div>
                        </div>
                        <div className="padLeft5p">
                            <div><b>Formula:</b></div>
                            <div className="padLeft5p"><SigmoidFormula /></div>
                        </div>
                        <div className="padLeft5p">
                            <div><b>Range:</b></div>
                            <div>0 to 1</div>
                        </div>
                        <div className="mtop5p padLeft5p">
                            <div><b>Shape:</b></div>
                            <div>S-shaped curve</div>
                        </div>
                        <div className="mtop5p padLeft5p">
                            <div><b>Use:</b></div>
                            <div>Good for probabilities (like classification problems).</div>
                        </div>
                        <div className="mtop5p padLeft5p">
                            <div><b>Problem:</b></div>
                            <div>If input is too big/small, gradient becomes very small → vanishing gradient problem.</div>
                        </div>
                        <div className="mtop5p padLeft5p">
                            <div><b>Graph:</b></div>
                            <div><img src={Sigmoid} style={{ width:'200px' }} /></div>
                        </div>
        </div>);
 };
 const TanhContent = () =>{
    const TanhFormula = () =>{
        return (<MathJaxContext>
        <div className="mathJaxContext-formula">
            <p>
            <MathJax inline>{`\\( y = f(z) = \\\\tanh(z) = \\frac{e^z - e^{-z}}{e^z + e^{-z}} \\)`}</MathJax>
            </p>
        </div>
        </MathJaxContext>);
    };
    return (<div>
        <div className="padLeft5p">
            <div><b>Overall Summary:</b></div>
            <div>Outputs between <b>-1 and 1</b> (better balance, used in hidden layers).</div>
        </div>
    <div className="padLeft5p">
        <div><b>Formula:</b></div>
        <div className="padLeft5p"><TanhFormula /></div>
    </div>
    <div className="padLeft5p">
        <div><b>Range:</b></div>
        <div>-1 to 1</div>
    </div>
    <div className="mtop5p padLeft5p">
        <div><b>Shape:</b></div>
        <div>S-shaped but centered at 0</div>
    </div>
    <div className="mtop5p padLeft5p">
        <div><b>Use:</b></div>
        <div>Better than sigmoid because output is balanced between negative and positive values.</div>
    </div>
    <div className="mtop5p padLeft5p">
        <div><b>Problem:</b></div>
        <div>Still suffers from vanishing gradient at extremes.</div>
    </div>
    <div className="mtop5p padLeft5p">
        <div><b>Graph:</b></div>
        <div><img src={TanH} style={{ width:'200px' }} /></div>
    </div>
  </div>);
 };
 const ReLUContent = () =>{
    const ReLUFormula = () =>{
        return (<MathJaxContext>
        <div className="mathJaxContext-formula">
            <p>
            <MathJax inline>{`\\( y = f(z) = \\\\max(0,z) \\)`}</MathJax>
            </p>
        </div>
        </MathJaxContext>);
    };
    return (<div>
        <div className="padLeft5p">
                            <div><b>Overall Summary:</b></div>
                            <div>Outputs <b>0 or positive values</b> (fast and commonly used in deep networks).</div>
                        </div>
                        <div className="padLeft5p">
                            <div><b>Formula:</b></div>
                            <div className="padLeft5p"><ReLUFormula /></div>
                        </div>
                        <div className="padLeft5p">
                            <div><b>Range:</b></div>
                            <div>0 to ∞</div>
                        </div>
                        <div className="mtop5p padLeft5p">
                            <div><b>Shape:</b></div>
                            <div>Flat for negative values, linear for positive values.</div>
                        </div>
                        <div className="mtop5p padLeft5p">
                            <div><b>Use:</b></div>
                            <div>Most popular in Deep Learning because it’s simple and fast, and avoids 
                                vanishing gradients for positive values.</div>
                        </div>
                        <div className="mtop5p padLeft5p">
                            <div><b>Problem:</b></div>
                            <div>"Dying ReLU" (when many neurons output 0 and stop learning).</div>
                        </div>
                        <div className="mtop5p padLeft5p">
                            <div><b>Graph:</b></div>
                            <div><img src={reLU} style={{ width:'200px' }} /></div>
                        </div>
  </div>);
 };
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
    <div className="mtop15p"><h2 className="blog-head"><b>1. Introduction: What is an Artificial Neuron?</b></h2></div>
    <div className="mtop15p">An <b>Artificial Neuron</b> is a mathematical model inspired by the biological neuron in our brain. Just like 
    real neurons receive signals, process them, and send outputs to other neurons, artificial neurons mimic this process to learn 
    from data.</div>
    <div className="mtop15p">
        <img src={FLOWDIAGRAM} style={{ width:'50vw' }}/>
    </div>
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
                <li className="mtop5p">
                    <div><b>Inputs (x1, x2, x3, ...):</b></div>
                    <div>Data values (like pixels in an image or words in a sentence).</div>
                </li>
                <li className="mtop5p">
                    <div><b>Weights (w1, w2, w3, ...):</b></div> 
                    <div>Importance given to each input. They decides how strongly each input contributes.</div>
                </li>
                <li className="mtop5p">
                    <div><b>Summation:</b></div>
                    <div>A weighted sum of all inputs is calculated.</div>
                    <InputWeightsFormula />
                </li>
                <li className="mtop5p">
                    <div><b>Bias (b):</b></div>
                    <div>An extra parameter to adjust the curve.</div>
                    <BiasFormula />
                    <div className="mtop5p">
                      <ValueFormula />
                    </div>
                </li>
                <li className="mtop5p">
                    <div><b>Activation Function:</b></div>
                    <div>A mathematical function decides whether the neuron should "fire" (pass the signal) or not, and 
                        it transforms the input into a useful output for the next layer.</div>
                    <div>Mathematically, an artificial neuron can be expressed as:</div>
                    <AFunctionFormula /> 
                    <div className="mtop5p">where <b>f(z)</b> is the activation function (like sigmoid, ReLU, or tanh).</div>
                    <div className="mtop15p mbot15p">
                        <Accordian id="ActivationFunctionAccordian" 
                            data={[{ 
                                        id:"AFA#Sigmoid", 
                                        title: (<div><b>1. Sigmoid</b></div>), 
                                        component: <SignmoidContent /> ,
                                        backgroundColor: '#eee' 
                                    },
                                    { 
                                        id:"AFA#Tanh", 
                                        title: (<div><b>2. Tanh (Hyperbolic Tangent)</b></div>), 
                                        component: <TanhContent />,
                                        backgroundColor: '#eee' 
                                    },
                                    { 
                                        id:"AFA#", 
                                        title: (<div><b>3. ReLU (Rectified Linear Unit)</b></div>), 
                                        component: <ReLUContent />,
                                        backgroundColor: '#eee' 
                                    }]} />
                    </div>
                </li>
                <li className="mtop5p">
                    <div><b>Output (y):</b></div>
                    <div>Final processed signal passed to the next layer.</div>
                </li>
            </ol>
        </div>
        <div>
            <Card padding={15} backgroundColor="#eee">
                <div><b><u>Note</u>:</b></div>
                <div><b>weights</b> and <b>bias</b> are not manually set by humans, they are automatically updated 
                based on <b>Gradient-Descent Algorithm</b>.</div>
            </Card>
        </div>
        <div className="mtop15p"><h2 className="blog-head"><b>2. Understanding Gradient-Descent Algorithm</b></h2></div>
    </div>
 </div>);
};

export default Introduction;