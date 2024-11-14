import React from "react";
import { ContainerFluid, Row, Col, TextBox, TextArea, Email, Form, Button, Icon } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import Bottom from '@Templates/Bottom/index.js';
import Footer from '@Templates/Footer/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import Map from './components/Map/index.js';

const ContactUs = () =>{
 const Template1 = () =>{
   return (<div style={{ backgroundColor:'#000040', }}>
      <Row>
         <Col md={6}>
            <img src="http://localhost/BIS/25.png" style={{ }} />
         </Col>
         <Col md={6}>
         <div style={{ marginTop:'15%', color:'#fff', padding:'15px' }}>
      <div align="center"><h3 style={{ textTransform:'uppercase', letterSpacing:'2px' }}>
         <b>Interested in Our <span style={{ color:'#40cbff' }}>One-Stop Solution</span></b></h3></div>
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
         (or)<br/> write to us at<br/> <span style={{ color:'#40cbff' }}><u>support@broadwayservices.com</u></span>
      </div>
   </div>
   </Col>
      </Row>
   </div>);
 };

 const SubTitle = ({ label, subDesc })=>{
   return (<div align="center">
      <div><h4><b>{label}</b></h4></div>
      <div style={{ fontSize:'15px', color:'#555', lineHeight:'34px' }}>{subDesc}</div>
   </div>);
 };

 const Template2 = () =>{
   const FormDetails = () =>{
      return(<div style={{ padding:'15px' }}>
      <SubTitle label="Send us Message" subDesc="We are available for 24 hours in a day!" />
      <Form name="testForm"
         btnSubmit={{
            align:'center',
            btnType:'primary',
            label:'Submit',
            size: 11,
            style:{ fontWeight:'bold' }
         }}
         btnReset={{
            align:'center',
            btnType:'danger',
            label:'Reset',
            size: 14,
            style:{ fontWeight:'bold' }
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
   </div>);
   };

   const MeetDetailsTemplate = ({ icon, label }) =>{
      return (<div style={{ display:'flex', flex:1, marginTop:'35px' }}>
         <div style={{ width:'20%', backgroundColor:'#ccc',  borderTopLeftRadius:'50%',  borderBottomLeftRadius:'50%'  }}>
            <div align="center" style={{ color:'#fff', borderRadius:'50%', padding:'15px', 
               width:'50px', height:'50px', backgroundColor:'#000040' }}>
               <Icon type="FontAwesome" name={icon} size="22" />
            </div>
         </div>
         <div style={{  width:'80%', backgroundColor:'#ccc', borderTopRightRadius:'12px',  borderBottomRightRadius:'12px', 
            display: 'flex', alignItems:'center', paddingTop:'5px', paddingRight:'15px', paddingBottom:'5px' }}>
            {label}
         </div>
      </div>);
   };

   return (<section id="get-in-touch" style={{ marginTop:'40px', paddingTop:'15px', marginBottom:'65px' }}>
      <div align="center">
         <h3><b>GET IN TOUCH</b></h3>
      </div>
      <div>
         <div align="center" style={{ color:'#555', paddingTop:'15px', paddingBottom:'15px', lineHeight:'34px', fontSize:'17px'  }}>
                     <i>Have questions or need more information? We're here to help.
                     Reach out to our team of experts today and let us simplify your medical billing process.</i>
         </div>
         <div style={{ paddingBottom:'25px' }}>
         <ContainerFluid>
            <Row>
               <Col md={4}><FormDetails /></Col>
               <Col md={4}>
                  <div style={{ padding:'15px' }}>
                     <SubTitle label="Meet us" subDesc="We will love to hear from you!" />
                     <MeetDetailsTemplate icon="fa-map-marker" 
                        label={<div>132 My Street, Kingston, New York 12401, USA</div>} />
                     <MeetDetailsTemplate icon="fa-phone" label="+1 -(404) 4040404" />
                     <MeetDetailsTemplate icon="fa-envelope" label="support@broadwayinfoservices.com" />
                  </div>
               </Col>
               <Col md={4}>
                  <div style={{ padding:'15px' }}>
                     <SubTitle label="We are here" subDesc="Mon - Fri | 8:30 AM - 5:30 PM" />
                     <div style={{ marginTop:'15px' }}><Map /></div>
                  </div>
               </Col>
            </Row>
         </ContainerFluid>
         </div>
      </div>
    </section>);
 };

 return (<div>
    <Header menulinks={HeaderMenu} activeId="ContactUs" />
    <Template1 />
    <Template2 />
    <Bottom />
    <Footer />
 </div>);
};

export default ContactUs;