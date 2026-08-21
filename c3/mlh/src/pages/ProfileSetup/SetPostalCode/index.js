import React, { useState, useEffect, useRef } from "react";
import { ContainerFluid, Row, Col, TextBox, Button, Form } from "e-ui-react";
import useAuth from "@Hooks/useAuth/index.js";
import MapPostalCode from "@Components/map-postal-code/index.js";
import Header2 from "@Templates/Header2/index.js";
import './index.css';

const SetPostalCode = ()=>{
 const [pincode, setPincode] = useState();
 const { userDetails } = useAuth();
 const handleDiscoverLocality = () =>{
    // setPincode();
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

                    <Form>
                    <div style={{ marginTop:'15px' }}>
                        <hr/><div style={{ paddingTop:'15px' }}><b>SET YOUR LOCAL AREA</b></div><hr/>
                        <div style={{ marginTop:'12px'}}>
                            Enter your <b>6-digit PIN Code</b> to identify your local area and explore what's happening around you.
                        </div>
                        <div style={{ marginTop:'8px'}}>
                            <TextBox name="postalCode" placeholder="Enter your Postal Code" />
                        </div>
                        <div style={{ marginTop:'8px'}}>
                            <Button type="dark" className="form-control" size={11} 
                            onClick={handleDiscoverLocality}><b>Discover My Locality</b></Button>
                        </div>
                    </div>
                    </Form>
                </div>
            </Col>
            <Col md={9}>
                <MapPostalCode pincode={pincode} />
            </Col>
        </Row>
    </ContainerFluid>
 </>);
};

export default SetPostalCode;