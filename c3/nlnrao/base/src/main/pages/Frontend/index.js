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
import SimpleTable from "@MainComponents/simple-table/index.js";

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
            <BlogListHeader label="React Framework: Programming" />
            <BlogContent label="react-program" rows={2} />
            <SimpleTable header={[(<div><b>Topic</b></div>),(<div>Solving / Coding Problems</div>)]} 
              columns={[
                  [(<div><b>useState</b></div>), (<div>Create a simple counter component using useState. Include buttons to increment and decrement the counter.</div>)],
                  [(<div><b>useEffect</b></div>), (<div></div>)],
                  [(<div><b>useMemo</b></div>), (<div></div>)],
                  [(<div><b>useCallback</b></div>), (<div></div>)],
                  [(<div><b>useContext</b></div>), (<div></div>)],
                  [(<div><b>Redux Saga</b></div>), (<div></div>)],
                  [(<div><b>Custom Hook</b></div>), (<div></div>)],
                  [(<div><b>Concurrent Updates</b></div>), (<div></div>)],
                  [(<div><b>Reusability with Props</b></div>), (<div></div>)],
                  [(<div><b>Basic Higher-Order Component (HOC) Creation</b></div>), (<div></div>)],
                  [(<div><b>Higher-Order Component (HOC) for Loading State</b></div>), (<div></div>)],
                  [(<div><b>Higher-Order Component (HOC) for Authentication</b></div>), (<div></div>)],
                  [(<div><b>Compare Higher-Order Component (HOC) vs Custom Hook</b></div>), (<div></div>)],
                ]} />
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