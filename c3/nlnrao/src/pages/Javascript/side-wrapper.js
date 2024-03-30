import React from "react";
import { Link } from "react-router-dom";
/* import { Colors, UrlParams, SideWrapperNavbar, SideWrapperMenu, 
    SideWrapperPage, SideWrapperHeader, SideWrapperBody, AccordianListItems } from "e-ui-react"; */
import { Button, ContainerFluid, Row, Col } from "e-ui-react";
import Header, { LogoTitle } from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import { SideWrapperData } from '@StaticData/javascript-menu.js';

const SideWrapper = ({ children }) =>{
 return (<>
 {/*<SideWrapperNavbar barTheme="outline-primary">
        <SideWrapperMenu>
          <AccordianListItems 
                highlightColor={Colors.danger} 
                data={SideWrapperData} 
                selectKey="url" 
                selectValue={UrlParams().basePath} />
        </SideWrapperMenu>
        <SideWrapperPage>
            <SideWrapperHeader 
                isOpen={{
                xs: false,
                sm: false,
                xxl: true,
                xl: true
                }}
                colorConfig={{ backgroundColor:'#7f1231', color:'#fff' }}
                title={<LogoTitle />} >    
            </SideWrapperHeader>
            <SideWrapperBody>
               {children}
            </SideWrapperBody>
        </SideWrapperPage>
            </SideWrapperNavbar>*/}
    <Header menulinks={HeaderMenu} activeId="Home" />
    <ContainerFluid>
        <Row>
            <Col>
                <div className="mtop15p">
                    <Link to={process.env.PROJECT_URL}>
                        <Button type="outline-primary" size={11} label={<b>Go Back</b>} />
                    </Link>
                </div>
            </Col>
        </Row>
    </ContainerFluid>
 </>);
};

export default SideWrapper; 