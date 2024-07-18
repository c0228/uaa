import React, { useState } from "react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import { ContainerFluid, Row, Col, Form, TextBox, TextArea, Button, Select, Card, Switch, FormToReqBodyFormatter, UrlAsyncFetch } from "e-ui-react";
import axios from 'axios';

const Contact = ()=>{
 const [success, setSuccess] = useState(false);
 const ContactForm = () =>{
    return (<>
        <div style={{ marginTop:'15px' }}>
        <ContainerFluid>
           <Row>
               <Col xs={12} xl={12} xxl={12}>
                   {success && (<>
                   <div style={{ padding:'15px' }}>
                       We would like to inform you that we have successfully received your request for a quotation.<br/><br/> 
                       Thank you for reaching out to us. Our team is currently reviewing the details provided in the form.
                       Rest assured, we will diligently assess your requirements and prepare a comprehensive quotation tailored to your needs.
                       Please expect to hear back from us within 24-48 hours with the requested information. In the meantime, if you have 
                       any additional questions or specifications, feel free to reach out to us directly.
                       Thank you for considering us for your [product/service] needs. We look forward to the opportunity to serve you.
                   </div>
                   </>)}
                   {!success && (<>
                   <div style={{ color:'#333', lineHeight:'34px', fontSize:'18px', fontFamily:'OpenSansItalic' }}>
                       Fill the Below Form for Enquiries -
                   </div>
                   <div style={{ marginBottom:'15px' }}>
                   <Form name="quotationForm" 
        btnSubmit={{
           align: 'center',
           btnType:'dark',
           label:'Submit',
           size: 11
       }}
       onSubmit={async(form, isValidForm, setFormMode)=>{
           if(isValidForm){  
               setSuccess(true);
               console.log("ForM VALUES");
               console.log(form);
               const reqBody = FormToReqBodyFormatter(form.quotationForm);
               console.log("reqBody", JSON.stringify(reqBody));
              await UrlAsyncFetch( process.env.NEXUS_URL + 'send/quotation', 'POST', reqBody );
           }
       }}
       >
                   <Row>
                       <Col xs={12} xl={12} xxl={12}>
                         <div className="mtop15p">
                           <TextBox name="quoteBy" label={<><span className="font-red">*</span>Name</>} placeholder="Enter your Name" />
                         </div>
                       </Col>
                       <Col xs={12} xl={12} xxl={12}>
                         <div className="mtop15p">
                           <TextBox name="quoteEmail" label={<><span className="font-red">*</span>Email Address</>} placeholder="Enter your Email Address" />
                         </div>
                       </Col>
                       <Col xs={12} xl={12} xxl={12}>
                         <div className="mtop15p">
                           <TextBox name="quotePhone" label={<><span className="font-red">*</span>Phone Number</>} placeholder="Enter your Phone Number including (+1)" />
                         </div>
                       </Col>
                   </Row>
                   <Row>
                       <Col xs={12} xl={12} xxl={12}>
                           <div className="mtop15p">
                               <TextArea name="quoteDesc" label="Your Message" placeholder="Enter your Message" lines={5} />
                           </div>
                       </Col>
                   </Row>
                   </Form>
                   </div>
                   </>)}  
               </Col>
               <Col xs={12} xl={6} xxl={6}>
               </Col>
                   
           </Row>
        </ContainerFluid>
        </div>
        </>); 
 };
 
 return (<>
     <div className="container-fluid" style={{ backgroundColor:'#eee' }}>
      <div className="row">
        <div className="col-xxl-9 col-md-8" style={{ paddingTop:'30px' }}>
          <div align="center" className="heading-title"><b>Get In Touch With Us For The Best Quality Barware products -</b></div>
          <div className="row">
            <div className="col-xxl-6 col-md-6">

              <div style={{ lineHeight:'34px', padding:'15px', fontSize:'18px', fontFamily:'OpenSansItalic' }}>
                <div>Require products in bulk quantity for Commercial purposes, then please Contact us or raise an 
                Enquiry and we will contact you as soon as possible.</div>
                <div className="row" style={{ marginTop:'15px'}}>
                  <div className="col-xxl-3 col-md-4"><b>Write to us:</b></div>
                  <div className="col-xxl-9 col-md-8">support@thebackyardbarnc.in</div>
                </div>
                <div className="row">
                  <div className="col-xxl-3 col-md-4"><b>Talk to us:</b></div>
                  <div className="col-xxl-9 col-md-8">+91-7014859635</div>
                </div>
                <div className="row">
                  <div className="col-xxl-3 col-md-4"><b>Address:</b></div>
                  <div className="col-xxl-9 col-md-8">4/446, Pradhan Marg, Malviya Nagar, Hyderabad, Telangana 302017, India</div>
                </div>
              </div>

            </div>
            <div className="col-xxl-6 col-md-6">
                <ContactForm />
            </div>
          </div>

          
          


        </div>
        <div className="col-xxl-3 col-md-4" style={{ padding:'15px' }}>
          <img src={"./assets/bar/1.jpg"} style={{ borderRadius:'8px', marginTop:'15px', marginBottom:'15px' }} />
        </div>
      </div>
    </div>
 </>);
};

export default Contact;