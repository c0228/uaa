import React from "react";
import { Icon } from "e-ui-react";

const FeatureTile = ({ icon, size, title, desc, config }) =>{
    return (<div style={{ display:'flex', flexDirection:'row' }}>
        <div style={{ margin:'15px', alignItems:'center', justifyContent:'center' }}>
            <Icon type="FontAwesome" name={icon} size={size} color={config?.color?.icon} />
        </div>
        <div style={{ margin:'15px' }}>
            <h4 style={{ lineHeight:'28px', fontSize:'18px', fontFamily:'MetropolisBold', color:config?.color?.title }}><b>{title}</b></h4>
            <div style={{ fontSize:'16px', lineHeight:'30px' }}>{desc}</div>
        </div>
     </div>);
 };

 export default FeatureTile;