import React, { useState } from "react";
import { ContainerFluid, Row, Col, Breadcrumb, Icon } from "e-ui-react";
import AspirantsSideWrapperMenu from "@Components/sidewrapper-menu-aspirants/index.js";
import OpenSideWrapperMenu from "@Components/sidewrapper-menu-open/index.js";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@AppRoutes/NavbarList.js';
import { useAuth } from "@Hooks/useAuth.js";
import ExamsList from "./components/exams-list/index.js";
import SMBreadcrumb from "./components/breadcrumb/index.js";
import SubjectsList from "./components/list-subjects/index.js";
import { ExamsData } from "./data.js";

const StudyMaterials = () =>{
 const [activeExam, setActiveExam] = useState('CAPF');
 const { userDetails, isLogged, lang } = useAuth();
 const CustomSideWrapper = isLogged? AspirantsSideWrapperMenu: OpenSideWrapperMenu;
 return (<CustomSideWrapper activeId="StudyMaterials">
    <div style={{ marginRight:'8px' }}>
    <ContainerFluid>
            <Row>
                <Col md={4}>
                    <div style={{ color:'#fff', backgroundColor:'#333', padding:'8px', marginBottom:'5px' }}>
                        <b>{lang==='hi'?'यूपीएससी परीक्षा चुनें':'Select UPSC Examination'}</b>
                    </div>
                    <ExamsList data={ExamsData} activeHandler={{ activeExam, setActiveExam }} />
                </Col>
                <Col md={8}>
                    <SMBreadcrumb label={ExamsData?.[activeExam]?.[lang+'Label']} />
                    <SubjectsList data={ExamsData?.[activeExam]?.subjectList} />
                </Col>
            </Row>
        </ContainerFluid>
        </div>
 </CustomSideWrapper>);
};

export default StudyMaterials;