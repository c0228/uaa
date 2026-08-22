import React, { useState, useEffect, useRef } from "react";
import { ContainerFluid, Row, Col, TextBox, Button, Form } from "e-ui-react";
import useAuth from "@Hooks/useAuth/index.js";
import MapPostalCode from "@Components/map-postal-code/index.js";
import Header2 from "@Templates/Header2/index.js";
import './index.css';

const SetPostalCode = ()=>{
 const [pincode, setPincode] = useState();
 const { userDetails } = useAuth();
 const handlePostalCode = (value) =>{
    console.log("pincode: ", value);
    setPincode(value);
 };
 const handleNextBtn = () =>{
    // Add Pincode to Database and localStorage
    window.location.href = process.env.PROJECT_URL+"home";
 };
 return (<>
    <Header2 />
    <ContainerFluid>
        <Row>
            <Col md={3}>
                <div style={{ marginTop:'15px', fontFamily:'Metropolis', letterSpacing:'0.8px' }}>
                    <div style={{ fontSize:'14px' }}>Hi <b>{userDetails?.surName}  {userDetails?.name}</b>,</div>
                    <div style={{ marginTop:'15px' }}>
                        <div style={{ fontSize:'14px' }}><b>Welcome to MyLocalHook!</b></div>
                        <div style={{ marginTop:'5px' }}>Your Local Community Starts Here.</div>
                    </div>

                    <div style={{ marginTop:'15px' }}>
                        <hr/><div style={{ paddingTop:'15px' }}><b>SET YOUR LOCAL AREA</b></div><hr/>
                        <div style={{ marginTop:'12px'}}>
                            Enter your <b>6-digit PIN Code</b> to identify your local area and explore what's happening around you.
                        </div>
                        <div style={{ marginTop:'8px'}}>
                            <TextBox name="postalCode" placeholder="Enter your Postal Code" 
                                onChange={(data)=>handlePostalCode(data?.value)} />
                        </div>
                        {pincode?.length===6 && (<div style={{ marginTop:'8px'}}>
                            <Button type="dark" className="form-control" size={11} 
                            onClick={handleNextBtn}><b>Let's Discover My Community</b></Button>
                        </div>)}
                    </div>
                </div>
            </Col>
            <Col md={9}>
                <MapPostalCode pincode={pincode} styles={{
                position: "fixed",
                width: "100%",
                height: "100vh",
                border: "1px solid #ccc"
            }} />
            </Col>
        </Row>
    </ContainerFluid>
 </>);
};

export default SetPostalCode;