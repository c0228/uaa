import React from "react";
import { ContainerFluid, Row, Col, TextBox, TextArea, Email, Form } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import Footer from '@Templates/Footer/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';

const ContactUs = () =>{
 return (<div>
    <Header menulinks={HeaderMenu} activeId="ContactUs" />
    <div>
      <Row>
         <Col md={12}>
            <div align="center">
               <div style={{ marginTop:'15px', marginBottom:'25px' }}><h1><b>Contact Us</b></h1></div>
               <div style={{ paddingTop:'15px', paddingBottom:'15px', backgroundColor:'#212529', marginTop:'15px', 
                  lineHeight:'34px', fontSize:'17px', color:'#ddd'  }}>
                  <i>Have questions or need more information? We're here to help.<br/>
                  Reach out to our team of experts today and let us simplify your medical billing process.</i>
               </div>
            </div>
         </Col>
      </Row>
      <Row>
         <Col md={3}></Col>
         <Col md={6}>
            <div style={{ marginTop:'25px', marginBottom:'65px' }}>
            <Form name="testForm"
                  btnSubmit={{
                     align:'center',
                     btnType:'dark',
                     label:'Submit',
                     size: 11
                  }}
                  btnReset={{
                     align:'center',
                     btnType:'danger',
                     label:'Reset',
                     size: 14
                  }}
                  onSubmit={(form, isValidForm)=>{

                  }}>
            <div className="mtop15p">
               <TextBox name="name" label="Name" placeholder="Enter your Full Name" />
            </div>
            <div className="mtop15p">
            <Email validation={{
                        email:{ formatCheck: true }
                     }} />
            </div>
            <div className="mtop15p">
               <TextBox name="mobile" label="Phone Number" placeholder="Enter your Phone Number" />
            </div>
            <div className="mtop15p">
               <TextArea name="message" label="Message" placeholder="Enter your Message" lines={5} />
            </div>
            </Form>
            </div>
         </Col>
         <Col md={3}></Col>
      </Row>
    </div>
    <Footer />
 </div>);
};

export default ContactUs;