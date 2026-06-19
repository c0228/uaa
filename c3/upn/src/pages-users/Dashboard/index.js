import React, { useState, useEffect } from "react";
import { SideWrapperNavbar, SideWrapperPage, SideWrapperMenu, SideWrapperHeader, SideWrapperBody,
Icon, ContainerFluid, Row, Col } from "e-ui-react";
import AdminSideWrapperMenu from "@Components/admin-sidewrapper-menu/index.js";
import { AppColors } from "@Utils/AppColorManager.js";

const Dashboard = () =>{
 useEffect(()=>{
    document.body.style.backgroundColor='#f6f6f9';
 },[]);
 return (<div>
    <AdminSideWrapperMenu>
        Test
    </AdminSideWrapperMenu>
 </div>);
};

export default Dashboard;