import React, { useState } from "react";
import { Card, Modal, Accordian } from "e-ui-react";
import { MathJax, MathJaxContext } from "better-react-mathjax";

const UpdateRuleLearningRate = () =>{
 const [ showModel, setShowModal ] = useState(false);
 const FormulaEvolution = () =>{
    return (<MathJaxContext>
     <div style={{ fontSize:'14px', padding:'15px' }}>
        <Card padding={15} backgroundColor="#eee">
            <div><b>Gradient Descent Algorithm:</b></div>
            <div>The gradient descent algorithm says:</div>
            <div align="center" style={{ marginTop:'5px', fontSize:'18px' }}>
                <MathJax inline>{`\\( \\theta_{new} = \\theta_{old}  - \\eta . \\frac{ \\partial L}{ \\partial \\theta } \\)`}</MathJax>
            </div>
            <div>where:</div>
            <ul>
                <li><MathJax inline>{`\\( \\eta \\)`}</MathJax> = <b>learning rate</b> (small positive number controlling step size),</li>
                <li><MathJax inline>{`\\( \\frac{ \\partial L}{ \\partial \\theta} \\)`}</MathJax> = slope/gradient,</li>
                <li>the minus sign means <b>go opposite to gradient direction.</b></li>
            </ul>
        </Card>
     </div>
    </MathJaxContext>);
 };
 return (<MathJaxContext>
    <div className="mathJaxContext-formula">
        <p>
            <MathJax inline>{`\\( \\omega \\leftarrow  \\omega - \\eta . \\frac{ \\partial L }{ \\partial \\omega }, b  \\leftarrow  b - \\eta . \\frac{ \\partial L }{ \\partial b  } \\)`}</MathJax>
            <span className="pull-right" style={{ cursor:'pointer', paddingRight:'15px', fontSize:'13px', color:'#0d6efd' }} 
                onClick={()=>setShowModal(true)}><u>How?</u></span>
            <Modal title="How these values got dervied?" show={showModel} onClose={setShowModal}>
                <FormulaEvolution />
            </Modal>
        </p>
    </div>
 </MathJaxContext>);
};

export default UpdateRuleLearningRate;