import React, { useState, useEffect } from "react";
import { ContainerFluid, Row, Col, Icon, Badge, Button, getForm  } from "e-ui-react";
import { getProfileContext, ProfileProvider } from '@Pages/OnBoarding/SetProfile/context.js';

const Footer = () =>{
 const profileContext = getProfileContext();
 const handleNext = () =>{
    // Check Values:
    // Set into LocalStorage
    profileContext?.setContextData({ footerMode: "mlh-onboarding-footer mlh-onboarding-footer-success" });
    // Redirect to postalCode Setup Page
    setTimeout(()=>{
      //  window.location.href=process.env.PROJECT_URL+'onboarding/set-postal-code';
    },500); 
 };
 return (<>
 <div className={profileContext?.contextData?.footerMode}>
         <Row>
             <Col md={8}>
                 <div align="left" style={{ padding:'8px', color:'#000' }}>
                     <b>Please Enter your Date of Birth (allowed 13 years old or above)</b>
                 </div>
                 
             </Col>
             <Col md={4}>
                 <div align="right">
                     <Button type="dark" size={14} style={{ marginRight:'8px' }} onClick={handleNext}>
                         <Icon type="FontAwesome" name="fa-save" size={14} style={{ marginRight:'8px' }} />
                         <b>Save and Continue</b></Button>
                 </div>
             </Col>
         </Row>
  </div>
 </>);
};

export default Footer;