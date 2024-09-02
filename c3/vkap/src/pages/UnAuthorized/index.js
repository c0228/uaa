import React, { useEffect } from "react";
import { ContainerFluid, Row, Col, Card } from "e-ui-react";
import Footer from '@Templates/Footer/index.js';

const Unauthorized = () => {
  useEffect(()=>{
    document.title = 'Restricted | VKAbroad';
    document.body.style.backgroundImage = "url('"+process.env.PROJECT_URL+"/assets/logo/bubbles.gif')";
   },[]);
  return (<div>
  <ContainerFluid>
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
              <b>Access Denied / Restricted</b>
            </h3>
          </div>
          <div><h4 className="mtop25p"><b>We're sorry, but it seems you've attempted to access a page that is restricted or 
      requires special permissions.</b></h4></div>
    <div style={{ fontSize:'16px', lineHeight:'30px' }}>
      <div>This page contains content or features that are reserved for authorized users only. There are 
      several reasons why you might be seeing this message:</div>
      <div>
        <ul>
          <li><b>Insufficient Permissions:</b> Your account does not have the necessary privileges to access this content.</li>
          <li><b>Logged Out:</b> You may have been logged out due to inactivity. Please log in again to continue.</li>
          <li><b>Page Access:</b> This page may be restricted to certain user roles or specific groups.</li>
        </ul>
      </div>
      <div>To resolve this issue, you can:</div>
      <div>
        <ul>
          <li><b>Verify Your Login Status:</b> Ensure that you are logged in with the correct account.</li>
          <li><b>Check Your Permissions:</b> If you believe you should have access, please verify your permissions with the 
            site administrator.</li>
          <li><b>Contact Support:</b> If you continue to experience issues, please reach out to our support team for further 
            assistance.</li>
        </ul>
      </div>
      <div>We apologize for any inconvenience this may have caused and appreciate your understanding. If you need 
        immediate assistance, please do not hesitate to contact our support team.</div>
      <div align="center" className="mtop15p mbot15p">Thank you for your cooperation.</div>
    </div>
    </div>
        </Card>
        </div>
      </Col>
      <Col md={1}></Col>
    </Row>
  </ContainerFluid>
  <Footer />
  </div>)
};

export default Unauthorized;
