import React, { useState, useEffect } from "react";
import { Breadcrumb, ContainerFluid, Row, Col, Card, TextBox, Email, Select, UrlAsyncFetch, Colors } from "e-ui-react";

const PersonalDetails = () =>{
  const [listOfCountries, setListOfCountries] = useState([]);
 const initialize = async() =>{ // Get Distinct Countries List from Universities Table
    const response = await UrlAsyncFetch( process.env.NEXUS_URL + 'countries/list', 'GET', {} );
    setListOfCountries( response );
 };
 useEffect(()=>{
  initialize();
 },[]);
 return (<div style={{ marginBottom:'15px' }}>
 <Card padding={15} backgroundColor="#f1f1f1">
  <ContainerFluid>
    <Row>
        <Col md={3}>
          <TextBox name="fullName" label="Full Name" placeholder="Enter your Full Name"
            validation={{
              onSubmit:{ textTransform: 'SENTENCE_CASE' },
              required:{
                value: true,
                errorMessage:"This is a Mandatory Field"
              }
            }} />
        </Col>
        <Col md={3}>
          <Email name="email" label="Email Address" placeholder="Enter your Email Address"
              validation={{
                onSubmit:{ textTransform: 'LOWER_CASE' },
                email:{
                  formatCheck: true
                }
              }} />
        </Col>
        <Col md={2}>
          <TextBox name="mobile" label="Mobile Number (Without +91)" placeholder="Enter your Mobile Number"
            validation={{
              required:{
                value: true,
                errorMessage:"This is a Mandatory Field"
              }
            }} />
        </Col>
        <Col md={2}>
          <Select 
                name="moveTo"
                label="Moving to Country" 
                placeholder="Select Country"
                options={listOfCountries}
                className="navbar-layout"
                fontSize="12"
                onChange={(event) => {
                    let option = event.target.value;
                }}
                validation={{
                  required:{
                    value: true,
                    errorMessage:"This is a Mandatory Field"
                  }
                }} />
        </Col>
        <Col md={2}>
          <Select 
                name="prefMasterCourse"
                label="Preferred Course Details" 
                placeholder="Select Course"
                options={[{ id: 'UG', label: 'UG', value: 'UG' },
                        { id: 'PG', label: 'PG', value: 'PG' }]}
                className="navbar-layout"
                fontSize="12"
                onChange={(event) => {
                    let option = event.target.value;
                }}
                validation={{
                  required:{
                    value: true,
                    errorMessage:"This is a Mandatory Field"
                  }
                }} />
        </Col>
    </Row>
  </ContainerFluid>
 </Card>
 </div>);
};

export default PersonalDetails;