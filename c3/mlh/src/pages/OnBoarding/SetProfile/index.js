import React, { useState, useEffect } from "react";
import { ContainerFluid, Row, Col, Email, DateTimePicker, TextBox, Button, Icon, Badge, Card } from "e-ui-react";
import Header2 from "@Templates/Header2/index.js";
import LeftContainer from "./components/LeftContainer/index.js";
import RightContainer from "./components/RightContainer/index.js";
import Footer from "./components/Footer/index.js";
import { getProfileContext, ProfileProvider } from './context.js';
import useAuth from "@Hooks/useAuth/index.js";
import { getTodayDate } from "@Utils/DateUtility.js";
import '@Pages/OnBoarding/index.css';

const SetProfile = () =>{
 const { userDetails } = useAuth();
 const initialValues = {
    form:{
        profilePic: userDetails?.profilePic,
        username: userDetails?.email?.split("@")[0],
        name: userDetails?.surName+" "+userDetails?.name,
        dob: "0000-00-00",
        email: userDetails?.email
    },
    footerMode: "mlh-onboarding-footer mlh-onboarding-footer-error"
};
 return (<ProfileProvider variables={initialValues}>
 <Header2 />
 <div style={{ paddingBottom:'80px' }}>
  <ContainerFluid>
    <Row>
        <Col md={6}><LeftContainer /></Col>
        <Col md={6}><RightContainer /></Col>
    </Row>
 </ContainerFluid>
 </div>
 <Footer />
 </ProfileProvider>);
};

export default SetProfile;