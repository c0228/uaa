import React from "react";
import { ContainerFluid, Row, Col, Card } from "e-ui-react";

const SessionExpired = ()=>{
    return (<ContainerFluid>
    <Row>
      <Col md={12}><div align="center">
      <img src={process.env.PROJECT_URL+"assets/logo/logo-flat.png"} 
      style={{ marginTop:'15px', width:'160px', height:'auto' }} />
    </div></Col>
    </Row>
    <Row>
      <Col md={1}></Col>
      <Col md={10}>
        <div className="mtop15p">
        <Card padding={18}>
        <div>
          <div align="center">
            <h3 className="mtop15p mbot15p" style={{ color:'#01547c' }}>
              <b>Session Expired</b>
            </h3>
          </div>
          <div align="center">
            <h4 className="mtop25p"><b>We're sorry, but it seems you're Session Expired, we will be 
                redirecting you to Home Page.</b></h4>
          </div>
        </div>
        </Card>
        </div>
      </Col>
      <Col md={1}></Col>
    </Row>
  </ContainerFluid>);
};

export default SessionExpired;