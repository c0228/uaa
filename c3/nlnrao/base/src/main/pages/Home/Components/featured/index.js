import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Icon } from "e-ui-react";
import BlogItems from '@MainComponents/blog-items/index.js';
import FeaturedData from '@MainStaticData/featured.json';

const FeaturedItem = ({ data }) =>{

 return (<div>
    <div align="center" style={{ borderTop:'1px solid #ccc', borderBottom:'1px solid #ccc', backgroundColor:'#ffffcf', fontWeight:'bold', textTransform:'uppercase', 
        letterSpacing:'2px', fontSize:'15px', lineHeight: '28px', marginTop:'15px', padding:'15px' }}>{data.title}</div>
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
