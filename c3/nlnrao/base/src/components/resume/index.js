import React, { useEffect, useContext } from "react";
import { ContainerFluid, Row, Col, Icon, Button, getAppContext  } from "e-ui-react";
import ResumeHeader, { ResumeSubHeader } from './components/resume-header/index.js';
import ListedSummary from "./components/listed-summary/index.js";
import ProfileCard from "./components/profile-card/index.js";
import ProjectList from "./components/project-list/index.js";
import TechStack from "./components/tech-stack/index.js";
import Academics from "./components/academics/index.js";
import WorkExperience from "./components/work-exp/index.js";
import ProjectOverview from "./components/projects-overview/index.js";
import './index.css';

const Resume = () =>{
 const { contextData, setContextData } = getAppContext();

 useEffect(()=>{
   updateResumeStatus(contextData?.resumeStatus);
 },[contextData?.resumeStatus]);

 const updateResumeStatus = (status)=>{
   let pageTitle = 'NellutlaLNRao | My Tech';
   if(status ==='open'){
	   pageTitle = "NellutlaLNRao | My Resume";
   }
   document.title = pageTitle;
   document.body.style.overflow = (status ==='open')?'hidden':'scroll';
 };
 

 return (<div className="resume-overlay" style={{ width: ((contextData?.resumeStatus ==='open')?'100%':'0%') }}>
 <ContainerFluid style={{ marginTop:'15px', marginBottom:'15px' }}>
     <Row>
         <Col xxl={2} xl={3} lg={3} sm={3}>
            {/* Left Container */}
            <Button type="outline-light" size={11} onClick={()=>setContextData({ resumeStatus: 'closed' })}>
               <Icon type="FontAwesome" name="fa-arrow-left" size={12} style={{ marginRight:'5px' }} />
                  <b>Go Back</b>
            </Button>
            <ProfileCard />
            <ProjectList />
         </Col>
         <Col xxl={6} xl={4} lg={3} sm={3}>
            <ResumeHeader title="My Technical Experience Summary" />
            <ListedSummary />
            
            <ResumeHeader title="My Technical Stack (Skills Overview)" />
            <TechStack />

            <ResumeHeader title="My Academic Details" />
            <Academics />
            <ResumeHeader title="My Work Experience" />
            <WorkExperience />
         </Col>
         <Col xxl={4} xl={5} lg={3} sm={3}>
            <ResumeHeader title="My Professional Experience" />
            <ProjectOverview />
         </Col>
     </Row>
 </ContainerFluid>
</div>);
};

export default Resume;