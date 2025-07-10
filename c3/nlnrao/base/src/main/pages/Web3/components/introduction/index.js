import React from "react";
import { Icon } from "e-ui-react";

const data = [{
    "header":"Market Trends",
    "title": "Dedollarization vs Cryptocurrency: The Battle for Monetary Future with a shift in Global Financial Power",
    "desc": "Dedollarization and the rise of cryptocurrency signal a global shift toward decentralized financial systems, challenging the dominance of traditional fiat currencies.",
}];

const Introduction = () =>{
 return (<div>
    <div>
          <span style={{ borderLeft:'5px solid #555', display:'inline-block', letterSpacing:'1px',
            boxShadow:'2px 2px 2px 2px #f5f5f5',
            backgroundColor:'#ddd', padding:'8px', width:'40%', textTransform:'uppercase' }}><b>{data?.[0]?.header}</b></span>
        </div>
        <div style={{ paddingTop:'15px', paddingLeft:'5px' }}>
          <span style={{ fontFamily:"Metropolis", lineHeight:'26px' }}><b>{data?.[0]?.title}</b></span>
        </div>
        <div style={{ paddingTop:'5px', paddingLeft:'5px', color:'#888', lineHeight:'23px' }}>
          <span>{data?.[0]?.desc}</span>
        </div>
        <div align="right" style={{ padding:'5px' }}>
          <span style={{ cursor:'pointer' }}>
            <span style={{ paddingRight:'5px' }}><b>Read More</b></span> 
            <Icon type="FontAwesome" name="fa-caret-square-o-right" size={13} />
          </span>
        </div>
 </div>);
};

export default Introduction;