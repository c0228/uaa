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
<div align="center" style={{ marginTop:'4.8%', paddingLeft:'15px', paddingRight:'15px', paddingBottom:'8px' }}>
      <span className="welcome-title desktop-view" style={{ paddingLeft:'10px', paddingRight:'30px', fontSize:'40px', fontFamily:'BebasNeue', letterSpacing:'4px', color:'#000' }}>
        <b>Welcome to the Backyard bar</b>
      </span>
      <div className="welcome-title mobile-view" style={{ paddingLeft:'10px', paddingRight:'30px', fontSize:'40px', fontFamily:'BebasNeue', letterSpacing:'4px', color:'#000' }}>
        <b>Welcome to the Backyard bar</b>
      </div>
    </div>
 <Welcome />
 <Footer />
 </>);
};

export default Home;