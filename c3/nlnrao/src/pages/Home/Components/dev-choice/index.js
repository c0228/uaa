import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "e-ui-react";
import DevChoiceData from "@StaticData/dev-choice.json";

const DevChoice = () =>{
 return (<div style={{ marginRight: '5px' }}>
    {DevChoiceData?.data?.map((d,i)=>{
        const formattedNumber = (i>8)?(i+1):'0'+(i+1);
        return (<div key={i} style={{ marginTop:'15px' }}>
        <Link to={d?.url} style={{ textDecoration:'none' }} className="blog-fade">
        <Row>
        <Col all={2}>
            <div align="center" style={{ fontSize:'26px',color:'#bbb' }}>{formattedNumber}</div>
        </Col>
        <Col all={10}>
            <div style={{ fontFamily:'Metropolis', paddingTop:'3px', fontSize:'14px', color:'#333' }}>{d?.title}</div>
            <div style={{ color:'#aaa',marginTop:'6px' }}>
                <i className="fa fa-file-text" style={{ marginRight:'3px' }} aria-hidden="true"></i> {d?.createdOn}
                <span className="pull-right">
                <i className="fa fa-dot-circle-o" style={{ marginRight: '3px' }} aria-hidden="true"></i> {d?.minRead} min read
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