import React, { useState, useEffect } from "react";
import { Form, Select, TextBox, UrlAsyncFetch, FormToReqBodyFormatter } from "e-ui-react";

const UpdateEmployeeForm = ({ data }) =>{
 const [updateEmployeeData, setUpdateEmployeeData] = useState();
 useEffect(()=>{
    setUpdateEmployeeData(data);
 },[data]);
 useEffect(()=>{
  console.log("updateEmployeeData: "+JSON.stringify(updateEmployeeData));
 },[updateEmployeeData]);
 return (<div>
    <Form name="UpdateEmployeeForm" btnSubmit={{
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
        if(isValidForm){  
            // Error Validation check
            const response = await UrlAsyncFetch( process.env.NEXUS_URL + 'user/login', 
                'POST', FormToReqBodyFormatter(form.loginForm) );
            console.log("logicResposne", response);
            if(response?.data?.length>0){
                login(response?.data?.[0], 'consultancy/students-shortlist-form' );
            } else {
                setAlertMessage("We recognized the Account Password was not matched with associated Email Address. Please verify and try again.");
            }
            
        }
    }}
    onReset={async(triggerReset)=>{
        triggerReset();
    }}
    >
    {updateEmployeeData?.name && 
    (<div>
        <TextBox name="employeeName" label="Employee Name" placeholder="Enter Employee Name" value={updateEmployeeData?.name} />
    </div>)}
    {updateEmployeeData?.userRole && 
    (<div className="mtop15p">
        <Select
            name="accountType"
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
    </div>)}
    {updateEmployeeData?.email &&
    (<div className="mtop15p">
        <TextBox name="emailAddress" label="Email Address" placeholder="Enter Email Address" value={updateEmployeeData?.email} />
    </div>)}
    {updateEmployeeData?.mobile &&
    (<div className="mtop15p">
        <TextBox name="mobileNumber" label="Mobile Number (Without +91)" placeholder="Enter Mobile Number" value={updateEmployeeData?.mobile} />
    </div>)}
    </Form>
 </div>);
};

export default UpdateEmployeeForm;