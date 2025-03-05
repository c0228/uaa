import React from "react";
import { Row, Col, Button,  } from "e-ui-react";

const Landing = () =>{
 return (<div className="wApp-template-navy">
  <Row className="row-flex-container">
    <Col md={6}>
      <div className="col-flex-container">
        <img src={process.env.PROJECT_URL+"assets/images/11.jpg"} style={{ }} />    
      </div>
    </Col>
    <Col md={6}>
     <div className="col-flex-container pad15p bis-hgl-header" style={{ color:'#fff' }}>
        <div align="center" style={{ textTransform:'uppercase' }}>
          <b>Interested in Our <span style={{ color:'#ffcb31' }}>One Stop Solution</span></b>
         </div>
         <div align="center" className="bis-regular-text" style={{ marginTop:'15px', color:'#ccc' }}>
          PET BOARDING | PET GROOMING | PET TRAINING | VETERINARY CARE |<br/> PET ADOPTION | PET SUPPLIES
         </div>
         <div align="center" className="bis-hgl-text" style={{ marginTop:'35px', color:'#eee' }}>
           <b>Let's Schedule a Conversation right away</b>
         </div>
         <div align="center" className="bis-hgl-text" style={{ marginTop:'25px' }}>
           <a href="#get-in-touch" style={{ color:'#000' }}>
            <Button size={11} style={{ backgroundColor:'#ffcb31',border:'0.1vw solid #ffc004' }}><b>GET IN TOUCH</b></Button>
           </a>
         </div>
         <div align="center" className="bis-hgl-text" style={{ marginTop:'15px', color:'#ccc' }}>
           (or)<br/> write to us at<br/> <span style={{ color:'#ffcb31' }}><u>support@petsandpawskennels.com</u></span>
         </div>
       </div>
      </Col>
     </Row>
     </div>);
};

export default Landing;