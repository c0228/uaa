import React from "react";
import { ContainerFluid, Row, Col, Breadcrumb, Icon } from "e-ui-react";
import AspirantsSideWrapperMenu from "@Components/sidewrapper-menu-aspirants/index.js";
import OpenSideWrapperMenu from "@Components/sidewrapper-menu-open/index.js";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@AppRoutes/NavbarList.js';
import { useAuth } from "@Hooks/useAuth.js";
import ExamsList from "./components/exams-list/index.js";

const StudyMaterials = () =>{
 const { userDetails, isLogged, lang } = useAuth();
 const CustomSideWrapper = isLogged? AspirantsSideWrapperMenu: OpenSideWrapperMenu;
 return (<CustomSideWrapper activeId="StudyMaterials">
    <ContainerFluid>
            <Row>
                <Col md={4}>
                <div style={{ color:'#fff', backgroundColor:'#065fc5', padding:'8px', marginBottom:'5px' }}>
                    <b>Select UPSC Examination</b></div>
                <ExamsList />
                </Col>
            </Row>
        </ContainerFluid>
 </CustomSideWrapper>);
};

export default StudyMaterials;