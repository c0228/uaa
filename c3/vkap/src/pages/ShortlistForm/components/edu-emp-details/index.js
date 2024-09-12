import React from "react";
import { Card, ContainerFluid, Row, Col, TextBox, Select, NumRange } from "e-ui-react";

const EduEmpDetails = () =>{
 return (<div style={{ marginBottom:'15px' }}>
  <Card padding={15} backgroundColor="#f1f1f1">
  <ContainerFluid>
    <Row>
        <Col md={2}>
            <TextBox name="ssc" label="SSC (% Marks)" placeholder="00.00%" />
        </Col>
        <Col md={2}>
            <TextBox name="inter" label="Intermediate (% Marks)" placeholder="00.00%" />
        </Col>
        <Col md={2}>
            <TextBox name="degree" label="B.Tech/Degree (% Marks)" placeholder="00.00%" />
        </Col>
        <Col md={2}>
            <Select 
            name="empExperience"
            label="Employee Experience" 
            placeholder="Do you have Experience?"
            options={[{ id: 'Yes', label: 'Yes', value: 'Yes' },
            { id: 'No', label: 'No', value: 'No' }]}
            className="navbar-layout"
            fontSize="12"
            onChange={(event) => {
                let option = event.target.value;
            }} />
        </Col>
        <Col md={2}>
        <Select 
            name="empExpYears"
            label="Experience (in years)" 
            placeholder="Select Years"
            options={NumRange(1,10)?.map((r)=>{
                return  { id: r, label: r, value: r };
            })}
            className="navbar-layout"
            fontSize="12"
            onChange={(event) => {
                let option = event.target.value;
            }} />
        </Col>
        <Col md={2}>
            <Select 
            name="empExpField"
            label="Experience (in Field)" 
            placeholder="Select your Field"
            options={[{ id: 'IT', label: 'IT', value: 'IT' },
            { id: 'Non-IT', label: 'Non-IT', value: 'Non-IT' },
            { id: 'Other', label: 'Other', value: 'Other' }]}
            className="navbar-layout"
            fontSize="12" />
        </Col>
    </Row>
  </ContainerFluid>
 </Card>
 </div>);
};

export default EduEmpDetails;