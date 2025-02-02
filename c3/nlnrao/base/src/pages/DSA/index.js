import React from "react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';

const DSA = () =>{
 return (<div>
  <Header menulinks={HeaderMenu} activeId="DSA" />
 </div>);
};

export default DSA;