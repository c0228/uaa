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
            <div className="mtop5p"><a href={process.env.PROJECT_URL} className="bis-bottom-container-center-url">Home</a></div>
            <div className="mtop5p"><a href={process.env.PROJECT_URL+"about-us"} className="bis-bottom-container-center-url">About Us</a></div>
            <div className="mtop5p"><a href={process.env.PROJECT_URL+"services"} className="bis-bottom-container-center-url">Services</a></div>
            <div className="mtop5p"><a href={process.env.PROJECT_URL+"contact-us"}  className="bis-bottom-container-center-url">Contact Us</a></div>
          </Col>
          <Col md={4}>
            <div className="mtop5p"><a href={process.env.PROJECT_URL+"services#medical-billing"} className="bis-bottom-container-center-url">Medical Billing</a></div>
            <div className="mtop5p"><a href={process.env.PROJECT_URL+"services#medical-transcription"} className="bis-bottom-container-center-url">Medical Transcription</a></div>
            <div className="mtop5p"><a href={process.env.PROJECT_URL+"services#medical-coding"} className="bis-bottom-container-center-url">Medical Coding</a></div>
          </Col>
          <Col md={5}>
            <div className="mtop5p"><a href={process.env.PROJECT_URL+"services#compliance-audits"} className="bis-bottom-container-center-url">Compliance Audits</a></div>
            <div className="mtop5p"><a href={process.env.PROJECT_URL+"services#practice-consulting"} className="bis-bottom-container-center-url">Practice Consulting</a></div>
            <div className="mtop5p"><a href={process.env.PROJECT_URL+"services#credentialing-services"} className="bis-bottom-container-center-url">Credentialing Services</a></div>
          </Col>
        </Row>

        </div>
        
      </Col>
      <Col md={3}>
        <Row>
          <Col md={12}>
            <SocialLinks list={[{ label:"facebook", url:"https://www.facebook.com/profile.php?id=61569414627158&mibextid=ZbWKwL" },
                { label:"linkedin", url:"https://www.linkedin.com/company/broadway-info-services/" },
                { label:"whatsapp", url:"https://chat.whatsapp.com/DHZl6YhtGow2ILGa558pIz" }]} />
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