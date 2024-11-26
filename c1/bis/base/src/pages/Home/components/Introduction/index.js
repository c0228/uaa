import React from "react";
import { Row, Col } from "e-ui-react";

const Introduction = () =>{

 const TagLine = () =>{
        return (<div align="center" className="bis-regular-text bis-home-tagline">
         <b>"Your Trusted Partner for empowering Healthcare Providers for providing Healthcare Financial Success."</b>
      </div>);
 };

 const IntroPara = () =>{
   return (<div className="wApp-template-odd">
      <Row className="row-flex-container">
        <Col md={6}>
          <div className="col-flex-container">
            <img src={process.env.PROJECT_URL+"assets/images/24.png"} />
          </div>
        </Col>
        <Col md={6}>
          <div className="col-flex-container wApp-hgl-textView pad15p">
         {/* <h2 style={{ marginTop:'25px', lineHeight:'46px', paddingTop:'15px' }}> */}
          <div className="bis-hgl-header">
            <b>Elevate Your Healthcare Practice, Streamline Your Revenue Cycle and
            Partner with Broadway Info Services</b>
          </div>
          {/* </h2> */}
          <div className="bis-hgl-text">
          Broadway Info Services is your partner in optimizing healthcare operations. 
          Our dedicated team of experts specializes in ensuring accurate medical coding, timely claims 
          submission, and efficient payment collection.<br/><br/> 
          By streamlining these critical administrative tasks, 
          we empower healthcare providers to focus on what truly matters: delivering exceptional patient care.<br/><br/>
          Our cutting-edge technology, coupled with the expertise of our seasoned professionals, ensures accelerated 
          payment cycles and maximized revenue. 
          </div>
          </div>
        </Col>
      </Row>
     </div>);
 };

 return (<div>
   <TagLine />
   <IntroPara />
 </div>);
};


export default Introduction;