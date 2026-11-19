import React, { useState, useEffect } from "react";
import { ContainerFluid, Row, Col, Icon, Switch, Button, getForm  } from "e-ui-react";
import { getProfileContext, ProfileProvider } from '@Pages/OnBoarding/SetProfile/context.js';

const Footer = () =>{
 const profileContext = getProfileContext();
 const handleNext = () => {
    // Save them to Local Storage and Database
    setTimeout(() => {
            window.location.href = process.env.PROJECT_URL + 'onboarding/set-postal-code';
    }, 500);
 };
 return (<>
 <div className={profileContext?.contextData?.footerMode}>
    {profileContext?.contextData?.profileFormMsg?.length===0 ? (<Row>
        <Col md={10}>
            <div style={{ display:'flex' }}>
                <div align="center" style={{ width:'5%', fontSize:'16px', color:'#000' }}>
                    <Switch type="checkbox" id="Agreed" name="Agreed" 
                         options={[{ id:1, value:"1"}]} 
                            validation={{
                                required: {
                                    value: true,
                                    errorMessage: "Please select at least one hobby"
                                }
                            }} />
                </div>
                 <div style={{ width:'90%', fontSize:'16px' }}>
                    <div><b>Your Username and Date of Birth are set. Let's move on to the next step!</b></div>
                    <div>By creating your MyLocalHook profile, you acknowledge that you have read, understood, 
                    and agree to our <b>Terms & Conditions, Privacy Policy,</b> and <b>MyLocalHook Community Standards.</b></div>
                </div>
            </div>
        </Col>
        <Col md={2}>
            <div align="right">
                <Button type="dark" size={14} style={{ marginRight:'8px' }} onClick={handleNext}>
                    <Icon type="FontAwesome" name="fa-save" size={14} style={{ marginRight:'8px' }} />
                    <b>Save and Continue</b>
                </Button>
            </div>
        </Col>
    </Row>):(<Row>
        <Col md={8}>
            <div align="left"  style={{ padding:'8px', color:'#000' }}>
                <b>{profileContext?.contextData?.profileFormMsg}</b>
            </div>
        </Col>
    </Row>)}
         <Row>
             
             
             
         </Row>
  </div>
 </>);
};

export default Footer;