import React, { useContext } from "react";
import { ContainerFluid, Row, Col } from "e-ui-react";
import { ProfileContext } from "@Components/profile-card/index.js";
import ResumeHeader, { ResumeSubHeader } from '@Components/profile-card/components/resume/components/resume-header/index.js';
import GoBack from "./components/go-back/index.js";
import ListedSummary from "./components/listed-summary/index.js";
import ProfileCard from "./components/profile-card/index.js";
import ProjectList from "./components/project-list/index.js";
import TechStack from "./components/tech-stack/index.js";
import Academics from "./components/academics/index.js";
import WorkExperience from "./components/work-exp/index.js";
import ProjectOverview from "./components/projects-overview/index.js";
import './index.css';

const Resume = () =>{
 const { resumeVal } = useContext(ProfileContext);
 return (<div className="resume-overlay" style={{ width: resumeVal }}>
 <ContainerFluid style={{ marginTop:'15px', marginBottom:'15px' }}>
     <Row>
         <Col xxl={2} xl={3} lg={3} sm={3}>
            {/* Left Container */}
            <GoBack />
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