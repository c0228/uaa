import React from "react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import { ContainerFluid, Row, Col, Icon } from "e-ui-react";

const HeaderContent = ()=>{
    return(<>
        <div style={{backgroundColor:"#006EB3", color:"white"}}>
            <ContainerFluid>
                <Row>
                    <Col xl={1} xxl={1}>
                    </Col>
                    <Col xl={7} xxl={7}>
                        <div className="mtop5p mbot5p" align="left">
                            <Icon type="FontAwesome" name="fa-envelope" size={16} /> info@vkAbroadconsultancy.com
                        </div>
                    </Col>
                    <Col xl={4} xxl={4}>
                    <div className="mtop5p mbot5p" align="left">
                        <Icon type="FontAwesome" name="fa-plane" size={20} style={{ marginRight: '10px' }} />
                        <span style={{ marginRight: '10px' }}>USA</span>
                        <span style={{ marginRight: '10px' }}>UK</span>
                        <span style={{ marginRight: '10px' }}>AUS</span>
                        <span style={{ marginRight: '10px' }}>CANADA</span>
                        <span>+ Many More</span>
                    </div>
                    </Col>
                </Row>
            </ContainerFluid>
        </div>
    </>);
};

const AboutUs = ()=>{
 return (<>
 <HeaderContent />
 <Header menulinks={HeaderMenu} activeId="AboutUs" />

 </>);
};

export default AboutUs;