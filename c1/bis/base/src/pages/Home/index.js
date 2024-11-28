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
import Benefits from "./components/Benefits/index.js";
import Bottom from '@Templates/Bottom/index.js';
import Footer from '@Templates/Footer/index.js';
import './index.css';

const Home = ()=>{

 return (<>
 <Header menulinks={HeaderMenu} activeId="Home" />
 <Introduction />
 <Features />
 <Services />
 <PartnerInfo />
 <StreamlineRevenue />
 <BillingProcess />
 <Benefits />
 
 {/*
 <Jumbotron /> */}


 <Bottom />
 <Footer />

 
 
 </>);
};



export default Home;