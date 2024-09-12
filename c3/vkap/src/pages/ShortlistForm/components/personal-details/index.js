import React from "react";
import { ContainerFluid, Row, Col, Card, TextBox, Select } from "e-ui-react";

const PersonalDetails = () =>{
 return (<div style={{ marginBottom:'15px' }}>
 <Card padding={15} backgroundColor="#f1f1f1">
  <ContainerFluid>
    <Row>
        <Col md={3}>
          <TextBox name="fullName" label="Full Name" placeholder="Enter your Full Name" />
        </Col>
        <Col md={3}>
          <TextBox name="email" label="Email Address" placeholder="Enter your Email Address" />
        </Col>
        <Col md={2}>
          <TextBox name="mobile" label="Mobile Number" placeholder="Enter your Mobile Number" />
        </Col>
        <Col md={2}>
          <Select 
                name="moveTo"
                label="Moving to Country" 
                placeholder="Select Country"
                options={[{ id: 'USA', label: 'USA', value: 'USA' },
                { id: 'UK', label: 'UK', value: 'UK' },
                { id: 'Australia', label: 'Australia', value: 'Australia' }]}
                className="navbar-layout"
                fontSize="12"
                onChange={(event) => {
                    let option = event.target.value;
                }} />
        </Col>
        <Col md={2}>
          <Select 
                name="prefMasterCourse"
                label="Preferred Master Details" 
                placeholder="Select Course"
                options={[]}
                className="navbar-layout"
                fontSize="12"
                onChange={(event) => {
                    let option = event.target.value;
                }} />
        </Col>
    </Row>
  </ContainerFluid>
 </Card>
 </div>);
};

export default PersonalDetails;