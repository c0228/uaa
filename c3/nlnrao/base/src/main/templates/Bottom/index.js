import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { ContainerFluid, Row, Col } from "e-ui-react";
import SocialLinks from "./components/SocialLinks/index.js";
import './index.css';

const Bottom = () =>{
 const Heading = ({ label }) =><div style={{ color:'#ccc' }}><h5><b>{label}</b></h5></div>
 const Item = ({ label, href }) =><div className="mtop5p">
      <a href={process.env.PROJECT_MAIN_URL+href} className="nlnrblog-bottom-item">{label}</a>
    </div>
 const webDev = {};
 return (<div>
     <div className="nlnrblog-bottom-container" style={{ paddingTop:'25px', paddingBottom:'45px' }}>
  <ContainerFluid>
    <Row>
      <Col md={12}>
        <div align="center" style={{ paddingBottom:'15px', marginBottom:'15px' }}>
          <Link className="navbar-brand" to={process.env.PROJECT_MAIN_URL} style={{ paddingTop:'0px', paddingBottom:'0px' }}>
            <span className="logo" style={{ fontSize:'28px', color:'#fff' }}>nellutlalnrao</span>
            <span className="logo" style={{ fontSize:'28px', color:'#fff' }}>.com</span>
          </Link>
        </div>
      </Col>
    </Row>
    <Row className="mtop15p">
      <Col md={3}>
        <Heading label="Frontend" />
        <Item label="Frontend Performance Optimization Techniques" href="tech/frontend/frontend-performance-optimization-techniques" />
        <Item label="SEO Optimization Techniques" href="tech/frontend/seo-optimization-techniques" />
      </Col>
      <Col md={3}>
        <Heading label="Middleware / API Design" />
        <Item label="HTTP Status Codes" href="tech/middleware/api-design/http-status-codes" />
        <Item label="Restful APIs" href="tech/middleware/api-design/restful-apis"  />
        <Item label="Simple JSON APIs" href="tech/middleware/api-design/simple-json-apis" />
        <Item label="SOAP APIs" href="tech/middleware/api-design/soap-apis" />
        <Item label="GraphQL" href="tech/middleware/api-design/graph-ql" />
        <Item label="gRPC"  href="tech/middleware/api-design/g-rpc" />
        <Item label="MCP (Model Context Protocol)" href="tech/middleware/api-design/model-context-protocol-mcp"  />
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
    <div align="center" style={{ paddingTop:'15px', borderTop:'1px solid #333', marginTop:'25px' }}>
    <Row>
      <Col md={2}></Col>
      <Col md={2}><Item label="Privacy Policy" href="privacy-policy" /></Col>
      <Col md={2}><Item label="User Agreement" href="user-agreement" /></Col>
      <Col md={2}><Item label="Terms & Conditions" href="terms-and-conditions" /></Col>
      <Col md={2}><Item label="Cookies Policy" href="cookies-policy" /></Col>
      <Col md={2}></Col>
    </Row>
    <Row>
      <Col md={2}></Col>
      <Col md={2}><Item label="Disclaimer" href="disclaimer" /></Col>
      <Col md={2}><Item label="Accessibility" href="accessibility" /></Col>
      <Col md={2}><Item label="Legal Notice" href="legal-notice" /></Col>
      <Col md={2}><Item label="Terms of Use" href="terms-of-use" /></Col>
      <Col md={2}></Col>
    </Row>
    </div>
  </ContainerFluid>
 </div>
 </div>);
};

export default Bottom;