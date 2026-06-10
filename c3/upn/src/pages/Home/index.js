import React from "react";
import { ContainerFluid, Row, Col, Card, Button  } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@AppRoutes/NavbarList.js';
import UPSCPrepCard from './components/upsc-prep-card/index.js';
import CurrentAffairsSection from './components/sec-current-affairs/index.js';
import './index.css';

const Home = ()=>{
 return (<>
 <Header menulinks={HeaderMenu()} activeId="Home" />
 <div align="center" style={{ borderTop:'1px solid #ccc', borderBottom:'1px solid #ccc', backgroundColor:'#e1f2ff', padding:'15px', color:'#000' }}>
    <div className="h1-subtitle">Free UPSC preparation platform with syllabus, current affairs, notes, previous year questions, 
        mock tests, and exam notifications in English and Hindi.</div>
 </div>
 <ContainerFluid>
    <Row>
        <Col md={4}><UPSCPrepCard /></Col>
        <Col md={4}><CurrentAffairsSection /></Col>
        <Col md={4}>
            <div className="mtop15p"><h2 className="fw-bold">Mock Test Dashboard</h2><hr/></div>
        </Col>
    </Row>
 </ContainerFluid>
 </>);
};

export default Home;