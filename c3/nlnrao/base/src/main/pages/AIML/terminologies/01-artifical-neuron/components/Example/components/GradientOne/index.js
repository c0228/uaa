import React, { useState } from "react";
import { Card, Modal, Accordian } from "e-ui-react";
import { MathJax, MathJaxContext } from "better-react-mathjax";

const GradientOne = () =>{
    const [ showModel, setShowModal ] = useState(false);
    const DeriveFormula1 = () =>{
        return (<div>
            <div className="mtop5p"><b>Formula #1:</b> <MathJax inline>{`\\( L = ( y_{1} - y)^2 \\)`}</MathJax></div>
            <div>Differentiating in terms of &omega;</div>
            <div><MathJax inline>{`\\( \\implies \\frac{dL}{d\\omega} = 2 . (y_{1} - y). \\frac{dy_{1}}{d \\omega} - \\frac{dy}{d \\omega} \\)`}</MathJax></div>
            <div>In above Statement, y is a Constant value. So, <MathJax inline>{`\\( \\frac{d(y)}{dx} = 0 \\)`}</MathJax></div>
            <div>Therefore, it can be written as - </div>
            <div><MathJax inline>{`\\( \\implies \\frac{dL}{d\\omega} = 2 . (y_{1} - y). \\frac{dy_{1}}{d \\omega} \\)`}</MathJax> <b>---&gt; EQ(1)</b></div> 
            
            <div className="mtop5p"><b>Formula #2:</b> <MathJax inline>{`\\( y_{1} = \\omega . x + b \\)`}</MathJax></div>
            <div>Differentiating in terms of &omega;</div>
            <div><MathJax inline>{`\\( \\implies \\frac{dy_{1}}{d\\omega} = \\frac{d\\omega}{d\\omega} .x + \\frac{db}{d\\omega} \\)`}</MathJax></div> 
            <div>In above Statement, b is a Constant value.</div>
            <div><MathJax inline>{`\\( \\implies \\frac{dy_{1}}{d\\omega} =  1 . x + 0 \\)`}</MathJax></div> 
            <div><MathJax inline>{`\\( \\implies \\frac{dy_{1}}{d\\omega} =  x \\)`}</MathJax> <b>---&gt; EQ(2)</b></div> 
            <div>Impementing <b>EQ(2)</b> in <b>EQ(1)</b>, we will get -</div>
            <Card padding={15} backgroundColor="#eee">
                <div><MathJax inline>{`\\( \\frac{dL}{d\\omega} =   2 . (y_{1} - y). x \\)`}</MathJax></div>
            </Card>
        </div>);
    };
    const DeriveFormula2 = () =>{
        return (<div>
            <div className="mtop5p"><b>Formula #1:</b> <MathJax inline>{`\\( L = ( y_{1} - y)^2 \\)`}</MathJax></div>
            <div>Differentiating in terms of b;</div>
            <div><MathJax inline>{`\\( \\implies \\frac{dL}{db} = 2 . (y_{1} - y). \\frac{dy_{1}}{db} - \\frac{dy}{db} \\)`}</MathJax></div>
            <div>In above Statement, y is a Constant value. So, <MathJax inline>{`\\( \\frac{d(y)}{db} = 0 \\)`}</MathJax></div>
            <div>Therefore, it can be written as - </div>
            <div><MathJax inline>{`\\( \\implies \\frac{dL}{db} = 2 . (y_{1} - y). \\frac{dy_{1}}{db} \\)`}</MathJax> <b>---&gt; EQ(1)</b></div> 
            
            <div className="mtop5p"><b>Formula #2:</b> <MathJax inline>{`\\( y_{1} = \\omega . x + b \\)`}</MathJax></div>
            <div>Differentiating in terms of b</div>
            <div><MathJax inline>{`\\( \\implies \\frac{dy_{1}}{db} = \\frac{d\\omega}{db} .x + \\frac{db}{db} \\)`}</MathJax></div> 
            <div>In above Statement, &omega; is a Constant value.</div>
            <div><MathJax inline>{`\\( \\implies \\frac{dy_{1}}{db} =  0 . x + 1 \\)`}</MathJax></div> 
            <div><MathJax inline>{`\\( \\implies \\frac{dy_{1}}{db} =  1 \\)`}</MathJax> <b>---&gt; EQ(2)</b></div> 
            <div>Impementing <b>EQ(2)</b> in <b>EQ(1)</b>, we will get -</div>
            <Card padding={15} backgroundColor="#eee">
                <div><MathJax inline>{`\\( \\frac{dL}{d\\omega} =   2 . (y_{1} - y) \\)`}</MathJax></div>
            </Card>
        </div>);
    };
    const FormulaEvolution = ()=>{
        return (<MathJaxContext>
        <div style={{ maxHeight:'400px', overflowY:'scroll', fontSize:'14px', marginBottom:'15px' }}>
            <div style={{ padding:'15px' }}>
                <div>
                    <Card padding={15} backgroundColor="#eee">
                        <div><b>Differentiation Formulas:</b></div>
                        <div>We know, implicity Differentiation Formula (in terms of y),</div>
                        <div className="mtop5p">If <MathJax inline>{`\\( y = y(x) \\)`}</MathJax> and <b>c</b> is the constant value, then</div>
                        <div>
                        <b>(i)</b> <MathJax inline>{`\\( \\frac{d}{dx}(y^n) = n . y^{n-1} . \\frac{dy}{dx} \\)`}</MathJax>
                        </div>
                        <div className="mtop5p">
                        <b>(ii)</b> <MathJax inline>{`\\( \\frac{d(c)}{dx} = 0 \\)`}</MathJax>
                        </div>
                        <div className="mtop5p">
                        <b>(iii)</b> <MathJax inline>{`\\( \\frac{d(x)}{dx} = 1 \\)`}</MathJax>
                        </div>
                    </Card>
                </div>
                <div className="mtop15p">
                    <Accordian id="Derivation" 
                    data={[{ 
                            id:"Item#1", 
                            title: (<div><b>#1. Derving <MathJax inline>{`\\( \\frac{\\partial L}{\\partial \\omega} \\)`}</MathJax> Value:</b></div>), 
                            component: <DeriveFormula1 />  },
                        { 
                            id:"Item#2", 
                            title: (<div><b>#2. Derving <MathJax inline>{`\\( \\frac{\\partial L}{\\partial b} \\)`}</MathJax> Value:</b></div>), 
                            component: <DeriveFormula2 />
                        }]} />
                </div>
            </div>
        </div>
        </MathJaxContext>);
    };
    return (<MathJaxContext>
       <div className="mathJaxContext-formula">
         <p>
           <MathJax inline>{`\\( \\frac{\\partial  L}{\\partial  \\omega} = 2 ( y_{1} - y ) x ,  \\frac{\\partial  L}{\\partial  b} = 2 ( y_{1} - y ) \\)`}</MathJax>
           <span className="pull-right" style={{ cursor:'pointer', paddingRight:'15px', fontSize:'13px', color:'#0d6efd' }} 
            onClick={()=>setShowModal(true)}><u>How?</u></span>
           <Modal title="How these values got derived?" show={showModel} onClose={setShowModal}>
             <FormulaEvolution />
           </Modal>
         </p>
         
       </div>
     </MathJaxContext>);
};

export default GradientOne;