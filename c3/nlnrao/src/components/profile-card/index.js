import React, { useState, createContext } from "react";
import BasicInfo from "./components/basic-info/index.js";
import BasicFooter from "./components/basic-footer/index.js";
import Resume from "./components/resume/index.js";
import './index.css';

export const ProfileContext = createContext();

const ProfileCard = () =>{
 const [resumeVal, setResumeVal] = useState('0%');

 const updateResumeStatus = (status)=>{
   let pageTitle = 'NellutlaLNRao | My Tech';
   if(status ==='open'){
	   pageTitle = "NellutlaLNRao | My Resume";
   }
   document.title = pageTitle;
   setResumeVal( ((status ==='open')?'100%':'0%') );
   document.body.style.overflow = (status ==='open')?'hidden':'scroll';
 };
 
 return (<ProfileContext.Provider value={{ resumeVal, updateResumeStatus }}>
   {/* <div className="list-group">
        <div className="list-group-item mtop15p">*/}

        
 <div className="resume-profile-card mtop15p mbot15p" style={{ 
    paddingTop:'15px', paddingBottom:'15px', paddingLeft:'10px', paddingRight:'10px', borderRadius:'10px' }}>
  <BasicInfo />
  <BasicFooter />
 </div>

 {/*</div>
    </div>*/}
 <Resume />
 </ProfileContext.Provider>);
};

export default ProfileCard;