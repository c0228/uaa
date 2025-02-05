import React from "react";
import { ContainerFluid, Row, Col, Breadcrumb, Colors, Button, Select, Card, Switch } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import BlogArticleHeader from '@Components/blog-article-header/index.js';

const M1M2M3D = () =>{
 const BreadcrumbPage = () =>{
     return (<div className="mtop15p mbot15p">
         <Breadcrumb backgroundColor={Colors.light} 
             data={[{ label:'Home', url:process.env.PROJECT_URL },
                 { label:'There are three Microservices M1,M2, M3 associated with three Databases D1, D2, D3 respectively. Now, M1 is calling M2 and M2 is calling M3. If M3 transaction fails, M1 and M2 Database Transactions should roll back. How could you handle this?', url:'#' }
             ]} />
         </div>)
 };
 return (<div>
  <Header menulinks={HeaderMenu} activeId="Home" />
   <ContainerFluid>
      <Row>
        <Col md={8}>
          <BreadcrumbPage />
          <BlogArticleHeader title="There are three Microservices M1,M2, M3 associated with three Databases D1, D2, D3 respectively. Now, M1 is calling M2 and M2 is calling M3. If M3 transaction fails, M1 and M2 Database Transactions should roll back. How could you handle this?" date="October 26, 2024" />
        </Col>
       </Row>
    </ContainerFluid>
 </div>);
};

export default M1M2M3D;