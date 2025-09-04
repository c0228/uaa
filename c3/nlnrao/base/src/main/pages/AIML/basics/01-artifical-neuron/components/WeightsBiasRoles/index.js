import React from "react";
import { Card, Highlight } from "e-ui-react";
import { MathJax, MathJaxContext } from "better-react-mathjax";

const ARTNEURON_IMPL_BASIC = `import numpy as np

# -------------------------
# TRAINING PHASE
# -------------------------

# Training data
X = np.array([5])        # input: hours studied
y_true = np.array([80])  # actual marks

# Initialize weight and bias
w = np.random.randn()  # random start
b = np.random.randn()
learning_rate = 0.01

print("Initial weight:", w, "bias:", b)

# Training loop
for epoch in range(1000):
    # Forward pass (prediction)
    y_pred = w * X + b
    
    # Calculate error (Mean Squared Error)
    error = np.mean((y_true - y_pred) ** 2)
    
    # Gradients
    dw = -2 * X * (y_true - y_pred)
    db = -2 * (y_true - y_pred)
    
    # Update weight and bias
    w = w - learning_rate * dw
    b = b - learning_rate * db
    
    # Print progress every 100 steps
    if epoch % 100 == 0:
        print(f"Epoch {epoch}: Prediction={y_pred[0]:.2f}, Error={error:.2f}, w={w:.2f}, b={b:.2f}")

# -------------------------
# INFERENCE PHASE
# -------------------------
print("\n--- Inference Phase ---")
X_test = np.array([5])  # new input: 5 hours
y_infer = w * X_test + b
print(f"Predicted marks for 5 hours study: {y_infer[0]:.2f}")`;

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
    <div><h4 className="blog-head"><b>3.1. Role of Weights (&omega;) and Bias (b)</b></h4></div>
    <div className="mtop15p"><h5 className="blog-head"><b>3.1.1 Training Phase (Learning)</b></h5></div>
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
    <div className="mtop15p"><h5 className="blog-head"><b>3.1.2 Inference Phase (Prediction)</b></h5></div>
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
    
    <div><h4 className="blog-head"><b>3.2. Implement a Artifical Neuron using Python and Numpy Library</b></h4></div>
    <div className="mtop5p">Let’s implement a <b>very simple artificial neuron</b> in Python using <b>NumPy</b> that shows both 
        <b>training</b> (updating weights and bias) and <b>inference</b> (using learned weights & bias for prediction).</div>
    <div className="mtop5p">Here’s the code:</div>
    <div className="mtop5p">
        <Highlight content={ARTNEURON_IMPL_BASIC} lang="python" />
    </div>
 </div>);
};

export default WeightsBiasRoles;