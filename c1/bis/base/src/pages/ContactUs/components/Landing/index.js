import React from "react";
import { Row, Col, Button } from "e-ui-react";

const Landing = () =>{
 return (<div style={{ backgroundColor:'#000040', }}>
  <Row>
    <Col md={6}><img src={process.env.PROJECT_URL+"assets/images/25.png"} style={{ }} /></Col>
    <Col md={6}>
     <div style={{ marginTop:'15%', color:'#fff', padding:'15px' }}>
        <div align="center"><h3 style={{ textTransform:'uppercase', letterSpacing:'2px' }}>
           <b>Interested in Our <span style={{ color:'#40cbff' }}>One-Stop Solution</span></b></h3>
         </div>
         <div align="center" style={{ marginTop:'15px', lineHeight:'26px', fontSize:'14px', color:'#ccc' }}>
           MEDICAL BILLING | MEDICAL TRANSCRIPTION | MEDICAL CODING |<br/> COMPLIANCE AUDIT | PRACTICE CONSULTING | CREDENTIALING SERVICES
         </div>
         <div align="center" style={{ marginTop:'35px', color:'#eee' }}>
           <h4><b>Let's Schedule a Conversation right away</b></h4>
         </div>
         <div align="center"  style={{ marginTop:'25px' }}>
           <a href="#get-in-touch"><Button type="info" size={11}><b>GET IN TOUCH</b></Button></a>
         </div>
         <div align="center" style={{ marginTop:'15px', lineHeight:'26px', fontSize:'16px', color:'#ccc' }}>
           (or)<br/> write to us at<br/> <span style={{ color:'#40cbff' }}><u>support@broadwayinfoservices.com</u></span>
         </div>
       </div>
      </Col>
     </Row>
     </div>);
};

export default Landing;