import React, { useState, useEffect } from "react";
import { ContainerFluid, Row, Col, Icon, Switch, Button, getForm  } from "e-ui-react";
import { getProfileContext, ProfileProvider } from '@Pages/OnBoarding/SetProfile/context.js';

const Footer = () =>{
 const profileContext = getProfileContext();
 const handleNext = () => {
    alert(JSON.stringify(profileContext?.contextData));
    if(profileContext?.contextData?.form?.agreed==='Y'){ // Save them to Local Storage and Database
        setTimeout(() => {
            window.location.href = process.env.PROJECT_URL + 'onboarding/set-postal-code';
        }, 500);
    }
 };
 return (<>
 <div className={profileContext?.contextData?.footerMode}>
    {profileContext?.contextData?.profileFormMsg?.length===0 ? (<Row>
        <Col md={10}>
            <div className="mlh-setProfile-bottom-profileFormMsg-section">
                <div align="center" className="mlh-setProfile-bottom-switchBtn">
                    <Switch type="checkbox" id="Agreed" name="Agreed" value="Y"
                         options={[{ id:"Y", value:"Y"}]} 
                            validation={{
                                required: {
                                    value: true,
                                    errorMessage: "Please accept the terms and conditions."
                                }
                            }}
                            onChange={(result)=>{
                                profileContext?.setContextData([{ path:'form.agreed', value: result?.value?.[0], mode:'replace' }]);
                                // alert("value", value);
                            }} />
                </div>
                 <div className="mlh-setProfile-bottom-agreementMsg">
                    {profileContext?.contextData?.form?.agreed!=='Y'?(<div><b>Please accept Terms and Conditions.</b></div>):
                    (<div><b>Your Username and Date of Birth are set. Let's move on to the next step!</b></div>)}
                    <div>By creating your MyLocalHook profile, you acknowledge that you have read, understood, 
                    and agree to our <b>Terms & Conditions, Privacy Policy,</b> and <b>MyLocalHook Community Standards.</b></div>
                </div>
            </div>
        </Col>
        <Col md={2}>
            <div align="right">
                <Button type="dark" size={14} className="mRight8p" onClick={handleNext}>
                    <Icon type="FontAwesome" name="fa-save" size={14} className="mRight8p" />
                    <b>Save and Continue</b>
                </Button>
            </div>
        </Col>
    </Row>):(<Row>
        <Col md={8}>
            <div align="left" className="mlh-setProfile-bottom-profileFormMsg">
                <b>{profileContext?.contextData?.profileFormMsg}</b>
            </div>
        </Col>
    </Row>)}
  </div>
 </>);
};

export default Footer;