import React, { useState, useEffect } from "react";
import { ContainerFluid, Row, getForm, Email, DateTimePicker, TextBox, Button, Icon, Badge, Card  } from "e-ui-react";
import { getProfileContext, ProfileProvider } from '@Pages/OnBoarding/SetProfile/context.js';
import { getPastDateString } from "@Utils/DateUtility.js";

const RightContainer = () =>{
 const [missingFields, setMissingFields] = useState([]);
 const profileContext = getProfileContext();
 const { submitForm } = getForm();
 useEffect(()=>{ submitForm(); },[]);
 const getWarningMessage = () => {
  const messages = [];
  if(missingFields.includes("MISSING_USERNAME")) { messages.push("Username"); }
  if(missingFields.includes("MISSING_DOB")) { messages.push("Date of Birth (allowed 13 years old or above)"); }
  // Check whether all fields are valid
  const isFormValid = missingFields.length === 0;
  // Generate warning message
  const msg = isFormValid?"":`Please Enter ${messages.join(", ")}.`;
  // Update Profile Context
  profileContext?.setContextData({
        form: {
            ...profileContext?.contextData?.form,
            missingFields
        },
        profileFormMsg: msg,
        footerMode: isFormValid
            ? "mlh-onboarding-footer mlh-onboarding-footer-success"
            : "mlh-onboarding-footer mlh-onboarding-footer-error"
    });
  };
  useEffect(()=>{ getWarningMessage(); },[missingFields]);
 const handleContextResult = (data, section = "form") => {
    profileContext?.setContextData({
        ...profileContext?.contextData,
        [section]: {
            ...profileContext?.contextData?.[section],
            ...data
        }
    });
    submitForm();
 };
 return (<>
 <div className="mlh-setProfile-rightContainer-header">
    <div className="mlh-setProfile-rightContainer-profileForm">
        <div>
            <div align="center">
                <img src={profileContext?.contextData?.form?.profilePic}  referrerPolicy="no-referrer" 
                    className="mlh-setProfile-rightContainer-profilePic" />
            </div>
            <div className="mtop5p">
                <TextBox id="username" name="username" label="Username" value={profileContext?.contextData?.form?.username} 
                        validation={{
                            required: { value: true, errorMessage: "Username is required." },
                            minLength: { value: 3, errorMessage: "Username must have at least 3 characters." },
                            apiValidation: {
                                url: process.env.NEXUS_URL+"/mock/username.php",
                                method: "POST",
                                requestBody: {  username: "{{value}}" },// current TextBox value
                                returnMessages: [{ id: "USERNAME_AVAILABLE", type: "success", message: "Username is available!" },
                                    { id: "USERNAME_TAKEN", type: "error", message: "Username is already taken." }]
                            }
                        }}
                        onChange={async (result) => {
                            console.log("Username Result:", result);
                            if (result?.errorMessage?.length === 0) {
                                handleContextResult({ username: result?.value });
                                setMissingFields(prev =>prev.filter(field => field !== "MISSING_USERNAME"));
                            } else {
                                setMissingFields(prev =>prev.includes("MISSING_USERNAME")?prev:[...prev, "MISSING_USERNAME"]);
                            }
                        }} />
                </div>
                <div className="mtop5p">
                    <TextBox id="name" name="name" label="Name" value={profileContext?.contextData?.form?.name} disabled={true} />
                </div>
                <div className="mtop5p">
                    <DateTimePicker id="date" name="date" type="datePicker" label="Date of Birth"
                        maxValue={getPastDateString(13)} 
                        value={profileContext?.contextData?.form?.dob} 
                        validation={{ 
                            required:{ value: true, errorMessage:"This is a Mandatory Field" }
                        }}
                        onChange={async (result) => {
                            console.log("DateTimePicker Result:", result);
                            if (result?.errorMessage?.length === 0) {
                                handleContextResult({ dob: result?.value });
                                setMissingFields(prev=>prev.filter(field => field !== "MISSING_DOB"));
                            } else {
                                setMissingFields(prev=>prev.includes("MISSING_DOB")?prev:[...prev, "MISSING_DOB"]);
                            }
                        }}  />
                </div>
                <div className="mtop5p">
                    <Email id="email" name="email" label="Email Address" value={profileContext?.contextData?.form?.email} disabled={true} />
                </div>
                <div><hr/></div>
                <div align="center" className="mlh-setProfile-rightContainer-bottom">
                    <Icon type="FontAwesome" name="fa-shield" size={12} className="mRight5p" /> 
                    Transparent & Secure Account Setup
                </div>
                </div>
                </div>
            </div>
 </>);
};

export default RightContainer;