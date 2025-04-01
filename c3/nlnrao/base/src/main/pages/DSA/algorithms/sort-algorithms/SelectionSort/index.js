import React from "react";
import { ContainerFluid, Row, Col, Breadcrumb, Colors, Button, Select, Card, Switch, Order } from "e-ui-react";
import Header from '@MainTemplates/Header/index.js';
import { HeaderMenu } from '@MainConfig/HeaderMenu.js';
import BlogArticleHeader from '@MainComponents/blog-article-header/index.js';
import DSANotations from '@MainPages/DSA/components/home/dsa-notations/index.js';
import Introduction from './components/Introduction/index.js';
import VisualRep from './components/VisualRep/index.js';
import AsymptoticNotations from './components/AsymptoticNotations/index.js';
import Others from './components/Others/index.js';

const SelectionSort = ({ meta }) =>{
 return (<div>
   <Header menulinks={HeaderMenu} activeId="DSA" />
   <ContainerFluid>
    <Row>
        <Col md={8}>
            <BlogArticleHeader metaData={meta} />
            <Introduction />
            <VisualRep />
            <AsymptoticNotations />
            <Others />
        </Col>
        <Col md={4}>
            <DSANotations />
        </Col>
    </Row>
    </ContainerFluid>
</div>);
};

export default SelectionSort;