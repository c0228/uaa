import React from "react";
import { ContainerFluid, Row, Col, Card, Button } from "e-ui-react";

const Poster = ({ setActiveMenu }) =>{
 return (<div style={{ position:'relative', minHeight:'550px' }}>
    <img src={process.env.PROJECT_URL+"assets/images/welcome2.png"} style={{ position:'absolute', width:'100%', height:'auto' }} />
    <ContainerFluid>
      <Row>
          <Col md={6}></Col>
          <Col md={6}>
              <div style={{ marginTop:'45px' }}>
              <Card padding={15}>
              <div>
    <div className="p-1" style={{ fontSize:'18px', lineHeight:'36px' }}>
      "The Workday Consultancy is your trusted partner for unlocking the full potential of Workday. 
      With our deep understanding of the platform, we deliver comprehensive solutions to help you achieve 
      your HR goals and improve employee experience."<br/><br/>
      Let's build a workplace where everyone feels valued, empowered, and inspired to contribute their best. 
      Together, we can create a positive and productive environment where we thrive both personally and professionally.
      </div>
      <div align="center" className="p-3">
        <a href="#for-employer" onClick={()=>setActiveMenu('for-employer')}>
        <Button style={{ margin:'5px', textTransform:'uppercase' }} type="navy" size={11}><b>I am an Employer</b></Button>
        </a>
        <a href="#for-consultant" onClick={()=>setActiveMenu('for-consultant')}>
          <Button style={{ margin:'5px', textTransform:'uppercase' }} type="outline-navy" size={11}><b>I Am a Consultant</b></Button>
        </a>
      </div>
    </div>
              </Card>
              </div>
          </Col>
      </Row>
    </ContainerFluid>
  </div>);
};

export default Poster;