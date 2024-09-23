import React, { useState, useEffect } from "react";
import { TextBox, Form, Alert, Icon, FormToReqBodyFormatter, UrlAsyncFetch } from "e-ui-react";

const BasicDetails = () =>{
 const [showAlert, setShowAlert] = useState({ type:'', icon:'', show: false, message:'' });
 const [data, setData] = useState({
    userId: '',
    name: '',
    userRole:'',
    email: '',
    mobile: ''
 });
 const initialize = () =>{
    let userAuthDetails = localStorage.getItem("USER_AUTH_DETAILS");
        userAuthDetails = JSON.parse(userAuthDetails);
    setData({ userId: userAuthDetails?.data?.userId, name: userAuthDetails?.data?.name, 
        userRole: userAuthDetails?.data?.userRole,
        email: userAuthDetails?.data?.email, mobile: userAuthDetails?.data?.mobile
     });
 };
 useEffect(()=>{ initialize(); },[]);
 return (<div>
    {showAlert?.show && (<div className="mbot15p">
          <Alert type={showAlert?.type} show={showAlert?.show} body={<div>
              <Icon type="FontAwesome" name={showAlert?.icon} size={16} />
              <span className="mLeft5p">{showAlert?.message}</span>
            </div>} />
        </div>)}
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
            let postData = FormToReqBodyFormatter(form.BasicDetailsForm); 
                postData.userId = data?.userId;
            const response = await UrlAsyncFetch( process.env.NEXUS_URL + 'user/details/update', 
                'POST', postData );
            console.log("logicResposne", response);
            if(response?.status?.toLowerCase()==='success'){
                setShowAlert({ type:'success', icon:'fa-check-circle', show: true, message:'Updated your User Profile Successfully' });
                initialize();
                // Update to localStorage
                let userAuthDetails = localStorage.getItem("USER_AUTH_DETAILS");
                    userAuthDetails = JSON.parse(userAuthDetails);
                    userAuthDetails.data = response?.data?.[0];
                localStorage.setItem("USER_AUTH_DETAILS", JSON.stringify(userAuthDetails));
                window.dispatchEvent(new Event("storage"));
            } else {
                setShowAlert({ type:'danger', icon:'warning', show: true, message:'Failed to update your User Profile' });
            }
        }
    }}
    onReset={async(triggerReset)=>{
        triggerReset();
    }}>
    {data?.name && (<div className="mtop15p">
        <TextBox name="name" label="Your Name" placeholder="Enter your Name" value={data?.name} />
    </div>)}
    {data?.userRole && (<div className="mtop15p">
        <TextBox name="userRole" label="Account Type" placeholder="Enter User Role" value={data?.userRole} disabled />
    </div>)}
    {data?.email && (<div className="mtop15p">
        <TextBox name="email" label="Email Address" placeholder="Enter Email Address" value={data?.email} />
    </div>)}
    {data?.mobile && (<div className="mtop15p">
        <TextBox name="mobile" label="Mobile Number (Without +91)" placeholder="Enter Mobile Number" value={data?.mobile} />
    </div>)}
    </Form>
 </div>);
};

export default BasicDetails;