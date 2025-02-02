import React from "react";
import { ContainerFluid, Row, Col } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import BlogListHeader from '@Components/blog-list-header/index.js';
import BlogItems from '@Components/blog-items/index.js';
import BlogData from '@StaticData/system-design/overview.json';
import Terminologies from '@Components/terminologies-list/index.js';
import LLDData from "@StaticData/system-design/lld-data.json";
import HLDData from "@StaticData/system-design/hld-data.json";
import SDKeyGoals from "./components/sd-key-goals/index.js";
import SDComponents from './content/01-sd-components/index.js';

const SystemDesign = () =>{

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
  <Header menulinks={HeaderMenu} activeId="SystemDesign" />
  <ContainerFluid>
    <Row>
        <Col md={12} xl={12} xxl={12}>
            <BlogListHeader label="System Design - Architectural Patterns" />
            
        </Col>
    </Row>
    <Row>
        <Col md={8} xl={8} xxl={8}>
            <BlogContent label="sd-ap" rows={2} />

            <BlogListHeader label="Distributing System - Scalability and Performance" />
            <BlogContent label="ds-sp" rows={2} />

            
            

        </Col>
        <Col md={4} xl={4} xxl={4}>
            <SDKeyGoals />
            <div className="mtop15p">
                <Terminologies title="L L D ( Low - Level Design ) Topics" data={LLDData} />
                <Terminologies title="H L D ( High - Level Design ) Topics" data={HLDData} />
            </div>
            
        </Col>
    </Row>
  </ContainerFluid>
 </div>);
};

export default SystemDesign;