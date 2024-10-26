import React, { useState } from "react";
import { ContainerFluid, Row, Col, Icon, Button, VerticalStaticMenu, Pill, Colors  } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import Employees from './components/Employees/index.js';
import Employers from './components/Employers/index.js';
import FeaturedServices from './components/FeaturedServices/index.js';
import Carousel from "./../Carousel/index.js";
import './index.css';

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
 const data = [{ id:'for-employer', label:'Eligibility & Benefits', component:(<Employers />) },
    { id:'for-consultant', label:'Contract Negotiations', component:(<Employees />) },
    { id:'for-consultant', label:'Practice Management', component:(<Employees />) }];

    const slides = [
      {
        img: 'https://preview.colorlib.com/theme/bootstrap/carousel-01/images/slider-1.jpg',
        content: (
          <div>
            <h2>Slide 1</h2>
            <p>This is the first slide.</p>
          </div>
        ),
      },
      {
        img: 'https://www.josephfiler.com/images/xl/Arizona-Desert-Mountains-2518-Edit.jpg',
        content: (
          <div>
            <h2>Slide 2</h2>
            <p>This is the second slide.</p>
          </div>
        ),
      },
      {
        img: 'https://wallpapers.com/images/hd/beautiful-ocean-pictures-1920-x-1200-6r2ljotdu3o25cio.jpg',
        content: (
          <div>
            <h2>Slide 3</h2>
            <p>This is the third slide.</p>
          </div>
        ),
      },
    ];
 return (<>
 <Header menulinks={HeaderMenu} activeId="Home" />
  <div style={{ backgroundColor:'#ddd' }}>
  <Carousel slides={slides} />
  <Row>
    <Col md={7}>
    <img src="http://192.168.1.5/BIS/1.png" />
    </Col>
    <Col md={5}>
    <div className="bis-carousel-jumbotron" style={{ padding:'15px', lineHeight:'34px', fontSize:'18px', color:'#000'  }}>
      <div>
      "<b>Broadway Info Services</b> is a leading provider of medical billing and revenue cycle management solutions 
      for healthcare providers and medical practices. We are dedicated to simplifying the complex world of 
      medical billing, allowing healthcare providers to focus on what they do best - patient care.
      <br/><br/>
      With a team of experienced professionals and advanced technology, we offer a comprehensive range 
      of services to streamline your revenue cycle and maximize your financial performance."
      </div>
    </div>
    
    </Col>
  </Row>
  </div>
  <div style={{ paddingTop:'45px', paddingLeft:'15px', paddingRight:'15px', backgroundColor:'#000040', color:'#fff' }}>
    <FeaturedServices />
  </div>
 
 {/*<TagLine />
 <Jumbotron /> */}

 <div className="p-5">
    <VerticalStaticMenu data={data} activeId={activeMenu}
        config={{ active:{ color:'#0c9712' }, inactive:{ color:'#000' } }} />
 </div>

 

 </>);
};

export default Home;