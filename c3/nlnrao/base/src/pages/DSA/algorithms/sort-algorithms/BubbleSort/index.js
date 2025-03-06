import React from "react";
import { ContainerFluid, Row, Col, Breadcrumb, Colors, Button, Select, Card, Switch } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import BlogArticleHeader from '@Components/blog-article-header/index.js';
import OrderList from '@Components/order-list/index.js';
import GraphRepresentation from './components/GraphRepresentation/index.js';

const BubbleSort = ({ meta }) =>{
  const Introduction = () =>{
    return (<div className="mtop15p lh36p fs16p"><i>Bubble Sort Algorithm is the used to sort the values in Ascending or Descending Order.
        The Technique followed here is to swap adjacent elements repeatedly until result is achieved.</i>
    </div>);
  };
  return (<div>
  <Header menulinks={HeaderMenu} activeId="SystemDesign" />
  <ContainerFluid>
    <Row>
      <Col md={8}>
        <BlogArticleHeader metaData={meta} />
        <Introduction />
        <GraphRepresentation />
      </Col>
    </Row>
  </ContainerFluid>
  </div>);
};

export default BubbleSort;