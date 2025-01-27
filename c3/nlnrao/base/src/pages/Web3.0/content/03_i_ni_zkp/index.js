import React from "react";
import { ContainerFluid, Row, Col, Breadcrumb, Colors, Button, Select, Card, Switch } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import BlogArticleHeader from '@Components/blog-article-header/index.js';
import Introduction from "./components/introduction/index.js";

const ZKP02 = () =>{
 const BreadcrumbPage = () =>{
     return (<div className="mtop15p mbot15p">
         <Breadcrumb backgroundColor={Colors.light} 
             data={[{ label:'Web 3.0', url:process.env.PROJECT_URL+'tech/web3.0/overview' },
                 { label:'Interactive ZKPs vs. Non-interactive ZKPs', url:'#' }
             ]} />
         </div>)
  };
  return (<div>
  <Header menulinks={HeaderMenu} activeId="Blockchain" />
  <ContainerFluid>
    <Row>
     <Col xs={12} xl={8} xxl={8}>
      <div className="mbot60p">
        <BreadcrumbPage />
        <BlogArticleHeader title="Interactive ZKPs vs. Non-interactive ZKPs" date="October 26, 2024" />
        <Introduction />
      </div>
     </Col>
    </Row>
  </ContainerFluid>
 </div>);
};

export default ZKP02;