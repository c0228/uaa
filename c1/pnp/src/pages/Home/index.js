import React from "react";
import Upper from '@Templates/Upper/index.js';
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import Introduction from './components/Introduction/index.js';
import Features from './components/Features/index.js';
import HotelReady from './components/HotelReady/index.js';
import PartnerInfo from './components/PartnerInfo/index.js';
import StreamlineRevenue from './components/StreamlineRevenue/index.js';
import BillingProcess from "./components/BillingProcess/index.js";
import Benefits from "./components/Benefits/index.js";
import Bottom from '@Templates/Bottom/index.js';
import Footer from '@Templates/Footer/index.js';
import './index.css';

const Home = ()=>{

 return (<>
 <Upper />
 <Header menulinks={HeaderMenu} activeId="Home" />
 <Introduction />
 <Features />
 <HotelReady />
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