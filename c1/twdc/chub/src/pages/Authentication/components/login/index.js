import React, { useState } from "react";
import { Form, Alert, Email, Password, FormToReqBodyFormatter, UrlAsyncFetch, Colors  } from 'e-ui-react';
import { useAuth } from "@Provider/AuthProvider.js";
import md5 from "md5";

const Login = ({ setShowForgotPwd })=>{
 const [ alertMessage, setAlertMessage ] = useState('');

 const AlertWarning = ()=>{
  return (<>
    {alertMessage?.length>0 && <Alert type="danger" show={true} body={<div>{alertMessage}</div>} />}
  </>);
 };

 const Title = ()=>{
  return (<div>
        <div><h4 className="bs-header"><b>Login to your Account</b></h4></div>
        <div className="mtop15p mbot15p" style={{ color:'#777', fontWeight: 'bold' }}>
            Welcome back! Please login to your Account
        </div>
    </div>);
 };

 const LoginEmail = ()=>{
  console.log("process.env.NEXUS_URL", process.env.NEXUS_URL);
  return (<Email name="email" validation={{
    onSubmit:{ textTransform: 'LOWER_CASE' },
    email:{
        formatCheck: true,
        isEmailExist:{ 
            // If Email Already Exists, Returns 'EXIST'
            // If Email not exists, Returns 'NOT_EXIST'
            url: process.env.NEXUS_URL + "user/validate/email",
            method:"POST",
            value:"EXIST", // When Value not matches - throws Error Message
            errorMessage:"This Email is not registered. Please create your Account."
        }
    }
  }} />);
 };

 const LoginPwd = ()=>{
  return (<div className="mtop15p">
    <Password type="password" label="Account Password" name="accPwd" 
        placeholder="Enter Account Password" 
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
  </div>);
 };

 const ForgotPwd = ()=>{
  return (<div align="right" className="mtop15p userAuth-linkButton" style={{ color: '#555' }}>
   <span className="userAuth-linkButton-span" style={{ borderBottom:'1px dashed #999' }} onClick={()=>setShowForgotPwd(true)}>Forgot Password?</span> 
  </div>);
 };

 const { login } = useAuth();

 return (<>
    <Title />  
    <Form name="loginForm" btnSubmit={{
        align: 'right',
        btnType:'danger',
        label:'Login to your Account',
        size: 11
    }} 
    onSubmit={async(form, isValidForm, triggerReset)=>{
        if(isValidForm){  
            // Error Validation check
            let postData = FormToReqBodyFormatter(form.loginForm);
            postData.accPwd = md5( postData.accPwd );
            const response = await UrlAsyncFetch( process.env.NEXUS_URL + 'user/login', 'POST', postData );
            console.log("logicResposne", response);
            if(response?.data?.length>0){
                login(response?.data?.[0], 'portal/manage-company' );
                triggerReset();
            } else {
                setAlertMessage("We recognized the Account Password was not matched with associated Email Address. Please verify and try again.");
            }
            
        }
    }}>
        <AlertWarning />
        <LoginEmail />     
        <LoginPwd />
        <ForgotPwd />
    </Form>
 </>);
};

export default Login;