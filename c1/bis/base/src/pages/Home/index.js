import React, { useState } from "react";
import { ContainerFluid, Row, Col, Icon, Button, VerticalStaticMenu, Pill, Colors, Carousel  } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import Introduction from './components/Introduction/index.js';
import Features from './components/Features/index.js';
import Services from './components/Services/index.js';
import PartnerInfo from './components/PartnerInfo/index.js';
import StreamlineRevenue from './components/StreamlineRevenue/index.js';
import BillingProcess from "./components/BillingProcess/index.js";
import FeatureCard from '@Components/FeatureCard/index.js';
import Bottom from '@Templates/Bottom/index.js';
import Footer from '@Templates/Footer/index.js';
import './index.css';

const Home = ()=>{


 const LandingTemp4 = () =>{
  const Items = () =>{
    const data = [{
      icon:'fa-window-maximize',
      title:'Maximized Reimbursement',
      content:'Our medical coding and claims submission expertise boosts your reimbursement rates.'
    },{
      icon:'fa-money',
      title:'Optimized Cash Flow',
      content:'Efficient claims processing and timely payment collection streamline your financial operations.'
    },{
      icon:'fa-cog',
      title:'Minimized Administrative Overhead',
      content:'Our streamlined processes and automation tools reduce your administrative burden.'
    },{
      icon:'fa-shield',
      title:'Assured Compliance',
      content:'We stay updated on the latest industry regulations to ensure compliance and mitigate risks.'
    },{
      icon:'fa-database',
      title:'Prioritized Data Security',
      content:'We safeguard your sensitive patient information with robust security measures.'
    },{
      icon:'fa-tachometer',
      title:'Improved Efficiency',
      content:'Our solutions enhance your overall operational efficiency, saving you time and resources.'
    }];
    return (<FeatureCard data={data} />);
  };
  return (<div style={{ marginTop:'65px', marginBottom:'65px' }}>
        <Row>
      <Col md={12}>
        <div align="center">
          <h1 style={{ lineHeight:'46px' }}><b>The Benefits of Partnering with Broadway Info Services</b></h1>
        </div>
        <div style={{ lineHeight:'34px', padding:'15px', fontSize:'18px', color:'#000'  }}>
          By choosing Broadway Info Services as your healthcare billing partner, you can enjoy the 
          following benefits:</div>
      </Col>
    </Row>
    <Items />
  </div>);
 };

 return (<>
 <Header menulinks={HeaderMenu} activeId="Home" />
 <Introduction />
 <Features />
 <Services />
 <PartnerInfo />
 <StreamlineRevenue />
 <BillingProcess /> 

  <LandingTemp4 />
 
 {/*
 <Jumbotron /> */}


 <Bottom />
 <Footer />

 
 
 </>);
};



export default Home;