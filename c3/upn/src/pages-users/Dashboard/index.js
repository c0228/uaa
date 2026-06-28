import React, { useState, useEffect } from "react";
import { useParams  } from "react-router-dom";
import { Icon, ContainerFluid, Row, Col, getAppContext } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@AppRoutes/NavbarList.js';
import { AppColors } from "@Utils/AppColorManager.js";

const Dashboard = () =>{
 const appContext = getAppContext();
 const isLogged = appContext?.contextData?.isLogged || false;
 const { lang } = useParams();
 return (<div className="fs22p">
   <Header menulinks={HeaderMenu(lang,isLogged)} activeId="Dashboard" />
    
 </div>);
};

export default Dashboard;