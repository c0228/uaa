import React, { useState, useEffect } from "react";
import { useParams  } from "react-router-dom";
import { ContainerFluid, Row, Col, Card, Button, getAppContext } from "e-ui-react";
import OpenSideWrapperMenu from "@Components/sidewrapper-menu-open/index.js";
import { GetUserProfile } from "@Services/AuthManager.js";
import { useAuth } from "@Hooks/useAuth.js";
import UPSCPrepCard from './components/upsc-prep-card/index.js';
import UpcomingExams from './components/upcoming-exams/index.js';
import CurrentAffairsSection from './components/sec-current-affairs/index.js';
import './index.css';

const Home = ()=>{
 const { userDetails, isLogged, lang } = useAuth();
 if(isLogged) {
      window.location.href = process.env.PROJECT_URL+lang+'/my-dashboard';
 } else {
  return (<OpenSideWrapperMenu>
  <div align="center" style={{ borderTop:'1px solid #ccc', borderBottom:'1px solid #ccc', backgroundColor:'#e1f2ff', padding:'15px', color:'#000' }}>
        <div className="h1-subtitle">
            <b>Free UPSC preparation platform with syllabus, current affairs, notes, previous year questions, 
            mock tests, and exam notifications in English and Hindi.</b>
        </div>
      </div>
      <ContainerFluid>
        <Row>
            <Col md={4}>
                <UPSCPrepCard />
                <UpcomingExams />
            </Col>
            <Col md={4}><CurrentAffairsSection /></Col>
            <Col md={4}>
                <div className="mtop15p"><h2 className="fw-bold">Mock Test Dashboard</h2><hr/></div>
            </Col>
        </Row>
      </ContainerFluid>
  </OpenSideWrapperMenu>);
 }
};

export default Home;