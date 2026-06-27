import React, { useState } from "react";
import { Icon, Badge } from "e-ui-react";
import Dropdown from "@Components/dropdown-menu/index.js";

const Notifications = () =>{    
 const [notifyHover, setNotifyHover] = useState(false);
 const DayTitle = ({ label }) =>{
    return (<div style={{ paddingLeft:'5px', paddingBottom:'5px' }}><span style={{ color:'#888' }}><b>{label}</b></span></div>);
 };
 const NotificationView = () =>{
    return (<div style={{ border:'1px solid #ccc', padding:'8px' }}>
        <div style={{ display:'flex', flex:1 }}>
            <div style={{ width:'22%', justifyContent:'center', alignItems:'center',
                display:'flex'
             }}>
                <Icon type="FontAwesome" name="fa-calendar" size={18} 
                style={{ padding:'10px', backgroundColor:'#ccc', borderRadius:'50%' }} />
            </div>
            <div style={{ width:'78%' }}>
                <div>Scania R450 (NG001) engine overheating.</div>
            </div>
        </div>
        <div align="right" style={{ color:'#aaa' }}>
             <Icon type="FontAwesome" name="fa-clock-o" size={12} style={{ marginRight:'5px' }} />
            5 mins ago</div>
    </div>);
 };
 return (<div className="d-flex" style={{ marginLeft:'5px' }}>
    <div style={{ marginLeft:'5px', marginRight:'5px' }}>
        <Dropdown dropDownPosition={{ width:'300px', marginTop:'3px', position:'absolute', right:'0%' }}  list={[
            (<div style={{ paddingLeft:'9px'}}>
                <div><span style={{ fontSize:'13px' }}>
                <b>Notifications</b>
                <Badge type="success" label={<b>6</b>} size="12" style={{ marginLeft:'5px' }} />
                </span></div>
            </div>),
            (<div style={{ maxHeight:'300px', paddingTop:'5px',
                 overflowY:'auto', fontSize:'12px', border:'1px solid #ccc' }}>
                <DayTitle label="Today" />
                <NotificationView />
                <NotificationView />
                <NotificationView />
                <NotificationView />
                <NotificationView />
                <NotificationView />
                <NotificationView />
                <NotificationView />
                <NotificationView />
            </div>),
            (<div style={{ padding:'9px'}}>
                <div align="center" style={{ fontSize:'13px', cursor:'pointer' }}>
                    <b>View All Notifications</b>
                </div>
            </div>),
        ]}>
            <Icon type="FontAwesome" name={"fa-bell-o"} size={16} style={{ padding:'5px', border:'2px solid #ccc', 
                borderRadius:'50%'}} />
        </Dropdown>
    </div>
 </div>);
};

export default Notifications;