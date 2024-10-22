import React from "react";
import { Badge, Icon } from "e-ui-react";

const BlurDetails = ({ text })=>{
    return (<>
      <div>
         <span className="blur-text-8">{text}</span> 
         <Badge type="success" label={<>
            <Icon type="FontAwesome" name="fa-check" size={12} /> Verified
         </>} size="12" style={{ marginLeft:'5px' }} />
      </div>
     </>);
};

export default BlurDetails;