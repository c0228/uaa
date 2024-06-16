import React, { useEffect } from "react";
import { ContainerFluid, Row, Col, Icon, Button, Carousel } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import Footer from '@Templates/Footer/index.js';
import { Highlight1, Highlight2 } from './Components/Highlights/index.js';
import Welcome from "./Components/Welcome/index.js";
import Why from './Components/Why/index.js';
import Starters from './Components/Starters/index.js';

const Home = ()=>{

 useEffect(()=>{
  document.body.style.backgroundColor = '#fff';
 },[]);

 return (<>
 <Header menulinks={HeaderMenu} activeId="Home" />
 <Welcome />
 <Highlight1 />
 <Why />
 <Highlight2 />
 <Starters />
 <Footer />
 </>);
};

export default Home;