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
        <div style={{ marginTop:'3vh', marginBottom:'3vh' }}>
        <Row className="row-flex-container">
          <Col md={7}>
            <div style={{ padding:'15px', lineHeight:'34px', fontSize:'18px'  }}>
            We employ a proven approach to streamline your medical billing process:
            </div>
            <div style={{ padding:'15px', lineHeight:'34px', fontSize:'18px'  }}>
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
                  <div style={{ color:'#fff' }}><b>Expert Team:</b></div>
                  <div>Our experienced professionals handle every aspect of your medical billing, from coding to collections.</div>
                </li>
                <li className="mtop15p">
                  <div style={{ color:'#fff' }}><b>Transparent Communication:</b></div>
                  <div>We maintain open communication with you throughout the process, keeping you informed and involved.</div>
                </li>
              </ul>
            </div>
            <div style={{ padding:'15px', lineHeight:'34px', fontSize:'18px' }}>
            By partnering with Broadway Info Services, you can simplify your healthcare billing, maximize your revenue, and 
            focus on delivering exceptional patient care. 
            </div>
          </Col>
          <Col md={5}>
            <div className="col-flex-container">
                <img src={process.env.PROJECT_URL+"assets/images/11.png"} style={{ marginTop:'15px', borderRadius:'12px' }} />
            </div>
            
          </Col>
        </Row>
        </div>
        </ContainerFluid>
      </div>);
};

export default BillingProcess;