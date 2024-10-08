import React, { useState } from "react";
import { Form, Alert, Email, Password, Select, TextBox, Switch, FormToReqBodyFormatter, UrlAsyncFetch, FORM_RESET } from 'e-ui-react';
import StaticProfileForm from "@StaticData/profile-form.json";
import md5 from 'md5';

const Register = ()=>{
 const [ viewScreen, setViewScreen ] = useState('REGISTER_FORM');
 const [ alertMessage, setAlertMessage ] = useState('');

 const AlertWarning = ()=>{
  return (<>
    {alertMessage?.length>0 && <Alert type="danger" show={true} body={<div>{alertMessage}</div>} />}
  </>);
 };

 const RegisterSuccess = ()=>{
    return (<div>
        <div><h4 className="bs-header"><b>Your Account created Successfully</b></h4></div>
        <div className="mtop15p mbot15p" style={{ color:'#777', fontWeight: 'bold' }}>
            Congratulations! Your account has been created successfully.<br/><br/>
            Thank you for choosing our platform. Take the next step and log in now to embark on an incredible journey.<br/><br/>
            If you encounter any issues or need assistance, during the login process or have forgotten your password, 
            our support team is ready to assist you.
        </div>
    </div>);
 };

 const Title = ()=>{
    return (<div>
        <div><h4 className="bs-header"><b>Create your Account</b></h4></div>
        <div className="mtop15p mbot15p" style={{ color:'#777', fontWeight: 'bold' }}>
            Start your journey by creating your account
        </div>
    </div>);
 };

 const Name = ()=>{
  return (<div className="mtop15p">
  <TextBox name="name" label="Name" placeholder="Enter your Name" 
      validation={{
          onSubmit:{ textTransform: 'SENTENCE_CASE' },
          required:{
              value: true,
              errorMessage:"This is a Mandatory Field"
          },
          minLength:{
              value: 5,
              errorMessage:"Message should be greator than 5"
          }
      }}
  />
  </div>);
 };
 
 const RegEmail = ()=>{
    return (<div className="mtop15p">
    <Email name="email" label="Email Address" placeholder="Enter Email Address" 
      validation={{
        onSubmit:{ textTransform: 'LOWER_CASE' },
        email:{
            formatCheck: true,
            isEmailExist:{ 
                // If Email Already Exists, Returns 'EXIST'
                // If Email not exists, Returns 'NOT_EXIST'
                url: process.env.NEXUS_URL + "user/validate/email",
                method:"POST",
                value:"NOT_EXIST", // When Value not matches - throws Error Message
                errorMessage:"This Email was already registered. Please try to login into the Account"
            }
        }
      }} />
    </div>);
 };

 const RegPassword = ()=>{
    return (<div>
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
    </div>);
 };

 const AgreeTermsAndConditions = ()=>{
    return (<div className="mtop15p" style={{ color:'#777' }}>
        <Switch type="checkbox" id="agreeTermsAndConditions" name="agreeTermsAndConditions"
            value={[{ id:1, 
                label:"I agree to the terms and conditions. By creating an account, you agree to our terms and conditions and privacy policy.", 
                value:"1" }]} 
            validation={{
                        required:{
                            value: true,
                            errorMessage : "Please Select Terms and Conditions"
                        }
                    }} />
        
    </div>);
 };

 return (<>
    {viewScreen==='REGISTER_FORM' && (<>
        <Form name="registerForm" btnSubmit={{
            align: 'center',
            btnType:'primary',
            label:'Create your Account',
            size: 11
        }}
        onSubmit={async(form, isValidForm, triggerReset)=>{
            // Error Validation check
            if(isValidForm){  
                const reqBody = FormToReqBodyFormatter(form.registerForm);
                reqBody.userRole = 'CUSTOMER';
                reqBody.accPwd = md5( reqBody.accPwd );
               console.log("reqBody", JSON.stringify(reqBody));
               await UrlAsyncFetch( process.env.NEXUS_URL + 'user/register', 'POST', reqBody );
               setViewScreen('REGISTER_SUCCESS');
              console.log("isValidForm", isValidForm);
              triggerReset();
            }
        }}>
            <Title />
            <AlertWarning />
            <Name />
            <RegEmail />
            <RegPassword />
            <AgreeTermsAndConditions />
        </Form>
    </>)}
    {viewScreen==='REGISTER_SUCCESS' && (<>
        <RegisterSuccess />
    </>)}
 </>);
};

export default Register;