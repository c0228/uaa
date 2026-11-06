import React, { useState, useEffect } from "react";
import { ContainerFluid, Row, Col, Icon, Badge, Card } from "e-ui-react";
import { getProfileContext, ProfileProvider } from '@Pages/OnBoarding/SetProfile/context.js';
import OnBoardHeader from "@Components/UIElements/OnBoardHeader";

const LeftContainer = () =>{
  const FormCard = ({ icon, label, desc, colors}) =>{
     return (<div className="mtop15p">
         <Card padding={15}  backgroundColor={colors?.bg} border={{ color: colors?.label }} boxShadow="2px 2px 2px 2px #ccc">
             <div style={{ display:'flex' }}>
                 <div style={{ width:'12%' }}>
                     <Icon type="FontAwesome" name={icon} size={12} color={colors?.label}
                         style={{ borderRadius:'8px', padding:'5px', border:'1px solid '+colors?.label, marginRight:'5px' }} /> 
                 </div>
                 <div style={{ width:'88%' }}>
                     <h5 style={{ color: colors?.label }}><b>{label}</b></h5>
                         <div style={{ fontSize:'14px', color: colors?.desc }}>{desc}.</div>
                 </div>
             </div>
         </Card>
     </div>);   
  };
 return (<>
          <div style={{ marginTop:'25px'}}>
            <OnBoardHeader label1="Your Community" label2="Your Connections" label3="Your World" />
          </div>
          <div className="mtop15p">
              <div style={{ fontSize:'16px', color:'#333' }}>Welcome to <span style={{ color:'#000' }}><b>MyLocalHook</b></span> — a place 
                to discover what's happening around you, connect with people, 
                      and build meaningful relationships within your local community.</div>
              
              <div style={{ marginTop:'15px' }}>
                    <span style={{ backgroundColor:'#e8e9f9', border:'1px solid #27187e', color:'#27187e', 
                        padding:'8px', borderRadius:'8px', fontSize:'13px' }}>
                        <Icon type="FontAwesome" name="fa-lock" size={11} style={{ marginRight:'8px' }} />
                        Your information. Your control.
                    </span>
              </div>
              <div style={{ marginTop:'15px' }}>
                  <span style={{ textTransform:'uppercase', fontSize:'22px', color:'#000' }}><b>Why Complete Your Profile?</b></span>
              </div>
              <div style={{ marginTop:'15px', fontSize:'16px', color:'#333' }}>
                  Setting up your profile takes less than a minute. Your profile helps us customize your feed and keep MyLocalHook secure. 
                  We ask for a few basic details to personalize your experience, help your neighbors find you, helps you connect with nearby events,
                  and keep our local community safe and vibrant.
              </div>
              <div>
                  <Row>
                      <Col md={6}>
                         <FormCard icon="fa-id-badge" 
                            colors={{ bg:'#f5f5f5', label: '#000', desc: '#000' }}
                            label="1. Username" 
                            desc="Choose a unique username that helps others recognize, find, and mention you on MyLocalHook" /> 
                      </Col>
                      <Col md={6}>
                          <FormCard icon="fa-user" 
                            colors={{ bg:'#f5f5f5', label:'#000', desc: '#000' }}
                            label="2. Fullname" 
                            desc="Your name helps people recognize you and makes your interactions feel more personal" />
                      </Col>
                  </Row>
                  <Row>
                      <Col md={6}>
                          <FormCard icon="fa-envelope-o" 
                            colors={{ bg:'#f5f5f5', label:'#000', desc: '#000' }}
                            label="3. Email Address" 
                            desc="Your email helps us communicate important account updates and support account recovery" />
                      </Col>
                      <Col md={6}>
                          <FormCard icon="fa-calendar" 
                            colors={{ bg:'#f5f5f5', label:'#000', desc: '#000' }}
                            label="4. Date of Birth" 
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