import React, { useState, useEffect } from "react";
import { ContainerFluid, Row, Col, Card, Form } from "e-ui-react";
import Header from '@Templates/Header/index.js';
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
          label:'Download Eligibility',
          size: 12,
          style:{ fontWeight:'bold' }
        }} 
        btnReset={{ 
            align: 'center',
            btnType:'danger',
            label:'Reset',
            size: 12,
            style:{ fontWeight:'bold' }
        }}
        onSubmit={async(form, isValidForm, triggerReset)=>{
          console.log("Form Result:", form);
          if(isValidForm){
          /*  const subject = form?.['testForm']?.subjectName?.value;
            const exams = form?.['testForm']?.SelectedExams?.value?.map((exam)=>exam.id).join('|');
            const response = await UrlAsyncFetch('http://localhost/projects/uma/upn/nexus/add/new/subject', 
              'POST', { subject: subject, exams: exams });
            console.log("response: ", response);
            setShowAlert({ message:response?.message, status:true, type:response?.status?.toLowerCase() });
            triggerReset();
            reset();
          } else {
            setShowAlert({ message:'Please Enter Valid Details in the Form', status:true, type:'danger' });
          } */
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
 </div>);
};

export default ShortlistForm;