import React from "react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';

const Blogs = ()=>{
 return (<>
 <Header menulinks={HeaderMenu} activeId="Blogs" />
 Menu Page
 </>);
};

export default Blogs;