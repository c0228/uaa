import React from "react";
import { Nav } from "e-ui-react";

const Header3 = ()=>{
 return ( <nav className="navbar navbar-expand-sm" style={{ zIndex:2,
    borderBottom:'1px solid #ccc', boxShadow:'1px 1px 1px 1px #808080' }}>
 <div className="container-fluid">

   <div align="center" style={{ fontFamily: 'BloomsFree', fontSize:'28px', letterSpacing:'3px' }}>
      <span style={{ color:'#000' }}>my</span>
      <span style={{ color:'#000' }}>local</span>
      <span style={{ color:'#000' }}>hook</span>
      <span style={{ position:'absolute', fontFamily:'Arial', fontSize:'11px', letterSpacing:'0.7px', 
          border:'1px solid #000', padding:'3px 6px', borderRadius:'6px', backgroundColor:'#000', color:'#fff' }}><b>HELP CENTER</b></span>
   </div>

   <div className="d-flex">

   </div>
 </div>
</nav>);
};

export default Header3;