import React from "react";
import { ContainerFluid, Row, Col } from "e-ui-react";
import SocialLinks from "./components/SocialLinks/index.js";
import './index.css';

const Bottom = () =>{
 return (<div>
     <div className="bis-bottom-container">
  <ContainerFluid>
    <Row>
      <Col md={4}>
        <div className="bis-bottom-container-left">
        <div className="bis-bottom-container-left-title"><h4><b>Broadway Info Services</b></h4></div>
        <div className="bis-bottom-container-left-content">
          Broadway Info Services is a leading healthcare revenue cycle management company. They specialize in medical 
          coding, billing, and other administrative services. Their advanced technology and skilled team ensure accurate 
          and efficient processing of claims, maximizing revenue for healthcare providers. With a focus on client satisfaction, 
          Broadway Info Services has a proven track record of delivering exceptional results and improving overall 
          practice performance.</div>
        </div>
      </Col>
      <Col md={5}>

        <Row>
          <Col md={12}>
            <div align="center" className="bis-bottom-container-center">
              <span className="bis-bottom-container-center-title"><b>USEFUL MENU LINKS</b></span>
            </div>
          </Col>
        </Row>
        <div className="bis-bottom-container-center-content">
        <Row>
          <Col md={3}>
            <div className="mtop5p bis-bottom-container-center-url">Home</div>
            <div className="mtop5p bis-bottom-container-center-url">About Us</div>
            <div className="mtop5p bis-bottom-container-center-url">Services</div>
            <div className="mtop5p bis-bottom-container-center-url">Contact Us</div>
          </Col>
          <Col md={4}>
            <div className="mtop5p bis-bottom-container-center-url">Medical Billing</div>
            <div className="mtop5p bis-bottom-container-center-url">Medical Transcription</div>
            <div className="mtop5p bis-bottom-container-center-url">Medical Coding</div>
          </Col>
          <Col md={5}>
            <div className="mtop5p bis-bottom-container-center-url">Compliance Audits</div>
            <div className="mtop5p bis-bottom-container-center-url">Practice Consulting</div>
            <div className="mtop5p bis-bottom-container-center-url">Credentialing Services</div>
          </Col>
        </Row>

        </div>
        
      </Col>
      <Col md={3}>
        <Row>
          <Col md={12}>
            <SocialLinks list={["facebook","twitter","instagram","whatsapp"]} />
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