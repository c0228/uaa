import React, { useState, useEffect } from "react";
import { ContainerFluid, Row, Col, Icon, Badge, Button, getForm  } from "e-ui-react";
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
        <Col md={8}>
            <div align="left"  style={{ padding:'8px', color:'#000' }}>
                <b>Your Username and Date of Birth are set. Let's move on to the next step!</b>
            </div>
        </Col>
        <Col md={4}>
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