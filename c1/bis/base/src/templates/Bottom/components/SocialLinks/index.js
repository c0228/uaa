import React from "react";
import { Icon } from "e-ui-react";
import './index.css';

const SocialLinks = ({ list }) =>{
 return (<div align="center" className="pad15p">
    <div className="bis-hgl-text uppercase"><b>Follow us on</b></div>
    <div className="mtop15p">
        {list?.map((l,i)=>{
            return (<a target="_blank" href={l?.url} style={{ textDecoration:'none', color:'#000' }}>
            <Icon key={i} type="FontAwesome" name={"fa-"+l?.label} className="social-link" style={{ marginBottom:'15px' }} />
            </a>);
        })}
    </div>
 </div>);
};

export default SocialLinks;