import React, { useState, useEffect } from "react";
import { ContainerFluid, Row, Col } from "e-ui-react";
import SocialLinks from "./components/SocialLinks/index.js";
import './index.css';

const Bottom = () =>{
 const [quickLinks, setQuickLinks] = useState(["SEO Optimization Techniques", "HTTP Status Codes",
    "Tech Ecosystem Timelines","Ultimate Java CheatSheet", "Classification of Databases", "Top 200 Linux Commands",
    "Web3 & Blockchain Roadmap", "Frontend Performance Optimization Techniques", "Ultimate Git CheatSheet for Teams", 
    "Top 100 Docker Commands for DevOps & Developers", "Kubernetes for Developers: Cheatsheet & Concepts",
    "Cloud Cost Optimization Guide (AWS, Azure, GCP)"]);
 useEffect(()=>{
  setQuickLinks([...quickLinks].sort());
 },[]);
 return (<div>
     <div className="bis-bottom-container" style={{ paddingTop:'35px', paddingBottom:'35px' }}>
  <ContainerFluid>
    <Row>
      <Col md={12}>
        <div align="center" style={{ marginBottom:'25px' }}><b>QUICK USEFUL LINKS</b></div>
      </Col>
    </Row>
    <Row>
    {quickLinks?.map((qL)=>{
      return (
        <Col md={2}>
          <div className="bis-bottom-container-center-url"><a href={process.env.PROJECT_URL} >{qL}</a></div>
        </Col>);
    })}
    </Row>
  </ContainerFluid>
 </div>
 </div>);
};

export default Bottom;