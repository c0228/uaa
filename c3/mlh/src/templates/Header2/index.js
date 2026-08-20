import React from "react";
import { Nav } from "e-ui-react";

const Header2 = ()=>{
 return ( <nav className="navbar navbar-expand-sm" style={{ zIndex:2,
    borderBottom:'1px solid #ccc', boxShadow:'1px 1px 1px 1px #808080' }}>
 <div className="container-fluid">

    <div align="center" style={{ fontFamily: 'BloomsFree', fontSize:'28px', letterSpacing:'3px' }}>
        <span style={{ color:'#000' }}>my</span>
        <span style={{ color:'#000' }}>local</span>
        <span style={{ color:'#000' }}>hook</span>
    </div>

 </div>
</nav>);
};

export default Header2;