import React, { useState } from "react";
import { ContainerFluid, Row, Col, Modal } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import BlogListHeader from '@Components/blog-list-header/index.js';
import BlogItems from '@Components/blog-items/index.js'; 
import BlogData from '@StaticData/frontend/home-list.json';
import FeHeader from "./components/fe-header/index.js";

const Frontend = () =>{

 const BlogContent = ({ label, rows })=>{
     return (<Row>
         {Array.from({ length: rows }).map((_, index) => (
           <Col key={index} xxl={12/rows} xl={12/rows}>
             <BlogItems itemList={BlogData?.[label]?.["row"+(index+1)]} />
           </Col>
         ))}
     </Row>);
 };

 return (<div>
  <Header menulinks={HeaderMenu} activeId="Frontend" />
  <FeHeader />
  <div className="mtop15p">
  <ContainerFluid>
    <Row>
        <Col md={8}>
            <BlogListHeader label="Introduction: The Evolution of Frontend Development" />
            <BlogContent label="evolve" rows={2} />
        </Col>
        <Col md={4}></Col>
    </Row>
  </ContainerFluid>
  </div>
 </div>);
};



export default Frontend;