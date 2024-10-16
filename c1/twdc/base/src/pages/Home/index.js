import React, { useState } from "react";
import { ContainerFluid, Row, Col, Form, TextBox, TextArea, Button, HorizontalStaticMenu, Pill, Colors  } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import Employees from './components/Employees/index.js';
import Employers from './components/Employers/index.js';
import FeaturedServices from './components/FeaturedServices/index.js';
import SplitContent from './components/SplitContent/index.js';
import ContactUs from './components/ContactUs/index.js';
import Footer from '@Templates/Footer/index.js';

const Home = ()=>{
 const TagLine = () =>{
   return (<div align="center" style={{ fontSize:'16px', width:'100%', backgroundColor:'#eee', padding:'8px' }}>
    <b>"Your Global Partner - Connecting Global Talent - Empowering IT Innovation & Globally Success."</b>
 </div>);
 };
 const Jumbotron = () =>{
  return ( <div className="p-5" style={{ backgroundColor:'#000040' }}>
   <ContainerFluid>
    <Row>
      <Col md={6}><img src={process.env.PROJECT_URL+"assets/images/1.png"} /></Col>
      <Col md={6}>
        <div className="p-1" style={{ fontSize:'18px', color:'#fff', lineHeight:'36px' }}>
        "The Workday Consultancy is your trusted partner for unlocking the full potential of Workday. 
        With our deep understanding of the platform, we deliver comprehensive solutions to help you achieve 
        your HR goals and improve employee experience."<br/><br/>
        Let's build a workplace where everyone feels valued, empowered, and inspired to contribute their best. 
        Together, we can create a positive and productive environment where we thrive both personally and professionally.
        </div>
        <div align="center" className="p-3">
          <a href="#for-employer" onClick={()=>setActiveMenu('for-employer')}>
          <Button style={{ margin:'5px', textTransform:'uppercase' }} type="light" size={11}><b>I am an Employer</b></Button>
          </a>
          <a href="#for-consultant" onClick={()=>setActiveMenu('for-consultant')}>
            <Button style={{ margin:'5px', textTransform:'uppercase' }} type="outline-light" size={11}><b>I Am a Consultant</b></Button>
          </a>
        </div>
       </Col>
      </Row>
    </ContainerFluid>
     </div>);
 };

 const [activeMenu, setActiveMenu] = useState('for-employer');
 const data = [{ id:'for-employer', label:'FOR EMPLOYER', component:(<Employers />) },
    { id:'for-consultant', label:'FOR CONSULTANT', component:(<Employees />) }];

 return (<>
 <Header menulinks={HeaderMenu} activeId="Home" />
 <TagLine />
 <Jumbotron />

 <div className="p-5">
    <HorizontalStaticMenu data={data} activeId={activeMenu}
        config={{ active:{ color:'#0c9712' }, inactive:{ color:'#000' } }} />
 </div>

 <div className="p-5" style={{ backgroundColor:'#043d37', color:'#fff' }}>
    <FeaturedServices />
 </div>

 <div className="p-5">
    <SplitContent />   
 </div>

 <div className="pt-5 pb-2" style={{ backgroundColor:'#1c313b', color:'#fff' }}>
    <ContactUs />     
 </div>
    
 <Footer />
 </>);
};

export default Home;