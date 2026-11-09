import React, { useState, useEffect, useRef } from "react";
import { ContainerFluid, Row, Col, TextBox, Button, Icon, Form } from "e-ui-react";
import useAuth from "@Hooks/useAuth/index.js";
import MapPostalCode from "@Components/map-postal-code/index.js";
import Header3 from "@Templates/Header3/index.js";
import './index.css';
import OnBoardHeader from "@Components/UIElements/OnBoardHeader";

const SetPostalCode = ()=>{
 const [pincode, setPincode] = useState();
 useEffect(()=>{
   // document.body.style.backgroundColor = '#0f4c81';
 },[]);
 const { userDetails } = useAuth();
 const handlePostalCode = (value) =>{
    console.log("pincode: ", value);
    setPincode(value);
 };
 const handleNextBtn = () =>{
    // Add Pincode to Database and localStorage
    window.location.href = process.env.PROJECT_URL+"onboarding/choose-niches";
 };
 return (<>
    {/*<Header3 /> */}
    <div>
    <ContainerFluid>
        <Row>
            <Col md={3}>
                <div style={{ fontFamily: 'BloomsFree', fontSize:'28px', letterSpacing:'3px' }}>
                    <span style={{ color:'#000' }}>my</span>
                    <span style={{ color:'#000' }}>local</span>
                    <span style={{ color:'#000' }}>hook</span>
                </div>
                <div style={{ marginTop:'15px', fontFamily:'Metropolis', letterSpacing:'0.3px' }}>
                    <h4 className="mtop15p mlh-intro-heading" style={{ color:'#000'}}>
                        <Icon type="FontAwesome" name="fa-map-marker" style={{ marginRight:'8px'}} />
                        Set your Local Area
                    </h4>
                    <div style={{ marginTop:'15px' }}>
                        <div style={{ color:'#555', fontSize:'16px' }}>
                            Enter your <b>6-digit PIN Code</b> to identify your local area and explore what's happening around you.
                        </div>
                        <div style={{ marginTop:'8px'}}>
                            <TextBox name="postalCode" placeholder="Enter your Postal Code" 
                                onChange={(data)=>handlePostalCode(data?.value)} />
                        </div>
                    </div>
                </div>
            </Col>
            <Col md={9}>
                <div>
                    <MapPostalCode pincode={pincode} styles={{
                position: "fixed",
                width: "100%",
                height: "95vh",
                border: "1px solid #ccc"
            }} />
                </div>
            </Col>
        </Row>
    </ContainerFluid>
    </div>
    <div>
        {/**  */}
        {pincode?.length===6 ?(<div className="mlh-onboarding-footer mlh-onboarding-footer-success" 
            style={{ marginTop:'8px'}}>
                <span style={{ padding:'8px', color:'#000' }}>
                    <b>Your Postal Code is set. Let's move on to the next step!</b>
                </span>
                <span className="pull-right">
                    <Button type="dark" size={14} style={{ marginRight:'8px' }} onClick={handleNextBtn}>
                                        <Icon type="FontAwesome" name="fa-save" size={14} style={{ marginRight:'8px' }} />
                                        <b>Save and Continue</b>
                                    </Button>
                </span>
        </div>):(<div className="mlh-onboarding-footer mlh-onboarding-footer-error" 
            style={{ marginTop:'8px', color:'#000' }}>
                <b>Please Enter your 6-digit Postal Code</b>
        </div>)}
    </div>
 </>);
};

export default SetPostalCode;