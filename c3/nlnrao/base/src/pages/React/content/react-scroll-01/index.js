import React, { useEffect } from "react";
import { ContainerFluid, Row, Col } from "e-ui-react";
import Breadcrumb from '@Components/breadcrumb/index.js';

const ReactScroll01 = () =>{
 useEffect(()=>{ window.scrollTo({ top: 0, behavior: 'smooth' }); },[]); // Smooth scroll to top
 return (<ContainerFluid>
    <Row>
        <Col xxl={8} xl={8}>
            <Breadcrumb data={[{ "label": "ReactJS", "url":"#" },
                    { "label": "Package: react-scroll", "url":"#" }]} /><div>
    <div className="mtop15p">
        <h3 className="blog-head"><b>Scroll to respective section on a page when a link is clicked from other page</b></h3>
    </div>
 </div>
 </Col>
 </Row>
 </ContainerFluid>);
};

export default ReactScroll01;