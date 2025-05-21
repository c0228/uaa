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
        <Item label="Code Splitting & Tree Shaking" href="tech/frontend/code-splitting-and-tree-shaking" />
        <Item label="Props Drilling vs Context API" href="tech/frontend/props-drilling-vs-context-api" />
        <Item label="Content Security Policy (CSP)" href="tech/frontend/content-security-policy-csp" />
        <Item label="Image Optimization Techniques" href="tech/frontend/image-optimization-techniques" />
        <Item label="Micro-Frontend" href="tech/frontend/micro-frontend" />
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
        <Heading label="Backend" href="#" />
        <Item label="Ultimate Java CheatSheet" href="tech/java/ultimate-java-cheatsheet" />
        <Item label="Hexagonal Architecture" href="tech/system-design/hexagonal-architecture" />
        <Item label="SOLID Principles" href="tech/system-design/solid-principles" />
        <Item label="Debounce vs Throttle" href="tech/middleware/api-design/debounce-vs-throttle" />
        <Item label="Serverless vs Containerized Backends" href="tech/cloud/serverless-vs-containerized-backends" />
        <Item label="Backpressure in Streams" href="tech/node-js/back-pressure-in-streams" />
        <Item label="Message Brokers" href="tech/system-design/message-brokers" />
        
      </Col>
      <Col md={3}>
        <Heading label="FullStack" href="#" />
        <Item label="Tech Ecosystem Timelines" href="tech/frontend/tech-ecosystem-timelines" />
        <Item label="BFF (Backend for Frontend) Architecture" href="tech/frontend/backend-for-frontend-bff-architecture" />
        <Item label="CQRS & Event Sourcing" href="tech/system-design/cqrs-and-event-sourcing" />
        <Item label="Webhooks & Event Streams" href="tech/system-design/webhooks-and-event-streams" />
        <Item label="Distributed Systems & Fault Tolerance" href="tech/system-design/distributed-systems-and-fault-tolerance" />
        <Item label="CQRS (Command Query Responsibility Segregation) Pattern" href="tech/system-design/cqrs-command-query-responsibility-segregation-pattern" />
      </Col>
    </Row>
    <Row className="mtop35p">
      <Col md={3}>
        <Heading label="React Native Mobile Development" />
        <Item label="Memory Leak Prevention"  href="tech/react-native/memory-leak-prevention" />
        <Item label="React Native with Redux Saga"  href="tech/react-native/react-native-with-redux-saga" />
        <Item label="Handling Offline Data & Syncing"  href="tech/react-native/handling-offline-data-and-storage" />
        <Item label="GraphQL & Apollo Client"  href="tech/react-native/graph-ql-and-apollo-client" />
        <Item label="Preventing Man-in-the-Middle (MITM) Attacks"  href="tech/react-native/preventing-mitm" />
        <Item label="Virtualized Rendering for large lists"  href="tech/react-native/virtualized-rendering-for-large-lists" />
        <Item label="DevOps Pipeline: App Store & Play Store"  href="tech/react-native/devops-pipeline-app-store-and-play-store" />
      </Col>
      <Col md={3}>
        <Heading label="DevOps" />
        <Item label="DevOps vs DevSecOps"  href="tech/devops/devops-vs-devsecops" />
        <Item label="Top 200 Linux Commands"  href="tech/devops/top-linux-commands" />
        <Item label="Kubernetes for Developers" href="tech/devops/kubernetes-for-developers" />
        <Item label="Top 100 Docker Commands" href="tech/devops/top-docker-commands" />
        <Item label="Ultimate Git CheatSheet for Teams" href="tech/devops/ultimate-git-cheatsheet-for-teams" />
        <Item label="Forward proxy vs Reverse proxy"  href="tech/devops/forward-proxy-vs-reverse-proxy" />
        <Item label="Zero-Downtime Deployments"  href="tech/devops/zero-downtime-deployments" />
      </Col>
      <Col md={3}>
        <Heading label="Databases" />
        <Item label="Classification of Databases" href="tech/databases/classification-of-databases" />
        <Item label="ACID & BASE Properties" href="tech/databases/acid-and-base-properties" />
        <Item label="Connection Pooling" href="tech/databases/connection-pooling" />
        <Item label="Database Optimization Techniques" href="tech/databases/database-optimization-techniques" />
        <Item label="Normalization & Denormalization" href="tech/databases/normalization-and-denormalization" />
        <Item label="Optimistic vs Pessimistic Locking" href="tech/databases/optimistic-vs-pessimistic-locking" />
        <Item label="OLAP vs OLTP Databases" href="tech/databases/olap-vs-oltp-databases" />
        
      </Col>
      <Col md={3}>
        <Heading label="Web 3.0 & Blockchain" />
        <Item label="Web3 & Blockchain Roadmap" href="tech/web3.0/blockchain/roadmap" />
        <Item label="Virtual Machines: EVM vs SVM" href="tech/web3.0/terminologies/virtual-machines-evm-vs-svm" />
        <Item label="Layer 1 & Layer 2 Solutions" href="tech/web3.0/terminologies/layer1-vs-layer2-blockchains" />
        <Item label="Cross-Chain Technology" href="tech/web3.0/terminologies/cross-chain-technology" />
        <Item label="Blockchain Governance" href="tech/web3.0/terminologies/blockchain-governance" />
        <Item label="Web 3.0 Browsers" href="tech/web3.0/terminologies/web-3-browsers" />
        <Item label="Decentralized Storage (IPFS)" href="tech/web3.0/terminologies/decentralized-storage-ipfs" />

      </Col>
    </Row>
    <Row className="mtop35p">
      <Col md={3}>
        <Heading label="Networking" />
        <Item label="OSI vs. TCP/IP Models" href="#" />
        <Item label="IP Addressing and Subnetting" href="#" />
        <Item label="Routing and Switching Basics" href="#" />
        <Item label="DNS and How It Works" href="#" />
        <Item label="Virtual Private Networks (VPNs)" href="#" />
        <Item label="LAN vs WAN" href="#" />
        <Item label="NAT (Network Address Translation)" href="#" />
        <Item label="Software-Defined Networking (SDN)" href="#" />
      </Col>
      <Col md={3}>
        <Heading label="Machine Learning" />
        <Item label="Decision Trees vs Random Forests" href="#" />
        <Item label="K-Means Clustering" href="#" />
        <Item label="k-Nearest Neighbors (k-NN)" href="#" />
        <Item label="Artificial Neural Networks (ANNs)" href="#" />
        <Item label="Convolutional Neural Networks (CNNs)" href="#" />
        <Item label="Recurrent Neural Networks (RNNs)" href="#" />
        <Item label="Generative Adversarial Networks (GANs)" href="#" />
        <Item label="Hidden Markov Models (HMMs)" href="#" />
      </Col>
      <Col md={3}>
        <Heading label="Cloud Deployments" />
        <Item label="Public, Private & Hybrid Cloud Deployments" href="#" />
        <Item label="AWS vs Azure vs Google Cloud" href="#" />
        <Item label="Blue-Green Deployment" href="#" />
        <Item label="Cloud Cost Optimization Guide (AWS, Azure, GCP)" href="#" />
        <Item label="HashiCorp Vault for Secret Management" href="#" />
        <Item label="Edge Computing" href="#" />
        <Item label="Infrastructure as Code (IaC)" href="#" />
        <Item label="Prometheus and Grafana" href="#" />
      </Col>
      <Col md={3}>
        <Heading label="CyberSecurity" />
        <Item label="CIA (Confidentiality, Integrity, Availability) Triad" href="#" />
        <Item label="Advanced Persistent Threats (APT)" href="#" />
        <Item label="MITRE ATT&CK Framework" href="#" />
        <Item label="Purple Teaming" href="#" />
        <Item label="Open Source Tools for Ethical Hacking" href="#" />
        <Item label="SIEM vs SOAR" href="#" />
        <Item label="Zero Trust and API Access Control" href="#" />
        <Item label="Subresource Integrity (SRI)" href="#" />
      </Col>
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