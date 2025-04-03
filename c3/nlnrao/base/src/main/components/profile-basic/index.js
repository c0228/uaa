import React from "react";
import { Button, Icon, getAppContext } from "e-ui-react";
import './index.css';

const ProfileBasic = () =>{
 const { setContextData } = getAppContext();
 return (<div>
     <div className="mtop15p mbot15p" style={{ 
    paddingTop:'15px', paddingBottom:'15px', paddingLeft:'10px', paddingRight:'10px', borderRadius:'10px' }}>
  {/* Basic Profile ::: START */}
  <div align="center">
    <img src={process.env.PROJECT_MAIN_URL+'assets/profile.png'} 
        className="resume-profile-card-pic" />
    <div className="resume-profile-card-title"><b>NELLUTLA L N RAO</b></div>
    <div className="resume-profile-card-subtitle"><b>Full Stack Developer Engineer</b></div>
    <div className="resume-profile-card-div-desc">
    Over 11+ years of experience, specializing in 
    developing applications on Web, Mobile & Desktop Platforms, with a versatile skill set & a deep understanding 
    of software development principles, I excel in delivering high-quality solutions that meet the diverse needs of 
    clients & users alike.   
   </div>
   </div>
   {/* Basic Profile ::: END */}
   {/* Footer ::: START */}
   <div align="right">
    <Button type="outline-dark" style={{ marginTop:'6px', marginRight:'5px' }} size={12}
      onClick={()=>setContextData({ resumeStatus: 'open' })}>
      <b>Explore more</b>
      <Icon type="FontAwesome" name="fa-arrow-right" size={13} style={{ marginLeft:'8px' }} />
    </Button>
   </div>
   {/* Footer ::: END */}
 </div>
 </div>);
};

export default ProfileBasic;