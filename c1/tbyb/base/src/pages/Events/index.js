import React, { useEffect } from "react";
import { ContainerFluid, Row, Col } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import Contact from './../Home/Components/Contact/index.js';
import Footer from '@Templates/Footer/index.js';

const Events = () =>{
 useEffect(()=>{ document.body.style.backgroundColor='#fffbd5'; },[]);
 const data = [
    /*{
    "title": (<div>Friday, Sep 13<sup>th</sup></div>),
    "data":['9.png']
 },{
    "title": (<div>Saturday, Sep 14<sup>th</sup></div>),
    "data":['12.png','8.png']
 },{
    "title": (<div>Friday, Sep 20<sup>th</sup></div>),
    "data":['7.png']
 },{
    "title": (<div>Saturday, Sep 21<sup>st</sup></div>),
    "data":['10.png']
 }, */
 {
    "title": (<div>Thursday, Sep 26<sup>th</sup></div>),
    "data":['11.png','13.png']
 },,{
    "title": (<div>Friday, Sep 27<sup>th</sup></div>),
    "data":['6.png']
 },{
    "title": (<div>Saturday, Sep 28<sup>th</sup></div>),
    "data":['5.png']
 },{
    "title": (<div>Sunday, Sep 29<sup>th</sup></div>),
    "data":['14.png','13.png']
 },{
    "title": (<div>Monday, Sep 30<sup>th</sup></div>),
    "data":['13.png']
 }];
 return (<div>
    <div style={{ position:'absolute', top:'40px' }}>
        <img src={"./assets/images/logo.png"} style={{ padding:'5px', width:'100px', height:'auto' }} />
    </div>
    <Header menulinks={HeaderMenu} activeId="Events" />
    <div style={{ marginBottom:'35px' }}>
    <ContainerFluid>
        <Row>
            <Col xxl={12} xl={12}>
                <div align="center" className="heading-title"><b>Events</b></div>
            </Col>
        </Row>
            <div style={{  paddingLeft:'12px', paddingRight:'15px' }}>
            <Row>
                {data?.map((dat,index)=>{
                    return (<div key={index} style={{ marginBottom:'35px' }}>
                        <Row>
                            <Col md={12}>
                            <div  style={{ letterSpacing:'1px', color:'#fff', 
       padding:'10px', textTransform:'uppercase', 
        backgroundColor:'#333' }}><b>{dat?.title}</b></div>
                            {/*<div><h4 style={{ paddingBottom:'15px', borderBottom:'1px solid #000'}}><b>{dat?.title}</b>
                                </h4></div>*/}
                            </Col>
                        </Row>
                        <Row>
                            {dat?.data?.map((d,i)=>{
                              return (<Col key={i} md={3}>
                                <img src={process.env.PROJECT_URL+'assets/specials/'+d} 
                  style={{ height:'500px', marginTop:'25px', borderRadius:'8px', border:'3px solid #333' }} />
                              </Col>);
                            })}
                        </Row>
                    </div>);
                })}
            </Row>
            </div>
    </ContainerFluid>
    </div>
 <Footer />
 </div>);
};

export default Events;