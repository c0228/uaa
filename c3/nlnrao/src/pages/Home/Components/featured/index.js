import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Icon } from "e-ui-react";
import BlogItems from '@Components/blog-items/index.js';
import FeaturedData from '@StaticData/featured.json';

const FeaturedItem = ({ data }) =>{

 return (<div>
    <hr/>
    <div align="center" style={{ fontWeight:'bold', textTransform:'uppercase', letterSpacing:'2px', fontSize:'15px', lineHeight: '28px', paddingTop:'15px' }}>{data.title}</div>
    <hr/>
    <div className="mtop15p">
    <Row>
        <Col xxl={6} xl={6}>
            <BlogItems itemList={data?.list1} />
        </Col>
        <Col xxl={6} xl={6}>
            <BlogItems itemList={data?.list2} />
        </Col>
    </Row>
    </div>
 </div>);
};

export const FeaturedList = ()=>{
 return (<>
 {FeaturedData?.data?.map((feature, index)=>{
  return (<FeaturedItem key={index} data={feature} />);
 })}
  
 </>);
};
