import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "e-ui-react";
import DevChoiceData from "@StaticData/dev-choice.json";

const DevChoice = () =>{
 return (<div style={{ marginRight: '5px' }}>
    {DevChoiceData?.data?.map((d,i)=>{
        const formattedNumber = (i>8)?(i+1):'0'+(i+1);
        return (<div key={i} style={{ marginTop:'15px' }}>
        <Link to={d?.url} style={{ textDecoration:'none' }}>
        <Row>
        <Col all={2}>
            <span style={{ fontSize:'26px',color:'#ddd' }}>{formattedNumber}</span>
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
 {/*for(let index=0;index<data.length;index++){
	 let url = data[index]?.url;
	 let formattedNumber = (index>8)?(index+1):'0'+(index+1);
	 content+='<div class="row mtop15p" style="margin-left:1px;margin-right:2px;">';
	 content+='<div class="col-2" style="font-size:26px;color:#ddd;padding-top:5px;"><b>'+formattedNumber+'</b></div>';
	 content+='<div class="col-10">';
	 content+='<div style="cursor:pointer;" onClick="javascript:reDirect(\''+url+'\');"><span class="f16"><b>'+data[index]?.title+'</b></span></div>';
	 content+='<div style="color:#aaa;margin-top:6px;">';
	 content+='<i class="fa fa-file-text" style="margin-right:3px;" aria-hidden="true"></i> '+data[index]?.createdOn;
	 content+='<span class="pull-right">';
	 content+='<i class="fa fa-dot-circle-o" style="margin-right:3px;" aria-hidden="true"></i> '+data[index]?.minRead+' min read';
	 content+='</span>';
	 content+='</div>';
	 content+='</div>';
	 content+='</div>';
 */} 
  </div>); 
};

export default DevChoice;