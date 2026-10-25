import React, { useState, useEffect } from "react";
import { ContainerFluid, Row, Col, Icon, Badge, Card } from "e-ui-react";
import { getProfileContext, ProfileProvider } from '@Pages/OnBoarding/SetProfile/context.js';

const LeftContainer = () =>{
  const FormCard = ({ icon, label, desc}) =>{
     return (<div className="mtop15p">
         <Card padding={15}>
             <div style={{ display:'flex' }}>
                 <div style={{ width:'12%' }}>
                     <Icon type="FontAwesome" name={icon} size={12} 
                         style={{ borderRadius:'8px', padding:'5px', border:'1px solid #555', marginRight:'5px' }} /> 
                 </div>
                 <div style={{ width:'88%' }}>
                     <h5><b>{label}</b></h5>
                         <div style={{ fontSize:'14px' }}>{desc}.</div>
                 </div>
             </div>
         </Card>
     </div>);
  };
 return (<>
  <div className="mtop15p">
              <h2><b>Your Community. <span style={{ color:'#777' }}>Your Connections.</span> Your World.</b></h2>
          </div>
          <div className="mtop15p">
              <div style={{ fontSize:'16px' }}>Welcome to <b>MyLocalHook</b> — a place to discover what's happening around you, connect with people, 
                      and build meaningful relationships within your local community.</div>
              <div style={{ marginTop:'15px' }}>
                  <Badge type="dark-o" label={<><Icon type="FontAwesome" name="fa-lock" size={12} style={{ marginRight:'5px' }} />Your information. Your control.</>} 
                          size="11" style={{ marginTop:'5px' }} />
              </div>
              <div style={{ marginTop:'5px' }}>
                  <span style={{ textTransform:'uppercase', fontSize:'22px' }}><b>Why Complete Your Profile?</b></span>
              </div>
              <div style={{ marginTop:'15px', fontSize:'16px' }}>
                  <i>Setting up your profile takes less than a minute. Your profile helps us customize your feed and keep MyLocalHook secure. 
                  We ask for a few basic details to personalize your experience, help your neighbors find you, helps you connect with nearby events,
                  and keep our local community safe and vibrant.</i>
              </div>
              <div>
                  <Row>
                      <Col md={6}>
                         <FormCard icon="fa-id-badge" label="1. Username" 
                              desc="Choose a unique username that helps others recognize, find, and mention you on MyLocalHook" /> 
                      </Col>
                      <Col md={6}>
                          <FormCard icon="fa-user" label="2. Fullname" 
                              desc="Your name helps people recognize you and makes your interactions feel more personal" />
                      </Col>
                  </Row>
                  <Row>
                      <Col md={6}>
                          <FormCard icon="fa-envelope-o" label="3. Email Address" 
                              desc="Your email helps us communicate important account updates and support account recovery" />
                      </Col>
                      <Col md={6}>
                          <FormCard icon="fa-calendar" label="4. Date of Birth" 
                              desc="Your date of birth helps us determine your age and provide an age-appropriate experience" />
                      </Col>
                  </Row>
              </div>
              <div><hr/></div>
              <div style={{ fontSize:'12px', marginTop:'15px' }}>
                  <div><b>Your privacy matters:</b> We use your details to set up and support your account, and we handle your 
                  personal information according to our Privacy Policy.</div>
              </div>
          </div>
 </>);
};

export default LeftContainer;