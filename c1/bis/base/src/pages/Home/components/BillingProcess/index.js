import React from "react";
import { ContainerFluid, Row, Col } from "e-ui-react";

const BillingProcess = () =>{
    return (<div className="wApp-template-navy wApp-template-grid">
        <ContainerFluid>
        <Row>
          <Col md={12}>
          <div align="center" className="bis-hgl-header"><b>How We Simplify Your Healthcare Billing Process?</b></div>
          </Col>
        </Row>
        <div style={{ marginTop:'1.5vh', marginBottom:'3vh' }}>
        <Row className="row-flex-container">
          <Col md={1}></Col>
          <Col md={6}>
            <div className="bis-hgl-text" style={{ padding:'2vw', color:'#fff' }}>
            <div style={{ paddingBottom:'2.5vh' }}>
            We employ a proven approach to streamline your medical billing process:
            </div>
            <div style={{ paddingBottom:'2.5vh' }}>
              <ul>
                <li>
                  <div style={{ color:'#fff' }}><b>Comprehensive Assessment:</b></div>
                  <div>We conduct a thorough assessment of your current billing practices to 
                    identify areas for improvement.</div>
                </li>
                <li className="mtop15p">
                  <div style={{ color:'#fff' }}><b>Customized Solutions:</b></div>
                  <div>We tailor our services to meet your specific needs, ensuring optimal results.</div>
                </li>
                <li className="mtop15p">
                  <div style={{ color:'#fff' }}><b>Advanced Technology:</b></div>
                  <div>We leverage cutting-edge technology to automate tasks and improve efficiency.</div>
                </li>
                <li className="mtop15p">
                  <div style={{ color:'#fff' }}><b>Transparent Communication:</b></div>
                  <div>We maintain open communication with you throughout the process, keeping you informed and involved.</div>
                </li>
              </ul>
            </div>
            <div style={{ paddingBottom:'2.5vh' }}>
            By partnering with Broadway Info Services, you can simplify your healthcare billing, maximize your revenue, and 
            focus on delivering exceptional patient care. 
            </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="col-flex-container">
                <img src={process.env.PROJECT_URL+"assets/images/11.png"} style={{ borderRadius:'0.6vw' }} />
            </div>
          </Col>
          <Col md={1}></Col>
        </Row>
        </div>
        </ContainerFluid>
      </div>);
};

export default BillingProcess;