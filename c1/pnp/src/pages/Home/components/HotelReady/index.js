import React from "react";
import { ContainerFluid, Row, Col } from "e-ui-react";
import SlimImageTitles from '@Components/SlimImageTitles/index.js';

const HotelReady = () =>{ 
 const Feature = ({ bgColor, title, desc }) =>{
  return (<div style={{ height:'76vh', border:'1px solid #ccc', padding:'15px', backgroundColor: bgColor, borderRadius:'8px' }}>
    <div align="center">
        <img src={process.env.PROJECT_URL+'assets/images/01.jpg'} style={{ borderRadius:'50%', width:'12vw', height:'12vw'}} />
        <div className="bis-hgl-text mtop15p"><b>{title}</b></div>
    </div>
</div>);
 };
 return (<div className="wApp-home-services-section">
    <ContainerFluid>
        <Row>
            <Col md={12}>
                <div>
                <div align="center" className="bis-hgl-header"><b>Get Ready for Pet Vacation Cottage !</b></div>
                    <div align="center" className="bis-hgl-text">
                        <div style={{ paddingBottom:'2.5vh' }}>
                        Everything You Need to Know Before Drop-Off.
                        </div>
                    </div>
                </div>
            </Col>
            <Col md={3}>
                <div className="bis-hgl-text">
                    <b>Get Ready for Pet Hotel!</b><br/> We are excited to welcome your pet.<br/><br/> We understand that by leaving your pet 
                    can bring about a mix of emotions, and we're here to make the process as smooth and comfortable as possible.<br/><br/>
                    We aim to create a safe, fun, and nurturing environment for your pet, giving you peace of mind while you're away. 
                    Let's work together to make their pet hotel experience a positive and enjoyable one!
                </div>
            </Col>
            <Col md={9}>
                <Row>
                    <Col md={4}>
                        <Feature bgColor='#c3e5ff' title="Day Care" />
                    </Col>
                    <Col md={4}>
                        <Feature bgColor='#ffe3da' title="Pet Boarding" />
                    </Col>
                    <Col md={4}>
                        <Feature bgColor='#dcffdd' title="Private Suites" />
                    </Col>
                </Row>
                
            </Col>
        </Row>
    </ContainerFluid>
 </div>);
};

export default HotelReady;