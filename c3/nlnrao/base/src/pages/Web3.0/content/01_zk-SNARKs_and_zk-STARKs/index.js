import React from "react";
import { ContainerFluid, Row, Col, Breadcrumb, Colors, Button, Select, Card, Switch } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import BlogArticleHeader from '@Components/blog-article-header/index.js';
import Introduction from './components/introduction/index.js';

const ZKP01 = ()=>{
 const BreadcrumbPage = () =>{
    return (<div className="mtop15p mbot15p">
        <Breadcrumb backgroundColor={Colors.light} 
            data={[{ label:'Web 3.0', url:'#' },
                { label:'Understanding zk-SNARKs and zk-STARKs: A Developer’s Perspective', url:'#' }
            ]} />
        </div>)
 };
 return (<>
 <Header menulinks={HeaderMenu} activeId="Blockchain" />
 <ContainerFluid>
    <Row>
        <Col xs={12} xl={8} xxl={8}>
          <div className="mbot60p">
            <BreadcrumbPage />
            <BlogArticleHeader title="Understanding zk-SNARKs and zk-STARKs: A Developer’s Perspective" date="October 26, 2024" />
            <Introduction />
          </div>
        </Col>
        <Col xs={12} xl={4} xxl={4}></Col>
    </Row>
 </ContainerFluid>
 </>);
};

export default ZKP01;