import React from "react";
import { ContainerFluid, Row, Col } from "e-ui-react";

const BillingProcess = () =>{
    return (<div className="wApp-template-navy wApp-template-grid">
        <ContainerFluid>
        <Row>
          <Col md={12}>
          <div align="center" className="bis-hgl-header" style={{ color:'#fff' }}><b>Why Pets Love Us & Pet Parents Trust Us! </b></div>
          </Col>
        </Row>
        <div style={{ marginTop:'1.5vh', marginBottom:'3vh' }}>
        <Row className="row-flex-container">
          <Col md={1}></Col>
          <Col md={5}>
            <div className="bis-hgl-text" style={{ padding:'2vw', color:'#fff' }}>
            <div>
              <ol>
                <li>
                  <div style={{ color:'#fff' }}><b>A Loving & Homely Environment:</b></div>
                  <div style={{ color:'#fff7b1' }}>Our facilities are designed to make pets feel comfortable, safe, and stress-free.</div>
                </li>
                <li className="mtop15p">
                  <div style={{ color:'#fff' }}><b>Tailored Care & Attention:</b></div>
                  <div style={{ color:'#fff7b1' }}>Whether your pet needs a play buddy or extra cuddles, we customize our services to fit their needs.</div>
                </li>
                <li className="mtop15p">
                  <div style={{ color:'#fff' }}><b>Regular Exercise & Activities:</b></div>
                  <div style={{ color:'#fff7b1' }}>Fun playtimes, interactive toys, socialization, and outdoor walks keep your pets happy and active.</div>
                </li>
              </ol>
            </div>
            </div>
          </Col>
          <Col md={5}>
          <div className="bis-hgl-text" style={{ padding:'2vw', color:'#fff' }}>
               <ol start="4">
                <li>
                  <div style={{ color:'#fff' }}><b>Veterinary Care Available 24/7:</b></div>
                  <div style={{ color:'#fff7b1' }}>Because your pet’s health and safety are our top priorities.</div>
                </li>
                <li className="mtop15p">
                  <div style={{ color:'#fff' }}><b>A Clean & Hygienic Space:</b></div>
                  <div style={{ color:'#fff7b1' }}>We maintain strict hygiene standards to keep all pets healthy and safe.</div>
                </li>
                <li className="mtop15p">
                  <div style={{ color:'#fff' }}><b>Live Updates & Pet Reports:</b></div>
                  <div style={{ color:'#fff7b1' }}>Get photos, videos, and detailed reports about your pet’s activities and well-being while they are with us.</div>
                </li>
               </ol>
            </div>
          </Col>
          <Col md={1}></Col>
        </Row>
        <Row>
          <Col md={12}>
            <div align="center" className="bis-hgl-text" style={{ paddingBottom:'2.5vh', color:'#fff7b1' }}>
              No matter the breed, age, or personality – every pet receives VIP treatment at Pets & Paws Kennel Services! 
            </div>
          </Col>
        </Row>
        </div>
        </ContainerFluid>
      </div>);
};

export default BillingProcess;