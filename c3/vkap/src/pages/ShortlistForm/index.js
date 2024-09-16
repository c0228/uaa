import React, { useState, useEffect } from "react";
import { ContainerFluid, Row, Col, Card, Form, Icon, ModalAlert, UrlAsyncFetch,
  FormToReqBodyFormatter, Breadcrumb, Colors } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import Footer from '@Templates/Footer/index.js';
import { HeaderMenu } from '@Routes/NavbarList.js';
import PersonalDetails from './components/personal-details/index.js';
import EduEmpDetails from './components/edu-emp-details/index.js';
import PursuingDetails from './components/pursuing-details/index.js';
import ViewDetails from './components/view-details/index.js';
import './index.css';

const ShortlistForm = ()=>{
 const [displayPage, setDisplayPage] = useState('FORM'); // FORM/VIEW
 const [breadcrumbItems, setBreadcrumbItems] = useState([]);
 const [showModelAlert, setShowModalAlert] = useState({ show: false, message:'' });
 const [shortlistFormDetails, setShortlistFormDetails] = useState();
 useEffect(()=>{
    document.title = 'Student\'s Shortlist Form | VKAbroad';
    document.body.style.backgroundColor = "#fcfcfc";
 },[]);
 useEffect(()=>{ buildBreadcrumb(); },[displayPage]);
 const buildBreadcrumb = ()=>{
   if(displayPage==='FORM'){
    setBreadcrumbItems([{ label:'Shortlist Form', url:'#', onClick:()=>alert('Shortlist') }]);
   } else {
    setBreadcrumbItems([{ label:'Shortlist Form', url:'#', onClick:()=>setDisplayPage('FORM') },
        { label:'Student Details', url:'#' }]);
   }
 };
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
          let userAuthDetails = localStorage.getItem("USER_AUTH_DETAILS");
              userAuthDetails = JSON.parse(userAuthDetails);
          let postData = FormToReqBodyFormatter(form.ShortlistForm);
              postData.searchedBy = userAuthDetails?.data?.userId;
          setShortlistFormDetails(postData);
        /*  setShowModalAlert({ show: true, 
            message: (<div>A PDF is generated and displayed in Next Tab and also an 
            Email is sent to Student's Email Address <b>"{postData?.email}"</b>. Please check it. </div>) })
          console.log("postData: ", postData);
          const response = await UrlAsyncFetch( process.env.NEXUS_URL + 'student/add/records', 'POST', postData );
          console.log("logicResposne", response);
          triggerReset();
          window.open(process.env.NEXUS_URL+'student/shortlist?data='+btoa(JSON.stringify(postData)),'_blank'); */
        }
          setDisplayPage('VIEW');
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
        <Breadcrumb backgroundColor="#e5e5e5" data={breadcrumbItems} />
      </div>
      {displayPage==='FORM' && (<FormDetails />)}
      {displayPage==='VIEW' && (<ViewDetails data={shortlistFormDetails} />)}
      </Col>
   </Row>
  </ContainerFluid>
  <Footer />
 </div>);
};

export default ShortlistForm;