import React from "react";
import { ContainerFluid, Row, Col, TextBox, Button, Select, Card, Switch } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import BlogItems from '@Components/blog-items/index.js'; 
import BlogData from '@StaticData/web3-blog-list.json';

const Web3 = ()=>{
 const BlogTitle = ({ label })=>{
  return (<Row>
    <Col all={12}>
        <div className="mtop35p mbot15p">
          <div className="list-header">{label}</div>
        </div>
    </Col>
  </Row>);
 };

 const BlogContent = ({ label, rows })=>{
    return (<Row>
        {Array.from({ length: rows }).map((_, index) => (
          <Col key={index} xxl={12/rows} xl={12/rows}>
            <BlogItems itemList={BlogData?.[label]?.["row"+(index+1)]} />
          </Col>
        ))}
    </Row>);
 };

 return (<>
 <Header menulinks={HeaderMenu} activeId="Blockchain" />
 <ContainerFluid>
    <Row>
        <Col xs={12} xl={8} xxl={8}>
          <BlogTitle label="Zero Knowledge Proofs (ZKPs)" />
          <BlogContent label="zkp" rows={2} />
            
        </Col>
        <Col xs={12} xl={4} xxl={4}>
        </Col>
    </Row>
 </ContainerFluid>
 </>);
};

export default Web3;