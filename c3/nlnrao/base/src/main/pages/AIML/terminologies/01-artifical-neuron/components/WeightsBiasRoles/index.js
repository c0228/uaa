import React from "react";
import { Card } from "e-ui-react";
import { MathJax, MathJaxContext } from "better-react-mathjax";

const WeightsBiasRoles = () =>{
 const BasicPredictFormula = () =>{
     return (<MathJaxContext>
       <div className="mathJaxContext-formula">
         <p>
           <MathJax inline>{`\\( y_{pred} = f( \\sum (\\omega_{i} * x_{i}) + b ) \\)`}</MathJax>
         </p>
       </div>
     </MathJaxContext>);
  }; 
  const ErrorFormula = () =>{
     return (<MathJaxContext>
       <div className="mathJaxContext-formula">
         <p>
           <MathJax inline>{`\\( Error = y_{true} - y_{pred} \\)`}</MathJax>
         </p>
       </div>
     </MathJaxContext>);
  };
  const BPWeights = () =>{
    return (<MathJaxContext>
       <div className="mathJaxContext-formula">
         <p>
           <MathJax inline>{`\\( \\omega_{i} = \\omega_{i} - \\eta . \\frac{\\partial Error}{\\partial\\omega_{i}}  \\)`}</MathJax>
         </p>
       </div>
     </MathJaxContext>);
  };
  const BPBias = () =>{
    return (<MathJaxContext>
       <div className="mathJaxContext-formula">
         <p>
           <MathJax inline>{`\\( b = b - \\eta . \\frac{\\partial Error}{\\partial b}  \\)`}</MathJax>
         </p>
       </div>
     </MathJaxContext>);
  };
 return (<div className="mtop15p lh28p fs16p">
    <div><h2 className="blog-head"><b>4. Role of Weights (&omega;) and Bias (b)</b></h2></div>
    <div className="mtop15p"><h4 className="blog-head"><b>4.1 Training Phase (Learning)</b></h4></div>
    <div>
        <ul>
            <li className="mtop5p"><b>Inputs - Weighted Sum - Activation - Output</b></li>
            <li className="mtop5p">
                <div>The neuron computes:</div>
                <BasicPredictFormula />
            </li>
            <li className="mtop5p"><b>Expected output (y<sub>true</sub>):</b> We already know the correct answer (labels).</li>
            <li className="mtop5p">
                <div><b>Error calculation:</b></div>
                <ErrorFormula />
            </li>
            <li className="mtop5p">
                <div><b>Backpropagation:</b> Using this error, we calculate gradients and update <b>weights</b> and <b>bias</b>:</div>
                <BPWeights />
                <div className="mtop5p"><BPBias /></div>
                <div className="mtop5p">where &eta; = learning rate.</div>
                <div className="mtop5p">
                    <Card padding={15} backgroundColor="#eee">
                        <div><b>Role here:</b></div>
                        <ul>
                            <li className="mtop5p"><b>Weights (&omega;):</b> Learn the importance/strength of each input feature.</li>
                            <li className="mtop5p"><b>Bias (b):</b> Adjusts the neuron’s decision boundary (shifts activation) to better fit the data.</li>
                        </ul>
                    </Card>
                </div>
            </li>
        </ul>
    </div>
    <div className="mtop15p"><h4 className="blog-head"><b>4.2 Inference Phase (Prediction)</b></h4></div>
    <div>
        <ul>
            <li className="mtop5p">Now, we don’t have expected outputs.</li>
            <li className="mtop5p">The trained weights and bias are <b>frozen</b> (no more updating).</li>
            <li className="mtop5p">
                <div>We simply use them to calculate predictions:</div>
                <BasicPredictFormula />
                <div className="mtop5p">
                    <Card padding={15} backgroundColor="#eee">
                        <div><b>Role here:</b></div>
                        <ul>
                            <li className="mtop5p"><b>Weights (&omega;):</b> Act as learned <i>"knowledge"</i> — they transform input 
                                features into meaningful signals.</li>
                            <li className="mtop5p"><b>Bias (b):</b> Helps shift the decision function so predictions are correct even when inputs are zero or small.</li>
                        </ul>
                    </Card>
                </div>
                <div className="mtop5p">No error, no backpropagation — just forward computation.</div>
            </li>
        </ul>
        <div className="mtop5p">
            <Card padding={15} backgroundColor="#eee">
                <div><b>Summary:</b></div>
                <ul>
                    <li className="mtop5p">During <b>training,</b> &omega; and b <i>change</i> to minimize error.</li>
                    <li className="mtop5p">During <b>inference,</b> &omega; and b are <i>fixed</i> and only used to compute the output.</li>
                </ul>
            </Card>
        </div>
    </div>
    
 </div>);
};

export default WeightsBiasRoles;