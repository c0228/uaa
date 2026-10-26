import React, { useState, useEffect } from "react";
import { ContainerFluid, Row, getForm, Email, DateTimePicker, TextBox, Button, Icon, Badge, Card  } from "e-ui-react";
import { getProfileContext, ProfileProvider } from '@Pages/OnBoarding/SetProfile/context.js';
import { getPastDateString } from "@Utils/DateUtility.js";

const RightContainer = () =>{
 const profileContext = getProfileContext();
  const { submitForm, resetForm } = getForm();
 return (<>
 <div style={{ padding:'15px' }}>
                <Card padding={15} backgroundColor="#f9f9f9">
                <div align="center">
                    <span style={{ textTransform:'uppercase', fontSize:'22px' }}><b>Setup your Profile</b></span>
                    <div>
                        <Badge type="dark-o" label={<>
                            <Icon type="FontAwesome" name="fa-link" size={12} style={{ marginRight:'5px' }} /> 
                            Your profile helps personalize your MyLocalHook experience.
                            </>} 
                        size="11" style={{ marginTop:'5px' }} />
                    </div>
                    <div style={{ fontSize:'16px', marginTop:'5px' }}>Create your identity by adding your details so people can 
                        recognize you <br/> and connect with your local community.</div>
                </div>
                <div align="center" className="mtop15p">
                    <img src={profileContext?.contextData?.form?.profilePic}  referrerPolicy="no-referrer" 
                        style={{ width:'95px', height:'95px', borderRadius:'50%', border:'2px solid #555' }} />
                </div>
                <div style={{ marginTop:'15px' }}>
                    <TextBox id="username" name="username" label="Username" 
                        value={profileContext?.contextData?.form?.username} 
                        validation={
                            {
                                required: {
                                    value: true,
                                    errorMessage: "Username is required."
                                },
                                minLength: {
                                    value: 3,
                                    errorMessage: "Username must have at least 3 characters."
                                },
                                successMessage: {
                                    value: true,
                                    message: "Username is available!"
                                }
                            }
                        } 
                        onChange={async (result) => {
                                if (result.errorMessage) {
                                    return;
                                }
                             return {
                                successMessage: "Username is available!"
                             }
                        }} />
                    {/*
                    submitForm
                    <div align="right" style={{ paddingTop:'3px', color:'#198754', paddingRight:'3px' }}>
                        <Icon type="FontAwesome" name="fa-check-circle" size={12} style={{ marginRight:'3px' }} />
                        <span style={{ fontSize:'11px' }}><b>This Username is allowed. You can use it.</b></span>
                    </div>*/}
                </div>
                <div style={{ marginTop:'15px' }}>
                    <TextBox id="name" name="name" label="Name" value={profileContext?.contextData?.form?.name} disabled={true} />
                </div>
                <div style={{ marginTop:'15px' }}>
                    <DateTimePicker id="date" name="date" type="datePicker" label="Date of Birth"
                        maxValue={getPastDateString(13)} 
                        value={profileContext?.contextData?.form?.dob} 
                        validation={{ required:{ value: true, errorMessage:"This is a Mandatory Field" }}}
                        onChange={submitForm}  />
                </div>
                <div style={{ marginTop:'15px' }}>
                    <Email id="email" name="email" label="Email Address" value={profileContext?.contextData?.form?.email} disabled={true} />
                </div>
                <div><hr/></div>
                <div align="center" style={{ fontSize:'12px', marginTop:'15px' }}>
                    <Icon type="FontAwesome" name="fa-shield" size={12} style={{ marginRight:'5px' }} /> 
                    Transparent & Secure Account Setup
                </div>
                </Card>
            </div>
 </>);
};

export default RightContainer;