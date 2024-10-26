import React from "react";
import Header from '@Templates/Header/index.js';
import Footer from '@Templates/Footer/index.js';
import { HeaderMenu } from '@Routes/NavbarList.js';

const ManageBlogs = () =>{
 return (<div>
  <Header menulinks={HeaderMenu()} activeId="ManageBlogs" />

  <Footer />
 </div>);
};

export default ManageBlogs;