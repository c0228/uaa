import React, { useEffect } from "react";
import { Nav, Icon } from "e-ui-react";
import { AppColors } from "@Utils/AppColors.js";
import useAuth from "@Hooks/useAuth/index.js";

const Header1 = ()=>{
 const { userDetails } = useAuth();
 useEffect(()=>{
   console.log("userDetails [Header2]: ", userDetails?.profilePic);
 },[]);
 return ( <nav className="navbar navbar-expand-sm" 
   style={{ backgroundColor:'#fff', zIndex:2, boxShadow:'1px 1px 1px 1px #ccc' }}>
 <div className="container-fluid">

   <div align="center" style={{ fontFamily: 'BloomsFree', fontSize:'22px', letterSpacing:'3px' }}>
      <span style={{ color:'#000' }}>my</span>
      <span style={{ color:'#000' }}>local</span>
      <span style={{ color:'#000' }}>hook</span>
   </div>

   <div className="d-flex">
      <div style={{ marginTop:'5px' }}>
      <div style={{ borderBottom:'2px solid '+AppColors?.primary, paddingBottom:'2px' }}>
         <Icon type="FontAwesome" name="fa-home" size={14} color={AppColors?.primary} style={{ marginRight:'5px' }} /> 
         <span style={{ color: AppColors?.primary }}><b>Home</b></span>
      </div>
      </div>
   </div>
   <div className="d-flex">
      <div>
         <img src={userDetails?.profilePic}  referrerPolicy="no-referrer" 
            style={{ width:'30px', height:'30px', borderRadius:'50%', border:'2px solid #555' }} />
         <Icon type="FontAwesome" name="fa-caret-down" size={14} color="#555" style={{ marginLeft:'5px' }} />   
      </div>
   </div>
 </div>
</nav>);
};

export default Header1;