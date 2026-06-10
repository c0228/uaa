import React from "react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@AppRoutes/NavbarList.js';

const Menu = ()=>{
 return (<>
 <Header menulinks={HeaderMenu()} activeId="Menu" />
 Menu Page
 </>);
};

export default Menu;