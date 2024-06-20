import React, { useState, useEffect } from "react";
import { Card, ContainerFluid, Row, Col, Icon, Button, Carousel } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import Footer from '@Templates/Footer/index.js';
import './index.css';

const Home = ()=>{
 const [fadeItems, setFadeItems] = useState("fade d-none");
 useEffect(()=>{
  document.title = 'Home | Shudiksha Enterprises';
  setTimeout(()=>setFadeItems("fade-in-right"),1000);
 },[]);

 return (<>
 <Header menulinks={HeaderMenu} activeId="Home" />
 <div>
 <img className="home-carousel-img" src="./assets/images/welcome.jpg" />
 </div>
 <div>
    <div align="center"><h4 style={{ textTransform:'uppercase', letterSpacing:'2px' }}><b>Our Features</b></h4></div>
    <div className="container-fluid" style={{ marginTop:'25px', marginBottom:'45px' }}>
        <div className="row">
            <div className="col-xxl-6 col-sm-6">
                <img src="./assets/images/feature-01.jpg"
                style={{ marginBottom:'15px', borderRadius:'8px', boxShadow:'2px 2px 2px 2px #ccc' }} />
                <div className="row">
                    <div className="col-xxl-6 col-sm-6 col-xs-6">
                    <img src="./assets/images/feature-02.jpg"
                style={{  marginBottom:'15px', borderRadius:'8px', boxShadow:'2px 2px 2px 2px #ccc' }} />
                    </div>
                    <div className="col-xxl-6 col-sm-6 col-xs-6">
                    <img src="./assets/images/feature-03.jpg"
                style={{  marginBottom:'15px', borderRadius:'8px', boxShadow:'2px 2px 2px 2px #ccc' }} />
                    </div>
                </div>
            </div>
            <div className="col-xxl-6 col-sm-6 ">
                <div style={{ marginTop:'6px' }}>
                    <Card padding={15} backgroundColor="#dcffdd">
                    <h4><b>Powering Up Your Project: Electrical & Elevator Solutions</b></h4>
                    <span style={{ fontSize:'14px' }}>
                    Welcome to your one-stop shop for all things electrical and elevator! We specialize in building electrical works and elevator 
                    installations, ensuring your project runs smoothly and efficiently from the ground floor up. Explore our website to learn more 
                    about our comprehensive services.</span>
                    </Card>
                </div>
                <div style={{ marginTop:'25px' }}>
                    <Card padding={15} backgroundColor="#fdf6e2">
                    <h4><b>Elevating Efficiency: Building Electrical & Elevator Experts</b></h4>
                    <span style={{ fontSize:'14px' }}>
                    Need top-notch electrical wiring and reliable elevator systems for your construction project? Look no further! Our team of 
                    skilled professionals provides seamless electrical work and elevator installation tailored to your specific needs. Visit our 
                    website to discover how we bring power and ease of access to your building.</span>
                    </Card>
                </div>
                <div style={{ marginTop:'25px' }}>
                    <Card padding={15} backgroundColor="#f7e0fb">
                    <h4><b>Building Brilliance: Electrical & Elevator Specialists</b></h4>
                    <span style={{ fontSize:'14px' }}>
                    Creating a brilliant building requires both a strong foundation and seamless functionality. We offer a complete package of 
                    building electrical works and elevator installation, ensuring your project shines from the inside out. Explore our website 
                    and discover how we power the brilliance of your construction.</span>
                    </Card>
                </div>
                <div style={{ marginTop:'25px' }}>
                    <Card padding={15} backgroundColor="#d7e6f3">
                    <h4><b>Connecting Every Floor: Your Building's Electrical & Elevator Partner</b></h4>
                    <span style={{ fontSize:'14px' }}>
                    Imagine a building where power flows effortlessly and connections are made on every level. That's the experience we 
                    deliver at Shudiksha Enterprises. Our website connects you with the expertise you need for flawless electrical works and 
                    elevator installation.</span>
                    </Card>
                </div>
            </div>
        </div>
    </div>
 </div>
 {/*
 <Footer />*/}
 </>);
};

export default Home;