import React from "react";
import { Row, Col } from "e-ui-react";
import './index.css';

const PartnerInfo = () =>{
 return (<div className="wApp-template-odd wApp-template-grid">
    <Row>
      <Col md={12}>
        <div align="center" className="bis-hgl-header mbot15p">
          <b>Pets & Paws Kennel Services: A Loving Home Away From Home for Your Pets!</b>
        </div>
      </Col>
    </Row>
    <Row className="row-flex-container mtop15p">
      <Col md={1}></Col>
      <Col md={5}>
        <Row>
          <Col md={6} style={{ padding:'1%' }}>
            <img className="kennel-partner-img1" src={process.env.PROJECT_URL+"assets/images/04.jpg"} />
          </Col>
          <Col md={6} style={{ padding:'1%' }}>
            <div>
              <img className="kennel-partner-img2" src={process.env.PROJECT_URL+"assets/images/02.jpg"} />
            </div>
            <div>
            <img className="kennel-partner-img3" src={process.env.PROJECT_URL+"assets/images/03.jpg"} />
            </div>
            
          </Col>
        </Row>
      </Col>
      <Col md={5}>
      <div>
        <div className="bis-hgl-text pad15p">
        At Pets & Paws Kennel Services, we understand that your pets are family. That’s why we provide a safe, clean, and 
        nurturing environment where your furry companions receive the love, care, and attention they deserve. Whether you're 
        looking for boarding, daycare, grooming, or training, we ensure your pet is happy, comfortable, and well-cared for.<br/><br/>
        With years of experience in pet care and animal welfare, Pets & Paws Kennel Services was founded with one mission: 
        to offer a home-like experience for pets while their owners are away. Our professional & compassionate team is dedicated 
        to creating a stress-free environment where your pets feel love & secure.
        </div>
      </div>
      </Col>
      <Col md={1}></Col>
    </Row>
    </div>);
};

export default PartnerInfo;