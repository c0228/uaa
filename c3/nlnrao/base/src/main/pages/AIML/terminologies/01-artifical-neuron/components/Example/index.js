import React, { useState } from "react";
import { Card, Modal, Accordian } from "e-ui-react";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import GradientOne from './components/GradientOne/index.js';
import UpdateRuleLearningRate from './components/UpdateRuleLearningRate/index.js';

const Example = () =>{
  const GradientDescentBasicFormula = () =>{
     return (<MathJaxContext>
       <div className="mathJaxContext-formula">
         <p>
           <MathJax inline>{`\\( y = \\omega * x + b \\)`}</MathJax>
         </p>
       </div>
     </MathJaxContext>);
  };
  const GradientSlopesDisplay = () =>{
    return (<MathJaxContext>
         <p>
           <MathJax inline>{`\\( \\frac{\\partial  L}{\\partial  \\omega},  \\frac{\\partial  L}{\\partial  b} \\)`}</MathJax>
         </p>
     </MathJaxContext>);
  };
  
  const Set1FAQ1 = () =>{
    return (<div>
        <div className="mtop5p">If we define loss as:</div>
            <div className="mtop5p"><b>L = y<sub>1</sub> - y</b></div>
            <div className="mtop5p">then sometimes it’s <b>positive</b> (if prediction &gt; actual) and 
            sometimes <b>negative</b> (if prediction &lt; actual).</div>
            <div className="mtop5p"><b>Problem:</b> If you add up these differences over many training examples, positives 
            and negatives cancel each other out. It may look like total error is zero, even though predictions are very wrong.</div>
            <div className="mtop5p">We instead define loss as:</div>
            <div className="mtop5p"><b>L = ( y<sub>1</sub> - y )<sup>2</sup></b></div>
            <div className="mtop5p"><b>Advantages:</b></div>
            <div>
                <ul>
                    <li className="mtop5p"><b>No cancellation:</b> Squaring makes all errors positive. Wrong predictions always 
                        increase loss.</li>
                    <li className="mtop5p"><b>Bigger penalty for bigger mistakes:</b> If prediction is off by 10, loss = 
                        100. If off by 1, loss = 1 - Model is pushed harder to fix large errors.</li>
                    <li className="mtop5p"><b>Smooth mathematics:</b> Squaring makes the function <b>differentiable</b> and easy 
                        for Gradient Descent to work with.</li>
                </ul>
            </div>
            <div className="mtop5p">Therefore, The loss is squared <b>not because subtraction is wrong,</b> but because squaring 
            makes learning stable, fair, and mathematically convenient.</div>
            <div>So <b>squared error</b> is just the <b>standard choice for regression</b> (predicting numbers), not the only possible one.</div>
    </div>);
  };

  const Set2FAQ1 = () =>{
    return (<div className="padLeft5p">
                <div className="mtop5p">Because the error surface is not flat.</div>
                <div>
                    <ul>
                        <li className="mtop5p">Imagine the error is like a curved bowl (U-shape).</li>
                        <li className="mtop5p">If you take <b>one step,</b> you’re still somewhere on the slope.</li>
                        <li className="mtop5p">To reach the <b>bottom (minimum error),</b> you need <b>many steps.</b></li>
                    </ul>
                </div>
                <div className="mtop5p">Each training step:</div>
                <div>
                    <ul>
                        <li className="mtop5p">Looks at the slope (gradient).</li>
                        <li className="mtop5p">Moves a little bit downhill.</li>
                        <li className="mtop5p">Gets closer to the minimum.</li>
                    </ul>
                </div>
            </div>);
  };


  const Set2FAQ2 = () =>{
    return (<div className="padLeft5p">
        <div className="mtop5p">Good point: input <code><b>x = 5</b></code> is constant.</div>
        <div className="mtop5p">But the <b>weights</b> are changing in each step!</div>
        <div>
                    <ul>
                        <li className="mtop5p">Step 1: weight = 2. Prediction = 10. Error = 70.</li>
                        <li className="mtop5p">Step 2: weight = 5. Prediction = 25. Error = 55.</li>
                        <li className="mtop5p">Step 3: weight = 10. Prediction = 50. Error = 30.</li>
                        <li className="mtop5p">Step 4: weight = 15. Prediction = 75. Error = 5.</li>
                        <li className="mtop5p">Step 5: weight = 16. Prediction = 80. Error = 0</li>
                    </ul>
        </div>
        <div className="mtop5p">See? The input is the same, but weights keep improving. That’s why repeating helps.</div>
    </div>);
  };

  const Set2FAQ3 = () =>{
    return (<div className="padLeft5p">
                <div>
                    <ul>
                        <li className="mtop5p">It works not only for one input, but <b>for millions of data points.</b></li>
                        <li className="mtop5p">Gradient Descent is <b>general</b> — it can learn from many examples at once.</li>
                        <li className="mtop5p">In the real world, data is noisy and complex, so slow step-by-step learning 
                            helps avoid wrong answers.</li>
                    </ul>
                </div>
                <div className="mtop5p">Think of it like <b>learning math as a student:</b></div>
                <div>
                    <ul>
                        <li className="mtop5p">You don’t understand a formula in one go.</li>
                        <li className="mtop5p">You solve the <b>same type of problem multiple times</b> until your brain adjusts 
                            and gets it right automatically.</li>
                        <li className="mtop5p">That "repetition" is the training.</li>
                    </ul>
                </div>
            </div>);
  };

 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>3. Real-Life Example</b></h2></div>
    <div className="mtop15p">
        <div>Imagine you want to guess a student’s marks based on study hours:</div>
        <div>
            <ul>
                <li className="mtop5p">Input (hours studied) = 5</li>
                <li className="mtop5p">Actual marks = 80</li>
                <li className="mtop5p">Neuron predicts = 60</li>
            </ul>
        </div>
        <div>At the start, the neuron <b>doesn’t know the right weight.</b></div>
        <div className="mtop5p">Let’s say our neuron’s function is:</div>
        <GradientDescentBasicFormula />
    </div>
    <div className="mtop5p">In supervised learning you train on pairs <code><b>(x,y)</b></code>.</div>
    <div className="mtop5p">
        <ul>
            <li className="mtop5p"><b>Input:</b> <code><b>x = 5</b></code></li>
            <li className="mtop5p"><b>Actual Output:</b> <code><b>y = 80</b></code></li>
            <li className="mtop5p"><b>Initial guess:</b> <code><b>&omega; = 5</b></code>, <code><b>b = 0</b></code> and it's <b>Prediction = </b> 25 (way off!)</li>
        </ul>
    </div>
    <div className="mtop5p">The model’s first prediction (e.g., 25) comes from <b>initial</b> weights <b>&omega;,b</b> (often random).</div>
    <div className="mtop5p">Then we compare prediction <code><b>y<sub>1</sub> = &omega;.x + b</b></code> with the known 
        target <b>y</b> using a loss.</div>
    <div className="mtop5p">To measure how wrong the prediction is, we use Loss function:</div>
    <div className="mathJaxContext-formula">
        <div className="mbot15p">L = ( y<sub>1</sub> - y )<sup>2</sup></div>
    </div>
    <div className="mtop5p">This is <b>Mean Squared Error</b> (for one example, it’s just squared error).</div>

    <div className="mtop15p mbot15p">
        <Accordian id="AccordianFAQ-Set#1" 
            data={[{ 
                        id:"Set1-FAQ#1", 
                        title: (<div><b>FAQ#1: Why do we take the square of the difference in the loss function? Why not 
                            just use the simple difference (prediction – actual)?</b></div>), 
                        component: <Set1FAQ1 />,
                        backgroundColor: '#eee' 
                    }]} />
    </div>

    <div className="mtop5p">
        That loss tells us how wrong we are. From it we compute the slopes (gradients) and adjust <b>&omega;, b.</b>
    </div>
    <div>We need to adjust <b>&omega;</b> and <b>b</b>, step by step.</div>
    <div className="mtop5p">But the slope (gradient) doesn’t allow us to jump directly to the right weight.
        Instead, we must <b>move in small steps.</b></div>
    <div className="mtop5p"><i>Just like climbing down a mountain — you can’t jump from the top to the bottom in one move 
        (you’ll crash). You take small safe steps.</i></div>
    <div className="mtop5p"><b>Gradients for one example:</b></div>
    <div className="mtop5p">Gradient Descent needs the <b>slope</b> of the loss with respect to each parameter.</div>
    <div className="mtop5p"><i>If slope is positive</i>, decrease the parameter.</div>
    <div className="mtop5p"><i>If slope is negative</i>, increase the parameter.</div>
    <div className="mtop5p">So we calculate:</div>
    <div className="mtop5p"><GradientSlopesDisplay /></div>
    <div className="mtop5p">These tell us <b>how much the loss changes if we change &omega; or b.</b></div>
    <GradientOne />
    <div className="mtop5p"><b>Update rule (learning rate &eta;):</b></div>
    <UpdateRuleLearningRate />

    <div className="mtop15p">
        <Accordian id="AccordianFAQ-Set#2" 
            data={[{ id:"Set2-FAQ#1", 
                    title: (<div><b>FAQ#1 : Why Not Just Train Once?</b></div>), 
                    component: <Set2FAQ1 />,
                    backgroundColor: '#eee' 
                  }, 
                { 
                    id:"Set2-FAQ#2", 
                    title: (<div><b>FAQ#2 : What If Inputs Don’t Change?</b></div>), 
                    component: <Set2FAQ2 />,
                    backgroundColor: '#eee' 
                },
                { 
                    id:"Set2-FAQ#3", 
                    title: (<div><b>FAQ#3 : Why This Process is Powerful (Even if it Looks Slow)?</b></div>), 
                    component: <Set2FAQ3 />,
                    backgroundColor: '#eee' 
                }]} />
    </div>
    <div className="mtop15p">
        <div className="mtop5p">Even if the <b>input doesn’t change,</b> the <b>neuron’s internal weights are changing</b> each step.</div>
        <div className="mtop5p">That’s why repeating makes sense — it gradually improves the <i>"knowledge"</i> until the neuron learns the correct relationship.</div>
    </div>
 </div>);
};

export default Example;