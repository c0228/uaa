import React from "react";
import { ContainerFluid, Row, Col, Button, Icon } from "e-ui-react";
import ShowcaseTile from "./components/Showcase/index.js";
import Header from '@ShowcaseTemplates/Header/index.js';
import './index.css';

const Home = ({ meta }) =>{

 return (<div className="mbot15p"> 
  <Header menulinks={[]} activeId="Home" />

  <div>
      <div align="center" style={{ backgroundColor:'#f9f6f6', padding:'60px' }}>
         <h3 style={{ lineHeight:'32px' }}>
         <b><span style={{ color:'#000' }}>
         Welcome to <span style={{ color:'#d84e55' }}>Blockchain / DeFi / Decentralized Systems</span> – A Live Showcase of Innovation</span></b></h3>
         <div className="mtop15p" style={{ lineHeight:'28px', fontSize:'16px', color:'#777' }}>
         Explore the cutting-edge world of Blockchain, DeFi, and Decentralized Systems in this live showcase of innovation. From 
         trustless financial transactions to self-sovereign identity and smart contracts, witness groundbreaking solutions shaping 
         the future of digital economies. Dive into real-world applications, emerging trends, and the transformative power of 
         decentralization!
         </div>
      </div>
   </div>

   <ShowcaseTile />

 </div>);
};

export default Home;