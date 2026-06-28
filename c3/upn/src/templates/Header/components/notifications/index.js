import React, { useState } from "react";
import { Icon, Badge } from "e-ui-react";
import Dropdown from "@Components/dropdown-menu/index.js";
import { getTimeDifference } from "@Utils/DateFormatUtils.js";
import notificationData from "./data.json";
import './index.css';

const Notifications = () =>{ 
 const [notifyHover, setNotifyHover] = useState(false);
 const DayTitle = ({ label }) =>{
    return (<div style={{ paddingLeft:'5px', paddingBottom:'5px' }}><span style={{ color:'#888' }}><b>{label}</b></span></div>);
 };
 const NotificationView = ({ data }) =>{
    return (<div style={{ border:'1px solid #ccc', padding:'8px' }}>
        <div style={{ display:'flex', flex:1 }}>
            <div style={{ width:'22%', justifyContent:'center', alignItems:'center',
                display:'flex'
             }}>
                <Icon type="FontAwesome" name={data?.icon} size={18} 
                style={{ padding:'10px', backgroundColor:'#ccc', borderRadius:'50%' }} />
            </div>
            <div style={{ width:'78%' }}>
                <div>{data?.label}</div>
            </div>
        </div>
        <div align="right" style={{ color:'#aaa' }}>
             <Icon type="FontAwesome" name="fa-clock-o" size={12} style={{ marginRight:'5px' }} />
             <span>{getTimeDifference(data?.timestamp)}</span>
        </div>
    </div>);
 };
 return (<div className="d-flex" style={{ marginLeft:'5px' }}>
    <div style={{ marginLeft:'5px', marginRight:'5px' }}>
        <Dropdown dropDownPosition={{ width:'300px', marginTop:'3px', position:'absolute', right:'0%' }}  list={[
            (<div style={{ paddingLeft:'9px'}}>
                <div><span style={{ fontSize:'13px' }}>
                <b>Notifications</b>
                <Badge type="success" label={<b>{notificationData?.count}</b>} size="12" style={{ marginLeft:'5px' }} />
                </span></div>
            </div>),
            (<div style={{ maxHeight:'300px', paddingTop:'5px',
                 overflowY:'auto', fontSize:'12px', border:'1px solid #ccc' }}>
                {Object.keys(notificationData?.data)?.map((k,i1)=>{
                    return (<div key={i1}>
                        <DayTitle label={k} />
                        {notificationData?.data?.[k]?.map((d,i2)=>{
                            return (<NotificationView key={i2} data={d} />);
                        })}
                    </div>);
                })}
            </div>),
            (<div style={{ padding:'9px'}}>
                <div align="center" style={{ fontSize:'13px', cursor:'pointer' }}>
                    <b>View All Notifications</b>
                </div>
            </div>),
        ]}>
            <span className="upn-user-profile-notification-bell-icon-section">
                <span className="upn-user-profile-notification-bell-icon">
                <Icon type="FontAwesome" name="fa-bell-o" size={20} color="#000" />
                </span>
                {notificationData?.count > 0 && 
                (<span className="upn-user-profile-notification-bell-count-display">{notificationData.count}</span>)}
            </span>
        </Dropdown>
    </div>
 </div>);
};

export default Notifications;