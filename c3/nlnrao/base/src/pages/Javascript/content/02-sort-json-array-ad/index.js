import React from "react";
import { ContainerFluid, Row, Col, Breadcrumb, Colors, Button, Select, Card, Switch } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import BlogArticleHeader from '@Components/blog-article-header/index.js';

const SortJSONArrayAD = () =>{
 const BreadcrumbPage = () =>{
     return (<div className="mtop15p mbot15p">
         <Breadcrumb backgroundColor={Colors.light} 
             data={[{ label:'Home', url:process.env.PROJECT_URL },
                 { label:'Sorting an Element in JSON Array in Ascending and Descending Order', url:'#' }
             ]} />
         </div>)
 };
 return (<div>
  <Header menulinks={HeaderMenu} activeId="Home" />
   <ContainerFluid>
      <Row>
        <Col md={8}>
          <BreadcrumbPage />
          <BlogArticleHeader title="Sorting an Element in JSON Array in Ascending and Descending Order" date="October 26, 2024" />
        </Col>
       </Row>
    </ContainerFluid>
 </div>);
};

export default SortJSONArrayAD;