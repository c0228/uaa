import React, { useState } from "react";
import { useParams  } from "react-router-dom";
import { ContainerFluid, Row, Col, Card } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@AppRoutes/NavbarList.js';


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
                <div className="mtop15p"><h3><b>Welcome to the World of UPSC</b></h3></div>
                <div className="mtop15p">
                    The Union Public Service Commission (UPSC) is one of India's most respected constitutional 
                    bodies responsible for recruiting candidates to various government services and posts. Every 
                    year, lakhs of aspirants prepare for UPSC examinations to build careers in administration, 
                    diplomacy, defense, engineering, economics, and several other public service sectors.
                    If you are completely new to UPSC preparation, this guide will help you understand how UPSC 
                    examinations are organized and how different services are connected to them.
                </div>

                <div className="mtop15p"><h3><b>Introduction</b></h3></div>
                <div className="mtop15p">
                    <div>The Union Public Service Commission is an independent constitutional institution that 
                    conducts competitive examinations for recruitment into various Central Government services 
                    and departments.</div>
                    <div className="mtop5p">UPSC examinations are designed to identify candidates with strong knowledge, analytical 
                    ability, decision-making skills, leadership qualities, and commitment to public service.</div>
                    <div className="mtop5p">Through different examinations, UPSC recruits officers for:</div>
                    <ul>
                        {["Administrative Services","Police Services","Foreign Services","Revenue Services",
                        "Defence Services","Forest Services","Engineering Services","Economic Services",
                        "Statistical Services","Medical Services","Research and Specialized Services"]?.map((e,i)=>{
                            return (<li key={i} className="mtop5p">{e}</li>);
                        })}
                    </ul>
                </div>
            </Col>
            <Col md={6}>
                <div className="mtop15p">
                    <Card padding={15}>
                        <div><h3><b>Understanding UPSC Structure</b></h3></div>
                        <div className="mtop15p">To make UPSC easier to understand, we organize information into three 
                            levels - Groups, Exams and Services.</div>
                        <div className="mtop15p">
                            <SimpleHeader label="1. Groups" />
                            <div className="pad15p">
                                A Group represents a broad category of UPSC examinations based on the career domain. Examples include:
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