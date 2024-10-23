import React from "react";
import { Row, Col, Icon } from "e-ui-react";

const EmpInfo = ({ data }) =>{
 const keys = Object.keys(data);
 return (<Row>
            {keys?.map((d,i)=>{ 
              return (<Col key={i} md={6}>
              <div style={{ color:'#777', marginTop:'15px', marginBottom:'15px' }}>
                <Icon type="FontAwesome" name={data?.[d]?.icon} size={16} />
                <span style={{ marginLeft:'6px', fontSize:'14px' }}><b>{d}</b></span>
              </div>
              <div style={{ fontSize:'14px', marginTop:'15px', marginBottom:'15px', lineHeight:'22px' }}>
                <b>{data?.[d]?.label}</b>
              </div>
              </Col>);
            })}
  </Row>);
 };

export default EmpInfo;