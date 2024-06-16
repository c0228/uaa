import React from "react";
import { Link } from 'react-router-dom';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import { ContainerFluid, Row, Col } from "e-ui-react";

const Footer = ()=>{

 const ContentTitle = ({ title })=>{
    return (<div align="center" style={{ color:'#fff', fontFamily:'BebasNeue' }}><h4>{title}</h4></div>)
 };

 return (<div style={{ backgroundColor:'#7f1231', paddingTop:'55px', paddingBottom:'55px' }}>
  <ContainerFluid>
    <Row>
        <Col xs={12} xl={4} xxl={4}>
            <div style={{ paddingLeft:'15px', paddingRight:'15px' }}>
                <ContentTitle title="RollEasyBlinds.com" />
                <div style={{ marginTop:'15px', fontSize:'14px', color:'#ccc' }}>
                  Welcome to RollEasyBlinds.com, where the artistry of window treatments meets a commitment to unparalleled 
                  quality and customer satisfaction. Established with a passion for transforming living spaces, 
                  RollEasyBlinds.com has become synonymous with elegance, innovation, and personalized style.
                </div>
            </div>
        </Col>
        <Col xs={12} xl={4} xxl={4}>
            <div align="center">
                <ContentTitle title="Links" />

                {HeaderMenu?.map((item, index)=>{
                    return (<div key={index} 
                        style={{ fontFamily:'Metropolis', fontSize:'14px', color:'#ccc', paddingTop:'5px' }}>
                        <Link to={process.env.PROJECT_URL+item?.url} style={{ color:'#ccc', textDecoration:'none' }}>{item?.label}</Link> 
                        </div>);
                })}
            </div>
        </Col>
        <Col xs={12} xl={4} xxl={4}>
            <div align="center">
                <ContentTitle title="Contact Us" />
                <div style={{ color:'#ccc', marginTop:'15px', fontSize:'14px', paddingLeft:'15px', paddingRight:'15px' }}>
                Feel free to reach out to us with any questions, inquiries, or requests. We're here to assist you every step of 
                the way. Contact us today at <u><i>orders@rolleasyblinds.com</i></u>
                </div>
            </div>
        </Col>
    </Row>
  </ContainerFluid>
 </div>);
};

export default Footer;