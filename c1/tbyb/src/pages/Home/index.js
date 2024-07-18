import React, { useEffect } from "react";
import { ContainerFluid, Row, Col, Icon, Button, Carousel } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import Footer from '@Templates/Footer/index.js';
import Welcome from "./Components/Welcome/index.js";
import './index.css';

const Home = ()=>{

 useEffect(()=>{
  document.body.style.backgroundColor = '#fff';
 },[]);

 return (<>
 <Header menulinks={HeaderMenu} activeId="Home" />
 <div className="logo-header">
    <img src={"./assets/images/logo.png"} className="logo-img" />
 </div>
 <Welcome />
 <Footer />
 </>);
};

export default Home;