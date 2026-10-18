import React, { useEffect } from "react";
import { Nav } from "e-ui-react";
import useAuth from "@Hooks/useAuth/index.js";

const Header3 = ()=>{
 const { userDetails } = useAuth();
 useEffect(()=>{
   console.log("userDetails [Header2]: ", userDetails?.profilePic);
 },[]);
 return ( <nav className="navbar navbar-expand-sm" style={{ zIndex:2, borderBottom:'1px solid #ccc', 
   boxShadow:'1px 1px 1px 1px #808080' }}>
 <div className="container-fluid">

   <div align="center" style={{ fontFamily: 'BloomsFree', fontSize:'28px', letterSpacing:'3px' }}>
      <span style={{ color:'#000' }}>my</span>
      <span style={{ color:'#000' }}>local</span>
      <span style={{ color:'#000' }}>hook</span>
   </div>

   <div className="d-flex">
      <div><img src={userDetails?.profilePic}  referrerPolicy="no-referrer" 
         style={{ width:'35px', height:'35px', borderRadius:'50%', border:'2px solid #555' }} /></div>
   </div>
 </div>
</nav>);
};

export default Header3;