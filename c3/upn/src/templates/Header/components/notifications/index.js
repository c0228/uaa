import React, { useState } from "react";
import { Icon, Badge } from "e-ui-react";
import Dropdown from "@Components/dropdown-menu/index.js";

const Notifications = () =>{    
 const [notifyHover, setNotifyHover] = useState(false);
 return (<div className="d-flex" style={{ marginLeft:'5px' }}>
    <div style={{ marginLeft:'5px', marginRight:'5px' }}>
        <Dropdown dropDownPosition={{ width:'300px', marginTop:'3px', position:'absolute', right:'0%' }}  list={[
            (<div>
                <span style={{ fontSize:'13px' }}>
                <b>Notifications</b>
                <Badge type="success" label={<b>6</b>} size="12" style={{ marginLeft:'5px' }} />
                </span>
            </div>)
        ]}>
            <Icon type="FontAwesome" name={"fa-bell-o"} size={16} style={{ padding:'5px', border:'2px solid #ccc', 
                borderRadius:'50%'}} />
        </Dropdown>
    </div>
 </div>);
};

export default Notifications;