import React, { useState, useEffect } from "react";
import { useParams  } from "react-router-dom";
import { Icon, ContainerFluid, Row, Col } from "e-ui-react";
import AspirantsSideWrapperMenu from "@Components/sidewrapper-menu-aspirants/index.js";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@AppRoutes/NavbarList.js';
import { AppColors } from "@Utils/AppColorManager.js";
import { GetUserProfile } from "@Services/AuthManager.js";
import { useAuth } from "@Hooks/useAuth.js";

const Dashboard = () =>{
 const { userDetails, isLogged, lang } = useAuth();
 if(!isLogged) {
     window.location.href = process.env.PROJECT_URL+lang+'/home';
 } else {
    return (<AspirantsSideWrapperMenu>
    <div className="fs22p">
      
    </div>
    </AspirantsSideWrapperMenu>);
 }
};

export default Dashboard;