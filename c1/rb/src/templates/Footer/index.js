import React from "react";
import { ContainerFluid, Row, Col } from "e-ui-react";

const Footer = ()=>{

 const ContentTitle = ({ title })=>{
    return (<div align="center" style={{ color:'#000', fontFamily:'BebasNeue' }}><h4>{title}</h4></div>)
 };

 return (<div style={{ backgroundColor:'#cec1f7', paddingTop:'55px', paddingBottom:'55px' }}>
  <ContainerFluid>
    <Row>
        <Col xs={12} xl={4} xxl={4}>
            <div style={{ paddingLeft:'15px', paddingRight:'15px' }}>
                <ContentTitle title="RollEasyBlinds.com" />
                <div style={{ marginTop:'15px', fontSize:'14px', color:'#111' }}>
                  Welcome to RollEasyBlinds.com, where the artistry of window treatments meets a commitment to unparalleled 
                  quality and customer satisfaction. Established with a passion for transforming living spaces, 
                  RollEasyBlinds.com has become synonymous with elegance, innovation, and personalized style.
                </div>
            </div>
        </Col>
        <Col xs={12} xl={4} xxl={4}>
            <div align="center">
                <ContentTitle title="Links" />
                {["Home","Products","About Us", "Contact Us"]?.map((item, index)=>{
                    return (<div key={index} style={{ fontFamily:'Metropolis', fontSize:'14px', color:'#111', paddingTop:'5px' }}>{item}</div>);
                })}
            </div>
        </Col>
        <Col xs={12} xl={4} xxl={4}>
            <div align="center">
                <ContentTitle title="Contact Us" />
                <div style={{ marginTop:'15px', fontSize:'14px', paddingLeft:'15px', paddingRight:'15px' }}>
                Feel free to reach out to us with any questions, inquiries, or requests. We're here to assist you every step of 
                the way. Contact us today at <u><i>enquires@rolleasyblinds.com</i></u>
                </div>
            </div>
        </Col>
    </Row>
  </ContainerFluid>
 </div>);
};

export default Footer;