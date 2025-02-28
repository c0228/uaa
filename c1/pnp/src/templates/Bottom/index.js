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
        <div className="bis-hgl-text uppercase mbot15p"><b>About Broadway Info Services</b></div>
        <div className="bis-regular-text">
          Broadway Info Services is a leading healthcare revenue cycle management company. They specialize in medical 
          coding, billing, and other administrative services. Their advanced technology and skilled team ensure accurate 
          and efficient processing of claims, maximizing revenue for healthcare providers. With a focus on client satisfaction, 
          Broadway Info Services has a proven track record of delivering exceptional results and improving overall 
          practice performance.</div>
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
            <div><a href={process.env.PROJECT_URL} className="bis-bottom-container-center-url">Home</a></div>
            <div><a href={process.env.PROJECT_URL+"about-us"} className="bis-bottom-container-center-url">About Us</a></div>
            <div><a href={process.env.PROJECT_URL+"services"} className="bis-bottom-container-center-url">Services</a></div>
            <div><a href={process.env.PROJECT_URL+"contact-us"}  className="bis-bottom-container-center-url">Contact Us</a></div>
          </Col>
          <Col md={4}>
            <div><a href={process.env.PROJECT_URL+"services#medical-billing"} className="fs13 bis-bottom-container-center-url">Medical Billing</a></div>
            <div><a href={process.env.PROJECT_URL+"services#medical-transcription"} className="fs13 bis-bottom-container-center-url">Medical Transcription</a></div>
            <div><a href={process.env.PROJECT_URL+"services#medical-coding"} className="fs13 bis-bottom-container-center-url">Medical Coding</a></div>
          </Col>
          <Col md={5}>
            <div><a href={process.env.PROJECT_URL+"services#compliance-audits"} className="fs13 bis-bottom-container-center-url">Compliance Audits</a></div>
            <div><a href={process.env.PROJECT_URL+"services#practice-consulting"} className="fs13 bis-bottom-container-center-url">Practice Consulting</a></div>
            <div><a href={process.env.PROJECT_URL+"services#credentialing-services"} className="fs13 bis-bottom-container-center-url">Credentialing Services</a></div>
          </Col>
        </Row>

        </div>
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