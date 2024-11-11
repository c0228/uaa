import React from "react";
import { Row, Col, Icon } from "e-ui-react";

const FeatureCard = ({ data, rowSize }) =>{
 const Item = ({ data })=>{
  return (<div style={{ display:'flex', padding:'15px' }}>
    <div style={{ width:'25%', paddingTop:'18px' }}>
        <Icon type="FontAwesome" name={data?.icon} size={80} color="#000040" />
    </div>
    <div style={{ width:'75%', padding:'15px' }}>
        <div><h4 style={{ color:"#000040" }}><b>{data?.title}</b></h4></div>
        <div style={{ lineHeight:'34px', fontSize:'18px', color:'#555'  }}>{data?.content}</div>
    </div>
  </div>);
 };
 return (<Row>{data?.map((d,i)=>(<Col key={i} md={rowSize?(12/rowSize):4}><Item data={d} /></Col>))}</Row>);
};

export default FeatureCard;