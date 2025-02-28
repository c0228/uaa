import React from "react";
import { Row, Col, Button,  } from "e-ui-react";

const Landing = () =>{
 return (<div className="wApp-template-navy">
  <Row className="row-flex-container">
    <Col md={6}>
      <div className="col-flex-container">
        <img src={process.env.PROJECT_URL+"assets/images/25.png"} style={{ }} />    
      </div>
    </Col>
    <Col md={6}>
     <div className="col-flex-container pad15p bis-hgl-header" style={{ color:'#fff' }}>
        <div align="center" style={{ textTransform:'uppercase' }}>
          <b>Interested in Our <span style={{ color:'#40cbff' }}>One Stop Solution</span></b>
         </div>
         <div align="center" className="bis-regular-text" style={{ marginTop:'15px', color:'#ccc' }}>
           MEDICAL BILLING | MEDICAL TRANSCRIPTION | MEDICAL CODING |<br/> COMPLIANCE AUDIT | PRACTICE CONSULTING | CREDENTIALING SERVICES
         </div>
         <div align="center" className="bis-hgl-text" style={{ marginTop:'35px', color:'#eee' }}>
           <b>Let's Schedule a Conversation right away</b>
         </div>
         <div align="center" className="bis-hgl-text" style={{ marginTop:'25px' }}>
           <a href="#get-in-touch"><Button type="info" size={11}><b>GET IN TOUCH</b></Button></a>
         </div>
         <div align="center" className="bis-hgl-text" style={{ marginTop:'15px', color:'#ccc' }}>
           (or)<br/> write to us at<br/> <span style={{ color:'#40cbff' }}><u>support@broadwayinfoservices.com</u></span>
         </div>
       </div>
      </Col>
     </Row>
     </div>);
};

export default Landing;