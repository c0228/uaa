import React from "react";
import { ContainerFluid, Row, Col, Card } from "e-ui-react";
import OrderList from "@MainComponents/order-list/index.js";
import Header from '@MainTemplates/Header/index.js';
import { HeaderMenu } from '@MainConfig/HeaderMenu.js';
import Bottom from '@MainTemplates/Bottom/index.js';

const TermsAndConditions = () =>{
 return (<div className="mbot15p">
     <Header menulinks={HeaderMenu} />
     <ContainerFluid>
         <Row>
             <Col md={12}>
                 <div>
                     <hr/><h2 className="blog-head" style={{ paddingTop:'15px' }}><b>Terms and Conditions</b></h2><hr/>
                 </div>
             </Col>
         </Row>
         <Row>
             <Col md={8}></Col>
             <Col md={4}>
                 <div className="core-summary-title mtop15p"><b>TERMS & CONDITIONS - SUMMARY</b></div>
                 <div className="mtop15p">
                     <Card padding={15} backgroundColor="#f5f5f5">
                         <div>
                             <div align="center"><h5><b>What are Terms and Conditions?</b></h5></div>
                             <div className="blog-desc mtop5p">
                                Terms & Conditions (T&C) defines the rules of using the website – what users can or cannot do, 
                                payment terms (if any), account use, termination, etc.<br/>
                                It helps limit liability, protect content, and legally bind users to website rules.       
                             </div>
                         </div>
                     </Card>
                 </div>
             </Col>
         </Row>
     </ContainerFluid>
     <Bottom />
  </div>);
};

export default TermsAndConditions; 