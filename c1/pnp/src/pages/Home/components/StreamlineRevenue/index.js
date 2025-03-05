import React from "react";
import { Row, Col } from "e-ui-react";

const StreamlineRevenue = () =>{
    return (<div className="wApp-template-grid">
        <Row>
          <Col md={12}>
            <div align="center" className="bis-hgl-header">
              <b>Where Every Paw is Treated with Love!</b>
            </div>
          </Col>
        </Row>
        <div style={{ marginTop:'2vh' }}>
        <Row className="row-flex-container">
          <Col md={1}></Col>
          <Col md={6}>
            <div className="bis-hgl-text col-flex-container">
              <b>We are more than just a kennel – we are your pet’s second home with Pet’s Comfort, Care & Happiness as Our Priority!</b><br/>
              At Pets & Paws Kennel Services, we are more than just a pet boarding facility—we are a second home for your 
              beloved furry companions. Whether you need boarding, daycare, grooming, training, or specialized pet care, our 
              experienced and compassionate team ensures your pets receive the love, comfort, and attention they deserve.<br/><br/>
              With our state-of-the-art facilities, fun activities, and expert caregivers, we provide an unparalleled pet care experience 
              that keeps tails wagging and whiskers twitching with joy!
            </div>
          </Col>
          <Col md={4}>
            <div className="col-flex-container" style={{ padding:'2vw' }}>
                <img src={process.env.PROJECT_URL+"assets/images/01.jpg"} 
                style={{ borderRadius:'0.6vw', border:'0.5vw solid #000' }} />
            </div>
          </Col>
          <Col md={1}></Col>
        </Row>
        </div>
 </div>);
};

export default StreamlineRevenue;