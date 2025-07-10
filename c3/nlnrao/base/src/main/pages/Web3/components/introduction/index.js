import React from "react";
import { Icon, Row, Col } from "e-ui-react";

const data = [{
    "header":"De-Fi Trends",
    "title": "Dedollarization vs Cryptocurrency: The Battle for Monetary Future with a shift in Global Financial Power",
    "desc": "Dedollarization and the rise of cryptocurrency signal a global shift toward decentralized financial systems, challenging the dominance of traditional fiat currencies.",
},{
  "header":"Gaming & Metaverse",
  "title":"",
  "desc":""
},{
  "header":"De-AI Solutions",
  "title":"",
  "desc":""
}];

const Introduction = () =>{
 return (<div>
  <Row style={{ backgroundColor:'#f9f9f9', border:'1px dashed #aaa', margin:'3px', padding:'15px' }}>
    {data?.map((d,i)=>{
      return (<Col key={i} md={4}>
        <div>
          <span style={{ borderLeft:'5px solid #555', display:'inline-block', letterSpacing:'1px',
            boxShadow:'2px 2px 2px 2px #f5f5f5',
            backgroundColor:'#ddd', padding:'8px', width:'60%' }}><b>{d?.header}</b></span>
        </div>
        <div style={{ paddingTop:'15px', paddingLeft:'5px' }}>
          <span style={{ fontFamily:"Metropolis", lineHeight:'26px' }}><b>{d?.title}</b></span>
        </div>
        <div style={{ paddingTop:'5px', paddingLeft:'5px', color:'#888', lineHeight:'23px' }}>
          <span>{d?.desc}</span>
        </div>
        <div align="right" style={{ padding:'5px' }}>
          <span style={{ cursor:'pointer' }}>
            <span style={{ paddingRight:'5px' }}><b>Read More</b></span> 
            <Icon type="FontAwesome" name="fa-caret-square-o-right" size={13} />
          </span>
        </div> 
      </Col>);
    })}
  </Row>
 </div>);
};

export default Introduction;