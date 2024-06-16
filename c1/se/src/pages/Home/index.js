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
  document.title = 'Home | Shudiksha Enterprises';
 },[]);

 return (<>
 <Header menulinks={HeaderMenu} activeId="Home" />
 <img style={{ width:'100%', height:'auto', borderBottom:'2px solid #ccc', marginBottom:'35px' }}
 src="https://www.colliers.com/-/media/images/colliers/asia/india/blogs-images/2021/elevators-in-commercial-buildings-1536.ashx?bid=2031a2ff0b2842cc954d3613c55dc434" />
 {/*<Welcome />
 <Highlight1 />
 <Why />
 <Highlight2 />
 <Starters />
 <Footer />*/}
 </>);
};

export default Home;