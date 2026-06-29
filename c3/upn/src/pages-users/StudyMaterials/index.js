import React from "react";
import { ContainerFluid, Row, Col, Breadcrumb, Icon } from "e-ui-react";
import AspirantsSideWrapperMenu from "@Components/sidewrapper-menu-aspirants/index.js";
import OpenSideWrapperMenu from "@Components/sidewrapper-menu-open/index.js";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@AppRoutes/NavbarList.js';
import { useAuth } from "@Hooks/useAuth.js";

const StudyMaterials = () =>{
 const { userDetails, isLogged, lang } = useAuth();
 const CustomSideWrapper = isLogged? AspirantsSideWrapperMenu: OpenSideWrapperMenu;
 return (<CustomSideWrapper activeId="StudyMaterials">
    <ContainerFluid>
            <Row>
                <Col md={12}></Col>
            </Row>
        </ContainerFluid>
 </CustomSideWrapper>);
};

export default StudyMaterials;