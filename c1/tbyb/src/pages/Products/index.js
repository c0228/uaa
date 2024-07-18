import React, { useState, useEffect } from "react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import { ContainerFluid, Row, Col, Card, Switch, Button, Select, Icon } from "e-ui-react";
import Contact from './../Home/Components/Contact/index.js';
import Footer from '@Templates/Footer/index.js';
import './index.css';

const Products = () =>{

 const Title = ({ name })=>{
  return (<Row>
    <Col xs={12} xl={12} xxl={12}>
      <div className="mbot25p">
      <h3>{name}</h3><hr/>
      </div>
    </Col>
  </Row>);
 };

 return (<>
 <Header menulinks={HeaderMenu} activeId="FoodAndBeverages" />
 <div className="container-fluid" style={{ marginBottom:'15px' }}>
  <div className="row">
    <div className="col-xxl-12 col-xl-12">
      <div align="center" className="heading-title"><b>Our Food and Beverages</b></div>
    </div>
  </div>
  <div className="row">
    <div className="col-xxl-4 col-xl-4">

      <div style={{ lineHeight:'34px', padding:'15px', fontSize:'18px', fontFamily:'OpenSansItalic' }}>
            <div><b>CLASSIC COCKTAILS</b></div>
            <div>
              <ul>
                <li className="mtop15p">
                  <div>Chocolate Martini <span className="pull-right">12</span></div>
                </li>
                <li className="mtop15p">
                  <div>Gin Rickey <span className="pull-right">12</span></div>
                </li>
                <li className="mtop15p">
                  <div>Rum Runner <span className="pull-right">12</span></div>
                </li>
                <li className="mtop15p">
                  <div>Classic Margarita <span className="pull-right">12</span></div>
                </li>
                <li className="mtop15p">
                  <div>Old Fashioned <span className="pull-right">12</span></div>
                </li>
              </ul>
            </div>
          </div>

          <div style={{ lineHeight:'34px', padding:'15px', fontSize:'18px', fontFamily:'OpenSansItalic' }}>
            <div><b>SPECIALITY COCKTAILS</b></div>
            <div><b>(Can be made zero proof)</b></div>
            <div>
              <ul>
                <li className="mtop15p">
                  <div>Sweet Pepper Spritzer <span className="pull-right">10</span></div>
                </li>
                <li className="mtop15p">
                  <div>Spicy Mint Mango <span className="pull-right">10</span></div>
                </li>
                <li className="mtop15p">
                  <div>Blueberry Spritzer <span className="pull-right">10</span></div>
                </li>
                <li className="mtop15p">
                  <div>Fizzy Basil Lemonade <span className="pull-right">10</span></div>
                </li>
                <li className="mtop15p">
                  <div>The Chasi Devil (House Special) <span className="pull-right">10</span></div>
                </li>
              </ul>
            </div>
          </div>

    </div>
    <div className="col-xxl-4 col-xl-4">

      <img src="./assets/bar/14.jpg" style={{ borderRadius:'8px' }} />
      <div className="row">
        <div className="col-xxl-6 col-xl-6" style={{ padding:'15px' }}>
          <img src="./assets/bar/7.jpg"  style={{ height:'40vh', borderRadius:'8px' }} /> 
        </div>
        <div className="col-xxl-6 col-xl-6" style={{ padding:'15px' }}>
          <img src="./assets/bar/8.jpg"  style={{ height:'40vh', borderRadius:'8px' }} /> 
        </div>
      </div>
      <div className="row">
        <div className="col-xxl-6 col-xl-6" style={{ padding:'15px' }}>
          <img src="./assets/bar/15.jpg"  style={{ height:'40vh', borderRadius:'8px' }} /> 
        </div>
        <div className="col-xxl-6 col-xl-6" style={{ padding:'15px' }}>
          <img src="./assets/bar/16.jpg"  style={{ height:'40vh', borderRadius:'8px' }} /> 
        </div>
      </div>

    </div>
    <div className="col-xxl-4 col-xl-4">

    <div style={{ lineHeight:'34px', padding:'15px', fontSize:'18px', fontFamily:'OpenSansItalic' }}>
            <div><b>DRAFT</b></div>
            <div>
              <ul>
                <li className="mtop15p">
                  <div>Guinness <span className="pull-right">10</span></div>
                </li>
                <li className="mtop15p">
                  <div>Pernicious <span className="pull-right">10</span></div>
                </li>
                <li className="mtop15p">
                  <div>NoDa Drop & Roll <span className="pull-right">10</span></div>
                </li>
                <li className="mtop15p">
                  <div>Hoppyum IPA <span className="pull-right">10</span></div>
                </li>
                <li className="mtop15p">
                  <div>Sam Adams Summer Ale <span className="pull-right">10</span></div>
                </li>
                <li className="mtop15p">
                  <div>Bluemoon <span className="pull-right">10</span></div>
                </li>
                <li className="mtop15p">
                  <div>Bud Light <span className="pull-right">10</span></div>
                </li>
                <li className="mtop15p">
                  <div>Yuengling <span className="pull-right">10</span></div>
                </li>
                <li className="mtop15p">
                  <div>Landshark <span className="pull-right">10</span></div>
                </li>
                <li className="mtop15p">
                  <div>Red Oak <span className="pull-right">10</span></div>
                </li>
                <li className="mtop15p">
                  <div>Carolina Blond Ale <span className="pull-right">10</span></div>
                </li>
                <li className="mtop15p">
                  <div>Hi Wire Margarita Sour <span className="pull-right">10</span></div>
                </li>
                <li className="mtop15p">
                  <div>Stem Cider Hibiscus <span className="pull-right">10</span></div>
                </li>
              </ul>
            </div>
          </div>

    </div>
  </div>

 </div>
 
 
 {/*<div style={{ margin:'15px' }}>
  <ContainerFluid>
    <Title name="Zebra Shades Blind Systems" />
    <Images list={["zebra_1.jpg","zebra_2.jpg","zebra_3.jpg","zebra_4.jpg","zebra_5.jpg","zebra_6.jpg","zebra_7.jpg","zebra_8.jpg"]}/>
    <Title name="Roller Shades Blind Systems" />
    <Images list={["roller_1.jpg","roller_2.jpg","roller_3.jpg","roller_4.jpg","roller_5.jpg","roller_6.jpg","roller_7.jpg","roller_8.jpg"]}/>
  </ContainerFluid>
 </div>*/}
 <Contact />
 <Footer />
 </>);
};

export default Products;