import React from "react";
import { ContainerFluid, Row, Col, Email, DateTimePicker, TextBox, Button, Icon } from "e-ui-react";
import Header2 from "@Templates/Header2/index.js";
import useAuth from "@Hooks/useAuth/index.js";

const SetProfile = () =>{
 const { userDetails } = useAuth();
 const NextHandler = () =>{
    // Set into LocalStorage

    // Redirect to postalCode Setup Page
    window.location.href=process.env.PROJECT_URL+'onboarding/set-postal-code';
 };
 return (<>
 <Header2 />
  <ContainerFluid>
    <Row>
        <Col md={4}></Col>
        <Col md={4}>
            <div style={{ padding:'35px' }}>
                <div align="center">
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
                <div align="right" style={{ marginTop:'15px' }}>
                    <Button type="dark" size={11} onClick={()=>NextHandler()}>
                        <b>Next</b>
                        <Icon type="FontAwesome" name="fa-arrow-right" size={10}  style={{ marginLeft:'5px' }} />
                    </Button>
                    <Button type="outline-dark" size={11}  style={{ marginLeft:'5px' }}>
                        <b>Reset</b>
                        <Icon type="FontAwesome" name="fa-trash" size={10}  style={{ marginLeft:'5px' }} />
                    </Button>
                </div>
            </div>
        </Col>
        <Col md={4}></Col>
    </Row>
 </ContainerFluid>
 </>);
};

export default SetProfile;