import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Icon } from "e-ui-react";
import DevChoiceData from "@MainStaticData/dev-choice.json";

const DevChoice = () =>{
 return (<div style={{ marginRight: '5px' }}>
    {DevChoiceData?.data?.map((d,i)=>{
        const formattedNumber = (i>8)?(i+1):'0'+(i+1);
        const descFix = d?.descFix;
        return (<div key={i} style={{ marginTop:'16px' }}>
        <Link to={d?.url} style={{ textDecoration:'none' }} className="blog-fade">
        <Row>
        <Col all={2}>
            <div align="center" style={{ fontSize:'26px',color:'#bbb' }}>{formattedNumber}</div>
        </Col>
        <Col all={10}>
            <div style={{ marginBottom:'5px', lineHeight:'26px', paddingTop:'3px', fontSize:'16px', color:'#000' }}><b>{d?.title}</b></div>
            <div style={{ fontFamily:'Metropolis', lineHeight:'28px', paddingTop:'3px', fontSize:'14px', color:'#555' }}>
                {(d?.desc?.length>descFix)?(d?.desc?.substring(0,descFix)+'...') : (d?.desc)}
            </div>
            <div style={{ color:'#777',marginTop:'6px' }}>
                <Icon type="FontAwesome" name="fa-file-text" style={{ marginRight:'3px' }} /> <i>{d?.createdOn}</i>
                <span className="pull-right">
                 <Icon type="FontAwesome" name="fa-dot-circle-o" style={{ marginRight:'3px' }} /> <i>{d?.minRead} min read</i>
                </span>
            </div>
        </Col>
        </Row>
        </Link>
        </div>);
    })}
  </div>); 
};

export default DevChoice;