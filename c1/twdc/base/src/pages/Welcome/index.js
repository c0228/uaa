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

    <div className="p-5" style={{ backgroundColor:'#06156c', color:'#fff' }}>
        <FeaturedServices />
    </div>
    <Introduction />

    <div className="p-5">
        <HorizontalStaticMenu data={data} activeId={activeMenu}
            config={{ active:{ color:'#ef0b17' }, inactive:{ color:'#000' } }} />
    </div>

    <div className="p-5" style={{ backgroundColor:'#ededed' }}>
        <Row>
            <Col md={8}>
            <span style={{ fontSize:'18px', color:'#ef0b17' }}><b>The Workday Consulting : Industries</b></span>
            <h2 style={{ marginTop:'15px', marginBottom:'15px', lineHeight:'44px' }}>
                <b>"We specialize in connecting exceptional talent with thriving organizations across various industries."</b></h2>
            <span style={{ fontSize:'18px', lineHeight:'36px' }}>With years of industry experience and a deep understanding of diverse sectors, we are 
                committed to delivering tailored recruitment solutions that meet your unique business objectives.
                <div style={{ marginTop:'15px' }}>Our expertise spans across a wide range of industries, including 
                    <ul style={{ marginTop:'15px' }}>
                        {["Communications","Financial Services","Healthcare", "Hospitality", "Insurance",
                            "Retail", "Technology and many more"
                        ]?.map((d,i)=><li key={i}><b>{d}</b></li>)}
                    </ul>
                </div> 
            </span>
            <div></div>
            
            </Col>
            <Col md={4}>
            
            </Col>
        </Row>
    </div>

    

    {/*<div className="p-5">
        <SplitContent />   
    </div>*/}

    {/*<div className="pt-5 pb-2" style={{ backgroundColor:'#06156c', color:'#fff' }}>
        <ContactUs />     
    </div>*/}

    <Footer />
 </div>);
};

export default Welcome; 