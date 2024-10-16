import React from "react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';

const Blogs = ()=>{
 const Title = () =>{
  return (<div align="center" style={{ backgroundColor:'#000040', color:'#fff', padding:'15px' }}>
   <h4 style={{ textTransform:'uppercase', marginTop:'6px', fontSize:'23px', fontFamily:'MetropolisBold' }}>
    <b>Blogs</b>
   </h4>
  </div>);
 };
 return (<>
 <Header menulinks={HeaderMenu} activeId="Blogs" />
 Menu Page
 </>);
};

export default Blogs;