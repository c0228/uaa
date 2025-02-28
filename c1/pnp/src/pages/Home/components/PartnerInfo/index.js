import React from "react";
import { Row, Col } from "e-ui-react";

const PartnerInfo = () =>{
 return (<div className="wApp-template-odd wApp-template-grid">
    <Row>
      <Col md={12}>
        <div align="center" className="bis-hgl-header">
          <b>Broadway Info Services: Your Partner in Healthcare Revenue Cycle Management</b>
        </div>
      </Col>
    </Row>
    <Row className="row-flex-container">
      <Col md={1}></Col>
      <Col md={4}>
      <div className="col-flex-container">
      <img src={process.env.PROJECT_URL+"assets/images/1.png"}
        style={{ marginTop:'1vh', padding:'2vw', width:'100%', borderRadius:'50%' }} />
      </div>
      </Col>
      <Col md={6}>
      <div>
        <div className="bis-hgl-text">
        "<b>Broadway Info Services</b> is a leading provider of medical billing and revenue cycle management solutions 
        for healthcare providers and medical practices. We are dedicated to simplifying the complex world of 
        medical billing, allowing healthcare providers to focus on what they do best - patient care.
        <br/><br/>
        With a team of experienced professionals and advanced technology, we offer a comprehensive range 
        of services to streamline your revenue cycle and maximize your financial performance."
        <br/><br/>
        At Broadway Info Services, we are dedicated to building long-term partnerships with our clients. 
        We are committed to providing exceptional service, transparency, and a focus on your financial success.
        </div>
      </div>
      </Col>
      <Col md={1}></Col>
    </Row>
    </div>);
};

export default PartnerInfo;