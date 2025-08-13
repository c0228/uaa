import React from "react";
import { Card, Highlight } from "e-ui-react";

const INVALID_MATH_OPERATIONS = `let result = 0 / 0; // NaN
let invalid = Math.sqrt(-1); // NaN`;

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p">
      <Card padding={15} backgroundColor="#eee">
         <div><h4 className="blog-head"><b>The Problem Before NaN</b></h4></div>
         <div className="mtop15p">Before JavaScript introduced the concept of <b>NaN</b>, handling invalid numeric 
         operations was messy.</div>
         <div className="mtop5p">Imagine you're working with numbers in a language without NaN:</div>
         <div>
            <ul>
               <li className="mtop5p">If a math operation failed (like dividing text by a number), the program might 
                 <b> throw an error and stop execution.</b></li>
               <li className="mtop5p">Some languages returned <b>special values like null or undefined</b> for invalid numbers, 
               but this caused confusion—was it really a number missing, or just an invalid calculation?</li>
               <li className="mtop5p">Without a clear <b>"invalid number" type,</b> developers had to manually check if 
               inputs were valid before every calculation, which was repetitive and error-prone.</li>
            </ul>
         </div>
         <div className="mtop5p">JavaScript solved this by introducing <b>NaN</b>, a special numeric value that represents something 
         which <b>is supposed to be a number but isn’t a valid number.</b></div>
      </Card>
   </div>
   <div className="mtop15p"><h2 className="blog-head"><b>Introduction  – What is NaN?</b></h2></div>
   <div className="mtop15p"><b>NaN</b> stands for <b>"Not-a-Number".</b></div>
   <div className="mtop5p">In JavaScript:</div>
   <div>
      <ul>
         <li className="mtop5p">NaN is a <b>special value</b> of type <b>number</b>.</li>
         <li className="mtop5p">It indicates the result of a <b>mathematically invalid or undefined numeric operation.</b></li>
         <li className="mtop5p">It <b>does not throw an error</b> — instead, it propagates through calculations.</li>
      </ul>
   </div>
   <div className="mtop15p"><h5 className="blog-head"><b>When Does NaN Occur?</b></h5></div>
   <div className="mtop5p">NaN appears in situations like:</div>
   <div>
      <ul>
         <li className="mtop5p">
            <div><b>Invalid mathematical operations</b></div>
            <div className="mtop5p"><Highlight content={INVALID_MATH_OPERATIONS} lang="javascript" /></div>
         </li>
         <li className="mtop5p">
            <div><b>Trying to perform math on non-numeric strings</b></div>
            <div className="mtop5p"><Highlight content={`let val = "hello" * 5; // NaN`} lang="javascript" /></div>
         </li>
         <li className="mtop5p">
            <div><b>Parsing non-numeric strings to numbers</b></div>
            <div className="mtop5p"><Highlight content={`let num = Number("abc"); // NaN`} lang="javascript" /></div>
         </li>
      </ul>
   </div>
 </div>);
};

export default Introduction;