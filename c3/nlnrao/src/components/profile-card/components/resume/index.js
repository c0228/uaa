import React, { useContext } from "react";
import { ContainerFluid, Row, Col } from "e-ui-react";
import { ProfileContext } from "@Components/profile-card/index.js";
import LeftContainer from "./components/left-container/index.js";
import './index.css';

const Resume = () =>{
 const { resumeVal } = useContext(ProfileContext);
 return (<div className="resume-overlay" style={{ width: resumeVal }}>
 <ContainerFluid style={{ marginTop:'15px', marginBottom:'15px' }}>
     <Row>
         <Col xxl={3} xl={3} lg={3} sm={3}>
            <LeftContainer />
         </Col>
     </Row>
 </ContainerFluid>
</div>);
};

export default Resume;