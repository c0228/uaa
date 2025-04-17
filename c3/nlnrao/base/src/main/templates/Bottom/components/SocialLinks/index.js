import React from "react";
import { Icon } from "e-ui-react";
import PropTypes from "prop-types";

import './index.css';

const SocialLinks = ({ list }) =>{
 return (<div className="textAlignCenter pad15p">
    <div className="bis-hgl-text uppercase"><b>Follow us on</b></div>
    <div className="mtop15p">
        {list?.map((l,i)=>{
            return (<a key={i} target="_blank" href={l?.url} style={{ textDecoration:'none', color:'#000' }} rel="noreferrer">
            <Icon key={i} type="FontAwesome" size={28} name={"fa-"+l?.label} className="social-link" style={{ marginBottom:'15px' }} />
            </a>);
        })}
    </div>
 </div>);
};

// Default props
SocialLinks.defaultProps = {
    list: [],
  };
  
  // PropTypes validation
  SocialLinks.propTypes = {
    list: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
      })
    ),
  };

export default SocialLinks;