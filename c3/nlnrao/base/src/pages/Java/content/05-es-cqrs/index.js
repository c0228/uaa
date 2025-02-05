import React from "react";
import { ContainerFluid, Row, Col, Breadcrumb, Colors, Button, Select, Card, Switch } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import BlogArticleHeader from '@Components/blog-article-header/index.js';

const EsCqrs = () =>{
 const BreadcrumbPage = () =>{
     return (<div className="mtop15p mbot15p">
         <Breadcrumb backgroundColor={Colors.light} 
             data={[{ label:'Home', url:process.env.PROJECT_URL },
                 { label:'The principles of Event Sourcing and Command Query Responsibility Segregation (CQRS)', url:'#' }
             ]} />
         </div>)
 };
 return (<div>
  <Header menulinks={HeaderMenu} activeId="Home" />
   <ContainerFluid>
      <Row>
        <Col md={8}>
          <BreadcrumbPage />
          <BlogArticleHeader title="The principles of Event Sourcing and Command Query Responsibility Segregation (CQRS) in building event-driven microservices with Java and Spring Boot, and how they enhance scalability and maintainability." date="October 26, 2024" />
        </Col>
       </Row>
    </ContainerFluid>
 </div>);
};

export default EsCqrs;