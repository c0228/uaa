import React from "react";
import { Icon } from "e-ui-react";
import './index.css';

const SocialLinks = ({ list }) =>{
 return (<div>
    <div align="center" style={{ marginTop:'35px' }}>
        <span style={{ fontSize:'14px' }}><b>SOCIAL LINKS</b></span>
    </div>
    <div style={{ marginTop:'15px' }}>
        {list?.map((l,i)=>{
            return (<Icon type="FontAwesome" name={"fa-"+l} size={28} className="social-link" />);
        })}
    </div>
 </div>);
};

export default SocialLinks;