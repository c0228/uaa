import React from "react";
import { ContainerFluid, Row, Col } from "e-ui-react";
import Header from '@Pages/Header/index.js';

const Home = ()=>{
 return (<>
 <Header activeMenu="home" />
    <ContainerFluid>
        <Row>
            <Col>
                Home
            </Col>
        </Row>
        <Row>
            
        </Row>
    </ContainerFluid>
 </>);
};

export default Home;