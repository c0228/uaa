import React, { useState } from "react";
import { useParams  } from "react-router-dom";
import { ContainerFluid, Row, Col, Card } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@AppRoutes/NavbarList.js';
import Introduction from './components/introduction/index.js';

const AboutUPSC = () =>{
 const { lang } = useParams();
 const SimpleHeader = ({ label }) =>{
    return (<div style={{ padding:'8px', backgroundColor:'#ccc', borderTopRightRadius:'25px',  borderBottomRightRadius:'25px' }}><b>{label}</b></div>);
 }
 return (<div className="fs22p">
    <Header menulinks={HeaderMenu(lang)} activeId="AboutUPSC" />
    <ContainerFluid>
        <Row>
            <Col md={12}>
                <div>
                    <div style={{ borderTop:'1px solid #ccc', borderBottom:'1px solid #ccc', paddingTop:'10px' }}>
                        <h1><b>
                            {lang=='en' && (<div>Union Public Service Commission (UPSC)</div>)}
                            {lang=='hi' && (<div>संघ लोक सेवा आयोग (यूपीएससी)</div>)}
                        </b></h1>
                    </div>
                </div>
            </Col>
        </Row>
        <Row>
            <Col md={6}>
                <Introduction />
            </Col>
            <Col md={6}>
                <div className="mtop15p">
                    <Card padding={15}>
                        <div><h3><b>Understanding UPSC Structure</b></h3></div>
                        <div className="mtop15p">To make UPSC easier to understand, we organize information into three 
                            levels - Groups, Exams and Services.</div>
                        <div className="mtop15p">
                            <SimpleHeader label="1. Groups" />
                            <div className="mtop15p padLeft15p">
                                A Group represents a broad category of UPSC examinations based on the career domain. Examples include:
                            </div>
                            <ul>
                                {[{
                                    "label":"Civil Administration",
                                    "desc":"Examinations related to governance, administration, diplomacy, taxation, policing, and public policy."
                                },{
                                    "label":"Defence Services",
                                    "desc":"Examinations conducted for entry into the Army, Navy, and Air Force."
                                },{
                                    "label":"Engineering Services",
                                    "desc":"Recruitment for technical and engineering positions in government departments."
                                },{
                                    "label":"Economic & Statistical Services",
                                    "desc":"Examinations for candidates specializing in economics, statistics, and data analysis."
                                },{
                                    "label":"Medical Services",
                                    "desc":"Recruitment of medical professionals into government healthcare services."
                                }]?.map((e,i)=>{
                                    return (<li key={i} className="mtop5p">
                                    <div><b>{e?.label}</b></div>
                                    <div className="mtop5p">{e?.desc}</div>
                                </li>);
                                })}
                            </ul>
                        </div>
                        <div className="mtop15p">
                            <SimpleHeader label="2. Exams" />
                            <div className="mtop15p padLeft15p">
                                <div>Each group contains one or more examinations. Examples:</div>
                                {[{
                                    "group":"Civil Administration Group",
                                    "exams":["Civil Services Examination (CSE)", "Indian Forest Service Examination (IFoS)"]
                                },{
                                    "group":"Defence Services Group",
                                    "exams":["National Defence Academy Examination (NDA)", "Combined Defence Services Examination (CDS)"]
                                },{
                                    "group":"Engineering Group",
                                    "exams":["Engineering Services Examination (ESE)"]
                                },{
                                    "group":"Economic & Statistical Group",
                                    "exams":["Indian Economic Service Examination (IES)", "Indian Statistical Service Examination (ISS)"]
                                }]?.map((d,i1)=>{
                                    return (<div key={i1}>
                                        <div className="mtop15p"><b>{d?.group}</b></div>
                                        <ul>
                                            {d?.exams?.map((e,i2)=><li key={i2} className="mtop5p">{e}</li>)}
                                        </ul>    
                                    </div>);
                                })}
                                <div className="mtop5p">Each examination has its own eligibility criteria, syllabus, 
                                    selection process, and career opportunities.</div>
                            </div>
                        </div>
                        <div className="mtop15p">
                            <SimpleHeader label="3. Services" />
                            <div className="mtop15p padLeft15p">
                                <div>Successful candidates are allocated to specific services 
                                based on examination performance, preferences, vacancies, and eligibility conditions. Examples 
                                of services include:</div>
                            {[{
                                "group":"Administrative Services",
                                "exams":["Indian Administrative Service (IAS)"]
                            },{
                                "group":"Police Services",
                                "exams":["Indian Police Service (IPS)"]
                            },{
                                "group":"Foreign Affairs",
                                "exams":["Indian Foreign Service (IFS)"]
                            },{
                                "group":"Revenue & Taxation",
                                "exams":["Indian Revenue Service (IRS)"]
                            },{
                                "group":"Forest Administration",
                                "exams":["Indian Forest Service (IFoS)"]
                            }]?.map((d,i1)=>{
                                    return (<div key={i1}>
                                        <div className="mtop15p"><b>{d?.group}</b></div>
                                        <ul>
                                            {d?.exams?.map((e,i2)=><li key={i2} className="mtop5p">{e}</li>)}
                                        </ul>    
                                    </div>);
                                })}

                            <div className="mtop5p">Each service offers a unique role in nation-building and public administration.</div>
                            </div>
                        </div>
                    </Card>
                </div>
            </Col>
        </Row>
    </ContainerFluid>
 </div>);
};

export default AboutUPSC;