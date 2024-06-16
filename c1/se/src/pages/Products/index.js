import React, { useState, useEffect } from "react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import { ContainerFluid, Row, Col, Card, Switch, Button, Select, Icon } from "e-ui-react";
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

 const Images = ({ list })=>{
  return (<Row>
   {list?.map((l,i)=>{
    return (<Col key={i} xs={12} xl={4} xxl={3}><img src={process.env.PROJECT_URL+"assets/brands/"+l} className="mbot25p" 
    style={{ borderRadius:'8px', boxShadow:'2px 2px 2px 2px #eee' }} /></Col>);
   })}
  </Row>);
 };

 return (<>
 <Header menulinks={HeaderMenu} activeId="Products" />
 <div style={{ margin:'15px' }}>
  <ContainerFluid>
    <Title name="Zebra Shades Blind Systems" />
    <Images list={["zebra_1.jpg","zebra_2.jpg","zebra_3.jpg","zebra_4.jpg","zebra_5.jpg","zebra_6.jpg","zebra_7.jpg","zebra_8.jpg"]}/>
    <Title name="Roller Shades Blind Systems" />
    <Images list={["roller_1.jpg","roller_2.jpg","roller_3.jpg","roller_4.jpg","roller_5.jpg","roller_6.jpg","roller_7.jpg","roller_8.jpg"]}/>
  </ContainerFluid>
 </div>
 <Footer />
 </>);
};

export default Products;