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
        "enId": "CAPF",
        "enLabel": "CAPF Assistant Commandants",
        "hiId": "सीएपीएफ",
        "hiLabel": "सीएपीएफ सहायक कमांडर",
        "icon": "fa-shield",
        "enDesc": "Recruitment for Assistant Commandants in Central Armed Police Forces.",
        "hiDesc": "केंद्रीय सशस्त्र पुलिस बलों में असिस्टेंट कमांडेंट की भर्ती।",
        "subjectList":[{

        }]
    },
    "CDS": {
        "id": "CDS",
        "enId": "CDS",
        "enLabel": "Combined Defence Services",
        "hiId": "सीडीएस",
        "hiLabel": "संयुक्त रक्षा सेवाएँ",
        "icon": "fa-fighter-jet",
        "enDesc": "Entry into the Indian Army, Navy and Air Force through CDS.",
        "hiDesc": "सीडीएस के ज़रिए भारतीय थल सेना, नौसेना और वायु सेना में प्रवेश।",
    },
    "CGSE": {
        "id": "CGSE",
        "enId": "CGSE",
        "enLabel": "Combined Geo-Scientist",
        "hiId": "सीजीएसई",
        "hiLabel": "संयुक्त भू-वैज्ञानिक",
        "icon": "fa-globe",
        "enDesc": "Recruitment of Geologists, Geophysicists and related scientific posts.",
        "hiDesc": "भूवैज्ञानिकों, भू-भौतिकविदों और संबंधित वैज्ञानिक पदों की भर्ती।",
    },
    "CMS": {
        "id": "CMS",
        "enId": "CMS",
        "enLabel": "Combined Medical Services",
        "hiId": "सीएमएस",
        "hiLabel": "संयुक्त चिकित्सा सेवाएँ",
        "icon": "fa-user-md",
        "enDesc": "Recruitment of Medical Officers in Central Government services.",
        "hiDesc": "केंद्र सरकार की सेवाओं में मेडिकल अधिकारियों की भर्ती।",
    },
    "CSE": {
        "id": "CSE",
        "enId": "CSE",
        "enLabel": "Civil Services Examination",
        "hiId": "सीएसई",
        "hiLabel": "सिविल सेवा परीक्षा",
        "icon": "fa-university",
        "enDesc": "Recruitment for IAS, IPS, IFS and other Group A & B Civil Services.",
        "hiDesc": "आईएएस, आईपीएस, आईएफएस और अन्य ग्रुप ए और बी सिविल सेवाओं के लिए भर्ती",
    },
    "ESE": {
        "id": "ESE",
        "enId": "ESE",
        "enLabel": "Engineering Services Examination",
        "hiId": "ईएसई",
        "hiLabel": "इंजीनियरिंग सेवा परीक्षा",
        "icon": "fa-cogs",
        "enDesc": "Recruitment of engineers for various Government departments.",
        "hiDesc": "विभिन्न सरकारी विभागों के लिए इंजीनियरों की भर्ती।",
    },
    "IES/ISS": {
        "id": "IES/ISS",
        "enId": "IES/ISS",
        "enLabel": "Indian Economic Service / Indian Statistical Service",
        "hiId": "आईईएस/आईएसएस",
        "hiLabel": "भारतीय आर्थिक सेवा / भारतीय सांख्यिकीय सेवा",
        "icon": "fa-bar-chart",
        "enDesc": "Recruitment for Economics and Statistics professionals.",
        "hiDesc": "अर्थशास्त्र और सांख्यिकी पेशेवरों की भर्ती।",
    },
    "IFoS": {
        "id": "IFoS",
        "enId": "IFoS",
        "enLabel": "Indian Forest Service",
        "hiId": "आई.एफओ.एस",
        "hiLabel": "भारतीय वन सेवा",
        "icon": "fa-tree",
        "enDesc": "Recruitment of officers for the Indian Forest Service.",
        "hiDesc": "भारतीय वन सेवा के लिए अधिकारियों की भर्ती।",
    },
    "NDA": {
        "id": "NDA",
        "enId": "NDA",
        "enLabel": "National Defence Academy & Naval Academy",
        "hiId": "एनडीए",
        "hiLabel": "राष्ट्रीय रक्षा अकादमी और नौसेना अकादमी",
        "icon": "fa-plane",
        "enDesc": "Entry into NDA and Naval Academy for defence officer training.",
        "hiDesc": "डिफेंस ऑफिसर ट्रेनिंग के लिए एनडीए और नेवल एकेडमी में प्रवेश।",
    },
    "RT": {
        "id": "RT",
        "enId": "RT",
        "enLabel": "Recruitment Tests",
        "hiId": "आर टी",
        "hiLabel": "भर्ती परीक्षाएं",
        "icon": "fa-pencil-square-o",
        "enDesc": "Direct recruitment examinations conducted by UPSC.",
        "hiDesc": "यूपीएससी द्वारा आयोजित सीधी भर्ती परीक्षाएं।",
    },
    "SCRA": {
        "id": "SCRA",
        "enId": "SCRA",
        "enLabel": "Special Class Railway Apprentices",
        "hiId": "एससीआरए",
        "hiLabel": "स्पेशल क्लास रेलवे अप्रेंटिस",
        "icon": "fa-train",
        "enDesc": "Special Railway Apprentices recruitment examination.",
        "hiDesc": "विशेष रेलवे अप्रेंटिस भर्ती परीक्षा।",
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
 </CustomSideWrapper>);
};

export default StudyMaterials;