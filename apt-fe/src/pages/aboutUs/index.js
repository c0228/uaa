import React from "react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu2 } from '@Config/HeaderMenu2.js';

const Aboutus = () => {
return(<>
<div className="mtop15p">
  <Header menulinks={HeaderMenu2} activeId="AboutUs" /> 
  </div>
</>);
};

export default Aboutus;