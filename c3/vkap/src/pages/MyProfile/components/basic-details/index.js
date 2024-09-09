import React, { useState, useEffect } from "react";
import { TextBox, Form, FormToReqBodyFormatter, UrlAsyncFetch } from "e-ui-react";

const BasicDetails = () =>{
 const [showAlert, setShowAlert] = useState();
 useEffect(()=>{ },[]);
 return (<div>
    <Form name="BasicDetailsForm" btnSubmit={{
        align: 'center',
        btnType:'success',
        label:'Update My Details',
        size: 11
    }} 
    btnReset={{
        align: 'center',
        btnType:'danger',
        label:'Reset Form',
        size: 11
    }} 
    onSubmit={async(form, isValidForm, triggerReset)=>{
        if(isValidForm){  
            // Error Validation check
            let postData = FormToReqBodyFormatter(form.AddEmployeeForm); 
            const response = await UrlAsyncFetch( process.env.NEXUS_URL + 'user/register', 
                'POST', postData );
            console.log("logicResposne", response);
            if(response?.status?.toLowerCase()==='success'){
                setShowAlert({ type:'success', icon:'fa-check-circle', show: true, message:'New User Account created Successfully' });
                initialize();
            } else {
                setShowAlert({ type:'danger', icon:'warning', show: true, message:'Failed to create New User Account' });
            }
            triggerReset();
        }
    }}
    onReset={async(triggerReset)=>{
        triggerReset();
    }}>
    <div>
        <TextBox name="name" label="Your Name" placeholder="Enter your Name" />
    </div>
    <div className="mtop15p">
        <TextBox name="email" label="Email Address" placeholder="Enter Email Address" />
    </div>
    <div className="mtop15p">
        <TextBox name="mobile" label="Mobile Number (Without +91)" placeholder="Enter Mobile Number" />
    </div>
    </Form>
 </div>);
};

export default BasicDetails;