import React, { useState, useEffect, useRef } from "react";
import { ContainerFluid, Row, Col } from "e-ui-react";
import MapPostalCode from "@Components/map-postal-code/index.js";
import Header2 from "@Templates/Header2/index.js";
import './index.css';

const SetPostalCode = ()=>{
 const [userDetails, setUserDetails] = useState();
 const initialize = () =>{
    const storedUser = localStorage.getItem("MLH_USER_DETAILS");
    if(!storedUser) {
        window.location.replace(process.env.PROJECT_URL);
        return null;
    }
    let uDetails;
    try {
        uDetails = JSON.parse(storedUser);
        setUserDetails(uDetails);
    } catch {
        window.location.replace(process.env.REACT_APP_PROJECT_URL);
        return null;
    }
 };
 useEffect(()=>{
    initialize();
 },[]);
 return (<>
    <Header2 />
    <ContainerFluid>
        <Row>
            <Col md={3}>
                <div style={{ marginTop:'15px', display:'flex', flex:1, flexDirection:'row' }}>
                        <div>
                            <img src={userDetails?.profilePic}  referrerPolicy="no-referrer" 
                                style={{ width:'60px', height:'60px', borderRadius:'50%' }} />
                        </div>
                        <div style={{ paddingLeft:'15px', paddingTop:'8px' }}>
                            <div>{userDetails?.surName}  {userDetails?.name}</div>
                            <div>{userDetails?.email}</div>
                        </div>
                </div>
            </Col>
            <Col md={9}>
                <MapPostalCode pincode="" />
            </Col>
        </Row>
    </ContainerFluid>
 </>);
};

export default SetPostalCode;