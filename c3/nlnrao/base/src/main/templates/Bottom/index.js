import React, { useState, useEffect } from "react";
import { ContainerFluid, Row, Col } from "e-ui-react";
import SocialLinks from "./components/SocialLinks/index.js";
import './index.css';

const Bottom = () =>{
 const MainTitle = ({ label }) =><div align="center" style={{ color:'#ccc' }}><h4><b>{label}</b></h4></div>
 const Heading = ({ label }) =><div style={{ color:'#999' }}><h5><b>{label}</b></h5></div>
 const Item = ({ label }) =><div className="mtop5p">{label}</div>
 const webDev = {};
 return (<div>
     <div className="bis-bottom-container" style={{ paddingTop:'45px', paddingBottom:'75px' }}>
  <ContainerFluid>
    <Row>
      <Col md={12}><MainTitle label="WEB / MOBILE DEVELOPMENT USEFUL LINKS" /></Col>
    </Row>
    <Row className="mtop15p">
      <Col md={3}>
        <Heading label="Frontend" />
        <Item label="Frontend Performance Optimization Techniques" />
        <Item label="SEO Optimization Techniques" />
      </Col>
      <Col md={3}>
        <Heading label="Middleware / API Design" />
        <Item label="HTTP Status Codes" />
        <Item label="Restful APIs" />
        <Item label="Simple JSON APIs" />
        <Item label="SOAP APIs" />
        <Item label="GraphQL" />
        <Item label="gRPC" />
        <Item label="MCP (Model Context Protocol)" />
      </Col>
      <Col md={3}>
        <Heading label="Backend" />
        <Item label="Ultimate Java CheatSheet" />
      </Col>
      <Col md={3}>
        <Heading label="FullStack" />
        <Item label="Tech Ecosystem Timelines" />
      </Col>
    </Row>
    <Row className="mtop15p">
      <Col md={3}><Heading label="Mobile Development" /></Col>
      <Col md={3}>
        <Heading label="DevOps" />
        <Item label="Top 200 Linux Commands" />
        <Item label="Cloud Cost Optimization Guide (AWS, Azure, GCP)" />
        <Item label="Kubernetes for Developers: Cheatsheet & Concepts" />
        <Item label="Top 100 Docker Commands for DevOps & Developers" />
        <Item label="Ultimate Git CheatSheet for Teams" />
      </Col>
      <Col md={3}>
        <Heading label="Databases" />
        <Item label="Classification of Databases" />
      </Col>
      <Col md={3}>
        <Heading label="Web 3.0 & Blockchain" />
        <Item label="Web3 & Blockchain Roadmap" />
      </Col>
    </Row>
    <Row className="mtop15p">
      <Col md={3}><Heading label="Networking" /></Col>
      <Col md={3}><Heading label="Machine Learning" /></Col>
      <Col md={3}><Heading label="Game Development" /></Col>
      <Col md={3}><Heading label="CyberSecurity" /></Col>
    </Row>
  </ContainerFluid>
 </div>
 </div>);
};

export default Bottom;