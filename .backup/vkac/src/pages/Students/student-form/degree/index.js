import React, { useState, useEffect } from "react";
import { Card, Row, Col, TextBox, Menu, Form, getForm } from "e-ui-react";

{/* BTechDegreeGPA05 */}

const Percentage = ()=>{
    const [bTechPercent, setBtechPercent] = useState('');
    const [gpaScore, setGpaScore] = useState('');
    return (
    <div className="mtop15p mbot15p">
    <TextBox name="BTechDegreePercent" label="B.Tech Percentage ( Out of 100% )"
       placeholder="0"
       value={bTechPercent}
       onChange={(percentage)=>{
           const percent = percentage?.value?.length>0?parseFloat(percentage?.value):''; // Use parseFloat instead of parseInt
           const gpa = (percent / 100) * 4; // Adjust the conversion formula
           setBtechPercent( percent.toString() );
           setGpaScore(gpa.toFixed(2)); // Round to 2 decimal places
       }}
       />
       <div className="mtop15p mbot15p">
           <label><b>GPA Score (Out of 4):</b></label> {gpaScore?.length>0?gpaScore:0}
       </div>
   </div>);
    };

    const CGPA = ()=>{
        const [bTechCgpa, setBtechCgpa] = useState('');
        const [gpaScore, setGpaScore] = useState('');
        return (<div className="mtop15p mbot15p">
         <TextBox name="BTechDegreeCGPA" label="B.Tech CGPA Score ( Out of 10 )" placeholder="0"
         value={bTechCgpa}
         onChange={(cgpa) => {
            const cgpaScore = cgpa?.value?.length>0?parseFloat(cgpa?.value):''; // Use parseFloat instead of parseInt
            const gpaSecured = (cgpaScore / 10) * 4; // Adjust the conversion formula  
            setBtechCgpa( cgpaScore.toString() );
            setGpaScore(gpaSecured.toFixed(2)); // Round to 2 decimal places
         }}
         />
         
         <div className="mtop15p mbot15p">
            <label><b>GPA Score (Out of 4):</b></label>  {gpaScore?.length>0?gpaScore:0}
        </div>
    </div>);
     };

const BTechDegree = ()=>{

 return (<>
    <label className="form-label"><b>B.Tech / Degree GPA Score (Out of 4) :</b></label>
    <Card padding={15}>
        <Row>
            <Col xxl={12} xl={12}>
               <Menu justify={true} type="pill" 
                list={[{ id:"Percentage", 
                        label:"Convert Percentage", 
                        component:(<>
                            <Percentage />
                        </>) },
                    { id:"CGPA", 
                    label:"Convert CGPA",
                    component:(<>
                        <CGPA />
                    </>) }]} />
            </Col>
        </Row>
    </Card>
 </>);
};

export default BTechDegree;