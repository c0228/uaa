import React, { useState } from "react";
import { Form, Select, TextBox, Password, Alert, UrlAsyncFetch, FormToReqBodyFormatter } from "e-ui-react";

const AddEmployeeForm = () =>{
 const [showAlert, setShowAlert] = useState({ type:'', show: false, message:'' });
 return (<div>
    {showAlert?.show && (<Alert type={showAlert?.type} show={showAlert?.show} body={showAlert?.message} />)}
    <Form name="AddEmployeeForm" btnSubmit={{
        align: 'center',
        btnType:'success',
        label:'Create New Employee',
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
            const response = await UrlAsyncFetch( process.env.NEXUS_URL + 'user/register', 
                'POST', FormToReqBodyFormatter(form.AddEmployeeForm) );
            console.log("logicResposne", response);
            if(response?.status?.toLowerCase()==='success'){
                setShowAlert({ type:'success', show: true, message:'New User Account created Successfully' });
            } else {
                setShowAlert({ type:'danger', show: true, message:'Failed to create New User Account' });
            }
            triggerReset();
        }
    }}
    onReset={async(triggerReset)=>{
        triggerReset();
    }}
    >
    <div>
        <TextBox name="name" label="Employee Name" placeholder="Enter Employee Name" />
    </div>
    <div className="mtop15p">
        <Select
            name="userRole"
            label="Account Type"
            placeholder="Select Account Type"
            options={[{ id: 'ADMINISTRATOR', label: 'ADMINISTRATOR', value: 'ADMINISTRATOR' },
            { id: 'EMPLOYEE', label: 'EMPLOYEE', value: 'EMPLOYEE' }]}
            className="navbar-layout"
            fontSize="12"
            onChange={(event) => {
                let option = event.target.value;
            }} />
    </div>
    <div className="mtop15p">
        <TextBox name="email" label="Email Address" placeholder="Enter Email Address" />
    </div>
    <div className="mtop15p">
        <TextBox name="mobile" label="Mobile Number (Without +91)" placeholder="Enter Mobile Number" />
    </div>
    <div className="mtop15p">
    <Password type="password" label="Account Password" placeholder="Enter your Password" name="accPwd" value="" validation={{
            required:{
                value: true,
                errorMessage:"This is a Mandatory Field"
            },
            minLength:{
                value: 8,
                errorMessage:"Password should be greator than 8"
            },
            maxLength:{
                value: 16,
                errorMessage:"Message should be lessthan 16"
            },
            passwordContains:["Lowercase","Uppercase","Number", "Symbol"]
    }} />
    </div>
    <div className="mtop15p">
    <Password type="confirmPassword" reference="accPwd" placeholder="Enter your Confirm Password" 
        label="Confirm Account Password" name="confirmPwd" value="" validation={{
            required:{
                value: true,
                errorMessage:"This is a Mandatory Field"
            },
            minLength:{
                value: 8,
                errorMessage:"Password should be greator than 8"
            },
            maxLength:{
                value: 16,
                errorMessage:"Message should be lessthan 16"
            },
            passwordContains:["Lowercase","Uppercase","Number", "Symbol"]
    }} />
    </div>
    </Form>
 </div>);
};

export default AddEmployeeForm;