import React, { useState, useEffect } from "react";
import { Form, Select, TextBox, Password, UrlAsyncFetch, FormToReqBodyFormatter, Alert } from "e-ui-react";

const UpdateEmployeeForm = ({ data }) =>{
 const [showAlert, setShowAlert] = useState();
 const [updateEmployeeData, setUpdateEmployeeData] = useState();
 useEffect(()=>{
    setShowAlert({ type:'', show: false, message:'' });
    setUpdateEmployeeData(data);
 },[data]);
 useEffect(()=>{
  console.log("updateEmployeeData: "+JSON.stringify(updateEmployeeData));
 },[updateEmployeeData]);
 return (<div>
    {showAlert?.show && (<Alert type={showAlert?.type} show={showAlert?.show} body={showAlert?.message} />)}
    {updateEmployeeData && Object.keys(updateEmployeeData) && (<Form name="UpdateEmployeeForm" btnSubmit={{
        align: 'center',
        btnType:'success',
        label:'Update Employee Details',
        size: 11
    }} 
    btnReset={{
        align: 'center',
        btnType:'danger',
        label:'Reset Form',
        size: 11
    }} 
    onSubmit={async(form, isValidForm, triggerReset)=>{
        if(isValidForm){ // Error Validation check
            let postData = FormToReqBodyFormatter(form.UpdateEmployeeForm);
                postData.userId = updateEmployeeData?.userId;
            const response = await UrlAsyncFetch( process.env.NEXUS_URL + 'user/details/update', 
                'POST', postData );
            console.log("logicResposne", response);
            if(response?.status?.toLowerCase() ==='success'){
                setUpdateEmployeeData({...updateEmployeeData, postData});
                setShowAlert({ type:'success', show: true, message:'Your Employee Details updated Successfully' });
            } else {
                setShowAlert({ type:'danger', show: true, message:'Failed to update Employee Details.' });
            }
        }
    }}
    onReset={async(triggerReset)=>{
        triggerReset();
    }}
    >
    <div>
        <TextBox name="name" label="Employee Name" placeholder="Enter Employee Name" value={updateEmployeeData?.name} />
    </div>
    
    <div className="mtop15p">
        <Select
            name="userRole"
            label="Account Type"
            value={updateEmployeeData?.userRole}
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
        <TextBox name="email" label="Email Address" placeholder="Enter Email Address" value={updateEmployeeData?.email} />
    </div>
    <div className="mtop15p">
        <TextBox name="mobile" label="Mobile Number (Without +91)" placeholder="Enter Mobile Number" value={updateEmployeeData?.mobile} />
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
    </Form>)}
 </div>);
};

export default UpdateEmployeeForm;