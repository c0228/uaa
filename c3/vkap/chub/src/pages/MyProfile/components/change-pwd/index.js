import React, { useState } from "react";
import { Alert, Password, Icon, Form, FormToReqBodyFormatter, UrlAsyncFetch } from "e-ui-react";
import md5 from "md5";

const ChangePwd = () =>{
 const [showAlert, setShowAlert] = useState({ type:'', icon:'', show: false, message:'' });
 return (<div>
    {showAlert?.show && (<div className="mbot15p">
          <Alert type={showAlert?.type} show={showAlert?.show} body={<div>
              <Icon type="FontAwesome" name={showAlert?.icon} size={16} />
              <span className="mLeft5p">{showAlert?.message}</span>
            </div>} />
        </div>)}
    <Form name="ChangePwdForm" btnSubmit={{
        align: 'center',
        btnType:'success',
        label:'Update to New Credentials',
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
            let userAuthDetails = localStorage.getItem("USER_AUTH_DETAILS");
                userAuthDetails = JSON.parse(userAuthDetails);
            let postData = FormToReqBodyFormatter(form.ChangePwdForm); 
                postData.userId = userAuthDetails?.data?.userId;
                postData.accPwd = md5 (postData.accPwd);
            if(md5(postData?.oldAccPwd) === userAuthDetails?.data?.accPwd){
                const response = await UrlAsyncFetch( process.env.NEXUS_URL + 'user/details/update', 
                    'POST', postData );
                if(response?.status?.toLowerCase()==='success'){
                    setShowAlert({ type:'success', icon:'fa-check-circle', show: true, message:'We have updated your Account with New Password Successfully' });
                    // Update to localStorage
                    userAuthDetails.data = response?.data?.[0];
                    localStorage.setItem("USER_AUTH_DETAILS", JSON.stringify(userAuthDetails));
                } else {
                    setShowAlert({ type:'danger', icon:'warning', show: true, message:'Failed to update your Account Password' });
                }
            } else {
                setShowAlert({ type:'danger', icon:'fa-warning', show: true, message:'Your Old Password not matched with our existing Records.' });
            }
        }
    }}
    onReset={async(triggerReset)=>{
        triggerReset();
        setShowAlert({ type:'', icon:'', show: false, message:'' });
    }}>
    <div className="mtop15p">
    <Password type="password" label="My Current Password" name="oldAccPwd" 
        placeholder="Enter your Current Password" validation={{
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
    <Password type="password" label="Account Password" name="accPwd" 
        placeholder="Enter New Password"
        validation={{
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
    <Password type="confirmPassword" reference="accPwd" label="Confirm Account Password" name="confirmPwd" 
        placeholder="Enter Confirm Password" 
        validation={{
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

export default ChangePwd;