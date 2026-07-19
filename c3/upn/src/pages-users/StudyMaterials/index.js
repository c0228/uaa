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

const ExamsData = {
    "CAPF": {
        "id": "CAPF",
        "enLabel": "CAPF Assistant Commandants",
        "hiLabel": "",
        "icon": "fa-shield",
        "desc": "Recruitment for Assistant Commandants in Central Armed Police Forces.",
        "subjectList":[{

        }]
    },
    "CDS": {
        "id": "CDS",
        "enLabel": "Combined Defence Services",
        "hiLabel": "",
        "icon": "fa-fighter-jet",
        "desc": "Entry into the Indian Army, Navy and Air Force through CDS."
    },
    "CGSE": {
        "id": "CGSE",
        "enLabel": "Combined Geo-Scientist",
        "hiLabel": "",
        "icon": "fa-globe",
        "desc": "Recruitment of Geologists, Geophysicists and related scientific posts."
    },
    "CMS": {
        "id": "CMS",
        "enLabel": "Combined Medical Services",
        "hiLabel": "",
        "icon": "fa-user-md",
        "desc": "Recruitment of Medical Officers in Central Government services."
    },
    "CSE": {
        "id": "CSE",
        "enLabel": "Civil Services Examination",
        "hiLabel": "",
        "icon": "fa-university",
        "desc": "Recruitment for IAS, IPS, IFS and other Group A & B Civil Services."
    },
    "ESE": {
        "id": "ESE",
        "enLabel": "Engineering Services Examination",
        "hiLabel": "",
        "icon": "fa-cogs",
        "desc": "Recruitment of engineers for various Government departments."
    },
    "IES/ISS": {
        "id": "IES/ISS",
        "enLabel": "Indian Economic Service / Indian Statistical Service",
        "hiLabel": "",
        "icon": "fa-bar-chart",
        "desc": "Recruitment for Economics and Statistics professionals."
    },
    "IFoS": {
        "id": "IFoS",
        "enLabel": "Indian Forest Service",
        "hiLabel": "",
        "icon": "fa-tree",
        "desc": "Recruitment of officers for the Indian Forest Service."
    },
    "NDA": {
        "id": "NDA",
        "enLabel": "National Defence Academy & Naval Academy",
        "hiLabel": "",
        "icon": "fa-plane",
        "desc": "Entry into NDA and Naval Academy for defence officer training."
    },
    "RT": {
        "id": "RT",
        "enLabel": "Recruitment Tests",
        "hiLabel": "",
        "icon": "fa-pencil-square-o",
        "desc": "Direct recruitment examinations conducted by UPSC."
    },
    "SCRA": {
        "id": "SCRA",
        "enLabel": "Special Class Railway Apprentices",
        "hiLabel": "",
        "icon": "fa-train",
        "desc": "Special Railway Apprentices recruitment examination."
    }
};

const StudyMaterials = () =>{
 const [activeExam, setActiveExam] = useState('CAPF');
 const { userDetails, isLogged, lang } = useAuth();
 const CustomSideWrapper = isLogged? AspirantsSideWrapperMenu: OpenSideWrapperMenu;
 return (<CustomSideWrapper activeId="StudyMaterials">
    <ContainerFluid>
            <Row>
                <Col md={4}>
                    <div style={{ color:'#fff', backgroundColor:'#065fc5', padding:'8px', marginBottom:'5px' }}>
                        <b>Select UPSC Examination</b>
                    </div>
                    <ExamsList data={ExamsData} activeHandler={{ activeExam, setActiveExam }} />
                </Col>
                <Col md={8}>
                    <SMBreadcrumb label={ExamsData?.[activeExam]?.enLabel} />
                    <SubjectsList data={ExamsData?.[activeExam]?.subjectList} />
                </Col>
            </Row>
        </ContainerFluid>
 </CustomSideWrapper>);
};

export default StudyMaterials;