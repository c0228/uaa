import React from "react";
import { ContainerFluid, Row, Col, Breadcrumb, Colors, Button, Select, Card, Switch } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import BlogArticleHeader from '@Components/blog-article-header/index.js';

const ScgVsZuul = () =>{
 const BreadcrumbPage = () =>{
     return (<div className="mtop15p mbot15p">
         <Breadcrumb backgroundColor={Colors.light} 
             data={[{ label:'Home', url:process.env.PROJECT_URL },
                 { label:'Explain Spring Cloud Gateway vs. Zuul. Which one would you use for API Gateway in a modern microservices ecosystem?', url:'#' }
             ]} />
         </div>)
 };
 return (<div>
  <Header menulinks={HeaderMenu} activeId="Home" />
   <ContainerFluid>
      <Row>
        <Col md={8}>
          <BreadcrumbPage />
          <BlogArticleHeader title="Explain Spring Cloud Gateway vs. Zuul. Which one would you use for API Gateway in a modern microservices ecosystem?" date="October 26, 2024" />
        </Col>
       </Row>
    </ContainerFluid>
 </div>);
};

export default ScgVsZuul;