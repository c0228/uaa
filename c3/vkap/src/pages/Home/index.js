import React, { useState, useEffect } from "react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Routes/NavbarList.js';
import { useAuth } from "@Provider/AuthProvider";

const Home = ()=>{
 const { logout } = useAuth();
 useEffect(()=>{
    document.title = 'My Dashboard | VKAbroad';
    document.body.style.backgroundImage = "none";
 },[]);
 return (<>
 <Header menulinks={HeaderMenu()} activeId="Home" />

 <span onClick={()=>logout('/')}>Logout</span>
 Home Page</>);
};

export default Home;