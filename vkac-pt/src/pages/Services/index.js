import React from "react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';

const Services = ()=>{
 return (<>
 <Header menulinks={HeaderMenu} activeId="Services" />
 Menu Page
 </>);
};

export default Services;