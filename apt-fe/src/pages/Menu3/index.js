import React from "react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import Header1 from './components/Component1/Header1/index.js';
import Component1 from './components/Component1/index.js';

const Menu3 = ()=>{
 return (<>
  <Header menulinks={HeaderMenu} activeId="Menu3" />
  <Header1 />
  <Component1 />

 </>);
};

export default Menu3;