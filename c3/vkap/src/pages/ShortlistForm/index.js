import React, { useState, useEffect } from "react";
import { ContainerFluid, Row, Col, Card, Form, Icon, FormToReqBodyFormatter } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import Footer from '@Templates/Footer/index.js';
import { HeaderMenu } from '@Routes/NavbarList.js';
import PersonalDetails from './components/personal-details/index.js';
import EduEmpDetails from './components/edu-emp-details/index.js';
import PursuingDetails from './components/pursuing-details/index.js';

const ShortlistForm = ()=>{
 useEffect(()=>{
    document.title = 'Student\'s Shortlist Form | VKAbroad';
    document.body.style.backgroundColor = "#fcfcfc";
 },[]);
 const HeaderTitle = () =>{
   return (<div><h4 style={{ paddingBottom:'5px', borderBottom:'1px solid #ccc' }}><b>Student's Shortlist Form</b></h4></div>);
 };
 const SubHeaderTitle = ({ title }) =>{
  return (<div align="center" style={{ marginBottom:'15px', textTransform:'uppercase' }}><b>{title}</b></div>);
 };
 return (<div>
  <Header menulinks={HeaderMenu()} activeId="ShortlistForm" />
  <ContainerFluid>
   <Row><Col md={12}><HeaderTitle /></Col></Row>
   <Row>
      <Col md={12}>
      <div className="mbot25p">
      <Card padding={15}>
      <Form name="ShortlistForm" btnSubmit={{
          align: 'center',
          btnType:'success',
          label:(<div><Icon type="FontAwesome" name="fa-cloud-download" size={14} /> Download Eligibility</div>),
          size: 12,
          style:{ fontWeight:'bold' }
        }} 
        btnReset={{ 
            align: 'center',
            btnType:'danger',
            label:(<div><Icon type="FontAwesome" name="fa-refresh" size={14} /> Reset Form</div>),
            size: 12,
            style:{ fontWeight:'bold' }
        }}
        onSubmit={async(form, isValidForm, triggerReset)=>{
          console.log("Form Result:", form);
          if(isValidForm){
            let postData = FormToReqBodyFormatter(form.ShortlistForm);
            postData = JSON.stringify(postData);
            console.log("postDta: ", postData);
            window.open(process.env.NEXUS_URL+'student/shortlist?data='+btoa(postData),'_blank');
          }
        }}
        onReset={(triggerReset)=>{
          triggerReset();
         // setShowAlert({ status:false, type:'', message:'' });
        }}
        >
         <SubHeaderTitle title="Personal Details" />
         <PersonalDetails />
         <SubHeaderTitle title="Education / Employment Details" />
         <EduEmpDetails />
         <SubHeaderTitle title="Details For Pursuing Masters" />
         <PursuingDetails />
      </Form>
      </Card>
      </div>
      </Col>
   </Row>
  </ContainerFluid>
  <Footer />
 </div>);
};

export default ShortlistForm;