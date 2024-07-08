import React, { useContext } from "react";
import { ContainerFluid, Row, Col } from "e-ui-react";
import { ProfileContext } from "@Components/profile-card/index.js";
import ResumeHeader, { ResumeSubHeader } from '@Components/profile-card/components/resume/components/resume-header/index.js';
import LeftContainer from "./components/left-container/index.js";
import './index.css';

const Resume = () =>{
 const { resumeVal } = useContext(ProfileContext);
 return (<div className="resume-overlay" style={{ width: resumeVal }}>
 <ContainerFluid style={{ marginTop:'15px', marginBottom:'15px' }}>
     <Row>
         <Col xxl={2} xl={3} lg={3} sm={3}>
            <LeftContainer />
         </Col>
         <Col xxl={2} xl={4} lg={3} sm={3}>
            <ResumeHeader title="My Technical Experience Summary" />
            <ResumeSubHeader title="Professional Summary" />
            <ResumeSubHeader title="Career Highlights" />
            <ResumeSubHeader title="Technical Highlights" />

            <ResumeHeader title="My Technical Stack (Skills Overview)" />
            <ResumeSubHeader title="Web Application Development" />
            <ResumeSubHeader title="Mobile Application Development" />
            <ResumeSubHeader title="Desktop Application Development" />
            <ResumeSubHeader title="Database Technologies" />
            <ResumeSubHeader title="Networking Communication Solutions" />
            <ResumeSubHeader title="Cloud Platform Solutions" />
            <ResumeSubHeader title="Other Technologies" />

            <ResumeHeader title="My Academic Details" />
            <ResumeHeader title="My Work Experience" />
         </Col>
         <Col xxl={2} xl={5} lg={3} sm={3}>
            <ResumeHeader title="My Professional Experience" />
         </Col>
     </Row>
 </ContainerFluid>
</div>);
};

export default Resume;