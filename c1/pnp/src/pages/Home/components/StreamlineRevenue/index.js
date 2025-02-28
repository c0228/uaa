import React from "react";
import { Row, Col } from "e-ui-react";

const StreamlineRevenue = () =>{
    return (<div className="wApp-template-grid">
        <Row>
          <Col md={12}>
            <div align="center" className="bis-hgl-header">
              <b>Streamline Your Revenue Cycle, Maximize Your Practice's Potential.</b>
            </div>
          </Col>
        </Row>
        <div style={{ marginTop:'2vh' }}>
        <Row className="row-flex-container">
          <Col md={1}></Col>
          <Col md={6}>
            <div className="bis-hgl-text col-flex-container">
            Navigating the intricate landscape of medical billing can be a daunting task for healthcare providers. From 
            accurate coding and timely claims submission to efficient payment collection, the process demands meticulous 
            attention and expertise. However, with the right partner, you can streamline your revenue cycle and focus on 
            what truly matters: delivering quality patient care.<br/><br/>
            At Broadway Info Services, we understand the challenges healthcare providers face in managing their financial 
            operations. Our dedicated team of experts is committed to simplifying your medical billing process, allowing 
            you to maximize your revenue and minimize administrative burdens.
            </div>
          </Col>
          <Col md={4}>
            <div className="col-flex-container" style={{ padding:'2vw' }}>
                <img src={process.env.PROJECT_URL+"assets/images/12.png"} 
                style={{ borderRadius:'0.6vw', boxShadow:'0.1vw 0.1vw 0.1vw 0.1vw #808080' }} />
            </div>
          </Col>
          <Col md={1}></Col>
        </Row>
        </div>
 </div>);
};

export default StreamlineRevenue;