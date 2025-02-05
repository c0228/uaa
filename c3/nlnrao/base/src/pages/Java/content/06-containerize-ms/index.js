import React from "react";
import { ContainerFluid, Row, Col, Breadcrumb, Colors, Button, Select, Card, Switch } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import BlogArticleHeader from '@Components/blog-article-header/index.js';

const ContainerizeMs = () =>{
 const BreadcrumbPage = () =>{
     return (<div className="mtop15p mbot15p">
         <Breadcrumb backgroundColor={Colors.light} 
             data={[{ label:'Home', url:process.env.PROJECT_URL },
                 { label:'How Docker and Kubernetes can be used to containerize Java microservices and manage them in a distributed environment, including integration with Spring Boot applications?', url:'#' }
             ]} />
         </div>)
 };
 return (<div>
  <Header menulinks={HeaderMenu} activeId="Home" />
   <ContainerFluid>
      <Row>
        <Col md={8}>
          <BreadcrumbPage />
          <BlogArticleHeader title="How Docker and Kubernetes can be used to containerize Java microservices and manage them in a distributed environment, including integration with Spring Boot applications?" date="October 26, 2024" />
        </Col>
       </Row>
    </ContainerFluid>
 </div>);
};

export default ContainerizeMs;