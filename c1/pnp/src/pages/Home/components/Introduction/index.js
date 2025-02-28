import React from "react";
import { Row, Col, Button } from "e-ui-react";

const Introduction = () =>{

 const TagLine = () =>{
        return (<div align="center" className="bis-regular-text bis-home-tagline">
         "Welcome to Pets and Paws Kennel Services - Your Pet's Home Away From Home"
      </div>);
 };

 const IntroPara = () =>{
   return (<div className="wApp-template-odd" style={{ backgroundColor:'#fff6bd' }}>
      <Row className="row-flex-container">
        <Col md={6}>
          <div className="col-flex-container">
            <img src={process.env.PROJECT_URL+"assets/images/welcome.png"} />
          </div>
        </Col>
        <Col md={6}>
          <div className="col-flex-container wApp-hgl-textView pad15p">
         {/* <h2 style={{ marginTop:'25px', lineHeight:'46px', paddingTop:'15px' }}> */}
          <div className="bis-hgl-header" style={{ color:'#000' }}>
            <b>We are providing love care and a safe, fun environment for your furry friends.</b>
          </div>
          {/* </h2> */}
          <div className="bis-hgl-text mtop15p">
            <div>
            We offer a range of comfortable accommodations, engaging activities, and personalized care to ensure your pet has a 
            happy and healthy stay. We're committed to providing a safe, clean, and stimulating environment where your furry friends 
            can thrive while you're away.
            </div>
            <div className="mtop15p">
              <Button type="saffron">
                Book Your Pet's Vacation Today!</Button>
            </div>
          </div>
          </div>
        </Col>
      </Row>
     </div>);
 };

 return (<div>
   {/*<TagLine />*/}
   <IntroPara />
 </div>);
};


export default Introduction;