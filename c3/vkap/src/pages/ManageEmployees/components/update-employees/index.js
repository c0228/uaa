import React, { useState, useEffect } from "react";
import { Form, Select, TextBox, Password, Icon, UrlAsyncFetch, FormToReqBodyFormatter, Alert } from "e-ui-react";
import md5 from "md5";

const UpdateEmployeeForm = ({ data, initialize }) =>{
 const [showAlert, setShowAlert] = useState();
 const [updateEmployeeData, setUpdateEmployeeData] = useState();
 useEffect(()=>{
    setShowAlert({ type:'', icon:'', show: false, message:'' });
    setUpdateEmployeeData(data);
 },[data]);
 useEffect(()=>{
  console.log("updateEmployeeData: "+JSON.stringify(updateEmployeeData));
 },[updateEmployeeData]);
 return (<div>
    {showAlert?.show && (<div className="mbot15p">
          <Alert type={showAlert?.type} show={showAlert?.show} body={<div>
              <Icon type="FontAwesome" name={showAlert?.icon} size={16} />
              <span className="mLeft5p">{showAlert?.message}</span>
            </div>} />
        </div>)}
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
                postData.accPwd = md5( postData.accPwd );
            const response = await UrlAsyncFetch( process.env.NEXUS_URL + 'user/details/update', 
                'POST', postData );
            console.log("logicResposne", response);
            if(response?.status?.toLowerCase() ==='success'){
                setUpdateEmployeeData({...updateEmployeeData, postData});
                setShowAlert({ type:'success', icon:'fa-check-circle', show: true, message:'Your Employee Details updated Successfully' });
                initialize();
            } else {
                setShowAlert({ type:'danger', icon:'warning', show: true, message:'Failed to update Employee Details.' });
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