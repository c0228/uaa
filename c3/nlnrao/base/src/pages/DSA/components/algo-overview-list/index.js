import React from "react";
import { Card } from "e-ui-react";
import './index.css';

const AlgoOverviewList = ({ header, desc, data }) =>{
 return (<div className="mbot15p">
       <Card backgroundColor="#f4f4f4">
         <div align="center" className="mtop15p"><h4><b>{header}</b></h4></div>
         <div className="pad15p" style={{ lineHeight:'26px' }}>
         {desc && (<div>{desc}</div>)}
       {data?.map((d,i)=>{
         return (<a href={process.env.PROJECT_URL+d?.[2]} style={{ textDecoration:'none' }}>
          <div key={i} style={{ cursor:'pointer', backgroundColor:'#f9f9f9', padding:'15px', marginTop:'8px', 
           borderRadius:'12px', border:'1px dashed #aaa'}}>
            <span style={{ fontSize:'16px' }}><b>{d?.[0]}</b></span>
           {d?.[1] && (<span style={{ marginLeft:'5px' }}><b>–</b><br/> 
            <div style={{ color:'#333', paddingTop:'5px', lineHeight:'26px' }}>{d?.[1]}</div>
           </span>)}
           </div>
           </a>);
       })}
         </div>
       </Card>
 </div>);
};

export default AlgoOverviewList;