import React from "react";
import { ContainerFluid, Row, Col } from "e-ui-react";
import SlimImageTitles from '@Components/SlimImageTitles/index.js';

const HotelReady = () =>{ 
 const Feature = ({ bgColor, borderColor, title, desc, img }) =>{
  return (<div style={{ height:'76vh', border:'1px solid '+borderColor, padding:'15px', backgroundColor: bgColor, borderRadius:'8px' }}>
    <div align="center">
        <img src={process.env.PROJECT_URL+'assets/images/'+img} style={{ border:'0.4vw solid '+borderColor, borderRadius:'50%', width:'12vw', height:'12vw'}} />
        <div className="bis-hgl-text mtop15p"><b>{title}</b></div>
        <div className="bis-hgl-text">{desc}</div>
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
                        <Feature bgColor='#c3e5ff' title="Day Care" borderColor="#5ea8e1" img="hr-01.jpg"
                            desc={<div>It provides daytime supervision and care for dogs in a structured and social environment. 
                                It's a service designed for pet owners who need to leave their dogs for extended periods during the 
                                day, such as while at work.</div>} />
                    </Col>
                    <Col md={4}>
                        <Feature bgColor='#ffe3da' title="Pet Boarding" borderColor="#ffac91" img="hr-02.jpg"
                            desc={<div>Pet boarding provides temporary housing and care for pets when their owners are away 
                                during vacations. These facilities offer a range of services, including feeding, 
                                watering & often exercise and interaction with staff.</div>} />
                    </Col>
                    <Col md={4}>
                        <Feature bgColor='#dcffdd' title="Private Suites" borderColor="#8dcdff" img="hr-03.jpg"
                            desc={<div>Private suites, in the context of hospitality or pet care, are typically larger, more luxurious accommodations compared to standard 
                                rooms or kennels, designed to provide a more secluded and premium experience.</div>} />
                    </Col>
                </Row>
                
            </Col>
        </Row>
    </ContainerFluid>
 </div>);
};

export default HotelReady;