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

const ContactUs = () =>{

 const SubTitle = ({ label, subDesc })=>{
   return (<div align="center">
      <div><h4><b>{label}</b></h4></div>
      <div style={{ fontSize:'15px', color:'#555', lineHeight:'34px' }}>{subDesc}</div>
   </div>);
 };

 const Template2 = () =>{
   const MeetDetailsTemplate = ({ icon, label }) =>{
      return (<div style={{ display:'flex', flex:1, marginTop:'35px' }}>
         <div style={{ width:'20%', backgroundColor:'#ccc',  borderTopLeftRadius:'50%',  borderBottomLeftRadius:'50%'  }}>
            <div align="center" style={{ color:'#fff', borderRadius:'50%', padding:'15px', 
               width:'50px', height:'50px', backgroundColor:'#000040' }}>
               <Icon type="FontAwesome" name={icon} size="22" />
            </div>
         </div>
         <div style={{ width:'80%', backgroundColor:'#ccc', borderTopRightRadius:'12px',  borderBottomRightRadius:'12px', 
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
               <Col md={4}>
                  <div style={{ padding:'15px' }}>
                     <SubTitle label="Send us Message" subDesc="We are available for 24 hours in a day!" />
                     <FormDetails />
                  </div>
               </Col>
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
    <Landing />
    <Template2 />
    <Bottom />
    <Footer />
 </div>);
};

export default ContactUs;