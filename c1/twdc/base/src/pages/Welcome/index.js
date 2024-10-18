import React, { useState, } from "react";
import { Button, ContainerFluid, Row, Col, Card, HorizontalStaticMenu } from "e-ui-react";
import Poster from "./components/Poster/index.js";
import Employees from "./components/Employees/index.js";
import Employers from "./components/Employers/index.js";
import Introduction from "./components/Introduction/index.js";
import FeaturedServices from './components/FeaturedServices/index.js';
import SplitContent from './components/SplitContent/index.js';
import ContactUs from './components/ContactUs/index.js';
import Footer from '@Templates/Footer/index.js';
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import './index.css';

const Welcome = () =>{
 const [activeMenu, setActiveMenu] = useState('for-employer');
 const data = [{ id:'for-employer', label:'FOR EMPLOYER', component:(<Employers />) },
       { id:'for-consultant', label:'FOR CONSULTANT', component:(<Employees />) }];
   
 return (<div>
    <Header menulinks={HeaderMenu} activeId="Home" />

    <Poster setActiveMenu={setActiveMenu} />

    <Introduction />

    <div className="p-5">
        <HorizontalStaticMenu data={data} activeId={activeMenu}
            config={{ active:{ color:'#ef0b17' }, inactive:{ color:'#000' } }} />
    </div>

    <div className="p-5" style={{ backgroundColor:'#06156c', color:'#fff' }}>
        <FeaturedServices />
    </div>

    <div className="p-5">
        <SplitContent />   
    </div>

    {/*<div className="pt-5 pb-2" style={{ backgroundColor:'#06156c', color:'#fff' }}>
        <ContactUs />     
    </div>*/}

    <Footer />
 </div>);
};

export default Welcome; 