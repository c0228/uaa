import React from "react";
import { ContainerFluid, Row, Col, Card } from "e-ui-react";
import BlogArticleHeader from '@MainComponents/blog-article-header/index.js';
import { HeaderMenu } from '@ShowcaseConfig/HeaderMenu.js';
import Header from '@ShowcaseTemplates/Header/index.js';
import Introduction from "./components/introduction/index.js";

const DIDProject = ({ meta }) =>{
 return (<div className="mbot15p"> 
   <Header menulinks={HeaderMenu} activeId="Blockchain" />
   <ContainerFluid>
           <Row>
               <Col md={12}>
                   <BlogArticleHeader metaData={meta} />     
               </Col>
           </Row>
           <Row>
                <Col md={8}>
                    <Introduction />
                </Col>
                <Col md={4}>
                    <div className="mtop15p">
                        <Card padding={15}>
                            <div>As a Senior Full Stack Blockchain Architect with over 8 years of experience, I was 
                            responsible for the full lifecycle of the project - from requirements gathering and protocol 
                            evaluation to development, deployment, and compliance.</div>
                        </Card>
                    </div>
                    <div className="mtop15p">
                        <div><h2><b>Technologies Used:</b></h2><hr/></div>
                        <div className="table-responsive">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td><b>Blockchain:</b></td>
                                        <td>Ethereum, Polygon, Hyperledger Indy/Aries, IPFS</td>
                                    </tr>
                                    <tr>
                                        <td><b>DID/VC Frameworks:</b></td>
                                        <td>uPort, DIDKit, Veramo, Trinsic, Aries Framework JS</td>
                                    </tr>
                                    <tr>
                                        <td><b>Smart Contracts:</b></td>
                                        <td>Solidity, Hardhat, Ethers.js</td>
                                    </tr>
                                    <tr>
                                        <td><b>Languages:</b></td>
                                        <td>TypeScript, Node.js, Go, Rust</td>
                                    </tr>
                                    <tr>
                                        <td><b>Frontend: </b></td>
                                        <td>React, React Native, Redux</td>
                                    </tr>
                                    <tr>
                                        <td><b>Security:</b></td>
                                        <td>ZKPs (zk-SNARKs), JWT, OAuth 2.0, DIDComm</td>
                                    </tr>
                                    <tr>
                                        <td><b>Infra/Tools:</b></td>
                                        <td>Docker, Kubernetes, GitHub Actions, HashiCorp Vault, NGINX, PostgreSQL</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Col>
           </Row>
    </ContainerFluid>
 </div>);
};

export default DIDProject;