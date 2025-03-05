import React from "react";
import { ContainerFluid, Row, Col } from "e-ui-react";
import SocialLinks from "./components/SocialLinks/index.js";
import './index.css';

const Bottom = () =>{
 return (<div>
     <div className="bis-bottom-container pTop15p pBot15p">
  <ContainerFluid>
    <Row>
      <Col md={4}>
        <div className="pad15p">
        <div className="bis-hgl-text uppercase mbot15p"><b>About Pets & Paws Kennels</b></div>
        <div className="bis-regular-text">
        At Pets & Paws Kennel Services, we are passionate about providing top-quality care, comfort, and companionship for your beloved 
        pets. With a team of experienced caregivers, a safe and hygienic environment, and tailored services like boarding, daycare, 
        grooming, and training, we ensure that every pet feels at home.</div>
        </div>
      </Col>
      <Col md={5}>
        <div className="pad15p">
        <Row>
          <Col md={12}>
            <div align="center" className="mbot15p">
              <span className="bis-hgl-text uppercase"><b>Useful Menu Links</b></span>
            </div>
          </Col>
        </Row>
        <div style={{ lineHeight:'1.9vw' }}>
        <Row>
          <Col md={3}>
            <div className="bis-bottom-div"><a href={process.env.PROJECT_URL} className="bis-bottom-container-center-url">Home</a></div>
            <div className="bis-bottom-div"><a href={process.env.PROJECT_URL+"services"} className="bis-bottom-container-center-url">Future Projects</a></div>
          </Col>
          <Col md={4}>
            <div className="bis-bottom-div"><a href={process.env.PROJECT_URL+"about-us"} className="bis-bottom-container-center-url">About Us</a></div>
            <div className="bis-bottom-div"><a href={process.env.PROJECT_URL+"contact-us"}  className="bis-bottom-container-center-url">Contact Us</a></div>
          </Col>
          <Col md={5}>
            <div className="bis-bottom-div"><a href={process.env.PROJECT_URL+"services"} className="bis-bottom-container-center-url">Services</a></div>
          </Col>
        </Row>

        </div>
        </div>
      </Col>
      <Col md={3}>
        <Row>
          <Col md={12}>
            <SocialLinks list={[{ label:"facebook", url:"#" },
                { label:"linkedin", url:"#" },
                { label:"whatsapp", url:"#" }]} />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
          
          </Col>
          <Col md={6}>
          
          </Col>
        </Row>
      </Col>
    </Row>
  </ContainerFluid>
 </div>
 </div>);
};

export default Bottom;