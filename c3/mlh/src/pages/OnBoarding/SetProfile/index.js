import React, { useState, useEffect } from "react";
import { ContainerFluid, Row, Col, Form, Email, DateTimePicker, TextBox, Button, Icon, Badge, Card } from "e-ui-react";
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
        dob: "",
        email: userDetails?.email
    },
    footerMode: "mlh-onboarding-footer mlh-onboarding-footer-error",
    profileFormMsg: ""
};
 return (<ProfileProvider variables={initialValues}>
 <Header2 />
 <Form name="userForm" onSubmit={(form, isValid, resetForm) => {
        console.log("Form Data:", form);
      }}>
 <div style={{ paddingBottom:'40px', backgroundColor:'#00594e' }}>
  <ContainerFluid>
    <Row>
        <Col md={8}><LeftContainer /></Col>
        <Col md={4}><RightContainer /></Col>
    </Row>
 </ContainerFluid>
 </div>
  </Form>
 <Footer />

 </ProfileProvider>);
};

export default SetProfile;