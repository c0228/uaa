import React from "react";
import { ContainerFluid, Row, Col, Breadcrumb, Colors, Button, Select, Card, Switch } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import BlogArticleHeader from '@Components/blog-article-header/index.js';
import OrderList from '@Components/order-list/index.js';

const SDComponents = ({ meta }) =>{
  return (<div>
  <Header menulinks={HeaderMenu} activeId="SystemDesign" />
  <ContainerFluid>
    <Row>
      <Col md={8}>
        <BlogArticleHeader metaData={meta} />
        
        <div className="mtop15p lh36p" style={{ fontSize:'16px' }}>
            <i>System Design is the process of defining the architecture, components, modules, interfaces, and data flow 
            for a system to meet specified requirements. It ensures the system is <u>scalable</u>, <u>reliable</u>, <u>maintainable</u>  and <u>efficient</u>.</i>
        </div>

        <div className="mtop15p lh25p">
            The Key phases of System Design are
            <ol>
                <li className="mtop15p">High-Level Design (HLD)</li>
                <li className="mtop15p">Low-Level Design (LLD)</li>
            </ol>
        </div>

        <div className="mtop15p">
            <div align="center"><h3><b>High-Level Design (HLD)</b></h3></div>
            <div className="pad15p lh28p">
                <div><u>High-Level Design (HLD)</u> defines how different modules or services interact and focuses 
                on the overall system architecture and major components.</div>

                <div align="center" className="mtop15p"><h4><b>Key Activities</b></h4></div>

                <div className="list-group">
                <div className="list-group-item" style={{ backgroundColor:'#eee' }}>

                    <div className="mtop15p"><h5><b>Summary</b></h5></div>
                    <div className="mtop15p">
                        <OrderList data={[(<div><b>Requirements Analysis:</b> Understand functional and non-functional requirements.</div>),
                        (<div><b>System Architecture:</b> Choose the architecture (e.g., monolithic, microservices, event-driven).</div>),
                        (<div><b>Component Design:</b> Identify major components (e.g., databases, APIs, caching layers).</div>),
                        (<div><b>Data Flow:</b> Define how data moves between components.</div>),
                        (<div><b>Scalability and Performance:</b> Plan for scaling (horizontal/vertical) and performance optimization.</div>),
                        (<div><b>Security:</b> Define authentication, authorization, and encryption mechanisms.</div>),
                        (<div><b>Deployment Strategy:</b> Plan for deployment (e.g., cloud, on-premise) and CI/CD pipelines.</div>)]} />
                    </div>

                </div>
                </div>

                <div align="center" className="mtop15p"><h4><b>Design Components</b></h4></div>

                <div className="list-group">
                <div className="list-group-item" style={{ backgroundColor:'#eee' }}>
                
                    <div className="mtop15p"><h5><b>Summary</b></h5></div>
                    <div className="mtop15p">
                        <OrderList data={[(<div><b>System Architecture:</b> Monolithic, microservices, layered, event-driven, etc.</div>),
                            (<div><b>Data Storage:</b> SQL vs. NoSQL databases, caching (Redis, Memcached).</div>),
                            (<div><b>APIs:</b> REST, GraphQL, gRPC for communication between components.</div>),
                            (<div><b>Scalability:</b> Horizontal vs. vertical scaling, load balancing.</div>),
                            (<div><b>Security:</b> Authentication (OAuth, JWT), authorization (RBAC), encryption (SSL/TLS).</div>),
                            (<div><b>Deployment:</b> Containerization (Docker), orchestration (Kubernetes), CI/CD pipelines.</div>),
                            (<div><b>Monitoring and Logging:</b> Tools like Prometheus, Grafana, ELK Stack.</div>)]} />
                    </div>

                </div>
                </div>

                <div className="mtop15p"><h4><b>Tools and Technologies</b></h4></div>
                <div className="mtop15p">
                    <code><b>Diagrams</b></code> (<u>example</u> - UML, flowcharts), <code><b>Architecture design tools</b></code> (<u>example</u> - Lucidchart, Draw.io)
                </div>

            </div>
        </div>

        <div className="mtop15p">
            <div align="center"><h3><b>Low-Level Design (LLD)</b></h3></div>
            <div className="pad15p lh28p">
                <div><u>Low-Level Design (LLD)</u> specifies how each component works internally and focuses on the detailed implementation of 
                individual components or modules.</div>
                
                <div align="center" className="mtop15p"><h4><b>Key Activities</b></h4></div>

                <div className="list-group">
                <div className="list-group-item" style={{ backgroundColor:'#eee' }}>

                    <div className="mtop15p"><h5><b>Summary</b></h5></div>
                    <div className="mtop15p">
                        <OrderList data={[(<div><b>Class Diagrams:</b> Define classes, methods, and their relationships.</div>),
                            (<div><b>Database Schema Design:</b> Create detailed table structures, relationships, and indexes.</div>),
                            (<div><b>Algorithm Design:</b> Specify algorithms and data structures for specific tasks.</div>),
                            (<div><b>API Specifications:</b> Define detailed API endpoints, request/response formats, and error handling.</div>),
                            (<div><b>Error Handling:</b> Plan for edge cases and failure scenarios.</div>),
                            (<div><b>Code-Level Logic:</b> Write pseudocode or detailed logic for functions and modules.</div>)]} />
                    </div>

                </div>
                </div>

                <div align="center" className="mtop15p"><h4><b>Design Components</b></h4></div>

                <div className="list-group">
                <div className="list-group-item" style={{ backgroundColor:'#eee' }}>

                    <div className="mtop15p"><h5><b>Summary</b></h5></div>
                    <div className="mtop15p">
                        <OrderList data={[(<div><b>Class Diagrams:</b> UML diagrams showing classes, methods, and relationships.</div>),
                            (<div><b>Database Schema:</b> Detailed table designs, relationships (1:1, 1:N , N:N ), and indexing.</div>),
                            (<div><b>Algorithms:</b> Sorting, searching, or custom logic for specific tasks.</div>),
                            (<div><b>API Details:</b> Endpoint definitions, request/response formats, status codes.</div>),
                            (<div><b>Error Handling:</b> Edge cases, retry mechanisms, and fallback strategies.</div>),
                            (<div><b>Code Logic:</b> Pseudocode or detailed implementation logic for modules.</div>)]} />
                    </div>

                </div>
                </div>

                <div className="mtop15p"><h4><b>Tools and Technologies</b></h4></div>
                <div className="mtop15p">
                    <code><b>Class diagram tools</b></code> (<u>example</u> - Visual Paradigm), <code><b>Database design tools</b></code> (<u>example</u> - MySQL Workbench), <code><b>Pseudocode editors</b></code></div>
            </div>
        </div>

        <div className="mtop15p">
            <div align="center"><h3><b>Differences between HLD and LLD</b></h3></div>
            <div className="table-responsive-sm">
                <table className="table mtop15p">
                  <thead>
                    <tr style={{ backgroundColor:'#eee' }}>
                        <td><b>Aspect</b></td>
                        <td><b>High-Level Design (HLD)</b></td>
                        <td><b>Low-Level Design (LLD)</b></td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                        <td><b>Scope</b></td>
                        <td>Broad system architecture and components</td>
                        <td>Detailed implementation of specific components</td>
                    </tr>
                    <tr>
                        <td><b>Focus</b></td>
                        <td>"What" the system does and how components interact.</td>
                        <td>"How" each component works internally.</td>
                    </tr>
                    <tr>
                        <td><b>Output</b></td>
                        <td>System diagrams, flowcharts, and APIs.</td>
                        <td>Class diagrams, pseudocode, and detailed logic.</td>
                    </tr>
                    <tr>
                        <td><b>Audience</b></td>
                        <td>Architects, stakeholders, and team leads.</td>
                        <td>Developers and Engineers.</td>
                    </tr>
                  </tbody>
                </table>
            </div>
        </div>
    
      </Col>
      <Col md={4}>
      </Col>
    </Row>
  </ContainerFluid>
 </div>);
};

export default SDComponents;