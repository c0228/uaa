import React from "react";
import { ContainerFluid, Row, Col, Card } from "e-ui-react";
import Auth from "@Components/auth/index.js";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Routes/NavbarList.js';
import './index.css';

const AuthPage = ()=>{
 return (<>
{/*} <Header menulinks={HeaderMenu()} activeId="Home" />*/}
 <img src={process.env.PROJECT_URL+'assets/images/bg.png'} style={{ position:'fixed', width: '100%', height: '100%', zIndex:'-1' }} />
 <div style={{ paddingTop:'15px' }}>
    <ContainerFluid>
    <Row>
        <Col md={4}>
            <Card padding={15}>
            <div align="center" style={{ fontFamily: 'BloomsFree', fontSize:'28px', letterSpacing:'3px' }}>
                <span style={{ color:'#000' }}>my</span>
                <span style={{ color:'#000' }}>local</span>
                <span style={{ color:'#000' }}>hook</span>
            </div>
            <div style={{ fontFamily: 'Metropolis', fontSize:'16px', color:'#555', paddingTop:'15px' }}>
                A Social Networking Platform that connects people with their local communities, interests, 
                places, and opportunities — helping users discover, share, connect, and engage with what matters 
                around them.</div>
            <hr/>
            <div align="center" style={{ fontFamily: 'Metropolis', fontSize:'16px', color:'#333', paddingTop:'15px' }}>
                <b>WELCOME TO THE VIRTUAL WORLD</b></div>
            <hr/>
            <div align="center" style={{ fontFamily: 'Metropolis', fontSize:'16px', color:'#555', paddingTop:'15px' }}>
                “Connect with your local community, discover what’s happening around you, and meet people who share your interests.”
            </div>
            <div style={{ marginTop:'15px' }}><Auth /></div>
            </Card>
        </Col>
    </Row>
    <Row>
        <Col md={4}>
            <div style={{ paddingTop:'25px' }}>
               
            </div>
        </Col>
    </Row>
 </ContainerFluid>
 </div>
 </>);
};

export default AuthPage;