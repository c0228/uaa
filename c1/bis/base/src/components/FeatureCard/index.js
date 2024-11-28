import React from "react";
import { Row, Col, Icon } from "e-ui-react";
import './index.css';

const FeatureCard = ({ data, rowSize, colorConfig }) =>{
 const titleColor = colorConfig?.color?.title || "#000040" ;
 const contentColor = colorConfig?.color?.content || "#555";
 const iconColor = colorConfig?.color?.icon || "#000040";
 const Item = ({ data })=>{
  return (<div className="d-flex pad15p">
    <div align="center" style={{ width:'25%' }}>
        <Icon type="FontAwesome" name={data?.icon} className="wApp-featureCard-icon" color={iconColor} />
    </div>
    <div className="pad15p" style={{ width:'75%' }}>
        <div className="bis-hgl-text"  style={{ color: titleColor }}><b>{data?.title}</b></div>
        <div className="bis-hgl-text"  style={{ color: contentColor  }}>{data?.content}</div>
    </div>
  </div>);
 };
 return (<Row>{data?.map((d,i)=>(<Col key={i} md={rowSize?(12/rowSize):4}><Item data={d} /></Col>))}</Row>);
};

export default FeatureCard;