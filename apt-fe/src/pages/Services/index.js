import React from "react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu2 } from '@Config/HeaderMenu2.js';

const Services = () =>{
    return(<>
    <div className="mtop15p">
  <Header menulinks={HeaderMenu2} activeId="Services" /> 
  </div>
    </>);
};

export default Services;