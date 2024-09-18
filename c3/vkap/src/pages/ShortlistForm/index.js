import React, { useState, useEffect } from "react";
import { ContainerFluid, Row, Col, Card, Form, Icon, ModalAlert, UrlAsyncFetch,
  FormToReqBodyFormatter, Breadcrumb, Colors } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import Footer from '@Templates/Footer/index.js';
import { HeaderMenu } from '@Routes/NavbarList.js';
import PersonalDetails from './components/personal-details/index.js';
import EduEmpDetails from './components/edu-emp-details/index.js';
import PursuingDetails from './components/pursuing-details/index.js';
import './index.css';

const ShortlistForm = ()=>{
 const [showModelAlert, setShowModalAlert] = useState({ show: false, message:'' });
 useEffect(()=>{
    document.title = 'Student\'s Shortlist Form | VKAbroad';
    document.body.style.backgroundColor = "#fcfcfc";
 },[]);
 const HeaderTitle = () =>{
   return (<div><h4 className="shortlist-title"><b>Student's Shortlist Form</b></h4></div>);
 };
 const SubHeaderTitle = ({ title }) =>{
  return (<div align="center" className="shortlist-subTitle"><b>{title}</b></div>);
 };
 const FormDetails = () =>{
  return (<div className="mbot25p">
    <Card padding={15}>
    <Form name="ShortlistForm" btnSubmit={{
        align: 'center',
        btnType:'success',
        label:(<div><Icon type="FontAwesome" name="fa-eye" size={14} /> View Eligibility</div>),
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
          let userAuthDetails = localStorage.getItem("USER_AUTH_DETAILS");
              userAuthDetails = JSON.parse(userAuthDetails);
          let postData = FormToReqBodyFormatter(form.ShortlistForm);
              postData.searchedBy = userAuthDetails?.data?.userId;
          window.open( process.env.PROJECT_URL+'consultancy/students-shortlist-view/'+btoa(JSON.stringify(postData)), '_self' );
        }
         
      }}
      onReset={(triggerReset)=>{
        triggerReset();
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
    </div>);
 };
 return (<div>
  <Header menulinks={HeaderMenu()} activeId="ShortlistForm" />
  <ModalAlert title={showModelAlert?.message} 
    show={showModelAlert?.show} onClose={(show)=>{
      setShowModalAlert({ show: show, message:'' });
    }} />
  <ContainerFluid>
   <Row><Col md={12}><HeaderTitle /></Col></Row>
   <Row>
      <Col md={12}>
      <div className="mbot5p">
        <Breadcrumb backgroundColor="#e5e5e5" data={[{ label:'Shortlist Form', url:'#' }]} />
      </div>
      </Col>
   </Row>
   <Row>
    <Col md={12}>
      <FormDetails />
    </Col>
   </Row>
  </ContainerFluid>
  <Footer />
 </div>);
};

export default ShortlistForm;