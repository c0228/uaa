import React, { useState } from "react";
import { ContainerFluid, Row, Col, Icon, Dropdown } from "e-ui-react";
import Header from '@Pages/Header/index.js';
import Search from './components/search/index.js';

const FindUniversities = ()=>{
 return (<>
    <Header activeMenu="findUniversities" />
    <ContainerFluid style={{  backgroundColor:'#df3a56' }}>
        <Row>
            <Col style={{ padding: '15px', color:'#fff', margin: '25px 0px 25px' }}>
                <div align="center" style={{ fontSize:'26px' }}>Welcome to Universities and Courses - Your global education companion.</div>
            <h3 align="center" className="bs-header" style={{ }}>
                Explore universities and courses worldwide, 
            tailored to your IELTS / TOEFL / Duolingo scores. Empowering your educational aspirations with accurate insights and expert guidance. 
            Your journey to academic excellence starts here. Dive in and shape your future today!</h3>
            </Col>
        </Row>
    </ContainerFluid>
    <Search />
  </>);
};

export default FindUniversities;