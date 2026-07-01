import React from "react";
import {ContainerFluid, Row, Col, DateTimePicker, Select, Button  } from "e-ui-react";

const FormPersonalInfo = () =>{
 return (<div>
  <div><h5><b>1. Personal Information</b></h5><hr/></div>
  <ContainerFluid>
    <Row>
        <Col md={6}>
            <div className="mt-3">
                <DateTimePicker type="datePicker" label="Your Date of Birth" id="date" name="date" />
            </div>
        </Col>
        <Col md={6}>
            <div className="mt-3">
                 <Select
                    label="Your Gender"
                    placeholder="Select your Gender"
                        options={[{ id: 'male', label: 'Male', value: 'Male' },
                            { id: 'female', label: 'Female', value: 'Female' }]}
                    fontSize="12"
                     onChange={(event) => {
                        let option = event.target.value;
                    }} />
            </div>
        </Col>
    </Row>
    <Row>
        <Col md={6}>
            <div className="mt-3">
                <Select
                    label="Your Nationality"
                    placeholder="Select your Nationality"
                        options={[{ id: 'indian', label: 'Indian', value: 'Indian' },
                            { id: 'dark', label: 'Dark Theme', value: 'Dark' }]}
                    fontSize="12"
                     onChange={(event) => {
                        let option = event.target.value;
                    }} />
            </div>
        </Col>
        <Col md={6}>
            <div className="mt-3">
                 <Select
                    label="Your Category"
                    placeholder="Select your Category"
                        options={[{ id: 'light', label: 'Light Theme', value: 'Light' },
                            { id: 'dark', label: 'Dark Theme', value: 'Dark' }]}
                    fontSize="12"
                     onChange={(event) => {
                        let option = event.target.value;
                    }} />
            </div>
        </Col>
    </Row>
    <Row>
        <Col md={12}>
            <div align="right" className="mt-3">
                <Button type="success" size={11}><b>Next</b></Button>
            </div>
        </Col>
    </Row>
  </ContainerFluid>
 </div>);
};

export default FormPersonalInfo;