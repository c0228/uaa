import React, { useState } from "react";
import { ContainerFluid, Row, Col, Modal } from "e-ui-react";
import Header from '@MainTemplates/Header/index.js';
import { HeaderMenu } from '@MainConfig/HeaderMenu.js';
import BlogListHeader from '@MainComponents/blog-list-header/index.js';
import BlogItems from '@MainComponents/blog-items/index.js'; 
import BlogData from '@MainStaticData/frontend/home-list.json';
import Terminologies from '@MainComponents/terminologies-list/index.js';
import FeHeader from "./components/fe-header/index.js";
import JSRoutes from "@MainPages/Javascript/component.routes.json";

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
        <Col md={4}>
          <Terminologies title="Javascript Terminologies" prefix="tech/javascript/terminologies/" data={JSRoutes?.urls} />
        </Col>
    </Row>
  </ContainerFluid>
  </div>
 </div>);
};



export default Frontend;