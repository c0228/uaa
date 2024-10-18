import React from "react";
import { ContainerFluid, Row, Col, Form, TextBox, TextArea } from "e-ui-react";

const ContactUs = () =>{
 return (<div style={{ paddingBottom:'45px' }}>
 <ContainerFluid>
    <Row>
      <Col md={5}>
        <div align="center" className="pt-5">
          <div>
          <h4 style={{ fontSize:'23px', fontFamily:'MetropolisBold' }}><b>Let's Chat</b></h4>
          </div>
          <div style={{ color:'#fff', lineHeight:'34px', fontSize:'18px' }}>
            Whether you have any questions?<br/>
            Want to work with us or simply want to connect.<br/><br/>
            Feel free to send me a message in the contact form <br/>(or) you can contact us at
          </div>
        </div>
        <div align="center" style={{ marginTop:'15px', color:'#fff', lineHeight:'34px', fontSize:'18px' }}>
          <table style={{ border:'1px solid #fff' }}>
            <tbody>
              <tr><td className="px-3"><b>Email:</b></td><td className="px-3">hr@theworkdayconsultancy.com</td></tr>
              <tr><td className="px-3"><b>Phone:</b></td><td className="px-3">+1 (716) 429 - 5842</td></tr>
            </tbody>
          </table>
        </div>
      </Col>
      <Col md={1}></Col>
      <Col md={5}>
      <div align="center">
        <h4 style={{ fontSize:'23px', fontFamily:'MetropolisBold' }}><b>Contact Us</b></h4>
      </div>
      <div align="center" style={{ color:'#fff', lineHeight:'34px', fontSize:'18px' }}>
        Fill the Below Form for Enquiries
      </div>
      <Form name="quotationForm" 
    btnSubmit={{
       align: 'center',
       btnType:'light',
       label:(<b>Submit</b>),
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
      </Col>
      <Col md={1}></Col>
    </Row>
  </ContainerFluid>
  </div>);
};

export default ContactUs;