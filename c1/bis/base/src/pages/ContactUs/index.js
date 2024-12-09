import React, { useState } from "react";
import { ContainerFluid, Row, Col, TextBox, TextArea, Email, Form, 
   Button, Icon, FormToReqBodyFormatter, UrlAsyncFetch  } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import Bottom from '@Templates/Bottom/index.js';
import Footer from '@Templates/Footer/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import Landing from './components/Landing/index.js';
import FormDetails from './components/FormDetails/index.js';
import Map from './components/Map/index.js';
import './index.css';

const ContactUs = () =>{

 const SubTitle = ({ label, subDesc })=>{
   return (<div align="center">
      <div className="bis-regular-text"><b>{label}</b></div>
      <div className="bis-regular-text">{subDesc}</div>
   </div>);
 };

 const Template2 = () =>{
   const MeetDetailsTemplate = ({ icon, label }) =>{
      return (<div className="bis-contact-details-section">
         <div className="bis-contact-icon-section">
            <div align="center" className="bis-contact-icon">
               <Icon type="FontAwesome" name={icon} size="22" />
            </div>
         </div>
         <div className="bis-contact-label-section">{label}</div>
      </div>);
   };

   return (<section id="get-in-touch">
      <div className="wApp-template-grid">
      <div align="center" className="mtop15p bis-hgl-header"><b>GET IN TOUCH</b></div>
      <div>
         <div align="center" className="bis-hgl-text">
                     <i>Have questions or need more information? We're here to help.
                     Reach out to our team of experts today and let us simplify your medical billing process.</i>
         </div>
         <div className="mtop15p">
         <ContainerFluid>
            <Row>
               <Col md={4}>
                  <div className="pad15p">
                     <SubTitle label="Send us Message" subDesc="We are available for 24 hours in a day!" />
                     <FormDetails />
                  </div>
               </Col>
               <Col md={4}>
                  <div className="pad15p">
                     <SubTitle label="Meet us" subDesc="We will love to hear from you!" />
                     <div style={{ marginTop:'35px' }}>
                        <div><b>United States (US):</b></div>
                        <MeetDetailsTemplate icon="fa-map-marker" 
                           label={<div>4123 Highland Cliff Ln, Katy, Houston, TX 77493</div>} />
                        <MeetDetailsTemplate icon="fa-phone" label="+1 (973) 922-1277, +1 (551) 229-6119" />
                     </div>
                     <div style={{ marginTop:'35px' }}>
                        <div><b>India:</b></div>
                        <MeetDetailsTemplate icon="fa-map-marker" 
                           label={<div>Plot 50 Broadway Venture, Atvelly - Medchal,<br/> Hyderabad 501401</div>} />
                        <MeetDetailsTemplate icon="fa-phone" label="+91 - 96421 80000" />
                     </div>
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
     </div>
    </section>);
 };

 return (<div>
    <Header menulinks={HeaderMenu} activeId="ContactUs" />
    <Landing />
    <Template2 />
    <Bottom />
    <Footer />
 </div>);
};

export default ContactUs;