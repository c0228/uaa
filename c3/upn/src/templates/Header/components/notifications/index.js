import React, { useState } from "react";
import { Icon } from "e-ui-react";

const Notifications = () =>{    
 const [notifyHover, setNotifyHover] = useState(false);
 return (<div className="d-flex" style={{ marginLeft:'5px' }}>
    <div style={{ marginLeft:'5px', marginRight:'5px' }}>
        <Icon type="FontAwesome" name={"fa-bell-o"} size={16} style={{ padding:'5px', border:'2px solid #ccc', 
            borderRadius:'50%'}} />
    </div>
 </div>);
};

export default Notifications;