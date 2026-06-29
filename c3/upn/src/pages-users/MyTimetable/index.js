import React from "react";
import { ContainerFluid, Row, Col, Breadcrumb, Icon } from "e-ui-react";
import AspirantsSideWrapperMenu from "@Components/sidewrapper-menu-aspirants/index.js";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@AppRoutes/NavbarList.js';
import { useAuth } from "@Hooks/useAuth.js";

const MyTimeTable = () =>{
 const { userDetails, isLogged, lang } = useAuth();
 return (<AspirantsSideWrapperMenu activeId="MyDashboard">
    <ContainerFluid>
            <Row>
                <Col md={12}>
                    <Breadcrumb backgroundColor="#f5f2f0" 
                        data={[{ label: (<><Icon type="FontAwesome" name="fa-dashboard" size={12} color="#ed3d0e" style={{ marginRight:'5px' }} /> 
                                             <span style={{ color:'#ed3d0e'}}><b>My Dashboard</b></span></>), url:'#' },
                                                { label:(<><Icon type="FontAwesome" name="fa-calendar" size={12} color="#000" style={{ marginRight:'5px' }} /> 
                                                <span style={{ color:'#000'}}><b>My Timetable</b></span></>), url:'#' }]} />
                </Col>
            </Row>
        </ContainerFluid>
 </AspirantsSideWrapperMenu>);
};

export default MyTimeTable;