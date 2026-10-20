import React from "react";
import { ContainerFluid, Row, Col, Email, DateTimePicker, TextBox, Button, Icon, Badge, Card } from "e-ui-react";
import Header2 from "@Templates/Header2/index.js";
import useAuth from "@Hooks/useAuth/index.js";

const SetProfile = () =>{
 const { userDetails } = useAuth();
 const handleNext = () =>{
    // Set into LocalStorage

    // Redirect to postalCode Setup Page
    window.location.href=process.env.PROJECT_URL+'onboarding/set-postal-code';
 };
 
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
 <Header2 />
 <div style={{ paddingBottom:'80px' }}>
  <ContainerFluid>
    <Row>
        <Col md={6}>
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
        </Col>
        <Col md={6}>
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
                    <img src={userDetails?.profilePic}  referrerPolicy="no-referrer" 
                        style={{ width:'95px', height:'95px', borderRadius:'50%', border:'2px solid #555' }} />
                </div>
                <div style={{ marginTop:'15px' }}>
                    <TextBox label="Username" value={userDetails?.email?.split("@")[0]} />
                </div>
                <div style={{ marginTop:'15px' }}>
                    <TextBox label="Name" value={userDetails?.surName+" "+userDetails?.name} disabled={true} />
                </div>
                <div style={{ marginTop:'15px' }}>
                    <DateTimePicker type="datePicker" label="Date of Birth" id="date" name="date"  />
                </div>
                <div style={{ marginTop:'15px' }}>
                    <Email label="Email Address" value={userDetails?.email} disabled={true} />
                </div>
                <div><hr/></div>
                <div align="center" style={{ fontSize:'12px', marginTop:'15px' }}>
                    <Icon type="FontAwesome" name="fa-shield" size={12} style={{ marginRight:'5px' }} /> 
                    Transparent & Secure Account Setup
                </div>
                </Card>
            </div>
        </Col>
        <Col md={4}></Col>
    </Row>
 </ContainerFluid>
 </div>
  <div style={{ position: 'fixed', left: '0', bottom: '0', width: '100%', backgroundColor:'#fff', 
         borderTop:'1px solid #ccc', boxShadow:'2px 2px 2px 2px #808080', padding:'8px' }}>
         <Row>
             <Col md={8}>
                 <div align="left" style={{ padding:'8px', color:'#555' }}>
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

export default SetProfile;