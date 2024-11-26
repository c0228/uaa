import React from "react";
import { Icon } from "e-ui-react";
import './index.css';

const SocialLinks = ({ list }) =>{
 return (<div align="center">
    <div style={{ marginTop:'35px' }}>
        <span style={{ fontSize:'14px' }}><b>FOLLOW US ON</b></span>
    </div>
    <div style={{ marginTop:'15px' }}>
        {list?.map((l,i)=>{
            return (<a target="_blank" href={l?.url} style={{ textDecoration:'none', color:'#000' }}>
            <Icon key={i} type="FontAwesome" name={"fa-"+l?.label} size={28} className="social-link" style={{ marginBottom:'15px' }} />
            </a>);
        })}
    </div>
 </div>);
};

export default SocialLinks;