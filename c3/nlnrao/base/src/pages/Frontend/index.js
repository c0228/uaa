import React, { useState } from "react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import FeHeader from "./components/fe-header/index.js";

const Frontend = () =>{
 return (<div>
  <Header menulinks={HeaderMenu} activeId="Frontend" />
  <FeHeader />
 </div>);
};



export default Frontend;